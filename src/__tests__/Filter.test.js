import "@testing-library/jest-dom";
// src/__tests__/Filter.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter";

test("displays the <select> element", () => {
  render(<Filter options={["Option 1", "Option 2"]} onChange={() => {}} />);
  const selectElement = screen.getByTestId("filter-select");
  expect(selectElement).toBeInTheDocument();
});

