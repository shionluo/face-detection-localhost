import React from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Particles from "react-particles-js";

//-- Components --//
import Home from "./components/Home/Home";
import Signin from "./components/Sign-In/Sign-In";
import Register from "./components/Register/Register";

//-- Styles --//
import "./App.css";

//-------------------------------------------------------------//
//-------------------------------------------------------------//

const particlesOption = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

const App = () => (
  <BrowserRouter>
    <div>
      <Particles className="particle" params={particlesOption} />
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
