import * as Yup from "yup";

const PostsFormSchema = Yup.object().shape({
    newText: Yup.string()
        .min(8, "Must be longer than 8 characters")
        .required("Required")
});
export default PostsFormSchema;