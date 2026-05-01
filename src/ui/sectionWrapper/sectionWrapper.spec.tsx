import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { SectionWrapper } from "./sectionWrapper";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type MockSectionProps = ComponentPropsWithoutRef<"section"> & {
    children?: ReactNode;
};

vi.mock("framer-motion", () => ({
    motion: {
        section: ({ children, ...props }: MockSectionProps) => (
            <section {...props}>{children}</section>
        ),
    },
}));

describe("SectionWrapper", () => {
    it("renders children", () => {
        render(
            <SectionWrapper id="about">
                <p>Hello</p>
            </SectionWrapper>
        );

        expect(screen.getByText("Hello")).toBeInTheDocument();
    });

    it("sets correct id", () => {
        render(
            <SectionWrapper id="pricing">
                <p>Content</p>
            </SectionWrapper>
        );

        expect(document.getElementById("pricing")).toBeInTheDocument();
    });

    it("uses default cyan glow", () => {
        render(
            <SectionWrapper id="test">
                <p>Content</p>
            </SectionWrapper>
        );

        expect(document.querySelector(".bg-cyan-500\\/10")).toBeInTheDocument();
    });

    it("uses blue glow when passed", () => {
        render(
            <SectionWrapper id="test" glowColor="blue">
                <p>Content</p>
            </SectionWrapper>
        );

        expect(document.querySelector(".bg-blue-500\\/10")).toBeInTheDocument();
    });

    it("merges custom className", () => {
        render(
            <SectionWrapper id="test" className="py-20">
                <p>Content</p>
            </SectionWrapper>
        );

        const section = document.getElementById("test");

        expect(section).toHaveClass("py-20");
    });
});