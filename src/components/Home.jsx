import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import utc from "./images/UTC-SU.jpg";
import esiee from "./images/ESIEE_AMIENS_LOGO.png";
import udemy from "./images/UDEMY-BIS.png";
import sii from "./images/sii.png";
import ng from "./images/Nagaoka.jpg";
import db from "./images/Demboost.jpg";
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';

function changeBackground(e) {
    e.target.style.background = 'red';
}
function normalBackground(e) {
    e.target.style.background = '#444444';
}

function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Header />
      <div class = "container">
        <h1> My skills </h1>
        <div class = "row ">
          <div class="col-10 ">
            <a>blabla</a>
          </div>
          <div class="col ">
            <a>habla</a>
          </div>
        </div>
        <div class = "row">
          <div class="col-8 ">
            <a>blabla</a>
          </div>
          <div class="col ">
            <a>habla</a>
          </div>
        </div>
        <div class = "row">
          <div class="col-6 ">
            <a>blabla</a>
          </div>
          <div class="col ">
            <a>habla</a>
          </div>
        </div>
        <div class = "row">
          <div class="col-4 ">
            <a>blabla</a>
          </div>
          <div class="col ">
            <a>habla</a>
          </div>
        </div>
        <div class = "row ">
          <div class="col-2 ">
            <a>blabla</a>
          </div>
          <div class="col ">
            <a>habla</a>
          </div>
        </div>
        <a> Other skills not related to web development </a>
      </div>
      <div class="container">
        <h1> Work Experiences </h1>
        <div class="row divcontent">
          <div class="col-3 contentimg">
            <img class="picture imgdiv"
             src={sii}
             width="400"
             height="500"
             alt="The UTC logo"/>
          </div>
          <div class="col">
            <h4> Consultant engineer as a mechatronics/Test developer at SII for MBDA and Thales </h4>
            <ul>
              <li>Develop test scripts in Python and ATLAS</li>
              <li>Code review</li>
              <li>Analysis of the hardware part of the system for debugging</li>
            </ul>
          </div>
        </div>
        <div class="row divcontent">
          <div class="col">
            <h4>Mechatronics/Robotics intern and engineer at DemBoost - Feb 2019 - Feb 2020</h4>
            <ul>
              <li>Simulating robotics systems and creating robotics algorithms on Matlab and Simulink</li>
              <li>Innovate robotic solutions for nuclear decommissioning</li>
              <li>Designing the functional and behavioral system architectures of the robots</li>
              <li>Presenting my robotics systems to the head of the French Atomic Energy Commission</li>
              <li>Learning about robotics in hostile environments</li>
              <li>Conceptions of robotic systems operating in hostile environments, mapping it and itsradioactive emissions and taking samples of radioactive concrete.</li>
              <li>Learning to use ROS (python and c++) and simulate robotic tasks</li>
            </ul>
          </div>
          <div class="col-3 contentimg" >
          <img class="picture imgdiv"
             src={db}
             width="400"
             height="500"
             alt="The UTC logo"/>
          </div>
        </div>
        <div class="row divcontent">
          <div class="col-3 contentimg">
            <img class="picture imgdiv"
             src={ng}
             width="400"
             height="500"
             alt="The UTC logo"/>
          </div>
          <div class="col">
            <h4> R&D intern at Nagaoka University of Technology - Mar 2018 - Jun 2018</h4>
            <ul>
              <li>Studying the following subject: Single-phase power decoupling technique utilizing Hybrid</li>
              <li>Hybridmethod with passive and active power decoupling </li>
              <li>Simulate the electrical systems on Matlab and Simulink </li>
              <li>Participated to the redaction of a Scientific paper you can find by clicking <a href = "https://www.researchgate.net/publication/329959385_Single-phase_power_decoupling_technique_utilizing_Hybrid_method_with_passive_and_active_power_decoupling">here</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="container">
        <h1> Education </h1>
        <div class="row divcontent">
          <div class="col">
            <h4> Udemy </h4>
            <p>The Complete 2021 Web Development Bootcamp : </p>
            <ul>
              <li>HTML, CSS, Bootstrap</li>
              <li>JavaScript, jQuery, Node.js, React.js </li>
              <li>SQL, MongoDB </li>
              <li>RESTful API </li>
            </ul>
          </div>
          <div class="col-5 contentimg">
            <img class="picture imgdiv"
             src={udemy}
             width="400"
             height="500"
             alt="The UTC logo"/>
          </div>
        </div>
        <div class="row divcontent">
          <div class="col-5 contentimg">
            <img class="picture imgdiv"
             src={utc}
             width="400"
             height="500"
             alt="The UTC logo"/>
          </div>
          <div class="col">
            <h4> Compiegne University of Technology </h4>
            <p>Engineering Master (M2), Major in System Engineering, Mechatronics</p>
          </div>
        </div>
        <div class="row divcontent">
          <div class="col">
            <h4> ESIEE-Amiens </h4>
            <p>Engineer degree (M2), Major in industrial engineering </p>
          </div>
          <div class="col-5 contentimg">
          <img class="picture imgdiv"
             src={esiee}
             width="400"
             height="500"
             alt="The UTC logo"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
