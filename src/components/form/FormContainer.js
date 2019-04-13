import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  height: 100vh; //100% view height
  max-height: 100vh; //100% view height
  width: 100vw; // 100% view width
  max-width: 100vw; // 100% view width
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.div`
  flex: 1;
`;

const FormWrapper = ({ children }) => (
  <Wrapper>
    {React.Children.map(children, child => (
      <Item>{child}</Item>
    ))}
  </Wrapper>
);

export default FormWrapper;
