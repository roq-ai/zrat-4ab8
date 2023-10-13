import * as yup from 'yup';

export const bidValidationSchema = yup.object().shape({
  proposal: yup.string().nullable(),
  amount: yup.number().integer().nullable(),
  date: yup.date().nullable(),
  project_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
