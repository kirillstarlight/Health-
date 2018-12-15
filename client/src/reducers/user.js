import {
  SET_USER_SUCCESS,
  SET_USER_REQUEST,
  SET_USER_FAILURE,
  SET_PROFILE_REQUEST,
  SET_PROFILE_SUCCESS,
  SET_PROFILE_FAILURE,
  DELETE_USER
} from "../constants/user";

const initialState = {
  user: {},
  isAuth: false,
  profile: {},
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_REQUEST:
      return { ...state, isLoading: true };
    case SET_PROFILE_FAILURE:
      return { ...state, isLoading: false };
    case SET_USER_REQUEST:
      return { ...state, isLoading: true };
    case SET_USER_FAILURE:
      return { ...state, isLoading: false };
    case SET_USER_SUCCESS:
      return {
        ...state,
        isAuth: Object.keys(action.payload).length > 0 ? true : false,
        user: action.payload,
        isLoading: false
      };
    case SET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: action.payload,
        isLoading: false
      };
    case DELETE_USER:
      return {
        ...state,
        profile: {},
        user: {},
        isAuth: false
      };
    default:
      return state;
  }
};
