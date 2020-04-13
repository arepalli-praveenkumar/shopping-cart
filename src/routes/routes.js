import React from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import { connect } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.min.css';
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

    constructor(props) {
        super(props);
        this.state = {}
    }

    logoutSession = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        this.props.logout(null);
        //this.props.history.push("/login");
        //this.props.history.push('/products')

        //this.props.history.push('/signup')
    }


    render() {

        console.log(process.env.PUBLIC_URL);
        
        const authToken = sessionStorage.getItem("token");
        console.log(authToken);
        let basename = process.env.PUBLIC_URL;

        return (
            
            <Router basename={basename}> 
                <nav className="routing">
                    {
                        !authToken ? 
                        <ul className="before-sign-in">
                        <li >
                            <NavLink to="/login" className="nav-link">Login</NavLink> 
                        </li>
                        <li >
                            <NavLink to="/signup" className="nav-link">Sign Up</NavLink> 
                        </li>
                        </ul>
                        :
                        <div>
                        <h1 >
                            <NavLink to="/home" className="nav-link">Shopping Cart</NavLink> 
                        </h1>
                        <ul className="before-sign-in">
                        <li >
                            <NavLink to="/home" className="nav-link">Home</NavLink> 
                        </li>
                        <li >
                            <NavLink to="/products" className="nav-link">Products</NavLink> 
                        </li>
                        <li >
                            <NavLink to="/my-profile/user-profile" className="nav-link">My Profile</NavLink>
                        </li>
                        <li >
                            <NavLink to="/cart" className="nav-link">Cart ({this.props.totalQuantity})</NavLink> 
                        </li>
                        <li >
                        <input type="submit" className="logout-btn" value="Logout" 
                        onClick={this.logoutSession} />
                        </li>
                        </ul>
                        </div>
                    }
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
                <footer>
                        <a
                    href="https://github.com/arepalli-praveenkumar/shopping-cart"
                    className="github_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Source code on Github &copy; Praveenkumar</a>

            </footer>
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