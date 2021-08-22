import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="slider-size smallpadding">
      <div>
        <a className= "footer-link" href="/"> Home </a>
        <a className= "footer-link" href="/"> Resume </a>
        <a className= "footer-link" href="/About"> About </a>
        <a className= "footer-link" href="#"> Contact </a>
      </div>
      <div>
        <a className= "footer-link app-link" ><FontAwesomeIcon icon={faGithubSquare} /></a>
        <a className= "footer-link app-link"><FontAwesomeIcon icon={faLinkedin} /></a>
      </div>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
