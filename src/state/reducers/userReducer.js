import { SAVE_USER_INFO, LOADING_USER } from "../constants"
import { user } from "../../common/dummy";


const initialState = {
    user
}


export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_USER:
            return { ...state, laoding: true }
        case SAVE_USER_INFO:
            return { ...state, user: action.payload, loading: false }
        default:
            return state
    }
} 