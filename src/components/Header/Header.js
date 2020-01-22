import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import logo from './lemonlight.png';

export default () => (
  <header className="Header">
    <div className="Header-LogoContainer">
      <Link to="/">
        <img className="Header-Logo" src={logo} />
      </Link>
    </div>
  </header>
);