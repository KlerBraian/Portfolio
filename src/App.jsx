import AboutMe from "./components/AboutMe";
import Proyectos from "./components/Proyectos"
import Cursos from "./components/Cursos";
import "./style/style.css";
import { LanguageContext} from "./context/LanguageContext";
import { useContext } from "react";


function App() {

const {textData, setLanguage}= useContext(LanguageContext);

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
              <h4 className="header-text" data-section="header" data-value="web-developer">{textData?.header?.webDeveloper || "Web Designer & Developer"}</h4>
            </div>
            <div className="img-">
              <img className="img-header" src="/img/perfil.png" alt="Header" />
            </div>
            <div className="languages">
              <button className="lang-button" onClick={() => setLanguage("es")}>🇦🇷</button>
              <button className="lang-button" onClick={() => setLanguage("en")}>🇬🇧</button>
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
