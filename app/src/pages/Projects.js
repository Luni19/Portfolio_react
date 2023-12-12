import BtnGitHub from "../components/BtnGH"
import projectBig2 from "../images/projects/02-big.jpg"



function Projects () {
    return(
       
             <main>
        <section className="project-section">
            <div className="conteiner">
                <div className="project-wrapper">

                <h1 className="projects-text">Video service</h1>
             
                <img className="project-image-details" src={projectBig2} alt=""/>
                    <p className="skils-text">Skills: React, Node.js, MongoDB</p>
                <BtnGitHub link="https://github.com"/>
             </div>
            </div>
        </section>

    </main>

  )
}


export default Projects