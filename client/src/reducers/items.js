import {
  SET_ITEMS_FAILURE,
  SET_ITEMS_REQUEST,
  SET_ITEMS_SUCCESS,
  SET_ITEM_FAILURE,
  SET_ITEM_REQUEST,
  SET_ITEM_SUCCESS
} from "../constants/index";

const initialState = {
  products: [],
  product: {},
  isLoading: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS_SUCCESS:
      return {
        ...state,
        products: action.payload,
        isLoading: false
      };
    case SET_ITEM_SUCCESS:
      return {
        ...state,
        product: action.payload,
        isLoading: false
      };
    case SET_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case SET_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case SET_ITEM_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};

export default reducer;
