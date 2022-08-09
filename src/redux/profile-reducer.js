import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: '121212', likesCount: 10},
        {id: 3, message: 'blabla', likesCount: 12},
        {id: 4, message: 'Yo', likesCount: 12}],
    profile: null,
    status: ''

}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
                };
        }
        case SET_USER_PROFILE: {

            return {
                ...state,
                profile: action.profile
            }

        }

        case SET_STATUS: {

            return {
                ...state,
                status: action.status
            }

        }
        case SAVE_PHOTO_SUCCESS: {

            return {
                ...state,
                profile: { ...state.profile, photos: action.photos}
            }

        }

        default:
            return state;
    }




}


export const addPosActionCreator = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        } );
}



export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        } );
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } );
}
export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        } );
}
export const saveProfile = (profile, setFieldValue) => (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileAPI.saveProfile(profile)
        .then(response => {
            if (response.data.resultCode === 0) {
               dispatch(getUserProfile(userId));
            }else {
                setFieldValue("general", response.data.messages.join(" "))
            }
        } );
}




export default profileReducer;