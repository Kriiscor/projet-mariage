import React, { useState, useEffect, useRef } from 'react';
import '../styles/Navigation.styles.css';
interface NavigationProps {
  className?: string;
  isDarkMode?: boolean;
}

/**
 * Composant de navigation principal
 * @param {NavigationProps} props - Les props du composant
 * @returns {JSX.Element} Le composant de navigation
 */
const Navigation: React.FC<NavigationProps> = ({ className = '', isDarkMode = false }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // On utilise un état local pour déterminer si on est sur la page d'accueil
  // En production, cela serait déterminé par l'URL actuelle
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '';

  // Appliquer automatiquement le mode sombre sur toutes les pages sauf la page d'accueil
  const useDarkMode = isDarkMode || !isHomePage;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Fermer le menu quand on clique en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 ${
          useDarkMode ? 'bg-[#1A1F2A]' : 'bg-[rgba(33,37,41,0.15)]'
        } backdrop-blur-[5px] px-8 py-4 flex items-center z-50 h-20 ${className}`}
      >
        {/* Logo Container */}
        <a href="/" className="flex items-center mr-8 no-underline">
          <img
            src="/tryt-01.svg"
            alt="Logo Coralie and Ralph"
            className="h-[60px] w-auto brightness-0 invert"
          />
        </a>

        {/* Navigation Links */}
        {/*<div className="hidden md:flex gap-8 items-center">
          <a
            href="/bio"
            className="text-white no-underline text-lg relative pb-0.5 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 disabled  "
          >
            Les Mariés
          </a>
          <a
            href="/programme"
            className="text-white no-underline text-lg relative pb-0.5 after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 disabled"
          >
            Programme
          </a>
        </div>*/}

        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="bg-transparent border-none text-white text-3xl cursor-pointer p-2 ml-auto w-[50px] h-[50px] flex items-center justify-center"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          ☰
        </button>
      </nav>

      {/* Overlay and Side Menu - only rendered when menu is open */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-[1000]"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Side Menu */}
          <div
            ref={menuRef}
            className={`fixed top-0 right-0 w-[320px] h-screen ${
              useDarkMode ? 'bg-[#1A1F2A]' : 'bg-[rgba(45,48,53,0.15)]'
            } backdrop-blur-[5px] p-8 z-[1001] flex flex-col items-center animate-slide-in`}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={closeMenu}
              className="absolute top-4 left-4 bg-transparent border-none text-white text-3xl cursor-pointer w-10 h-10 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors z-[9999]"
              aria-label="Close menu"
            >
              ×
            </button>

            {/* Logo in Side Menu */}
            <img
              src="/tryt-01.svg"
              alt="Logo Coralie and Ralph"
              className="w-[120px] h-auto my-8 brightness-0 invert"
            />

            {/* Side Menu Links */}
            <div id="side-menu-links" className="flex flex-col gap-4 w-full ">
              <a
                id="side-menu-link"
                href="/formulaire"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full"
              >
                Formulaire de présence
              </a>
              <a
                id="side-menu-link"
                href="/programme"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full"
              >
                Programme du Weekend
              </a>
              <a
                id="side-menu-link"
                href="/logement"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full"
              >
                Logement
              </a>
              <a
                id="side-menu-link"
                href="/transport"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full"
              >
                Transports
              </a>
              <a
                id="side-menu-link"
                href="/dabke"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full"
              >
                Dabke
              </a>
              {/*<a
                id="side-menu-link"
                href="/bio"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full disabled"
              >
                Bio des Mariés
              </a>
              <a
                id="side-menu-link"
                href="/decouverte"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full disabled"
              >
                Découverte de Méribel
              </a>
              <a
                id="side-menu-link"
                href="/quiz"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full disabled"
              >
                Quizz et Danse Libanaise
              </a>
              <a
                id="side-menu-link"
                href="/cagnotte"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full disabled"
              >
                Cagnotte du Mariage
              </a>
              <a
                id="side-menu-link"
                href="/photos"
                onClick={closeMenu}
                className="text-white no-underline text-lg text-center p-3 transition-colors duration-300 hover:bg-white/10 w-full disabled"
              >
                Photos et Album de Mariage
              </a>*/}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
