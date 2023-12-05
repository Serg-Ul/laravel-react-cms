import { lazy } from 'react';

const Home = lazy(() => import('@/pages/Home'));

export * from './admin';
export * from './errors';
export * from './auth';
export { Home };
