import { render, screen, } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, } from "vitest";
import type { Mock } from "vitest";
import ThemeToggle from "./ThemeToggle";
import type { ComponentPropsWithoutRef, ReactNode } from "react";


vi.mock("@/hooks/useTheme/useTheme", () => ({
  useTheme: vi.fn(),
}));


import { useTheme } from "@/hooks/useTheme/useTheme";


vi.mock("framer-motion", () => ({
  motion: {
    div: ({ children, ...props }: ComponentPropsWithoutRef<"div">) => (
      <div {...props}>{children}</div>
    ),
  },
  AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

describe("ThemeToggle Component", () => {
  const toggleThemeMock = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return a placeholder (skeleton) when not mounted", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      mounted: false,
      toggleTheme: toggleThemeMock,
    });

    const { container } = render(<ThemeToggle />);

    expect(container.firstChild).toHaveClass("size-12");
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("should render light mode icon and correct aria-label", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggle />);

    const button = screen.getByRole("button", { name: /switch to dark mode/i });
    expect(button).toBeInTheDocument();

    const icon = button.querySelector("svg");
    expect(icon).toHaveClass("text-blue-600");
  });

  it("should render dark mode icon and correct aria-label", () => {
    (useTheme as Mock).mockReturnValue({
      theme: "dark",
      mounted: true,
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggle />);

    const button = screen.getByRole("button", { name: /switch to light mode/i });
    expect(button).toBeInTheDocument();

    const icon = button.querySelector("svg");
    expect(icon).toHaveClass("text-yellow-400");
  });

  it("should call toggleTheme function on click", async () => {
    const user = userEvent.setup();
    (useTheme as Mock).mockReturnValue({
      theme: "light",
      mounted: true,
      toggleTheme: toggleThemeMock,
    });

    render(<ThemeToggle />);
    const button = screen.getByRole("button");

    await user.click(button);

    expect(toggleThemeMock).toHaveBeenCalledTimes(1);
  });
});