import React from "react";

function offer() {
  return (
    <div className="offer-container">
      <div className="product-author">
          <img src={.image} alt="" />
          <span>{.name}</span>
      </div>
      <div className="product-image">
          <img src="" alt="" />
      </div>
      <div className="product-description">
          <span className="product-price">{.price}</span>
          <div className="product-infos"></div>
      </div>
    </div>
  );
}

export default offer;
