import {
  ADD_ABILITY,
  ADD_ABILITY_PROFILE,
  ADD_EXPERIENCE,
  ADD_LANGUAGE,
  ADD_LANGUAGE_PROFILE,
  ADD_PROFILE_EXPERIENCE,
  ADD_PROFILE_TRAINING,
  ADD_TRAINING,
  HANDLE_ABILITY,
  HANDLE_ABILITY_PROFILE,
  HANDLE_EXPERIENCE,
  HANDLE_EXPERIENCE_PROFILE,
  HANDLE_INPUT,
  HANDLE_INPUT_PROFILE,
  HANDLE_LANGUAGE,
  HANDLE_LANGUAGE_PROFILE,
  HANDLE_TRAINING,
  HANDLE_TRAINING_PROFILE,
  REMOVE_ABILITY,
  REMOVE_ABILITY_PROFILE,
  REMOVE_EXPERIENCE,
  REMOVE_LANGUAGE,
  REMOVE_LANGUAGE_PROFILE,
  REMOVE_PROFILE_EXPERIENCE,
  REMOVE_PROFILE_TRAINING,
  REMOVE_TRAINING,
  SET_PROFILE,
} from "../typesVar.js";

const initialState = {
  profile: [
    {
      form: {
        name: "",
        surname: "",
        born_date: "",
        phone_number: 0,
        city: "",
        title: "",
      },
      experience: [],
      training: [],
      languages: [],
      abilities: [],
    },
  ],
  form: {
    name: "",
    surname: "",
    born_date: "",
    phone_number: 0,
    city: "",
    title: "",
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

  if (action.type === HANDLE_INPUT || action.type === HANDLE_INPUT_PROFILE) {
    if (action.type === HANDLE_INPUT) {
      return {
        ...state,
        form: action.payload,
      };
    }
    let profile = [...state.profile];
    profile[0] = { ...profile[0], form: action.payload };
    return {
      ...state,
      profile: profile,
    };
  }

  if (
    action.type === HANDLE_EXPERIENCE ||
    action.type === HANDLE_EXPERIENCE_PROFILE
  ) {
    if (action.type === HANDLE_EXPERIENCE) {
      return {
        ...state,
        experience: action.payload,
      };
    }
    let experiences = [...state.profile[0].experience];
    experiences = { ...experiences, experience: action.payload };
    return JSON.parse(JSON.stringify(state));
  }

  if (
    action.type === ADD_EXPERIENCE ||
    action.type === ADD_PROFILE_EXPERIENCE
  ) {
    let newExperience = {
      company_name: "",
      work_name: "",
      functions: "",
      start_year: "",
      finish_year: "",
    };
    if (action.type === ADD_EXPERIENCE) {
      return {
        ...state,
        experience: state.experience.concat([newExperience]),
      };
    } else {
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
    }
    if (state.profile[0].experience.length > 1) {
      let experiences = [...state.profile[0].experience];

      // state.profile[0].experience.splice(action.payload, 1);
      let newExp = experiences.slice(0, action.payload).concat(experiences.slice(action.payload + 1));
      
      console.log(experiences)
      console.log(newExp, 'exper')
      return {
        ...state,
        profile: [...state.profile,[{ experience: newExp}]]
      };
    }
  }

  if (
    action.type === HANDLE_TRAINING ||
    action.type === HANDLE_TRAINING_PROFILE
  ) {
    if (action.type === HANDLE_TRAINING) {
      return {
        ...state,
        training: action.payload,
      };
    }
    let training = [...state.profile[0].training];
    training = { ...training, training: action.payload };
    return JSON.parse(JSON.stringify(state));
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

  if (
    action.type === HANDLE_LANGUAGE ||
    action.type === HANDLE_LANGUAGE_PROFILE
  ) {
    if (action.type === HANDLE_LANGUAGE) {
      return {
        ...state,
        languages: action.payload,
      };
    }
    let languages = [...state.profile[0].languages];
    languages = { ...languages, languages: action.payload };
    return JSON.parse(JSON.stringify(state));
  }

  if (action.type === ADD_LANGUAGE || action.type === ADD_LANGUAGE_PROFILE) {
    let newLanguage = {
      language_name: "Escribe el idioma",
      language_level: "",
    };
    if (action.type === ADD_LANGUAGE) {
      return {
        ...state,
        languages: state.languages.concat([newLanguage]),
      };
    } else {
      state.profile[0].languages.push(newLanguage);
      return JSON.parse(JSON.stringify(state));
    }
  }

  if (
    action.type === REMOVE_LANGUAGE ||
    action.type === REMOVE_LANGUAGE_PROFILE
  ) {
    if (action.type === REMOVE_LANGUAGE) {
      let langData = [...state.languages];
      langData.splice(action.payload, 1);
      return {
        ...state,
        languages: langData,
      };
    }
    state.profile[0].languages.splice(action.payload, 1);
    return JSON.parse(JSON.stringify(state));
  }

  if (
    action.type === HANDLE_ABILITY ||
    action.type === HANDLE_ABILITY_PROFILE
  ) {
    if (action.type === HANDLE_ABILITY) {
      return {
        ...state,
        abilities: action.payload,
      };
    } else {
      state.profile[0].abilities = action.payload;

      return JSON.parse(JSON.stringify(state));
    }
  }

  if (action.type === ADD_ABILITY || action.type === ADD_ABILITY_PROFILE) {
    let newAbility = "Escribe tu habilidad";

    if (action.type === ADD_ABILITY) {
      return {
        ...state,
        abilities: state.abilities.concat([newAbility]),
      };
    } else {
      state.profile[0].abilities.push(newAbility);
      return JSON.parse(JSON.stringify(state));
    }
  }

  if (
    action.type === REMOVE_ABILITY ||
    action.type === REMOVE_ABILITY_PROFILE
  ) {
    if (action.type === REMOVE_ABILITY) {
      let abilityData = [...state.abilities];
      abilityData.splice(action.payload, 1);
      return {
        ...state,
        abilities: abilityData,
      };
    } else {
      state.profile[0].abilities.splice(action.payload, 1);
      return JSON.parse(JSON.stringify(state));
    }
  }
  return state;
};
