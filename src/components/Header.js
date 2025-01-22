// src/components/Header.js
import React from "react";

function Header({ onToggleDarkMode }) {
  return (
    <header>
      <h1>My App</h1>
      <button onClick={onToggleDarkMode} data-testid="toggle-dark-mode">
        Toggle Dark Mode
      </button>
    </header>
  );
}

export default Header;
