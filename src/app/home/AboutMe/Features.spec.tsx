import { render, screen } from "@testing-library/react";
import Features from "./Features";
import { vi } from "vitest";

vi.mock("@/utils/constans/features", () => ({
  features: [
    {
      title: "Test Features",
      icon: <span data-testid="test-icon">Test Icon</span>,
      description: "Test Description",
      href: "/test",
    },
  ],
}));

describe("Features Componet", () => {
  it("render heading", () => {
    render(<Features />);
    expect(screen.getByText(/About Me Summart/i)).toBeInTheDocument();
    expect(
      screen.getByText(/A quick overview of who I am and what I do/i)
    ).toBeInTheDocument();
  });
  it("renders features", () => {
    render(<Features />);
    expect(screen.getByText(/Test Features/i)).toBeInTheDocument();
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });
  it("renders link", () => {
    render(<Features />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/test");
  });
});
