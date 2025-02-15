import React from "react";
import { Link } from "react-router-dom";
import "./TempNavbar.css";

const TempNavbar = () => {
  return (
    <nav className="navbar">
      <p className="app-logo">TemperatureApp</p>
      <ul>
        <li><Link to="/">Temperature Converter</Link></li>
        <li><Link to="/search">World Temperature Search</Link></li>
      </ul>
    </nav>
  );
};

export default TempNavbar;
