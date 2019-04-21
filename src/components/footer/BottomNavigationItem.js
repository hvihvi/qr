import React from "react";
import styled from "styled-components";

const Root = styled.div`
  transition-duration: 0.2s;
  padding: 6px 12px 8px;
  min-width: 80;
  flex: 1;
  color: ${props => (props.selected ? "black" : "white")};
`;

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-direction: column;
`;

const Img = styled.img`
  width: 25%;
`;

const BottomNavigationItem = ({ icon, label }) => (
  <Root>
    <Wrapper>
      <Img src={icon} alt={label} />
    </Wrapper>
  </Root>
);

export default BottomNavigationItem;
