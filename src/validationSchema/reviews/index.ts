import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  rating: yup.number().integer().required(),
  comment: yup.string().nullable(),
  date: yup.date().nullable(),
  client_id: yup.string().nullable().required(),
  freelancer_id: yup.string().nullable().required(),
});
