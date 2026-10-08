/**
 * A button that counts its clicks. Pure class with no registration side
 * effect: import this to extend it or register it under your own tag name.
 * Import "@ruphin/frontend-structure/elements/counter-button" to register
 * it as <counter-button>.
 */
export class CounterButton extends HTMLElement {
  static readonly observedAttributes = ["label"];

  #value = 0;
  readonly #button = document.createElement("button");

  constructor() {
    super();
    this.#button.type = "button";
    this.#button.addEventListener("click", () => {
      this.#value += 1;
      this.#render();
      this.dispatchEvent(
        new CustomEvent<number>("count-change", {
          detail: this.#value,
          bubbles: true,
          composed: true,
        }),
      );
    });
    this.attachShadow({ mode: "open" }).append(this.#button);
  }

  /** Number of clicks so far. */
  get value(): number {
    return this.#value;
  }

  /** Text shown before the count. Reflects the `label` attribute. */
  get label(): string {
    return this.getAttribute("label") ?? "Count";
  }
  set label(value: string) {
    this.setAttribute("label", value);
  }

  connectedCallback(): void {
    this.#render();
  }

  attributeChangedCallback(): void {
    this.#render();
  }

  #render(): void {
    this.#button.textContent = `${this.label}: ${this.#value}`;
  }
}
