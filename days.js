// The days of the weeks that are online (book-data.js + data.js), numbered 1–56, shared by the home page and the cards.
// A day page's ticks live in localStorage "book-pN" (book.html); Core done = every item of its "core" checklist ticked.
function pageState(n) { try { return JSON.parse(localStorage.getItem('book-p' + n)) || {}; } catch (e) { return {}; } }
const weekOf = n => WORKBOOK.weeks.filter(w => w.openerPage <= n).pop() || WORKBOOK.weeks[0];
function bookDays() {
  return Object.keys(BOOK).filter(k => /^\d+$/.test(k)).map(Number).filter(n => /^Day \d+/.test(BOOK[n].nav)).map(n => {
    const w = weekOf(n), d = Number(/^Day (\d+)/.exec(BOOK[n].nav)[1]), s = pageState(n);
    const goal = BOOK[n].blocks.find(b => b.type === 'goal');
    return {page: n, week: w, num: d <= 7 ? (w.week - 1) * 7 + d : d, done: !!s.done, doneOn: s.done && s.doneOn, goal: goal && goal.text};
  }).sort((a, b) => a.num - b.num);
}
// the day "Continue" opens: the first one whose Core is not done
const currentDay = () => bookDays().find(d => !d.done);

// Today's cards finished (2026-10-05, her «если я прошла карточки отмечалось автоматом»): tick the "Today's cards"
// item in that day's Core; the last item ticked makes the day done, as a tap on the page would.
function tickTodaysCards(page) {
  const core = BOOK[page] && BOOK[page].blocks.find(b => b.type === 'checklist' && b.core);
  const i = core ? core.items.findIndex(x => /Today’s cards/.test(x)) : -1;
  if (i < 0) return false;
  const s = pageState(page);
  s.ticks = s.ticks || {};
  s.ticks[`${core.id}-${i}`] = true;
  if (!s.done && core.items.every((_, j) => s.ticks[`${core.id}-${j}`])) { s.done = true; s.doneOn = today; }
  try { localStorage.setItem('book-p' + page, JSON.stringify(s)); } catch (e) { return false; }
  return true;
}
