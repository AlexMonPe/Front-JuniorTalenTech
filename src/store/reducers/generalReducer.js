import {
  CLOSE_POPUP,
  IS_EDITABLE,
  IS_NOT_EDITABLE,
  SET_ERROR,
  SHOW_POPUP,
  USER_LOGOUT,
} from "../typesVar.js";

const initialState = {
  popup: { visible: false, text: "" },
  error: "",
  isEditable: false
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

    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case USER_LOGOUT:
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("role");
    
      case IS_EDITABLE:
        return{
          ...state, 
          isEditable: true
        }
        case IS_NOT_EDITABLE:
          return{
            ...state, 
            isEditable: false
          }
  }
  return state;
};
