import React from 'react';
import {
    Switch,
    Route,
    NavLink
  } from "react-router-dom";
import UserProfile from "../UserProfile/UserProfile";
import MyOrders from "../MyOrders/MyOrders";
import WishList from "../WishList/WishList";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faUserCircle,
  faSuitcaseRolling, 
  faHeart 
} from '@fortawesome/free-solid-svg-icons'
import "./MyAccount.css"

function MyAccount() {
    return (
            <div className="profile-page">
		            <ul className="profile-side-nav">
                        <li>
                          <NavLink to="/my-account/user-profile">
                            <FontAwesomeIcon icon={faUserCircle}/>
                            <p>Profile</p>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/my-account/my-orders">
                            <FontAwesomeIcon icon={faSuitcaseRolling}/>
                            <p>Orders</p>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/my-account/wishlist">
                            <FontAwesomeIcon icon={faHeart}/>
                            <p>Wish List</p>
                          </NavLink>
                        </li>
		            </ul>
		            <div className="profile-main-body">
                        <Switch>
                            <Route path="/my-account/user-profile" component={UserProfile}></Route>
                            <Route path="/my-account/my-orders" component={MyOrders}></Route>
                            <Route path="/my-account/wishlist" component={WishList}></Route>
                         </Switch>        
		            </div>
            </div>
    )
}

export default MyAccount;