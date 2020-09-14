import React from "react";
import "./card-grid.scss";

export const CardGrid: React.FC = () => {
  return (
    <div className="card-grid">
      <div className="card">
        <a className="card-image">
          <img src="https://via.placeholder.com/150" />
        </a>
        <div className="card-content">
          <h3>Title Title Title</h3>
          <p>
            I partnered with three project managers and one other lead designer
            to uncover insights and translate concepts into features that
            address customer behaviours and motivations.
          </p>
          <a>Read more {">>"}</a>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://via.placeholder.com/150" />
        </div>
        <div className="card-content">
          <h3>Title</h3>
          <p>Lorem ipsum</p>
          <a>Read more {">>"}</a>
        </div>
      </div>
      <div className="card">
        <div className="card-image">
          <img src="https://via.placeholder.com/150" />
        </div>
        <div className="card-content">
          <h3>Title</h3>
          <p>Lorem ipsum</p>
          <a>Read more {">>"}</a>
        </div>
      </div>
    </div>
  );
};
