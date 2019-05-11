import React from "react";
import styled from "styled-components";

const Root = styled.div`
  transition-duration: 0.2s;
  padding: 6px 12px 8px;
  flex: 1;
  color: ${props => (props.selected ? "black" : "white")};
`;

const Wrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Img = styled.img`
  width: 25%;
`;

const BottomNavigationItem = ({ icon, label, ...props }) => (
  <Root {...props}>
    <Wrapper>
      <Img src={icon} alt={label} />
    </Wrapper>
  </Root>
);

export default BottomNavigationItem;
