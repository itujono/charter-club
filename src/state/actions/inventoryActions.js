import { FETCH_INVENTORIES, ADD_NEW_INVENTORY, DELETE_INVENTORY, UPDATE_INVENTORY } from "../constants";


export const fetchInventories = () => ({
    type: FETCH_INVENTORIES
})

export const addNewInventory = (data) => ({
    type: ADD_NEW_INVENTORY, payload: data
})

export const deleteInventory = (inventoryId) => ({
    type: DELETE_INVENTORY, payload: inventoryId
})

export const updateInventory = (inventoryId, newData) => ({
    type: UPDATE_INVENTORY, inventoryId, newData
})