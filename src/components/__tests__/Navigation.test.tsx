import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "../Navigation";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe("Navigation", () => {
  it("renders without crashing", () => {
    renderWithRouter(<Navigation />);
    expect(screen.getByAltText("Logo Coralie and Ralph")).toBeInTheDocument();
  });

  it("toggles menu when clicking the menu button", () => {
    renderWithRouter(<Navigation />);
    const menuButton = screen.getByLabelText("Toggle menu");

    // Menu should be closed initially
    expect(screen.queryByText("Bio des Mariés")).not.toBeVisible();

    // Open menu
    fireEvent.click(menuButton);
    expect(screen.getByText("Bio des Mariés")).toBeVisible();

    // Close menu
    fireEvent.click(menuButton);
    expect(screen.queryByText("Bio des Mariés")).not.toBeVisible();
  });

  it("closes menu when clicking a link", () => {
    renderWithRouter(<Navigation />);
    const menuButton = screen.getByLabelText("Toggle menu");

    // Open menu
    fireEvent.click(menuButton);
    const bioLink = screen.getByText("Bio des Mariés");

    // Click link
    fireEvent.click(bioLink);
    expect(screen.queryByText("Bio des Mariés")).not.toBeVisible();
  });
});
 