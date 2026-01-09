import logo from "../assets/images/source2.jpg";
import Collapse from "../components/collapse";
import "../pages-css/apropo.css";

const Apropo = () => {
  return (
    <div className="apropo">

      {/* Image du haut */}
      <div className="img">
        <img
          src={logo}
          alt="image apropos"
          className="imgapropo"
        />
      </div>

        {/* Bloc 1 */}
        <Collapse
          title="Fiabilité"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et 
        toutes les informations sont régulièrement vérifiées par nos équipes."
        />

        {/* Bloc 2 */}
        <Collapse
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de 
        perturbation du voisinage entraînera une exclusion de notre plateforme."
        />

        {/* Bloc 3 */}
        <Collapse
          title="Service"
          content="La qualité du service est au cœur de notre engagement chez Kasa. Nous faisons en sorte que chaque interaction,
        que ce soit avec nos hôtels ou nos locataires, soit emplie de respect et de bienveillance."
        />

        {/* Bloc 4 */}
        <Collapse
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement 
        correspond aux critères de sécurité établis par nos services. En laissant une note, aussi bien à l'hôtel qu'au
        locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
        des ateliers sur la sécurité domestique pour nos hôtes."
        />
    </div>
  );
};

export default Apropo;