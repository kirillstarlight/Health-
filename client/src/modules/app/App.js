import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import "./App.css";
import { Route, Redirect } from "react-router";

import WrappedLink from "../../utils/link-button/LinkButton";
import Main from "./main/Main";
import SignInWith from "../user/sign-in-with/SignInWith";
import { Link } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleUserOpen = () => {
    return <Redirect to="user" push />;
  };

  render() {
    const { open } = this.state;
    const { id } = this.props.user;
    const { isAuth } = this.props;
    return (
      <React.Fragment>
        <AppBar position="static" className="appBar">
          <Toolbar variant="dense" className="toolbar">
            <Typography variant="h3" color="default" className="grow">
              Health++
            </Typography>
            {isAuth ? (
              <Link to="/user">
                <IconButton
                  color="inherit"
                  aria-label="Menu"
                  onClick={this.handleUserOpen}
                  className="menuButton"
                >
                  <AccountCircle />
                </IconButton>
              </Link>
            ) : (
              <SignInWith />
            )}
          </Toolbar>
        </AppBar>
        <AppBar position="static" className="appBarSecond">
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={this.handleDrawerOpen}
            className="menuButton"
          >
            <MenuIcon />
          </IconButton>
        </AppBar>
        <Drawer variant="persistent" anchor="left" open={open}>
          <div className="drawer-header">
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>
            <ListItem button>
              <WrappedLink to="/products" linkText="Medecines" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button>
              <WrappedLink to="#" linkText="Equipment" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Main />
      </React.Fragment>
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
  {}
)(App);
