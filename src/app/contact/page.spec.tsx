import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Contact from "./page";

// 1. Mockowanie stałtych linków kontaktowych
vi.mock("@/utils/constans/contactLinks", () => ({
  contactLinks: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: <span data-testid="icon-linkedin" /> },
    { name: "GitHub", url: "https://github.com", icon: <span data-testid="icon-github" /> },
  ],
}));

// 2. Mockowanie ContactForm (nie chcemy testować logiki formularza tutaj)
vi.mock("./contactForm/ContactForm", () => ({
  ContactForm: () => <div data-testid="mock-contact-form" />,
}));

// 3. Mockowanie next/link 
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

describe("Contact Page Component", () => {
  it("should render the main title and description", () => {
    render(<Contact />);

    expect(screen.getByText(/Let's Contact/i)).toBeInTheDocument();
    expect(screen.getByText(/reach out!/i)).toBeInTheDocument();
  });

  it("should render social media links with correct accessibility attributes", () => {
    render(<Contact />);

    const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
    const githubLink = screen.getByRole("link", { name: /github/i });

    expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com");
    expect(githubLink).toHaveAttribute("href", "https://github.com");


    expect(linkedinLink).toHaveAttribute("target", "_blank");
    expect(linkedinLink).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("should contain the icons within social links", () => {
    render(<Contact />);

    expect(screen.getByTestId("icon-linkedin")).toBeInTheDocument();
    expect(screen.getByTestId("icon-github")).toBeInTheDocument();
  });

  it("should render the ContactForm component", () => {
    render(<Contact />);

    expect(screen.getByTestId("mock-contact-form")).toBeInTheDocument();
  });

  it("should have a background blur element for visual style", () => {
    const { container } = render(<Contact />);
    const blurElement = container.querySelector('.blur-\\[120px\\]');
    expect(blurElement).toBeInTheDocument();
  });
});