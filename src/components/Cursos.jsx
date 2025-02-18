import React, { useEffect, useState } from 'react'

const cursos = () => {
  const [curseImages, setcurseImages] = useState([])

  useEffect(() => {
    fetch("/img/img.json")
      .then(response => response.json())
      .then(data => setcurseImages(data))
  }, [])


  return (
    <div className='proyectsAndTools-container'>
      <h3 className='proyectsAndTools-title1'>Cursos</h3>
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