// src/__tests__/Header.test.js
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header";

test("displays the toggle button", () => {
  render(<Header onToggleDarkMode={() => {}} />);
  const button = screen.getByTestId("toggle-dark-mode");
  expect(button).toBeInTheDocument();
});
