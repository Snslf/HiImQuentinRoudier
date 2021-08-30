import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import {Helmet} from "react-helmet";
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons'


function Home() {
  const year = new Date().getFullYear();
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>I'm Quentin Roudier</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />

      <div>

        <h1 class = "container width-page myskills-margin"> My skills </h1>

        <div className= "div-skills">
          <h4 className= "skills">HTML <FontAwesomeIcon icon={faHtml5} /></h4>
          <h4 className= "skills">CSS <FontAwesomeIcon icon={faCss3Alt} /></h4>
          <h4 className= "skills">Javascript <FontAwesomeIcon icon={faJsSquare} /></h4>
          <h4 className= "skills">React.js <FontAwesomeIcon icon={faReact} /></h4>
          <h4 className= "skills">Node.js <FontAwesomeIcon icon={faNodeJs} /></h4>
        </div>

        <br/>

        <div className= "div-skills">
          <h4 className= "skills">Python <FontAwesomeIcon icon={faPython} /></h4>
          <h4 className= "skills">Numpy <Icon icon="simple-icons:numpy" /></h4>
          <h4 className= "skills">Pandas <Icon icon="simple-icons:pandas" /></h4>
          <h4 className= "skills">Flask <Icon icon="cib:flask" /></h4>
        </div>

        <br/>

        <div className= "div-skills">
          <h4 className= "skills">SQL <Icon icon="ant-design:console-sql-outlined" /></h4>
          <h4 className= "skills">MongoDB <Icon icon="cib:mongodb" /></h4>
          <h4 className= "skills">Git <Icon icon="fa-brands:git-alt" /></h4>
          <h4 className= "skills">Github <Icon icon="akar-icons:github-fill" /></h4>
          <h4 className= "skills">Gitlab <Icon icon="ant-design:gitlab-outlined" /></h4>
        </div>

      </div>


      <hr/>


      <div class="container">

        <h1> Work Experiences </h1>

        <div class="row divcontent divcontent1">
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

        <div class="row divcontent divcontent2">
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

        <div class="row divcontent divcontent1">
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
              <li>Participated to the redaction of a Scientific paper you can find by clicking <a class = "underline-link" href = "https://www.researchgate.net/publication/329959385_Single-phase_power_decoupling_technique_utilizing_Hybrid_method_with_passive_and_active_power_decoupling">here</a></li>
            </ul>
          </div>
        </div>

      </div>


      <hr/>


      <div class="container">
        <h1> Education </h1>
        <div class="row divcontent divcontent2">
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

        <div class="row divcontent divcontent1">
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
            <ul>
              <li>System engineering</li>
              <li>Probability and statistics</li>
              <li>mechatronics - robotics</li>
              <li>Bio-mimicry</li>
            </ul>
          </div>
        </div>

        <div class="row divcontent divcontent2">
          <div class="col">
            <h4> ESIEE-Amiens </h4>
            <p>Engineer degree (M2), Major in industrial engineering </p>
            <ul>
              <li>Mechatronics - robotics - image processing - industrial engineering</li>
              <li>Metrology - probability - statistics</li>
              <li>Power electronics - electrical engineering</li>
              <li>C, C#, C++, telecommunication</li>
            </ul>
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


      <hr/>


      <Footer />


    </div>
  );
}

export default Home;
