// App.js
import React, { useState, useEffect } from "react";
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
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Services from "./Services";
import Appointment from "./Appointments";
import hairColor from "./Pictures/HairColor.jpg";
import eyelash from "./Pictures/eyelash.jpg";
import nailExtension from "./Pictures/nailextension.jpg";
import haircut from "./Pictures/haircut.jpg";
import pedicure from "./Pictures/pedicure.jpg";
import nails from "./Pictures/nails.jpg";
import eyelash2 from "./Pictures/eyelash2.jpg";
import nails2 from "./Pictures/nails2.jpg";

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
  [haircut, "Haircut"],
  [pedicure, "Pedicure"],
  [hairColor, "Hair Color"],
  [nails, "Nails"],
  [nailExtension, "Nail Extension"],
  [eyelash, "Eyelash"],
];

const thumbImages = [
  pedicure,
  nails,
  hairColor,
  haircut,
  nailExtension,
  eyelash,
  eyelash2,
  nails2,
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const handlePrev = () =>
    setCurrent((current - 1 + carouselImages.length) % carouselImages.length);
  const handleNext = () => setCurrent((current + 1) % carouselImages.length);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const servicesData = {
    CUTTING: [
      "Cut with Style",
      "Cut Only",
      "Cut / Clipper",
      "TRIM (hair line only)",
      "Bang Trim",
      "Split end Cutting",
    ],
    "HAIR TREATMENTS": [
      "Semi Di Lino Vials",
      "Deep Conditioning",
      "Reconstruction Treatment",
      "Hair Cauterization",
      "Botox Hair Treatment",
      "Keratin Express",
      "Keratin Treatment",
      "Relaxer Treatment",
    ],
    MAKEUP: [
      "Full Face​",
      "Fake EyeLashes",
      "Basic Application",
      "Bridal Application",
      "Bridal Application with trial",
    ],
    "HAIR STYLING": [
      "Wash and Blow-dry (Add Curls or Flat Iron)",
      "Flat or Curling Iron only",
      "Formal UpDo",
      "Bridal UpDo",
      "Bridal UpDo with Trial",
    ],
    COLOR: [
      "Color Retouch",
      "Partial Root Touch-Up",
      "Root to end color",
      "Partial Foil",
      "Full Foil",
      "Spot Foils (up to 6 Foils)",
      "Ombré",
      "Partial Balayage",
      "Full Balayage",
      "Toner/Glaze/Color Enhance",
      "Color Correction, Fashion Color​",
    ],
    "HAIR REMOVAL": [
      "Eyebrow Wax",
      "Eyebrow Wax and Lip",
      "Upper Lip",
      "Lower Lip​",
      "Nostrils",
      "Chin",
      "Full Face (without brows)",
      "Chest",
      "Under Arms",
      "Half Arms",
      "Full Arms",
      "Belly Button",
      "Abdomen",
      "Lower Back",
      "Back (without shoulder and neck)​",
      "Full Back",
      "Regular Bikini",
      "Extended Bikini",
      "Brazilian Bikini",
      "Buttocks",
      "Upper Legs",
      "Lower Legs​",
      "Full Legs",
    ],
  };

  const flatServices = Object.entries(servicesData).flatMap(
    ([category, items]) =>
      items.map((service) => ({
        category,
        service,
      })),
  );

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length > 0) {
      setSuggestions(
        flatServices.filter(({ service }) =>
          service.toLowerCase().includes(term.toLowerCase()),
        ),
      );
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = ({ category, service }) => {
    setSearchTerm("");
    setSuggestions([]);
    setIsSearchVisible(false);
    navigate("/appointment", {
      state: {
        selectedService: service,
        selectedCategory: category,
      },
    });
  };

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
              <NavLink href="/">Home</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/appointment">Appointment</NavLink>
            </Nav>

            <div style={{ position: "relative" }}>
              <MobileMenuIcon
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              />
              {isMobileMenuOpen && (
                <MobileNav>
                  <MobileNavLink href="/">Home</MobileNavLink>
                  <MobileNavLink href="/services">Services</MobileNavLink>
                  <MobileNavLink href="/appointment">Appointment</MobileNavLink>
                </MobileNav>
              )}
            </div>
          </>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
          }}
        >
          <SearchButton
            style={{
              fontSize: "1.2rem",
              cursor: "pointer",
              background: "none",
              border: "none",
            }}
            onClick={() => setIsSearchVisible((prev) => !prev)}
          >
            <FaSearch />
          </SearchButton>

          {isSearchVisible && (
            <div style={{ position: "relative" }}>
              <input
                type="text"
                placeholder="Search service..."
                value={searchTerm}
                onChange={handleSearchChange}
                style={{
                  padding: "0.5rem",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  marginLeft: "0.5rem",
                }}
              />
              {suggestions.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "2.5rem",
                    left: 0,
                    backgroundColor: "white",
                    border: "1px solid #ddd",
                    width: "100%",
                    zIndex: 999,
                    maxHeight: "200px",
                    overflowY: "auto",
                  }}
                >
                  {suggestions.map(({ category, service }, index) => (
                    <div
                      key={index}
                      onClick={() =>
                        handleSuggestionClick({ category, service })
                      }
                      style={{
                        padding: "0.5rem",
                        cursor: "pointer",
                        borderBottom: "1px solid #eee",
                      }}
                    >
                      <strong>{service}</strong>
                      <div style={{ fontSize: "0.75rem", color: "#777" }}>
                        {category}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </Header>

      <Routes>
        <Route
          path="/"
          element={
            <>
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
                  {serviceItems.map(([imgSrc, label], index) => (
                    <Service key={index}>
                      <Link
                        to="/appointment"
                        state={{ selectedService: label }}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ServiceIconWrapper>
                          <ServiceIcon src={imgSrc} alt={label} />
                        </ServiceIconWrapper>
                        <ServiceLabel>{label}</ServiceLabel>
                      </Link>
                    </Service>
                  ))}
                </ServicesGrid>

                <ImageGrid>
                  {thumbImages.map((img, i) => (
                    <ThumbImage key={i} src={img} alt={`Gallery ${i + 1}`} />
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
            </>
          }
        />
        <Route path="/services" element={<Services />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>

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
