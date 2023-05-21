import React from "react";
import "./Title.css";
import { BsFlower2 } from "react-icons/bs";
type TitleProps = {
  text: string;
};

export const Title: React.FC<TitleProps> = ({ text }) => {
  return (
    <>
      <div className="title-content">
        <div className="Title">{text}</div>
        <div className="decoration">
          <div className="line"></div>
          <div className="flower">
            <BsFlower2 />
          </div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};
