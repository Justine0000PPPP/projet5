import { Link } from "react-router-dom";

const Bloque_logement = ({ id, title, image }) => {
  return (
    <Link to={`/logement/${id}`} className="caré">
      <h3 className="titre">{title}</h3>
      <div className="img">
        <img src={image} alt={title} className="imgcaré" />
      </div>
    </Link>
  );
};

export default Bloque_logement;
