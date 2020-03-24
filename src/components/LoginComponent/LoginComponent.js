import React from 'react';
import { connect } from 'react-redux';
import GoogleLogin from 'react-google-login';

class LoginComponent extends React.Component {


    signup(res) {
        
            const googleresponse = {
        
              Name: res.profileObj.name,
        
              email: res.profileObj.email,
        
              token: res.googleId,
        
              Image: res.profileObj.imageUrl,
        
              ProviderId: 'Google'
        
            };
        
            console.log(googleresponse);
            this.props.history.push('/products')
            //debugger;
        
            // axios.post('http://localhost:60200/Api/Login/SocialmediaData', googleresponse)
        
            //   .then((result) => {
        
            //     let responseJson = result;
        
            //     sessionStorage.setItem("userData", JSON.stringify(result));
        
            //     this.props.history.push('/Dashboard')
        
            //   });
        
          };
    
    render () {


        const responseGoogle = (response) => {
        
            console.log(response);
      
            var res = response.profileObj;
      
            console.log(res);
      
            //debugger;
      
            this.signup(response);
      
          }

        return (
            
        <div className="container">
            <div className="row">

          <div className="col-sm-12 btn btn-info">

            Login With Google Using ReactJS - Test

            </div>

        </div>

        <div className="row">

          <div style={{ 'paddingTop': "20px" }} className="col-sm-12">

            <div className="col-sm-4"></div>

            <div className="col-sm-4">

              <GoogleLogin

                clientId="464944719379-fbu6ptpt8fensf7ah9u7ii65r29ut9cc.apps.googleusercontent.com"

                buttonText="Login with Google"

                onSuccess={responseGoogle}

                onFailure={responseGoogle} ></GoogleLogin>

            </div>

            <div className="col-sm-4"></div>

          </div>
        </div>
        </div>
                        
        )
    }
}

const mapStatesToProps = (state) => ({
    
});

const mapDispatchToProps = {
};

export default connect(mapStatesToProps,mapDispatchToProps)(LoginComponent);