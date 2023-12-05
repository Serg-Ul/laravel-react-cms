import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  addUserThunk,
  editUser,
  fetchUserThunk,
  fetchUsers,
  removeUser,
  signInUserThunk,
} from '@/store/thunks/users.thunk';
import { TUser, TUserId, TUserInitialState, TUsers } from '@/types/users.types';

const initialState: TUserInitialState = {
  isLoading: false,
  isSuccess: false,
  error: null,
  usersList: [],
  user: {},
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetState: state => {
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<TUsers>) => {
      state.usersList = action.payload;
    });
    builder.addCase(removeUser.fulfilled, (state, action: PayloadAction<TUserId>) => {
      state.usersList = state.usersList.filter(user => user.id !== action.payload);
    });
    builder.addCase(addUserThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(addUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(addUserThunk.fulfilled, (state, action: PayloadAction<TUser>) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.usersList.push(action.payload);
    });
    builder.addCase(editUser.fulfilled, (state, action: PayloadAction<TUser>) => {
      state.usersList = state.usersList.filter(user => {
        if (user.id === action.payload.id) {
          return action.payload;
        }

        return user;
      });
      state.user = action.payload;
    });
    builder.addCase(fetchUserThunk.fulfilled, (state, action: PayloadAction<TUser>) => {
      state.user = action.payload;
    });
    builder.addCase(signInUserThunk.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signInUserThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(signInUserThunk.fulfilled, (state, action: PayloadAction<TUser>) => {
      state.isLoading = false;
      state.isSuccess = true;
      sessionStorage.setItem('user', JSON.stringify(action.payload));
    });
  },
});

export const { resetState } = usersSlice.actions;

export default usersSlice.reducer;
