import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi, beforeEach } from "vitest";
import type { Mock } from "vitest";
import { ContactForm } from "./ContactForm";

global.fetch = vi.fn();

describe("ContactForm Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  const mockFetchResponse = (ok: boolean, data: object) => {
    (global.fetch as Mock).mockResolvedValue({
      ok,
      // trzeba symulować funkcję json() jako asynchroniczną
      json: async () => data,
    });
  };

  it("should handle server error message from API", async () => {
    const user = userEvent.setup();
    const errorMessage = "Email service is down";

    // Mockujemy 500 z konkretnym body
    mockFetchResponse(false, { message: errorMessage });

    render(<ContactForm />);

    // Wypełniamy formularz 
    await user.type(screen.getByPlaceholderText(/name.../i), "Test User");
    await user.type(screen.getByPlaceholderText(/email.../i), "test@test.com");
    await user.type(screen.getByPlaceholderText(/write your message here/i), "Message content");

    const submitBtn = screen.getByRole("button", { name: /submit message/i });
    await user.click(submitBtn);


    const serverErrorElement = await screen.findByText(errorMessage);
    expect(serverErrorElement).toBeInTheDocument();
    expect(serverErrorElement).toHaveClass("text-red-400");
  });
});