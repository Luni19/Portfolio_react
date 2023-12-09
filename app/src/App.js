import "./styles.css";



function App() {
  return (
    <div className="App">
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
            <li className="project"><a href="./project.html"><img src="./images/projects/01.jpg" alt="project-image" className="project-img"/><h3 className="project-tittle">Gaming streaming portal</h3></a></li>
            <li className="project"><a href=""><img src="./images/projects/02.jpg" alt="project-image" className="project-img"/><h3 className="project-tittle">Video service</h3></a></li>
            <li className="project"><a href=""><img src="./images/projects/03.jpg" alt="project-image" className="project-img"/><h3 className="project-tittle">Video portal</h3></a></li>
            <li className="project"><a href=""><img src="./images/projects/04.jpg" alt="project-image" className="project-img"/><h3 className="project-tittle">Dating app</h3></a></li>
            <li className="project"><a href=""><img src="./images/projects/05.jpg" alt="project-image" className="project-img"/><h3 className="project-tittle">Landing</h3></a></li>
            <li className="project"><a href=""><img src="./images/projects/06.jpg" alt="project-image" className="project-img"/><h3 className="project-tittle">Gaming community</h3></a></li>
        </ul>
    </div>
</section>

</main>
<footer className="footer">
<div className="conteiner">
    <div className="footer-wrapper"> 
    <ul className="social">
        <li className="social-item"><img src="./images/icons/vk.svg" alt=""/></li>
        <li className="social-item"><img src="./images/icons/instagram.svg" alt=""/></li>
        <li className="social-item"><img src="./images/icons/twitter (1).svg" alt=""/></li>
        <li className="social-item"><img src="./images/icons/gitHub.svg" alt=""/></li>
        <li className="social-item"><img src="./images/icons/linkedIn.svg" alt=""/></li>
    </ul>
    <div className="copyright">
        <p className="copyright-text">© 2023 frontend-dev.com</p>
    </div>
  </div>
</div>

</footer>
     
    </div>
  );
}

export default App;
