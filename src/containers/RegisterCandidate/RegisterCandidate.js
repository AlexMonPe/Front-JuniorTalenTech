import { useState } from "react";
import Select from "../../components/Select/Select.js";
import { apiConsumer } from "../../services/apiConsumer.js";
import Input from "../../components/Input/Input.js";

const RegisterCandidate = () => {
  const [error, setError] = useState("");

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    born_date: '',
    phone_number: '',
    city: '',
    title: '',
    training: [
      {
        level: '',
        specialty: '',
        center: '',
        start_year: '',
        finish_year: '',
      },
    ],
    abilities: [''],
    languages: [
      {
        language_name: '',
        language_level: '',
      },
    ],
  })

  const [experiences, setExperiences] = useState([
      {
        company_name: '',
        work_name: '',
        functions: '',
        start_year: '',
        finish_year: '',
      },
    ]);

  const handleInputChange = (event) => {
    setData({
        ...data,
        [event.target.name] : event.target.value
    })
}

const handleExperienceChange = (index, event) => {
  let expData = [...experiences];
  expData[index][event.target.name] = event.target.value;
  setExperiences(expData);
};

const addExperience = () =>{
  let newExperience = {
    company_name: '',
    work_name: '',
    functions: '',
    start_year: '',
    finish_year: '',
  }
  setExperiences([...experiences, newExperience])
}

const removeExperience = (index) => {
let expData = [...experiences];
if (expData.length > 1) expData.splice(index,1);
setExperiences(expData)

}

  const registerSubmit = async (event) => {
    event.preventDefault();
    setData({...data, experience: experiences})
    console.log(data, 'dataastate')
    console.log(experiences, 'experiences')

    try {
      const candidateCreated = await apiConsumer.registerCandidate(data);

      (candidateCreated.error) ? setError(candidateCreated.error) : setError(false);
    } catch (error) {
      console.log(error, "Error creating candidate in frontend");
    }
  };

  return (
    <div className="p-4">
      <form className="row g-5 p-5" onSubmit={registerSubmit}>
        <div className="container-form-data .flex-sm-column">
          <h2 className="col-10 mb-5 text-center">Datos personales</h2>

          <div className="form-floating mb-4 col-10 col-sm-4">
            <input type="text" className="form-control" id="name" placeholder="nombre" pattern="[a-zA-Z]{2,254}" name="name" onChange={handleInputChange} />
            <label htmlFor="floatingInput ">Nombre</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-6">
            <input type="text" className="form-control" id="surname" placeholder="apellido" name="surname" pattern="[a-zA-Z]{2,254}" onChange={handleInputChange}/>
            <label htmlFor="floatingInput">Apellido</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <input type="email" className="form-control" id="email" name="email" placeholder="example@example.com" onChange={handleInputChange} />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <input type="password" className="form-control" id="password" name="password" placeholder="contraseña" minLength={6} onChange={handleInputChange} required
            />
            <label htmlFor="floatingInput">Contraseña</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5 col-lg-3">
            <input type="text" className="form-control" id="city" placeholder="ciudad" name="city" pattern="[a-zA-Z]{2,254}" onChange={handleInputChange}/>
            <label htmlFor="floatingInput">Ciudad</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5 col-lg-3">
            <input type="tel" name="phone_number" className="form-control" id="phone_number" minLength={9} maxLength={9} placeholder="telefono" onChange={handleInputChange}/>
            <label htmlFor="floatingInput">Teléfono</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-4 col-lg-3">
            <input type="date" className="form-control" id="born_date" placeholder="dd/mm/aaaa" name="born_date" onChange={handleInputChange}/>
            <label htmlFor="floatingInput startDate">Fecha de nacimiento</label>
          </div>
          <div className="form-floating col-10 col-sm-11 col-md-6">
            <input type="text" className="form-control" id="title" name="title" placeholder="Frontend Developer" onChange={handleInputChange}/>
            <label htmlFor="floatingInput">Titular de tu profesión</label>
          </div>
        </div>
        <div className="container-form-data mb-5">
          <h2 className="col-10 mb-5 text-center">Formación</h2>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="level" onChange={handleInputChange}>
              <option value="Educacion Secundaria Obligatoria">Educacion Secundaria Obligatoria</option>
              <option value="Bachillerato">Bachillerato</option>
              <option value="Ciclo Formativo de grado Medio">Ciclo Formativo de grado Medio</option>
              <option value="Ciclo Formativo de grado Superior">Ciclo Formativo de grado Superior</option>
              <option value="Licenciatura">Licenciatura</option>
              <option value="Diplomatura">Diplomatura</option>
              <option value="Ingenieria">Ingenieria</option>
              <option value="Master">Master</option>
              <option value="Otras titulaciones">Otras titulaciones</option>
            </select>
            <label htmlFor="floatingSelect">Nivel de estudios</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <input type="text" className="form-control" id="specialty" name="specialty" placeholder="Especialidad" onChange={handleInputChange}/>
            <label htmlFor="floatingInput">Especialidad</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11">
            <div className="form-floating">
              <input className="form-control" placeholder="Nombre centro" id="center" name="center" onChange={handleInputChange}/>
              <label htmlFor="floatingTextarea">Centro / Universidad</label>
            </div>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5 col-lg-5">
            <input type="text" className="form-control" id="start_year" placeholder="año" name="start_year" pattern="^[0-9]+$" minLength={4} maxLength={4} onChange={handleInputChange}/>
            <label htmlFor="floatingInput">
              Año de inicio ( Ejemplo: 2008 )
            </label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5 col-lg-5">
            <input type="text" className="form-control" id="finish_year" placeholder="año" name="finish_year" pattern="^[0-9]+$" minLength={4} maxLength={4} onChange={handleInputChange}/>
            <label htmlFor="floatingInput startDate">
              Año de fin ( Ejemplo: 2021 )
            </label>
          </div>
        </div>
        {experiences.map((experience, index)=>{
          return (
          <div className="container-form-data" key={index}>
                <h2 className="col-10 mb-5 text-center">Experiencia</h2>
                <button className="btn btn-primary mb-5" onClick={addExperience}><i class="bi bi-plus-lg"></i></button>
                <button className="btn btn-primary mb-5" onClick={() => removeExperience(index)}><i class="bi bi-dash-lg"></i></button>
                <div className="form-floating mb-4 col-10 col-sm-5">
                  <input type="text" className="form-control" id="company_name" name="company_name" placeholder="Nombre empresa" value={experience.company_name} onChange={event=>handleExperienceChange(index,event)}/>
                  <label htmlFor="floatingInput ">Nombre empresa</label>
                </div>
                <div className="form-floating mb-4 col-10 col-sm-5">
                  <input type="text" className="form-control" id="work_name" name="work_name" placeholder="Puesto de trabajo"  value={experience.work_name}onChange={event=>handleExperienceChange(index,event)}/>
                  <label htmlFor="floatingInput">Puesto de trabajo</label>
                </div>
                <div className="form-floating mb-4 col-10 col-sm-11">
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Funciones" id="functions" name="functions" style={{ height: "11em" }} value={experience.functions} onChange={event=>handleExperienceChange(index,event)}
                    ></textarea>
                    <label htmlFor="floatingTextarea">Funciones</label>
                  </div>
                </div>
                <div className="form-floating mb-4 col-10 col-sm-11 col-md-5">
                  <input type="text" className="form-control" id="start_year_ex" placeholder="año" name="start_year" pattern="^[0-9]+$" minLength={4} maxLength={4} value={experience.start_year} onChange={event=>handleExperienceChange(index,event)}/>
                  <label htmlFor="floatingInput">
                    Año de inicio ( Ejemplo: 2008 )
                  </label>
                </div>
                <div className="form-floating mb-4 col-10 col-sm-11 col-md-5">
                  <input type="text" className="form-control" id="finish_year_ex" placeholder="año" name="finish_year" pattern="^[0-9]+$" minLength={4} maxLength={4} value={experience.finish_year} onChange={event=>handleExperienceChange(index,event)}/>
                  <label htmlFor="floatingInput startDate">
                    Año de fin ( Ejemplo: 2021 )
                  </label>
                </div>
          </div>
          );
          
        })}
        <div className="lang-skills col-12">
          <div className="container-form-data mb-5 col-12 col-md-6">
            <h2 className="col-10 mb-5 text-center">Idiomas</h2>
            <div className="form-floating col-11 mb-5">
              <input type="text" className="form-control" id="language_name" placeholder="Idioma" name="language_name" onChange={handleInputChange}/>
              <label htmlFor="floatingInput ">Idioma</label>
            </div>
            <div className="form-floating mb-4 col-11">
              <select className="form-select" id="level" aria-label="Floating label select example" name="level" onChange={handleInputChange}>
                <option value="Basico">Basico</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
              </select>
              <label htmlFor="floatingSelect">Nivel</label>
            </div>
          </div>
          <div className="container-form-data mb-5 col-12 col-md-5">
            <h2 className="col-10 mb-5 text-center">Habilidades</h2>
            <div className="form-floating col-10">
              <input type="text" className="form-control" id="abilities" placeholder="Habilidades" name="abilities" onChange={handleInputChange}/>
              <label htmlFor="floatingInput ">Habilidades</label>
            </div>
          </div>
        </div>
        <div className="text-center">
          {error && <div className="warning col-5 mx-auto mb-4">{error}</div>}
          <input className="btn btn-outline-info mb-4 col-4 p-2" type="submit" value="Register"/>
        </div>
      </form>
    </div>
  );
};

export default RegisterCandidate;
