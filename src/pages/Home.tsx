import React, { useEffect, useState } from 'react';
import { calculateTimeLeft, TimeLeft } from '../utils';
import '../styles/home.css';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="home-container h-screen w-full flex flex-col items-center justify-between text-white p-8 -mt-20 pt-28 relative">
      <h1 className="text-center font-playfair text-5xl italic mt-8 max-w-3xl relative z-10 text-shadow md:text-4xl sm:text-3xl sm:mt-4 sm:max-w-[90%] sm:leading-relaxed">
        Hâte de célébrer notre union dans la magnifique vallée de Méribel!
      </h1>

      <div className="flex flex-col items-center my-auto relative z-10 w-full">
        <div className="flex gap-16 mb-8 relative z-10 md:gap-8 md:mb-6 md:flex-wrap md:justify-center sm:gap-6 sm:mb-4">
          <div className="text-center">
            <div className="text-6xl font-light text-shadow md:text-5xl sm:text-4xl">
              {timeLeft.months}
            </div>
            <div className="text-xl uppercase mt-2 md:text-lg sm:text-base sm:mt-1">Mois</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-light text-shadow md:text-5xl sm:text-4xl">
              {timeLeft.days}
            </div>
            <div className="text-xl uppercase mt-2 md:text-lg sm:text-base sm:mt-1">Jours</div>
          </div>
          <div className="text-center">
            <div className="text-6xl font-light text-shadow md:text-5xl sm:text-4xl">
              {timeLeft.hours}
            </div>
            <div className="text-xl uppercase mt-2 md:text-lg sm:text-base sm:mt-1">Heures</div>
          </div>
        </div>

        <div className="text-4xl my-8 relative z-10 font-playfair text-shadow md:text-3xl md:my-6 sm:text-2xl sm:my-4">
          06.09.2025
        </div>

        <button className="px-8 py-4 text-xl bg-transparent border-2 border-white text-white cursor-pointer transition-all uppercase tracking-wider hover:bg-white/10 relative z-10 md:px-6 md:py-3 md:text-lg sm:px-5 sm:py-3 sm:text-base sm:w-4/5 sm:max-w-[250px]">
          <a href="/formulaire" className="text-inherit no-underline">
            Confirmez votre venue
          </a>
        </button>
      </div>

      <div className="absolute bottom-4 left-4 z-10 md:hidden">
        <img src="/tryt-01.svg" alt="Logo Coralie and Ralph" className="logo w-[260px] h-auto" />
      </div>
    </div>
  );
};

export default Home;
