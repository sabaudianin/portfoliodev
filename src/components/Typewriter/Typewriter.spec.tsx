import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Typewriter from "./Typewriter";

describe("Typewriter component", () => {
  const text = "Hello World!";

  beforeEach(() => {
    vi.useFakeTimers();
  });

  it("should start with empty text and show cursor", () => {
    render(<Typewriter text={text} />);
    expect(screen.getByText("|")).toBeInTheDocument();
    expect(screen.getByText("|").previousSibling?.textContent).toBe("");
  });

  it("should type each character over time", () => {
    render(<Typewriter text={text} />);

    for (let i = 0; i < text.length; i++) {
      vi.advanceTimersByTime(200);
      const typed = text.slice(0, i + 1);
      expect(screen.getByText("|").previousSibling?.textContent).toBe(typed);
    }
  });

  it("should stop after full text is displayed", () => {
    render(<Typewriter text={text} />);
    vi.advanceTimersByTime(200 * text.length);
    expect(screen.getByText("|").previousSibling?.textContent).toBe(text);
  });
});
