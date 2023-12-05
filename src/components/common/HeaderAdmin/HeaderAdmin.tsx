import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './HeaderAdmin.module.scss';
import classNames from 'clsx';
import Container from '../Container/Container';
import { useNavigate } from 'react-router';
import { AdminRoutes, AuthRoutes } from '@/config/routes';

const links = [
  {
    label: 'Panel',
    to: `/${AdminRoutes.admin}`,
    end: true,
  },
  {
    label: 'Users',
    to: `${AdminRoutes.users}`,
    end: true,
  },
  {
    label: 'Add User',
    to: `${AdminRoutes.users}/${AdminRoutes.add}`,
  },
  {
    label: 'Posts',
    to: `${AdminRoutes.posts}`,
    end: true,
  },
  {
    label: 'Add Post',
    to: `${AdminRoutes.posts}/${AdminRoutes.add}`,
  },
  {
    label: 'Profile',
    to: `${AdminRoutes.posts}/${AdminRoutes.add}`,
  },
];

const HeaderAdmin: FC = () => {
  const navigate = useNavigate();

  const handleClick = (): void => {
    sessionStorage.removeItem('user');
    navigate(`/${AuthRoutes.auth}/${AuthRoutes.signIn}`);
  };

  return (
    <div className={classes['header-admin']}>
      <Container>
        <nav className={classes['header-admin-menu']}>
          {links.map(link => (
            <NavLink
              key={link.label}
              to={link.to}
              className={({ isActive }) =>
                classNames(classes['header-admin-menu-item'], isActive && classes['active'])
              }
              end={link.end}
            >
              {link.label}
            </NavLink>
          ))}
          <button onClick={handleClick}>Log out</button>
        </nav>
      </Container>
    </div>
  );
};

export default HeaderAdmin;
