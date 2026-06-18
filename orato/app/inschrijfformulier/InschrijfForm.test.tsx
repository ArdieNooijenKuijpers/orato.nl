import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import InschrijfForm from "./InschrijfForm";
import { inschrijfDataOptions } from "./inschrijfData";

vi.mock("../components/ardie/QuoteBadge", () => ({
  default: () => <div data-testid="quote-badge" />,
}));

vi.mock("../components/TurnstileWidget", async () => {
  const React = await import("react");
  const MockTurnstileWidget = ({
    onVerify,
  }: {
    onVerify: (token: string) => void;
  }) => {
    React.useEffect(() => onVerify("test-token"), [onVerify]);
    return <div aria-label="Beveiligingscontrole" />;
  };

  return {
    default: MockTurnstileWidget,
  };
});

const fillBaseRegistrationFields = async (user: ReturnType<typeof userEvent.setup>) => {
  await user.click(screen.getByRole("radio", { name: inschrijfDataOptions[0] }));
  await user.type(screen.getByPlaceholderText("Voornaam Achternaam"), "Ada Lovelace");
  await user.type(screen.getByPlaceholderText("naam@voorbeeld.nl"), "ada@example.com");
  await user.type(screen.getByPlaceholderText("+31 6 12345678"), "+31 6 12345678");
  await user.click(screen.getByRole("checkbox", { name: /ik ga akkoord/i }));
};

describe("InschrijfForm", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({ success: true }),
      }),
    );
  });

  it("uses the initial selected date and keeps it selected after submit reset", async () => {
    const user = userEvent.setup();
    const initialSelectedDate = inschrijfDataOptions[1];

    render(<InschrijfForm initialSelectedDate={initialSelectedDate} />);

    expect(screen.getByRole("radio", { name: initialSelectedDate })).toBeChecked();

    await user.type(screen.getByPlaceholderText("Voornaam Achternaam"), "Ada Lovelace");
    await user.type(screen.getByPlaceholderText("naam@voorbeeld.nl"), "ada@example.com");
    await user.type(screen.getByPlaceholderText("+31 6 12345678"), "+31 6 12345678");
    await user.click(screen.getByRole("radio", { name: /privé/i }));
    await user.click(screen.getByRole("radio", { name: /e-mailadres/i }));
    await user.click(screen.getByRole("checkbox", { name: /zelfde als persoonlijke e-mailadres/i }));
    await user.click(screen.getByRole("checkbox", { name: /ik ga akkoord/i }));
    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(screen.queryByText("Kies een dag.")).not.toBeInTheDocument();
    expect(
      await screen.findByText("Dank je wel! Je inschrijving is verzonden."),
    ).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: initialSelectedDate })).toBeChecked();
  });

  it("shows the required validation errors when the form is submitted empty", async () => {
    const user = userEvent.setup();

    render(<InschrijfForm />);

    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(screen.getByText("Kies een dag.")).toBeInTheDocument();
    expect(screen.getByText("Vul je naam in.")).toBeInTheDocument();
    expect(screen.getByText("Vul een geldig e-mailadres in.")).toBeInTheDocument();
    expect(screen.getByText("Vul een telefoonnummer in.")).toBeInTheDocument();
    expect(screen.getByText("Kies zakelijk of privé.")).toBeInTheDocument();
    expect(screen.getByText("Kies waar de factuur naartoe moet.")).toBeInTheDocument();
    expect(screen.getByText("Je moet akkoord gaan met de voorwaarden.")).toBeInTheDocument();
    expect(screen.queryByText("Bevestig dat je geen robot bent.")).not.toBeInTheDocument();
  });

  it("requires business invoicing details and can copy the personal email into the invoice email field", async () => {
    const user = userEvent.setup();

    render(<InschrijfForm />);

    await fillBaseRegistrationFields(user);
    await user.click(screen.getByRole("radio", { name: /zakelijk/i }));
    await user.click(screen.getByRole("radio", { name: /e-mailadres/i }));

    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(
      screen.getByText("Vul de organisatienaam in voor zakelijke facturatie."),
    ).toBeInTheDocument();
    expect(screen.getByText("Vul een geldig factuur e-mailadres in.")).toBeInTheDocument();

    await user.type(screen.getByPlaceholderText("Organisatienaam"), "Orato");
    await user.click(
      screen.getByRole("checkbox", { name: /zelfde als persoonlijke e-mailadres/i }),
    );

    expect((screen.getByLabelText(/Factuur e-mailadres/i) as HTMLInputElement).value).toBe(
      "ada@example.com",
    );

    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(
      await screen.findByText("Dank je wel! Je inschrijving is verzonden."),
    ).toBeInTheDocument();
    expect((screen.getByPlaceholderText("Voornaam Achternaam") as HTMLInputElement).value).toBe("");
    expect((screen.getByPlaceholderText("Organisatienaam") as HTMLInputElement).value).toBe("");
    expect((screen.getByPlaceholderText("naam@voorbeeld.nl") as HTMLInputElement).value).toBe("");
    expect(screen.queryByLabelText(/Factuur e-mailadres/i)).toBeNull();
    expect(screen.queryByLabelText(/Factuur postadres/i)).toBeNull();
  });

  it("requires a post address when the invoice is sent by post", async () => {
    const user = userEvent.setup();

    render(<InschrijfForm />);

    await fillBaseRegistrationFields(user);
    await user.click(screen.getByRole("radio", { name: /privé/i }));
    await user.click(screen.getByRole("radio", { name: /postadres/i }));

    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(screen.getByText("Vul een postadres in voor de factuur.")).toBeInTheDocument();
    expect(screen.queryByText("Vul de organisatienaam in voor zakelijke facturatie.")).toBeNull();

    await user.type(
      screen.getByPlaceholderText("Straat + huisnummer, postcode + plaats"),
      "Rutger van den Broeckelaan 3, 5671 EB Nuenen",
    );
    await user.click(screen.getByRole("button", { name: /verzenden/i }));

    expect(
      await screen.findByText("Dank je wel! Je inschrijving is verzonden."),
    ).toBeInTheDocument();
    expect((screen.getByPlaceholderText("Voornaam Achternaam") as HTMLInputElement).value).toBe("");
    expect(
      screen.queryByPlaceholderText("Straat + huisnummer, postcode + plaats"),
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Factuur e-mailadres/i)).toBeNull();
    expect(screen.queryByLabelText(/Factuur postadres/i)).toBeNull();
  });
});
