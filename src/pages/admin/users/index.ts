import { lazy } from 'react';

const UsersList = lazy(() => import('@/pages/admin/users/UsersList'));
const AddUser = lazy(() => import('@/pages/admin/users/AddUser'));
const EditUser = lazy(() => import('@/pages/admin/users/EditUser'));

export { UsersList, AddUser, EditUser };
