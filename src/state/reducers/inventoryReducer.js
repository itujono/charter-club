import { FETCH_INVENTORIES, ADD_NEW_INVENTORY, DELETE_INVENTORY, UPDATE_INVENTORY } from "../constants";
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
        case UPDATE_INVENTORY:
            return {
                ...state,
                inventories: state.inventories.map(inventory => inventory.id === action.inventoryId ? action.newData : inventory)
            }
        default:
            return state
    }

}