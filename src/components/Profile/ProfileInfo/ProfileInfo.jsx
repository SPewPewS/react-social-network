import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWitchH from "./ProfileStatusWitchH";
import ProfileDataForm from "./ProfileDataForm";
import MyButton from "../../common/Button/MyButton";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);


    if (!props.profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        props.saveProfile(formData)
        setEditMode(false);

    }

    return (
        <div>
            <div className={s.bgImage}>
                {/*<img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>*/}
            </div>
            <div className={s.descriptionBlock}>
                <img className={s.radiusImg} src={props.profile.photos.large}/>
                <div>

                </div>
                {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}


                {editMode
                    ? <ProfileDataForm initVals={props.initVals} onSubmit={onSubmit} profile={props.profile} isOwner={props.isOwner}/>
                    : <ProfileData goToEditMode={() => {
                        setEditMode(true)
                    }} profile={props.profile} isOwner={props.isOwner}/>}
                <ProfileStatusWitchH status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>

    );
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {

    return <div>
        {isOwner && <div>
            <MyButton onClick={goToEditMode}>edit</MyButton>
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
        </div>
    </div>
}


export const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>

}

export default ProfileInfo;