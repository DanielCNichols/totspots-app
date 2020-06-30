import React, { useState, useEffect, useContext } from 'react';
import { GoogleMap, Marker, InfoWindow } from '@react-google-maps/api';
import VenueContext from '../VenuesContext';

const MapContainer = props => {
  const [selected, setSelected] = useState({});
  const context = useContext(VenueContext);

  const onSelect = item => {
    console.log(item);
    setSelected(item);
  };

  // const [currPosition, setCurrentPosition] = useState({
  //   lat: +null,
  //   lng: +null,
  // })

  const mapStyles = {
    height: '500px',
    width: '100%',
    margin: '0 auto',
  };

  console.log('this is the props', props);
  const defaultCenter = {
    lat: parseFloat(props.query.lat),
    lng: parseFloat(props.query.lng),
  };

  console.log('this is the center', defaultCenter);
  return (
    <GoogleMap mapContainerStyle={mapStyles} zoom={13} center={defaultCenter}>
      {context.venues.map(r => {
        return (
          <Marker
            key={r.id}
            position={r.geometry.location}
            onClick={() => onSelect(r)}
          />
        );
      })}
      {selected.name && (
        <InfoWindow
          position={selected.geometry.location}
          clickable={true}
          onCloseClick={() => setSelected({})}
        >
          <>
            <p>{selected.name}</p>
            <p>
              {selected.opening_hours ? <span>Open</span> : <span>Closed</span>}
            </p>
            <p>{selected.vicinity}</p>
          </>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default MapContainer;
