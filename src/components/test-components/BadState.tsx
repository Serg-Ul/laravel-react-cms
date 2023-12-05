import React, { FC, memo, useEffect, useState } from 'react';

const BadState: FC = () => {
  const [badState, setBadState] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setBadState(prev => prev + 0.1);
    }, 1000);
  }, []);

  return <h1 style={{ padding: '20px' }}>{badState}</h1>;
};

export default memo(BadState);
