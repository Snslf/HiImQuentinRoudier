import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import emailjs from 'emailjs-com';



function Contact_form() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_zw4riwk', e.target, 'user_DzQxkT0tyxfrj7ZtHeHpK')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }
  return (
      <div class="Contact_form">
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
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-2">Submit</button>
          </div>
        </form>
      </div>
  );
}

export default Contact_form;
