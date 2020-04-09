import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { requestLoading, reqSucc, error } from "./loadingActionTypes";

// export const saveUserProfile = (user) => ({
//     type : "SAVE_USER_PROFILE",
//     user
// })

let token = sessionStorage.getItem("token");
let user = JSON.parse(sessionStorage.getItem("user"));
const AuthStr = 'Bearer '.concat(token);

export function saveUserProfile(profileInfo) {
  return (dispatch) => {
    dispatch(requestLoading());
    axios.post(BE_BASEURL+"/api/users/saveUser", profileInfo, 
    {
      headers : {
        "Authorization" :AuthStr,
        "Content-Type" : "application/json"
      }
    }).then( res => {
      dispatch({
        type : "SAVE_USER_PROFILE",
        payload : res.data
      });
      dispatch(reqSucc());
    }).catch( err => {
          console.log(err);
          dispatch(error());
          return err.data;
    });

  }
}

export function getUserInfo() {

    return (dispatch) => {

      dispatch(requestLoading());
        
        axios.get(BE_BASEURL+"/api/users/"+user.username,
        {
          headers : {
            "Authorization" :AuthStr,
            "Content-Type" : "application/json"
          }
        }).then( (res) => {
          //this.props.saveUserProfile(res.data);
          dispatch({
            type : "SAVE_USER_PROFILE",
            payload : res.data
          })
          console.log(res);
          dispatch(reqSucc());
          return res.data;
        }).catch((err) => {
          console.log(err);
          dispatch(error());
          return err.data;
        })

    }

}