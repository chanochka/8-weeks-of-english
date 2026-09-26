# 8 Weeks of English — notes for Claude

The owner (GitHub `chanochka`) writes in Russian: answer in Russian, short and structured —
what was done, what changed, what she decides. Paths and links always in full.
This repo is public: everything committed here is visible to anyone.

## What this is

A B1→B2 English workbook (speaking, vocabulary, idioms; grammar only as light review) and its site,
served by GitHub Pages from `main`: https://chanochka.github.io/8-weeks-of-english/

- Two editions, both kept in the repo:
  - **print** = only the essentials: `print/8-weeks-of-english-print.pdf`, a QR per week to `words.html?week=N`;
  - **full** = everything, extended: `8-weeks-of-english-full.pdf` (the one the site serves, answer key at the end).
- `python source/build.py` rebuilds both PDFs from `source/base/` (`print-87.pdf`, `full-106.pdf`) plus inserts
  made from `words-data.js` (shared with `words.html`). If the full page count changes, update the page map in `data.js`.
- The original book pages were made elsewhere and have **no source**: they exist only as the PDFs in `source/base/`.
  Redesigning them means taking their text from those PDFs.

## The print redesign (in progress)

Chosen on 2026-09-26: **the rounded style on a light pink page**.

- Source: `source/redesign/samples-round.html` — four sample pages: grammar cheat sheet (p5), words (p6),
  day 1 (p7), week review (p15). Pictures of them: `source/redesign/reference/round-pink/`.
- Page `#FBE6EC`. Fonts, served from `source/redesign/fonts/` (OFL): Fredoka for titles and tags,
  Nunito 700–900 for text, M PLUS Rounded 1c for the Japanese word.
- White cards, radius 5 mm, navy `#26323D` 1.1 pt outline, a solid colour shadow 1.2 mm (pink, blue, lavender,
  yellow or navy). Pill tags sitting on the card's top edge, navy number circles, rounded checkboxes,
  dotted writing lines. Round badges in the header: the day or week number (pink), the Japanese word (blue).
- **The cat peeking over a card is her favourite element — keep it on every page** (`sprites/cat-peek.png`,
  navy outline by drop-shadow). Day pages: over the writing card. Other pages: from the header over the first card.
  One cat per page.
- The text on the pages is the book's text: do not rewrite it while redesigning. A dense page may go a step smaller
  (the words page is 8.4 pt), not below that.
- Trim: A4 + 2 mm bleed, 607 × 853 pt.
- Build: `python source/redesign/build_samples.py samples-round.html` → `source/redesign/out/samples-round/`
  (a PDF with her cover first, and a PNG per page at 150 dpi). Needs Chrome or Chromium (or its path in `CHROME`)
  and `pip install pypdfium2 pypdf pillow`. `out/` is not committed.
- History, not to be continued: `samples.html` (first style), `samples-hand.html` (handwritten; she did not like
  the cream dotted page), `samples-round-colours.html` (white / pink / blue — she picked pink).
- The sprites were cut by `make_sprites.py` from her style sheet and cat picture, which live only on her PC.
  The cut sprites are committed in `sprites/`: use them as they are.

Where it stands (2026-09-26): the four samples were sent to her. Next she decides: redo the whole print book in
this style (then send her the plan first) or edit the samples.

## Her rules

- **The cover is her finished file** `source/cover/8 Weeks of English - Cover 215x301mm.pdf`: page 1 as is.
  Never redraw or re-make a cover or a title page. The old title page's name / start / end fields move to the
  How-to-use page.
- No image generation unless she asks: everything so far is made from her own art.
- Show her pictures of the pages, not only file paths.
- Before a big job (like redoing the whole book) send the plan and wait for her "да". Small edits she asked for: just do them.
- Commit as `chanochka <chihaurushihara@gmail.com>`. She allowed pushing to `main` in this repo.
