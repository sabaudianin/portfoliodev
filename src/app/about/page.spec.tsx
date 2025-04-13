import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import AboutMe from "./page";

describe("AboutMe Page", () => {
  it("renders the intro text", () => {
    render(<AboutMe />);
    expect(screen.getByText(/Take a look at what I do/i)).toBeInTheDocument();
  });

  it("renders the Skills, Education and Experience sections", () => {
    render(<AboutMe />);

    expect(screen.getByText(/Skills/i)).toBeInTheDocument();
    expect(screen.getByText(/Education/i)).toBeInTheDocument();
    expect(screen.getByText(/Experience Timeline/i)).toBeInTheDocument();
  });
});
