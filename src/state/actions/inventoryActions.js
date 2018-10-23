import { FETCH_INVENTORIES, ADD_NEW_INVENTORY } from "../constants";


export const fetchInventories = () => ({
    type: FETCH_INVENTORIES
})

export const addNewInventory = (data) => ({
    type: ADD_NEW_INVENTORY, payload: data
})