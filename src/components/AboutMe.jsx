import React, { useContext } from "react";
import Contacto from "./Contacto";
import { LanguageContext } from "../context/LanguageContext";

const AboutMe = () => {
  const { textData } = useContext(LanguageContext);

  return (
    <div className="background-about">
      <div className="container-about">
        <div className="image-container">
          <img className="image" src="/img/perfil4x.jpeg" alt="" />
        </div>
        <div className="about-text">
          <h3 className="about-h3">
            {textData?.["about-me"]?.title || "About me"}
          </h3>
          <p className="about-p">
            {textData?.["about-me"]?.text ||
              "Hi 👋, I'm Braian Kler, born in Argentina. I am a funny and determined developer to create efficient and functional solutions. I have trained in frontend and backend technologies. I am looking for opportunities to contribute to innovative projects, improve my skills and continue learning in the world of web development. Open to new challenges and experiences."}
          </p>
          <div className="tools">
            <p className="tools-p">Devtools</p>
            <h4>Frontend</h4>
            <p align="left">
              <a
                href="https://getbootstrap.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                  alt="bootstrap"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://www.w3schools.com/css/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                  alt="css3"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://www.w3.org/html/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                  alt="html5"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                  alt="react"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://sass-lang.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                  alt="sass"
                  width="40"
                  height="40"
                />
              </a>
            </p>

            <h4>Backend</h4>
            <p align="left">
              <a
                href="https://www.docker.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
                  alt="docker"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://expressjs.com" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                  alt="express"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://firebase.google.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                  alt="firebase"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                  alt="git"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                  alt="javascript"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://jestjs.io" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
                  alt="jest"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://mochajs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg"
                  alt="mocha"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://www.mongodb.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                  alt="mongodb"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://nodejs.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                  alt="nodejs"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                <img
                  src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                  alt="postman"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.mysql.com/" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg"
                  alt="mysql"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a
                href="https://en.wikipedia.org/wiki/SQL"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg"
                  alt="sql"
                  width="40"
                  height="40"
                />
              </a>{" "}
              <a href="https://www.python.org" target="_blank" rel="noreferrer">
                <img
                  src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                  alt="python"
                  width="40"
                  height="40"
                />
              </a>
            </p>
          </div>
          <Contacto />
          <p className="curriculum">
            Curriculum vitae:{" "}
            <a
              className="redes-link"
              href="\tools\Curriculum Braian.doc (1).docx"
              download="Curriculum_Braiankler"
            >
              <i class="fi fi-br-download"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
