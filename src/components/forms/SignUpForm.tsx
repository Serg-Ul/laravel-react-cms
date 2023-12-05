import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { defaultValues, validationSchema } from '@/components/forms/SignUpForm.validation';
import classes from '@/components/forms/SignInForm/SignInForm.module.scss';
import { TUserFormValues } from '@/types/users.types';

interface ISignUpFormProps {
  onSubmit: (data: TUserFormValues) => void;
  isLoading: boolean;
}

const SignUpForm: FC<ISignUpFormProps> = ({ onSubmit, isLoading }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    mode: 'onChange',
    defaultValues,
  });

  const isSubmitButtonDisabled = !isValid || !isDirty || isLoading;

  return (
    <div className={classes['sign-in-form-wrapper']}>
      <h1 className={classes['sign-in-form-title']}>Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classes['sign-in-form']}
      >
        <div className={classes['sign-in-form-input-wrapper']}>
          <input
            {...register('firstName')}
            className={classes['sign-in-form-input']}
            placeholder="First Name"
          />
          <div className={classes['sign-in-form-input-error']}>{errors.firstName?.message}</div>
        </div>
        <div className={classes['sign-in-form-input-wrapper']}>
          <input
            {...register('lastName')}
            className={classes['sign-in-form-input']}
            placeholder="Last Name"
          />
          <div className={classes['sign-in-form-input-error']}>{errors.lastName?.message}</div>
        </div>
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
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
