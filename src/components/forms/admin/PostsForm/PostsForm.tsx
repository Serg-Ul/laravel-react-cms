import React, { FC } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { initialValues } from '@/components/forms/admin/PostsForm/PostsForm.validation';
import classes from '@/components/forms/admin/UsersForm/UsersForm.module.scss';
import { IPost } from '@/types/posts.types';

interface TPostsFormProps {
  onSubmit: (values: IPost) => void;
  filledInitialValues?: IPost;
  buttonText: string;
}

const PostsForm: FC<TPostsFormProps> = ({ onSubmit, filledInitialValues = initialValues, buttonText }) => (
  <Formik
    enableReinitialize
    onSubmit={onSubmit}
    initialValues={filledInitialValues}
  >
    {({ errors }) => (
      <Form>
        <div className={classes['users-input-wrapper']}>
          <Field
            className={classes['users-input']}
            name="title"
          />
        </div>
        <div className={classes['users-input-wrapper']}>
          <Field
            className={classes['users-input']}
            name="description"
          />
        </div>
        <button type="submit">{buttonText}</button>
      </Form>
    )}
  </Formik>
);

export default PostsForm;
