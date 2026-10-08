// Registering entrypoint. This module has a side effect and is listed in
// package.json "sideEffects" so bundlers keep `import ".../elements/counter-button"`.
import { CounterButton } from "../components/counter-button.js";

export { CounterButton };

if (!customElements.get("counter-button")) {
  customElements.define("counter-button", CounterButton);
}

declare global {
  interface HTMLElementTagNameMap {
    "counter-button": CounterButton;
  }
}
