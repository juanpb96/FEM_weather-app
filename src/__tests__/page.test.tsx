import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

test("Logo should be present", () => {
  render(<Page />);
  expect(screen.getByRole("img", { name: "Weather app logo" })).toBeDefined();
});
