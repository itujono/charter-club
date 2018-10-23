import { SAVE_USER_INFO } from "../constants"

const initialState = {}


export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_USER_INFO:
            return { ...state, user: action.payload }
        default:
            return state
    }
} 