export const apiConsumer = {
  registerCandidate: async (formData) => {
    try {
      const createCandidate = await fetch("http://localhost:1919/candidates/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await createCandidate.json();
    } catch (error) {
      console.log(error, "error in register candidate apiconsumer");
    }
  },
  registerCompany: async (formData) => {
    try {
      const createCompany = await fetch("http://localhost:1919/companies/", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await createCompany.json();
    } catch (error) {
      console.log(error, "error in register company apiconsumer");
    }
  },
  login: async (loginData) => {
    try {
      const loginUser = await fetch("http://localhost:1919/users/login", {
        method: "POST",
        body: JSON.stringify(loginData),
        headers: {
          "Content-Type": "application/json",
        },
      });
      return await loginUser.json();
    } catch (error) {
      console.log(error, "Error login in user apiconsumer");
    }
  },
  getCandidateByUserId: async (idUser) => {
    try {

      return await (await fetch(`http://localhost:1919/candidates/${idUser}`)).json();
    } catch (error) {
      console.log(error, "Error in getcandidateByUser in apiConsumer ");
    }
  },
};
