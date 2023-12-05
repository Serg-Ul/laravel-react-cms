import React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter, Routes, RouterProvider } from 'react-router-dom';
import './index.scss';
import router from './router';
import { Provider } from 'react-redux';
import store from './store';
// import 'react-toastify/dist/ReactToastify.css';
import { SnackbarProvider } from 'notistack';
// import { SignIn } from '@/pages/auth';
// import PrimaryLayout from '@/components/layouts/PrimaryLayout/PrimaryLayout';
// import AuthLayout from '@/components/layouts/AuthLayout/AuthLayout';

const root = (
  // <React.StrictMode>
  <Provider store={store}>
    <SnackbarProvider>
      <RouterProvider router={router} />
    </SnackbarProvider>
    {/*<BrowserRouter>*/}
    {/*  <Routes>*/}
    {/*    <Route*/}
    {/*      path="/"*/}
    {/*      element={<PrimaryLayout />}*/}
    {/*    >*/}
    {/*      <Route*/}
    {/*        index*/}
    {/*        element={<h1>Home</h1>}*/}
    {/*      />*/}
    {/*    </Route>*/}
    {/*    <Route*/}
    {/*      path="/auth"*/}
    {/*      element={<AuthLayout />}*/}
    {/*    >*/}
    {/*      <Route*/}
    {/*        path="login"*/}
    {/*        element={<SignIn />}*/}
    {/*      />*/}
    {/*    </Route>*/}
    {/*  </Routes>*/}
    {/*</BrowserRouter>*/}
  </Provider>
  // </React.StrictMode>
);

createRoot(document.getElementById('root') as HTMLElement).render(root);
