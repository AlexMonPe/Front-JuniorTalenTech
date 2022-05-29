import { usePopup } from "../../hooks/usePopup.js";
import { apiConsumer } from "../../services/apiConsumer.js";

const Login = () => {
  const popUp = usePopup();
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      const loginUser = await apiConsumer.login(loginData);

      localStorage.setItem("token", loginUser.token);
      localStorage.setItem("id", loginUser.id);
      localStorage.setItem("role", loginUser.role);

      if (loginUser.error) {
        popUp(`${loginUser.error}`);
      } else {
        console.log(loginUser);
        popUp(`Bienvenid@ a JuniorTalenTech`);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={loginSubmit} className="login">
        <div className="container-login-data ">
          <h2 className="mb-5 text-center">INICIAR SESION</h2>
          <div className="form-floating mb-4 col-12">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="example@example.com"
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-4 col-12">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="contraseña"
              minLength={6}
              required
            />
            <label htmlFor="floatingInput">Contraseña</label>
          </div>
          <div className="text-center">
            <input
              className="btn btn-outline-info mb-4 text-dark col-8 p-2"
              type="submit"
              value="Acceder"
            />
          </div>
          <span className="loginRedirect">
            Nuev@ en JuniorTalenTech? <a href="/home">Regístrate ahora</a>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
