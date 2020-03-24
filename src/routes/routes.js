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
import MyProfile from "../components/MyProfile/MyProfile"
//import './routes.css'

class RoutesComponents extends React.Component {

    render() {
        return (
            <Router>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="javascript:void()"><NavLink to="/">Home</NavLink></a>
                    </li>
                    <li className="nav-item active">
                    <a className="nav-link" href="javascript:void()"><NavLink to="/login">Login</NavLink></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void()"><NavLink to="/products">Products</NavLink></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void()"><NavLink to="/my-profile/user-profile">My Profile</NavLink></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="javascript:void()"><NavLink to="/cart">Cart ({this.props.totalQuantity})</NavLink></a>
                    </li>
                </ul>
                </nav>
                <div className="routesview">
                    <Switch>
                        <Route path="/cart" component={CartComponent}></Route>
                        <Route path="/products" component={ProductsComponent}></Route>
                        <Route path="/my-profile" component={MyProfile}></Route>
                        <Route path="/login" component={LoginComponent}></Route>
                        <Route exact path="/product-view/:productId" component={ProductViewComponent}></Route>
                        <Route path="/" component={HomeComponent}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}


const mapStatesToProps = (state) => ({
    totalQuantity : state.cartList.totalQuantity
});

const mapDispatchToProps = {

};

export default connect(mapStatesToProps, mapDispatchToProps)(RoutesComponents);