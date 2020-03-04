const initialState = {};
export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case  "SAVE_USER_PROFILE" :
            return {
                ...state,
                userInfo : action.user
            };
        default :
        return state;
    }

}