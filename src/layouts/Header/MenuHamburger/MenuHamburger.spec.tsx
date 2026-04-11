import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";
import { MenuHamburger } from "./MenuHamburger";
import { usePathname } from "next/navigation";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

// 1. Mockowanie Next Navigation
vi.mock("next/navigation", () => ({
    usePathname: vi.fn(),
}));

// Mockowanie linków
vi.mock("../../../types/navlinks", () => ({
    Links: [
        { id: 1, title: "Home", url: "/", ariaLabel: "Go to home" },
        { id: 2, title: "Projects", url: "/projects", ariaLabel: "Go to projects" },
    ],
}));

// 2. Mockowanie Framer Motion
vi.mock("framer-motion", () => ({
    motion: {
        div: ({ children, ...props }: ComponentPropsWithoutRef<"div">) => <div {...props}>{children}</div>,
        nav: ({ children, ...props }: ComponentPropsWithoutRef<"nav">) => <nav {...props}>{children}</nav>,
        li: ({ children, ...props }: ComponentPropsWithoutRef<"li">) => <li {...props}>{children}</li>,
    },
    AnimatePresence: ({ children }: { children: ReactNode }) => <>{children}</>,
}));

// 3. Mockowanie Next Link
vi.mock("next/link", () => ({
    default: ({ children, href, onClick, ...props }: { children: ReactNode; href: string; onClick?: () => void } & ComponentPropsWithoutRef<"a">) => (
        <a href={href} onClick={(e) => { e.preventDefault(); onClick?.(); }} {...props}>
            {children}
        </a>
    ),
}));

describe("MenuHamburger Component", () => {
    const user = userEvent.setup();

    beforeEach(() => {
        vi.clearAllMocks();
        (usePathname as Mock).mockReturnValue("/");
    });

    it("should be closed by default", () => {
        render(<MenuHamburger />);
        expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("should open the menu when clicking the hamburger button", async () => {
        render(<MenuHamburger />);

        const button = screen.getByRole("button");
        await user.click(button);

        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
    });

    it("should close the menu when clicking a link", async () => {
        render(<MenuHamburger />);

        const button = screen.getByRole("button");
        await user.click(button);

        const link = screen.getByText("Projects");
        await user.click(link);

        expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("should toggle between MenuIcon and CloseIcon styles", async () => {
        const { container } = render(<MenuHamburger />);

        const button = screen.getByRole("button");

        expect(container.querySelector("svg")).toBeInTheDocument();

        await user.click(button);

    });

    it("should highlight the active link based on pathname", async () => {
        (usePathname as Mock).mockReturnValue("/projects");
        render(<MenuHamburger />);

        const button = screen.getByRole("button");
        await user.click(button);

        const projectsLink = screen.getByText("Projects");
        const homeLink = screen.getByText("Home");


        expect(projectsLink).toHaveClass("text-cyan-400");

        expect(homeLink).toHaveClass("text-white");
    });
});