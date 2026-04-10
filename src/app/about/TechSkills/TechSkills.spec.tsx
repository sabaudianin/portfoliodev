import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { TechSkills } from "./TechSkills";
import type { ComponentPropsWithoutRef } from "react";

// 1. Mockowanie stałych danych (techCategories)

vi.mock("@/utils/constans/techCategories", () => ({
  techCategories: [
    {
      title: "Frontend",
      stack: [
        { name: "React", icon: <span>ReactIcon</span>, link: "https://react.dev" },
      ],
    },
  ],
}));

// 2. Mockowanie motion i wariantów (Clean & Type-safe)
vi.mock("framer-motion", () => ({
  motion: {
    section: ({ children, ...props }: ComponentPropsWithoutRef<"section">) => (
      <section {...props}>{children}</section>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 {...props}>{children}</h2>
    ),
    a: ({ children, ...props }: ComponentPropsWithoutRef<"a">) => (
      <a {...props}>{children}</a>
    ),
  },
}));

// Mockowanie wariantów, aby uniknąć błędów undefined
vi.mock("@/ui/motion/motionVariants", () => ({
  containerVariants: {},
  titleVariants: {},
  cardVariants: {},
}));

describe("TechSkills Component", () => {
  it("should render the main section title", () => {
    render(<TechSkills />);
    const heading = screen.getByRole("heading", { name: /tech stack/i });
    expect(heading).toBeInTheDocument();
  });

  it("should render categories and stack items from provided data", () => {
    render(<TechSkills />);


    expect(screen.getByText("Frontend")).toBeInTheDocument();


    expect(screen.getByText("React")).toBeInTheDocument();
  });

  it("should have correct accessibility attributes for links", () => {
    render(<TechSkills />);
    const link = screen.getByRole("link", { name: /react/i });

    expect(link).toHaveAttribute("href", "https://react.dev");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should contain icons for each technology", () => {
    render(<TechSkills />);
    // Szukamy tekstu wewnątrz ikony z mocka
    expect(screen.getByText("ReactIcon")).toBeInTheDocument();
  });
});