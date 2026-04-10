import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Features } from "./Features";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// 1. Mockowanie danych
vi.mock("@/utils/constans/features", () => ({
  features: [
    {
      title: "Clean Code",
      href: "/about",
      icon: <span data-testid="icon-clean-code" />,
      description: "Writing maintainable and scalable code.",
    },
    {
      title: "Experience",
      href: "/experience",
      icon: <span data-testid="icon-experience" />,
      description: ["Next.js", "TypeScript", "Tailwind"],
    },
  ],
}));

// 2. Mockowanie Framer Motion 
vi.mock("framer-motion", () => ({
  motion: {
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 {...props}>{children}</h2>
    ),
    li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => (
      <li {...props}>{children}</li>
    ),
  },
}));

// 3. Mockowanie Next.js Link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: ReactNode; href: string }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Features Component", () => {
  it("should render the main section with correct heading", () => {
    render(<Features />);

    const heading = screen.getByRole("heading", { name: /quick snapshot/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveAttribute("id", "features-heading");
  });

  it("should render feature with a string description", () => {
    render(<Features />);

    expect(screen.getByText("Clean Code")).toBeInTheDocument();
    expect(screen.getByText("Writing maintainable and scalable code.")).toBeInTheDocument();
  });

  it("should render feature with a list description (array)", () => {
    render(<Features />);

    expect(screen.getByText("Experience")).toBeInTheDocument();

    expect(screen.getByText("Next.js")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("should have valid links to respective pages", () => {
    render(<Features />);

    const aboutLink = screen.getByRole("link", { name: /clean code/i });
    expect(aboutLink).toHaveAttribute("href", "/about");
  });

  it("should display icons for each feature", () => {
    render(<Features />);
    expect(screen.getByTestId("icon-clean-code")).toBeInTheDocument();
    expect(screen.getByTestId("icon-experience")).toBeInTheDocument();
  });
});