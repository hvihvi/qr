import React, { Component } from "react";
import Menu from "./menu/Menu";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #282c34;
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white; 
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <header>
          <Menu />
        </header>
      </Wrapper>
    );
  }
}

export default App;
