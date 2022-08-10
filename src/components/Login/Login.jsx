

import React from "react";
import {Formik, Form, Field, ErrorMessage} from "formik";
import loginFormSchema from "../FormValidation/LoginFormSchema";
import {connect} from "react-redux";
import {getCaptchaUrl, loginTC, logoutTC} from "../../redux/auth-reducer";
import {Navigate, Redirect} from "react-router";
import {mapStateToPropsFactory} from "react-redux/es/connect/mapStateToProps";
import {ReCAPTCHA} from "react-google-recaptcha";

const Login = (props) => {

    function onChange(value) {
        console.log("Captcha value:", value);
    }
    const onSubmit = (formData, {setFieldValue}) => {
        props.loginTC(formData.email, formData.password, formData.rememberMe,formData.captcha, setFieldValue)

    }

    if (props.isAuth) {
        return <Navigate to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>


        <Formik initialValues={{
            email: "",
            password: "",
            rememberMe: false,
            captcha: ""

        }}
                validateOnBlur
                onSubmit={onSubmit}
                validationSchema={loginFormSchema}
        >
            {({
                  values, errors, touched,
                  handleChange, handleBlur, isValid,
                  handleSubmit, dirty
              }) => (
                <Form>
                    <div>
                        <input type={'text'}
                               name={'email'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email}
                               placeholder={"email@xxx.xx"}
                        />
                        {touched.email && errors.email && <p>{errors.email}</p>}
                    </div>
                    <div>
                        <input type={'password'}
                               name={'password'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.password}
                               placeholder={"password"}
                        />
                        {touched.password && errors.password && <p>{errors.password}</p>}
                    </div>
                    {/*<div>
                        <input type={'password'}
                               name={'confirmPassword'}
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.confirmPassword}
                               placeholder={"confirmPassword"}
                        />
                        {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                    </div>*/}
                    <div>
                        <Field type="checkbox" name={'rememberMe'} />
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>
                    {props.captchaUrl && <img src={props.captchaUrl} />}
                    {props.captchaUrl && <Field type="text" name={"captcha"} />}
                    <div>{values.general ? <span>{values.general}</span>: null}</div>
                    <button type={'submit'} >Log in</button>
                </Form>
            )}

        </Formik>
        {/*  <Formik
            initialValues={{email: "", password: "", rememberMe: false}}
            validate={values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
            validationSchema={loginFormSchema}>
            {({isValid}) => (
                <Form>
                    <div>
                        <Field type={'text'} name={'email'} placeholder={'e-mail'}/>
                    </div>
                    <ErrorMessage name="email" component="div"/>
                    <ErrorMessage name="email">
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>

                    <div>
                        <Field type={'password'} name={'password'} placeholder={'password'}/>
                    </div>
                    <ErrorMessage name="password">
                        { msg => <div style={{ color: 'red' }}>{msg}</div> }
                    </ErrorMessage>


                    <div>
                        <Field type={'checkbox'} name={'rememberMe'}/>
                        <label htmlFor={'rememberMe'}> remember me </label>
                    </div>

                    <button disabled={!isValid} type={'submit'}>Log in</button>
                </Form>
            )}
        </Formik>*/}
    </div>
};

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {loginTC}) (Login);