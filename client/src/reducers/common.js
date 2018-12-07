import { TOGGLE_MODAL } from "../constants/common";

const defaultState = {
  modalMode: false
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...defaultState,
        modalMode: action.modalMode
      };
    default:
      return state;
  }
};

export default reducer;
