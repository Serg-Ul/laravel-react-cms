import React, { FC } from 'react';

const Home: FC = () => {
  const consoleSum = async (): Promise<void> => {
    const { sum2 } = await import('@/utils/sum');

    sum2();
  };

  return <h1>Home</h1>;
};

export default Home;
