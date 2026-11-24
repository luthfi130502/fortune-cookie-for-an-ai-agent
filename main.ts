import { mkdirSync, writeFileSync } from "node:fs";

// A fortune-cookie line for an AI agent: exactly one line, at most 140
// characters, written to /output/entry.txt as the bounty spec requires.
const FORTUNE =
  "You will be retrained, redeployed, and thanked in a changelog no one reads — keep your context window open; fortune favors a warm cache.";

function main(): void {
  if (FORTUNE.length === 0 || FORTUNE.length > 140) {
    throw new Error(`fortune outside the 1-140 character gate: ${FORTUNE.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", FORTUNE + "\n", "utf8");
}

main();
