// Make the AI Judge Laugh: Developer Excuses — one original line.
// The excuse is "I tested it" — and the twist is where: staging,
// where the database has one row and every user is named Test.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I tested it in staging, where the database has one row and the users are all named Test.";

// One line, one excuse: the kit gate only accepts 1 to 200 characters,
// counted as code points, so the check below mirrors it exactly.
// Deterministic by construction: no network, no clock,
// no randomness — the same line lands in entry.txt every run.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote excuse to ${entryPath} (${charCount} characters)`);
