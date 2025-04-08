import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { useTheme } from "@/hooks/useTheme";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle";

//mockowanie hooka `useTheme` w Vitest
vi.mock("@/hooks/useTheme");

describe("ThemeToggle Component", () => {
  const renderWithMock = (
    theme: "light" | "dark",
    mounted = true,
    toggleTheme = vi.fn()
  ) => {
    vi.mocked(useTheme).mockReturnValue({ theme, mounted, toggleTheme });
    render(<ThemeToggle />);
    return { button: screen.queryByRole("button"), toggleTheme };
  };

  it("should render button when mounted", () => {
    const { button } = renderWithMock("light");
    expect(button).toBeInTheDocument();
  });

  it("should have correct SVG for light theme", () => {
    const { button } = renderWithMock("light");
    expect(button?.querySelector("path")?.getAttribute("d")).toContain(
      "21.752 15.002"
    );
  });

  it("should have correct SVG for dark theme", () => {
    const { button } = renderWithMock("dark");
    expect(button?.querySelector("path")?.getAttribute("d")).toContain(
      "12 2.25"
    );
  });

  it("should call toggleTheme function when clicked", async () => {
    const user = userEvent.setup();
    const { button, toggleTheme } = renderWithMock("light");
    if (button) await user.click(button);
    expect(toggleTheme).toHaveBeenCalledTimes(1);
  });

  it("should not render button when not mounted", () => {
    const { button } = renderWithMock("light", false);
    expect(button).not.toBeInTheDocument();
  });
});
