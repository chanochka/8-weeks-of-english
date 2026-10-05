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

## The online edition (from 2026-10-02)

She asked to not print the book: she reads and ticks on the site and writes by hand in her own notebook;
exercises with answers check themselves. **Built one week at a time** (her words: "делать по недели"); week 1 is done.

- `book.html?page=N` shows page N of the full PDF; the content is in `book-data.js`, styles in `book.css`
  (the rounded pink style below, made for a screen; fonts and sprites from `source/redesign/`).
  Word bank and Grammar plus pages read `words-data.js`. `BOOK.hub` is the week page, `BOOK.order` the page order.
- Everything she writes by hand gets a "notebook" card: a drawn scheme of what to rule and how many lines.
- Answers: Grammar plus and the quick check come from the book's key. The cheat-sheet A/B answers are not in the book
  and were written for the site (`added: true`, said on the page). Cheat-sheet A: the gap is the verb (checked),
  the end of the sentence is hers (`end: true`, never checked).
- Ticks, stars and typed answers live in localStorage `book-pN`; a day's `done` lights its ✓ on the week page and
  its flower on the week review.
- A week in `data.js` with `bookPage` opens the online week from the home page.
- The service worker serves from cache first: bump `CACHE` in `service-worker.js` whenever site files change.
- `assets/` (cover.jpg and the icons) is made from her cover PDF as is: the icons are a square crop of its cat.

### Words and speaking, not grammar (her goal, 2026-10-02: «грамматика мне не нужна», then «делай все»)

- The grammar pages (cheat sheet, Grammar plus) stay in `book-data.js` but are out of `BOOK.order`; their quick check
  and say-it questions moved to the words page. Friday is a **Words day** (cards, 4·3·2, ChatGPT Voice).
  ChatGPT Voice 10 min is Core on Mon, Thu, Fri, Sun; every day has "Today's cards"; the writing page is a bonus
  whose check is about phrases, not grammar. Done for week 1. Her «1 а 2 да» (2026-10-02): the My world topics
  stay, and weeks 2–8 are built online in this same form (no grammar pages in `order`, Words day, Voice in Core,
  cards every day, writing as a bonus, the week's Russian in `words-ru.js`).
- `cards.html`: daily cards, the Russian meaning first, she says the English out loud, then opens it.
  "Got it" moves a card to the next box (1, 3, 7, 14, 30, 60 days), "Not yet" brings it back later today and to box 0.
  New cards a day (default 10) alternate: her own phrases, the weeks' words, My world. Everything is in localStorage
  `cards` (this browser only). Tested by `source/redesign/out/online/cardtest.html` (not committed).
- The week page ends with "How to keep your notebook": `assets/notebook-sample.png`, a sample Day 1 page and phrase
  log with numbered notes in Russian (her «1 да 2 да», 2026-10-02). Made by `source/redesign/notebook-sample.html`:
  headless Chrome, window 690 px, scale 1.5 (1260 px gives the open spread), then a 96-colour PNG.
  Weeks 2–8 show the same card.
- `deck.js`: the cards' deck and queue, shared by `cards.html` and the home page so both count the same cards.
- The home page `index.html` (her request, 2026-10-02), in the same rounded pink style: **Today** on top
  (Continue = the first day page without ✓, cards waiting), **My progress** (the 56 days as 8 × 7, days in a row,
  ChatGPT talks = ticked `<b>ChatGPT Voice` items, words known / learning from the cards), **8 weeks** as tiles with
  each week's days, and **The book** at the bottom (cover, PDF, plan, certificate, word bank, writing, reader).
  Day pages are found by their `nav` ("Day N · …") and placed in a week by `openerPage` in `data.js`.
  A day counts for the days in a row when its Core was finished that day (`doneOn` in `book-pN`) or cards were
  answered that day (`days` in `cards`). Tested by `source/redesign/out/online/hometest.html` (not committed);
  `home-demo.html?demo` shows it with sample progress.
- `words-ru.js`: Russian meaning + example for each week's phrases (written for the site, not in the book) —
  a week is added when it goes online, and only then do its words reach the cards.
- `my-words.js`: «Мой мир», her own topics (picked by Claude from what she does: studio, AI, robot, working
  with people — she may change them). Generic wording, no names: the repo is public.
- `move.html` "Move my progress" (2026-10-03, her «а»: the workbook lives on its own, not inside the hub): progress
  lives per address, so the hub's bridge address and github.io (and, on the iPhone, Safari and the home-screen icon)
  each have their own. «Copy» puts every workbook key (`book-pN`, `cards`, `writing-week-N`, `said-w…`,
  `certificateName`, `workbookPage`) into one JSON code; «Paste» → Load → Replace swaps this address's workbook keys
  for it, other keys of the address untouched, the old ones kept in `move-backup` for «Undo». Linked from The book on
  the home page. Tested by `source/redesign/out/online/movetest.html` (not committed). A new storage key must be
  added to `OURS` in `move.html`, or it will not move.

### Her five wishes for the cards (2026-10-05, «1 а 2 а 3 да» to the plan; built in three parts)

1. **Once more** — on the cards' done card: «Today’s» (`S.day.seen`, ids answered today) or «All I’ve seen» (weakest
   box first), gone through again; «Again later» sends a card to the end once; the boxes never move. *Done, part 1.*
2. **Short day** («нет времени»): a button on each day page, 12–15 Duolingo-like tasks from that day's phrases and the
   week's words (the same tasks as the game) plus 2 «say it out loud». Her «1 а»: a short day keeps the days in a row
   and puts ◐ on the day, but the day's ✓ still needs the whole Core and Continue stays on that day. *Part 3.*
3. **Cards tick themselves** — finished cards tick «Today’s cards» in a day's Core (`tickTodaysCards` in `days.js`):
   the day the cards were opened from (`cards.html?day=N`, the links on day pages carry it), else, once a day, the day
   Continue opens (`S.day.ticked`). The last item ticked makes the day done with `doneOn`, as on the page. *Done, part 1.*
4. **The game** — a page of rounds of 10 tasks (pairs against the clock, pick the meaning, build the phrase from tiles,
   type the missing word, listen and build) from the cards she has seen and the words of the online weeks; mistakes
   come back at the end of the round, best score kept; card boxes untouched. *Part 2.*
5. **Voice** — her «2 а»: the browser's own voices, picked on the cards page (Voice card, `voice.js`, localStorage
   `voice` = {uri, name, rate}; not moved by `move.html`, voices differ per device), best one by default
   (Premium › Enhanced/Natural › online › built-in, then British first); novelty Apple voices hidden; a tip in Russian
   how to download a better iPhone voice. ElevenLabs recordings (her «б») were declined for now. *Done, part 1.*

- `days.js`: the day list (`bookDays`, `currentDay`) shared by the home page and the cards.
- `app.js` reloads a page restored by the Back button: its frozen ticks would overwrite the cards' tick.
- Tests (not committed): `source/redesign/out/online/oncetest.html` (wishes 1, 3, 5) and `pagestest.html` (every ▶ page
  uses `voice.js`); run in headless Chrome over `python -m http.server`, `--dump-dom`, read `<pre id="out">`.

## The print redesign (paused 2026-10-02: she reads online instead)

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
