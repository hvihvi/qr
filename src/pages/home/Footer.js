import React from "react";
import BottomNavigation from "../../components/footer/BottomNavigation";
import BottomNavigationItem from "../../components/footer/BottomNavigationItem";
import home from "./home.svg";
import back from "./left-arrow.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <BottomNavigation>
    <Link to="/">
      <BottomNavigationItem icon={home} label="home" />
    </Link>
    <Link to="/">
      <BottomNavigationItem icon={back} label="home" />
    </Link>
  </BottomNavigation>
);

export default Footer;
