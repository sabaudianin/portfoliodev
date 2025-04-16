import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AboutMe } from "./AboutMe";

vi.mock("./Features", () => ({
  default: () => <div>Mocked Features</div>,
}));

describe("AboutMe Component", () => {
  it("render headindg & description", () => {
    render(<AboutMe />);
    expect(screen.getByText(/Let me introduce myself/i)).toBeInTheDocument();
    expect(
      screen.getByText(/I'm a passionate and detail-oriented developer/i)
    ).toBeInTheDocument();
  });

  it("renders Features", () => {
    render(<AboutMe />);
    expect(screen.getByText(/Mocked Features/i)).toBeInTheDocument();
  });
});
