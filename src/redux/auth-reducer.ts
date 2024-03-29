import {authAPI, securityAPI} from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS';



export type InitialStateType2 = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    captchaUrl: string | null

}

let initialState =  {

    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null


};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {

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

type SetAuthUserDataActionPayloadType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean

}

type SetAuthUserDataActionType = {
    type: typeof SET_USER_DATA,
    payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login:string | null, isAuth: boolean): SetAuthUserDataActionType =>
    ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})


export type GetCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string  }

}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})
export const getAuthUsersData = () => (dispatch: any) => {

    return authAPI.me()
        .then(response => {
            if (response.data.resultCode  === 0) {
                let {id, email, login} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        } );
}
export const loginTC = (email: string, password:string, rememberMe: boolean, captcha: any, setFieldValue: any) => (dispatch: any) => {

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
export const logoutTC = () => (dispatch: any) => {

    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }

        } );
}

export const getCaptchaUrl = () => async (dispatch: any) => {

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