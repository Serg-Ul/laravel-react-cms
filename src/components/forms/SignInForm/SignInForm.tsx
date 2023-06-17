import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { defaultValues, validationSchema } from './SignInForm.validation';
import { yupResolver } from '@hookform/resolvers/yup';
import { TSignInFormSubmitHandlerProps } from './SignInForm.types';
import classes from './SignInForm.module.scss';

const SignInForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid, isDirty, isSubmitting },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const isSubmitButtonDisabled = !isValid || !isDirty || isSubmitting;

  const handleFormSubmit: SubmitHandler<TSignInFormSubmitHandlerProps> = data => {
    const { email, password } = data;

    console.log(data);
    console.log(errors);
    console.log(dirtyFields);
    console.log(isDirty);
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
