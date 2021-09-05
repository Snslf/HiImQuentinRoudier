
import React from "react";

import "../App.css";

const LearningOptions = (props) => {
  const options = [
    { text: "I just wanted to say Hello 👋", handler:  props.actionProvider.SayingHello , id: 1 },
    { text: "I would like to contact you! 📠", handler: props.actionProvider.ContactMe, id: 2 },
    { text: "Why do you want to be a developer? 💻", handler: props.actionProvider.WhyDev, id: 3 },
    { text: "How did you learn coding? ⌨️", handler: props.actionProvider.LearnCoding, id: 4 },
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

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default LearningOptions;
