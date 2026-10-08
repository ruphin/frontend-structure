/** Returns a greeting for `name`, falling back to "world". */
export function greet(name = ""): string {
  const who = name.trim() || "world";
  return `Hello, ${who}!`;
}
