import React from 'react'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Redirect 
  } from "react-router-dom";
import { connect } from 'react-redux';
//import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "../components/Home/HomeComponent";
import ProductsComponent from "../components/Products/Products";
import CartComponent from "../components/Cart/Cart";
import LoginComponent from '../components/LoginComponent/LoginComponent';
import ProductViewComponent from "../components/ProductViewComponent/ProductViewComponent";
import MyAccount from "../components/MyAccount/MyAccount";
import SignUpComponent from "../components/SignUp/SignUpComponent";
import { logout } from "../redux/actionTypes/authActionTypes";
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import './routes.css'

//library.add(faGithub, fab)
//const history = require('history').createBrowserHistory;

class RoutesComponents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    logoutSession = () => {
        sessionStorage.removeItem("token");
        sessionStorage.removeItem("user");
        this.props.logout(null);
        //return <Redirect to='/login'/>
        // window.Location.href = "/login"
        //
        // return window.location.href = process.env.PUBLIC_URL+'/login';
        //window.location.assign(window.location.hostname)
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
                        <h1 className="bfr-signin">Shopping <span className="header-cart">Cart</span></h1>
                        :
                        <div className="main-header">
                        <h1 >
                            <NavLink to="/home" className="nav-link">Shopping <span className="header-cart">Cart</span></NavLink> 
                        </h1>
                        <ul className="headerlist">
                        <li >
                            <NavLink to="/home" className="nav-link">
                                <FontAwesomeIcon icon={faHome}/>
                            </NavLink> 
                        </li>
                        <li >
                            <NavLink to="/products" className="nav-link">Products</NavLink> 
                        </li>
                        <li >
                            <NavLink to="/my-account/user-profile" className="nav-link">My Profile</NavLink>
                        </li>
                        <li >
                            <NavLink to="/cart" className="nav-link"><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> ({this.props.totalQuantity})</NavLink> 
                        </li>
                        <li >
                            <a href="void:javascript(0)" 
                            className="logout-btn"
                            onClick={this.logoutSession}>Logout</a>
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
                        <Route path="/my-account" component={MyAccount}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/product-view/:productId" component={ProductViewComponent}></Route>
                        <Route path="/home" component={HomeComponent}></Route>
                        <Route path="/" component={HomeComponent}></Route>
                    </Switch>
                    :
                    <Switch>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route path="/signup" component={SignUpComponent}></Route>
                        <Route path="/" component={LoginComponent}></Route>
                    </Switch>
                    }
                    
                </div>
                {/* <footer id="footer">
                
                        <a
                    href="https://github.com/arepalli-praveenkumar/shopping-cart"
                    className="github_link"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><FontAwesomeIcon icon={faGithub}/><span>Open Sourced on GitHub</span></a>

            </footer> */}
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