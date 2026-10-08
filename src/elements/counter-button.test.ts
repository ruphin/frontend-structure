import { describe, expect, it } from "vitest";
import { CounterButton } from "./counter-button.js";

describe("elements/counter-button", () => {
  it("registers <counter-button>", () => {
    expect(customElements.get("counter-button")).toBe(CounterButton);
    expect(document.createElement("counter-button")).toBeInstanceOf(
      CounterButton,
    );
  });
});
