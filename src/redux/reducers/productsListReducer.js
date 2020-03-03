import prods from "../mocks/Products.json";

const initialState = prods;
export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case  "GET_PRODUCTS_LIST" :
            return state;
        case "GET_PRODUCT_BY_ID" :
            // console.log(action, state)
            // state.map(i => {
            //     if (i.id == action.payload) {
            //         console.log(i.id, action.payload, i)
            //         return i
            //     }
                
            // })
            return state;
        default :
        return state;
    }

}