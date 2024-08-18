import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import "./Map.css"; // You can add your styles here

const containerStyle = {
  width: "100%",
  height: "400px", // Adjust height as needed
};

// Default center if no universities are available
const defaultCenter = {
  lat: -3.745, // Default latitudelng: -38.523, // Default longitude
};

// Your Google Maps API Key
const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY; // Ensure this is correctly set
const Map = ({ universities }) => {
  // Determine the center based on universities or use default
  const center =
    universities.length > 0
      ? {
          lat: parseFloat(universities[0].latitude) || defaultCenter.lat,
          lng: parseFloat(universities[0].longitude) || defaultCenter.lng,
        }
      : defaultCenter;

  // Ensure center coordinates are valid numbers
  if (isNaN(center.lat) || isNaN(center.lng)) {
    return (
      <div>Error: Invalid center coordinates. Check console for details.</div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {universities.map((university, index) => {
          const lat = parseFloat(university.latitude);
          const lng = parseFloat(university.longitude);

          // Only render marker if lat and lng are valid numbers
          if (!isNaN(lat) && !isNaN(lng)) {
            return <Marker key={index} position={{ lat, lng }} />;
          }

          return null; // Return nothing if lat/lng are invalid
        })}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
