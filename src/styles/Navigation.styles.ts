import styled from 'styled-components';

export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(33, 37, 41, 0.15);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  z-index: 1000;
  height: 80px;
  backdrop-filter: blur(5px);
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  margin-right: 2rem;

  img {
    height: 60px;
    width: auto;
    filter: brightness(0) invert(1);
  }

  span {
    font-size: 1.5rem;
    margin-left: 1rem;
    font-weight: 300;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  flex-grow: 1;
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  position: relative;
  padding-bottom: 2px;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: white;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const MenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  padding: 0.5rem;
  margin-left: auto;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SideMenu = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-320px')};
  width: 320px;
  height: 100vh;
  background: rgba(45, 48, 53, 0.15);
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  align-items: center;
  backdrop-filter: blur(5px);

  img {
    width: 120px;
    height: auto;
    margin: 2rem 0;
    filter: brightness(0) invert(1);
  }
`;

export const SideMenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const SideMenuLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  text-align: center;
  padding: 0.8rem;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
