import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import AdminLayout from '@/components/layouts/AdminLayout/AdminLayout';
import AuthLayout from '@/components/layouts/AuthLayout/AuthLayout';
import {
  Home,
  SignIn,
  HomeAdmin,
  Posts,
  AddPost,
  EditPost,
  ShowPost,
  UsersList,
  AddUser,
  EditUser,
  NotFound,
} from '@/pages';
import PrimaryLayout from '@/components/layouts/PrimaryLayout/PrimaryLayout';
import SignUp from '@/pages/auth/SignUp';
import { AdminRoutes, AuthRoutes, Routes } from '@/config/routes';

const router = createBrowserRouter([
  {
    path: `${Routes.home}`,
    element: <PrimaryLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/test',
        loader: () => fetch('http://localhost:4001/posts'),
        async lazy() {
          const { Test } = await import('@/pages/Test');

          return {
            Component: Test,
          };
        },
      },
    ],
  },
  {
    path: `/${AuthRoutes.auth}`,
    element: <AuthLayout />,
    children: [
      {
        path: `${AuthRoutes.signIn}`,
        element: <SignIn />,
      },
      {
        path: `${AuthRoutes.signUp}`,
        element: <SignUp />,
      },
    ],
  },
  {
    path: `${AdminRoutes.admin}`,
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <HomeAdmin />,
      },
      {
        path: `${AdminRoutes.users}`,
        children: [
          {
            index: true,
            element: <UsersList />,
          },
          {
            path: `${AdminRoutes.add}`,
            element: <AddUser />,
          },
          {
            path: `${AdminRoutes.edit}/:id`,
            element: <EditUser />,
          },
        ],
      },
      {
        path: `${AdminRoutes.posts}`,
        children: [
          {
            index: true,
            element: <Posts />,
          },
          {
            path: `${AdminRoutes.add}`,
            element: <AddPost />,
          },
          {
            path: `${AdminRoutes.edit}/:id`,
            element: <EditPost />,
          },
          {
            path: `${AdminRoutes.show}/:id`,
            element: <ShowPost />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
