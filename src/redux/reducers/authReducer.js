
const intialState = {
    name : "",
    isAuth : false
}

export default (state = intialState, action) => {
    switch (action.type) {
        case "LOGIN" : 
            return {
                ...state,
                isAuth : action.payload
            };
        case "LOGOUT" :
            return {
                ...state,
                isAuth : action.payload
            };
        case "SIGNUP" :
            return state;
        default : return state;
    }
}