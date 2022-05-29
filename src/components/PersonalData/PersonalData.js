import { Fragment } from "react";

export const PersonalData = ({handleInputChange}) => {
  return (
  <Fragment>
      <div className="container-form-data .flex-sm-column mb-5">
        <h2 className="col-10 mb-5 text-center">Datos personales</h2>
        <div className="form-floating mb-4 col-12 col-sm-4 col-lg-5">
          <input type="text" className="form-control" id="name" placeholder="nombre" pattern="[a-zA-Z]{2,254}" name="name" onBlur={handleInputChange} required/>
          <label htmlFor="floatingInput ">Nombre</label>
        </div>
        <div className="form-floating mb-4 col-12 col-sm-6">
          <input type="text" className="form-control" id="surname" placeholder="apellido" name="surname" pattern="[a-zA-Z]{2,254}" onBlur={handleInputChange} required/>
          <label htmlFor="floatingInput">Apellido</label>
        </div>
        <div className="form-floating mb-4 col-12 col-sm-5 col-lg-6">
          <input type="email" className="form-control" id="email" name="email" placeholder="example@example.com" onBlur={handleInputChange} required/>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-4 col-12 col-sm-5 col-lg-5">
          <input type="password" className="form-control" id="password" name="password" placeholder="contraseña" minLength={6} onBlur={handleInputChange} required
          />
          <label htmlFor="floatingInput">Contraseña</label>
        </div>
        <div className="form-floating mb-4 col-12 col-sm-4 col-lg-2">
          <input type="text" className="form-control" id="city" placeholder="ciudad" name="city" pattern="[a-zA-Z]{2,254}" onBlur={handleInputChange} required/>
          <label htmlFor="floatingInput">Ciudad</label>
        </div>
        <div className="form-floating mb-4 col-12 col-sm-6 col-lg-4">
          <input type="tel" name="phone_number" className="form-control" id="phone_number" minLength={9} maxLength={9} placeholder="telefono" onBlur={handleInputChange} required/>
          <label htmlFor="floatingInput">Teléfono</label>
        </div>
        <div className="form-floating mb-4 col-12 col-sm-11 col-md-4 col-lg-4">
          <input type="date" className="form-control" id="born_date" placeholder="dd/mm/aaaa" name="born_date" onBlur={handleInputChange}/>
          <label htmlFor="floatingInput startDate">Fecha de nacimiento</label>
        </div>
        <div className="form-floating col-12 col-sm-11 col-md-6">
          <input type="text" className="form-control" id="title" name="title" placeholder="Frontend Developer" onBlur={handleInputChange} required/>
          <label htmlFor="floatingInput">Titular de tu profesión</label>
        </div>
      </div>
  </Fragment>
)};
