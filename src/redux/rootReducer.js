import { combineReducers } from "redux";
import productsList from "./reducers/productsListReducer";
import cartList from "./reducers/cartReducer";
import userProfile from "./reducers/userProfileReducer";
import auth from './reducers/authReducer';

export default combineReducers({
    productsList, 
    cartList, 
    userProfile,
    auth
})