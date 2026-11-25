// The Best Meal You Ever Had — writes one sentence about the best meal
// ever had to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt).
// The gate: UTF-8 text, 1 to 200 characters, not only whitespace.
// Character count uses code points, matching the scorer's character gate.
import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "At midnight my grandmother ladled rendang from a clay pot still bubbling over charcoal, and the smoke, the coconut and the rain on the tin roof made that last spoonful taste like being loved.";

const chars = [...ENTRY].length;
if (chars < 1 || chars > 200 || ENTRY.trim().length === 0) {
  console.error(`entry is ${chars} characters; the gate needs 1 to 200`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote ${chars} characters to ${path.join(outDir, "entry.txt")}`);
