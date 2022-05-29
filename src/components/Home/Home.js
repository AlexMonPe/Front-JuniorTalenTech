export const Home = () => {
  return (
    <div className="home-container">
      <div className="home">
        <h2>Bienvenid@ a JuniorTalenTech</h2>
        <div className="content-home">
          <p>Para los candidatos:</p>
          <ul>
            <li>Si eres Junior con poca experiencia o recién titulado.</li>
            <li>Si estas cansado de inscribirte en ofertas continuamente.</li>
            <li>Si estas motivado a aprender y desarrollar tu carrera.</li>
          </ul>
          <p>
            No dudes en registrarte, las empresas te contactaran para conocerte,
            tan solo tienes que inscribirte.
          </p>

          <p>Para las empresas:</p>
          <ul>
            <li>Buscas talento.</li>
            <li>Buscas motivación.</li>
            <li>Mejor portal web para buscar candidatos Tech</li>
          </ul>
        </div>
        <div className="d-flex justify-content-center col-12">
          <button className="btn btn-outline-info text-white p-3 me-5">Empresas</button>
          <button className="btn btn-outline-info text-white p-3">Candidatos</button>
        </div>
      </div>
    </div>
  );
};
