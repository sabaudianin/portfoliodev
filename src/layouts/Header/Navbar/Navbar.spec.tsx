import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Navbar } from "./Navbar";
import type { ReactNode, ComponentPropsWithoutRef } from "react";

// 1. Mockowanie IntersectionObserver 
global.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}));

// 2. Mockowanie Next Link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: ReactNode; href: string } & ComponentPropsWithoutRef<"a">) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// 3. Mockowanie podkomponentu
vi.mock("../MenuDesktop/MenuDesktop", () => ({
  MenuDesktop: () => <div data-testid="menu-desktop" />
}));

vi.mock("../MenuHamburger/MenuHamburger", () => ({
  MenuHamburger: () => <div data-testid="menu-hamburger" />
}));

vi.mock("../../../components/ThemeToggle/ThemeToggle", () => ({
  default: () => <div data-testid="theme-toggle" />
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should render the site logo/title with developer role", () => {
    render(<Navbar />);


    const logoLink = screen.getByRole("link", { name: /RAFAL BOBKO/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");


    expect(screen.getByText(/Fullstack Dev/i)).toBeInTheDocument();
  });

  it("should display all navigation integration points", () => {
    render(<Navbar />);


    expect(screen.getByTestId("menu-desktop")).toBeInTheDocument();
    expect(screen.getByTestId("menu-hamburger")).toBeInTheDocument();
    expect(screen.getByTestId("theme-toggle")).toBeInTheDocument();
  });

  it("should have correct accessibility landmarks", () => {
    render(<Navbar />);


    expect(screen.getByRole("banner")).toBeInTheDocument();

    expect(screen.getByRole("navigation", { name: /Main Navigation/i })).toBeInTheDocument();
  });


});