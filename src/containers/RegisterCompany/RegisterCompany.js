import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { usePopup } from "../../hooks/usePopup.js";
import { apiConsumer } from "../../services/apiConsumer.js";
import actionCreator from "../../store/actionTypes.js";
import { HANDLE_INPUT_COMPANY } from "../../store/typesVar.js";

export const RegisterCompany = () => {
  const popUp = usePopup();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const companyData = useSelector((state) => state.company.form);

  const handleInputChange = (event) => {
    let inputData = { ...companyData, [event.target.name]: event.target.value };
    dispatch(actionCreator(HANDLE_INPUT_COMPANY, inputData));
  };

  const registerSubmit = async (event) => {
    event.preventDefault();

    try {
      const companyCreated = await apiConsumer.registerCompany(companyData);

      if (companyCreated) {
        popUp(
          `Te has registrado correctamente, ¡bienvenid@ ${companyData.name}!`
        );
        setTimeout(() => navigate("/login"), 4000);
      } else {
        popUp(`${companyCreated.error}`);
      }
    } catch (error) {}
  };

  return (
    <div className="register-company-container p-5">
      <form onSubmit={(event) => registerSubmit(event)}>
        <div className="container-form-data">
          <h2 className="col-12 mb-4 text-center">Datos de la empresa</h2>
          <div className="form-floating col-11 mb-4">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="nombre"
              name="name"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput ">Nombre</label>
          </div>
          <div className="form-floating mb-4 col-11 col-sm-6">
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="example@example.com"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-4 col-11 col-sm-4">
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              placeholder="contraseña"
              minLength={6}
              onBlur={handleInputChange}
              required
            />
            <label htmlFor="floatingInput">Contraseña</label>
          </div>
          <div className="form-floating col-11 mb-4">
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="titulo"
              name="title"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput ">Titulo</label>
          </div>

          <div className="form-floating col-11 mb-4">
            <textarea
              className="form-control"
              placeholder="Descripcion"
              id="description"
              name="description"
              style={{ height: "11em" }}
              onBlur={handleInputChange}
            ></textarea>
            <label htmlFor="floatingTextarea">Descripción</label>
          </div>
          <div className="form-floating col-11 col-sm-5 mb-4">
            <input
              type="text"
              className="form-control"
              id="ubication"
              placeholder="ubicacion"
              pattern="[a-zA-Z]{2,254}"
              name="ubication"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput ">Ubicación</label>
          </div>
          <div className="form-floating col-11 col-sm-5 mb-4">
            <input
              type="tel"
              className="form-control"
              id="phone_number"
              placeholder="telefono"
              minLength={9}
              maxLength={9}
              pattern="^(0|[1-9][0-9]*)$"
              name="phone_number"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput ">Teléfono</label>
          </div>
          <div className="form-floating col-11 mb-4">
            <input
              type="text"
              className="form-control"
              id="website"
              placeholder="Pagina web"
              name="website"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput ">Página Web</label>
          </div>
          <div className="form-floating col-11 col-sm-5 mb-4">
            <input
              type="text"
              className="form-control"
              id="cif"
              placeholder="cif"
              name="cif"
              onBlur={handleInputChange}
            />
            <label htmlFor="floatingInput ">CIF/NIF</label>
          </div>

          <div className="form-floating col-11 col-sm-5 mb-5">
            <select
              className="form-select text-center"
              id="employees"
              aria-label="Floating label select example"
              name="employees"
              onBlur={handleInputChange}
            >
              <option value="selecciona">Selecciona nº empleados</option>
              <option value="1-10 empleados">1-10 empleados</option>
              <option value="11-50 empleados">10-50 empleados</option>
              <option value="51-500 empleados">51-500 empleados</option>
              <option value="501-1000 empleados">501-1000 empleados</option>
              <option value="1001-5000+ empleados">1001-5000+ empleados</option>
              <option value="+5001 empleados">+5001 empleados</option>
            </select>
            <label htmlFor="floatingSelect">Nº empleados</label>
          </div>
          <div className="text-center col-5 ">
            <input
              className="btn btn-outline-info mb-4 col-11 col-md-6 p-2"
              type="submit"
              value="Register"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
