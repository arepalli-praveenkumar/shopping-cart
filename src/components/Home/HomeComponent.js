import React from 'react';
import { NavLink } from "react-router-dom";

const HomeComponent = () => {
    return (
        <div className="main-home">
            <h1>Discover our wide range of <NavLink to="/products">Products</NavLink></h1>
            {/* <img src="https://drscdn.500px.org/photo/1013656596/q%3D80_m%3D2000_k%3D1/v2?sig=f1679a26ff5be146d25c5783126125711f05f26eea719205e308b63e5ee7fa87"/> */}
        </div>
    
    );
}

export default HomeComponent;