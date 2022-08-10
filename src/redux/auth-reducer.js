import {authAPI, securityAPI} from "../api/api";
import {setStatus} from "./profile-reducer";

const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';


let initialState =  {

    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
            case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const getAuthUsersData = () => (dispatch) => {

    return authAPI.me()
        .then(response => {
            if (response.data.resultCode  === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        } );
}
export const loginTC = (email, password, rememberMe, captcha, setFieldValue) => (dispatch) => {

    authAPI.login(email, password, rememberMe, captcha)
        .then(response => {
            if (response.data.resultCode  === 0) {
                dispatch(getAuthUsersData())
            }else {
                    if (response.data.resultCode === 10) {
                        dispatch(getCaptchaUrl());
                    }

                setFieldValue("general", response.data.messages.join(" "))
            }
        } );
}
export const logoutTC = () => (dispatch) => {

    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        } );
}

export const getCaptchaUrl = () => async (dispatch) => {

    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

    /*securityAPI.getCaptchaUrl()
        .then(response => {
            const captchaUrl = response.data.url
                dispatch(getCaptchaUrlSuccess(captchaUrl))
        } );*/
}


export default authReducer;