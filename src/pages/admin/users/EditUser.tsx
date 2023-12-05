import React, { FC, useEffect } from 'react';
import classes from './Users.module.scss';
import Container from '@/components/common/Container/Container';
import UsersForm from '@/components/forms/admin/UsersForm/UsersForm';
import { useParams } from 'react-router';
import { editUser, fetchUserThunk } from '@/store';
import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { TUser, TUserFormValues } from '@/types/users.types';
import useAppSelector from '@/hooks/redux/useAppSelector';

const buttonText = 'Edit';

const EditUser: FC = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const fetchedUser = useAppSelector(state => state.users.user);

  useEffect(() => {
    const id = parseInt(params.id as string);

    dispatch(fetchUserThunk(id));
  }, [dispatch, params]);

  const handleSubmit = (values: TUserFormValues): void => {
    const user = {
      ...fetchedUser,
      ...values,
    };

    dispatch(editUser(user as TUser));
  };

  return (
    <div className={classes['users']}>
      <Container>
        <h1>Edit user</h1>
        <div className={classes['users-form-wrapper']}>
          <UsersForm
            buttonText={buttonText}
            initialEditValues={fetchedUser as TUserFormValues}
            onSubmit={handleSubmit}
          />
        </div>
      </Container>
    </div>
  );
};

export default EditUser;
