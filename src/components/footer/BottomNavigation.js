import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  align-self: end;
  background-color: #46556b;
  display: flex;
  justify-content: center;
  height: 56px;
  width: 100%;
`;

const BottomNavigation = ({ children, ...other }) => (
  <Wrapper {...other}>{children}</Wrapper>
);

export default BottomNavigation;
