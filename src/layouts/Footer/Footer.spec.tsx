import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./Footert";

describe("Footer Tests", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it("Render component properly", () => {
    expect(screen.getByText("rafbobbob@gmail.com")).toBeInTheDocument();
    expect(screen.getByText("+48 793386445")).toBeInTheDocument();
  });
  it("Render icons", () => {
    const icons = screen.getAllByRole("img", { hidden: true });
    expect(icons.length).toBeGreaterThanOrEqual(2);
  });
});
