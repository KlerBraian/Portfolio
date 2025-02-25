import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext'

const cursos = () => {
  const [curseImages, setcurseImages] = useState([])

  useEffect(() => {
    fetch("/img/img.json")
      .then(response => response.json())
      .then(data => setcurseImages(data))
  }, [])


  const {textData} = useContext(LanguageContext) 

  return (
    <div className='proyectsAndTools-container'>
      <h3 className='proyectsAndTools-title1'>{textData?.courses?.title || "Courses"}</h3>
      <div className="border1-cursos"></div>
      <div className="border2-cursos"></div>
      <div className="border3-cursos"></div>
      <div className="border4-cursos"></div>
        <div className="curse-container">
          {curseImages.map((img, index) => (
            <div key={index} className='cursos'><img className='curse-img' src={curseImages[index]} alt={index} />
            </div>
          ))}
        </div>
    </div>
  )
}

export default cursos