import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser, getUserProfile, BuyAll, logout } from "../../actions/user";
import "./User.css";
import Button from "@material-ui/core/Button";

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
    const { user } = this.props;
    return (
      <div>
        <h2>{user.name}</h2>
        {user.cart.map(item => (
          <h4>{item.title}</h4>
        ))}
        <Button onClick={() => this.props.logout()}>Logout</Button>
        <Button onClick={() => this.props.buyAll(user._id)}>Buy All</Button>
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
    getUserProfile: getUserProfile,
    buyAll: BuyAll,
    logout: logout
  }
)(User);
