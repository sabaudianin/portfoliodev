import { render, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import Typewriter from "./Typewriter";

const SPEED = 150;

describe("Typewriter Component", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  const getTypedText = (container: HTMLElement) =>
    container.querySelector(".bg-clip-text")?.textContent;

  it("should type text character by character and finish correctly", async () => {
    const text = "Dev";
    const { container } = render(<Typewriter text={text} />);


    expect(getTypedText(container)).toBe("");


    for (let i = 1; i <= text.length; i++) {
      await act(async () => {
        await vi.advanceTimersByTimeAsync(SPEED);
      });
      expect(getTypedText(container)).toBe(text.slice(0, i));
    }


    await act(async () => {
      await vi.advanceTimersByTimeAsync(SPEED);
    });
    expect(getTypedText(container)).toBe(text);
  });

  it("should render cursor with correct styles", () => {
    const { container } = render(<Typewriter text="Test" />);
    const cursor = container.querySelector(".animate-pulse");

    expect(cursor).toBeInTheDocument();
    expect(cursor).toHaveClass("bg-cyan-400");
  });

  it("should handle empty string", () => {
    const { container } = render(<Typewriter text="" />);
    expect(getTypedText(container)).toBe("");
  });
});