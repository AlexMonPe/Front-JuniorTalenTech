import {
  ADD_ABILITY,
  ADD_EXPERIENCE,
  ADD_LANGUAGE,
  ADD_PROFILE_EXPERIENCE,
  ADD_PROFILE_TRAINING,
  ADD_TRAINING,
  HANDLE_ABILITY,
  HANDLE_EXPERIENCE,
  HANDLE_INPUT,
  HANDLE_LANGUAGE,
  HANDLE_TRAINING,
  REMOVE_ABILITY,
  REMOVE_EXPERIENCE,
  REMOVE_LANGUAGE,
  REMOVE_PROFILE_EXPERIENCE,
  REMOVE_PROFILE_TRAINING,
  REMOVE_TRAINING,
  SET_PROFILE,
} from "../typesVar.js";

const initialState = {
  profile: [
    {
      form: {},
      experience: [],
      training: [],
      languages: [],
      abilities: [],
    },
  ],
  form: {},
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
      language_name: "Escribe el idioma",
      language_level: "",
    },
  ],
  abilities: ["Escribe tu habilidad"],
};

export const candidateReducer = (state = initialState, action) => {
  if (action.type === SET_PROFILE) {
    return {
      ...state,
      profile: action.payload,
    };
  }

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

  if (action.type === ADD_EXPERIENCE || action.type === ADD_PROFILE_EXPERIENCE) {
    let newExperience = {
      company_name: "",
      work_name: "",
      functions: "",
      start_year: "",
      finish_year: "",
    };
    if (action.type === ADD_EXPERIENCE){
      return {
      ...state,
      experience: state.experience.concat([newExperience]),
    };
    }else {
      state.profile[0].experience.push(newExperience);
      return JSON.parse(JSON.stringify(state));
    }
    
  }
  if (
    action.type === REMOVE_EXPERIENCE ||
    action.type === REMOVE_PROFILE_EXPERIENCE
  ) {
    if (action.type === REMOVE_EXPERIENCE) {
      let expData = [...state.experience];
      if (expData.length > 1) expData.splice(action.payload, 1);
      return {
        ...state,
        experience: expData,
      };
    } else {
      console.log(action.payload, ' indice')
      if(state.profile[0].experience.length > 1){
        state.profile[0].experience.splice(action.payload, 1);
      }
      return JSON.parse(JSON.stringify(state));
    }
  }

  if (action.type === HANDLE_TRAINING) {
    return {
      ...state,
      training: action.payload,
    };
  }

  if (action.type === ADD_TRAINING || action.type === ADD_PROFILE_TRAINING) {
    let newTraining = {
      level: "",
      specialty: "",
      center: "",
      start_year: "",
      finish_year: "",
    };
    if (action.type === ADD_TRAINING) {
      return {
        ...state,
        training: state.training.concat(newTraining),
      };
    } else {
      state.profile[0].training.push(newTraining);
      return JSON.parse(JSON.stringify(state));
    }
  }

  if (
    action.type === REMOVE_TRAINING ||
    action.type === REMOVE_PROFILE_TRAINING
  ) {
    if (action.type === REMOVE_TRAINING) {
      let trainData = [...state.training];
      if (trainData.length > 1) trainData.splice(action.payload, 1);
      return {
        ...state,
        training: trainData,
      };
    } else {
      state.profile[0].training.splice(action.payload, 1);
      return JSON.parse(JSON.stringify(state));
    }
  }

  if (action.type === HANDLE_LANGUAGE) {
    return {
      ...state,
      languages: action.payload,
    };
  }

  if (action.type === ADD_LANGUAGE) {
    let newLanguage = {
      language_name: "Escribe el idioma",
      language_level: "",
    };
    return {
      ...state,
      languages: state.languages.concat([newLanguage]),
    };
  }

  if (action.type === REMOVE_LANGUAGE) {
    let langData = [...state.languages];
    langData.splice(action.payload, 1);
    return {
      ...state,
      languages: langData,
    };
  }

  if (action.type === HANDLE_ABILITY) {
    return {
      ...state,
      abilities: action.payload,
    };
  }

  if (action.type === ADD_ABILITY) {
    let newAbility = "Escribe tu habilidad";
    return {
      ...state,
      abilities: state.abilities.concat([newAbility]),
    };
  }

  if (action.type === REMOVE_ABILITY) {
    let abilityData = [...state.abilities];
    abilityData.splice(action.payload, 1);
    return {
      ...state,
      abilities: abilityData,
    };
  }
  return state;
};
