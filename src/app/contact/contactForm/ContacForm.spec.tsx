import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

describe("ContactForm Tests", () => {
  const user = userEvent.setup();
  it("render all form fields properly", async () => {
    render(<ContactForm />);

    const submitBtn = screen.getByRole("button", { name: /Submit/i });
    const nameInput = screen.getByPlaceholderText(/Name/i);
    const emailInput = screen.getByPlaceholderText(/Email/i);
    const messageInput = screen.getByPlaceholderText(
      /Write your message here/i
    );

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();

    await user.type(nameInput, "John Doe");
    await user.type(emailInput, "jd@xx.com");
    await user.type(messageInput, "Hello this is a test message.");
    await user.click(submitBtn);

    const successMessage = await screen.findByText(
      "Message sent successfully!"
    );
    expect(successMessage).toBeInTheDocument();
  });
});
