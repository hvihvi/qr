import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Qr from "../qr/Qr";
import styled from "styled-components";
import logo from "./photo-camera.svg";

const Menu = () => (
  <Router>
    <Link to="/qr/">
      <Button>
        <Img src={logo} alt="logo" />
      </Button>
    </Link>
    <Route path="/qr/" component={Qr} />
  </Router>
);

const Img = styled.img`
  width: 25vh;
`

const Button = styled.button`
border-radius: 50%;
  height: 50vh;
  width: 50vh;
  border: 0px;
`;

export default Menu;
