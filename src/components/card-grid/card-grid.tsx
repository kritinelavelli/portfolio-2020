import React from "react";
import { Card } from "../card/card";
import "./card-grid.scss";

export const CardGrid: React.FC = () => {
  return (
    <div className="card-grid">
      <Card
        imageSrc="https://via.placeholder.com/1500x750"
        title="Title Title Title"
        description="I partnered with three project managers and one other lead designer
            to uncover insights and translate concepts into features that
            address customer behaviours and motivations."
      />
      <Card
        imageSrc="https://via.placeholder.com/750x1550"
        title="Title Title Title"
        description="I partnered with three project managers and one other lead designer
            to uncover insights and translate concepts into features that
            address customer behaviours and motivations."
      />
      <Card
        imageSrc="https://via.placeholder.com/1500x750"
        title="Title Title Title"
        description="I partnered with three project managers and one other lead designer
            to uncover insights and translate concepts into features that
            address customer behaviours and motivations."
      />
    </div>
  );
};
