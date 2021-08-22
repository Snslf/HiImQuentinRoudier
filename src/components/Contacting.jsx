
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
    { text: "Contacting 📩", handler:  () => Click_contacted() , id: 1 },
    { text: "Go back", handler: props.actionProvider.GoingBack, id: 2 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="contact-options-container">{optionsMarkup}</div>;
};

export default Contacting;
