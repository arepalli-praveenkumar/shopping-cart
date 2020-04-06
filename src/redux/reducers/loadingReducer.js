const initialState = {
    loading : false,
    response : false,
    error : false
};
export default (state = initialState, action) => {
    switch (action.type) {
        case  "REQUEST_LOADING" :
            return {
                ...state,
                loading : true,
                error : false
            };

        case "REQUEST_SUCC" : 
        return {
            ...state,
            loading : false,
            error : false
        }
        case "ERROR" :
            return {
                ...state,
                loading : false,
                error : true
            }
        default :
        return state;
    }

}