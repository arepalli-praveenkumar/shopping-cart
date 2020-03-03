import { combineReducers } from "redux";
import productsList from "./reducers/productsListReducer";
import cartList from "./reducers/cartReducer";

export default combineReducers({
    productsList, cartList
})