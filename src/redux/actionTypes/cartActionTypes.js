import axios from 'axios';
import { createBrowserHistory } from 'history';
import { BE_BASEURL } from "../../constants";
import { requestLoading, reqSucc, error } from "./loadingActionTypes";

import { useHistory } from "react-router-dom";

const history = createBrowserHistory();

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

      //  let hit = useHistory();
      let token = sessionStorage.getItem("token");
const AuthStr = 'Bearer '.concat(token);

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
      console.log(history)
      //dispatch(push('/my-profile/my-orders'));
      //history.push(process.env.PUBLIC_URL+'/my-profile/my-orders')
      return window.location.href = process.env.PUBLIC_URL+'/my-profile/my-orders';
      //hit.push('/my-profile/my-orders');
      //return <Redirect to='/my-profile/my-orders'  />
    }).catch( err => {
          console.log(err);
          dispatch(error());
          return err.data;
    });


    }
}
