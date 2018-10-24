import { FETCH_ORDERS } from "../constants"
import { orders } from "../../common/dummy";


const initialState = {
    orders
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return { ...state, orders: state.orders }
        default:
            return state
    }
}