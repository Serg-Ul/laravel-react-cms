import React, { FC } from 'react';
import classes from './Users.module.scss';
import Container from '@/components/common/Container/Container';
import UsersForm from '@/components/forms/admin/UsersForm/UsersForm';
import { addUserThunk } from '@/store';
import { TUserFormValues } from '@/types/users.types';
import { FormikHelpers } from 'formik';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { useNavigate } from 'react-router';
import { AdminRoutes } from '@/config/routes';

const buttonText = 'Add';

const AddUser: FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values: TUserFormValues, { resetForm }: FormikHelpers<TUserFormValues>): void => {
    dispatch(addUserThunk(values));
    navigate(`/${AdminRoutes.admin}/${AdminRoutes.users}`);
    resetForm();
  };

  return (
    <div className={classes['users']}>
      <Container>
        <h1>Add user</h1>
        <div className={classes['users-form-wrapper']}>
          <UsersForm
            buttonText={buttonText}
            onSubmit={handleSubmit}
          />
        </div>
      </Container>
    </div>
  );
};

export default AddUser;
