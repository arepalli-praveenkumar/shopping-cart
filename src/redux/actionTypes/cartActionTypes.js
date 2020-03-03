
export const addItemToCart = (item) => ({
    type : "ADD_ITEM_TO_CART",
    payload : item
})

export const updateQuantity = (newQuantity,productID) => ({
            type: "UPDATE_QUANTITY",
            newQuantity,productID
})

