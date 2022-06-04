export const apiConsumer = {
  registerCandidate: async (formData) => {
    try {
      const createCandidate = await fetch("https://junior-talent-tech-back.herokuapp.com/candidates/", {
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
      const createCompany = await fetch("https://junior-talent-tech-back.herokuapp.com/companies/", {
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
      const loginUser = await fetch("https://junior-talent-tech-back.herokuapp.com/users/login", {
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
      return await (await fetch(`https://junior-talent-tech-back.herokuapp.com/candidates/user/${idUser}`)).json();
    } catch (error) {
      console.log(error, "Error in getcandidateByUser in apiConsumer ");
    }
  },
  updateCandidate: async (candidateProfile) => {
    try {
      const profileUpdated = await fetch(
        `https://junior-talent-tech-back.herokuapp.com/candidates/${candidateProfile._id}` ,
        {
          method: "PATCH",
          body: JSON.stringify(candidateProfile),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return profileUpdated;
    } catch (error) {
      console.log(error, "Error in updateProfile in apiConsumer");
    }
  },
  getCompanyByUserId: async (idUser) => {
    try {
      const companyFound = await fetch(`https://junior-talent-tech-back.herokuapp.com/companies/${idUser}`)

      return companyFound.json();
    } catch (error) {
      console.log(error, "Error getting company by user id in apiConsumer");
    }
  },
  updateCompany: async (company) => {
    try {
      console.log(company._id, 'id')
      const companyUpdated = await fetch(`https://junior-talent-tech-back.herokuapp.com/companies/${company._id}`,
      {
        method: "PATCH",
        body: JSON.stringify(company),
        headers: {
          "Content-Type": "application/json",
        },
      })
      return companyUpdated;
    } catch (error) {
      console.log(error, 'error updating company in apiconsumer')
    }
  },
  getAllCandidates: async () => {
    try {
      
      return await (await fetch('https://junior-talent-tech-back.herokuapp.com/candidates/')).json()
    } catch (error) {
      console.log(error, 'Error getting candidates')
    }
  },
  getCandidateById: async (idCandidate) => {
    try {
      return await (await fetch(`https://junior-talent-tech-back.herokuapp.com/candidates/${idCandidate}`)).json();
    } catch (error) {
      console.log(error, "Error in getcandidateByUser in apiConsumer ");
    }
  }
}
