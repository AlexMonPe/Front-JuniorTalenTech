import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Training = ({
  handleTrainingChange,
  removeTraining,
  addTraining,
}) => {
  const training = useSelector((state) => state.candidate.training);

  return (
    <Fragment>
      {training.map((training, index) => {
        return (
          <div className="container-form-data mb-5" key={index}>
            <h2 className="col-12 mb-4 text-center">Formación</h2>
            <div className="form-floating mb-4 col-12 col-sm-5">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Floating label select example"
                name="level"
                value={training.level}
                onChange={(event) => handleTrainingChange(index, event)}
                required
              >
                <option value="">Selecciona nivel</option>
                <option value="Educacion Secundaria Obligatoria">
                  Educacion Secundaria Obligatoria
                </option>
                <option value="Bachillerato">Bachillerato</option>
                <option value="Ciclo Formativo de grado Medio">
                  Ciclo Formativo de grado Medio
                </option>
                <option value="Ciclo Formativo de grado Superior">
                  Ciclo Formativo de grado Superior
                </option>
                <option value="Licenciatura">Licenciatura</option>
                <option value="Diplomatura">Diplomatura</option>
                <option value="Ingenieria">Ingenieria</option>
                <option value="Master">Master</option>
                <option value="Otras titulaciones">Otras titulaciones</option>
              </select>
              <label htmlFor="floatingSelect">Nivel de estudios</label>
            </div>
            <div className="form-floating mb-4 col-12 col-sm-5">
              <input
                type="text"
                className="form-control"
                id="specialty"
                name="specialty"
                value={training.specialty}
                placeholder="Especialidad"
                onChange={(event) => handleTrainingChange(index, event)}
                required
              />
              <label htmlFor="floatingInput">Especialidad</label>
            </div>
            <div className="form-floating mb-4 col-12 col-sm-11">
              <div className="form-floating">
                <input
                  className="form-control"
                  placeholder="Nombre centro"
                  id="center"
                  name="center"
                  value={training.center}
                  onChange={(event) => handleTrainingChange(index, event)}
                  required
                />
                <label htmlFor="floatingTextarea">Centro / Universidad</label>
              </div>
            </div>
            <div className="form-floating mb-4 col-12 col-sm-11 col-md-5 col-lg-5">
              <input
                type="text"
                className="form-control"
                id="start_year"
                placeholder="año"
                name="start_year"
                value={training.start_year}
                pattern="^[0-9]+$"
                minLength={4}
                maxLength={4}
                onChange={(event) => handleTrainingChange(index, event)}
                required
              />
              <label htmlFor="floatingInput">Año inicio ( Ej: 2008 )</label>
            </div>
            <div className="form-floating mb-4 col-12 col-sm-11 col-md-5 col-lg-5">
              <input
                type="text"
                className="form-control"
                id="finish_year"
                placeholder="año"
                name="finish_year"
                value={training.finish_year}
                pattern="^[0-9]+$"
                minLength={4}
                maxLength={4}
                onChange={(event) => handleTrainingChange(index, event)}
                required
              />
              <label htmlFor="floatingInput startDate">
                Año fin ( Ej: 2021 )
              </label>
            </div>
            <div>
              <button className="btn btn-secondary m-2" onClick={addTraining}>
                Añadir
              </button>
              <button
                className="btn btn-secondary m-2"
                onClick={(event) => removeTraining(index, event)}
              >
                Eliminar
              </button>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
