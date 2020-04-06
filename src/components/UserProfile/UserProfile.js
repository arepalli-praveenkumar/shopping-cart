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
    let newProfile = {
      name : "Arepalli Praveenkumar",
      phoneNo : 784512369,
      userID : 23
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
   <div className="row">
                    <div className="form-group input-group">
                      <div className="input-group-prepend">
                          <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                      </div>
                          <input name="name" value={name} 
                          className="form-control" onChange={this.inputHandler} 
                          placeholder="full name" type="text"/>
                      </div> 
                      {/* <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                      </div>
                          <input name="email" value={email} className="form-control" onChange={this.inputHandler} placeholder="email" type="email"/>
                      </div> 
                      <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                      </div>
                        <input name="username" value={username} className="form-control" onChange={this.inputHandler} placeholder="username" type="text"/>
                      </div>  */}
                      
                      <div className="form-group input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                      </div>
                          <input name="phoneNo" value={phoneNo} className="form-control" onChange={this.inputHandler} placeholder="phone no" type="input"/>
                      </div>                                   
                      <div className="form-group">
                          <button className="btn btn-primary btn-block" onClick={this.updateProfile}> Update Profile </button>
                      </div>
                    </div>
   :  <div>...Loading</div>

  return (
    <div className="card user-profile">
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-12">
                            <h4>Your Profile</h4>
                            <hr/>
                        </div>
                    </div>
                    
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