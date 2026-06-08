import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ContactForm from "./contactForm";

vi.mock("next/font/google", () => ({
  Noto_Serif_Display: () => ({ className: "mock-noto-serif-display" }),
}));

describe("ContactForm", () => {
  it("shows validation errors when required fields are missing", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(screen.getByText("Vul je naam in.")).toBeInTheDocument();
    expect(screen.getByText("Vul een geldig e-mailadres in.")).toBeInTheDocument();
    expect(screen.getByText("CAPTCHA is niet correct.")).toBeInTheDocument();
  });

  it("sanitizes the phone field while typing", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    const phoneInput = screen.getByLabelText(/telefoonnummer/i);
    await user.type(phoneInput, "+31 abc 6-12/34");

    expect((phoneInput as HTMLInputElement).value).toBe("+31  6-1234");
  });

  it("accepts a valid submission, shows success, and resets the form", async () => {
    const user = userEvent.setup();

    render(<ContactForm />);

    await user.type(screen.getByLabelText(/^naam/i), "Ada Lovelace");
    await user.type(screen.getByLabelText(/e-mailadres/i), "ada@example.com");
    await user.type(screen.getByLabelText(/telefoonnummer/i), "+31 6 12345678");
    await user.type(screen.getByLabelText(/organisatie/i), "Orato");
    await user.type(screen.getByLabelText(/bericht/i), "Ik wil graag contact.");
    await user.type(screen.getByLabelText(/captcha/i), "7");

    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(
      screen.getByText("Dank je wel! Je bericht is klaar om verzonden te worden."),
    ).toBeInTheDocument();
    expect((screen.getByLabelText(/^naam/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/e-mailadres/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/telefoonnummer/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/organisatie/i) as HTMLInputElement).value).toBe("");
    expect((screen.getByLabelText(/bericht/i) as HTMLTextAreaElement).value).toBe("");
    expect((screen.getByLabelText(/captcha/i) as HTMLInputElement).value).toBe("");
  });
});
