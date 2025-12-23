import React from 'react';
import banner from "../assets/images/banner.jpg";
import Equipements from "../components/Equipements";

const Fiches_logement = () => {
  return (
    <div className="fiche">

      <div className="image">
        <img src={banner} alt="Paysage" />
        
      </div>
      <div className='bloque1'>
      <div className='titre'>
        <h2 className='Titel'>Cozy²</h2>
        <p>Paris</p>
      </div>
      <div className='nom'>
        <h4>Alexendre</h4>
        <h4>dumas</h4>
        <img src={rondgris} alt="Paysage" />
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
        <p>description </p>
        <p>▲</p>
      </div>
      <Equipements
      title="équipements"
     content="climatisation, wifi, cuisine, espace de travail, sèche-cheveux, cintres"
      />
          </div>
        </div> 
      </div>
  );
};

export default Fiches_logement;