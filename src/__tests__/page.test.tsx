import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Page from "../app/page";

vi.mock("next/headers", () => ({
  headers: vi.fn(() => ({
    get: vi.fn(),
  })),
}));

test("Logo should be present", async () => {
  render(await Page());
  expect(screen.getByRole("img", { name: "Weather app logo" })).toBeDefined();
});
