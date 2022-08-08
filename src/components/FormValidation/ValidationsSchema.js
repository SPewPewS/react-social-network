import * as Yup from "yup";

const ValidationsSchema = Yup.object().shape({
    name: Yup.string()
        .required("Обязательно"),
    textA: Yup.string()
        .required("Обязательно"),
    password: Yup.string()
        .required("Обязательно"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .required("Обязательно"),
    email: Yup.string()
        .email('Введите верный email')
        .required("Обязательно")
});
export default ValidationsSchema;