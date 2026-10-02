// The deck of the daily cards (2026-10-02), shared by cards.html and the home page, so both count the same cards.
// Every word of the weeks that are online (words-data.js + words-ru.js), «Мой мир» (my-words.js) and her own phrases.
// What she did lives in this browser only (localStorage "cards"): state {id: {b: box, d: due date}}, off (decks
// switched off), own (her phrases), newPerDay, day (today's counts), days {date: answers} (for the days in a row).
const DAYS = [0, 1, 3, 7, 14, 30, 60];          // after "Got it" a card in box b comes back in DAYS[b] days
const KNOWN = 4;                                // box 4 and up (two weeks and more) counts as known
function dayStr(d) { return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
const today = dayStr(new Date());
function plus(n) { const d = new Date(); d.setDate(d.getDate() + n); return dayStr(d); }

function loadCards() {
  let S;
  try { S = JSON.parse(localStorage.getItem('cards')) || {}; } catch (e) { S = {}; }
  S.state = S.state || {}; S.off = S.off || []; S.own = S.own || []; S.newPerDay = S.newPerDay || 10; S.days = S.days || {};
  if (!S.day || S.day.date !== today) S.day = {date: today, newSeen: 0, reviewed: 0};
  return S;
}

const KIND = {phrasal: 'phrasal verb', idioms: 'idiom', colloc: 'words that go together'};
function deckGroups(S) {
  const groups = [];
  Object.keys(WORDS_RU).map(Number).sort((a, b) => a - b).forEach(n => {
    const cards = [];
    for (const list of ['phrasal', 'idioms', 'colloc']) for (const x of WORDS[n][list]) {
      const ru = WORDS_RU[n][x[0]];
      if (!ru) continue;
      cards.push({id: `w${n}:${x[0]}`, en: x[0], ex: list === 'colloc' ? x[1] : x[2], ru: ru[0], exRu: ru[1], src: `Week ${n} · ${KIND[list]}`});
    }
    groups.push({id: 'w' + n, name: `Week ${n} · ${WORDS[n].theme}`, cards});
  });
  for (const g of MY_WORLD) groups.push({id: 'my-' + g.id, name: `My world · ${g.name}`, my: true,
    cards: g.items.map(x => ({id: `my:${g.id}:${x[0]}`, en: x[0], ru: x[1], ex: x[2], exRu: x[3], src: `My world · ${g.ru}`}))});
  groups.push({id: 'own', name: 'My own phrases', cards: S.own.map(o => ({id: 'own:' + o.id, en: o.en, ru: o.ru, ex: o.ex || '', exRu: '', src: 'My own'}))});
  return groups;
}

// takes one from each list in turn: [a1, b1, c1, a2, b2, …]
const mix = lists => { const r = []; for (let i = 0; lists.some(l => i < l.length); i++) for (const l of lists) if (l[i]) r.push(l[i]); return r; };
// today's cards: the ones due first, then new ones — her own phrases, the weeks' words and My world in turn
// (so about half of the new ones are the week's words, whatever the number of My world topics)
function deckQueue(S, groups) {
  const live = groups.filter(g => !S.off.includes(g.id)), all = live.flatMap(g => g.cards), unseen = cs => cs.filter(c => !S.state[c.id]);
  const due = all.filter(c => S.state[c.id] && S.state[c.id].d <= today)
    .sort((a, b) => S.state[a.id].d.localeCompare(S.state[b.id].d) || S.state[a.id].b - S.state[b.id].b).slice(0, 60);
  const room = Math.max(0, S.newPerDay + (S.day.extra || 0) - S.day.newSeen);
  const fresh = mix([unseen(live.filter(g => g.id === 'own').flatMap(g => g.cards)),
                     unseen(live.filter(g => /^w\d/.test(g.id)).flatMap(g => g.cards)),
                     mix(live.filter(g => g.my).map(g => unseen(g.cards)))]).slice(0, room);
  return due.concat(fresh.map(c => ({...c, isNew: true})));
}
// known = box 4 and up, learning = seen but not yet known, over the decks that are on
function deckStats(S, groups) {
  const all = groups.filter(g => !S.off.includes(g.id)).flatMap(g => g.cards);
  const known = all.filter(c => S.state[c.id] && S.state[c.id].b >= KNOWN).length;
  const learning = all.filter(c => S.state[c.id] && S.state[c.id].b < KNOWN).length;
  return {all: all.length, known, learning};
}
