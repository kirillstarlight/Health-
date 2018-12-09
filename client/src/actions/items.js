import axios from "axios";

import {
  SET_ITEMS_REQUEST,
  SET_ITEMS_SUCCESS,
  SET_ITEMS_FAILURE,
  SET_ITEM_REQUEST,
  SET_ITEM_SUCCESS,
  SET_ITEM_FAILURE,
} from "../constants/items";

import { URL } from '../constants/common';


export function loadItems() {
  return dispatch => {
    axios
      .get(`${URL}items`)
      .then(dispatch({ type: SET_ITEMS_REQUEST }))
      .then(res => {
        console.log(res);
        let items = res.data;
        dispatch({ type: SET_ITEMS_SUCCESS, payload: items });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: SET_ITEMS_FAILURE });
      });
  };
}

export function getItem(item_id) {
  return dispatch => {
    axios
      .get(`${URL}item/`,item_id)
      .then( dispatch({ type: SET_ITEM_REQUEST }))
      .then(res => {
        console.log(res);
        let item = res.data;
        dispatch({ type: SET_ITEM_SUCCESS, payload: item });
        })
        .catch(err =>{ 
            console.log(err);
            dispatch({ type: SET_ITEM_FAILURE });
        });
  };
}
