import React from "react";
import "./card.css";

type CardProps = {
  image: string;
  name: string;
  position: string;
};
export const Card: React.FC<CardProps> = ({ image, name, position }) => {
  return (
    <>
      <div className="member-card">
        <img src={image} alt="" className="photo" />
        <div className="member-container">
          <h3>{name}</h3>
          <p>{position}</p>
        </div>
      </div>
    </>
  );
};
