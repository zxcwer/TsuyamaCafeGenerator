import React from "react";
import "./header.css";
import { FiCoffee } from "react-icons/fi";

const Header = () => {
  return (
    <div className="container container--header">
      <FiCoffee size="3rem" />
      <h2>Tsuyama Cafe Generator</h2>
    </div>
  );
};

export default Header;
