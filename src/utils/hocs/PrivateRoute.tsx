import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { TUser } from '@/types/users.types';

type TPrivateRouteProps = {
  condition: null | TUser;
  navigateTo: string;
};

const PrivateRoute: FC<TPrivateRouteProps & PropsWithChildren> = ({ children, navigateTo, condition }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!condition) {
      navigate(navigateTo);
    }
  }, [navigate, navigateTo, condition]);

  return <>{children}</>;
};

export default PrivateRoute;
