import React from 'react';
import { useParams } from 'react-router-dom';
import logements from "../data.json";

const FichesLogement = () => {
  const { id } = useParams();
  const logement = logements.find(l => l.id === id);

  if (!logement) return <p>Logement non trouvé</p>;

  return (
    <div className="fiche">
      <div className="image">
        <img src={logement.image} alt={logement.title} />
      </div>

      <div className='bloque1'>
        <div className='titre'>
          <h2 className='Titel'>{logement.title}</h2>
          <p>{logement.city}</p>
        </div>

        <div className='nom'>
          {logement.owner.split(" ").map((n, i) => (
            <h4 key={i}>{n}</h4>
          ))}
        </div>
      </div>

      <div className='bloque2'>
        <div className='l1'>
          <p>cozy</p>
          <p>canal</p>
          <p>paris 10</p>
          <p>étoilelogo</p>
        </div>

        <div className='l2'>
          <div className='descrition'>
            <p>{logement.description}</p>
            <p>▲</p>
          </div>

          
        </div>
      </div> 
    </div>
  );
};

export default FichesLogement;
