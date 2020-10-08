import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from "./pages/home/home";
import "./App.scss";
import { About } from "./pages/about/about";
import { Process } from "./pages/process/process";
import { Hvz } from "./pages/hvz/hvz";
import { HellWorld } from "./pages/hell-world/hell-world";
import { ActionBar } from "./components/action-bar/action-bar";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function App() {
  return (
    <div className="root">
      <Router>
        <ActionBar />
        <div className="app-content">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/process">
              <Process />
            </Route>
            <Route path="/hvz">
              <Hvz />
            </Route>
            <Route path="/hellWorld">
              <HellWorld />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
