import React from "react";
import './header.css';
import logo from './lemonlight.png';

export default () => (
  <header className="Header">
    <div className="Header-LogoContainer">
      <img className="Header-Logo" src={logo} />
    </div>
  </header>
);