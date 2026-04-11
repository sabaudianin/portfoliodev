import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";
import { MenuDesktop } from "./MenuDesktop";
import { usePathname } from "next/navigation";
import { useActiveSection } from "@/hooks/useActiceSection/useActiveSection";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// 1. Mockowanie IntersectionObserver 
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// 2. Mockowanie Hooka
vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
}));

vi.mock("@/hooks/useActiceSection/useActiveSection", () => ({
  useActiveSection: vi.fn(),
}));

vi.mock("../../../types/navlinks", () => ({
  Links: [
    { id: 1, title: "Home", url: "/", ariaLabel: "Go to home" },
    { id: 2, title: "About", url: "/#about", ariaLabel: "Go to about section" },
    { id: 3, title: "Projects", url: "/projects", ariaLabel: "Go to projects page" },
  ],
}));

// 3. Mockowanie Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: ComponentPropsWithoutRef<"div"> & { layoutId?: string }) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

// 4. Mockowanie Next Link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: ReactNode; href: string } & ComponentPropsWithoutRef<"a">) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

describe("MenuDesktop Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render all navigation links based on provided Links array", () => {
    (usePathname as Mock).mockReturnValue("/");
    (useActiveSection as Mock).mockReturnValue(null);

    render(<MenuDesktop />);

    expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  });

  it("should apply active styles when pathname matches the link url", () => {
    (usePathname as Mock).mockReturnValue("/projects");
    (useActiveSection as Mock).mockReturnValue(null);

    render(<MenuDesktop />);

    const projectsLink = screen.getByRole("link", { name: /projects/i });
    expect(projectsLink).toHaveClass("text-foreground");
    expect(projectsLink).not.toHaveClass("text-foreground/50");
  });

  it("should highlight the correct section link when scrolling on home page", () => {
    (usePathname as Mock).mockReturnValue("/");
    (useActiveSection as Mock).mockReturnValue("about");

    render(<MenuDesktop />);

    const aboutLink = screen.getByRole("link", { name: /about/i });
    const homeLink = screen.getByRole("link", { name: /home/i });


    expect(aboutLink).toHaveClass("text-foreground");


    expect(homeLink).toHaveClass("text-foreground");
  });

  it("should render the motion pill (background highlight) for active links", () => {
    (usePathname as Mock).mockReturnValue("/projects");
    (useActiveSection as Mock).mockReturnValue(null);

    const { container } = render(<MenuDesktop />);

    const activePill = container.querySelector(".absolute.inset-0");
    expect(activePill).toBeInTheDocument();
  });

  it("should fulfill accessibility requirements", () => {
    (usePathname as Mock).mockReturnValue("/");
    (useActiveSection as Mock).mockReturnValue(null);

    render(<MenuDesktop />);

    const nav = screen.getByRole("navigation", { name: /Main desktop navigation/i });
    expect(nav).toBeInTheDocument();

    const aboutLink = screen.getByRole("link", { name: /about/i });
    expect(aboutLink).toHaveAttribute("aria-label", "Go to about section");
  });
});