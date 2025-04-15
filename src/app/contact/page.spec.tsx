import { render, screen } from "@testing-library/react";
import Contact from "./page";
import { describe, it, expect } from "vitest";

// MOCK MainLayout i ContactForm
vi.mock("@/layouts/MainLayout/MainLayout", () => ({
  MainLayout: ({ children }: { children: React.ReactNode }) => (
    <div>{children}</div>
  ),
}));
vi.mock("./contactForm/ContactForm", () => ({
  ContactForm: () => <form>Mocked Form</form>,
}));

describe("Contact Page", () => {
  it("renders heading and contact icons", () => {
    render(<Contact />);
    expect(screen.getByText(/let’s contact/i)).toBeInTheDocument();
    expect(screen.getByText(/reliable developer/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/linkedin/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/github/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone/i)).toBeInTheDocument();
  });

  it("renders ContactForm", () => {
    render(<Contact />);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
