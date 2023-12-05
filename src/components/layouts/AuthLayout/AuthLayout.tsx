import React, { FC, Suspense } from 'react';
import classes from './AuthLayout.module.scss';
import { Outlet } from 'react-router-dom';

const AuthLayout: FC = () => (
  <div className={classes['auth-layout']}>
    <Suspense fallback={<h1>Loading...</h1>}>
      <Outlet />
    </Suspense>
  </div>
);

export default AuthLayout;
