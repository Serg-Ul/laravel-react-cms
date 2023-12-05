import React, { FC, useEffect } from 'react';
import Container from '@/components/common/Container/Container';
import classes from './Users.module.scss';
import { fetchUsers, removeUser } from '@/store';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { TUserId } from '@/types/users.types';
import { Link } from 'react-router-dom';
import useThunk from '@/hooks/redux/useThunk';

const UsersList: FC = () => {
  const [doFetchUsers, isUsersLoading, usersLoadingError] = useThunk(fetchUsers);
  const [doRemoveUser, isUserRemoving, userRemovingError, usersRemovingSuccess] = useThunk(removeUser);
  const { usersList } = useAppSelector(state => state.users);

  useEffect(() => {
    doFetchUsers();
  }, [doFetchUsers]);

  const handleRemoveUser = (id: TUserId): void => {
    doRemoveUser(id);
  };

  if (usersRemovingSuccess) {
    // toast('Here is your toast.');
    // setSuccess(false);
  }

  return (
    <div className={classes['users']}>
      <Container>
        {isUsersLoading ? (
          'Loading...'
        ) : (
          <div className={classes['users-list']}>
            {usersList.map(user => (
              <div
                key={user.id}
                className={classes['users-list-item']}
              >
                {isUserRemoving ? 'Removing...' : <FaTrash onClick={() => handleRemoveUser(user.id)} />}
                <Link to={`edit/${user.id}`}>
                  <FaEdit />
                </Link>
                <div className={classes['users-list-item-name']}>{user.firstName}</div>
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default UsersList;
