import { FETCH_INVENTORIES, ADD_NEW_INVENTORY, DELETE_INVENTORY } from "../constants";
import { vehicles } from "../../common/dummy";


const initialState = {
    inventories: vehicles
}

export default (state = initialState, action) => {

    switch (action.type) {
        case FETCH_INVENTORIES:
            return { ...state, inventories: state.inventories }
        case ADD_NEW_INVENTORY:
            return { ...state, inventories: [ action.payload, ...state.inventories ] }
        case DELETE_INVENTORY:
            return { ...state, inventories: state.inventories.filter(item => item.id !== action.payload) }
        default:
            return state
    }

}