import React from "react";
import BottomNavigation from "../../components/footer/BottomNavigation";
import BottomNavigationItem from "../../components/footer/BottomNavigationItem";
import home from "./home.svg";
import { Link } from "react-router-dom";

const Footer = () => (
  <BottomNavigation>
    <Link to="/">
      <BottomNavigationItem icon={home} label="home" />
    </Link>
  </BottomNavigation>
);

export default Footer;
