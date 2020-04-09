import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { requestLoading, reqSucc, error } from "./loadingActionTypes";


let token = sessionStorage.getItem("token");
let user = JSON.parse(sessionStorage.getItem("user"));
const AuthStr = 'Bearer '.concat(token);
console.log(user)

export function myOrders() {
    return (dispatch) => {

    dispatch(requestLoading());
    axios.get(BE_BASEURL+"/api/products/myOrders/"+user.id, 
    {
      headers : {
        "Authorization" :AuthStr,
        "Content-Type" : "application/json"
      }
    }).then( res => {
      dispatch(saveOrders(res.data));
      dispatch(reqSucc());
      console.log(res);
    }).catch( err => {
          console.log(err);
          dispatch(error());
          return err.data;
    });

    }
} 


export function saveOrders(orders) {
    return (dispatch)=> {
        dispatch({
            type : "SAVE_ORDERS",
            payload : orders
        })
    }
}

// export function myOrders() {
//     return (dispatch) => {
//         dispatch({
//             type : "MY_ORDERS"
//         })
//     }
// }