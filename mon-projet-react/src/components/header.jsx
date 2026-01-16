import React from "react";
import { Link } from "react-router-dom";
import "../pages-css/haeder.css";  
import logokasa from "../assets/images/kasa.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        {/* Remplacement du texte par l'image */}
        <img src={logokasa} alt="KASA" className="header__logo-img" />
      </div>

      <nav className="header__nav">
        <Link to="/" className="header__link">
          Accueil
        </Link>
        <Link to="/apropos" className="header__link">
          À propos
        </Link>
      </nav>
    </header>
  );
};

export default Header