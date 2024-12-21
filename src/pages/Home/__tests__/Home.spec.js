// src/pages/Home/__tests__/Home.spec.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../Home";

// Mock the useItem hook
jest.mock("../../../hooks/useItem", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    items: [
      { id: 1, title: "Test Item 1", body: "Description for item 1" },
      { id: 2, title: "Test Item 2", body: "Description for item 2" },
    ],
    loading: false,
    totalItems: 10,
    removeItem: jest.fn(),
    handleSearch: jest.fn(),
  })),
}));

describe("Home Component", () => {
  test("renders Home page without crashing", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Check for the heading
    expect(screen.getByText(/item list/i)).toBeInTheDocument();

    // Check for the Create New Item button
    const createButton = screen.getByText(/\+ create new item/i);
    expect(createButton).toBeInTheDocument();

    // Check for the search input
    const searchInput = screen.getByPlaceholderText(/search by title/i);
    expect(searchInput).toBeInTheDocument();
  });

  test("displays items correctly", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Check for rendered items
    expect(screen.getByText(/test item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/description for item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/test item 2/i)).toBeInTheDocument();
    expect(screen.getByText(/description for item 2/i)).toBeInTheDocument();
  });

  test("handles pagination", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    // Check for pagination controls
    const prevButton = screen.getByText(/previous/i);
    const nextButton = screen.getByText(/next/i);

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();

    // Pagination buttons should work correctly
    expect(prevButton).toBeDisabled(); // Initial state (Page 1)
    expect(nextButton).not.toBeDisabled(); // More pages available
  });

  test("handles search input", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const searchInput = screen.getByPlaceholderText(/search by title/i);

    // Simulate typing in the search input
    fireEvent.change(searchInput, { target: { value: "Test" } });
    expect(searchInput.value).toBe("Test");
  });

  test("Create New Item button navigates to /create", () => {
    render(
      <Router>
        <Home />
      </Router>
    );

    const createButton = screen.getByText(/\+ create new item/i);

    // Check if the Create button has the correct href
    expect(createButton.closest("a")).toHaveAttribute("href", "/create");
  });
});
