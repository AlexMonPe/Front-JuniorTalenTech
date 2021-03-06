import { Fragment } from "react";
import { useSelector } from "react-redux";

export const Experience = ({
  handleExperienceChange,
  addExperience,
  currProfile,
  removeExperience,
}) => {
  const experiences = useSelector((state) => state.candidate.experience);
  const isEditable = useSelector((state) => state.general.isEditable);

  return (
    <Fragment>
      {isEditable
        ? currProfile.map((experience, index) => {
            return (
              <div className="container-form-data col-12 mb-5" key={index}>
                <h2 className="col-12 mb-4 text-center">Experiencia</h2>
                <div className="form-floating mb-4 col-12 col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="company_name"
                    name="company_name"
                    placeholder="Nombre empresa"
                    defaultValue={currProfile[index].company_name}
                    onBlur={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput ">Nombre empresa</label>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="work_name"
                    name="work_name"
                    placeholder="Puesto de trabajo"
                    defaultValue={currProfile[index].work_name}
                    onBlur={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput">Puesto de trabajo</label>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-11">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Funciones"
                      id="functions"
                      name="functions"
                      style={{ height: "11em" }}
                      defaultValue={currProfile[index].functions}
                      onBlur={(event) => handleExperienceChange(index, event)}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Funciones</label>
                  </div>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-11 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    id="start_year_ex"
                    placeholder="a??o"
                    name="start_year"
                    pattern="^[0-9]+$"
                    minLength={4}
                    maxLength={4}
                    defaultValue={currProfile[index].start_year}
                    onBlur={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput">A??o inicio ( Ej: 2008 )</label>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-11 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    id="finish_year_ex"
                    placeholder="a??o"
                    name="finish_year"
                    pattern="^[0-9]+$"
                    minLength={4}
                    maxLength={4}
                    defaultValue={currProfile[index].finish_year}
                    onBlur={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput startDate">
                    A??o fin ( Ej: 2021 )
                  </label>
                </div>
                <div className="">
                  <button
                    className="btn btn-secondary  m-2"
                    onClick={addExperience}
                  >
                    A??adir
                  </button>
                  <button
                    className="btn btn-secondary  m-2"
                    onClick={(event) => removeExperience(index, event)}
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            );
          })
        : experiences.map((experience, index) => {
            return (
              <div className="container-form-data col-12 mb-5" key={index}>
                <h2 className="col-12 mb-4 text-center">Experiencia</h2>
                <div className="form-floating mb-4 col-12 col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="company_name"
                    name="company_name"
                    placeholder="Nombre empresa"
                    defaultValue={experience.company_name}
                    onBlur={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput ">Nombre empresa</label>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-5">
                  <input
                    type="text"
                    className="form-control"
                    id="work_name"
                    name="work_name"
                    placeholder="Puesto de trabajo"
                    value={experience.work_name}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput">Puesto de trabajo</label>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-11">
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      placeholder="Funciones"
                      id="functions"
                      name="functions"
                      style={{ height: "11em" }}
                      value={experience.functions}
                      onChange={(event) => handleExperienceChange(index, event)}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Funciones</label>
                  </div>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-11 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    id="start_year_ex"
                    placeholder="a??o"
                    name="start_year"
                    pattern="^[0-9]+$"
                    minLength={4}
                    maxLength={4}
                    value={experience.start_year}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput">A??o inicio ( Ej: 2008 )</label>
                </div>
                <div className="form-floating mb-4 col-12 col-sm-11 col-md-5">
                  <input
                    type="text"
                    className="form-control"
                    id="finish_year_ex"
                    placeholder="a??o"
                    name="finish_year"
                    pattern="^[0-9]+$"
                    minLength={4}
                    maxLength={4}
                    value={experience.finish_year}
                    onChange={(event) => handleExperienceChange(index, event)}
                  />
                  <label htmlFor="floatingInput startDate">
                    A??o fin ( Ej: 2021 )
                  </label>
                </div>
                <div className="">
                  <button
                    className="btn btn-secondary  m-2"
                    onClick={addExperience}
                  >
                    A??adir
                  </button>
                  <button
                    className="btn btn-secondary  m-2"
                    onClick={(event) => removeExperience(index, event)}
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
