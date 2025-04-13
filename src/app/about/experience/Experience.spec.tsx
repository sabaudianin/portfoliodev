import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Experience } from "./Experience";

describe("Experience component", () => {
  it("renders the section title", () => {
    render(<Experience />);
    expect(screen.getByText(/Experience Timeline/i)).toBeInTheDocument();
  });

  it("renders all job positions", () => {
    render(<Experience />);
    expect(screen.getByText("Warehouse Manager")).toBeInTheDocument();
    expect(screen.getByText("Team Supervisor")).toBeInTheDocument();
  });

  it("renders correct number of experience bullets", () => {
    render(<Experience />);
    const items = screen.getAllByRole("listitem");
    expect(items.length).toBeGreaterThan(4);
  });

  it("renders timeline markers", () => {
    render(<Experience />);
    const markers = document.querySelectorAll("div.bg-blue-500");
    expect(markers.length).toBe(2);
  });
});
