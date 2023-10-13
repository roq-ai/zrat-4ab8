import * as yup from 'yup';

export const projectValidationSchema = yup.object().shape({
  title: yup.string().required(),
  description: yup.string().nullable(),
  deadline: yup.date().nullable(),
  budget: yup.number().integer().nullable(),
  client_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
