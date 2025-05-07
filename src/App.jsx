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
  ["a934c902-36c1-4348-8f9d-4ff8b3201c53", "Haircut"],
  ["bcc8f246-c4e1-40f1-df07-c0dd3366699c", "Hair Treatment"],
  ["543e49c1-e152-4482-f673-c04b09225b4b", "Hair Color"],
  ["94ccd3f2-31ca-4515-1a2b-2972a5d928f7", "Make up"],
  ["3469d7a8-dee4-4b3a-c482-be05ae6133f1", "Nail Extension"],
  ["5e77f881-92aa-4a0b-96e9-c7d3b4be0130", "Eyelash"],
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
                  {serviceItems.map(([id, label], index) => (
                    <Service key={index}>
                      <Link
                        to="/appointment"
                        state={{ selectedService: label }}
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <ServiceIconWrapper>
                          <ServiceIcon
                            src={`https://storage.googleapis.com/a1aa/image/${id}.jpg`}
                            alt={label}
                          />
                        </ServiceIconWrapper>
                        <ServiceLabel>{label}</ServiceLabel>
                      </Link>
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
