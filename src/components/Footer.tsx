import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white py-4 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-6">
            <Link
              to="/"
              className="hover:text-pink-300 transition-colors duration-200 text-xs md:text-sm"
            >
              ← Retour à l'accueil
            </Link>
            <Link
              to="/formulaire"
              className="hover:text-pink-300 transition-colors duration-200 text-xs md:text-sm"
            >
              RSVP - Confirmez votre présence
            </Link>
            <Link
              to="/politique-confidentialite"
              className="hover:text-pink-300 transition-colors duration-200 text-xs md:text-sm"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/mentions-legales"
              className="hover:text-pink-300 transition-colors duration-200 text-xs md:text-sm"
            >
              Mentions légales
            </Link>
          </div>
          <div className="text-center md:text-right text-xs text-gray-400">
            <p>© 2025 Mariage de Coralie et Ralph</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
