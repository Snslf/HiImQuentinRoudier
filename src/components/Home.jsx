import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import 'bootstrap/dist/css/bootstrap.css';

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
                    <form method="get" action="file.doc">
                       <button class=" btn button-yellow button-change-yellow btn-lg btn-block" type="submit">Download!</button>
                    </form>
                  </div>
                </div>
                <h4 class="between-lines"> Or click here if you want to see it on the website</h4>
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
