import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';
import resume_pdf from "./CV_DEV_EN_Quentin_ROUDIER.pdf";

function Home(props) {

  return (
      <div >
        <Header />
        <div class=" myskills-margin ">
          <div class="row">
            <div class="col-2">
            </div>
            <div class="col-1">
              <h4 className = "first-line-home Welcome-home-page">Welcome to my website</h4>
            </div>
            <div class="col">
              <div >
                <div >
                  <h1 className="Hi-home-page">Hi!</h1>
                  <h2 className = "first-line-home">I'm Quentin Roudier.</h2>
                </div>
                <div class="between-lines">
                  <h4 class="second-line" >You can click here to download my resume on PDF format</h4>
                  <div class="second-line">
                    <a href= {resume_pdf} class="btn button-yellow button-change-yellow btn-lg btn-block " download><i class="fa fa-download"></i>Download</a>
                  </div>
                </div>
                <h4 class="between-lines"> Or click <a href="/Resume" className = "link_here_home">here</a> if you want to see it on the website</h4>
                <h4 class="between-lines-last-line">Anyway, don't hesitate to visit it if you want to learn more</h4>
              </div>
            </div>
          </div>
        </div>
        <hr/>
        <Footer />
      </div>
  );
};

export default Home;
