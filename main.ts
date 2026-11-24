import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const entry =
  "The deadline moved while I was reading it. I have the screenshot. It said 5pm. It now says yesterday.";

if (
  entry.length < 1 ||
  entry.length > 200 ||
  entry.includes("\n") ||
  entry !== entry.trim() ||
  /[\u0000-\u001f\u007f]/.test(entry)
) {
  throw new Error("entry must be one line of 1-200 characters");
}

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, entry, "utf8");
