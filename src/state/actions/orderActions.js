import { FETCH_ORDERS, CANCEL_ORDER, APPROVE_ORDER } from "../constants";


export const fetchOrders = () => ({
    type: FETCH_ORDERS
})

export const cancelOrder = (orderId) => ({
    type: CANCEL_ORDER, payload: orderId
})

export const approveOrder = (orderId) => ({
    type: APPROVE_ORDER, payload: orderId
})