import * as yup from 'yup';

export const formSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .email('Введите корректный email')
    .required('Введите email'),
  password: yup
    .string()
    .trim()
    .min(6, 'Длина пароля должна быть минимум 6 символов')
    .required('Введите пароль'),
  repeatPassword: yup
    .string()
    .trim()
    .oneOf([yup.ref('password')], 'Пароли должны совпадать')
    .required('Подтвердите пароль'),
});
