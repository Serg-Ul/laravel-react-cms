import React, { FC, PropsWithChildren } from 'react';
import classes from './SignInLayout.module.scss';

const SignInLayout: FC = (props: PropsWithChildren) => {
  const { children } = props;

  return <div className={classes['sign-in-layout']}>{children}</div>;
};

export default SignInLayout;
