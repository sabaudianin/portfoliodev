import { render, fireEvent } from "@testing-library/react";
import { vi, describe, it, expect } from "vitest";
import { MouseGlow } from "./mouseGlow";

describe("MouseGlow", () => {
    it("renders with initial hidden position", () => {
        render(<MouseGlow />);

        const glow = document.querySelector(".glow-cursor");

        expect(glow).toBeInTheDocument();
        expect(glow).toHaveStyle({
            transform: "translate(-1200px, -1200px)",
        });
    });

    it("updates position on mouse move", () => {
        render(<MouseGlow />);

        const glow = document.querySelector(".glow-cursor");

        fireEvent.mouseMove(window, {
            clientX: 300,
            clientY: 500,
        });

        expect(glow).toHaveStyle({
            transform: "translate(100px, 300px)",
        });
    });

    it("removes event listener on unmount", () => {
        const removeSpy = vi.spyOn(window, "removeEventListener");

        const { unmount } = render(<MouseGlow />);

        unmount();

        expect(removeSpy).toHaveBeenCalledWith(
            "mousemove",
            expect.any(Function)
        );
    });
});