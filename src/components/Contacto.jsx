import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const Contacto = () => {

  const { textData } = useContext(LanguageContext)

  return (
    <div className='contact-container'>
      <h4 className='contact-me'>{textData?.["about-me"]?.["contact-me"] || "Contact me:"}</h4>
      <ul className='redes-list-container'>
        <li><a target='blank' className='redes-link'  href="https://wa.me/5491531576997?text=Hola,%20quiero%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20trabajo."><i class="fi fi-brands-whatsapp"></i></a></li>
        <li><a target='blank' className='redes-link'  href="mailto:braiankler.30@gmail.com?subject=Oportunidad%20Laboral&body=Hola,%20quiero%20hablar%20contigo%20sobre%20una%20oportunidad%20de%20trabajo."><i class="fi fi-sr-envelope"></i></a></li>
        <li><a target='blank' className='redes-link' href="https://github.com/KlerBraian"><i class="fi fi-brands-github"></i></a></li>
        <li><a target='blank' className='redes-link' href="https://www.linkedin.com/in/braian-ezequiel-kler-469585112/"><i class="fi fi-brands-linkedin"></i></a></li>
        <li><a target='blank' className='redes-link' href="https://www.instagram.com/braiankler/"><i class="fi fi-brands-instagram"></i></a></li>
        <li><a target='blank' className='redes-link' href="https://www.facebook.com/braian.kler"><i class="fi fi-brands-facebook"></i></a></li>
      </ul>
    </div>
  )
}

export default Contacto 