import React from "react";
import vintedlogo from "../img/vinted-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="top-bar">
        <div className="logo">
          <img src={vintedlogo} alt="" />
        </div>
        <div className="search">
          <input type="text" placeholder="Rechercher des articles" />
        </div>
        <div className="actions">
          <button className="secondary-button">Se connecter</button>
          <button className="secondary-button">S'inscrire</button>
          <button className="primary-button">Vends tes articles</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
