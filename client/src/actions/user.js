import axios from "axios";

import {
  SET_USER_SUCCESS,
  SET_USER_REQUEST,
  SET_USER_FAILURE
} from "../constants/user";
import { ADD_ITEM } from "../constants/user";
import { URL } from "../constants/common";

export function getUser(_id) {
  return axios
    .get(`${URL}user/${_id}`)
    .then(res => {
      console.log(res);
      return res.data;
    })
    .catch(err => console.log(err));
}

export function SignInUser(user_data) {
  return dispatch => {
    console.log("adding us..");
    axios
      .post(`${URL}user`, user_data)
      .then(res => {
        let user = res.data;
        console.log("==================signin=======");
        console.log(user);
        console.log("==================signin=======");
        localStorage.setItem("Auth", JSON.stringify(user));
        dispatch({ type: SET_USER_SUCCESS, user });
      })
      .catch(err => console.log(err));
  };
}

export function AddItemToCart(item_id, user_id) {
  console.log(`${user_id} buy ${item_id}`);
  return dispatch => {
    axios
      .post(`${URL}item/getItem`, { item_id: item_id, user_id: user_id })
      .then(res => {
        dispatch({ type: ADD_ITEM, user_id });
      })
      .catch(err => console.log(err));
  };
}
