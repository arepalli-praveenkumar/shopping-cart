import React from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';
import { BE_BASEURL } from "../../constants";


class SignUpComponent extends React.Component { 

    constructor(props) {
        super(props);
        this.state = {
            singUpForm : {
                name : "",
                username : "",
                email : "",
                password : ""
        }
        }
    }

    createAccount = (event) => {

        event.preventDefault();
        axios.post(BE_BASEURL+"/api/auth/signup",this.state.singUpForm,
        {
            headers : {
              "Access-Control-Allow-Origin" : "*",
            //   "Accept" : "applicaiton/json"
            }
          })
        .then((res)=> {
            console.log(res);
            if (res.data.success === true) {
                alert(res.data.message)
                this.props.history.push("/login")
            } else if (res.data.success === false) {
                console.log(res.data.message);
            }
        },(res)=>{
            const errorData = res.response.data;
            alert(errorData.message);
          })
        .catch((err) => {
            console.log(err);
            alert("signup failed due to IP mismatch", err);
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
            <div class="main-container">
                <div className="from-wrap">
                <h1>Sign Up</h1>
                <p>Get started with your free account</p>
                <form>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input name="name" type="text" onChange={this.inputHandler} placeholder="Full name"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" className="form-control" onChange={this.inputHandler} placeholder="Email address" type="email" />
                    </div>
                    <div className="form-group">
                        <label>Username</label>
                        <input name="username" className="form-control" onChange={this.inputHandler} placeholder="Enter username" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" className="form-control" onChange={this.inputHandler} placeholder="Create password" type="password" />
                    </div>
                    <button className="my-btn" onClick={this.createAccount}>Create Account</button>
                    <p className="align -left">Have an account?<NavLink to="/login">Log In</NavLink></p>

                </form>
            </div>
        </div>
        )
    }
}

export default SignUpComponent;