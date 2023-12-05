import * as Yup from 'yup';

const firstNameRequiredError = 'Please fill the First name.';
const lastNameRequiredError = 'Please fill the Last name.';
const emailRequiredError = 'Please fill the E-mail.';
const emailFormatError = 'Wrong e-mail format.';
const passwordRequiredError = 'Please fill the Password.';
const passwordMinMatchesError =
  'The password is not secure enough. It must contain at least 10 characters, including one upper case, one lower case and one number.';
export const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(emailRequiredError).email(emailFormatError),
  password: Yup.string()
    .required(passwordRequiredError)
    .min(10, passwordMinMatchesError)
    .matches(/[a-zA-Z0-9]/, passwordMinMatchesError),
});
export const defaultValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};
