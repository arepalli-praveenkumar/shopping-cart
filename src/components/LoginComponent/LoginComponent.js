import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Redirect } from "react-router-dom";
import GoogleLogin from 'react-google-login';
//import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { login } from "../../redux/actionTypes/authActionTypes";
import { requestLoading, reqSucc, error } from "../../redux/actionTypes/loadingActionTypes";
import Spinner from "../Spinner/Spinner";



//axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
//axios.defaults.headers.common['Access-Control-Allow-Method'] = 'DELETE, POST, GET, OPTIONS';
//axios.defaults.headers.common['Access-Control-Allow-Headers'] = '"Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"';

//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
class LoginComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        loginForm : {
          usernameOrEmail : "",
          password : ""
    }
    }
}

    // signup(res) {
        
    //         const googleresponse = {
        
    //           Name: res.profileObj.name,
        
    //           email: res.profileObj.email,
        
    //           token: res.googleId,
        
    //           Image: res.profileObj.imageUrl,
        
    //           ProviderId: 'Google'
        
    //         };
        
    //         console.log(googleresponse);
    //         this.props.history.push('/products')
            
        
    //         // axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
        
    //         //   .then((result) => {
        
    //         //     let responseJson = result;
        
    //         //     sessionStorage.setItem("userData", JSON.stringify(result));
        
    //         //     this.props.history.push('/Dashboard')
        
    //         //   });
        
    //       };

    inputHandler = (event) => {
      let fieldName =event.currentTarget.name;
      let fieldValue = event.target.value;

      this.setState((state) => {
        state.loginForm[fieldName] = fieldValue;
    })

    }

    authenticateUser = (event) => {
      event.preventDefault();
      requestLoading();
        axios.post(BE_BASEURL+"/api/auth/signin", this.state.loginForm,
        {
          headers : {
            //authorization :"Basic "+ window.btoa(INSTRUCTOR + ":" + PASSWORD)
            "Access-Control-Allow-Origin" : "*"
          }
        })
        .then((res)=> {
            console.log(res);
            if (res.data.accessToken) {
                // TODO more on session creation
                sessionStorage.setItem("token",res.data.accessToken);
                sessionStorage.setItem("user",JSON.stringify(res.data.userPrincipal));
                this.props.login(res.data.accessToken);
                setTimeout(() => {
                  //this.props.history.push('/products')
                  return <Redirect to='/login'/>
                }, 1000);
                
            } else {
                alert("Login failed");
            }
        }, (res)=>{
          const errorData = res.response.data;
          alert(errorData.message);
        })
        .catch((err) => {
            console.log(err);
            alert("Login failed due to IP mismatch", err);
        });
    }
    
    render () {


        // const responseGoogle = (response) => {
        
        //     console.log(response);
      
        //     var res = response.profileObj;
      
        //     console.log(res);
      
        //     //debugger;
      
        //     this.signup(response);
      
        //   }

        return (
            
        <div className="main-container">

        {/* <div className="google-sign-in-btn">

              <GoogleLogin

                clientId="464944719379-h84i67v34o9ivp8h49np2htm96bjsj08.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

        </div>  */}

            {
                this.props.loading ? 
                <Spinner/>
                :<div></div>
            } 

        <div className="from-wrap">
          <h1>Log In</h1>
          <p>To access your services</p>
          <form>
          <div className="form-group">
            <label>Username or Email</label>
            <input type="text" name="usernameOrEmail" className="form-control"
             onChange={this.inputHandler}/>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" name="password"
             className="form-control" onChange={this.inputHandler}/>
          </div>
          <button className="my-btn" onClick={this.authenticateUser}>Log In</button>
          <p className="align -left">Don't have an account?<NavLink to="/signup">Sign Up</NavLink></p>

        </form>

        </div>
        </div>
                        
        )
    }
}

const mapStatesToProps = (state) => ({
  isAuth : state.auth.isAuth,
  loading : state.loadingReducer.loading,
});

const mapDispatchToProps = {
  login : login
};

export default connect(mapStatesToProps,mapDispatchToProps)(LoginComponent);