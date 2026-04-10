import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Projects from "./page";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// 1. Mockowanie danych
vi.mock("@/utils/constans/projects", () => ({
  projects: [
    {
      title: "E-commerce Platform",
      description: "A full-stack online store.",
      image: "/test-image.jpg",
      link: "https://demo.com",
      repo: "https://github.com/repo",
    },
  ],
}));



interface NextImageProps extends ComponentPropsWithoutRef<"img"> {


  src: string;
  alt: string;
}
// 2. Mockowanie next/image
vi.mock("next/image", () => ({
  default: ({ src, alt, ...props }: NextImageProps) => (

    <img src={src} alt={alt} {...props} />
  ),
}));

// 3. Mockowanie Next Link
vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

// 4. Mockowanie Framer Motion
vi.mock("framer-motion", () => ({
  motion: {
    h2: ({ children, ...props }: ComponentPropsWithoutRef<"h2">) => (
      <h2 {...props}>{children}</h2>
    ),
    div: ({ children, ...props }: ComponentPropsWithoutRef<"div">) => (
      <div {...props}>{children}</div>
    ),
  },
}));

describe("Projects Component", () => {
  it("should render the section heading correctly", () => {
    render(<Projects />);
    expect(screen.getByText(/Featured/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
  });

  it("should render project details correctly", () => {
    render(<Projects />);

    expect(screen.getByText("E-commerce Platform")).toBeInTheDocument();
    expect(screen.getByText("A full-stack online store.")).toBeInTheDocument();
  });

  it("should render the project image with correct attributes", () => {
    render(<Projects />);

    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("alt", "E-commerce Platform");
    expect(image).toHaveAttribute("src", expect.stringContaining("test-image.jpg"));
  });

  it("should have functioning links for Demo and Code", () => {
    render(<Projects />);

    const demoLink = screen.getByRole("link", { name: /live demo/i });
    const repoLink = screen.getByRole("link", { name: /code/i });

    expect(demoLink).toHaveAttribute("href", "https://demo.com");
    expect(repoLink).toHaveAttribute("href", "https://github.com/repo");


    expect(demoLink).toHaveAttribute("target", "_blank");
    expect(repoLink).toHaveAttribute("target", "_blank");
  });

  it("should apply group hover classes for styling", () => {
    const { container } = render(<Projects />);
    const projectCard = container.querySelector('.group.card-modern');
    expect(projectCard).toHaveClass('overflow-hidden', 'transition-all');
  });
});