  import { useParams, Navigate } from "react-router-dom";
  import logements from "../data.json";
  import "../pages-css/fiches_logement.css";
  import Collapse from "../components/collapse";
  import Carousel from "../components/caroucelle";

  const FichesLogement = () => {
    const { id } = useParams();
    const logement = logements.find((l) => l.id === id);


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
    <Carousel pictures={logement.pictures} />
  </div>

        {/* Bloc titre + localisation + host */}
        <div className="bloque1">
          <div className="titre">
            <h2 className="Titel">{logement.title}</h2>
            <p>{logement.location}</p>
          </div>

          <div className="hote">
            <div className="nomimg">
            <h4>{logement.host.name.split(" ")[0]}</h4>
            <h4>{logement.host.name.split(" ")[1]}</h4>
            <img src={logement.host.picture} alt={logement.host.name} />
            </div>
       
          </div>
        </div>

        {/* Tags + collapses */}
        <div className="bloque2">
          <div className="rendetoils">
          {/* Tags */}
          <div className="l1">
            {logement.tags.map((tag, i) => (
              <p key={i}>{tag}</p>
            ))}
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
            </div>

          {/* Collapses avec classes spécifiques */}
          <div className="collapses-logement">
            <Collapse title="Description" className="collapse-description">
              <p>{logement.description}</p>
            </Collapse>

            <Collapse title="Équipements" className="collapse-equipements">
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
