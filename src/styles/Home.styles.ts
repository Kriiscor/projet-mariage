import styled from 'styled-components';

export const HomeContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: url('/Background.png') center 30% / cover no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 2rem;

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
`;

export const CenterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto 0;
  position: relative;
  z-index: 2;
`;

export const CountdownContainer = styled.div`
  display: flex;
  gap: 4rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

export const CountdownItem = styled.div`
  text-align: center;

  .number {
    font-size: 4.5rem;
    font-weight: 300;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }

  .label {
    font-size: 1.4rem;
    text-transform: uppercase;
    margin-top: 0.5rem;
  }
`;

export const Date = styled.div`
  font-size: 2.5rem;
  margin: 2rem 0;
  position: relative;
  z-index: 2;
  font-family: 'Playfair Display', serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
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
`;

export const BottomSection = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  z-index: 2;
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
`;
