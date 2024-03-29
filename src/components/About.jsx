import React, {useState, useEffect} from "react";
import ReactLoading from 'react-loading';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import {Helmet} from "react-helmet";
import Header from "./Header";
import FavoriteBooks from "./FavoriteBooks";
import EntomologyTree from "./EntomologyTree";
import StarfieldAnimation from 'react-starfield-animation'

import Contacting from "./Contacting";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import me from "./images/Me.png";
import fhaz from "./images/FHAZ.png";
import rhaz from "./images/RHAZ.png";
import mast from "./images/MASTCAM.png";
import chemcam from "./images/CHEMCAM.png";
import mahli from "./images/MAHLI.png";
import mardi from "./images/MARDI.png";
import navcam from "./images/NAVCAM.png";



import { Range } from 'react-range';


import { WorldMap } from "react-svg-worldmap";

var date1 = new Date('08/06/2012');
var date2 = new Date();


var difference = date2.getTime() - date1.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

const data =
    [
      { country: "fr", value: ": I live here 🥖"},
      { country: "gb", value: ": I went to London"},
      { country: "de", value: ": I went to Berlin, Munchen, Wurzburg and Frieburg. I recommend the black forest." },
      { country: "it", value: ": I have been there two times and Florence will be one of the last things I'll forget"},
      { country: "va", value: ": Proud to have been in the smallest country in the world!"},
      { country: "es", value: ": I spent 2 weeks on the Costa Brava"},
      { country: "pt", value: ": I went to Lisbonne and it is now my favorite european city!"},
      { country: "dk", value: ": I went to Copenhaghe"},
      { country: "se", value: ": A lot of lakes there"},
      { country: "no", value: ": I walked a lot in the fjords but didn't see northen lights sadly"},
      { country: "za", value: ": Walked a lot in the drakensberg and did some safaris there"},
      { country: "ls", value: ": Proud to have been in the highest bar of Africa :)"},
      { country: "sz", value: ": Despair in crazy landscapes"},
      { country: "jp", value: ": I studied there, we could speak about it during a looong time if you want :) "}
    ]


function About() {
  const[ wm, setwm] = useState(0);
  const[et, setet] = useState(0);
  const[bk, setbk] = useState(0);
  const[ast, setast] = useState(0);
  const[rangeast, setrangeast] = useState(1);
  var date3 = new Date(date1.getTime()+1000*60*60*24*rangeast);
  function Wmap(){
        setwm(1 - wm);
        if( wm === 0){
          setet(0);
          setast(0);
          setbk(0);
        };
  };
  function EntoTree(){
        setet(1 - et);
        if( et === 0){
          setast(0);
          setwm(0);
          setbk(0);
        };
  };
  function Books(){
    setbk(1-bk);
    if( bk === 0){
      setet(0);
      setwm(0);
      setast(0);
    };
  };
  function Astronomy(){
    setast(1-ast);
    if( ast === 0){
      setet(0);
      setwm(0);
      setbk(0);
    };

  };

  function NASAApi(props){

    const[photodata, setphotodata] = useState(null);
    const[num_order, setnum_order] = useState(1);
    const [rangeval, setRangeval] = useState(null);

    function order_pic(x, y){
      if(num_order + x > y-1){
        setnum_order(0);
      }else if(num_order + x < 0){
        setnum_order(y-1);
      }else{
        setnum_order(num_order + x);
      }

    }

    useEffect(() =>{
      fetchPhoto(props.arg);

      async function fetchPhoto(w){

        let numsol = (w.getYear()+1900)+"-"+(w.getMonth()+1)+"-"+w.getDate();
        let complet_api_adress = process.env.REACT_APP_NASA_API_URL + numsol + process.env.REACT_APP_NASA_API_KEY;
        const res = await fetch(complet_api_adress);
        const data = await res.json();
        setphotodata(data);
      }
    }, []);
    if (!photodata) return( <div>
          <ReactLoading  class = "WorldMapClass" type="spin" color="white" height={50} width={50} />
        </div>);
    if(photodata.photos===null || Object.keys(photodata.photos).length === 0) return(<div>
        <h1> No picture has been taken that day, or maybe they are not uplaoded.</h1>
        <h1> Try an other day then :) </h1>
        </div>);

    return(
      <div>
        <h4 class= "App">The pictures taken on the {photodata.photos[num_order].earth_date} by the rover Curiosity on Mars</h4>
        <div class="Nasa-display-buttons-container">
          <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(-25, photodata.photos.length)}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
          <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(-1, photodata.photos.length)}><FontAwesomeIcon icon={faAngleLeft} /></button>
          <a> Image {num_order + 1}/{photodata.photos.length}</a>
          <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(1, photodata.photos.length)}><FontAwesomeIcon icon={faAngleRight} /></button>
          <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(25, photodata.photos.length)}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
        </div>
        <div class= "App">
          <div class ="Nasa-pictures-container">
            <div class = "Nasa-picture">
              <img
                src={photodata.photos[num_order].img_src}
                alt = {photodata.photos[num_order].img_src}
                class = "profilpicture" />
            </div>
            <div class = "Nasa-cam-picture">
              <a><b>{photodata.photos[num_order].camera.full_name} ({photodata.photos[num_order].camera.name})</b></a>
              {photodata.photos[num_order].camera.name === "FHAZ" &&
              <div>
                <a>The HAZcams (RHAZ and FHAZ) detect hazards to the front and back pathways of the rover, such as large rocks, trenches, or sand dunes.</a>
                <img
                  src={fhaz}
                  alt = "fhaz"
                  class = "profilpicture" />
              </div>
              }
              {photodata.photos[num_order].camera.name === "RHAZ" &&
              <div>
                <a>The HAZcams (RHAZ and FHAZ) detect hazards to the front and back pathways of the rover, such as large rocks, trenches, or sand dunes.</a>
                <img
                  src={rhaz}
                  alt = "rhaz"
                  class = "profilpicture" />
              </div>
              }
              {photodata.photos[num_order].camera.name === "MAST" &&
              <div>
                <a>	To take panoramic color images of the surface and atmospheric features and the terrain ahead of the rover. </a>
                <img
                  src={mast}
                  alt = "mast"
                  class = "profilpicture" />
              </div>
              }
              {photodata.photos[num_order].camera.name === "CHEMCAM" &&
              <div>
                <a> To analyze the chemical composition of rocks and soil. </a>
                <img
                  src={chemcam}
                  alt = "chemcam"
                  class = "profilpicture" />
              </div>
              }
              {photodata.photos[num_order].camera.name === "MAHLI" &&
              <div>
                <a> Microscopic Imaging of minerals, textures and structures in rocks and soil at scales smaller than the diameter of a human hair.</a>
                <img
                  src={mahli}
                  alt = "mahli"
                  class = "profilpicture" />
              </div>
              }
              {photodata.photos[num_order].camera.name === "MARDI" &&
              <div>
                <a>To took pictures during the spacecraft descent through the Martian atmosphere.</a>
                <img
                  src={mardi}
                  alt = "mardi"
                  class = "profilpicture" />
              </div>
              }
              {photodata.photos[num_order].camera.name === "NAVCAM" &&
              <div>
                <a> Aid in autonomous navigation</a>
                <img
                  src={navcam}
                  alt = "navcam"
                  class = "profilpicture" />
              </div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div class = "myskills-margin background-image">
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
      <div  class = "zIndex">
        <div class="container padding width-page bio-color">
          <div class="about-bio-container">
            <div>
              <img class="picture profilpicture"
               src={me}
               alt="My face, you really miss something :("/>
            </div>
            <div class = "about-bio-text">
              <h3> I'm Quentin, a former robotics and mechatronics engineer who decided to work in IT.</h3>
              <p> After obtaining my engineering degree at ESIEE-Amiens and a Research Master at the University of Technology of Compiegne, I worked on various subjects in different types of companies. It is during these experiences that I understood the part I enjoyed the most in engineering was coding.</p>
              <p> Then, I began to code more on my free time, trying to improve my understanding and my coding logic in python, on websites such as CodeWars or Codingame. And when finally I get confident enough in my skills, I began doing  projects from scratch like the website you are using right now. I was quite surprised that I enjoyed it that much and this is the reason why I'm looking right now to work in IT as a software engineer or as a web developer.</p>
            </div>
          </div>
        </div>
        <hr class="home-hr"/>
        <div class="hobbies-div-background">
          <div class ="container padding width-page">
            <h1 > Some of my Hobbies </h1>
            <div class="hobbies-buttons-container">
              <div class="hobbies-button">
                {et === 1
                  ? <button type="button" class="hobbies-button-width button-clicked btn btn-dark button-change-yellow btn-lg btn-block" onClick={EntoTree}><h4>Entomology</h4></button>
                  : <button type="button" class="hobbies-button-width btn btn-dark button-change-yellow btn-lg btn-block" onClick={EntoTree}><h4>Entomology</h4></button>
                }
              </div>
              <div class="hobbies-button">
                {ast === 1
                  ? <button type="button" class="hobbies-button-width button-clicked btn btn-dark button-change-yellow btn-lg btn-block" onClick={Astronomy} ><h4>Astronomy</h4></button>
                  : <button type="button" class="hobbies-button-width btn btn-dark button-change-yellow btn-lg btn-block" onClick={Astronomy} ><h4>Astronomy</h4></button>
                }
              </div>
              <div class="hobbies-button">
                {bk === 1
                  ? <button type="button" class="hobbies-button-width button-clicked btn btn-dark button-change-yellow btn-lg btn-block" onClick={Books}><h4>Reading</h4></button>
                  : <button type="button" class="hobbies-button-width btn btn-dark button-change-yellow btn-lg btn-block" onClick={Books}><h4>Reading</h4></button>
                }
              </div>
              <div class="hobbies-button">
                {wm === 1
                  ? <button type="button" class="hobbies-button-width button-clicked btn btn-dark button-change-yellow btn-lg btn-block" onClick={Wmap}><h4>Travel</h4></button>
                  : <button type="button" class="hobbies-button-width btn btn-dark button-change-yellow btn-lg btn-block" onClick={Wmap}><h4>Travel</h4></button>
                }
              </div>
            </div>
          </div>
          <div>
            {et === 1 &&
              <div class="tree-container">
               <EntomologyTree/>
              </div>
            }
              {bk === 1 &&
                 <FavoriteBooks/>
              }
              {wm === 1 &&
                <div className="WorldMapClass" >
                 <WorldMap color="#FFD523" title=<h3>Where have I been ? Don't hesitate to go over the countries !</h3> size="responsive" data={data} borderColor="white" backgroundColor="#11ffee00;" frame = "True" strokeOpacity="5"/>
                </div>
              }
              {ast === 1 &&
                 <div>
                  <div class = "Nasa-range-title-container">
                    <h4> {date1.getDate()}/{date1.getMonth()+1}/{date1.getYear()+1900} </h4>
                    <h4 for="customRange1" class="form-label">Choose the day on Mars</h4>
                    <h4> {date2.getDate()}/{date2.getMonth()+1}/{date2.getYear()+1900} </h4>
                  </div>
                  <div class="slider-size">
                    <input type="range" class="form-range" min="0" max={days} id="customRange1" onChange={(event) => setrangeast(event.target.value)}/>
                  </div>
                  <NASAApi arg={date3}/>
                </div>
              }
          </div>
          <h4 class="padding align"> And coding of course but it seems obvious!</h4>
        </div>
        <hr class="home-hr"/>
        <Footer/>
      </div>
    </div>
    );
}

export default About;
