import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

describe("App", () => {

  test("renders AdminPanelPage component when path is /admin", () => {
    render(
      <MemoryRouter initialEntries={["/admin"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Admin Panel - Ticket List/i)).toBeInTheDocument();
  });

  test("renders TicketDetailPage component when path is /ticket/:ticketId", () => {
    render(
      <MemoryRouter initialEntries={["/ticket/123"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/Ticket Detail/i)).toBeInTheDocument();
  });
});
