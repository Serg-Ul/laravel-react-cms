import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { defaultValues, validationSchema } from './SignInForm.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import classes from './SignInForm.module.scss';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { TUserSignInValues } from '@/types/users.types';
import { resetState, signInUserThunk } from '@/store';
import { useSnackbar } from 'notistack';
import { useDebounce } from 'usehooks-ts';
import { useNavigate } from 'react-router';
import { AdminRoutes } from '@/config/routes';

const SignInForm: FC = () => {
  const { isSuccess, error, isLoading } = useAppSelector(state => state.users);
  const dispatch = useAppDispatch();
  // const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const debouncedSuccess = useDebounce(isSuccess, 500);
  const debouncedError = useDebounce(error, 500);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const isSubmitButtonDisabled = !isValid || !isDirty || isLoading;

  useEffect(() => {
    if (debouncedError) {
      enqueueSnackbar(debouncedError.message);
    }
  }, [debouncedError, enqueueSnackbar]);

  useEffect(() => {
    if (debouncedSuccess) {
      dispatch(resetState());
      navigate(`/${AdminRoutes.admin}`);
    }
  }, [dispatch, debouncedSuccess, navigate]);

  const handleFormSubmit: SubmitHandler<TUserSignInValues> = data => {
    dispatch(signInUserThunk(data));
  };

  return (
    <div className={classes['sign-in-form-wrapper']}>
      <h1 className={classes['sign-in-form-title']}>Sign In</h1>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className={classes['sign-in-form']}
      >
        <div className={classes['sign-in-form-input-wrapper']}>
          <input
            {...register('email')}
            className={classes['sign-in-form-input']}
            placeholder="E-mail"
          />
          <div className={classes['sign-in-form-input-error']}>{errors.email?.message}</div>
        </div>
        <div className={classes['sign-in-form-input-wrapper']}>
          <input
            {...register('password')}
            className={classes['sign-in-form-input']}
            placeholder="Password"
          />
          <div className={classes['sign-in-form-input-error']}>{errors.password?.message}</div>
        </div>
        <button
          type="submit"
          disabled={isSubmitButtonDisabled}
          className={classes['sign-in-form-submit-btn']}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
