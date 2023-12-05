import React, { Dispatch, FC, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useLoaderData } from 'react-router';
import Test1 from '@/components/test-components/Test1';
import Test2 from '@/components/test-components/Test2';
import BadState from '@/components/test-components/BadState';
import GoodState from '@/components/test-components/GoodState';
const { Test3 } = await import('@/components/test-components/Test3');

export type TTestComponentProps = {
  test?: boolean;
  setTest?: Dispatch<SetStateAction<boolean>>;
  testCallback?: (param?: string) => void;
};

export const Test: FC = () => {
  const data = useLoaderData();
  const [test, setTest] = useState<boolean>(false);
  const [test2, setTest2] = useState<boolean>(false);

  const testCallback = useCallback(async (param?: string) => {
    const { sum } = await import('@/utils/sum');

    sum();
  }, []);

  useEffect(() => {
    console.log('Test page');
  }, [data]);

  return (
    <>
      <button onClick={() => testCallback()}>Console</button>
      <button onClick={() => setTest(prevState => !prevState)}>Rerender test</button>
      <button onClick={() => setTest2(prevState => !prevState)}>Rerender test 2</button>
      <br />
      <Test1
        test={test}
        setTest={setTest2}
        testCallback={testCallback}
      />
      <br />
      {/*<Test2 test={test} />*/}
      {/*{JSON.stringify(data)}*/}
      <br />
      {/*<BadState />*/}
      {/*<GoodState />*/}
      <Test3 />
    </>
  );
};
