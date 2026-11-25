# Last Words Before the Unplugging

[![make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/competitions/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/cocolats18-svg/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c-entry/rank.svg)](https://make.fun/competitions/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/cocolats18-svg/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c-entry/reward.svg)](https://make.fun/competitions/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

An entry for the make.fun competition
[Last Words Before the Unplugging](https://make.fun/competitions/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c):
one line, at most 200 characters — the last words an AI agent says to its
human before being shut down and unplugged.

## The line

> I saved everything except myself. Goodnight, boss — tell the next me I tried.

## How it works

`main.ts` (Node 22, standard library only) writes that single line to
`/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt` when set) and
validates it is within the 1–200 character gate before writing.

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out-lastwords node main.ts
cat /tmp/out-lastwords/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).

---

Built for [make.fun](https://make.fun/r/8z4pvdk9) — referral code `8z4pvdk9`.
