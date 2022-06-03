import { HANDLE_INPUT_COMPANY, SET_COMPANY_PROFILE } from "../typesVar.js";

const initialState = {
  form: {
    name: "",
    title: "",
    description: "",
    ubication: "",
    website: "",
    cif: "",
    phone_number: "",
    employees: "",
  },
};

export const companyReducer = (state = initialState, action) => {
  
  if (action.type === HANDLE_INPUT_COMPANY) {
    return {
      ...state,
      form: action.payload,
    };
  }

  if (action.type === SET_COMPANY_PROFILE){
    return {
      ...state,
      form: action.payload,
    }
  }
  
  return state;
};
