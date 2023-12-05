import React, { FC, memo, useEffect, useState } from 'react';

const GoodState: FC = () => {
  const [badState, setBadState] = useState(0);

  useEffect(() => {
    console.log('Good State 1');
    const interval = setInterval(() => {
      setBadState(prev => prev + 0.1);
    }, 1000);

    return () => {
      console.log('Good State 2');
      clearInterval(interval);
    };
  }, []);

  return <h1 style={{ padding: '20px' }}>{badState}</h1>;
};

export default memo(GoodState);
