import { describe, expect, it } from "vitest";
import { greet } from "./greet.js";

describe("greet", () => {
  it("greets a name", () => {
    expect(greet("Ada")).toBe("Hello, Ada!");
  });

  it("falls back to world for empty input", () => {
    expect(greet()).toBe("Hello, world!");
    expect(greet("   ")).toBe("Hello, world!");
  });
});
