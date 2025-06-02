import React from 'react';
import { Link } from 'react-router-dom';
import SimpleCarousel from '../components/SimpleCarousel';

/**
 * Page d'informations sur les options de logement
 * @returns {JSX.Element} Page de logement
 */
const Logement: React.FC = () => {
  // Données du carrousel
  const carouselItems = [
    {
      type: 'image' as const,
      content: './images/hotel-exterieur.jpg',
      alt: "Piscine extérieure chauffée de l'Hôtel L'Eterlou",
    },
    {
      type: 'text' as const,
      content:
        "Situé au cœur de la vallée de la Tarentaise, dans la station de ski de Méribel, l'Hôtel Eterlou offre un cadre chaleureux avec accès gratuit à une piscine extérieure, un sauna et un hammam. Toutes les chambres, décorées dans un style savoyard, sont équipées de Wi-Fi gratuit, d'une télévision par satellite et d'une salle de bains privative.",
      description:
        "Certaines disposent également d'un balcon privé. Chaque matin, un petit-déjeuner buffet est servi, et le restaurant propose des plats originaux et régionaux le soir.",
    },
    {
      type: 'image' as const,
      content: './images/chambre_triple_tradition_02.jpg',
      alt: "Chambre de l'Hôtel L'Eterlou",
    },
    {
      type: 'image' as const,
      content: './images/Hotel-LEterlou-Meribel-3-etoiles-1920x1920.jpeg',
      alt: "L'Hôtel L'Eterlou à Méribel",
    },
  ];

  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-white via-[#f8f5e6] to-[#e8e2c7] text-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre principal */}
        <h1 className="text-6xl text-center font-script text-gray-800 mb-6">L'Hôtel L'Eterlou</h1>

        {/* Image principale */}
        <div className="border-[1px] border-blue-200 bg-white rounded-sm overflow-hidden mb-10 p-2">
          <img
            src="./images/Eterlou-Exterieur-noir-et-blanc.png"
            alt="Vue extérieure de l'Hôtel L'Eterlou à Méribel"
            className="w-full h-[682px] max-w-[1300px] mx-auto object-fill object-center grayscale"
            width={1300}
            height={682}
          />
        </div>

        {/* Section hôtel principal avec carrousel */}
        <div className="mb-16">
          <SimpleCarousel
            items={carouselItems}
            className="max-w-5xl mx-auto shadow-md"
            autoPlay={true}
          />
        </div>

        {/* Section des options de chambres */}
        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          {/* Informations chambres */}
          <div className="lg:w-2/3 bg-white p-6 rounded-md shadow-sm">
            <h3 className="text-2xl font-semibold text-center mb-6">
              Hébergements - Mariage de Coralie et Ralph 💒
            </h3>
            <div className="flex items-center justify-center gap-3 mb-6 bg-green-50 p-4 rounded-lg border border-green-200 text-1xl">
              <div className=" text-green-800">
                <p className="font-medium">Établissement dog-friendly! 🐕</p>
                <p className="text-1xl">
                  Les chiens sont les bienvenus. Une caution sera demandée à l'accueil.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b pb-3">
                <h4 className="font-bold">Chambre 1 Personne – 95 € par jour</h4>
                <p>→ Lit simple avec salle de douche</p>
                <p className="text-yellow-600">
                  ⭐ Particularité : Certaines chambres sont en soupente avec Velux. Pas de balcon.
                </p>
              </div>

              <div className="border-b pb-3">
                <h4 className="font-bold">Chambre 2 Personnes – 170 € par jour</h4>
                <p>→ Lit double avec salle de bain ou douche</p>
                <p className="text-yellow-600">
                  ⭐ Options : Possibilité de lits simples sur demande. Certaines chambres sont
                  équipées d'un balcon, d'autres non. À préciser à la réservation.
                </p>
              </div>

              <div className="border-b pb-3">
                <h4 className="font-bold">Chambre 3 Personnes – 160 € par jour</h4>
                <p>
                  → Configuration personnalisable : Idéale pour les familles ou les petits groupes.
                </p>
              </div>

              <div className="border-b pb-3">
                <h4 className="font-bold">Chambre 4 Personnes – 235 € par jour</h4>
                <p>→ 1 chambre avec lit double + coin nuit enfants (2 lits simples)</p>
                <p>→ Salle de bain ou douche, avec balcon</p>
              </div>

              <div className="pb-3">
                <h4 className="font-bold">Chambre 5 Personnes – 300 € par jour</h4>
                <p>→ 2 Configurations au choix:</p>
                <p>→ 1 chambre avec lit double + salle de douche</p>
                <p>→ 1 chambre avec 3 lits simples + salle de douche</p>
                <p className="italic mt-2">
                  Extras : Balcon | Certaines chambres en configuration sous combles sont en
                  soupente.
                </p>
              </div>
            </div>
          </div>

          {/* QR Code et contact */}
          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white p-6 rounded-md shadow-sm">
              <div className="flex flex-col items-center">
                <div className="w-full max-w-[410px] h-[410px] bg-white p-3 mx-auto">
                  <img
                    src="./images/QRCODE-hotel.png"
                    alt="QR Code de l'Hôtel L'Eterlou"
                    className="object-fill"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="font-semibold">Contact : Justine RUFFIER ou Dominique TEXIER</p>
                  <p>Tel : +33 4 79 08 83 09</p>
                  <p>Mail : event@hoteleterlou.com</p>
                  <p>Lien du site web : https://www.hoteleterlou.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bouton retour */}
        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-blue-100 hover:bg-blue-200 text-gray-800 rounded-md transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logement;
