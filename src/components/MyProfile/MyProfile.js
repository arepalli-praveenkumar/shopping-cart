import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import MyOrders from "../MyOrders/MyOrders"

function MyProfile() {
    return (
        <div>
            <div className="container">
	<div className="row">
		<div className="col-md-3 ">
		     <div className="list-group ">
              <a href="javascript:void()" className="list-group-item list-group-item-action"><NavLink to="/my-profile/user-profile">User Profile</NavLink></a>
              <a href="javascript:void()" className="list-group-item list-group-item-action"><NavLink to="/my-profile/my-orders">My Orders</NavLink></a>
            </div> 
		</div>
		<div className="col-md-9">
        <Switch>
                <Route path="/my-profile/user-profile" component={UserProfile}></Route>
                 <Route path="/my-profile/my-orders" component={MyOrders}></Route>
        </Switch>
                 
		</div>
	</div>
</div>
        </div>
    )
}

export default MyProfile;