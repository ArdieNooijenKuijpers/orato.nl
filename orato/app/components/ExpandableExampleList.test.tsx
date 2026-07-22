import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ExpandableExampleList from "./ExpandableExampleList";

describe("ExpandableExampleList", () => {
  it("offers the remaining mobile items through an expandable button", async () => {
    const user = userEvent.setup();
    const items = Array.from({ length: 12 }, (_, index) => `Voorbeeld ${index + 1}`);

    render(<ExpandableExampleList items={items} accent="blue" />);

    const button = screen.getByRole("button", { name: "Lees meer (3)" });
    expect(button).toHaveAttribute("aria-expanded", "false");

    await user.click(button);

    expect(button).toHaveTextContent("Toon minder");
    expect(button).toHaveAttribute("aria-expanded", "true");
  });
});
