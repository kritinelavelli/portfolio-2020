import React from "react";
import "./hell-world.scss";
import croppedKiosk from "../../assets/croppedKiosk.png";
import { Link } from "react-router-dom";

export const HellWorld: React.FC = () => (
  <div className="home">
    <div className="home-hero">
      <div className="home-intro">
        <div className="home-intro-text">
          <h1>
            <span className="home-design">Design </span>
            <span className="home-plus">+</span> Build
          </h1>
          <p>
            I’m Kriti Nelavelli and I bring pixels to life. I’m a designer but
            code is my artboard. I currently work as a User Experience Engineer
            at Google.
          </p>
          <hr />
          <p className="text-heading-6">As a UXE...</p>
          <p>
            I ideate and design experiences and iterate through live, functional
            prototypes. I work with researchers to conduct studies and validate
            concepts.
          </p>
          <p>
            Learn more about{" "}
            <Link to="/process">My prototyping process {">>"}</Link>
          </p>
        </div>
      </div>
      <div className="home-intro-project">
        <img src={croppedKiosk} />
      </div>
    </div>
  </div>
);
