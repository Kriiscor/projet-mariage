import React, { useEffect, useState } from 'react';
import { calculateTimeLeft, TimeLeft } from '../utils';
import Seo from '../components/SEO';
import {
  HomeContainer,
  Logo,
  Titre,
  CountdownContainer,
  CountdownItem,
  Date,
  ConfirmButton,
  CenterContent,
  BottomSection,
} from '../styles/Home.styles';

const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000 * 60); // Update every minute

    return () => clearInterval(timer);
  }, []);

  // Classe page-home : fond sombre + main min-height pour éviter la bande blanche (HomeContainer en fixed)
  useEffect(() => {
    document.body.classList.add('page-home');
    document.documentElement.classList.add('page-home');
    return () => {
      document.body.classList.remove('page-home');
      document.documentElement.classList.remove('page-home');
    };
  }, []);

  return (
    <>
      <Seo
        title="Accueil - Mariage de Coralie et Ralph"
        description="Bienvenue sur le site de notre mariage. Découvrez toutes les informations sur notre grande journée du 24 décembre 2025 à Méribel."
      />
      <HomeContainer>
        <Titre>Hâte de célébrer notre union dans la magnifique vallée de Méribel!</Titre>

        <CenterContent>
          <CountdownContainer>
            <CountdownItem>
              <div className="number">{timeLeft.months}</div>
              <div className="label">Mois</div>
            </CountdownItem>
            <CountdownItem>
              <div className="number">{timeLeft.days}</div>
              <div className="label">Jours</div>
            </CountdownItem>
            <CountdownItem>
              <div className="number">{timeLeft.hours}</div>
              <div className="label">Heures</div>
            </CountdownItem>
          </CountdownContainer>

          <Date>24.12.2025</Date>

          <ConfirmButton>
            <a href="/formulaire" style={{ color: 'inherit', textDecoration: 'none' }}>
              Confirmez votre venue
            </a>
          </ConfirmButton>
        </CenterContent>

        <BottomSection>
          <Logo src="/tryt-01.svg" alt="Logo Coralie and Ralph" />
        </BottomSection>
      </HomeContainer>
    </>
  );
};

export default Home;
