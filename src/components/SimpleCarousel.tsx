import React, { useState, useEffect } from 'react';

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
 * Props du composant SimpleCarousel
 */
interface SimpleCarouselProps {
  items: CarouselItem[];
  className?: string;
  showCounter?: boolean;
  showDots?: boolean;
  autoPlay?: boolean;
}

/**
 * Composant de carrousel horizontal simple
 * @param {SimpleCarouselProps} props - Les props du composant
 * @returns {JSX.Element} Le composant de carrousel
 */
const SimpleCarousel: React.FC<SimpleCarouselProps> = ({ 
  items, 
  className = '', 
  showCounter = true,
  showDots = true,
  autoPlay = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);

  const goToPrevious = () => {
    if (isTransitioning) return;
    
    setDirection('left');
    setIsTransitioning(true);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    if (isTransitioning) return;
    
    setDirection('right');
    setIsTransitioning(true);
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning || slideIndex === currentIndex) return;
    
    setDirection(slideIndex > currentIndex ? 'right' : 'left');
    setIsTransitioning(true);
    setCurrentIndex(slideIndex);
  };

  // Réinitialiser l'état de transition après l'animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Animation automatique si autoPlay est activé
  useEffect(() => {
    if (!autoPlay) return;
    
    const interval = setInterval(() => {
      if (!isTransitioning) {
        goToNext();
      }
    }, 5000); // Changer de slide toutes les 5 secondes
    
    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning, autoPlay]);

  const currentItem = items[currentIndex];

  return (
    <div className={`relative w-full ${className}`}>
      <div className="relative overflow-hidden rounded-md">
        {/* Slide content */}
        <div 
          className={`transition-all duration-300 ${
            isTransitioning 
              ? `transform ${direction === 'right' ? '-translate-x-5 opacity-0' : 'translate-x-5 opacity-0'}` 
              : 'translate-x-0 opacity-100'
          }`}
        >
          {currentItem.type === 'image' ? (
            <div className="relative aspect-[3/2] md:aspect-[21/9] lg:aspect-[3/1] w-full overflow-hidden">
              <img 
                src={currentItem.content}
                alt={currentItem.alt || "Image"}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="relative aspect-[3/2] md:aspect-[21/9] lg:aspect-[3/1] w-full bg-green-50 flex flex-col justify-center p-8">
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
        </div>

        {/* Flèches de navigation */}
        <button 
          onClick={goToPrevious}
          disabled={isTransitioning}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full p-3 z-10 transition-all shadow-md hover:shadow-lg"
          aria-label="Slide précédent"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNext}
          disabled={isTransitioning}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 hover:text-gray-900 rounded-full p-3 z-10 transition-all shadow-md hover:shadow-lg"
          aria-label="Slide suivant"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicateurs de position (points) */}
        {showDots && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {items.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index ? 'bg-blue-500' : 'bg-white/80 hover:bg-white'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        )}

        {/* Compteur de slide */}
        {showCounter && (
          <div className="absolute top-4 right-4 bg-white/70 text-gray-800 px-3 py-1 rounded-full text-sm z-10">
            {currentIndex + 1} / {items.length}
          </div>
        )}
      </div>
    </div>
  );
};

export default SimpleCarousel; 