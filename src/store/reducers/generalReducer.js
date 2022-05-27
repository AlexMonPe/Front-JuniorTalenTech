import { CLOSE_POPUP, SHOW_POPUP } from "../typesVar.js";

const initialState = {
  popup: { visible: false, text: "" },
};

export const generalReducer = (state = initialState, action) => {

  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        popup: { visible: true, text: action.payload },
      };
    case CLOSE_POPUP:
      return {
        ...state,
        popup: { visible: false },
      };
  }
  return state;
};
