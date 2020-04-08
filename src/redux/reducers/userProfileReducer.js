const initialState = {
    userInfo : {
        //name : "pr"
    }
};
export default (state = initialState, action) => {
    //console.log(action)
    switch (action.type) {
        case  "SAVE_USER_PROFILE" :
            return {
                ...state,
                userInfo : action.payload
            };
        default :
        return state;
    }

}