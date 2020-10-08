import React from "react";
import { Card } from "../card/card";
import "./card-grid.scss";
import kiosk480 from "../../assets/kiosk480.png";
import nalinMixamo from "../../assets/nalinMixamo.png";

export const CardGrid: React.FC = () => {
  return (
    <div id="projects" className="card-grid">
      <Card
        imageSrc={kiosk480}
        title="Humans vs Zombies"
        link="/hvz"
        description="A user centered design approach to increasing immersion and
            improving player experience in mass spatial gaming."
      />
      <Card
        imageSrc={nalinMixamo}
        title="Hellworld"
        link="/hellWorld"
        description="Designing and developing the characters, environments and game mechanics of a survival horror Unity3D video game inspired by Slender: The Eight Pages."
      />
      <Card
        imageSrc="https://via.placeholder.com/1500x750"
        title="Title Title Title"
        link="/hvz"
        description="I partnered with three project managers and one other lead designer
            to uncover insights and translate concepts into features that
            address customer behaviours and motivations."
      />
    </div>
  );
};
