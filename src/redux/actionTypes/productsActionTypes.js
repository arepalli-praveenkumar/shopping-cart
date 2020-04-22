
import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { requestLoading, reqSucc, error } from "./loadingActionTypes";


let token = sessionStorage.getItem("token");
const AuthStr = 'Bearer '.concat(token);


export function getAllProducts() {
    return (dispatch) => {
    dispatch(requestLoading());
    // axios.get("https://192.168.1.5:8443/ssl-test", 
    // {
    // }).then( res => {
    //     console.log(res)
    //   dispatch(reqSucc());
    //  // dispatch(storeProductsToRedux(res.data));
    // }).catch( err => {
    //       console.log(err);
    //       dispatch(error());
    //       return err.data;
    // });

    let token = sessionStorage.getItem("token");
const AuthStr = 'Bearer '.concat(token);

    axios.get(BE_BASEURL+"/api/products/getAllProducts", 
    {
      headers : {
        "Authorization" :AuthStr,
        "Content-Type" : "application/json",
        //"Access-Control-Allow-Origin" : "http://127.0.0.1:3000"
      }
    }).then( res => {
      dispatch(reqSucc());
      dispatch(storeProductsToRedux(res.data));
    }).catch( err => {
          console.log(err);
          dispatch(error());
          return err.data;
    });

    }
}

export function getProductByID(id){
    return (dispatch) => {
    dispatch(requestLoading());
    axios.get(BE_BASEURL+"/api/products/getById/"+id, 
    {
      headers : {
        "Authorization" :AuthStr,
        "Content-Type" : "application/json"
      }
    }).then( res => {
      dispatch(storeInViewedList(res.data[0]))
      dispatch(reqSucc());
    }).catch( err => {
          console.log(err);
          dispatch(error());
          return err.data;
    });
    }
}

export function storeInViewedList (item) {
    return (dispatch) =>{
        dispatch({
            type : "INSERT_VIEWED_ITEM",
            payload : item
        })
    }
}

export const getProducts = () => ({
    type: "GET_PRODUCTS_LIST",
})

export function storeProductsToRedux(dbProducts) {
    return (dispatch) => {
        dispatch(
            {
                type : "STORE_PRODUCTS",
                payload :dbProducts
            }
        )
    }

}