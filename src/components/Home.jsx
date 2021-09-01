import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import background from "./images/background.jpg";
import {Helmet} from "react-helmet";

import 'bootstrap/dist/css/bootstrap.css';
import resume_pdf from "./CV_DEV_EN_Quentin_ROUDIER.pdf";

function Home(props) {

  return (
      <div class="background-image">
        <Helmet>
          <meta charSet="utf-8" />
          <title>I'm Quentin Roudier</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <Header />
        <div class=" myskills-margin home-container">
          <div>
            <h1 className="Hi-home-page">Hi!</h1>
            <h2 className = "first-line-home">I'm Quentin Roudier.</h2>
            <h3 class="Welcome-home-page">Welcome to my website</h3>
            <div class="between-lines">
              <h4 class="second-line" >You can click here to download my resume on PDF format</h4>
              <div class="second-line">
                <a href= {resume_pdf} class="btn button-yellow button-change-yellow btn-lg btn-block " download><i class="fa fa-download"></i>Download</a>
              </div>
            </div>
            <h4 class="between-lines"> Or click <a href="/Resume" className = " underline-link link_here_home">here</a> if you want to see it on the website</h4>
            <h4 class="between-lines-last-line">Anyway, don't hesitate to visit it if you want to learn more</h4>
          </div>
        </div>
        <hr class="home-hr"/>
        <Footer />
      </div>
  );
};

export default Home;
