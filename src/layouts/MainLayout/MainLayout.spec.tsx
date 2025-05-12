import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MainLayout } from "./MainLayout";

// Moc each component test separatly
vi.mock("@/layouts/Header/Navbar/Navbar/Navbar", () => ({
  Navbar: () => <div data-testid="navbar" />,
}));
vi.mock("@/layouts/Footer/Footer", () => ({
  Footer: () => <div data-testid="footer" />,
}));

describe("MainLayout", () => {
  it("renders layout structure with children", () => {
    render(
      <MainLayout>
        <p>Test Content</p>
      </MainLayout>
    );

    expect(screen.getByTestId("navbar")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
