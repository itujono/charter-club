import * as yup from "yup"


const required = "This field can not be empty"

export const inventorySchema = yup.object().shape({
    title: yup.string().required(required).min(5, "Are you sure this is the title?"),
    make: yup.string().required(required),
    model: yup.string().required(required),
    price: yup.number("This is not a number").required(required)
})