import { lazy } from 'react';

const HomeAdmin = lazy(() => import('@/pages/admin/HomeAdmin'));

export * from './posts/index';
export * from './users/index';
export { HomeAdmin };
