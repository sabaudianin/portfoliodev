import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MenuDesktop from "./MenuDesktop.jsx";
import { Links } from "../../../types/navlinks";

describe("Component MenuLinks", () => {
  beforeEach(() => {
    render(<MenuDesktop />);
  });

  it("renders all links correctly", () => {
    Links.forEach((link) => {
      expect(
        screen.getByRole("link", { name: link.title })
      ).toBeInTheDocument();
    });
  });

  it("has correct href attributes", () => {
    Links.forEach((link) => {
      expect(screen.getByRole("link", { name: link.title })).toHaveAttribute(
        "href",
        link.url
      );
    });
  });
});
