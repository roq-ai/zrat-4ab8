import * as yup from 'yup';

export const skillValidationSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().nullable(),
  category: yup.string().nullable(),
  user_id: yup.string().nullable().required(),
});
