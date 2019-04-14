import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 12vh;
`;

const Button = styled.button`
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 5vh;
  height: 20vh;
  width: 20vh;
  border: 0px;
  &:hover {
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  }
`;

const FatCircleCta = ({ ...props }) => (
  <Button>
    <Img {...props} />
  </Button>
);

export default FatCircleCta;
