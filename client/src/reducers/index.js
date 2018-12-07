import { combineReducers } from "redux";

import itemReducer from "./items";
import userReducer from "./user";

export default combineReducers({
  itemReducer,
  userReducer
});
