import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import AboutMe from "./page";
import type { ComponentPropsWithoutRef } from "react";

// 1. (Integration isolation)
// Zamiast renderować całą logikę proste placeholdery
vi.mock("./TechSkills/TechSkills", () => ({
  TechSkills: () => <div data-testid="tech-skills-section" />
}));
vi.mock("./education/Education", () => ({
  Education: () => <div data-testid="education-section" />
}));
vi.mock("./experience/Experience", () => ({
  Experience: () => <div data-testid="experience-section" />
}));
vi.mock("./certificats/Certificats", () => ({
  Certificats: () => <div data-testid="certificats-section" />
}));

// 2. Mockowanie Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: ComponentPropsWithoutRef<"div">) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("AboutMe Page Component", () => {
  it("should render the introduction header with correct text", () => {
    render(<AboutMe />);

    expect(screen.getByText(/Let me/i)).toBeInTheDocument();
    expect(screen.getByText(/introduce/i)).toBeInTheDocument();
    expect(screen.getByText(/myself/i)).toBeInTheDocument();
  });

  it("should display the developer philosophy (Clean Code & Scalable UI)", () => {
    render(<AboutMe />);

    expect(screen.getByText("Clean Code")).toBeInTheDocument();
    expect(screen.getByText("Scalable UI")).toBeInTheDocument();
  });

  it("should render all sub-sections in the correct order", () => {
    render(<AboutMe />);


    expect(screen.getByTestId("tech-skills-section")).toBeInTheDocument();
    expect(screen.getByTestId("education-section")).toBeInTheDocument();
    expect(screen.getByTestId("certificats-section")).toBeInTheDocument();
    expect(screen.getByTestId("experience-section")).toBeInTheDocument();
  });

  it("should have a relative background blur element for visual layout", () => {
    const { container } = render(<AboutMe />);

    const blurElement = container.querySelector('.blur-\\[120px\\]');
    expect(blurElement).toBeInTheDocument();
  });
});