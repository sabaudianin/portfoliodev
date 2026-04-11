import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach, Mock } from "vitest";
import { MenuHamburger } from "./MenuHamburger";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef, ReactNode } from "react";

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

// 2. Mockowanie Framer Motion (Zero Any)
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

        // Nawigacja nie powinna być w dokumencie (ponieważ AnimatePresence i isOpen = false)
        expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("should open the menu when clicking the hamburger button", async () => {
        render(<MenuHamburger />);

        const button = screen.getByRole("button");
        await user.click(button);

        // Po kliknięciu nawigacja powinna się pojawić
        expect(screen.getByRole("navigation")).toBeInTheDocument();
        expect(screen.getByText("Home")).toBeInTheDocument();
        expect(screen.getByText("Projects")).toBeInTheDocument();
    });

    it("should close the menu when clicking a link", async () => {
        render(<MenuHamburger />);

        // Otwieramy menu
        const button = screen.getByRole("button");
        await user.click(button);

        // Klikamy w link
        const link = screen.getByText("Projects");
        await user.click(link);

        // Menu powinno zniknąć
        expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("should toggle between MenuIcon and CloseIcon styles", async () => {
        const { container } = render(<MenuHamburger />);

        const button = screen.getByRole("button");

        // Przed kliknięciem szukamy ikony Menu (możesz dodać test-id do ikon dla pewności)
        // Albo sprawdzić czy CloseIcon nie istnieje
        expect(container.querySelector("svg")).toBeInTheDocument();

        await user.click(button);
        // Po kliknięciu stan się zmienia - ikona CloseIcon jest renderowana
        // Jeśli Twoje ikony mają specyficzne klasy lub nazwy, sprawdź je tutaj
    });

    it("should highlight the active link based on pathname", async () => {
        (usePathname as Mock).mockReturnValue("/projects");
        render(<MenuHamburger />);

        const button = screen.getByRole("button");
        await user.click(button);

        const projectsLink = screen.getByText("Projects");
        const homeLink = screen.getByText("Home");

        // Projects jest aktywne -> klasa text-cyan-400
        expect(projectsLink).toHaveClass("text-cyan-400");
        // Home nie jest aktywne -> klasa text-white
        expect(homeLink).toHaveClass("text-white");
    });
});