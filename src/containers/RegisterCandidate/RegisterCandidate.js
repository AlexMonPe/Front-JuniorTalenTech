import { useState } from "react";
import Select from "../../components/Select/Select.js";
import { apiConsumer } from "../../services/apiConsumer.js";
import Input from "../../components/Input/Input.js";

const RegisterCandidate = () => {
  const [error, setError] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target[0].value,
      surname: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
      born_date: e.target[6].value,
      phone_number: e.target[5].value,
      city: e.target[4].value,
      title: e.target[7].value,
      training: [
        {
          level: e.target[8].value,
          specialty: e.target[9].value,
          center: e.target[10].value,
          start_year: e.target[11].value,
          finish_year: e.target[12].value,
        },
      ],
      experience: [
        {
          company_name: e.target[13].value,
          work_name: e.target[14].value,
          functions: e.target[15].value,
          start_year: e.target[16].value,
          finish_year: e.target[17].value,
        },
      ],
      abilities: [e.target[20].value],
      languages: [
        {
          language_name: e.target[18].value,
          language_level: e.target[19].value,
        },
      ],
    };
    try {
      const candidateCreated = await apiConsumer.registerCandidate(formData);

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
            <Input type="text" className="form-control" id="name" placeholder="nombre" pattern="[a-zA-Z]{2,254}" name="name" />
            <label htmlFor="floatingInput ">Nombre</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-6">
            <Input type="text" className="form-control" id="surname" placeholder="apellido" name="surname" pattern="[a-zA-Z]{2,254}"/>
            <label htmlFor="floatingInput">Apellido</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <Input type="email" className="form-control" id="email" name="email" placeholder="example@example.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
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
          <div className="form-floating mb-4 col-10 col-sm-5 col-lg-3">
            <Input type="text" className="form-control" id="city" placeholder="ciudad" name="city" pattern="[a-zA-Z]{2,254}"/>
            <label htmlFor="floatingInput">Ciudad</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5 col-lg-3">
            <Input type="tel" name="phone_number" className="form-control" id="phone_number" minLength={9} maxLength={9} placeholder="telefono"/>
            <label htmlFor="floatingInput">Teléfono</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-4 col-lg-3">
            <Input type="date" className="form-control" id="born_date" placeholder="dd/mm/aaaa" name="born_date" />
            <label htmlFor="floatingInput startDate">Fecha de nacimiento</label>
          </div>
          <div className="form-floating col-10 col-sm-11 col-md-6">
            <Input type="text" className="form-control" id="title" name="title" placeholder="Frontend Developer"/>
            <label htmlFor="floatingInput">Titular de tu profesión</label>
          </div>
        </div>
        <div className="container-form-data mb-5">
          <h2 className="col-10 mb-5 text-center">Formación</h2>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <Select className="form-select" id="floatingSelect" aria-label="Floating label select example" name="level" 
            options={[
              "Educacion Secundaria Obligatoria",
               "Bachillerato",
                "Ciclo Formativo de grado Medio",
                 "Ciclo Formativo de grado Superior",
                 "Licenciatura",
                 "Diplomatura",
                 "Ingenieria",
                 "Master",
                 "Otras titulaciones"
                 ]} />
            <label htmlFor="floatingSelect">Nivel de estudios</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <Input type="text" className="form-control" id="specialty" name="specialty" placeholder="Especialidad" />
            <label htmlFor="floatingInput">Especialidad</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11">
            <div className="form-floating">
              <Input className="form-control" placeholder="Nombre centro" id="center" name="center" />
              <label htmlFor="floatingTextarea">Centro / Universidad</label>
            </div>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5 col-lg-5">
            <Input type="text" className="form-control" id="start_year" placeholder="año" name="start_year" pattern="^[0-9]+$" minLength={4} maxLength={4} />
            <label htmlFor="floatingInput">
              Año de inicio ( Ejemplo: 2008 )
            </label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5 col-lg-5">
            <Input type="text" className="form-control" id="finish_year" placeholder="año" name="finish_year" pattern="^[0-9]+$" minLength={4} maxLength={4} />
            <label htmlFor="floatingInput startDate">
              Año de fin ( Ejemplo: 2021 )
            </label>
          </div>
        </div>
        <div className="container-form-data">
          <h2 className="col-10 mb-5 text-center">Experiencia</h2>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <Input type="text" className="form-control" id="company_name" name="company_name" placeholder="Nombre empresa" />
            <label htmlFor="floatingInput ">Nombre empresa</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-5">
            <Input type="text" className="form-control" id="work_name" name="work_name" placeholder="Puesto de trabajo" />
            <label htmlFor="floatingInput">Puesto de trabajo</label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11">
            <div className="form-floating">
              <textarea className="form-control" placeholder="Funciones" id="functions" name="functions" style={{ height: "11em" }}
              ></textarea>
              <label htmlFor="floatingTextarea">Funciones</label>
            </div>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5">
            <Input type="text" className="form-control" id="start_year_ex" placeholder="año" name="start_year" pattern="^[0-9]+$" minLength={4} maxLength={4} />
            <label htmlFor="floatingInput">
              Año de inicio ( Ejemplo: 2008 )
            </label>
          </div>
          <div className="form-floating mb-4 col-10 col-sm-11 col-md-5">
            <Input type="text" className="form-control" id="finish_year_ex" placeholder="año" name="finish_year" pattern="^[0-9]+$" minLength={4} maxLength={4} />
            <label htmlFor="floatingInput startDate">
              Año de fin ( Ejemplo: 2021 )
            </label>
          </div>
        </div>
        <div className="lang-skills col-12">
          <div className="container-form-data mb-5 col-12 col-md-6">
            <h2 className="col-10 mb-5 text-center">Idiomas</h2>
            <div className="form-floating col-11 mb-5">
              <Input type="text" className="form-control" id="language_name" placeholder="Idioma" name="language_name" />
              <label htmlFor="floatingInput ">Idioma</label>
            </div>
            <div className="form-floating mb-4 col-11">
              <Select className="form-select" id="level" aria-label="Floating label select example" name="level" options={["Basico", "Intermedio", "Avanzado"]} />
              <label htmlFor="floatingSelect">Nivel</label>
            </div>
          </div>
          <div className="container-form-data mb-5 col-12 col-md-5">
            <h2 className="col-10 mb-5 text-center">Habilidades</h2>
            <div className="form-floating col-10">
              <Input type="text" className="form-control" id="abilities" placeholder="Habilidades" name="abilities" />
              <label htmlFor="floatingInput ">Habilidades</label>
            </div>
          </div>
        </div>
        <div className="text-center">
          {error && <div className="warning col-5 mx-auto mb-4">{error}</div>}
          <Input className="btn btn-outline-info mb-4 col-4 p-2" type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default RegisterCandidate;
