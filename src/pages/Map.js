import React from 'react';
import { useNavigate } from 'react-router-dom';
import GoogleMapReact from 'google-map-react';

import slugify from 'slugify';
import cities from '../cities_of_turkey.json';
import Marker from '../components/Marker';
import Container from '../components/Container';

function Map() {
  const navigate = useNavigate();
  const defaultProps = {
    center: {
      lat: 38.9637,
      lng: 35.2433,
    },
    zoom: 6,
  };

  return (
    <Container fluid>
      <div className="aspect-video">
        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {cities.map(({ id, name, latitude, longitude }) => (
            <Marker
              key={id}
              lat={Number(latitude)}
              lng={Number(longitude)}
              onClick={() => navigate(`/city/${slugify(name.toLowerCase())}`)}
            >
              <p className="text-sm">{name}</p>
            </Marker>
          ))}
        </GoogleMapReact>
      </div>
    </Container>
  );
}

export default Map;
