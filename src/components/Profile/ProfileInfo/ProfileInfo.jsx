import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWitchH from "./ProfileStatusWitchH";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader />
    }

  return (
    <div>
      <div className={s.bgImage}>
        <img src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
          <img src={props.profile.photos.large}/>
        ava + description
          <ProfileStatusWitchH status={props.status} updateStatus={props.updateStatus}/>
      </div>
    </div>

  );
}

export default ProfileInfo;