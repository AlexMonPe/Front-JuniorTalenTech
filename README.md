# Frontend JuniorTalenTech
[![juniortalentech.gif](https://i.postimg.cc/gJXGr4DZ/logo-Junior-Talentech.gif)](https://postimg.cc/ThJxwgvT)

## Table of contents
  - [Tech Stack🛠](#Tech-Stack)
  - [Requisitos🥑](#Descripcion-y-usabilidad)
  - [Rutas🥨](#Rutas-de-la-web)
  - [Store⛩](#Store)
  - [Comandos utiles](#Comandos-utiles)
  - [Bases de datos🔗](#Bases-de-datos)
  - [Como instalarlo 🥷](#Instalacion)
  - [Tareas Pendientes 🧙](#Tareas-pendientes)
  - [Autor🤘](#Autor)
  - [Como Ayudar🤝](#Como-ayudar)
  - [Agradecimientos💖](#Agradecimientos)

# Tech Stack 🛠

Se han utilizado las siguientes tecnologías: <br/><br/><br/>
<code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/html/html.png"></code> <code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png"></code>
<code><img  height="50"  src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/aws/aws.png"></code>
<code><a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/> </a></code> <br/><br/><br/>
Además se ha hecho uso de las siguientes librerías/herramientas/tecnologías para el desarrollo del proyecto:

-  Entorno: `Nodejs` 
-  Framework: `React`
-  Libería de estado: `Redux`
-  ODM: `Mongoose`
-  Librería de estilos: `Bootstrap 5` 
-  Librería para visualizar estados del store `redux-devtools-extension`, 
-  Herramienta de despliegue de proyecto Front: `AWS`.

# Descripción y usabilidad 🥑

Proyecto final del bootcamp en Geekshubs en el cuál nos dan total libertad para realizar un proyecto full stack para implementar los conociemientos adquiridos en el curso, he optado por realizar un portal de empleo dedicado a perfiles junior para facilitar el proceso de selección y evitar la búsqueda masiva de ofertas que frustran cuándo estás empezando, lo que hace diferente a esta web es que los candidatos no tienen que buscar ofertas, simplemente añadir su información de candidatos, su experiencia y su formación y esperar a que una empresa le encuentre y contacte con el candidato.
La parte del Frontend la he realizado con React con hooks y para manejar el estado global redux, e incluso almacenar algunos datos que he utilizado en otros componentes sin necesidad de volver a hacer más peticiones al back y consumir más recursos, para el diseño responsive y estilo de la web he utilizado la última versión de `Bootstrap`, con el que con su diseño grid de columnas he podido manejar el diseño bastante bien, junto con el precompilador `Sass` he reutilizado codigo con variables e incluso algun `mixin`.

Puedes acceder a la web a través de [www.juniorTalenTech.geeks](https://develop.d25tm08by0pwym.amplifyapp.com/) y el funcionamiento de la web es el siguiente:
- La pagina inicial es **Home**, en la ruta `/` dónde se visualiza la página principal, una breve información para potenciales clientes y acceso al registro tanto para empresas como candidatos.
- Registro de empresa está en la ruta `/registercompany` dónde cualquier persona puede registrarse como empresa con tan solo unos datos básicos de la misma, este registro incluye el registro del usuario también por lo que es necesario incluir una direccion de correo válida, se asigna el role `company` por defecto.
- Registro dsl candidato en la ruta `/registercandidate` dónde cualquier persona puede registrarse como candidate para la búsqueda de empleo introduciendo sus datos personales y rellenando su currículum de formación, experiencia, idiomas y habilidades, se asigna el role `candidate` por defecto.
- Login está en la ruta `/login` dónde el usuario tiene que introducir su email y su password para poder acceder a la aplicación, si todavía no se ha registrado hay un enlace que redirecciona al registro(Home). Una vez que ha hecho login, se redirecciona al perfil del usuario por si desea modificar alguno de los datos.
-El Header es dinámico, si has iniciado sesión sale botón de cerrar sesión en el dropdown, mirar perfil, y no se ve la opcion de iniciar sesión ni registrarse, cada botón de perfil redirecciona solo al perfil del usuario conectado, por tanto, si es una empresa solo accedera al perfil de su empresa, y del candidato igual.
- En `search` es solo para empresas y sirve para visualizar todos los candidatos que están registrados en la web, se muestran en la columna de la izquierda con unos breves datos y si se quiere ver el detalle del mismo tan solo hay que hacer click en el título del empleado y se mostrará en la parte derecha todo el currículum completo con sus datos de contacto.
- `Perfil` se muestra un formulario ya rellenado con los datos del candidato o la empresa en su momento de hacer el registro, permite actualizar cualquier dato, borrar o añadir más, dependiendo si eres candidato u empresa te redirecciona al perfil correspondiente.

# Rutas de la web ⛩

```
<ErrorComponent>
    <BrowserRouter>
      <Header />
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registerCandidate" element={<RegisterCandidate />}></Route>
        <Route path="/registerCompany" element={<RegisterCompany />}></Route>
        <Route path="/profileCandidate" element={<ProfileCandidate />}></Route>
        <Route path="/profileCompany" element={<ProfileCompany />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/search" element={<Search />}></Route>
        </Routes>
        {popupState.visible && <PopUp />}
     </BrowserRouter>
</ErrorComponent>
```
He añadido un custom hook para el Popup, para ahorrar algo de código y poder utilizarlo en cualquier componente.

## Store

He utilizado varios reductores para organizar de una manera más clara las actions de los mismos:

`Candidate Reducer`

```
const initialState = {
  profile: [
    {
      form: {
        name: "",
        surname: "",
        born_date: "",
        phone_number: 0,
        city: "",
        title: "",
      },
      experience: [],
      training: [],
      languages: [],
      abilities: [],
    },
  ],
  form: {
    name: "",
    surname: "",
    born_date: "",
    phone_number: 0,
    city: "",
    title: "",
  },
  experience: [
    {
      company_name: "",
      work_name: "",
      functions: "",
      start_year: "",
      finish_year: "",
    },
  ],
  training: [
    {
      level: "",
      specialty: "",
      center: "",
      start_year: "",
      finish_year: "",
    },
  ],
  languages: [
    {
      language_name: "Escribe el idioma",
      language_level: "",
    },
  ],
  abilities: ["Escribe tu habilidad"],
};
```
`Company Reducer`
```
const initialState = {
  form: {
    name: "",
    title: "",
    description: "",
    ubication: "",
    website: "",
    cif: "",
    phone_number: "",
    employees: "",
  },
}
```
`General Reducer`

```
const initialState = {
  popup: { visible: false, text: "" },
  error: "",
  isEditable: false
}
```

Hay un archivo de typesVar dónde guardo los strings del type al realizar un dispatch y asi minimizar errores, y además otro archivo dónde guardo una sencilla funcion para crear las actions de manera más fácil y evitar código que muestro a continuación:
```
const actionCreator = (type, payload) => {
    return payload ? { type, payload } : { type };
  };
  
  export default actionCreator;
```

Y por último he centralizado todas las funciones que atacan al API en un objeto, dónde cada clave es una función en la carpeta ``services/apiConsumer.js`

# Base de datos 🔗

Se ha utilizado la base de datos no relacional MongoDB con el ODM Mongoose, y Mongo Atlas para tener la base de datos en la nube y así trabajar desde cualquier lugar. 
* Robo 3T y MongoDBCompass GUI de la base de datos

Para poder mostrar contenido de varios modelos he utilizado el .populate, dónde muestra información relacionada de otros modelos, siendo imprescindible añadir en dichos modelos la referencia a los ajenos.

# Comandos útiles 👀

`npm run start`  // Ejecuta la app de react en localhost:3000

# Instalación 🥷

Para poder modificar el proyecto o visualizar el código:
- Clonar o forkear el repositorio si deseas, **Alejandro:** _(https://github.com/AlexMonPe/Front-JuniorTalenTech)_, 
- crear projecto React: `npx i create-react-app juniortalentech` o  _npm install_ para cargar las dependencias del package.json
- Puedes utilizar mi api subida a heroku, la doc está en _(https://github.com/AlexMonPe/Back-JuniorTalenTech)_
- `devToolsEnhancer` // Instalando la extensión de chrome reduxDevTools para visualizar los estados de redux


# Tareas pendientes 🧙

  - [ ] Realizar búsqueda de empleados por habilidades o localización
  - [ ] Subida de fotos y archivos.
  - [ ] Documentar con swagger.
  - [ ] notificacion por email


# Autor 🤟

*  const Autor = useSelector((Alejandro)=> Alejandro.Montero) (https://github.com/AlexMonPe) 🥇

# Como ayudar 🤝
  
  - Si deseas colaborar con éste proyecto u otro no dudes en contactar conmigo o solicitar una pull request.
  - Mi correo electrónico es  _alex_bcn10@hotmail.es_
  - Cualquier aporte se recompensa con una cerveza o café.
  - Repositorio público con código libre con el fin de seguir promoviendo compartir conocimientos y ayudar a otros programadores.

# Agradecimientos 💖

A nuestros profesor@s Ana y pablo por su paciencia.
A todos mis compañeros por haber pasado este tiempo junto a ellos y hacer que esta experiencia sea inolvidable..
