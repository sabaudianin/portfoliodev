// import { render, screen } from "@testing-library/react";
// import { describe, it, expect } from "vitest";
// import { TechSkills } from "./TechSkills";

// describe("TechSkills component", () => {
//   it("renders section title", () => {
//     render(<TechSkills />);
//     expect(screen.getByText(/Skills/i)).toBeInTheDocument();
//   });

//   it("renders all category titles", () => {
//     render(<TechSkills />);
//     expect(screen.getByText(/Frontend/i)).toBeInTheDocument();
//     expect(screen.getByText(/Dev Tools/i)).toBeInTheDocument();
//     expect(screen.getByText(/Tests/i)).toBeInTheDocument();
//   });

//   it("renders all icons with correct links", () => {
//     render(<TechSkills />);
//     const links = screen.getAllByRole("link");
//     expect(links.length).toBeGreaterThan(10); // minimalnie 10 linków
//   });

//   it("renders Playwright image icon", () => {
//     render(<TechSkills />);
//     const playwright = screen.getByAltText(/Playwright/i);
//     expect(playwright).toBeInTheDocument();
//   });
// });
