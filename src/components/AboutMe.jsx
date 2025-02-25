import React, { useContext } from 'react'
import Contacto from './Contacto'
import { LanguageContext } from '../context/LanguageContext'

const AboutMe = () => {

const {textData} = useContext(LanguageContext) 

    return (
        <div className="background-about">
            <div className='container-about'>
                <div className='image-container'>
                    <img className='image' src="/img/foto-perfil.jpg" alt="" />
                </div>
                <div className='about-text'>
                    <h3 className='about-h3'>{textData?.["about-me"]?.title || "About me"}</h3>
                    <p className='about-p'>{textData?.["about-me"]?.text || "Hi 👋, I'm Braian Kler, born in Argentina. I am a fun and determined developer to create efficient and functional solutions. I have trained in frontend and backend technologies. I am looking for opportunities to contribute to innovative projects, improve my skills and continue learning in the world of web development. Open to new challenges and experiences."}
                    </p>
                    <Contacto />
                </div>
            </div>
        </div>
    )
}

export default AboutMe