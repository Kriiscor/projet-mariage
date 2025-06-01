import React, { useState } from 'react';

/**
 * Interface pour les items du carrousel
 */
interface CarouselItem {
  type: 'image' | 'text';
  content: string;
  alt?: string;
  description?: string;
}

/**
 * Props du composant HotelStyleCarousel
 */
interface HotelStyleCarouselProps {
  items: CarouselItem[];
  className?: string;
}

/**
 * Composant de carrousel horizontal pour la section hôtel
 * @param {HotelStyleCarouselProps} props - Les props du composant
 * @returns {JSX.Element} Le composant de carrousel
 */
const HotelStyleCarousel: React.FC<HotelStyleCarouselProps> = ({ items, className = '' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const currentItem = items[currentIndex];

  // Filtrer uniquement les éléments de type 'image' pour les miniatures
  const imageItems = items.filter(item => item.type === 'image');

  return (
    <div className={`w-full ${className}`}>
      <div className="relative">
        <div className="flex flex-col md:flex-row bg-white shadow-md rounded-md overflow-hidden">
          {/* Sidebar avec miniatures */}
          <div className="md:w-[120px] p-4 bg-gray-50 flex md:flex-col gap-2 overflow-auto">
            {imageItems.map((item, index) => {
              const originalIndex = items.findIndex(i => i === item);
              return (
                <button
                  key={`thumb-${index}`}
                  onClick={() => goToSlide(originalIndex)}
                  className={`flex-shrink-0 w-16 h-16 overflow-hidden rounded-md transition-all ${
                    currentIndex === originalIndex 
                      ? 'ring-2 ring-blue-500 scale-105' 
                      : 'border border-gray-100 opacity-80 hover:opacity-100'
                  }`}
                  aria-label={`Voir ${item.alt || "image"}`}
                >
                  <img 
                    src={item.content}
                    alt={`Miniature ${index + 1}`}
                    className="w-full h-full object-fill"
                  />
                </button>
              );
            })}
          </div>

          {/* Contenu principal */}
          <div className="relative flex-grow">
            <div className="relative min-h-[350px] md:min-h-[450px]">
              {currentItem.type === 'image' ? (
                <img 
                  src={currentItem.content}
                  alt={currentItem.alt || "Image de l'hôtel"}
                  className="object-fill"
                />
              ) : (
                <div className="bg-green-50 w-full h-full flex flex-col justify-center p-8">
                  <h2 className="text-3xl font-script text-center mb-4 italic text-gray-800">Hôtel L'Eterlou</h2>
                  <p className="text-center text-gray-700 leading-relaxed max-w-2xl mx-auto">
                    {currentItem.content}
                  </p>
                  {currentItem.description && (
                    <p className="text-center mt-4 text-sm italic text-gray-600 max-w-2xl mx-auto">
                      {currentItem.description}
                    </p>
                  )}
                </div>
              )}

              {/* Navigation */}
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
                <button 
                  onClick={goToPrevious}
                  className="bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 rounded-r-full p-3 transition-all shadow-sm hover:shadow ml-2"
                  aria-label="Slide précédent"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={goToNext}
                  className="bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 rounded-l-full p-3 transition-all shadow-sm hover:shadow mr-2"
                  aria-label="Slide suivant"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicateurs de position */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                {items.map((_, index) => (
                  <button
                    key={`dot-${index}`}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index ? 'bg-blue-500' : 'bg-white'
                    }`}
                    aria-label={`Aller au slide ${index + 1}`}
                  />
                ))}
              </div>

              {/* Numéro de slide */}
              <div className="absolute top-4 right-4 bg-white/70 text-gray-800 px-2 py-1 rounded-full text-sm">
                {currentIndex + 1} / {items.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelStyleCarousel; 