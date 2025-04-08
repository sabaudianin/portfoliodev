import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Education } from "./Eductaion";
import * as themeHook from "@/hooks/useTheme";

describe("Education", () => {
  beforeEach(() => {
    vi.spyOn(themeHook, "useTheme").mockReturnValue({
      mounted: true,
      theme: "dark",
      toggleTheme: vi.fn(),
    });
  });

  it("renders heading and all education entries", () => {
    render(<Education />);
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/CodersLab/i)).toBeInTheDocument();
    expect(screen.getByText(/Postgraduate studies/i)).toBeInTheDocument();
    expect(screen.getByText(/Emergency Medical Services/i)).toBeInTheDocument();
  });

  it("returns null when not mounted", () => {
    vi.spyOn(themeHook, "useTheme").mockReturnValue({
      mounted: false,
      theme: "light",
      toggleTheme: vi.fn(),
    });

    const { container } = render(<Education />);
    expect(container.firstChild).toBeNull();
  });
});
