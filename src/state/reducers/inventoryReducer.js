import { FETCH_INVENTORIES } from "../constants";
import { vehicles } from "../../common/dummy";


const initialState = {
    inventories: vehicles
}

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_INVENTORIES:
            return { ...state, inventories: state.inventories }
        default:
            return state
    }

}