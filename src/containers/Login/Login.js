import Input from "../../components/Input/Input.js";
import { apiConsumer } from "../../services/apiConsumer.js";

const Login = () => {
  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const loginData = {
        email: e.target[0].value,
        password: e.target[1].value,
      };

      const loginUser = await apiConsumer.login(loginData);
      localStorage.setItem('token',loginUser.token)
      localStorage.setItem('id',loginUser.id)
      localStorage.setItem('role',loginUser.role)

    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login-page">
      <form onSubmit={(e) => loginSubmit(e)} className="login">
      <div className="container-login-data ">
        <h2 className="mb-5 text-center">LOGIN</h2>
        <div className="form-floating mb-4 col-12">
          <Input
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
          <Input
            className="btn btn-outline-info mb-4 col-8 p-3"
            type="submit"
            value="Sign in"
          />
        </div>
        <p className="loginRedirect">
          New in JuniorTalenTech? <a href="/home">Sign up now</a>
        </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
