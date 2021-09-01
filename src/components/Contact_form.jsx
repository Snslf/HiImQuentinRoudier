import React, {useState, useEffect, useContext, createContext } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import emailjs from 'emailjs-com';
import MailContext from "./MailContext";


function Contact_form() {
  const[ submited, setsubmited] = useState(0);
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', process.env.REACT_APP_MAIL_CONTEXT_TEMPLATE, e.target, process.env.REACT_APP_MAIL_CONTEXT_API_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
    setsubmited(1-submited);
  };
  if(submited === 0){
    return (
        <div class="Contact_form align-left">
          <h5> Thank you for being interested by my profile! </h5>
          <form onSubmit={sendEmail}>
            <div class="form-row smallpadding">
                <label for="validationCustom01">First name</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="First name" name="first_name" required/>
                <div class="valid-feedback"/>
            </div>
            <div class="form-row smallpadding">
                <label for="validationCustom02">Last name</label>
                <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" name="last_name" />
                <div class="valid-feedback"/>
            </div>
            <div class="form-row smallpadding">
              <label for="inputEmail4">Email</label>
              <input type="email" class="form-control" id="inputEmail4" placeholder="Email" name="email" required/>
            </div>
            <div class="form-row smallpadding">
                <label for="validationCustom01">Subject</label>
                <input type="text" class="form-control" id="validationCustom01" placeholder="New Mission" name="subject" required/>
                <div class="valid-feedback"/>
            </div>
            <div class="form-row smallpadding">
              <label for="exampleFormControlTextarea1">Content</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What do you want to say?" name="message" required></textarea>
            </div>
            <div class="col-auto smallpadding">
              <button type="submit" class="btn btn-primary mb-2">Submit</button>
            </div>
          </form>
        </div>
      );
    }else{
      return (
        <div class="Contact-bye">
          <a> Thank you!</a>
          <br/>
          <br/>
          <h1> 😃 </h1>
          <br/>
          <a> I will reply back as soon as I can!</a>
          <br/>
          <br/>
          <a> Have a nice day! </a>
        </div>
      );
    };
  };

export default Contact_form;
