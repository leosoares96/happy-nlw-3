import React from 'react';
import { Link } from 'react-router-dom';

/* CSS */
import '../styles/pages/orphanagesMap.css';

/* IMAGES */
import mapMarkerImg from '../images/map-marker.svg';

/* ICONS */
import { FiPlus } from 'react-icons/fi';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Itaquaquecetuba</strong>
          <span>São Paulo</span>
        </footer>

        <div></div>

        <Link to="" className="create-orphanage">
          <FiPlus size={32} color="#fff" />
        </Link>
      </aside>
    </div>
  );
}
export default OrphanagesMap;
