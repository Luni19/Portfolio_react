import "./styles.css"


function header () {
    return(
    
    <header>
    <nav className="navigation">
        <div className="conteiner">
          <div className="nav-row">
            <a href="./index.html" className="logo"> <span className="Freelancer-text">Freelancer</span> portfolio</a>
            <ul className="nav-list">
    
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