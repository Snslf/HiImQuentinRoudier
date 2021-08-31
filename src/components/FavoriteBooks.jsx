import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import perfume from "./images/Perfume.jpg";
import ornoir from "./images/Or_noir.jpg";
import sapiens from "./images/Sapiens.jpg";


function FavoriteBooks() {
  return (
    <div class="App">
      <h3> My favorite books </h3>
        <div class = "books-container">
            <br/>

            <div class = "books-element-container">
              <img class="picture imgbooks"
               src={sapiens}
               alt="Sapiens of Yuval Noah Harari"/>
               <h4> Sapiens - A brief history of humankind </h4>
               <h6> Yuval Noah Harari</h6>
            </div>

            <div class = "books-element-container">
              <img class="picture imgbooks"
               src={ornoir}
               alt="Or Noir of Matthieu Auzanneau"/>
               <h4> Or Noir - La grande histoire du pétrole </h4>
               <h6> Matthieu Auzanneau </h6>
            </div>

            <div class = "books-element-container">
              <img class="picture imgbooks"
               src={perfume}
               alt="The Perfume - Patrick Süskind"/>
               <h4> Perfume - The story of a murderer </h4>
               <h6> Patrick Süskind </h6>
            </div>

            <br/>
        </div>
    </div>
  );
}

export default FavoriteBooks;
