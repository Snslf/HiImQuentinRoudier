import React, {useState, useEffect, useContext, createContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./Contact";
import Contact_form from "./Contact_form";
import Contacting from "./Contacting";
import MailContext from "./MailContext";

function Header(props) {
  const[ cont, setcont] = useState(0);
  const[number, setNumber] = useState(0);

  const contextValue = {
    number,
    updateNumber: setNumber
  };
  function Click_contact(){
    setcont(1-cont);
    if(number === 1){
      setNumber(1- number);
    }
  };
  function Click_cross(){
    setNumber(0);
    setcont(0);
  }
  return (
      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="/">My Site!</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#">Resume</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/About">About</a>
              </li>
              <li class="nav-item">
                <button type="button" class="nav-link"  onClick={() => Click_contact()}>Contact</button>
              </li>
            </ul>
          </div>
        </nav>
        {cont === 1 && number === 0 &&
          <div className="chat">
            <button type="button" class="btn-close" aria-label="Close" onClick={() => Click_contact()}></button>
            <MailContext.Provider value={contextValue}>
              <Contact/>
            </MailContext.Provider>
          </div>
        }
        {number === 1 &&
          <div className="chat">
            <button type="button" class="btn-close" aria-label="Close" onClick={() => Click_cross()}></button>
            <Contact_form/>}
          </div>
        }
      </header>
  );
}

export default Header;
