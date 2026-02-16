  import logements from "../data/data.json";
  import Bloque_logement from "../components/bloque_logement";
  import banner from "../assets/images/source1.jpg";
  import "./home.scss";

  const Home = () => {
    return (
      <div className="home">


        <div className="banner">
          <img src={banner} alt="Paysage" />
          <p className="banner-text">
            Chez vous,{"\n"}partout et ailleurs
          </p>
        </div>

        <div className="cards-container">
          {logements.map(logement => (
            <Bloque_logement
              key={logement.id}
              id={logement.id}
              title={logement.title}
              image={logement.cover}
            />
          ))}
        </div>

      </div>
    );
  };

  export default Home;