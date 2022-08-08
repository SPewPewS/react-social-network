import React from 'react';
import MyPosts from "./MyPosts";
import {addPosActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";




let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPosActionCreator(newPostText));
        }


    }
}
let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;