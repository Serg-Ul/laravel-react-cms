import * as Yup from 'yup';

const emailRequiredError = 'Please fill in the email.';
const emailFormatError = 'Wrong email format.';
const passwordRequiredError = 'Please fill in the password.';
const passwordMinMatchesError =
  'The password is not secure enough. It must contain at least 10 characters, including one upper case, one lower case and one number.';
export const validationSchema = Yup.object().shape({
  email: Yup.string().required(emailRequiredError).email(emailFormatError),
  password: Yup.string()
    .required(passwordRequiredError)
    .min(10, passwordMinMatchesError)
    .matches(/[a-zA-Z0-9]/, passwordMinMatchesError),
});
export const defaultValues = {
  email: '',
  password: '',
};
