import {
  ADD_EXPERIENCE,
  HANDLE_EXPERIENCE,
  HANDLE_INPUT,
} from "../typesVar.js";

const initialState = {
  form: {
    name: "",
    surname: "",
    email: "",
    password: "",
    born_date: "",
    phone_number: "",
    city: "",
    title: "",
    training: [
      {
        level: "",
        specialty: "",
        center: "",
        start_year: "",
        finish_year: "",
      },
    ],
    abilities: [""],
    languages: [
      {
        language_name: "",
        language_level: "",
      },
    ],
  },
  experience: [
    {
      company_name: "",
      work_name: "",
      functions: "",
      start_year: "",
      finish_year: "",
    },
  ],
};

export const candidateReducer = (state = initialState, action) => {
  if (action.type === HANDLE_INPUT) {
    return {
      ...state,
      form: {
        [action.payload.name]: action.payload.value,
      },
    };
  }
  if (action.type === HANDLE_EXPERIENCE) {
    return {
      ...state,
      experience: action.payload,
    };
  }

  if (action.type == ADD_EXPERIENCE) {
    let newExperience = {
      company_name: "",
      work_name: "",
      functions: "",
      start_year: "",
      finish_year: "",
    };
     this.experience.push(newExperience)
  }
  return state;
};
