import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css'
import {ErrorMessage, Field, Form, Formik} from "formik";
import {Textarea} from "../../common/FormsControls/FormsControls";
import TextAFormSchema from "../../FormValidation/TextAFormSchema";
import MyButton from "../../common/Button/MyButton";


const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <AddNewPostForm addPost={props.addPost}/>
            <div className={s.posts}>
                {postsElements}

            </div>

        </div>

    );
}

const AddNewPostForm = (props) => {
    let onAddPost = (values) => {

        props.addPost(values);

    }

    return (
        <Formik
            initialValues={{
                myPosts: ""

            }}
            validateOnBlur
            onSubmit={(values, {resetForm}) => {
                onAddPost(values.myPosts)
                resetForm( {values: ''} );
            } }
            validationSchema={TextAFormSchema}

        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur, isValid,
                  handleSubmit, dirty
              }) => (
                <div>
                    <Form>
                        <textarea
                            type={'text'}
                            name={'myPosts'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.myPosts}
                            placeholder={"enter text"}
                        />
                        <br/>
                        <MyButton type={'submit'}>Send</MyButton>
                    </Form>

                </div>

            )}

        </Formik>
    )
}


/*
const AddNewPostForm = (props) => {
    let onAddPost = (values) => {

        props.addPost( values );

    }

    return (
        <Formik
            initialValues={{
                newPostText: ""
            }}
            validate={values => {
                const errors = {};
                if (!values.newPostText) {
                    errors.newPostText = 'Required';
                } errors.newPostText = 'no text';
            }
            }
            onSubmit={(values, {resetForm}) => {
                onAddPost(values.newPostText)
                resetForm( {values: ''} );
            }
            }
        >
            {() => (
                <Form>
                    <div>
                        <Field
                            name={'newPostText'}
                            as={Textarea}
                            placeholder={'enter text'}

                        />
                    </div>
                    <ErrorMessage name="newPostText" component="div"/>

                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>
    )
}
*/


export default MyPosts;