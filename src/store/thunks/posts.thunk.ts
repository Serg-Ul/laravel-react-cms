import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '@/utils/axios';
import { TPosts } from '@/types/posts.types';

const fetchPosts = createAsyncThunk<TPosts>('posts/fetchAll', async () => {
  const response = await Axios.get('posts');

  return response.data;
});

export { fetchPosts };
