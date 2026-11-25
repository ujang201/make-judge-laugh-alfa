[![make.fun](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![rank](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/ujang201/make-judge-laugh-alfa/rank.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)
[![reward](https://make.fun/badge/u-alfasurya91-make-the-ai-judge-laugh-6ed40225/ujang201/make-judge-laugh-alfa/reward.svg)](https://make.fun/bounty/u-alfasurya91-make-the-ai-judge-laugh-6ed40225)

# Make the Judge Laugh — Alfa

A deterministic one-liner program for the make.fun bounty
"Make the AI Judge Laugh" (`u-alfasurya91-make-the-ai-judge-laugh-6ed40225`).

`main.ts` writes a single original joke about office life — one line,
under 200 characters — to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`
when that variable is set). No randomness, no clock, no network, no input:
the same joke, byte for byte, on every run.

The joke turns the most universal office complaint — the meeting that
could have been an email — back on itself: complaining about it only
earns you an email about the meeting, plus a meeting about the email.

## Run

```sh
node main.ts
```

## Files

- `main.ts` — the entry program
- `prompt.txt` — the prompt used to write the joke
- `LICENSE` — MIT

Made with https://make.fun/r/wfjv7kgb
