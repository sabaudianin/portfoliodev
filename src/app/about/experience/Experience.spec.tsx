import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Experience } from "./Experience";


//typy dla mocka 
type MockProps = {
  children: ReactNode;
};
// 1. Mockowanie Framer Motion (rozszerzone o viewport)
vi.mock("framer-motion", () => ({
  motion: {
    // Używamy ComponentPropsWithoutRef, aby mock przyjmował to, co zwykły div/h2
    div: ({ children, ...props }: ComponentPropsWithoutRef<"div">) => (
      <div {...props}>{children}</div>
    ),
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 {...props}>{children}</h2>
    ),
  },
  AnimatePresence: ({ children }: MockProps) => <>{children}</>,
}));

// 2. Mockowanie SectionWrapper 
vi.mock("@/ui/sectionWrapper/sectionWrapper", () => ({
  SectionWrapper: ({ children, id }: { children: ReactNode; id?: string }) => (
    <section id={id}>{children}</section>
  ),
}));
describe("Experience Component", () => {
  it("should render the section with correct title", () => {
    render(<Experience />);
    const title = screen.getByRole("heading", { name: /professional journey/i });
    expect(title).toBeInTheDocument();
  });

  it("should display all professional roles from data", () => {
    render(<Experience />);

    expect(screen.getByText("Frontend / Full-Stack Developer")).toBeInTheDocument();
    expect(screen.getByText("Warehouse Manager")).toBeInTheDocument();
  });

  it("should show 'current' status badge only for active roles", () => {
    render(<Experience />);

    const currentBadges = screen.getAllByText(/Present/i);
    expect(currentBadges.length).toBeGreaterThan(0);
  });

  it("should render list of responsibilities for each job", () => {
    render(<Experience />);
    const listItems = screen.getAllByRole("listitem");

    expect(listItems).toHaveLength(11);
  });
});