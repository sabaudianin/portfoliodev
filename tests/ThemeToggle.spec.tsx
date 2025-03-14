import { render, screen, fireEvent } from "@testing-library/react";
import ThemeToggle from "@/components/ThemeToggle";
import { vi } from "vitest";
import { useTheme } from "@/hooks/useTheme";

vi.mock("@/hooks/useTheme", () => ({
  useTheme: vi.fn(),
}));

describe("ThemeToggle component Tests", () => {
  it("Should render component", () => {
    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("render theme icon", () => {
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveClass("bg-gray-200");
  });

  it("Toggle theme between dark/light", () => {
    const toggleThemeMock = vi.fn();
    (useTheme as jest.Mock).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});
