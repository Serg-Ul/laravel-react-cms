import { useCallback, useState } from 'react';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { TUserId } from '@/types/users.types';
import { SerializedError } from '@reduxjs/toolkit';

const useThunk = (thunk): [(id?: TUserId) => void, boolean, null | SerializedError, boolean] => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<null | SerializedError>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const doThunk = useCallback(
    (id?: TUserId) => {
      setIsLoading(true);
      dispatch(thunk(id))
        .unwrap()
        .then(() => setSuccess(true))
        .catch((err: SerializedError) => setError(err))
        .finally(() => setIsLoading(false));
    },
    [dispatch, thunk],
  );

  return [doThunk, isLoading, error, success];
};

export default useThunk;
