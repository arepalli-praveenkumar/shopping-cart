import { combineReducers } from "redux";
import productsList from "./reducers/productsListReducer";
import cartList from "./reducers/cartReducer";
import userProfile from "./reducers/userProfileReducer";
import auth from './reducers/authReducer';
import loadingReducer from "./reducers/loadingReducer";
import orderReducer from "./reducers/ordersReducer";
import wishListReducer from "./reducers/wishListReducer";

export default combineReducers({
    productsList, 
    cartList, 
    userProfile,
    auth,
    loadingReducer,
    orders : orderReducer,
    wishList : wishListReducer
})