import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "@/hooks/useTheme/useTheme";

vi.mock("@/hooks/useTheme");

describe("ThemeToggle", () => {
  const setup = (theme: "light" | "dark", mounted = true, toggle = vi.fn()) => {
    vi.mocked(useTheme).mockReturnValue({
      theme,
      mounted,
      toggleTheme: toggle,
    });
    render(<ThemeToggle />);
    return { toggle };
  };

  it("does not render when not mounted", () => {
    setup("light", false);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("renders sun icon in dark mode", () => {
    setup("dark");
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button").innerHTML).toMatch(/path/);
  });

  it("renders moon icon in light mode", () => {
    setup("light");
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button").innerHTML).toMatch(/path/);
  });

  it("calls toggleTheme on click", async () => {
    const { toggle } = setup("light");
    const user = userEvent.setup();
    await user.click(screen.getByRole("button"));
    expect(toggle).toHaveBeenCalledTimes(1);
  });
});
