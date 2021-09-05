import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
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
import StarfieldAnimation from 'react-starfield-animation'
import config from './config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Icon } from '@iconify/react';
import { faHtml5, faCss3Alt, faJsSquare, faReact, faNodeJs, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons'


function Home() {
  const year = new Date().getFullYear();
  return (
    <div class = "background-image">
      <StarfieldAnimation
        numParticles={400}
        style={{
          position: 'fixed',
          zIndex: 1,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0
        }}
      />
      <Helmet>
        <meta charSet="utf-8" />
        <title>I'm Quentin Roudier</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <Header />
      <div class = "zIndex">
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


        <hr class="home-hr"/>

        <h1> Work Experiences </h1>
        <div>



          <Accordion  class="resume-container" allowMultipleExpanded ="1" allowZeroExpanded="1">
              <AccordionItem class = "accordion-item">
                  <AccordionItemHeading class="according-item-header">
                      <AccordionItemButton>
                        <img class="picture imgdiv according-item-header-components"
                         src={sii}
                         width="400"
                         height="500"
                         alt="The UTC logo"/>
                         <div class="according-item-header-components">
                          <h4 > Consultant IVV engineer / Python developer at SII for Thales and MBDA</h4>
                          <h5> Aug 2020 - Jul 2021 </h5>
                         </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul class="according-item-header-components">
                      <li>Develop test scripts in Python and ATLAS</li>
                      <li>Code review</li>
                      <li>Analysis of the hardware part of the system for debugging</li>
                    </ul >
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem class = "accordion-item">
                  <AccordionItemHeading class="according-item-header">
                      <AccordionItemButton>
                        <img class="picture imgdiv according-item-header-components"
                           src={db}
                           width="400"
                           height="500"
                           alt="The UTC logo"/>
                           <div class="according-item-header-components">
                             <h4>Mechatronics/Robotics intern and engineer at DemBoost</h4>
                             <h5>Feb 2019 - Feb 2020</h5>
                           </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul class="according-item-header-components">
                      <li>Simulating robotics systems and creating robotics algorithms on Matlab and Simulink</li>
                      <li>Innovate robotic solutions for nuclear decommissioning</li>
                      <li>Designing the functional and behavioral system architectures of the robots</li>
                      <li>Presenting my robotics systems to the head of the French Atomic Energy Commission</li>
                      <li>Learning about robotics in hostile environments</li>
                      <li>Conceptions of robotic systems operating in hostile environments, mapping it and itsradioactive emissions and taking samples of radioactive concrete.</li>
                      <li>Learning to use ROS (python and c++) and simulate robotic tasks</li>
                    </ul>
                  </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem class = "accordion-item">
                  <AccordionItemHeading class="according-item-header">
                      <AccordionItemButton>
                        <img class="picture imgdiv according-item-header-components"
                         src={ng}
                         width="400"
                         height="500"
                         alt="The UTC logo"/>
                         <div class="according-item-header-components">
                          <h4 > R&D intern at Nagaoka University of Technology</h4>
                          <h5>Mar 2018 - Jun 2018</h5>
                        </div>
                      </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <ul class="according-item-header-components">
                      <li>Studying the following subject: Single-phase power decoupling technique utilizing Hybrid</li>
                      <li>Hybridmethod with passive and active power decoupling </li>
                      <li>Simulate the electrical systems on Matlab and Simulink </li>
                      <li>Participated to the redaction of a Scientific paper you can find by clicking <a class = "underline-link" href = "https://www.researchgate.net/publication/329959385_Single-phase_power_decoupling_technique_utilizing_Hybrid_method_with_passive_and_active_power_decoupling">here</a></li>
                    </ul>
                  </AccordionItemPanel>
              </AccordionItem>
          </Accordion>

        </div>


        <hr class="home-hr"/>
        <h1> Education </h1>
        <div >
          <Accordion class="resume-container" allowMultipleExpanded ="1" allowZeroExpanded="1">
            <AccordionItem  class="accordion-item">
                <AccordionItemHeading class="according-item-header">
                    <AccordionItemButton>
                      <img class="picture imgdiv  according-item-header-components"
                       src={udemy}
                       width="400"
                       height="500"
                       alt="The UTC logo"/>
                       <h4 class="according-item-header-components" > Udemy </h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p class="according-item-header-components">The Complete 2021 Web Development Bootcamp : </p>
                  <ul class="according-item-header-components">
                    <li>HTML, CSS, Bootstrap</li>
                    <li>JavaScript, jQuery, Node.js, React.js </li>
                    <li>SQL, MongoDB </li>
                    <li>RESTful API </li>
                  </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem  class="accordion-item">
                <AccordionItemHeading class="according-item-header">
                    <AccordionItemButton>
                      <img class="picture imgdiv  according-item-header-components"
                       src={utc}
                       width="400"
                       height="500"
                       alt="The UTC logo"/>
                      <h4 class="according-item-header-components"> Compiegne University of Technology </h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p class="according-item-header-components">Engineering Master (M2), Major in System Engineering, Mechatronics</p>
                  <ul class="according-item-header-components">
                    <li>System engineering</li>
                    <li>Probability and statistics</li>
                    <li>mechatronics - robotics</li>
                    <li>Bio-mimicry</li>
                  </ul>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem  class="accordion-item">
                <AccordionItemHeading class="according-item-header">
                    <AccordionItemButton>
                      <img class="picture imgdiv according-item-header-components"
                       src={esiee}
                       width="400"
                       height="500"
                       alt="The UTC logo"/>
                       <h4 class="according-item-header-components"> ESIEE-Amiens </h4>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p class="according-item-header-components">Engineer degree (M2), Major in industrial engineering </p>
                  <ul class="according-item-header-components">
                    <li>Mechatronics - robotics - image processing - industrial engineering</li>
                    <li>Metrology - probability - statistics</li>
                    <li>Power electronics - electrical engineering</li>
                    <li>C, C#, C++, telecommunication</li>
                  </ul>
                </AccordionItemPanel>
            </AccordionItem>
          </Accordion>

        </div>
        <hr class="home-hr"/>


        <Footer />
      </div>


    </div>
  );
}

export default Home;
