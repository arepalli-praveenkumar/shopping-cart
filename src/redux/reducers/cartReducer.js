const initialState = {
    selectedItems:  []
};
export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case  "ADD_ITEM_TO_CART" :
            return {
                ...state,
                selectedItems : [ ...state.selectedItems, action.payload] 
            }
        case "UPDATE_QUANTITY" : 
        return {
            ...state,
            quantity : action.payload
        }
        return state;
        case "CAL_GRAND_TOTAL":
            return state;
        default :
        return state;
    }

}