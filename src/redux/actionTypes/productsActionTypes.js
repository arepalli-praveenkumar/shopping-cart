
export const getProductByID = (id) => ({
    type : "GET_PRODUCT_BY_ID",
    payload : id
})

export const getProducts = () => ({
    type: "GET_PRODUCTS_LIST",
})