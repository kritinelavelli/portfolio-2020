import React from "react";
import "./card.scss";
import { HashLink as Link } from "react-router-hash-link";

export const Card: React.FC<any> = (props: any) => {
  return (
    <div className="card">
      <Link className="card-image" smooth to={props.link}>
        <img src={props.imageSrc} />
      </Link>
      <div className="card-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <Link smooth to={props.link}>
          Read more {">>"}
        </Link>
      </div>
    </div>
  );
};
