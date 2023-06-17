import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages';
import NotFound from './pages/errors/404';
import SignIn from './pages/auth/SignIn';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <SignIn />,
  },
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
