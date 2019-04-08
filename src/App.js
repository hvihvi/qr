import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Menu from "./menu/Menu";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Menu />
        </header>
      </div>
    );
  }
}

export default App;
