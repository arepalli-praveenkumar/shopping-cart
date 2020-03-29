import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from "react-router-dom";
import GoogleLogin from 'react-google-login';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { login } from "../../redux/actionTypes/authActionTypes";

import './login.css';

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
            emailID : "",
            password : ""
    }
    }
}

    signup(res) {
        
            const googleresponse = {
        
              Name: res.profileObj.name,
        
              email: res.profileObj.email,
        
              token: res.googleId,
        
              Image: res.profileObj.imageUrl,
        
              ProviderId: 'Google'
        
            };
        
            console.log(googleresponse);
            this.props.history.push('/products')
            //debugger;
        
            // axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
        
            //   .then((result) => {
        
            //     let responseJson = result;
        
            //     sessionStorage.setItem("userData", JSON.stringify(result));
        
            //     this.props.history.push('/Dashboard')
        
            //   });
        
          };

    inputHandler = (event) => {
      let fieldName =event.currentTarget.name;
      let fieldValue = event.target.value;

      this.setState((state) => {
        state.loginForm[fieldName] = fieldValue;
    })

    }

    authenticateUser = (event) => {

      const INSTRUCTOR = "user";
      const PASSWORD = "21d607ec-d5b0-4ad7-8c58-5aa281e6a5ac";
      event.preventDefault();
        axios.post(BE_BASEURL+"/user/login", this.state.loginForm,
        {
          //headers : {authorization :"Basic "+ window.btoa(INSTRUCTOR + ":" + PASSWORD)}
        })
        .then((res)=> {
            console.log(res);
            if (res.data === true) {
                //this.props.history.push("/products");
                this.props.login(res.data);
                this.props.history.push('/products')
            } else {
                alert("Login failed");
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    
    render () {


        const responseGoogle = (response) => {
        
            console.log(response);
      
            var res = response.profileObj;
      
            console.log(res);
      
            //debugger;
      
            this.signup(response);
      
          }

        return (
            
        <div className="container">

        <div className="row">

          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">

            <div className="col-sm-4"></div>

            <div className="col-sm-4">

              <GoogleLogin

                clientId="464944719379-h84i67v34o9ivp8h49np2htm96bjsj08.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

            </div>

            <div className="col-sm-4"></div>

          </div>
        </div>


        <div class="container">
	<div class="d-flex justify-content-center h-100">
		<div class="card">
			<div class="card-header">
				<h3>Sign In</h3>
				<div class="d-flex justify-content-end social_icon">
					<span><i class="fab fa-facebook-square"></i></span>
					<span><i class="fab fa-google-plus-square"></i></span>
					<span><i class="fab fa-twitter-square"></i></span>
				</div>
			</div>
			<div class="card-body">
				<form>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-user"></i></span>
						</div>
						<input type="text" name="emailID" class="form-control" placeholder="username"  onChange={this.inputHandler}/>
						
					</div>
					<div class="input-group form-group">
						<div class="input-group-prepend">
							<span class="input-group-text"><i class="fas fa-key"></i></span>
						</div>
						<input name="password" type="password" class="form-control" placeholder="password" onChange={this.inputHandler}/>
					</div>
					<div class="row align-items-center remember">
						<input type="checkbox" />Remember Me
					</div>
					<div class="form-group">
						<input type="submit" value="Login" onClick={this.authenticateUser} class="btn float-right login_btn" />
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<NavLink to="/signup">Sign Up</NavLink>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
		</div>
	</div>
</div>

        </div>
                        
        )
    }
}

const mapStatesToProps = (state) => ({
  isAuth : state.auth.isAuth
});

const mapDispatchToProps = {
  login : login
};

export default connect(mapStatesToProps,mapDispatchToProps)(LoginComponent);