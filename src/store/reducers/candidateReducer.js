import {
  ADD_EXPERIENCE,
  ADD_LANGUAGE,
  ADD_TRAINING,
  HANDLE_EXPERIENCE,
  HANDLE_INPUT,
  HANDLE_LANGUAGE,
  HANDLE_TRAINING,
  REMOVE_EXPERIENCE,
  REMOVE_LANGUAGE,
  REMOVE_TRAINING,
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
    abilities: [""],
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
  training: [
    {
      level: "",
      specialty: "",
      center: "",
      start_year: "",
      finish_year: "",
    },
  ],
  languages: [
    {
      language_name: "",
      language_level: "",
    },
  ],
};

export const candidateReducer = (state = initialState, action) => {
  if (action.type === HANDLE_INPUT) {
    return {
      ...state,
      form: action.payload,
    };
  }
  if (action.type === HANDLE_EXPERIENCE) {
    return {
      ...state,
      experience: action.payload,
    };
  }

  if (action.type === ADD_EXPERIENCE) {
    let newExperience = {
      company_name: "",
      work_name: "",
      functions: "",
      start_year: "",
      finish_year: "",
    };
    return {
      ...state,
      experience: state.experience.concat([newExperience]),
    };
  }
  if (action.type === REMOVE_EXPERIENCE) {
    let expData = [...state.experience];
    if (expData.length > 1) expData.splice(action.payload, 1);
    return {
      ...state,
      experience: expData,
    };
  }

  if (action.type === HANDLE_TRAINING) {
    return {
      ...state,
      training: action.payload,
    };
  }

  if (action.type === ADD_TRAINING) {
    let newTraining = {
        level: "",
        specialty: "",
        center: "",
        start_year: "",
        finish_year: "",
      };
    return {
      ...state,
      training: state.training.concat([newTraining]),
    };
  }

  if (action.type === REMOVE_TRAINING) {
    let trainData = [...state.training];
    if (trainData.length > 1) trainData.splice(action.payload, 1);
    return {
      ...state,
      training: trainData,
    };
  }

  if (action.type === HANDLE_LANGUAGE) {
    return {
      ...state,
      languages: action.payload,
    };
  }

  if (action.type === ADD_LANGUAGE) {
    let newLanguage = {
        language_name: "",
        language_level: "",
      };
    return {
      ...state,
      languages: state.languages.concat([newLanguage]),
    };
  }

  if (action.type === REMOVE_LANGUAGE) {
    let langData = [...state.languages];
    if (langData.length > 1) langData.splice(action.payload, 1);
    return {
      ...state,
      languages: langData,
    };
  }
  return state;
};
