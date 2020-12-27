import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import MapperPin from './MapperPin';

const Container = styled.div`
  height: calc(100vh - 50px);
  flex-grow: 1;
`;

function Mapper({dogs}) {
  return (
    <Container>
      <GoogleMapReact
        bootstrapURLKeys={{key: process.env.REACT_APP_MAP_APIKEY}}
        defaultCenter={{lat: 37.4819, lng: -122.2365}}
        defaultZoom={12}
      >
        {dogs.map(({ id, url, petname, lat, lon }) => {
          return (
            <MapperPin
              key={id}
              lat={lat}
              lng={lon}
            />
          );
        })}
      </GoogleMapReact>
    </Container>
  );
}


export default Mapper;

