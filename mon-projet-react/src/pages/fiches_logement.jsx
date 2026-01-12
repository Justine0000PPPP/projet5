import { useParams, Navigate } from "react-router-dom";
import logements from "../data.json";
import "../pages-css/fiches_logement.css";

const FichesLogement = () => {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  // Sécurité : si le logement n'existe pas
  if (!logement) {
    return <Navigate to="/page404" />;
  }

  // Rating
  const rating = parseInt(logement.rating);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="fiche">
      {/* Image principale */}
      <div className="image">
        <img src={logement.cover} alt={logement.title} />
        <div className="image-overlay"></div>
      </div>

      {/* Bloc titre + localisation + host */}
      <div className="bloque1">
        <div className="titre">
          <h2 className="Titel">{logement.title}</h2>
          <p>{logement.location}</p>
        </div>

        <div className="nom">
          <h4>{logement.host.name.split(" ")[0]}</h4>
          <h4>{logement.host.name.split(" ")[1]}</h4>

          <img
            src={logement.host.picture}
            alt={logement.host.name}
          />

          {/* ÉTOILES SOUS LE NOM ET LA PHOTO */}
          <div className="rating">
            {stars.map((star) => (
              <span
                key={star}
                style={{
                  color: star <= rating ? "orange" : "lightgray",
                  fontSize: "20px",
                  marginRight: "3px",
                }}
              >
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tags + description */}
      <div className="bloque2">
        <div className="l1">
          {logement.tags.map((tag, i) => (
            <p key={i}>{tag}</p>
          ))}
        </div>

        <div className="collapse-content">
          <h3>Description</h3>
          <p>{logement.description}</p>
        </div>
      </div>
    </div>
  );
};

export default FichesLogement;