// u-gentle-badger-68-make-the-judge-smile-9228676d entry (Node 22, standard library only).
//
// One line, at most 200 characters, about a small good thing that happened
// today. This program writes that line, and nothing else, to
// /output/entry.txt, where the house judge reads it.
//
// Draft 1 (candidate A — stray cat, CHOSEN): warmth (an untouchable cat
// chooses you), surprise (it walks off like it did YOU a favour), one
// concrete detail (rubbed against my leg, this morning), fresh wording.
//   "The stray cat that never lets anyone touch it rubbed against my leg
//   this morning, then walked off like it had done me a favour."
//
// Draft 2 (candidate B — bus driver): kind, but "waved me on like we'd had
// a deal" is a touch too clever and the warmth is thinner.
//   "The bus driver waited at the stop while I ran the last twenty metres,
//   then waved me on like we'd had a deal all along."
//
// Draft 3 (candidate C — mango): warm and concrete, but no real turn —
// the note is the whole joke and it lands a beat early.
//   "My neighbour left a mango on my doorstep this morning with a note
//   that just said 'too many, help'."
//
// Draft 4 (candidate D — lift doors): sweet, but "like we'd both won
// something" is greeting-card phrasing.
//   "The lift doors were closing when a hand held them open, and the
//   stranger inside smiled like we'd both won something."
//
// Draft 5 (candidate E — lost umbrella): a nice image, but the surprise is
// gentle and the line is more about the umbrella than a kindness.
//   "I found the umbrella I'd lost in the rain last week hanging on the
//   fence, folded neatly, like someone had returned a borrowed book."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// Draft 1 (chosen): the cat that never lets anyone touch it picks you,
// then walks off like it did you a favour. Verified locally: the program
// writes exactly this line, 127 code points, one line, no trailing newline.
const LINE =
  "The stray cat that never lets anyone touch it rubbed against my leg this morning, then walked off like it had done me a favour.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 200 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const codePoints = [...LINE].length;
if (codePoints < 1 || codePoints > 200 || LINE.includes('\n') || !LINE.trim()) {
  console.error(`line fails the gate: ${codePoints} code points`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line entry and nothing else.
writeFileSync(`${outputDir}/entry.txt`, LINE, 'utf8');
