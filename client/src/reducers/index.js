import { combineReducers } from "redux";

import itemsReducer from "./items";
import userReducer from "./user";
import commonReducer from "./common";

export default combineReducers({
  itemsReducer,
  userReducer,
  commonReducer
});
