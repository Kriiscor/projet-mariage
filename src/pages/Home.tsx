import React, { useEffect, useState } from 'react';
import { calculateTimeLeft, TimeLeft } from '../utils';
import {
  HomeContainer,
  Logo,
  MainText,
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

  console.log('Variable de test Render:', import.meta.env.VITE_RENDER_TEST);

  return (
    <HomeContainer>
      <MainText>Hâte de célébrer notre union dans la magnifique vallée de Méribel!</MainText>

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

        <Date>06.09.2025</Date>

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
  );
};

export default Home;
