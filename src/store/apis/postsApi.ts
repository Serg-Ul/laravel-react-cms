import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost, TPosts } from '@/types/posts.types';

const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4001/',
  }),
  tagTypes: ['Posts'],
  endpoints: builder => ({
    fetchPosts: builder.query<TPosts, void>({
      providesTags: result =>
        result
          ? [...result.map(({ id }) => ({ type: 'Posts' as const, id })), { type: 'Posts', id: 'LIST' }]
          : [{ type: 'Posts', id: 'LIST' }],
      query: () => ({
        url: 'posts',
        method: 'GET',
      }),
    }),
    fetchPost: builder.query<IPost, string | number | undefined>({
      providesTags: (result, error, id) => [{ type: 'Posts', id }],
      query: id => ({
        url: `posts/${id}`,
        method: 'GET',
      }),
    }),
    addPost: builder.mutation<null, IPost>({
      invalidatesTags: () => [{ type: 'Posts', id: 'LIST' }],
      query: post => ({
        url: 'posts',
        method: 'POST',
        body: {
          ...post,
          userId: 1,
        },
      }),
    }),
    updatePost: builder.mutation<null, IPost>({
      invalidatesTags: () => [{ type: 'Posts', id: 'LIST' }],
      query: post => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: {
          ...post,
        },
      }),
    }),
    removePost: builder.mutation<null, number>({
      invalidatesTags: () => [{ type: 'Posts', id: 'LIST' }],
      query: id => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useFetchPostsQuery,
  useAddPostMutation,
  useRemovePostMutation,
  useUpdatePostMutation,
  useFetchPostQuery,
} = postsApi;
export default postsApi;
