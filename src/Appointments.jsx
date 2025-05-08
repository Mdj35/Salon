import React, { useState, useRef } from "react";
import styled, { keyframes, createGlobalStyle } from "styled-components";
import { FaCheck } from "react-icons/fa";

// Page styling remains the same
const PageWrapper = styled.div`
  background-color: #f9a8d4;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 24px;
`;

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  background-color: #f9a8d4;
`;

const Title = styled.h1`
  font-family: serif;
  font-weight: bold;
  font-size: 24px;
  margin-bottom: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px 12px;
  font-size: 12px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  background-color: ${(props) => (props.disabled ? "#fbcfe8" : "white")};
  color: ${(props) => (props.disabled ? "#f472b6" : "inherit")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const SubmitButton = styled(Input)`
  cursor: pointer;
  background-color: white;
  transition: background-color 0.3s;
  &:hover {
    background-color: #fbcfe8;
  }
`;

// Modal Styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 32px;
  border-radius: 12px;
  text-align: center;
  max-width: 300px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const CheckCircle = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  border-radius: 50%;
  background-color: #4ade80;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedCheck = styled(FaCheck)`
  color: white;
  font-size: 32px;
  animation: popIn 0.4s ease-out forwards;
  transform: scale(0);
`;

const GlobalStyle = createGlobalStyle`
  @keyframes popIn {
    to {
      transform: scale(1);
    }
  }
`;

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

const Appointment = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [showModal, setShowModal] = useState(false);
  const formRef = useRef(null); // Add this

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSelectedService("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      if (formRef.current) formRef.current.reset(); // Reset form
      setSelectedCategory("");
      setSelectedService("");
    }, 3000); // After modal hides
  };

  return (
    <>
      <GlobalStyle />

      <PageWrapper>
        <FormContainer>
          <Title>Appointment Page</Title>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Input type="text" placeholder="Full Name" required />
            <Input type="email" placeholder="Email" required />
            <Input
              type="tel"
              placeholder="Contact Number"
              maxLength={11}
              required
            />
            <Input type="datetime-local" required />

            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              required
            >
              <option value="">Select Category</option>
              {Object.keys(servicesData).map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </Select>

            <Select
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
              disabled={!selectedCategory}
              required
            >
              <option value="">Select Service</option>
              {selectedCategory &&
                servicesData[selectedCategory].map((service, idx) => (
                  <option key={idx} value={service}>
                    {service}
                  </option>
                ))}
            </Select>

            <SubmitButton type="submit" value="Book Appointment" />
          </Form>
        </FormContainer>

        {showModal && (
          <ModalOverlay>
            <ModalContent>
              <CheckCircle>
                <AnimatedCheck />
              </CheckCircle>

              <p>Reservation Successful!</p>
            </ModalContent>
          </ModalOverlay>
        )}
      </PageWrapper>
    </>
  );
};

export default Appointment;
