import React from "react";
import { render, screen } from "@testing-library/react";
import { Education } from "./Education";

describe("Education", () => {
  globalThis.IntersectionObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
  } as unknown as typeof IntersectionObserver;
  it("renders section heading", () => {
    render(<Education />);

    expect(
      screen.getByRole("heading", { name: /my education & journey/i })
    ).toBeInTheDocument();
  });

  it("renders all education entries", () => {
    render(<Education />);

    expect(
      screen.getByText(/Wyższa Szkoła Kształcenia Zawodowego/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/CodersLab School IT/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Akademia Bialska/i)
    ).toBeInTheDocument();
  });

  it("renders correct degrees and fields", () => {
    render(<Education />);

    expect(
      screen.getByText(/Postgraduate studies/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/JavaScript Developer/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Emergency Medical Services/i)
    ).toBeInTheDocument();
  });

  it("marks current education visually", () => {
    render(<Education />);

    const currentItem = screen.getByText(/2025 - ongoing/i);

    expect(currentItem).toBeInTheDocument();



  });
});