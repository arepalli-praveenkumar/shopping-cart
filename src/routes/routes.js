import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "../components/Home/HomeComponent";
import ProductsComponent from "../components/Products/Products";
import CartComponent from "../components/Cart/Cart"
import ProductViewComponent from "../components/ProductViewComponent/ProductViewComponent"
//import './routes.css'

class RoutesComponents extends React.Component {

    render() {
        return (
            <Router>
                {/* <div className="links">
                    <div className="links">
                        <NavLink to="/">Home</NavLink>
                    </div>
                    <div className="links">
                        <NavLink to="/products">Products</NavLink>
                    </div>
                    <div className="links">
                        <NavLink to="/cart">Cart</NavLink>
                    </div>
                    <div className="links">
                        <NavLink to="/product-view/1">Product View</NavLink>
                    </div>
                </div> */}
                
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                    <a className="nav-link" href="#"><NavLink to="/">Home</NavLink></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to="/products">Products</NavLink></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to="/cart">Cart</NavLink></a>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link" href="#"><NavLink to="/product-view/1">Product View</NavLink></a>
                    </li> */}
                </ul>
                </nav>
                <div className="routesview">
                    <Switch>
                        <Route path="/cart" component={CartComponent}></Route>
                        <Route path="/products" component={ProductsComponent}></Route>
                        <Route exact path="/product-view/:productId" component={ProductViewComponent}></Route>
                        <Route path="/" component={HomeComponent}></Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default RoutesComponents;