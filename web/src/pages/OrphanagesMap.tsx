import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import api from '../services/api';

/* CSS */
import '../styles/pages/orphanagesMap.css';
/* IMAGES */
import mapMarkerImg from '../images/map-marker.svg';
/* ICONS */
import { FiPlus,FiArrowRight } from 'react-icons/fi';
import mapIcon from '../utils/mapIcon';

interface orphanageType{
  id: number,
  name: string,
  latitude: number,
  longitude: number,
}

function OrphanagesMap() {

  const [orphanages, setOrphanages] = useState<orphanageType[]>([])

  useEffect(() => {
    api.get('/orphanages').then(response=>{
      setOrphanages(response.data)
    }); 
  }, [])


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
      </aside>
      <Map
        center={[-23.4779739,-46.3562793]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        {/*<TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />*/}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
 
        {
          orphanages.map(orphanage=>{
            const {id, latitude, longitude, name} = orphanage
            return (
              <Marker 
              key={id}
              icon={mapIcon}
              position={[latitude, longitude]}
            >          
              <Popup closeButton={false} minWidth={240} maxWidth={248} className={'map-popup'}>
                {name}
    
                <Link to={`/orphanages/${id}`}>
                  <FiArrowRight size={20} color='#fff'/>
                </Link>
              </Popup>
            </Marker>
            )
          })
        }
      </Map>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}
export default OrphanagesMap;
