import React from "react";
import { Route, Switch } from "react-router-dom";
import "./Main.css";

import User from "../../user/User";
import Products from "../../products/Products";

import Product from "../../products/product-page/Product";
import requireAuthentication from "../../../utils/requireAuth";

class Main extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/products" component={Products} />
          <Route path="/user" component={requireAuthentication(User)} />
          <Route path="/item" component={Product} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default Main;
