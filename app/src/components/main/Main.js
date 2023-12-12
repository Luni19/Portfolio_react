import "./style.css"
import Project from "./project/project.js"

import { projects } from "../../helpers/projectsList.js"

function main (){
    return (
        <main>

<section className="hero-section">
        <div className="hero-wrapper">
        <h1 className="tittle">Hi, my name is <span className="Konstantin">Konstantin</span> <span className="frontend">a frontend developer</span>
        </h1>
        <p className="tittle-text">with passion for learning and creating.</p>
        <a className="cv-button" type="btn" href="">Download CV</a>
     </div>
</section>

<section className="project-section">
    <div className="conteiner">
        <h2 className="projects-text">Projects</h2>
        <ul className="projects">
        
            {projects.map((project) => {
                return <Project tittle ={project.title} img={project.img}/>
            })
            }
           
        </ul>
    </div>
</section>

</main>
    )
}

export default main