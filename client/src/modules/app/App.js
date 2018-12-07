import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
import "./App.css";

import WrappedLink from "../../utils/link-button/LinkButton";
import Main from "./main/Main";

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

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <AppBar position="static" className="appBar">
          <Toolbar variant="dense" className="toolbar">
            <Typography variant="h3" color="default" className="grow">
              Health++
            </Typography>
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
              <WrappedLink to="/products" linkText="Products" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem>
              <WrappedLink to="/user-cart" linkText="User" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
