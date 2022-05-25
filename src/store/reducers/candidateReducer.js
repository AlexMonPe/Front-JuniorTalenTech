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
  experience: {
    company_name: '',
    work_name: '',
    functions: '',
    start_year: '',
    finish_year: '',
  }
};

export const candidateReducer = (state = initialState, action) => {
  return state;
};
