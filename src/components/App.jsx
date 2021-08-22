import React, { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import "../App.css";

import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Resume" component={Resume}/>
        <Route exact path="/About" component={About}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
