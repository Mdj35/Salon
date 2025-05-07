import React from "react";
import styled from "styled-components";

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
`;

const Appointment = () => {
  return (
    <PageWrapper>
      <FormContainer>
        <Title>Appointment Page</Title>
        <Form>
          <Input type="text" placeholder="Full Name" />
          <Input type="email" placeholder="Email" />
          <Input type="tel" placeholder="Contact Number" />
          <Input type="datetime-local" />
          <Select>
            <option>Select Category</option>
          </Select>
          <Select disabled>
            <option>Select Service</option>
          </Select>
          <SubmitButton type="submit" value="Book Appointment" />
        </Form>
      </FormContainer>
    </PageWrapper>
  );
};

export default Appointment;
