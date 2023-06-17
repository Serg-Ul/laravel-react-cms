import React, { FC, PropsWithChildren } from 'react';
import classes from './Container.module.scss';

const Container: FC<PropsWithChildren> = ({ children }) => (
  <div className={classes.container}>{children}</div>
);

export default Container;
