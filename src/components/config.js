import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";
import Contacting from "./Contacting";
const botName = "Quentin's Bot";

const config = {
  botName: botName,
  customComponents: {
    botAvatar: (props) => <div className="chatbot-avatar">Q</div>,
  },
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
