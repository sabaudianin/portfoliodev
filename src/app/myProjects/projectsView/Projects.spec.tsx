import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Projects } from "./Projects";

// temporary mock
vi.mock("@/utils/constans/projects", () => ({
  projects: [
    {
      title: "Test Project",
      image: "/test.png",
      description: "Test description",
      repo: "https://github.com/test/repo",
    },
  ],
}));

describe("Projects Component", () => {
  it("renders section with title", () => {
    render(<Projects />);
    expect(
      screen.getByRole("heading", { name: /my projects/i })
    ).toBeInTheDocument();
  });

  it("renders project cards", () => {
    render(<Projects />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /view repository/i })
    ).toHaveAttribute("href", "https://github.com/test/repo");
  });
});
