import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home/home";
import "./App.scss";
import { About } from "./pages/about/about";
import { Process } from "./pages/process/process";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/process">
          <Process />
        </Route>
        <Route exact path="/*">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
