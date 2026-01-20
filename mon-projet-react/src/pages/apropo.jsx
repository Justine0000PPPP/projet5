import logo from "../assets/images/source2.jpg";
import Collapse from "../components/collapse";
import dataApropo from "../data/dataapropo.json";
import "../pages-css/apropo.css";

const Apropo = () => { 
  return (
    <div className="apropo">


      <div className="img">
        <img
          src={logo}
          alt="image apropos"
          className="imgapropo"
        />
      </div>


      <div className="collapse-container">
       {dataApropo.map((item) => (
  <Collapse key={item.id} title={item.title}>
    <p>{item.content}</p>
  </Collapse>
))}
      </div>

    </div>
  );
};

export default Apropo;
