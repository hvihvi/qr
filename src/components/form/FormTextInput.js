import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin: 5px;
`;

const Input = styled.input`
  width: 50%;
  margin: 5px;
`;

const FormTextInput = ({ label, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <Input type="text" {...rest} />
  </Container>
);

export default FormTextInput;
