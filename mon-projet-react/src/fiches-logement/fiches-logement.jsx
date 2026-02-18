import { useParams, Navigate } from "react-router-dom";
import logements from "../data/data.json";
import "./fiches-logement.scss";
import Collapse from "../components/colaps/colaps";
import Carousel from "../components/caroucelle/caroucelle";

const FichesLogement = () => {
  const { id } = useParams();
  const logement = logements.find((l) => l.id === id);

  if (!logement) {
    return <Navigate to="/page404" />;
  }

  const rating = parseInt(logement.rating);
  const stars = [1, 2, 3, 4, 5];

return (
  <div className="fiche">
    <div className="image">
      <Carousel pictures={logement.pictures} />
    </div>

    <div className="bloc general">
    <div className="bloque1">
      <div className="titre">
        <h2 className="Titel">{logement.title}</h2>
        <p>{logement.location}</p>
      </div>
          <div className="tag">
        {logement.tags.map((tag, i) => (
          <p key={i}>{tag}</p>
        ))}
      </div>
        </div>

        <div className="bloque2">
      <div className="hote">
        <div className="nomimg">
          <div>
            <h4>{logement.host.name.split(" ")[0]}</h4>
            <h4>{logement.host.name.split(" ")[1]}</h4>
          </div>
          <img
            src={logement.host.picture}
            alt={logement.host.name}
          />
        </div>
      </div>
    
      <div className="rating">
        {stars.map((star) => (
          <span
            key={star}
            className={star <= rating ? "star active" : "star"}
          >
            ★
          </span>
        ))}
      </div>
      <div>
    </div>
    </div>
    </div>

    {/* Collapses */}
    <div className="bloque2">
      <div className="collapses-logement">
        <Collapse title="Description">
          <p>{logement.description}</p>
        </Collapse>

        <Collapse title="Équipements">
          <ul>
            {logement.equipments.map((equipement, i) => (
              <li key={i}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  </div>
);
};

export default FichesLogement;
