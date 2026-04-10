import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import type { ComponentProps, HTMLAttributes } from "react";
import Image from "next/image";
import Hero from "./Hero";


// mock next/image
type ImageProps = ComponentProps<typeof Image>;
vi.mock("next/image", () => ({
  /* eslint-disable @next/next/no-img-element */
  default: (props: ImageProps) => <img {...props} />,
}));

// mock framer-motion

type DivProps = HTMLAttributes<HTMLDivElement>;
type PProps = HTMLAttributes<HTMLParagraphElement>;
type H2Props = HTMLAttributes<HTMLHeadingElement>;
vi.mock("framer-motion", () => ({
  motion: {
    div: (props: DivProps) => <div {...props} />,
    p: (props: PProps) => <p {...props} />,
    h2: (props: H2Props) => <h2 {...props} />,
  },
}));

describe("Hero Component", () => {
  it("should render hero content", () => {
    render(<Hero />);

    expect(screen.getByText(/Hi there, I'm/i)).toBeInTheDocument();

    expect(
      screen.getByRole("img", { name: "Rafal Bobko" })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /see my projects/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /download cv/i })
    ).toBeInTheDocument();
  });
});