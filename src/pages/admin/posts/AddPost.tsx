import React, { FC } from 'react';
import { Field, Form, Formik, FormikHelpers } from 'formik';
import { initialValues } from '@/components/forms/admin/PostsForm/PostsForm.validation';
import classes from '@/components/forms/admin/UsersForm/UsersForm.module.scss';
import Container from '@/components/common/Container/Container';
import { IPost } from '@/types/posts.types';
import { useAddPostMutation } from '@/store';
import { useNavigate } from 'react-router';

const AddPost: FC = () => {
  const [addPost, { isLoading }] = useAddPostMutation();
  const navigate = useNavigate();

  const handleSubmit = (values: IPost, { resetForm }: FormikHelpers<IPost>): void => {
    addPost(values);
    navigate('/admin/posts');
    resetForm();
  };

  return (
    <div>
      <Container>
        <Formik
          onSubmit={handleSubmit}
          initialValues={initialValues}
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
              <button type="submit">Add</button>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default AddPost;
