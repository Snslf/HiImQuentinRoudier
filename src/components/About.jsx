import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Footer from "./Footer";
import Header from "./Header";
import FavoriteBooks from "./FavoriteBooks";
import EntomologyTree from "./EntomologyTree";
import Contacting from "./Contacting";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleLeft, faAngleDoubleRight, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import me from "./images/Me.png";

import fhaz from "./images/FHAZ.png"
import rhaz from "./images/RHAZ.png"
import mast from "./images/MASTCAM.png"
import chemcam from "./images/CHEMCAM.png"
import mahli from "./images/MAHLI.png"
import mardi from "./images/MARDI.png"
import navcam from "./images/NAVCAM.png"




import { Range } from 'react-range';


import { WorldMap } from "react-svg-worldmap";

var date1 = new Date('08/06/2012');
var date2 = new Date();


var difference = date2.getTime() - date1.getTime();
var days = Math.ceil(difference / (1000 * 3600 * 24));

const data =
    [
      { country: "fr", value: ": I live there 🥖"},
      { country: "gb", value: ": I went to London"},
      { country: "de", value: ": I went to Berlin, Munchen, Wurzburg and Frieburg" },
      { country: "it", value: ": I visited the north and the south"},
      { country: "va", value: ": Proud to have been in the smallest country in the world!"},
      { country: "es", value: ": I spent 2 weeks on the Costa Brava"},
      { country: "pt", value: ": I went to Lisbonne and it is now my favorite european city!"},
      { country: "dk", value: ": I went to Copenhaghe"},
      { country: "se", value: ": A lot of lakes there"},
      { country: "no", value: ": I walked a lot in the fjords but didn't see northen lights sadly"},
      { country: "za", value: ": Walked a lot and did some safaris there"},
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


  function SendApiRequest(props){

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
        const apipart1 = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=";
        const apipart2 = "&api_key=HnXY5YIrhbivzLTgcnmWKJBfFfyLG4tz3h9srRfW";
        let numsol = (w.getYear()+1900)+"-"+(w.getMonth()+1)+"-"+w.getDate();
        console.log(numsol);
        let complet_api_adress = apipart1 + numsol + apipart2;
        const res = await fetch(complet_api_adress);
        const data = await res.json();
        setphotodata(data);
      }
    }, []);
    console.log(JSON.stringify(photodata))
    if (!photodata) return( <div>
        <h1> Loading </h1>
        </div>);
    if(photodata.photos===null || Object.keys(photodata.photos).length === 0) return(<div>
        <h1> No picture has been taken that day, or maybe they are not uplaoded.</h1>
        <h1> Try an other day then :) </h1>
        </div>);

    return(
      <div class= "App">
        <h4>The pictures taken on the {photodata.photos[num_order].earth_date}</h4>
        <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(-25, photodata.photos.length)}><FontAwesomeIcon icon={faAngleDoubleLeft} /></button>
        <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(-1, photodata.photos.length)}><FontAwesomeIcon icon={faAngleLeft} /></button>
        <a> Image {num_order + 1}/{photodata.photos.length}</a>
        <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(1, photodata.photos.length)}><FontAwesomeIcon icon={faAngleRight} /></button>
        <button type="button" class="btn button-yellow button-change-yellow btn-lg btn-block" onClick={() => order_pic(25, photodata.photos.length)}><FontAwesomeIcon icon={faAngleDoubleRight} /></button>
        <div class="row">
          <div class = "col d-grid gap-2 border-yellow">
            <img
              src={photodata.photos[num_order].img_src}
              alt = {photodata.photos[num_order].img_src}
              class = "profilpicture" />
          </div>
          <div class = "col d-grid gap-2 border-yellow">
            <a>{photodata.photos[num_order].camera.full_name} ({photodata.photos[num_order].camera.name})</a>
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
    );
  };
  return (
    <div>
      <Header />
      <div class="container padding width-page">
        <div class="row">
          <div class="col">
            <img class="picture profilpicture"
             src={me}
             alt="My face, you really miss something :("/>
          </div>
          <div class="col">
            <h3> Hello! I'm Quentin, a former robotics and mechatronics engineer who decided to work in IT.</h3>
            <br/>
            <p> After working on different subjects in different types of companies, I understood that the part I prefered in engineering was coding.</p>
            <br/>
            <p> This is the reason why I'm looking right now to work in IT as a software engineer or as a web developer </p>
          </div>
        </div>
      </div>
      <div class ="container padding width-page">
        <h1 > Some of my Hobbies </h1>
        <div class="row smallpadding">
          <div class="col d-grid gap-2">
            <button type="button" class="btn btn-dark button-change-yellow btn-lg btn-block" onClick={EntoTree}><h4>Entomology</h4></button>
          </div>
          <div class="col d-grid gap-2">
            <button type="button" class="btn btn-dark button-change-yellow btn-lg btn-block" onClick={Astronomy} ><h4>Astronomy</h4></button>
          </div>
          <div class="col d-grid gap-2">
            <button type="button" class="btn btn-dark button-change-yellow btn-lg btn-block" onClick={Books}><h4>Reading</h4></button>
          </div>
          <div class="col d-grid gap-2">
            <button type="button" class="btn btn-dark button-change-yellow btn-lg btn-block" onClick={Wmap}><h4>Travel</h4></button>
          </div>
        </div>
        {et === 1
          ? <EntomologyTree/>
          : <br/>
        }
          {bk === 1
            ? <FavoriteBooks/>
            : <br/>
          }
          {wm === 1
            ? <div className="WorldMapClass" >
             <WorldMap color="#FFD523" title=<h3>Where have I been?</h3> size="responsive" data={data} borderColor="white" backgroundColor="black" frame = "True" strokeOpacity="1"/>
            </div>
            : <br/>
          }
          {ast === 1
            ?<div>
              <div class = "row">
                <div class="col d-grid gap-2 ">
                  <h4> {date1.getDate()}/{date1.getMonth()+1}/{date1.getYear()+1900} </h4>
                </div>
                <div class="col d-grid gap-2 align">
                  <h4 for="customRange1" class="form-label">Choose the day on Mars</h4>
                </div>
                <div class="col d-grid gap-2 align-right">
                  <h4> {date2.getDate()}/{date2.getMonth()+1}/{date2.getYear()+1900} </h4>
                </div>
              </div>
              <div class="slider-size">
                <input type="range" class="form-range" min="0" max={days} id="customRange1" onChange={(event) => setrangeast(event.target.value)}/>
              </div>
              <SendApiRequest arg={date3}/>
            </div>
            :<br/>
          }
      </div>
      <h4 class="padding align"> And coding of course but it seems obvious!</h4>
      <hr/>
      <Footer/>
    </div>
    );
}

export default About;
