import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

//mockowanie hooka `useTheme` w Vitest
vi.mock("@/hooks/useTheme");

describe("ThemeToggle Component", () => {
  it("should render button when mounted", () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should apply correct class for light theme", () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveClass("bg-gray-200");
  });

  it("should apply correct class for dark theme", () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "dark",
      mounted: true,
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.getByRole("button")).toHaveClass("dark:bg-gray-800");
  });

  it("should call toggleTheme function when clicked", async () => {
    const toggleThemeMock = vi.fn();
    const user = userEvent.setup();

    vi.mocked(useTheme).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggle />);
    const button = screen.getByRole("button");
    await user.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });

  it("should not render button when not mounted", () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "light",
      mounted: false,
      toggleTheme: vi.fn(),
    });

    render(<ThemeToggle />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
