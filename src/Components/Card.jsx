import React from "react";
import "./Card.css"; // Create this CSS file for styles

function Card({ image, description, title }) {
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-image">{image}</div>
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
