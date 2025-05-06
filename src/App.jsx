// App.js
import React, { useState } from "react";
import { FaSearch, FaFacebookF, FaInstagram, FaBars } from "react-icons/fa";
import {
  GlobalStyle,
  Header,
  Logo,
  Nav,
  NavLink,
  SearchButton,
  CarouselSection,
  CarouselImage,
  Arrow,
  ServicesSection,
  SectionTitle,
  ServicesGrid,
  Service,
  ServiceIconWrapper,
  ServiceIcon,
  ServiceLabel,
  ImageGrid,
  ThumbImage,
  LocationSection,
  LocationText,
  LocationHeading,
  LocationDetails,
  MapImage,
  Footer,
  SocialIcon,
  MobileNav,
  MobileNavLink,
  MobileMenuIcon,
  MobileMenuButton,
} from "./Design";

// Images & Services
const carouselImages = [
  {
    src: "https://storage.googleapis.com/a1aa/image/f21e4860-f757-42f4-9eca-f92e61a102ce.jpg",
    alt: "Salon front",
  },
  {
    src: "https://storage.googleapis.com/a1aa/image/b298cb24-5dce-450f-254c-c9f2c3151f7c.jpg",
    alt: "Living room",
  },
];

const serviceItems = [
  ["a934c902-36c1-4348-8f9d-4ff8b3201c53", "Haircut (Men & Women)"],
  ["bcc8f246-c4e1-40f1-df07-c0dd3366699c", "Hair Treatment"],
  ["543e49c1-e152-4482-f673-c04b09225b4b", "Hair Color"],
  ["94ccd3f2-31ca-4515-1a2b-2972a5d928f7", "Make up"],
  ["3469d7a8-dee4-4b3a-c482-be05ae6133f1", "Nail Extension"],
  ["5e77f881-92aa-4a0b-96e9-c7d3b4be0130", "Eyelash Extension"],
];

const thumbImages = [
  "f09d935c-7c5c-4cbe-5e96-5ec04eaa83ae",
  "061c9c08-1e2e-470d-8b69-96f6906571e5",
  "be59b86a-bb6f-4e29-8dc6-146593340790",
  "a8e86118-b9bc-4572-518d-0703867ee35a",
  "c3b4433e-17a8-4dd8-02d0-abbefe04c7ef",
  "92bd4224-9dbe-4a97-b457-c6184c9ff40d",
  "a161669e-7554-4afc-27d2-2110549c1a62",
  "057ef0d1-8b4b-4de2-0a9e-14e3a9779c80",
];

export default function App() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((current - 1 + carouselImages.length) % carouselImages.length);
  const handleNext = () => setCurrent((current + 1) % carouselImages.length);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <GlobalStyle />
      <Header>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <Logo
            src="https://storage.googleapis.com/a1aa/image/c08cab20-60c1-4d60-2848-16213d931ffe.jpg"
            alt="Logo"
          />
          <>
            <Nav>
              <NavLink href="#">Home</NavLink>
              <NavLink href="#">Services</NavLink>
              <NavLink href="#">Appointment</NavLink>
            </Nav>

            <div style={{ position: "relative" }}>
              <MobileMenuIcon onClick={() => setMobileMenuOpen((prev) => !prev)} />
              {isMobileMenuOpen && (
                <MobileNav>
                  <MobileNavLink href="#">Home</MobileNavLink>
                  <MobileNavLink href="#">Services</MobileNavLink>
                  <MobileNavLink href="#">Appointment</MobileNavLink>
                </MobileNav>
              )}
            </div>

          </>
        </div>
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </Header>

      <CarouselSection>
        <Arrow onClick={handlePrev}>&lt;</Arrow>
        <CarouselImage
          src={carouselImages[current].src}
          alt={carouselImages[current].alt}
        />
        <Arrow onClick={handleNext}>&gt;</Arrow>
      </CarouselSection>

      <ServicesSection>
        <SectionTitle>SERVICE WE OFFER</SectionTitle>
        <ServicesGrid>
          {serviceItems.map(([id, label], index) => (
            <Service key={index}>
              <ServiceIconWrapper>
                <ServiceIcon
                  src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                  alt={label}
                />
              </ServiceIconWrapper>
              <ServiceLabel>{label}</ServiceLabel>
            </Service>
          ))}
        </ServicesGrid>

        <ImageGrid>
          {thumbImages.map((id, i) => (
            <ThumbImage
              key={i}
              src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
              alt={`Gallery ${i + 1}`}
            />
          ))}
        </ImageGrid>
      </ServicesSection>

      <LocationSection>
        <LocationText>
          <LocationHeading>WE ARE HERE</LocationHeading>
          <LocationDetails>
            Tierra Verde, Durian Street, Lot 20,
            <br />
            Sasa Davao City - Landmark (Ali Shawarma)
            <br />
            Phone #: +63 950 977 4017
          </LocationDetails>
        </LocationText>
        <MapImage
          src="https://storage.googleapis.com/a1aa/image/a3021eb1-9237-46a8-53e1-0f11683aeb50.jpg"
          alt="Map"
        />
      </LocationSection>

      <Footer>
        <SocialIcon href="#">
          <FaFacebookF />
        </SocialIcon>
        <SocialIcon href="#">
          <FaInstagram />
        </SocialIcon>
      </Footer>
    </>
  );
}
