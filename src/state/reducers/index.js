import { combineReducers } from "redux"
import userReducer from "./userReducer"
import inventoryReducer from "./inventoryReducer";


const appReducer = combineReducers({
    user: userReducer,
    inventory: inventoryReducer
})

export default appReducer