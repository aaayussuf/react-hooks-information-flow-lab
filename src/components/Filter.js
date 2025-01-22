// src/components/Filter.js
import React from "react";

function Filter({ options = [], onChange }) {
  return (
    <select onChange={(e) => onChange(e.target.value)} data-testid="filter-select">
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}

export default Filter;
