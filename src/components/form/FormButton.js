import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 10px;
`;

const Button = styled.button`
  text-align: center;
  background-color: cyan;
  font-weight: bold;
  height: 60px;
  width: 100%;
  border: 0px;
`;

const FormButton = ({ children, ...rest }) => (
  <Container>
    <Button {...rest}>{children}</Button>
  </Container>
);

export default FormButton;
