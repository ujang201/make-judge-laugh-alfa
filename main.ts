// Make the AI Judge Laugh — one original office joke, one line.
// Deterministic: no randomness, no clock, no network, no input.
// Writes the entry to $OUTPUT_DIR/entry.txt, defaulting to /output/entry.txt.
//
// The joke: the most universal office complaint — the meeting that could
// have been an email — turned back on the complainer. Pointing it out
// does not kill the meeting; it spawns an email about the meeting and a
// meeting about the email, a loop the office can never escape.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "I told my boss this meeting could have been an email, so he emailed me the invite and booked a meeting to discuss the email.";

// The gate requires 1-200 characters, a single line, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.includes("\n")) {
  throw new Error(`entry must be one line of 1-200 characters, got ${JOKE.length}`);
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), JOKE, "utf8");
