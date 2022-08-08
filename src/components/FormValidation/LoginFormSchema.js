import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    email: Yup.string()
        .required("Обязательное поле")
        .email('Введите верный email'),
    password: Yup.string()
        .required("Обязательно"),
    /*confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Пароли не совпадают')
        .required("Обязательно"),*/
   /* rememberMe: Yup.string()
        .required("Обязательно")*/

})

export default loginFormSchema;