const initialState = {
    selectedItems:  [],
    grandTotal : 0,
    totalQuantity : 0
};
export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case  "ADD_ITEM_TO_CART" :
            let currentProduct = action.payload;
            let inCartItem = state.selectedItems.find(item => item.productID === currentProduct.productID)

            if (inCartItem) {
                inCartItem.quantity +=1; 
                inCartItem.itemTotalPrice = (inCartItem.quantity)*(inCartItem.price);
                let grandTotal = state.grandTotal + inCartItem.price;
                let totalQuantity = state.totalQuantity + 1
                return {
                    ...state,
                    grandTotal: grandTotal,
                    totalQuantity : totalQuantity
                }

            } else {
                currentProduct.quantity = 1;
                currentProduct.itemTotalPrice = (currentProduct.quantity)*(currentProduct.price);
                let grandTotal = state.grandTotal + currentProduct.price;
                let totalQuantity = state.totalQuantity + 1
                return {
                    ...state,
                    selectedItems: [...state.selectedItems, currentProduct],
                    grandTotal: grandTotal,
                    totalQuantity : totalQuantity
                } 
            }

        case "UPDATE_QUANTITY" :
            let inCartItemCurrent = state.selectedItems.find(item => item.productID === action.productID);
            inCartItemCurrent.quantity = parseInt(action.newQuantity);
            inCartItemCurrent.itemTotalPrice = inCartItemCurrent.quantity*inCartItemCurrent.price;
            let grandTotal = state.selectedItems.reduce((total, each) => {
                return total+parseInt(each.itemTotalPrice)
            },0)
            let totalQuantity = state.selectedItems.reduce((total, each)=>{
                return total + parseInt(each.quantity)
            },0)
        return {
            ...state,
            totalQuantity:totalQuantity,
            grandTotal:grandTotal
        }

        case "INCR_QUANTITY" : 
        let incCartItemCurrent = state.selectedItems.find(item => item.productID === action.productID);
        console.log(incCartItemCurrent)
        incCartItemCurrent.quantity =parseInt(incCartItemCurrent.quantity+1);
        incCartItemCurrent.itemTotalPrice = incCartItemCurrent.quantity * incCartItemCurrent.price;
        let iGrandTotal = state.grandTotal + incCartItemCurrent.price;
        //let totalQuantity = state.totalQuantity + 1;
        return {
            ...state,
            totalQuantity:state.totalQuantity + 1,
            grandTotal: iGrandTotal
        }
        case "DECR_QUANTITY" : 
        let decCartItemCurrent = state.selectedItems.find(item => item.productID === action.productID);
        decCartItemCurrent.quantity =parseInt(decCartItemCurrent.quantity-1);
        decCartItemCurrent.itemTotalPrice = decCartItemCurrent.quantity * decCartItemCurrent.price;
        let dGrandTotal = state.grandTotal - decCartItemCurrent.price;
        // let totalQuantity = state.totalQuantity + 1;
        return {
            ...state,
            totalQuantity:state.totalQuantity - 1,
            grandTotal:dGrandTotal
        }

        case "CLEAR_CART" : 
        return {
            grandTotal : 0,
            totalQuantity : 0,
            selectedItems : []
        }
        
        default :
        return state;
    }

}