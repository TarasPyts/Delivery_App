import React, { useState, useEffect, useRef } from 'react';
import './PersonDetails.css';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
} from '@react-google-maps/api';

const center = { lat: 49.8111, lng: 24.0099 };
const initialAddress = 'Yaneva Street, 29, Lviv, Lviv Oblast, 79000';

const PersonDetails = ({
  setName,
  setEmail,
  setPhone,
  address,
  setAddress,
}) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries: ['places'],
  });

  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedLocation, setSelectedLocation] = useState(null);

  const destinationRef = useRef();
  const mapRef = useRef();

  if (!isLoaded) {
    return <p>Not loaded</p>;
  }

  async function calculateRoute() {
    if (destinationRef.current.value === '') {
      return;
    }

    setDirectionsResponse(null);

    const directionsService = new window.google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: destinationRef.current.value,
      destination: initialAddress,
      travelMode: window.google.maps.TravelMode.DRIVING,
    });

    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
    setAddress(destinationRef.current.value);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    destinationRef.current.value = '';
  }

  function handleMapClick(event) {
    const { latLng } = event;
    setSelectedLocation({
      lat: latLng.lat(),
      lng: latLng.lng(),
    });

    const destination = `${latLng.lat()}, ${latLng.lng()}`;
    destinationRef.current.value = destination;

    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setSelectedLocation(null);
    calculateRoute();
  }

  return (
    <div className="person-container">
      <GoogleMap
        center={center}
        zoom={15}
        mapContainerStyle={{ width: '100%', height: '60%' }}
        onLoad={(map) => {
          setMap(map);
          mapRef.current = map;
        }}
        onClick={handleMapClick}
      >
        {selectedLocation && <Marker position={selectedLocation} />}
        {directionsResponse && (
          <DirectionsRenderer directions={directionsResponse} />
        )}
      </GoogleMap>
      <Autocomplete>
        <input
          type="text"
          placeholder="Destination"
          ref={destinationRef}
        ></input>
      </Autocomplete>
      <p>{distance}</p>
      <p>{duration}</p>
      <button onClick={() => mapRef.current.panTo(center)}>1 button</button>
      <button type="submit" onClick={calculateRoute}>
        2 button
      </button>
      <button onClick={clearRoute}>2 button</button>

      <div className="section">
        <p>Name</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="section">
        <p>Email</p>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="section">
        <p>Phone</p>
        <input type="text" onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div className="section">
        <p>Address</p>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </div>
  );
};

export default PersonDetails;
