import React, { FC, PropsWithChildren } from 'react';

const PrimaryLayout: FC = (props: PropsWithChildren) => {
  const { children } = props;

  return <>PrimaryLayout{children}</>;
};

export default PrimaryLayout;
