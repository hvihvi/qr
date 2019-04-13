import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row;
`;

const Label = styled.label`
  width: 20%;
  padding-left: 10px;
  padding-right: 10px;
`;

const Input = styled.input`
  width: 50%;
`;

const FormTextAreaInput = ({ label, ...rest }) => (
  <Container>
    <Label>{label}</Label>
    <Input type="textarea" {...rest} rows={20} />
  </Container>
);

export default FormTextAreaInput;
