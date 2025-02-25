import { useContext } from "react"
import { LanguageContext } from "../context/LanguageContext"


const Proyectos = () => {

 const {textData} = useContext(LanguageContext) 


  return (
    <div className='proyectsAndTools-container'>
      <div className="border1"></div>
      <div className="border2"></div>
      <div className="border3"></div>
      <h3 className='proyectsAndTools-title2' >{textData?.proyects?.title || "Proyects"}</h3>
      <div className="proyectos-container">
        <div className="proyectos1">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/mantis-banda"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://klerbraian.github.io/mantis-banda/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            
            <h4 className='proyect-title'>{textData?.proyects?.cards[0]?.title || "Mantis band page"}</h4>
            <p className="description-proyects-p">{textData?.proyects?.cards[0]?.text || "Band page with HTML and CSS"}</p>
          </div>
        </div>
        <div className="proyectos2">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/tienda-mantis"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://klerbraian.github.io/tienda-mantis/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>{textData?.proyects?.cards[1]?.title || "Mantis shop"}</h4>
            <p className="description-proyects-p">{textData?.proyects?.cards[1]?.text || "E-commerce store made with html, css and javascript"}</p>
          </div>
        </div>
        <div className="proyectos3">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/kler-tienda-react"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://kler-tienda-react.vercel.app/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>{textData?.proyects?.cards[2]?.title || "Klercat shop React Js"}</h4>
            <p className="description-proyects-p">{textData?.proyects?.cards[2]?.text || "E-commerce store made with React Js"}</p>
          </div>
        </div>
        <div className="proyectos4">
          <div className="links-proyects">
            <a className="links-proyects" target='blanck' href="https://github.com/KlerBraian/Space-Invaders"><i class="fi fi-brands-github"></i></a>
            <a className="links-proyects" target='blanck' href="https://klerbraian.github.io/Space-Invaders/"><i class="fi fi-rr-link"></i></a>
          </div>
          <div className="description-proyects">
            <h4 className='proyect-title'>{textData?.proyects?.cards[3]?.title || "Space Invaders"}</h4>
            <p className="description-proyects-p">{textData?.proyects?.cards[3]?.text || "Video game made with html, css and javascript"}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Proyectos