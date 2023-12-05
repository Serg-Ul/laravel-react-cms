import React, { FC } from 'react';
import { initialValues, validationSchema } from './UsersForm.validation';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from '../../../../components/forms/admin/UsersForm/UsersForm.module.scss';
import { TUserFormValues } from '@/types/users.types';
import { isEmpty } from 'lodash';
import { TUsersFormProps } from '@/components/forms/admin/UsersForm/UsersForm.types';

const UsersForm: FC<TUsersFormProps> = ({ buttonText, initialEditValues = {}, onSubmit }) => {
  const defaultValues = isEmpty(initialEditValues) ? initialValues : initialEditValues;

  return (
    <Formik
      enableReinitialize
      initialValues={defaultValues as TUserFormValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ errors }) => (
        <Form>
          <div className={classes['users-input-wrapper']}>
            <Field
              name="name"
              className={classes['users-input']}
            />
          </div>
          <ErrorMessage name="name" />
          <button
            type="submit"
            disabled={!!Object.keys(errors).length}
          >
            {buttonText}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default UsersForm;
