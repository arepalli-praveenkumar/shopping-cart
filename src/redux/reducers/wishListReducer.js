const initialState = {
    list : []
}

export default (state = initialState, action) => {

    switch(action.type) {
        case 'WISHLIST' :
            return {
                ...state,
            }
        case 'SAVE_WISHLIST' :
            return {
                ...state,
                list : action.payload
            }
        default :
        return state;

    }
    
}