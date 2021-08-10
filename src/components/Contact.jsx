import React, {useState, useEffect, useContext, createContext }  from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';
import MailContext from "./MailContext";


function Contact() {
  return (
      <header>
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}/>
      </header>
  );
}

export default Contact;
