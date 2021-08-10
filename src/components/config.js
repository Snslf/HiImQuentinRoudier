import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";
import Contacting from "./Contacting";

const config = {
  initialMessages: [
      createChatBotMessage("Hello, I'm the Quentin's bot, nice to meet you 😁! What are you looking for?", {
        widget: "learningOptions",
      }),
    ],
   widgets: [
       {
       	widgetName: "learningOptions",
      	widgetFunc: (props) => <LearningOptions {...props} />,
       },
       {
       	widgetName: "contacting",
      	widgetFunc: (props) => <Contacting {...props} />,
       },

   ],
}

export default config
