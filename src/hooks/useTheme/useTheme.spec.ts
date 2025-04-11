import { act, renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi } from "vitest";
import { useTheme } from "./useTheme";

describe("Test useThemeHook", () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove("dark");
  });
  test("render with initial value", () => {
    const { result } = renderHook(useTheme);
    expect(result.current.theme).toBe("dark");
    expect(result.current.mounted).toBe(true);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
  });

  it("should initialize with light theme from localStorage", () => {
    localStorage.setItem("theme", "light");
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
  it("should toggle theme to light", () => {
    localStorage.setItem("theme", "dark");
    const { result } = renderHook(() => useTheme());

    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe("light");
    expect(localStorage.getItem("theme")).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
  });
});
