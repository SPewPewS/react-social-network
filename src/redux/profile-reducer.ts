import {profileAPI, usersAPI} from "../api/api";
import {Photostype, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';




let initialState =  {
    posts: [
        {id: 1, message: 'Hi, how are you', likesCount: 12},
        {id: 2, message: '121212', likesCount: 10},
        {id: 3, message: 'blabla', likesCount: 12},
        {id: 4, message: 'Yo', likesCount: 12}] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''

}

export type InitialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): InitialStateType => {

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
                profile: { ...state.profile, photos: action.photos} as ProfileType
            }
        }

        default:
            return state;
    }




}


export type AddPosActionCreatorActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: ProfileType
}


type setStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS,
    photos: Photostype
}


export const addPosActionCreator = (newPostText: string):AddPosActionCreatorActionType => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status: string): setStatusActionType => ({type: SET_STATUS, status});
export const savePhotoSuccess = (photos: Photostype): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});

export const getUserProfile = (userId: number) => (dispatch: any) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        } );
}



export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data[0]));
        } );
}
export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } );
}
export const savePhoto = (file: any) => (dispatch: any) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(savePhotoSuccess(response.data.data.photos));
            }
        } );
}
export const saveProfile = (profile: ProfileType, setFieldValue: any) => (dispatch: any, getState: any) => {
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