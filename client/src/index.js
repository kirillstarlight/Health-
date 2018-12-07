import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import App from "./modules/app/App";
import store, { history } from "./store";
import { SET_USER_SUCCESS } from "./constants/user";
import {getUser} from './actions/user';

if (localStorage.Auth) {
  // update localstorage
  store.dispatch({
    type: SET_USER_SUCCESS,
    user: JSON.parse(localStorage.Auth)
  });
  var _id = JSON.parse(localStorage.Auth)._id;
  getUser(_id).then(res => {
    store.dispatch({ type: SET_USER_SUCCESS, user: res });
  });
}

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
