import { useEffect, RefObject } from 'react';

/**
 * Hook qui détecte les clics à l'extérieur d'un élément
 * @param ref Référence à l'élément à surveiller
 * @param callback Fonction à exécuter lorsqu'un clic à l'extérieur est détecté
 */
const useOutsideClick = (ref: RefObject<HTMLElement | null>, callback: () => void): void => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
