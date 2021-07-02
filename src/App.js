import "./App.css";
import React from "react";
import { useEffect, useState } from "react";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Documentation from "./components/Documentation";
import Landings from "./components/Landings";
import Pages from "./components/Pages";
import Account from "./components/Account";
function App(props) {
  const [width, setWidth] = React.useState(window.innerWidth);

  const [isMobile, setMobile] = React.useState(width <= 768);

  window.addEventListener("resize", function (event) {
    setWidth(window.innerWidth);

    setMobile(window.innerWidth <= 768);
  });
  return (
    <div className="App">
      {" "}
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} isMobile={isMobile} />
          <Route
            exect
            path="/Documentation"
            component={Documentation}
            isMobile={isMobile}
          />
          <Route
            exect
            path="/account"
            component={Account}
            isMobile={isMobile}
          />
          <Route exect path="/pages" component={Pages} isMobile={isMobile} />
          <Route
            exect
            path="/landings"
            component={Landings}
            isMobile={isMobile}
          />
        </Switch>{" "}
      </BrowserRouter>
    </div>
  );
}

export default App;
