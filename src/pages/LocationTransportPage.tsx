import React, { useRef, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Seo from '../components/SEO';
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

interface MapLocation {
  id: string;
  title: string;
  text?: string[];
  mapOptions: {
    center: google.maps.LatLngLiteral;
    zoom: number;
  };
}

// Coordonnées approximatives - À remplacer par les coordonnées exactes
const locations: MapLocation[] = [
  {
    id: 'train',
    title: 'Pour vous rendre en train :',
    text: [
      'Gare terminale Moutiers Salins Brides les Bains.',
      '--> Nous viendrons vous récupérer en voiture.',
      "Merci de nous communiquer votre horaire d'arrivée.",
    ],
    mapOptions: {
      center: { lat: 45.48660636953937, lng: 6.5314979085991 }, // Approx. Moutiers
      zoom: 15,
    },
  },
  {
    id: 'plane',
    title: 'Pour vous rendre en avion :',
    text: [
      "Vous pouvez arriver par l'aéroport de Lyon ou Genève (pas de vol de Chambery).",
      'Puis prendre le train pour Moutiers Salins Brides les Bains.',
      'Nous viendrons vous récupérer en voiture.',
    ],
    mapOptions: {
      center: { lat: 45.72434145732518, lng: 5.0895935338018345 }, // Approx. Aéroport Lyon St Exupéry
      zoom: 12,
    },
  },
  {
    id: 'hotel',
    title: "Hotel l'Eterlou",
    text: [
      "L'hotel dans lequel nous allons fêter notre mariage",
      'Pour réserver merci de vous rendre sur la Page Logement',
    ],
    mapOptions: {
      center: { lat: 45.39423832050754, lng: 6.566548178104319 }, // Approx. Méribel Centre (pour l'Eterlou)
      zoom: 18,
    },
  },
  {
    id: 'church',
    title: "L'église St Martin des Allues",
    text: [
      "L'église dans laquelle nous allons célébrer notre mariage",
      'Référez vous a la page du planning pour les horaires de célébration',
    ],
    mapOptions: {
      center: { lat: 45.43150460498419, lng: 6.556745676753012 }, // Approx. Les Allues
      zoom: 18,
    },
  },
];

const mapContainerStyle = {
  width: '100%',
  height: '250px', // h-64 approx
};

const LocationTransportPage: React.FC = () => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: API_KEY || '', // Pass API_KEY, or empty string if undefined
  });

  const mapRef = useRef<google.maps.Map | null>(null);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
    setTimeout(() => {
      if (mapRef.current) {
        google.maps.event.trigger(mapRef.current, 'resize');
      }
    }, 100);
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  if (!API_KEY) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl text-red-500">Erreur: La clé API Google Maps n'est pas configurée.</p>
      </div>
    );
  }

  if (loadError) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl text-red-500">
          Erreur lors du chargement de Google Maps: {loadError.message}
        </p>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl">Chargement des cartes...</p>
      </div>
    );
  }

  return (
    <>
      <Seo
        title="Transport et Localisation - Mariage de Coralie et Ralph"
        description="Informations pratiques pour vous rendre à notre mariage : transport en train, avion, et localisation de l'hôtel et de l'église à Méribel."
      />
      <div className="container mx-auto min-h-screen bg-gray-100 p-4 font-sans md:p-8 pb-24">
        <header className="mb-12 text-center">
          <h1 className="font-playfair text-4xl text-gray-800 md:text-6xl">
            Localisation et Transport
          </h1>
        </header>

        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
          {locations.map((loc) => (
            <div key={loc.id} className="rounded-lg bg-white p-6 shadow-lg">
              <h2 className="mb-4 font-playfair text-2xl text-gray-700">{loc.title}</h2>
              {loc.text?.map((paragraph, index) => (
                <p key={index} className="mb-2 text-gray-600">
                  {paragraph}
                </p>
              ))}
              <div
                className="filter-none mt-4 overflow-hidden rounded"
                style={{ height: mapContainerStyle.height, width: mapContainerStyle.width }}
              >
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={loc.mapOptions.center}
                  zoom={loc.mapOptions.zoom}
                  onLoad={onLoad}
                  onUnmount={onUnmount}
                  options={
                    {
                      // Options to potentially force rerender or avoid issues, can be experimented with
                      // disableDefaultUI: true, // Example: if controls were an issue
                      // gestureHandling: 'greedy' // Example for mobile interaction
                    }
                  }
                ></GoogleMap>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LocationTransportPage;
