import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePopup } from "../../hooks/usePopup.js";
import { apiConsumer } from "../../services/apiConsumer.js";
import actionCreator from "../../store/actionTypes.js";
import {
  HANDLE_INPUT_COMPANY,
  IS_EDITABLE,
  SET_COMPANY_PROFILE,
} from "../../store/typesVar.js";

export const ProfileCompany = () => {
  const popUp = usePopup();
  const dispatch = useDispatch();
  const company = useSelector((state) => state.company.form);

  const handleInputCompanyProfile = (event) => {
    let inputData = { ...company, [event.target.name]: event.target.value };
    dispatch(actionCreator(HANDLE_INPUT_COMPANY, inputData));
  };

  const idUser = localStorage.getItem("id");

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const profile = await apiConsumer.getCompanyByUserId(idUser);
    console.log(profile, "profile");
        
        dispatch(actionCreator(SET_COMPANY_PROFILE, profile[0]));
        dispatch(actionCreator(IS_EDITABLE));
      } catch (error) {
        console.log(error);
      }
    };
    loadProfile();
  }, []);
  const updateSubmit = async (event) => {
    event.preventDefault();

    try {
      
      const companyUpdated = await apiConsumer.updateCompany(company);
      if (companyUpdated.error) {
        popUp(`${companyUpdated.error}`);
      } else {
        popUp(`¡Actualizado correctamente!`);
      }
    } catch (error) {}
  };
  return (
    <Fragment>
      {company && (
        <div className="update-company-container p-5">
          <form onSubmit={(event) => updateSubmit(event)}>
            <div className="container-form-data mb-5">
              <h2 className="col-12 mb-4 text-center">Datos de la empresa</h2>
              <div className="form-floating col-11 mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="nombre"
                  name="name"
                  defaultValue={company.name}
                  onBlur={handleInputCompanyProfile}
                />
                <label htmlFor="floatingInput ">Nombre</label>
              </div>

              <div className="form-floating col-11 mb-4">
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="titulo"
                  name="title"
                  defaultValue={company.title}
                  onBlur={handleInputCompanyProfile}
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
                  defaultValue={company.description}
                  onBlur={handleInputCompanyProfile}
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
                  defaultValue={company.ubication}
                  onBlur={handleInputCompanyProfile}
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
                  defaultValue={company.phone_number}
                  onBlur={handleInputCompanyProfile}
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
                  defaultValue={company.website}
                  onBlur={handleInputCompanyProfile}
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
                  defaultValue={company.cif}
                  onBlur={handleInputCompanyProfile}
                />
                <label htmlFor="floatingInput ">CIF/NIF</label>
              </div>
              <div className="form-floating col-11 col-sm-5 mb-5">
                <select
                  className="form-select text-center"
                  id="employees"
                  aria-label="Floating label select example"
                  name="employees"
                  value={company.employees}
                  onChange={handleInputCompanyProfile}
                >
                  <option value="selecciona">Selecciona nº empleados</option>
                  <option value="1-10 empleados">1-10 empleados</option>
                  <option value="11-50 empleados">10-50 empleados</option>
                  <option value="51-500 empleados">51-500 empleados</option>
                  <option value="501-1000 empleados">501-1000 empleados</option>
                  <option value="1001-5000+ empleados">
                    1001-5000+ empleados
                  </option>
                  <option value="+5001 empleados">+5001 empleados</option>
                </select>
                <label htmlFor="floatingSelect">Nº empleados</label>
              </div>
            </div>
            <div className="text-center col-8">
              <input
                className="btn btn-outline-info mb-4 col-12 col-md-6 p-2"
                type="submit"
                value="Guardar"
              />
            </div>
          </form>
        </div>
      )}
    </Fragment>
  );
};
