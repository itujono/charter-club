import { FETCH_ORDERS, CANCEL_ORDER, APPROVE_ORDER, COMPLETE_ORDER } from "../constants"
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
                orderCancelled: [ state.orders.filter(order => order.id === action.payload)[0], ...state.orderCancelled ],
                orderUnprocessed: state.orderUnprocessed.filter(order => order.id !== action.payload)
            }
        case APPROVE_ORDER:
            return {
                ...state,
                orderOngoing: [ state.orders.filter(order => order.id === action.payload)[0], ...state.orderOngoing ],
                orderUnprocessed: state.orderUnprocessed.filter(order => order.id !== action.payload)
            }
        case COMPLETE_ORDER:
            return {
                ...state,
                orderOngoing: state.orderOngoing.filter(order => order.id !== action.payload),
                orderCompleted: [ state.orders.filter(order => order.id === action.payload)[0], ...state.orderCompleted ]
            }
        default:
            return state
    }
}