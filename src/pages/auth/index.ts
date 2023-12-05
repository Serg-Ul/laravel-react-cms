import { lazy } from 'react';

const SignIn = lazy(() => import('@/pages/auth/SignIn'));
const SignUp = lazy(() => import('@/pages/auth/SignUp'));

export { SignIn, SignUp };
