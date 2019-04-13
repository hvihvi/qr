import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  height: 100vh; //100% view height
  max-height: 100vh; //100% view height
  width: 100vw; // 100% view width
  max-width: 100vw; // 100% view width
  flex: 1;
  flex-wrap: wrap;
  background-color: #282c34;
  flex-direction: column;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default Wrapper;
