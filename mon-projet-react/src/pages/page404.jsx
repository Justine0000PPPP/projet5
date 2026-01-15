import React from "react";
import { Link } from "react-router-dom";
import "../pages-css/p404.css";

function Page404() {
  return (
    <main className="page404">
      <h1 className="page404-title">404</h1>
      <p className="page404-text">
        Oups ! La page que vous demandez n’existe pas.
      </p>

      <Link to="/" className="link-home">
        Aller à l’accueil
      </Link>
    </main>
  );
};

export default Page404;
