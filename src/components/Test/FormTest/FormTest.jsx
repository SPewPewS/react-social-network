import React from "react";
import {Formik} from "formik";
import ValidationsSchema from "../../FormValidation/ValidationsSchema";

const FormTest = (props) => {
    return (
        <div>
            <Formik initialValues={{
                name: "",
                textA: "",
                password: "",
                confirmPassword: "",
                email: ""

            }}
                    validateOnBlur
                    onSubmit={(values) => { console.log(values) }}
                    validationSchema={ValidationsSchema}
            >
                {({values, errors, touched,
                      handleChange, handleBlur,
                isValid, handleSubmit, dirty}) => (
                    <div>
                        <p>
                            <label htmlFor={`name`}>Name</label><br/>
                            <input type={`text`}
                                   name={`name`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.name}

                            />
                        </p>
                        {touched.name && errors.name && <p>{errors.name}</p>}

                        <p>
                            <label htmlFor={`textA`}>TextArea</label><br/>
                            <textarea type={`text`}
                                   name={`textA`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.textA}

                            />
                        </p>
                        {touched.textA && errors.textA && <p>{errors.textA}</p>}


                        <p>
                            <label htmlFor={`password`}>password</label><br/>
                            <input type={`password`}
                                   name={`password`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.password}

                            />
                        </p>
                        {touched.textA && errors.password && <p>{errors.password}</p>}

                        <p>
                            <label htmlFor={`confirmPassword`}>Confirm password</label><br/>
                            <input type={`password`}
                                   name={`confirmPassword`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.confirmPassword}

                            />
                        </p>
                        {touched.confirmPassword && errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                        <p>
                            <label htmlFor={`email`}>Email</label><br/>
                            <input type={`string`}
                                   name={`email`}
                                   onChange={handleChange}
                                   onBlur={handleBlur}
                                   value={values.email}

                            />
                        </p>
                        {touched.email && errors.email && <p>{errors.email}</p>}

                        <button
                            disabled={!isValid}
                            onClick={handleBlur}
                            type={`submit`}
                        >Send</button>
                    </div>
                )}


            </Formik>
        </div>
    )
}

export default FormTest;