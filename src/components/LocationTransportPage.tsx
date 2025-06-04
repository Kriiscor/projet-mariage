import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// console.log('Contenu de process.env accessible:', JSON.stringify(process.env));
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

interface MapLocation {
  id: string;
  title: string;
  text?: string[];
  mapOptions: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  };
  markerPosition: google.maps.LatLngLiteral;
}

// Coordonnées approximatives - À remplacer par les coordonnées exactes
const locations: MapLocation[] = [
  {
    id: 'train',
    title: 'Pour vous rendre en train :',
    text: [
      'Gare terminale Moutiers Salins Brides les Bains.',
      "--> Nous viendrons vous récupérer en voiture. Merci de nous communiquer votre horaire d'arrivée.",
    ],
    mapOptions: {
      center: { lat: 45.486, lng: 6.533 }, // Approx. Moutiers
      zoom: 14,
    },
    markerPosition: { lat: 45.486, lng: 6.533 }, // Approx. Moutiers
  },
  {
    id: 'plane',
    title: 'Pour vous rendre en avion :',
    text: ["Vous pouvez arriver par l'aéroport de Lyon ou Genève (pas de vol de Chambery)."],
    mapOptions: {
      center: { lat: 45.725, lng: 5.08 }, // Approx. Aéroport Lyon St Exupéry (Lyon/Genève mentionné, image montre Chambery)
      // Alternative: Chambery Airport: { lat: 45.638, lng: 5.880 }
      zoom: 12,
    },
    markerPosition: { lat: 45.725, lng: 5.08 }, // Approx. Aéroport Lyon St Exupéry
  },
  {
    id: 'hotel',
    title: "Hotel l'Eterlou",
    mapOptions: {
      center: { lat: 45.397, lng: 6.568 }, // Approx. Méribel Centre (pour l'Eterlou)
      zoom: 15,
    },
    markerPosition: { lat: 45.397, lng: 6.568 }, // Approx. Méribel Centre
  },
  {
    id: 'church',
    title: "L'église St Martin des Allues",
    mapOptions: {
      center: { lat: 45.447, lng: 6.567 }, // Approx. Les Allues
      zoom: 15,
    },
    markerPosition: { lat: 45.447, lng: 6.567 }, // Approx. Les Allues
  },
];

const mapContainerStyle = {
  width: '100%',
  height: '250px', // h-64 approx
};

const LocationTransportPage: React.FC = () => {
  if (!API_KEY) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl text-red-500">Erreur: La clé API Google Maps n'est pas configurée.</p>
      </div>
    );
  }

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <div className="container mx-auto min-h-screen bg-gray-100 p-4 font-sans md:p-8">
        <header className="mb-12 text-center">
          <h1 className="font-playfair text-4xl text-gray-800 md:text-6xl">
            Localisation et Transport
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.id} className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 font-playfair text-2xl text-gray-700">{loc.title}</h2>
              {loc.text &&
                loc.text.map((paragraph, index) => (
                  <p key={index} className="mb-2 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              <div className="mt-4 overflow-hidden rounded">
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={loc.mapOptions.center}
                  zoom={loc.mapOptions.zoom}
                >
                  <Marker position={loc.markerPosition} />
                </GoogleMap>
              </div>
            </div>
          ))}
        </div>
      </div>
    </LoadScript>
  );
};

export default LocationTransportPage;
