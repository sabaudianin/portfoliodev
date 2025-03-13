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
});
