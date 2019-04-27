import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Item = styled.div`
  flex: 1;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
`;

const FormWrapper = ({ children }) => (
  <Wrapper>
    {React.Children.map(children, child => (
      <Item>{child}</Item>
    ))}
  </Wrapper>
);

export default FormWrapper;
