import "./style.css"
import project1 from "../../images/projects/01.jpg"
import project2 from "../../images/projects/02.jpg"
import project3 from "../../images/projects/03.jpg"
import project4 from "../../images/projects/04.jpg"
import project5 from "../../images/projects/05.jpg"
import project6 from "../../images/projects/06.jpg"

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
            <li className="project"><a href=""><img src={project1}  className="project-img"/><h3 className="project-tittle">Gaming streaming portal</h3></a></li>
            <li className="project"><a href=""><img src={project2}  className="project-img"/><h3 className="project-tittle">Video service</h3></a></li>
            <li className="project"><a href=""><img src={project3} className="project-img"/><h3 className="project-tittle">Video portal</h3></a></li>
            <li className="project"><a href=""><img src={project4}  className="project-img"/><h3 className="project-tittle">Dating app</h3></a></li>
            <li className="project"><a href=""><img src={project5}  className="project-img"/><h3 className="project-tittle">Landing</h3></a></li>
            <li className="project"><a href=""><img src={project6}  className="project-img"/><h3 className="project-tittle">Gaming community</h3></a></li>
        </ul>
    </div>
</section>

</main>
    )
}

export default main