import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import router from './router';

const root = (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

createRoot(document.getElementById('root') as HTMLElement).render(root);
