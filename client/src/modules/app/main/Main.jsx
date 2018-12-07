import React from "react";
import { Route } from "react-router";
import User from "../../user/User";
import Products from "../../products/Products";
import "./Main.css";

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <Route path="/products" component={Products} exact />
        <Route path="/user-cart" component={User} />
      </div>
    );
  }
}

export default Main;
