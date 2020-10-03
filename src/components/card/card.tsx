import React from "react";
import "./card.scss";

export const Card: React.FC<any> = (props: any) => {
  return (
    <div className="card">
      <a className="card-image">
        <img src={props.imageSrc} />
      </a>
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <a>Read more {">>"}</a>
      </div>
    </div>
  );
};
