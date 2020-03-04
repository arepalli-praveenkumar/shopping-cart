import React from 'react';
import { connect } from 'react-redux';
import { saveUserProfile } from "../../redux/actionTypes/userProfileActionTypes"

function UserProfile(props) {

    let userInfo = {}
const onChangeProfileInfo = (event) => {
    userInfo[event.currentTarget.name] = event.target.value;
    console.log(userInfo)
}

    return (
<div className="card">
		        <div className="card-body">
		            <div className="row">
		                <div className="col-md-12">
		                    <h4>Your Profile</h4>
		                    <hr/>
		                </div>
		            </div>
		            <div className="row">
		                <div className="col-md-12">
		                    <div>
                              <div className="form-group row">
                                <label for="name" className="col-4 col-form-label">First Name</label> 
                                <div className="col-8">
                                  <input id="name" name="firstname" 
                                  placeholder="First Name" className="form-control here" 
                                  type="text" onChange={(event)=>onChangeProfileInfo(event)}/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="lastname" className="col-4 col-form-label">Last Name*</label> 
                                <div className="col-8">
                                  <input id="lastname" name="lastname" placeholder="Last Name" 
                                  className="form-control here" type="text"
                                  onChange={(event)=>onChangeProfileInfo(event)}/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="text" className="col-4 col-form-label">Phone Number*</label> 
                                <div className="col-8">
                                  <input id="text" name="text" placeholder="Phone Number" 
                                  className="form-control here" required="required" type="text"
                                  onChange={(event)=>onChangeProfileInfo(event)}/>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label for="email" className="col-4 col-form-label">Email*</label> 
                                <div className="col-8">
                                  <input id="email" name="email" placeholder="Email" 
                                  className="form-control here" required="required" type="text"
                                  onChange={(event)=>onChangeProfileInfo(event)}/>
                                </div>
                              </div> 
                              <div className="form-group row">
                                <div className="offset-4 col-8">
                                  <button name="submit" className="btn btn-primary"
                                  onClick={()=>props.saveUserProfile(userInfo)}>Update My Profile</button>
                                </div>
                              </div>
                            </div>
		                </div>
		            </div>
		            
		        </div>
		    </div>
    )
}

const mapStatesToProps = (state) => ({
    
});

const mapDispatchToProps = {
    saveUserProfile
};

export default connect(mapStatesToProps,mapDispatchToProps)(UserProfile);