import React from 'react';
import { NavLink } from "react-router-dom";

const HomeComponent = () => {
    return (<h1>Please visit <NavLink to="/products">Products</NavLink> page to buy world class items</h1>);
}

export default HomeComponent;