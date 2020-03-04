const initialState = {};
export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case  "SAVE_PROFILE" :
            return state;
        default :
        return state;
    }

}