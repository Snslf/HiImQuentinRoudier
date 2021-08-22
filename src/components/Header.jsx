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
    };
  };
  function Click_cross(){
    setNumber(0);
    setcont(0);
  };
  return (
      <header>
        <nav class="navbar fixed-top fixed-top navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand margin" href="/"><b>Home</b></a>

          <a class="navbar-brand margin" href="/Resume">Resume</a>

          <a class="navbar-brand margin" href="/About">About</a>

          <a class="navbar-brand margin" href="#" onClick={() => Click_contact()}>Contact</a>


        </nav>
        {cont === 1 && number === 0 &&
          <div className="chat-frame">
            <button type="button" class="btn-close cross-frame" aria-label="Close" onClick={() => Click_contact()}></button>
            <MailContext.Provider value={contextValue}>
              <Contact/>
            </MailContext.Provider>
          </div>
        }
        {number === 1 &&
          <div className="chat-frame">
            <button type="button" class="btn-close cross-frame" aria-label="Close" onClick={() => Click_cross()}></button>
            <Contact_form/>
          </div>
        }
      </header>
  );
};

export default Header;
