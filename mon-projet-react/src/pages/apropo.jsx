import logo from "../assets/images/logo.png";
import Collapse from "../components/Collapse";

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
        title="Efficacité"
        content="Texte de test pour l’efficacité."
      />

      {/* Bloc 2 */}
      <Collapse
        title="Durabilité"
        content="Texte de test pour la durabilité."
      />

      {/* Bloc 3 */}
      <Collapse
        title="Contact"
        content="Vous pouvez nous contacter à tout moment pour plus d’informations."
      />

    </div>
  );
};

export default Apropo;