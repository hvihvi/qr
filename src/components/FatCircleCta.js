import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 25vh;
`;

const Button = styled.button`
  border-radius: 50%;
  margin: 5vh;
  height: 40vh;
  width: 40vh;
  border: 0px;
`;

const FatCircleCta = ({ ...props }) => (
  <Button>
    <Img {...props} />
  </Button>
);

export default FatCircleCta;
