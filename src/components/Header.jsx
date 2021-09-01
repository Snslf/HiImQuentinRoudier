import React, {useState, useEffect, useContext, createContext } from "react";
import { useLocation } from 'react-router-dom'
import {Helmet} from "react-helmet";
import 'bootstrap/dist/css/bootstrap.css';
import Contact from "./Contact";
import Contact_form from "./Contact_form";
import Contacting from "./Contacting";
import MailContext from "./MailContext";
import { Icon } from '@iconify/react';


function Header(props) {
  const[ cont, setcont] = useState(0);
  const[number, setNumber] = useState(0);

  const contextValue = {
    number,
    updateNumber: setNumber
  };
  const location = useLocation();


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
        <nav class=" navbar fixed-top fixed-top navbar-expand-lg navbar-light bg-light">
          <div class="App">
            <a class=" underline-link navbar-brand margin" href="/">{location.pathname === "/"?
          <b>Home</b>
          : <a>Home</a> }</a>

            <a class=" underline-link navbar-brand margin" href="/Resume">{location.pathname === "/Resume"?
          <b>Resume</b>
          : <a>Resume</a> }</a>

            <a class="underline-link navbar-brand margin" href="/About">{location.pathname === "/About"?
          <b>About</b>
          : <a>About</a> }</a>

          </div>


        </nav>
        {cont === 1 && number === 0 &&
          <div className="chat-frame chat-frame-chatbot">
            <button type="button" class="btn-close cross-frame" aria-label="Close" onClick={() => Click_contact()}></button>
            <MailContext.Provider value={contextValue}>
              <Contact/>
            </MailContext.Provider>
          </div>
        }
        {number === 1 &&
          <div className="chat-frame chat-frame-form">
            <button type="button" class="btn-close cross-frame" aria-label="Close" onClick={() => Click_cross()}></button>
            <Contact_form/>
          </div>
        }
        {console.log(number, " et cont ", cont)}
        {number ===0 && cont ===0 &&
          <div class="chat-icon-container" onClick={() => Click_contact()}>
            <a class="chat-icon"><Icon icon="teenyicons:chatbot-outline"/></a>
          </div>
        }
      </header>
  );
};

export default Header;
