import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { IoLocationOutline } from 'react-icons/io5';

// Create a custom icon
const customIcon = new L.Icon({
  iconUrl: <IoLocationOutline />,
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -32], // point from which the popup should open relative to the iconAnchor
});

const MapComponent = () => {
  // Plus Code location for 9WVV+CMV
  const locations = [
    { id: 1, name: "9WVV+CMV, Bahawalpur", lat: 29.3936, lng: 71.6846 },
  ];

  return (
    <MapContainer center={[29.3936, 71.6846]} zoom={15} className="h-96 w-full">
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map(location => (
        <Marker
          key={location.id}
          position={[location.lat, location.lng]}
          icon={customIcon}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;