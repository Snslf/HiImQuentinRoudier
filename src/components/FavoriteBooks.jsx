import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import perfume from "./images/Perfume.jpg";
import ornoir from "./images/Or_noir.jpg";
import sapiens from "./images/Sapiens.jpg";


function FavoriteBooks() {
  return (
    <div class="App">
            <br/>
            <h3> My favorite books </h3>
            <br/>
            <div class = "row">
              <div class = "col contentimg">
                <img class="picture imgbooks"
                 src={sapiens}
                 alt="Sapiens of Yuval Noah Harari"/>
              </div>
              <div class = "col contentimg">
                <img class="picture imgbooks"
                 src={ornoir}
                 alt="Or Noir of Matthieu Auzanneau"/>
              </div>
              <div class = "col contentimg">
                <img class="picture imgbooks"
                 src={perfume}
                 alt="The Perfume - Patrick Süskind"/>
              </div>
            </div>
            <div class = "row">
              <div class = "col App">
                <br/>
                <h4> Sapiens - A brief history of humankind </h4>
                <h6> Yuval Noah Harari</h6>
              </div>
              <div class = "col App">
                <br/>
                <h4> Or Noir - La grande histoire du pétrole </h4>
                <h6> Matthieu Auzanneau </h6>
              </div>
              <div class = "col App">
                <br/>
                <h4> Perfume - The story of a murderer </h4>
                <h6> Patrick Süskind </h6>
              </div>
            </div>
            <br/>
          </div>
  );
}

export default FavoriteBooks;
