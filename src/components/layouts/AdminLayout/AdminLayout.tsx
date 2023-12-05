import React, { FC, Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../../common/HeaderAdmin/HeaderAdmin';
import { Toaster } from 'react-hot-toast';
import PrivateRoute from '@/utils/hocs/PrivateRoute';
import { useSessionStorage } from 'usehooks-ts';
import { AuthRoutes } from '@/config/routes';

const AdminLayout: FC = () => {
  const [user, setUser] = useSessionStorage('user', null);

  return (
    <PrivateRoute
      condition={user}
      navigateTo={`/${AuthRoutes.auth}/${AuthRoutes.signIn}`}
    >
      <HeaderAdmin />
      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Outlet />
        </Suspense>
        <Toaster />
      </main>
    </PrivateRoute>
  );
};

export default AdminLayout;
