import React, { useEffect } from 'react';

class ActionProvider {

  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
  };
  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, friend.")
    this.updateChatbotState(greetingMessage)
  };

  GoingBack = () => {
    const message1 = this.createChatBotMessage(
      "Something else?", {widget:"learningOptions"});
    this.updateChatbotState(message1);
  }

  SayingHello = () => {
    const message1 = this.createChatBotMessage(
      "Hello then!");
    const message2 = this.createChatBotMessage(
        "Always nice to hear this!");
    const message3 = this.createChatBotMessage(
      "Something else?", {widget:"learningOptions"}
    )
    this.updateChatbotState(message1);
    this.updateChatbotState(message2);
    this.updateChatbotState(message3);
  };

  WhyDev = () =>{
    const message1 = this.createChatBotMessage(
      "Interesting question!");
    const message2 = this.createChatBotMessage(
      "Actually, I worked on wide topics such as mechatronics and robotics where I had to mix a lot of engineering skills.");
    const message3 = this.createChatBotMessage(
      "But it helped me to understand that what I prefered in these kind of topics was coding.");
    const message4 = this.createChatBotMessage(
      "Then, I began following bootcamps and doing my own projects to understand more about software engineering.");
    const message5 = this.createChatBotMessage(
      "And these kind of exercices made me understand that it is by far the kind of environnement I need");
    const message6 = this.createChatBotMessage(
      "Something else?", {widget: "learningOptions",});

    this.updateChatbotState(message1);
    this.updateChatbotState(message2);
    this.updateChatbotState(message3);
    this.updateChatbotState(message4);
    this.updateChatbotState(message5);
    this.updateChatbotState(message6);
  };

  LearnCoding = () =>{
    const message1 = this.createChatBotMessage(
      "Well, I began coding with C and C# languages in engineering school");
    const message2 = this.createChatBotMessage(
      "But I really enjoyed coding when I discovered python.");
    const message3 = this.createChatBotMessage(
      "Especially its simplicity and aspect of Easy to learn but Hard to master.");
    const message4 = this.createChatBotMessage(
      "After, I followed a bootcamp on Udemy about web developpment where I studied all of the requirements to be a web developer.");
    const message5 = this.createChatBotMessage(
      "And now, to improve my skills, I'm developping projects like the website you are using right now 😁.");
    const message6 = this.createChatBotMessage(
      "Something else?", {widget: "learningOptions",});

    this.updateChatbotState(message1);
    this.updateChatbotState(message2);
    this.updateChatbotState(message3);
    this.updateChatbotState(message4);
    this.updateChatbotState(message5);
    this.updateChatbotState(message6);

  };

  ContactMe = () =>{
    const message1 = this.createChatBotMessage(
      "Sounds interesting!");
    const message2 = this.createChatBotMessage(
        "You can write to me by clicking on the button below :)", {widget: "contacting",});

    this.updateChatbotState(message1);
    this.updateChatbotState(message2);
  };
  updateChatbotState(message) {
// NOTE: This function is set in the constructor, and is passed in      // from the top level Chatbot component. The setState function here     // actually manipulates the top level state of the Chatbot, so it's     // important that we make sure that we preserve the previous state.


   this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  };
};

export default ActionProvider;
