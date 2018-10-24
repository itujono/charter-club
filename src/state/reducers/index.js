import { combineReducers } from "redux"
import userReducer from "./userReducer"
import inventoryReducer from "./inventoryReducer"
import orderReducer from "./orderReducer";


const appReducer = combineReducers({
    user: userReducer,
    inventory: inventoryReducer,
    order: orderReducer
})

export default appReducer