import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser, getUserProfile } from "../../actions/user";
import "./User.css";

class User extends Component {
  componentDidMount() {
    document.body.className = "users show";
    this.props.getUserProfile(this.props.user._id);
  }
  
  componentWillUnmount() {
    document.body.className = "";
  }

  render() {
    console.log("user props:");
    console.log(this.props);
    return (
      <div>
        {console.log(this.props.user.cart)}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
    isAuth: state.userReducer.isAuth
  };
};

export default connect(
  mapStateToProps,
  {
    getUser: getUser,
    getUserProfile: getUserProfile
  }
)(User);
