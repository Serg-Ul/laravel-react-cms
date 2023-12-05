import React, { FC, memo } from 'react';
import { TTestComponentProps } from '@/pages/Test';

const Test2: FC<TTestComponentProps> = () => {
  console.log('rerendered Test 2');

  return <h1 style={{ padding: '20px' }}>Test 1</h1>;
};

export default memo(Test2);
