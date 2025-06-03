import styled from 'styled-components';

export const HomeContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background: url('/images/background.png') center 50% / cover no-repeat;
  background-position: 90% 0%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 2rem;
  margin-top: -80px;
  padding-top: calc(2rem + 80px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.15));
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: -60px;
    padding-top: calc(1rem + 60px);
    background-position: center center;
    justify-content: center;
    background-position: 90% 0%;
    &::before {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3));
    }
  }
`;

export const MainText = styled.div`
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 3.5rem;
  font-style: italic;
  margin-top: 2rem;
  max-width: 800px;
  position: relative;
  z-index: 2;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-top: 1rem;
    max-width: 90%;
    line-height: 1.3;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    margin: 0;
    width: 100%;
  }
`;

export const CountdownContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const CountdownItem = styled.div`
  text-align: center;

  .number {
    font-size: 4.5rem;
    font-weight: 300;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
      font-size: 3rem;
    }

    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }

  .label {
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-top: 0.5rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-top: 0.3rem;
    }

    @media (max-width: 480px) {
      font-size: 0.9rem;
    }
  }
`;

export const Date = styled.div`
  font-size: 2.5rem;
  margin: 2rem 0;
  position: relative;
  z-index: 2;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin: 1.5rem 0;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 1rem 0;
  }
`;

export const ConfirmButton = styled.button`
  padding: 1rem 2rem;
  font-size: 1.4rem;
  background: transparent;
  border: 2px solid white;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 1px;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1.1rem;
    letter-spacing: 0.5px;
  }

  @media (max-width: 480px) {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
    width: 80%;
    max-width: 250px;
  }
`;

export const BottomSection = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 260px;
  height: auto;
  filter: brightness(0) invert(1);
  opacity: 0.9;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
