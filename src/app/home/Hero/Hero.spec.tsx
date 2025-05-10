import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";
import { useTheme } from "@/hooks/useTheme/useTheme";

// Mock useTheme
vi.mock("@/hooks/useTheme");

describe("Hero Component", () => {
  it("should not render if not mounted", () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "light",
      mounted: false,
      toggleTheme: vi.fn(),
    });

    render(<Hero />);
    expect(screen.queryByText("Hi there, I am")).not.toBeInTheDocument();
  });

  it("should render hero content when mounted", () => {
    vi.mocked(useTheme).mockReturnValue({
      theme: "dark",
      mounted: true,
      toggleTheme: vi.fn(),
    });

    render(<Hero />);
    expect(screen.getByText("Hi there, I am")).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: "Rafal Bobko" })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /hire me/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /about me/i })
    ).toBeInTheDocument();
  });
});
