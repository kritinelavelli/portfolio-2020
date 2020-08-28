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
import { ActionBar } from "./components/action-bar/action-bar";

function App() {
  return (
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
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
