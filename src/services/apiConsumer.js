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
  login: async (loginData) => {
    try {
      let loginUser = await fetch(
        "http://localhost:1919/users/login",
        {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return await loginUser.json();
    } catch (error) {
      console.log(error, "Error login in user apiconsumer");
    }
  },
};
