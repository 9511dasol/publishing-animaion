import React from "react";
import "./Header.css";

interface Props{
  onclick: () => void;
}

function Header({onclick}:{onclick:() => void;}) {
  return (
    <header>
      <h2 className="logo">SC</h2>
      <nav className="navigation">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contetnt</a>
        <button onClick={onclick} className="btnlogin-popup">Login</button>
      </nav>
    </header>
  );
}

export default Header;
