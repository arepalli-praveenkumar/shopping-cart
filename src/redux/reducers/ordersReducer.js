const initialState = {
    orderedList : []
};

export default (state = initialState, action) => {

    switch(action.type) {
        case 'MY_ORDERS' :
            return {
                ...state,
            }
        case 'SAVE_ORDERS' :
            return {
                ...state,
                orderedList : action.payload
            }
        default :
        return state;

    }

}