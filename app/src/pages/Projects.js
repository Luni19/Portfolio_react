import projectBig2 from "../images/projects/02-big.jpg"
import GHBlack from "../images/icons/gitHub-black.svg"




function Projects (props) {
    return(
        <div>
             <main>
        <section className="project-section">
            <div className="conteiner">
                <div className="project-wrapper">

                <h1 className="projects-text">Video service</h1>
             
                <img className="project-image-details" src={projectBig2} alt=""/>
                    <p className="skils-text">Skills: React, Node.js, MongoDB</p>
                <a href="" className="git-button">
                    <img src={GHBlack} alt=""/>
                    GitHub repo
                </a>
             </div>
            </div>
        </section>

    </main>
        </div>
  )
}


export default Projects