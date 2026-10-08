import { beforeAll, describe, expect, it, vi } from "vitest";
import { CounterButton } from "./counter-button.js";

// Tests register under a private tag so the pure module stays side-effect free.
beforeAll(() => {
  customElements.define("test-counter-button", CounterButton);
});

describe("CounterButton", () => {
  it("renders label and count into its shadow root", () => {
    const el = new CounterButton();
    el.label = "Clicks";
    document.body.append(el);
    expect(el.shadowRoot?.querySelector("button")?.textContent).toBe(
      "Clicks: 0",
    );
    el.remove();
  });

  it("increments and dispatches count-change", () => {
    const el = document.createElement("test-counter-button") as CounterButton;
    const onChange = vi.fn();
    el.addEventListener("count-change", onChange);
    document.body.append(el);

    el.shadowRoot!.querySelector("button")!.click();

    expect(el.value).toBe(1);
    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0]![0].detail).toBe(1);
    el.remove();
  });
});
