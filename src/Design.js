// App.styles.js
import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Playfair Display', serif;
    background-color: #f9a8d4;
  }
`;

export const Header = styled.header`
  position: sticky;
  z-index: 1000;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  background-color: #f9a8d4;
`;

export const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 9999px;
  object-fit: contain;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 2.5rem;
  background-color: #f472b6;
  border-radius: 0.5rem;
  padding: 0.75rem 2rem;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: white;
  font-size: 1.125rem;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SearchButton = styled.button`
  background-color: #f472b6;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: white;
  font-size: 1.25rem;
  border: none;
`;

export const CarouselSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1rem;
`;

export const CarouselImage = styled.img`
  border-radius: 0.5rem;
  width: 70rem;
  height: 30rem;
  object-fit: cover;
`;

export const Arrow = styled.button`
  color: #be185d;
  font-size: 2rem;
  background: none;
  border: none;
  cursor: pointer;
  min-width: 2rem;
`;

export const ServicesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const SectionTitle = styled.h2`
  color: #831843;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 2rem;
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem 1.5rem;
  max-width: 64rem;
  width: 100%;
  text-align: center;
  color: #831843;
  align-items: stretch;
`;

export const Service = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

export const ServiceIconWrapper = styled.div`
  background-color: #fbcfe8;
  border-radius: 9999px;
  width: 5rem;
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ServiceIcon = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: contain;
`;

export const ServiceLabel = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.25rem;
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2rem;
  max-width: 64rem;
  width: 100%;
`;

export const ThumbImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 5rem;
  object-fit: cover;
`;

export const LocationSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #f9a8d4;
  max-width: 64rem;
  margin: 2rem auto 0;
  gap: 1.5rem;
  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LocationText = styled.div`
  color: #831843;
  max-width: 28rem;
`;

export const LocationHeading = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

export const LocationDetails = styled.p`
  font-size: 0.875rem;
  font-weight: 300;
  line-height: 1.5;
`;

export const MapImage = styled.img`
  border-radius: 0.5rem;
  width: 100%;
  height: 7rem;
  object-fit: cover;
  @media (min-width: 640px) {
    width: 20rem;
  }
`;

export const Footer = styled.footer`
  background-color: #f472b6;
  padding: 0.75rem;
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
`;

export const SocialIcon = styled.a`
  color: #fce7f3;
  font-size: 1.5rem;
  &:hover {
    color: #fbcfe8;
  }
`;
export const MobileMenuIcon = styled(FaBars)`
  display: none;
  font-size: 1.5rem;
  color: #831843;
  cursor: pointer;
  @media (max-width: 640px) {
    display: block;
  }
`;

export const MobileNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f472b6;
  padding: 1rem;
  border-radius: 0.5rem;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 999;
  @media (min-width: 641px) {
    display: none;
  }
`;

export const MobileNavLink = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
export const MobileMenuButton = styled.button`
  background: none;
  border: none;
  font-size: 1.75rem;
  color: #831843;
  display: none;
  cursor: pointer;

  @media (max-width: 640px) {
    display: block;
  }
`;
// Service Page Flip Card Styles
export const PageContainer = styled.div`
  padding: 2rem 1rem;
  background-color: #f9a8d4;
`;

export const ServicesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

export const FlipContainer = styled.div`
  perspective: 1000px;
`;

export const FlipCard = styled.div`
  position: relative;
  width: 100%;
  height: 320px;
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${({ flipped }) =>
    flipped ? "rotateY(180deg)" : "rotateY(0deg)"};
`;

export const CardFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fbcfe8;
  color: #831843;
  border-radius: 1rem;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const CardBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #f472b6;
  color: #fce7f3;
  border-radius: 1rem;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ServiceImage = styled.img`
  border-radius: 0.75rem;
  width: 100%;
  height: 160px;
  object-fit: cover;
`;
export const ArrowButton = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: #831843;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #f472b6;
  }

  &:focus {
    outline: none;
  }
`;
