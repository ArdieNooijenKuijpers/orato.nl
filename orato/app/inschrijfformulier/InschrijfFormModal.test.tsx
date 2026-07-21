import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import InschrijfFormModal from "./InschrijfFormModal";
import { inschrijfDataOptions, isInschrijfDateInPast } from "./inschrijfData";

vi.mock("./InschrijfForm", () => ({
  default: ({
    title,
    description,
    compact,
    initialSelectedDate,
  }: {
    title: string;
    description: string;
    compact: boolean;
    initialSelectedDate?: string;
  }) => (
    <div
      data-testid="inschrijf-form"
      data-title={title}
      data-description={description}
      data-compact={String(compact)}
      data-initial-selected-date={initialSelectedDate}
    />
  ),
}));

describe("InschrijfFormModal", () => {
  beforeEach(() => {
    document.body.style.cssText = "";
    document.documentElement.style.cssText = "";
    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 240,
    });
    vi.spyOn(window.history, "pushState");
    vi.spyOn(window.history, "back").mockImplementation(() => {});
  });

  it("opens the dialog, locks scrolling, and forwards its form configuration", async () => {
    const user = userEvent.setup();
    const availableDate = inschrijfDataOptions.find((date) => !isInschrijfDateInPast(date));

    if (!availableDate) {
      throw new Error("Voeg een toekomstige Speaking Circle-datum toe voordat de modaltest draait.");
    }

    render(
      <InschrijfFormModal
        triggerLabel="Open inschrijving"
        title="Testinschrijving"
        description="Testomschrijving"
        initialSelectedDate={availableDate}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Open inschrijving" }));

    expect(window.history.pushState).toHaveBeenCalledWith(
      expect.objectContaining({ oratoInschrijfFormModal: true }),
      "",
      window.location.href,
    );
    expect(
      screen.getByRole("dialog", { name: "Testinschrijving" }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("inschrijf-form")).toHaveAttribute(
      "data-description",
      "Testomschrijving",
    );
    expect(screen.getByTestId("inschrijf-form")).toHaveAttribute(
      "data-compact",
      "true",
    );
    expect(screen.getByTestId("inschrijf-form")).toHaveAttribute(
      "data-initial-selected-date",
      availableDate,
    );
    expect(document.documentElement.style.overflow).toBe("hidden");
    expect(document.body.style.overflow).toBe("hidden");
    expect(document.body.style.position).toBe("fixed");
    expect(document.body.style.top).toBe("-240px");
    expect(document.body.style.width).toBe("100%");
  });

  it("uses browser history when the close button or Escape key closes the modal", async () => {
    const user = userEvent.setup();

    render(<InschrijfFormModal triggerLabel="Open inschrijving" />);

    await user.click(screen.getByRole("button", { name: "Open inschrijving" }));
    await user.click(screen.getByRole("button", { name: "Sluiten" }));

    expect(window.history.back).toHaveBeenCalledTimes(1);

    fireEvent.popState(window);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Open inschrijving" }));
    fireEvent.keyDown(window, { key: "Escape" });

    expect(window.history.back).toHaveBeenCalledTimes(2);
  });

  it("closes on popstate and restores the page scroll styles", async () => {
    const user = userEvent.setup();
    document.body.style.overflow = "visible";
    document.body.style.position = "relative";
    document.documentElement.style.overflow = "clip";

    render(<InschrijfFormModal triggerLabel="Open inschrijving" />);

    await user.click(screen.getByRole("button", { name: "Open inschrijving" }));
    fireEvent.popState(window);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.documentElement.style.overflow).toBe("clip");
    expect(document.body.style.overflow).toBe("visible");
    expect(document.body.style.position).toBe("relative");
    expect(window.scrollTo).toHaveBeenCalledWith(0, 240);
  });

  it("supports custom trigger content", async () => {
    const user = userEvent.setup();

    render(
      <InschrijfFormModal>
        <span>Inschrijven voor deze datum</span>
      </InschrijfFormModal>,
    );

    await user.click(
      screen.getByRole("button", { name: "Inschrijven voor deze datum" }),
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
