import React from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "../components/Home/HomeComponent";
import ProductsComponent from "../components/Products/Products";
import CartComponent from "../components/Cart/Cart";
import LoginComponent from '../components/LoginComponent/LoginComponent';
import ProductViewComponent from "../components/ProductViewComponent/ProductViewComponent";
import MyProfile from "../components/MyProfile/MyProfile";
import SignUpComponent from "../components/SignUp/SignUpComponent";
import { logout } from "../redux/actionTypes/authActionTypes";

import shoppingCartImage from '../images/shopping-cart.jfif';
import './routes.css'

class RoutesComponents extends React.Component {

    logoutSession = () => {
        sessionStorage.removeItem("token");
        this.props.logout(null);
        //this.props.history.push("/signup");
        //this.props.history.push('/signup')
    }


    render() {

        console.log(process.env.PUBLIC_URL);
        
        const authToken = sessionStorage.getItem("token");
        console.log(authToken);
        let basename = process.env.PUBLIC_URL;

        return (
            
            <Router basename={basename}> 
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    {
                        !authToken ? 
                        <div className="links">
                        <li className="nav-item active">
                            <NavLink to="/login" className="nav-link">Login</NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/signup" className="nav-link">Sign Up</NavLink> 
                        </li>
                        </div>
                        :
                        <div className="links">
                        <li className="nav-item active">
                            <NavLink to="/home" className="nav-link">Home *{process.env.PUBLIC_URL}*</NavLink> 
                        </li>
                        <li className="nav-item active">
                            <NavLink to="/home" className="nav-link"><img className="logo" src={shoppingCartImage} /></NavLink> 
                        </li>
                        <li className="nav-item">
                            <NavLink to="/products" className="nav-link">Products</NavLink> 
                        </li>
                        <li className="nav-item ">
                            <NavLink to="/my-profile/user-profile" className="nav-link">My Profile</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" className="nav-link">Cart ({this.props.totalQuantity})</NavLink> 
                        </li>
                        <li className="nav-item">
                        <input type="submit" className="btn float-right login_btn" value="Logout" 
                        onClick={this.logoutSession} />
                        </li>
                        <li className="nav-item">
                            <div className="float-right login _btn nav-link">Hello Praveen!</div>
                        </li>
                        
                        </div>
                    }
                
                </ul>
                </nav>
                <div className="routesview">
                    {
                        authToken ? 
                        <Switch>
                        <Route path="/cart" component={CartComponent}></Route>
                        <Route path="/products" component={ProductsComponent}></Route>
                        <Route path="/my-profile" component={MyProfile}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/product-view/:productId" component={ProductViewComponent}></Route>
                        <Route path="/home" component={HomeComponent}></Route>
                    </Switch>
                    :
                    <Switch>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/signup" component={SignUpComponent}></Route>
                        <Route path="/" component={LoginComponent}></Route>
                    </Switch>
                    }
                    
                </div>
            </Router>
                
        )
    }
}


const mapStatesToProps = (state) => ({
    totalQuantity : state.cartList.totalQuantity,
    isAuth : state.auth.isAuth
});

const mapDispatchToProps = {
    logout : logout
};

export default connect(mapStatesToProps, mapDispatchToProps)(RoutesComponents);