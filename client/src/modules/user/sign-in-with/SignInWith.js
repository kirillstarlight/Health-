import React, { Component } from "react";
import { connect } from "react-redux";
import GoogleLogin from "react-google-login";
import { SignInUser } from "../../../actions/user";
import { toggleClose, toggleOpen } from "../../../actions/common";

class SignInWith extends Component {
  render() {
    const responseGoogle = res => {
      let userData = {
        name: res.w3.ig,
        provider: "google",
        email: res.w3.U3,
        provider_id: res.El,
        token: res.Zi.access_token,
        provider_pic: res.w3.Paa
      };
      console.log(userData);
      // build our user data
      this.props.SignInUser(userData);
      this.props.toggleClose();
    };
    return (
      <div>
        <div
          data-behavior="overlay"
          className={
            this.props.modalMode === true
              ? "overlay overlay-hugeinc open"
              : "overlay overlay-hugeinc"
          }
        >
          {/* <button
            onClick={this.props.toggleClose}
            data-behavior="close-overlay"
            type="button"
            className="overlay-close"
          /> */}
          <GoogleLogin
            className="button google"
            clientId="602184810128-m64kjqv4ennp6bihp21qqani88sdgb8l.apps.googleusercontent.com"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          >
            <i className="fa fa-google" />
            <span> SignIn with Google</span>
          </GoogleLogin>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    modalMode: state.commonReducer.modalMode
  };
};
export default connect(
  mapStateToProps,
  {
    toggleClose,
    toggleOpen,
    SignInUser
  }
)(SignInWith);
