import * as Yup from "yup";

const TextAFormSchema = Yup.object().shape({
    myPosts: Yup.string()
        .required("Обязательное поле")


})

export default TextAFormSchema;