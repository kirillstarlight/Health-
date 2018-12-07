import axios from "axios";

import {
  SET_USER_SUCCESS,
  SET_USER_REQUEST,
  SET_USER_FAILURE,
  SET_ITEM_REQUEST,
  SET_ITEM_SUCCESS,
  SET_ITEM_FAILURE,
} from "../constants/user";

import { URL } from '../constants/common';

export function getUser(_id) {
    return axios
      .get(`${URL}user/${_id}`)
      .then(res => {
        return res.data;
      })
      .catch(err => console.log(err));
  }
  export function getUserProfile(_id) {
    return dispatch => {
      axios
        .get(`${URL}user/profile/${_id}`)
        .then(res => {
          let profile = res.data;
          dispatch({ type: "SET_PROFILE", profile });
        })
        .catch(err => console.log(err));
    };
  }


export function SignInUser(user_data) {
    return dispatch => {
      axios
        .post(`${URL}user`, user_data)
        .then(res => {
          let user = res.data;
          localStorage.setItem("Auth", JSON.stringify(user));
          dispatch({ type: SET_USER_SUCCESS, user });
        })
        .catch(err => console.log(err));
    };
  }