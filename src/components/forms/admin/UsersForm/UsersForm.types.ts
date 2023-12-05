import { TUserFormValues } from '@/types/users.types';
import { FormikHelpers } from 'formik';

export type TUsersFormProps = {
  buttonText: string;
  initialEditValues?: TUserFormValues;
  onSubmit: (values: TUserFormValues, helpers: FormikHelpers<TUserFormValues>) => void;
};
