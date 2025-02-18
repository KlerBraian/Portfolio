

const Proyectos = () => {


  return (
    <div className='proyectsAndTools-container'>
      <div className="border1"></div>
      <div className="border2"></div>
      <div className="border3"></div>
      <h3 className='proyectsAndTools-title2' >Proyects</h3>
      <div className="proyectos-container">
        <div className="proyectos1">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/mantis-banda"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://klerbraian.github.io/mantis-banda/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>Mantis banda page</h4>
            <p className="description-proyects-p">Pagina de banda con HTML y CSS</p>
          </div>
        </div>
        <div className="proyectos2">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/tienda-mantis"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://klerbraian.github.io/tienda-mantis/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>Tienda Mantis</h4>
            <p className="description-proyects-p">Tienda e-commerce hecha con HTML, CSS y Javascript</p>
          </div>
        </div>
        <div className="proyectos3">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/kler-tienda-react"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://kler-tienda-react.vercel.app/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>Tienda Klercat React</h4>
            <p className="description-proyects-p">Tienda e-commerce hecha con base en React JS</p>
          </div>
        </div>
        <div className="proyectos4">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/Space-Invaders"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://klerbraian.github.io/Space-Invaders/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>Space Invaders</h4>
            <p className="description-proyects-p">Video juego realizado con HTML, CSS y Javascript</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos