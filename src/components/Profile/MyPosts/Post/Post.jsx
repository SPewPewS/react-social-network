import React from 'react';
import s from './Post.module.css'


const Post = (props) => {
  return (
    <div className={`${s.item} ${s.logoUser}`}>

      <img className={s.userPic} src="https://img.icons8.com/ios/344/pixel-star.png" />
      {props.message}
      <div>
        <span>likes</span>{props.likesCount}
      </div>
    </div>

  );
}

export default Post;