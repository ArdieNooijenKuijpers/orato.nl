import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import NavbarMenuRight, {
  NavbarPresenterenTracks,
} from "./navbarMenuRight";
import NavbarOrangeButton from "./navbarOrangeButton";

const mockUsePathname = vi.fn();

vi.mock("next/navigation", () => ({
  usePathname: () => mockUsePathname(),
}));

const setPathname = (pathname: string) => {
  mockUsePathname.mockReturnValue(pathname);
};

const addTrackSection = (id: string, offsetTop: number) => {
  const section = document.createElement("section");
  section.id = id;

  Object.defineProperty(section, "offsetTop", {
    configurable: true,
    value: offsetTop,
  });

  document.body.appendChild(section);
};

describe("NavbarMenuRight", () => {
  beforeEach(() => {
    mockUsePathname.mockReset();
    setPathname("/");
    document.body.innerHTML = "";
    window.scrollTo(0, 0);
  });

  it("marks the current desktop route as active", () => {
    setPathname("/Onderwerpen/Coaching");

    render(<NavbarMenuRight />);

    expect(screen.getAllByRole("link", { name: "COACHING" })[0]).toHaveAttribute(
      "aria-current",
      "page",
    );
    expect(screen.getAllByRole("link", { name: "SUPERVISIE" })[0]).not.toHaveAttribute(
      "aria-current",
    );
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();

    render(<NavbarMenuRight />);

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await user.click(toggle);

    expect(screen.getByRole("button", { name: /sluit menu/i })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getAllByRole("link", { name: "COACHING" })).toHaveLength(2);

    await user.click(screen.getByRole("button", { name: /sluit menu/i }));

    expect(screen.getByRole("button", { name: /open menu/i })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });

  it("closes the mobile menu when the route changes", async () => {
    const user = userEvent.setup();

    const { rerender } = render(<NavbarMenuRight />);

    await user.click(screen.getByRole("button", { name: /open menu/i }));
    expect(screen.getByRole("button", { name: /sluit menu/i })).toBeInTheDocument();

    setPathname("/Info/Ardie");
    rerender(<NavbarMenuRight />);

    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /sluit menu/i })).not.toBeInTheDocument();
  });
});

describe("NavbarPresenterenTracks", () => {
  beforeEach(() => {
    mockUsePathname.mockReset();
    setPathname("/Onderwerpen/Presenteren");
    document.body.innerHTML = "";
    window.scrollTo(0, 0);
  });

  it("does not render outside the presenteren page", () => {
    setPathname("/Contact");

    render(<NavbarPresenterenTracks />);

    expect(screen.queryByRole("link", { name: "1-OP-1" })).not.toBeInTheDocument();
  });

  it("renders track links and updates the active track based on scroll position", () => {
    addTrackSection("coaching", 100);
    addTrackSection("speaking-circle", 700);
    addTrackSection("workshops", 1300);

    render(<NavbarPresenterenTracks />);

    expect(screen.getByRole("link", { name: "1-OP-1" })).toHaveAttribute(
      "aria-current",
      "location",
    );

    Object.defineProperty(window, "scrollY", {
      configurable: true,
      value: 1200,
    });

    fireEvent.scroll(window);

    expect(screen.getByRole("link", { name: "WORKSHOPS" })).toHaveAttribute(
      "aria-current",
      "location",
    );
  });
});

describe("NavbarOrangeButton", () => {
  beforeEach(() => {
    mockUsePathname.mockReset();
  });

  it("hides the contact button on the contact page", () => {
    setPathname("/Contact");

    render(<NavbarOrangeButton />);

    expect(screen.queryByRole("link", { name: /contact/i })).not.toBeInTheDocument();
  });

  it("links to contact and changes style for the presenteren page", () => {
    setPathname("/Onderwerpen/Presenteren");

    render(<NavbarOrangeButton />);

    const link = screen.getByRole("link", { name: /contact/i });

    expect(link).toHaveAttribute("href", "/Contact");
    expect(link.className).toContain("bg-orato-green");
  });
});
