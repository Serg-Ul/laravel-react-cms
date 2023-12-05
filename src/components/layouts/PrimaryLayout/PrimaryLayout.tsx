import React, { FC, PropsWithChildren } from 'react';
import { Outlet } from 'react-router-dom';

// const PrimaryLayout: FC = (props: PropsWithChildren) => {
//   const { children } = props;
//
//   return <>PrimaryLayout{children}</>;
// };

// With Outlet
const PrimaryLayout: FC = () => (
  <>
    <Outlet />
  </>
);

export default PrimaryLayout;
