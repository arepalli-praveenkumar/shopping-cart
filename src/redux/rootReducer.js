import { combineReducers } from "redux";
import productsList from "./reducers/productsListReducer";
import cartList from "./reducers/cartReducer";
import userProfile from "./reducers/myProfileReducer";

export default combineReducers({
    productsList, 
    cartList, 
    userProfile
})