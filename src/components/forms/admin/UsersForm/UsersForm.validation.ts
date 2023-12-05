import * as Yup from 'yup';
import { TUserFormValues } from '@/types/users.types';

const nameRequiredError = 'Please fill in the name.';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(nameRequiredError),
});
export const initialValues: TUserFormValues = {
  name: '',
};
