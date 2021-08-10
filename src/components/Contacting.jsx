
import React, {useState, useEffect, useContext, createContext } from "react";
import "../App.css";
import MailContext from "./MailContext";


const Contacting = (props) => {
  const { number, updateNumber } = useContext(MailContext);
  function Click_contacted(){
    updateNumber(1- number);
    console.log("Dans contacting", number);
  }

  const options = [
    { text: "Contacting 📩", handler:  props.actionProvider.SayingHello , id: 1 },
    { text: "Go back", handler: props.actionProvider.SayingHello, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="contact-option-button"
      key={option.id}
      onClick={() => Click_contacted()}
    >
      {option.text}
    </button>
  ));

  return <div className="contact-options-container">{optionsMarkup}</div>;
};

export default Contacting;
