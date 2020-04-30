import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { requestLoading, reqSucc, error } from "./loadingActionTypes";

export function getWishListFromDB() {
    return (dispatch) => {
        let token = sessionStorage.getItem("token");
        let user = JSON.parse(sessionStorage.getItem("user"));
        const AuthStr = 'Bearer '.concat(token);

        dispatch(requestLoading());
        axios.get(BE_BASEURL+"/api/products/getAllWishListProducts/"+user.id, 
        {
        headers : {
            "Authorization" :AuthStr,
            "Content-Type" : "application/json"
        }
        }).then( res => {
        dispatch(saveWishListToRedux(res.data));
        dispatch(reqSucc());
        console.log(res);
        }).catch( err => {
            console.log(err);
            dispatch(error());
            return err.data;
        });
    }

}

export function saveWishListToRedux(data) {
    return (dispatch) => {
        dispatch({
            type : "SAVE_WISHLIST",
            payload : data
        })
    }
}

export function savePrdToWishListDB(reqData) {
    return (dispatch) => {
        dispatch(requestLoading());
        let token = sessionStorage.getItem("token");
        let user = JSON.parse(sessionStorage.getItem("user"));
        const AuthStr = 'Bearer '.concat(token);
        reqData.userID = user.id;
        axios.post(BE_BASEURL+"/api/products/saveWishProduct",  reqData,
        {
        headers : {
            "Authorization" :AuthStr,
            "Content-Type" : "application/json"
        }
        }).then( res => {
        //dispatch(saveWishListToRedux(res.data));
        dispatch(reqSucc());
        console.log(res);
        }).catch( err => {
            console.log(err);
            dispatch(error());
            return err.data;
        });

    }
}