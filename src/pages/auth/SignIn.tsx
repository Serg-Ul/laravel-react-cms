import React, { FC } from 'react';
import SignInLayout from '../../components/layouts/SignInLayout/SignInLayout';
import withLayout from '../../utils/hocs/withLayout';
import SignInForm from '../../components/forms/SignInForm/SignInForm';

const SignIn: FC = () => <SignInForm />;

export default withLayout(SignIn, SignInLayout);
