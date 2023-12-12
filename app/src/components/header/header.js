import "./styles.css"
import { NavLink } from "react-router-dom";

function header () {
    return(
    
    <header>
    <nav className="navigation">
        <div className="conteiner">
          <div className="nav-row">
            <NavLink to="/" className="logo">
            <span className="Freelancer-text">Freelancer</span> portfolio
            </NavLink>
            <ul className="nav-list">
                <NavLink to= "/">


                </NavLink>
          
                <li className="nav-list-item"><a href="./project.html" className="nav-item-link nav-item-link-active">Projects</a></li>
    
                <li className="nav-list-item"><a href="./skills.html" className="nav-item-link">Skills</a></li>
    
                <li className="nav-list-item"><a href="./contacs.html" className="nav-item-link">Contacts</a></li>
    
            </ul>
        </div>
       </div>
    </nav>
    
    </header>
);}

export default header;