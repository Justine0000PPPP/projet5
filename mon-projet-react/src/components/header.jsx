import React from "react";
import { NavLink } from "react-router-dom";
import "../pages-css/haeder.css";
import logokasa from "../assets/images/kasa.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logokasa} alt="KASA" className="header__logo-img" />
      </div>

      <nav className="header__nav">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          Accueil
        </NavLink>

        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? "header__link header__link--active" : "header__link"
          }
        >
          À propos
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
