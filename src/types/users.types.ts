import { SerializedError } from '@reduxjs/toolkit';

export type TUserIdObj = {
  id: number;
};
export type TUserFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string | number;
};
export type TUser = TUserIdObj & TUserFormValues;
export type TUsers = TUser[];
export type TUserId = TUser['id'];
export type TUserInitialState = {
  isLoading: boolean;
  isSuccess: boolean;
  error: null | SerializedError;
  usersList: TUsers;
  user: object;
};
export type TUserSignInValues = {
  email: string;
  password: string | number;
};
