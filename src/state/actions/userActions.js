import { SAVE_USER_INFO } from "../constants";



export const saveUserInfo = (data) => ({
    type: SAVE_USER_INFO, payload: data
})