import React from "react";
import { Link } from "react-router-dom";
import qrLogo from "./qr-code.svg";
import list from "./list.svg";
import create from "./create.svg";
import FatCircleCta from "../../components/FatCircleCta";
import styled from "styled-components";

const FlexWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: calc(10px + 2vmin);
`;

const Home = () => (
  <FlexWrapper>
    <Link to="/createtask/">
      <FatCircleCta src={create} alt="logo" />
    </Link>
    <Link to="/task/">
      <FatCircleCta src={list} alt="logo" />
    </Link>
    <Link to="/qrread/">
      <FatCircleCta src={qrLogo} alt="logo" />
    </Link>
  </FlexWrapper>
);

export default Home;
