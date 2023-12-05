import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/users.slice';
import postsApi from '@/store/apis/postsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
// import postsReducer from './slices/posts.slice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    // posts: postsReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export * from './thunks/users.thunk';
// export * from './thunks/posts.thunk';

export { resetState } from './slices/users.slice';

export {
  useFetchPostsQuery,
  useAddPostMutation,
  useRemovePostMutation,
  useUpdatePostMutation,
  useFetchPostQuery,
} from './apis/postsApi';

export default store;
