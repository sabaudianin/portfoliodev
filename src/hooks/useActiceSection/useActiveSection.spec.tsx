import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useActiveSection } from "./useActiveSection";

describe("useActiveSection Hook", () => {
    // 1. Definiujemy typy dla mocka obserwatora
    let observeMock: ReturnType<typeof vi.fn>;
    let disconnectMock: ReturnType<typeof vi.fn>;
    let callback: (entries: { isIntersecting: boolean; target: { id: string } }[]) => void;

    beforeEach(() => {
        observeMock = vi.fn();
        disconnectMock = vi.fn();

        // 2. Mockujemy globalny IntersectionObserver
        global.IntersectionObserver = vi.fn().mockImplementation((cb) => {
            callback = cb; // Przechwytujemy funkcję callback, by móc ją ręcznie wywołać
            return {
                observe: observeMock,
                disconnect: disconnectMock,
            };
        });
    });

    it("should observe elements provided in sectionIds", () => {

        const div = document.createElement("div");
        div.id = "about";
        document.body.appendChild(div);

        renderHook(() => useActiveSection(["about"]));

        expect(observeMock).toHaveBeenCalledWith(div);
        document.body.removeChild(div);
    });

    it("should update activeSection when an element is intersecting", () => {
        const { result } = renderHook(() => useActiveSection(["about"]));


        act(() => {
            callback([{ isIntersecting: true, target: { id: "about" } }]);
        });

        expect(result.current).toBe("about");
    });

    it("should disconnect observer on unmount", () => {
        const { unmount } = renderHook(() => useActiveSection(["about"]));

        unmount();

        expect(disconnectMock).toHaveBeenCalled();
    });
});