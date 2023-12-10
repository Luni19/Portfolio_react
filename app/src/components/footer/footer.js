import vk from "../../../images/icons/vk.svg"
import twitter from "../../../images/icons/twitter.svg"
import lk from "../../../images/icons/linkedIn.svg"
import inst from "../../../images/icons/instagram.svg"
import github from "../../../images/icons/gitHub.svg"




function footer (){
    return(
        <footer className="footer">
<div className="conteiner">
    <div className="footer-wrapper"> 
    <ul className="social">
        <li className="social-item"><img src={vk} alt=""/></li>
        <li className="social-item"><img src={inst} alt=""/></li>
        <li className="social-item"><img src={twitter} alt=""/></li>
        <li className="social-item"><img src={github} alt=""/></li>
        <li className="social-item"><img src={lk} alt=""/></li>
    </ul>
    <div className="copyright">
        <p className="copyright-text">© 2023 frontend-dev.com</p>
    </div>
  </div>
</div>

</footer>
    )
}

export default footer