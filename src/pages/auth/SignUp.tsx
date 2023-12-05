import React, { FC, useEffect } from 'react';
import SignUpForm from '@/components/forms/SignUpForm';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router';
import { useDebounce } from 'usehooks-ts';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { addUserThunk, resetState } from '@/store';
import { SubmitHandler } from 'react-hook-form';
import { TUserFormValues } from '@/types/users.types';

const SignUp: FC = () => {
  const { isSuccess, error, isLoading } = useAppSelector(state => state.users);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const debouncedError = useDebounce(error, 500);
  const debouncedSuccess = useDebounce(isSuccess, 500);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (debouncedError) {
      enqueueSnackbar(debouncedError.message);
    }
  }, [debouncedError, enqueueSnackbar]);

  useEffect(() => {
    if (debouncedSuccess) {
      dispatch(resetState());
      navigate('/auth/sign-in');
    }
  }, [dispatch, debouncedSuccess, navigate]);

  const handleFormSubmit: SubmitHandler<TUserFormValues> = data => {
    dispatch(addUserThunk(data));
  };

  return (
    <SignUpForm
      onSubmit={handleFormSubmit}
      isLoading={isLoading}
    />
  );
};

export default SignUp;
