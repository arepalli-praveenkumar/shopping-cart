import React from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import "./signUp.css";

class SignUpComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            singUpForm : {
                name : "",
                emailID : "",
                phoneNo : "",
                password : ""
        }
        }
    }

    createAccount = (event) => {

        event.preventDefault();
        axios.post(BE_BASEURL+"/user/signUpUser", this.state.singUpForm)
        .then((res)=> {
            console.log(res);
            if (res.data === "REG_SUCC") {
                this.props.history.push("/login")
            } else {
                console.log("Account exist");
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }

    inputHandler = (event) => {
        let fieldName =event.currentTarget.name;
        let fieldValue = event.target.value;
        this.setState((state) => {
            state.singUpForm[fieldName] = fieldValue;
        })
    }

    render() {
        return (
            <div class="container">
            <div className="card bg-light d-flex justify-content-center h-100">
<article className="card-body mx-auto" >
	<h4 className="card-title mt-3 text-center links">Create Account</h4>
	<p className="text-center links">Get started with your free account</p>
	<p>
		<a href="" className="btn btn-block btn-twitter"> <i className="fab fa-twitter"></i>   Login via Twitter</a>
		<a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i>   Login via facebook</a>
	</p>
	<p className="divider-text">
        <span className="bg-light">OR</span>
    </p>
	<form>
	<div className="form-group input-group">
		<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
		 </div>
        <input name="name" className="form-control" onChange={this.inputHandler} placeholder="Full name" type="text"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="emailID" className="form-control" onChange={this.inputHandler} placeholder="Email address" type="email"/>
    </div> 
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
		</div>
    	<input name="phoneNo" className="form-control" onChange={this.inputHandler} placeholder="Phone number" type="text"/>
    </div> 
    
    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input name="password" className="form-control" onChange={this.inputHandler} placeholder="Create password" type="password"/>
    </div>                                   
    <div className="form-group">
        <button type="submit" className="btn btn-primary btn-block" onClick={this.createAccount}> Create Account  </button>
    </div>
    <div class="card-footer">
				<div class="d-flex justify-content-center links">
                Have an account?<NavLink to="/login">Log In</NavLink>
				</div>
				
			</div>  
    {/* <p className="text-center links">Have an account? <NavLink to="/login" className="nav-link">Log In</NavLink> </p>                                                                  */}
</form>
</article>
</div>
</div>
        )
    }
}

export default SignUpComponent;