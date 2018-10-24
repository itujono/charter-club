import { FETCH_ORDERS, CANCEL_ORDER, APPROVE_ORDER } from "../constants"
import { orders } from "../../common/dummy";


const initialState = {
    orders,
    orderCancelled: orders.filter(order => order.status === 'cancelled'),
    orderOngoing: [],
    orderUnprocessed: orders.filter(order => order.status === 'unprocessed'),
    orderCompleted: orders.filter(order => order.status === 'completed')
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS:
            return { ...state, orders: state.orders }
        case CANCEL_ORDER:
            return {
                ...state,
                orderCancelled: [ ...state.orderCancelled, state.orders.filter(order => order.id === action.payload)[0] ],
                orderUnprocessed: state.orderUnprocessed.filter(order => order.id !== action.payload)
            }
        case APPROVE_ORDER:
            return {
                ...state,
                // orderOngoing: [ ...state.orderOngoing, state.orders.filter(order => order.id === action.payload)[0] ],
                orderCancelled: [ ...state.orderCancelled, state.orders.filter(order => order.id === action.payload)[0] ],
                orderUnprocessed: state.orderUnprocessed.filter(order => order.id !== action.payload)
            }
        default:
            return state
    }
}