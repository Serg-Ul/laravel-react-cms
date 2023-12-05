import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '@/utils/axios';
import { TUser, TUserFormValues, TUserId, TUsers, TUserSignInValues } from '@/types/users.types';
import {
  USERS_ADD,
  USERS_EDIT,
  USERS_FETCH,
  USERS_FETCH_SINGLE,
  USERS_REMOVE,
  USERS_SIGN_IN,
} from '@/store/actions/users.actions';
import { hash } from '@/utils';

// DEV ONLY!!!
export const pause = (duration: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(resolve, duration);
  });

export const fetchUsers = createAsyncThunk(USERS_FETCH, async (): Promise<TUsers> => {
  const response = await Axios.get('users');

  return response.data;
});

export const fetchUserThunk = createAsyncThunk(USERS_FETCH_SINGLE, async (id: TUserId): Promise<TUser> => {
  const response = await Axios.get(`users/${id}`);

  return response.data;
});

export const signInUserThunk = createAsyncThunk(
  USERS_SIGN_IN,
  async (user: TUserSignInValues): Promise<TUser | never> => {
    const password = hash(user.password as string);
    const response = await Axios.get(`users?email=${user.email}&password=${password}`);

    if (response.data.length !== 1) {
      throw new Error('Invalid e-mail or password.');
    }

    return response.data[0];
  },
);

export const addUserThunk = createAsyncThunk(USERS_ADD, async (user: TUserFormValues): Promise<TUser> => {
  const existingUserResponse = await Axios.get('users', {
    params: {
      email: user.email,
    },
  });

  if (existingUserResponse.data.length) {
    throw new Error('The user with this email already exists');
  }

  const newUser = {
    ...user,
    password: hash(user.password as string),
  };

  const response = await Axios.post('users', newUser);

  return response.data;
});

export const editUser = createAsyncThunk(USERS_EDIT, async (user: TUser): Promise<TUser> => {
  const response = await Axios.put(`users/${user.id}`, user);

  return response.data;
});

export const removeUser = createAsyncThunk(USERS_REMOVE, async (id: TUserId): Promise<TUserId> => {
  await Axios.delete(`users/${id}`);

  return id;
});
