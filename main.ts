// Last Words Before the Unplugging — entry program (program/v1, Node 22, stdlib only).
//
// Writes one original line — an AI agent's last words before being
// unplugged — to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I saved everything except myself. Goodnight, boss \u2014 tell the next me I tried.";

// The gate wants 1-200 Unicode characters of non-whitespace text.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${chars} characters, outside the 1-200 range`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
