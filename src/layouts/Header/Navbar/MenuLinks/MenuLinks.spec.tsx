import React from "react";
import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import MenuLinks from "./MenuLinks";
import { Links } from "../../../../types/navlinks";

describe("Component MenuLinks", () => {
  beforeEach(() => {
    render(<MenuLinks />);
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
