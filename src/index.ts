// Pure public entrypoint: classes, helpers and types only. Nothing in here
// (or in anything it imports) may have side effects such as
// customElements.define(), so bundlers can tree-shake unused exports.
// Registering entrypoints live in src/elements/ and are exported as
// "@ruphin/frontend-structure/elements/<name>".
export { greet } from "./lib/greet.js";
export { CounterButton } from "./components/counter-button.js";
