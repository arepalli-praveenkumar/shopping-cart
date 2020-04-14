import React from 'react';
import {
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import MyOrders from "../MyOrders/MyOrders";
import "./MyProfile.css"

function MyProfile() {
    return (
            <div className="profile-page">
		            <ul className="profile-side-nav">
                        <li><NavLink to="/my-profile/user-profile">User Profile</NavLink></li>
                        <li><NavLink to="/my-profile/my-orders">My Orders</NavLink></li>
		            </ul>
		            <div className="profile-main-body">
                        <Switch>
                            <Route path="/my-profile/user-profile" component={UserProfile}></Route>
                            <Route path="/my-profile/my-orders" component={MyOrders}></Route>
                         </Switch>        
		            </div>
            </div>
    )
}

export default MyProfile;