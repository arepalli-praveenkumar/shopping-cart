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
            <div class="container">
	<div class="row">
		<div class="col-md-3 ">
		     <div class="list-group ">
              <a href="#" class="list-group-item list-group-item-action"><NavLink to="/my-profile/user-profile">User Profile</NavLink></a>
              <a href="#" class="list-group-item list-group-item-action"><NavLink to="/my-profile/my-orders">User Profile</NavLink></a>
            </div> 
		</div>
		<div class="col-md-9">
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