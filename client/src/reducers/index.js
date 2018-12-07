import { combineReducers } from "redux";

import itemReducer from "./items";
import userReducer from "./user";
import commonReducer from "./common";

export default combineReducers({
  itemReducer,
  userReducer,
  commonReducer
});
