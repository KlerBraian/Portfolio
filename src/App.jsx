import AboutMe from "./components/AboutMe";
import Proyectos from "./components/Proyectos"
import Cursos from "./components/Cursos";
import "./style/style.css";


function App() {


  return (
    <>
      <div className="container-page">
        <div className="container1">
          <div className="background">
            <div className="header"></div>
            <div className="header2"></div>
          </div>
          <div className="content">
            <div className="header-container">
              <h1 className="header-text">Braian Kler</h1>
              <h4 className="header-text">Web Designer & Developer</h4>
            </div>
            <div className="img-">
              <img className="img-header" src="/img/perfil.png" alt="Header" />
            </div>
          </div>
        </div>
      <AboutMe />
      <Proyectos />
      <hr color="#202633"/>
      <Cursos />
    </div >
    </>
  )
}

export default App
