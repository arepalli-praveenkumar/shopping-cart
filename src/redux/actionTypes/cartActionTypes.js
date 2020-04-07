import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { requestLoading, reqSucc, error } from "./loadingActionTypes";


let token = sessionStorage.getItem("token");
const AuthStr = 'Bearer '.concat(token);

export function addItemToCart(item) {
    return (dispatch) => {
        dispatch({
            type : "ADD_ITEM_TO_CART",
            payload : item
        })
    }
}

export function updateQuantity(newQuantity,productID) {
    return (dispatch) => {
        dispatch({
            type: "UPDATE_QUANTITY",
            newQuantity,productID
        })
    }       
}

export function decrementQuantity(productID) {
    return (dispatch) => {
        dispatch({
            type: "DECR_QUANTITY",
            productID
        })
    }
    
}

export function increamentQuantity(productID) {
    return (dispatch) => {
        dispatch({
            type: "INCR_QUANTITY",
            productID
        })
    }
}

export function clearCart() {
    return (dispatch) => {
        dispatch({
            type: "CLEAR_CART"
        });
        
    }
}

export function orderItems(data) {
    return (dispatch) => {

    dispatch(requestLoading());
    axios.post(BE_BASEURL+"/api/products/orderItems", data, 
    {
      headers : {
        "Authorization" :AuthStr,
        "Content-Type" : "application/json"
      }
    }).then( res => {
      dispatch(reqSucc());
      dispatch(clearCart());
    }).catch( err => {
          console.log(err);
          dispatch(error());
          return err.data;
    });


    }
}
