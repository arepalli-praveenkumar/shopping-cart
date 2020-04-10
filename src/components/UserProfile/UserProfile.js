import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { saveUserProfile, getUserInfo } from "../../redux/actionTypes/userProfileActionTypes";
import "./UserProfile.css"

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
      phoneNo : "",
      name : "",
      email : "",
      username : ""
      },
      token : ""
    }
  }

  inputHandler = (event) => {
    let fieldName =event.currentTarget.name;
    let fieldValue = event.target.value;
    console.log(fieldName, fieldValue);
    this.setState((state) => {
        state.userInfo[fieldName] = fieldValue;
    })
  }

  updateProfile = (event) => {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"));
    let newProfile = {
      name : "Arepalli Praveenkumar",
      phoneNo : 784512369,
      userID : loggedUser.id
    };
    event.preventDefault();
    this.props.saveUserProfile(newProfile);
    console.log(this.state.userInfo, this.state.token);
  }

shouldComponentUpdate() {
  console.log(this.state)
  return true;
}

componentDidMount() {
  const re = this.props.getUserInfo();
  console.log(re)
}


render() {

  const { name, email, username, phoneNo }= this.props.userInfy;
  
   const profile = (!this.props.loading) ? 
     <div className="profile-from-wrap">
          <h1>Profile Information</h1>
          <form>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" placeholder="full name"
             onChange={this.inputHandler} value={name}/>
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" name="phoneNo" placeholder="phone no"
             className="form-control" onChange={this.inputHandler} value={phoneNo}/>
          </div>
          <button className="my-btn" onClick={this.updateProfile}>Update Profile</button>
          

        </form>

        </div>
   :  <div>...Loading</div>

  return (
            <div className="">
                <div className="">
                    {profile}
                </div>
            </div>
        )

}
    
}

const mapStatesToProps = (state) => ({
   loading : state.loadingReducer.loading,
   userInfy : state.userProfile.userInfo
});

const mapDispatchToProps = (dispatch) => {

  console.log(dispatch);
  return {
    saveUserProfile : (data) => dispatch(saveUserProfile(data)),
    getUserInfo : () => dispatch(getUserInfo())
  }
};

export default connect(mapStatesToProps,mapDispatchToProps)(UserProfile);