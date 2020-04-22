import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { BE_BASEURL } from "../../constants";
import { saveUserProfile, getUserInfo, uploadProfilePic } from "../../redux/actionTypes/userProfileActionTypes";
import Spinner from "../Spinner/Spinner";
import "./UserProfile.css";
import maleAvatar from "../../images/avatar-male.jpg";
import femaleAvatar from "../../images/avatar-female.png";

class UserProfile extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo : {
      phoneNo : "",
      name : "",
      email : "",
      username : "",
      gender : ""
      },
      token : "",
      profilePicImgStr : ""
    }
  }

  inputHandler = (event) => {
    let fieldName =event.currentTarget.name;
    let fieldValue = event.target.value;
    console.log(fieldName, fieldValue);
    this.setState((state) => {
        state.userInfo[fieldName] = fieldValue;
        console.log(state.userInfo)
    })
  }

  updateProfile = (event) => {
    let loggedUser = JSON.parse(sessionStorage.getItem("user"));
    let newProfile = {
      name : this.state.userInfo.name ? this.state.userInfo.name : loggedUser.name,
      phoneNo : this.state.userInfo.phoneNo ? this.state.userInfo.phoneNo : this.props.userInfy.phoneNo,
      gender : this.state.userInfo.gender ? this.state.userInfo.gender : this.props.userInfy.gender,
      userID : loggedUser.id
    };
    event.preventDefault();
    this.props.saveUserProfile(newProfile);
    console.log(this.state.userInfo, this.state.token);
  }

  loadImage = (event) => {

    var fileReader = new FileReader(); 
    //fileReader.onload = () => {};
    fileReader.readAsDataURL(event.target.files[0]);
    fileReader.onloadend =() => {
      console.log(fileReader.result)
      let loggedUser = JSON.parse(sessionStorage.getItem("user"));
    let newProfile = {
      profilePicImgStr : fileReader.result,
      userID : loggedUser.id
    };
    this.props.uploadProfilePic(newProfile)
    } 
    //console.log(fileReader.readAsDataURL(event.target.files[0]))
    // let loggedUser = JSON.parse(sessionStorage.getItem("user"));
    // let newProfile = {
    //   profilePicImgStr : URL.createObjectURL(event.target.files[0]),
    //   userID : loggedUser.id
    // };
    // this.props.uploadProfilePic(newProfile)
    // this.setState({
    //   profilePicImgStr: URL.createObjectURL(event.target.files[0])
    // })
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

  const genderObj = [
    {
      name : "Male",
      value : "MALE"
    },{
      name : "Female",
      value : "FEMALE"
    },{
      name : "Other",
      value : "OTHER"
    }
  ]

  const { name, email, username, phoneNo, profilePicImgStr, gender }= this.props.userInfy;

  const profilePic = profilePicImgStr ? profilePicImgStr : (gender === "MALE") ? maleAvatar : femaleAvatar;
  
   const profile = (!this.props.loading) ? 
     <div className="profile-from-wrap">
          <h1>Profile Information</h1>
          <form>
            <div className="profile-pic-sec">
              <img  className="profile-pic" src={profilePic}/>
              <input id="praveen" type="file" className="km-btn-file" onChange={this.loadImage} ></input>
              <label htmlFor="praveen" className="km-button km-button--primary km-btn-file-label">
                  <span>Upload</span>
              </label>
            </div>
            <div className="form-group">
              <div className="label">Full Name</div>
              <input type="text" defaultValue={name} name="name" placeholder="full name"
              onChange={this.inputHandler}/>
            </div>
            <div className="form-group">
              <div className="label">Phone Number</div>
              <input type="text" defaultValue={phoneNo} name="phoneNo" placeholder="phone no"
              className="form-control" onChange={this.inputHandler} />
            </div>
            <div className="form-group">
              <div className="label">Gender</div>
              
                {
                  genderObj.map((gen, index) => {
                    return(<div className="radio-group">
                    <input type="radio" id={gen.name} name="gender" defaultChecked={gen.value === gender}
                     value={gen.value} onChange={this.inputHandler}/>
                    <label for={gen.name}>{gen.name}</label>
                    </div>)
                  })
                }
              
              
            </div>
            
            <button className="my-btn" onClick={this.updateProfile}>Update Profile</button>
          </form>
      </div>
   :  <Spinner/>

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
    getUserInfo : () => dispatch(getUserInfo()),
    uploadProfilePic : (data) => dispatch(uploadProfilePic(data))
  }
};

export default connect(mapStatesToProps,mapDispatchToProps)(UserProfile);