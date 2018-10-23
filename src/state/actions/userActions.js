import { SAVE_USER_INFO, LOADING_USER } from "../constants";



export const loadingUser = () => ({ type: LOADING_USER })

export const saveUserInfo = (data) => {
    loadingUser()
    return { type: SAVE_USER_INFO, payload: data }
}