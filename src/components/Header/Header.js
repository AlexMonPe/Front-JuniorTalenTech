import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../hooks/usePopup.js";
import actionCreator from "../../store/actionTypes.js";
import { USER_LOGOUT } from "../../store/typesVar.js";

export const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const popUp = usePopup();

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img className="logo" src="/images/logo.png" alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            {localStorage.getItem("role") == "company" && (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/profilecompany"
                >
                  Perfil
                </a>
              </li>
            )}{" "}
            {localStorage.getItem("role") == "candidate" && (
              <li className="nav-item d-flex">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/profilecandidate"
                >
                  Perfil
                </a>
              </li>
            )}
            {localStorage.getItem("role") === "company" && (
              <li className="nav-item">
                <a className="nav-link" href="/search">
                  Buscar
                </a>
              </li>
            )}
            {!localStorage.getItem("id") && (
              <li className="nav-item d-flex">
                <a className="nav-link" href="/login">
                  Iniciar sesión
                </a>
                <a className="nav-link" href="/">
                  Registrarse
                </a>
              </li>
            )}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Opciones
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="/">
                    Inicio
                  </a>
                </li>

                {localStorage.getItem("id") ? (
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        dispatch(actionCreator(USER_LOGOUT));
                        popUp("Has cerrado sesión");
                        setTimeout(() => navigate("/login"), 3000);
                      }}
                    >
                      Cerrar sesión
                    </a>
                  </li>
                ) : (
                  <li>
                    <a
                      className="dropdown-item"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      Iniciar sesión
                    </a>
                  </li>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
