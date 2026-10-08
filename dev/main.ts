// Import by package name, exactly as a consumer would.
// dev/vite.config.ts aliases the package to ../src during development.

// Registering import: has a side effect, defines <counter-button>.
import "@ruphin/frontend-structure/elements/counter-button";
// Pure import: tree-shakeable classes and helpers.
import { greet, CounterButton } from "@ruphin/frontend-structure";

document.querySelector<HTMLElement>("#greeting")!.textContent =
  greet("developer");

const log = document.querySelector<HTMLElement>("#log")!;
const counter = document.querySelector("counter-button")!;
counter.addEventListener("count-change", (event) => {
  log.textContent = `Changed to ${(event as CustomEvent<number>).detail}`;
});

// The pure class can also be registered under a different tag name.
customElements.define("other-counter", class extends CounterButton {});
