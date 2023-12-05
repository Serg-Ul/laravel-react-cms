import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { fetchPosts } from '@/store';
import { TPosts } from '@/types/posts.types';

const name = 'posts';
const initialState: TPosts = [];

const postsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<TPosts>) => action.payload);
  },
});

export default postsSlice.reducer;
