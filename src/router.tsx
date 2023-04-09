import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Index from './pages';
import Login from './pages/auth/Login';

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    element: <Index />,
  },
]);

export default router;
