import BtnGitHub from "../components/BtnGH"
import { projects } from "../helpers/projectsList"
import { useParams } from "react-router-dom"



function Projects () {
    const {id} = useParams();
    const projects = projects[id];

    return(
             <main>
        <section className="project-section">
            <div className="conteiner">
                <div className="project-wrapper">

                <h1 className="projects-text">{projects.title}</h1>
             
                <img className="project-image-details" src={projects.imgBig} alt={projects.title}/>
                    <p className="skils-text">{projects.skills}</p>
                <BtnGitHub link="https://github.com"/>
                {projects.BtnGitHub && (
                    <BtnGitHub link={projects.gitHubLink} />
                ) }
             </div>
            </div>
        </section>

    </main> 

  )
}


export default Projects