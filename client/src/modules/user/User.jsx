import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUser } from "../../actions/user";
import "./User.css";

class User extends Component {
  componentDidMount() {
    document.body.className = "users show";
  }
  
  componentWillUnmount() {
    document.body.className = "";
  }
  
  componentWillMount() {
    this.props.getUser(this.props.match.params._id);
  }

  render() {
    console.log("user props:");
    console.log(this.props);
    return (
      <div>
        {this.props.user._id}
      </div>
    );
  }
}

User.propTypes = {
  params: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

export default connect(
  mapStateToProps,
  {
    getUser
  }
)(User);
