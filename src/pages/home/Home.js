import React from "react";
import { Link } from "react-router-dom";
import qrLogo from "./qr-code.svg";
import list from "./list.svg";
import create from "./create.svg";
import FatCircleCta from "../../components/FatCircleCta";

const Home = () => (
  <div>
    <Link to="/createtask/">
      <FatCircleCta src={create} alt="logo" />
    </Link>
    <Link to="/qrread/">
      <FatCircleCta src={qrLogo} alt="logo" />
    </Link>
    <Link to="/tasklist/">
      <FatCircleCta src={list} alt="logo" />
    </Link>
  </div>
);

export default Home;
