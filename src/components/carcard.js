import React from "react";
import "./Styles/carcard.css";

export const CarCard = ({ brand, frontpicture, model, engine, price }) => {
  return (
    <div className="car-card">
      <img src={frontpicture} alt={model} />{" "}
      <div className="detail-wrapper">
        <h3>
          {brand} {model}
        </h3>
        <small>Engine: {engine}</small>
        <h4>Price: {price}</h4>
        <button className="details-btn">Details</button>
      </div>
    </div>
  );
};
