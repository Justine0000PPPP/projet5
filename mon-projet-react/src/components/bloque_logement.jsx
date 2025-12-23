import { Link } from "react-router-dom";

const Bloque_logement = ({ title, image }) => {
  return (
    <Link to="/fiche" className="caré">
      <h3 className="titre">{title}</h3>

      <div className="img">
        <img
          src={image}
          alt={title}
          className="imgcaré"
        />
      </div>
    </Link>
  );
};

export default Bloque_logement;
