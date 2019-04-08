import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Qr from "../qr/Qr";

const Menu = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/qr/">QR</Link>
          </li>
        </ul>
      </nav>
      <Route path="/qr/" component={Qr} />
    </div>
  </Router>
);

export default Menu;
