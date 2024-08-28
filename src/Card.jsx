import React from "react";
import img1 from "./assets/images/pattern-divider-desktop.svg"
import img2 from "./assets/images/icon-dice.svg"
import "./Card.css";
const Card = ({ advice, adviceId, handleClick, isButtonDisabled }) => {
  return (
    <>
      <div className="container">
        <div className="card  animate__animated animate__fadeIn">
          <div className="content">
            <p>ADVICE #{adviceId}</p>
            <h5> {advice} </h5>
            <div className="border">
              <img src={img1} alt="border" />
            </div>
            <div className="button">
              <button  onClick={handleClick} disabled={isButtonDisabled}> <img src={img2} alt="button" /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
