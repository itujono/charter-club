import { createStore } from "redux"
import appReducer from "../reducers"


const createAppStore = () => {
    return createStore(appReducer)
}

export default createAppStore