import React from "react";
import { Link } from "react-router-dom";
import "./haeder.css";  

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <p>KASA</p>
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

export default Header;
