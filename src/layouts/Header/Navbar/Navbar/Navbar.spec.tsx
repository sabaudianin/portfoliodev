import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Navbar } from "./Navbar";

vi.mock("@/hooks/useTheme", () => ({
  useTheme: () => ({
    theme: "light",
    mounted: true,
    toggleTheme: vi.fn(),
  }),
}));

describe("Navbar test", () => {
  beforeEach(() => {
    render(<Navbar />);
  });

  it("renders title and home link", () => {
    const title = screen.getByText("Rafal Bobko");
    expect(title).toBeInTheDocument();
    const link = screen.getByRole("link", { name: "Rafal Bobko" });
    expect(link).toHaveAttribute("href", "/");
  });

  it("should simulate navigation by clicking the title link", async () => {
    const user = userEvent.setup();
    const link = screen.getByRole("link", { name: "Rafal Bobko" });
    await user.click(link);
  });
});
