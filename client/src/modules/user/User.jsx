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
    this.props.getUser(this.props.match.params.id);
  }

  render() {
    console.log("user props:");
    console.log(this.props);
    return (
      <div>
        {Object.keys(this.props.profile).length > 0 ? (
          <UserList items={this.props} />
        ) : (
          ""
        )}
      </div>
    );
  }
}
function UserList({ items }) {
  return <h1>User</h1>;
}

User.propTypes = {
  params: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    user: state.user.user,
    profile: state.user.profile
  };
};
export default connect(
  mapStateToProps,
  {
    getUser
  }
)(User);
