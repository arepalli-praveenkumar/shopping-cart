import prods from "../mocks/Products.json";

const initialState = {
    products : [],
    viewList : []
};
export default (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case  "GET_PRODUCTS_LIST" :
            return state;
        case "GET_PRODUCT_BY_ID" :
            return state;
        case "STORE_PRODUCTS" :
            return {
                ...state,
                products : action.payload
            }
        case "INSERT_VIEWED_ITEM":
            return {
                ...state,
                viewList : [...state.viewList, action.payload]
            }
        default :
        return state;
    }

}