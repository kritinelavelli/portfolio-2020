import React from "react";
import { CardGrid } from "../../components/card-grid/card-grid";
import "./home.scss";
import hero from "../../assets/hero.png";

export const Home: React.FC = () => (
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
            Learn more about <a>My prototyping process {">>"}</a>
          </p>
        </div>
      </div>
      <div className="home-intro-project">
        <img src={hero} />
        {/* <a>
          <img src={hero} />
        </a> */}
        {/* <div className="home-intro-project-text">
          <h5> Adaptive App Design</h5>
          <p>
            HCI graduate thesis Identifying and designing for device handedness.
          </p>
          <a>Read more {">>"}</a>
        </div> */}
      </div>
    </div>
    <div className="home-project-list"></div>
    <CardGrid />
  </div>
);
