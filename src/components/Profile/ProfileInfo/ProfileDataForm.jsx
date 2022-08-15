import React from "react";
import {Field, Form, Formik} from "formik";
import s from './ProfileInfo.module.css'
import {Textarea} from "../../common/FormsControls/FormsControls";
import MyButton from "../../common/Button/MyButton";

const ProfileDataForm = ({profile, isOwner, onSubmit,initVals}) => {

    return <Formik initialValues={initVals}
                   onSubmit={onSubmit}
    >
        {({
              values, errors, touched,
              handleChange, handleBlur, isValid,
              handleSubmit, dirty
          }) => (
            <div>
                <Form>
                    <div><MyButton type={'submit'}>save</MyButton></div>

                    <div>
                        <b>Full name</b>: <Field type="text" name={'fullName'}/>
                    </div>
                    <div>
                        <b>Looking for a job</b>: <Field type="checkbox" name={'lookingForAJob'}/>
                    </div>
                    <div>
                        <b>My professional skills</b>:
                        <Field
                            name={'lookingForAJobDescription'}
                            as={Textarea}
                            placeholder={'My professional skills'}
                        />
                    </div>
                    <div><b>About me</b>:
                        <Field
                            name={'aboutMe'}
                            as={Textarea}
                            placeholder={'About me'}
                        />
                    </div>
                    <div>
                        <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                        return <div key={key} className={s.contact}>
                            <b>{key}: {<Field type="text" name={"contacts." + key} placeholder={key} /> }</b>


                        </div>
                    })}
                    </div>
                </Form>

            </div>

        )}





       {/* {isOwner && <div>
            <button onClick={() => console.log("12")}>edit</button>
        </div>}
        <div>
            <b>Full name</b>: {profile.fullName}
        </div>
        <div>
            <b>Looking for a job</b>: {profile.lookingForAJob ? "yes" : "no"}
        </div>
        {profile.lookingForAJob &&
            <div>
                <b>My professional skills</b>: {profile.lookingForAJobDescription}
            </div>
        }
        <div><b>About me</b>: {profile.aboutMe}</div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>*/}
    </Formik>
}

export default ProfileDataForm;