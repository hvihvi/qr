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

const TextArea = styled.textarea`
  width: 50%;
  margin: 5px;
  width: 100%;
`;

const FormTextAreaInput = ({ label, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <TextArea rows={10} {...rest} />
  </Container>
);

export default FormTextAreaInput;
