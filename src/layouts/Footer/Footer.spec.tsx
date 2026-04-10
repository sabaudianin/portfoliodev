import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Footer } from "./Footer";
import type { ReactNode, ComponentPropsWithoutRef } from "react";


vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: ReactNode; href: string } & ComponentPropsWithoutRef<"a">) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Footer Component", () => {
  it("should render the main heading with epic text", () => {
    render(<Footer />);

    const heading = screen.getByRole("heading", { name: /LET'S BUILD SOMETHING EPIC/i });
    expect(heading).toBeInTheDocument();
  });

  it("should have functional contact links (phone and email)", () => {
    render(<Footer />);

    const phoneLink = screen.getByRole("link", { name: /\+48 793 386 445/i });
    const emailLink = screen.getByRole("link", { name: /rafbobbob@gmail.com/i });

    expect(phoneLink).toHaveAttribute("href", "tel:+48793386445");
    expect(emailLink).toHaveAttribute("href", "mailto:rafbobbob@gmail.com");
  });

  it("should have correct social media links with security attributes", () => {
    render(<Footer />);

    const githubLink = screen.getByRole("link", { name: /github/i });
    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });

    expect(githubLink).toHaveAttribute("href", "https://github.com/sabaudianin");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");

    expect(linkedinLink).toHaveAttribute("href", "https://www.linkedin.com/in/rafal-bobko-569388234");
  });

  it("should display the current year in copyright notice", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear().toString();

    const copyright = screen.getByText(new RegExp(currentYear, "i"));
    expect(copyright).toBeInTheDocument();
    expect(copyright).toHaveTextContent(/Rafał Bobko/i);
  });

  it("should render design attribution and privacy link", () => {
    render(<Footer />);

    expect(screen.getByText(/Design: RafBob/i)).toBeInTheDocument();
    const privacyLink = screen.getByRole("link", { name: /privacy policy/i });
    expect(privacyLink).toHaveAttribute("href", "/privacy");
  });
});