import "./style.css"
import project1 from "../../../images/projects/01.jpg"


function Project ({tittle, img}) {
    return(
       <li className="project">
          <a href="">
            <img src={img}  className="project-img"/>
            <h3 className="project-tittle">{tittle}</h3>
          </a>
        </li>
    )
}

export default Project
