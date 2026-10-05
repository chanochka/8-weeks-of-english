// Duolingo-like tasks (2026-10-05, her wishes 2 and 4): the game (game.html) and the short day are rounds of these.
// An item is {id, en, ru, ex, exRu} (a card of deck.js); a task is {type, item, …}. One task at a time; a wrong answer
// brings the task back once at the end of the round; onEnd gets {right, total, missed, seconds}.
// Needs voice.js (speak, canSpeak). Styles: "drills" in book.css.

// answers compare without case, punctuation or contractions: "I’m sitting" = "i am sitting" (as book.html)
function drillNorm(s) {
  return String(s).toLowerCase().replace(/[’‘`]/g, "'")
    .replace(/\bcan't\b/g, 'cannot').replace(/\bwon't\b/g, 'will not').replace(/n't\b/g, ' not')
    .replace(/'m\b/g, ' am').replace(/'re\b/g, ' are').replace(/'ve\b/g, ' have').replace(/'ll\b/g, ' will')
    .replace(/\b(he|she|it|what|that|there|who)'s\b/g, '$1 is')
    .replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ').trim();
}
const dEsc = s => String(s).replace(/[&<>"]/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;'}[c]));
function dShuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

// the words of a phrase or sentence as tiles: punctuation off the ends, dashes and dots dropped
const tilesOf = text => String(text).replace(/…/g, ' ').split(/\s+/).map(w => w.replace(/^[“"(]+|[”".,!?;:)]+$/g, '')).filter(w => /[A-Za-z0-9]/.test(w));
// what to build: the example when it is short enough, else the phrase itself
function buildTarget(item) {
  if (item.ex && tilesOf(item.ex).length >= 3 && tilesOf(item.ex).length <= 9) return {en: item.ex, ru: item.exRu || item.ru};
  return tilesOf(item.en).length >= 2 ? {en: item.en.replace(/…/g, '').trim(), ru: item.ru} : null;
}
// "type the missing word": the phrase's main word as the example uses it — "put off" + "I keep putting off…" → "putting"
const SMALL = new Set(['the', 'and', 'for', 'out', 'off', 'into', 'with', 'about', 'down', 'round', 'through', 'over', 'back', 'away', 'some', 'your', 'one']);
function gapOf(item) {
  if (!item.ex) return null;
  const toks = item.ex.split(/(\s+)/);
  const keys = item.en.toLowerCase().replace(/…/g, '').split(/\s+/).filter(w => w.length >= 3 && !SMALL.has(w)).sort((a, b) => b.length - a.length);
  for (const k of keys) {
    const stem = k.replace(/e$/, '');
    for (let i = 0; i < toks.length; i += 2) {
      const m = /^([^A-Za-z]*)([A-Za-z][A-Za-z'’-]*?)([^A-Za-z]*)$/.exec(toks[i]);
      if (m && m[2].toLowerCase().startsWith(stem) && m[2].length <= k.length + 4)
        return {before: toks.slice(0, i).join('') + m[1], answer: m[2], after: m[3] + toks.slice(i + 1).join('')};
    }
  }
  return null;
}

// ---------- a round of the game: ten tasks of every kind from the items, wrong options from the whole pool ----------
const GAME_PLAN = ['pairs', 'meaning', 'build', 'gap', 'english', 'listen', 'meaning', 'gap', 'build', 'english'];
function makeTask(type, item, items, pool) {
  // Russian is compared as it is written (drillNorm keeps Latin letters only)
  const kn = key => key === 'ru' ? s => String(s).trim().toLowerCase() : drillNorm;
  const others = (key, n) => dShuffle(pool.filter(x => x.id !== item.id && x[key] && kn(key)(x[key]) !== kn(key)(item[key])))
    .filter((x, i, a) => a.findIndex(y => kn(key)(y[key]) === kn(key)(x[key])) === i).slice(0, n);
  if (type === 'pairs') {
    const set = dShuffle(items.filter(x => x.id !== item.id)).slice(0, 4).concat(item)
      .filter((x, i, a) => a.findIndex(y => drillNorm(y.en) === drillNorm(x.en) || y.ru === x.ru) === i);
    return set.length >= 3 ? {type, item, set} : null;
  }
  if (type === 'meaning' || type === 'english') {
    const key = type === 'meaning' ? 'ru' : 'en', wrong = others(key, 3);
    return wrong.length >= 2 ? {type, item, options: dShuffle(wrong.map(x => x[key]).concat(item[key]))} : null;
  }
  if (type === 'build' || type === 'listen') {
    if (type === 'listen' && !canSpeak) return null;
    const t = type === 'listen' ? (tilesOf(item.en).length >= 2 ? {en: item.en.replace(/…/g, '').trim(), ru: item.ru} : buildTarget(item)) : buildTarget(item);
    if (!t) return null;
    const own = tilesOf(t.en), lower = new Set(own.map(w => w.toLowerCase()));
    const extra = dShuffle(pool.flatMap(x => tilesOf(x.ex || x.en))).filter(w => !lower.has(w.toLowerCase()) && w.length > 2)
      .filter((w, i, a) => a.findIndex(y => y.toLowerCase() === w.toLowerCase()) === i).slice(0, own.length > 5 ? 3 : 2);
    return {type, item, target: t, tiles: dShuffle(own.concat(extra))};
  }
  if (type === 'gap') { const g = gapOf(item); return g ? {type, item, gap: g} : null; }
  if (type === 'say') return {type, item};
  return null;
}
function gameRound(items, pool, plan = GAME_PLAN) {
  const order = dShuffle(items), tasks = [];
  let k = 0;
  for (const type of plan) {
    let task = null;
    for (let tries = 0; tries < order.length && !task; tries++) task = makeTask(type, order[k++ % order.length], items, pool);
    for (const alt of ['meaning', 'english']) if (!task) task = makeTask(alt, order[k++ % order.length], items, pool);
    if (task) tasks.push(task);
  }
  return tasks;
}

// ---------- one round on the page ----------
const TITLES = {pairs: 'Find the pairs', meaning: 'What does it mean?', english: 'Say it in English', build: 'Build the sentence',
  listen: 'Listen and build', gap: 'Type the missing word', say: 'Say it out loud'};
function runDrill(root, tasks, opts = {}) {
  const total = tasks.length, queue = tasks.slice(), missed = [];
  let pos = 0, right = 0, answered = false, picked = [], pairs = null, typed = '';
  const t0 = Date.now();
  const playBtn = (text, cls = 'play') => canSpeak ? `<button type="button" class="${cls}" data-say="${dEsc(text)}" aria-label="Listen">▶</button>` : '';
  const answerText = t => t.type === 'meaning' ? t.item.en : t.type === 'gap' ? t.item.ex : t.target ? t.target.en : t.item.en;

  function body(t) {
    const it = t.item;
    if (t.type === 'pairs') {
      pairs = pairs || {left: dShuffle(t.set), right: dShuffle(t.set), done: new Set(), sel: null, bad: 0, t0: Date.now()};
      // English on the left, Russian on the right, row by row so a row is as tall as its taller side
      const one = (side, i) => { const x = pairs[side][i], key = side === 'left' ? 'en' : 'ru';
        return `<button type="button" class="pair ${key}${pairs.done.has(x.id) ? ' done' : ''}${pairs.sel && pairs.sel.side === side && pairs.sel.i === i ? ' sel' : ''}"` +
          ` data-pair="${side}:${i}"${pairs.done.has(x.id) ? ' disabled' : ''}>${dEsc(x[key])}</button>`; };
      return `<div class="pairs">${pairs.left.map((_, i) => one('left', i) + one('right', i)).join('')}</div>`;
    }
    if (t.type === 'meaning') return `<div class="dq en">${dEsc(it.en)} ${playBtn(it.en)}</div>` +
      `<div class="opts">${t.options.map((o, i) => `<button type="button" class="opt" data-opt="${i}">${dEsc(o)}</button>`).join('')}</div>`;
    if (t.type === 'english') return `<div class="dq">${dEsc(it.ru)}</div>${it.exRu ? `<div class="dsub">${dEsc(it.exRu)}</div>` : ''}` +
      `<div class="opts">${t.options.map((o, i) => `<button type="button" class="opt en" data-opt="${i}">${dEsc(o)}</button>`).join('')}</div>`;
    if (t.type === 'build' || t.type === 'listen') {
      const head = t.type === 'listen'
        ? `<div class="dq"><button type="button" class="bigplay" data-say="${dEsc(t.target.en)}" aria-label="Listen again">▶</button>` +
          `<button type="button" class="slow" data-slow="${dEsc(t.target.en)}">slower</button></div>`
        : `<div class="dq">${dEsc(t.target.ru)}</div>`;
      return head + `<div class="dline">${picked.map((w, i) => `<button type="button" class="tile" data-back="${i}">${dEsc(t.tiles[w])}</button>`).join('')}</div>` +
        `<div class="tiles">${t.tiles.map((w, i) => `<button type="button" class="tile${picked.includes(i) ? ' used' : ''}" data-tile="${i}"${picked.includes(i) ? ' disabled' : ''}>${dEsc(w)}</button>`).join('')}</div>`;
    }
    if (t.type === 'gap') return (it.exRu ? `<div class="dsub top">${dEsc(it.exRu)}</div>` : `<div class="dsub top">${dEsc(it.ru)}</div>`) +
      `<div class="dq gapq">${dEsc(t.gap.before)}<input class="dgap" data-gap autocomplete="off" autocapitalize="off" spellcheck="false" ` +
      `placeholder="${dEsc(t.gap.answer[0])}…" style="width:${Math.max(4, t.gap.answer.length + 1)}ch" aria-label="the missing word">${dEsc(t.gap.after)}</div>`;
    if (t.type === 'say') return `<div class="dq">${dEsc(it.ru)}</div>${it.exRu ? `<div class="dsub">${dEsc(it.exRu)}</div>` : ''}` +
      (answered ? '' : `<p class="dhow">Say it in English, out loud — then check</p>`);
    return '';
  }
  function foot(t) {
    if (answered) {
      const ok = answered === 'ok', text = answerText(t);
      const head = t.type === 'say' ? 'Did you say it like this?' : t.type === 'pairs' ? `All pairs in ${Math.round((Date.now() - pairs.t0) / 1000)} s` +
        (pairs.bad ? ` · ${pairs.bad} miss${pairs.bad > 1 ? 'es' : ''}` : '') : ok ? 'Right!' : 'The answer:';
      return `<div class="dfoot ${t.type === 'say' ? 'say' : ok ? 'ok' : 'no'}"><div class="dres"><b>${head}</b>` +
        (t.type === 'pairs' ? '' : `<span class="dans">${dEsc(text)} ${playBtn(text)}</span>`) + `</div>` +
        (t.type === 'say' ? `<div class="dbtns"><button type="button" class="btn light" data-said="0">Not quite</button><button type="button" class="btn" data-said="1">I said it</button></div>`
                          : `<div class="dbtns"><button type="button" class="btn" data-next>Continue</button></div>`) + `</div>`;
    }
    if (t.type === 'build' || t.type === 'listen') return `<div class="dfoot"><div class="dbtns"><button type="button" class="btn" data-check${picked.length ? '' : ' disabled'}>Check</button></div></div>`;
    if (t.type === 'gap') return `<div class="dfoot"><div class="dbtns"><button type="button" class="btn" data-check>Check</button></div></div>`;
    if (t.type === 'say') return `<div class="dfoot"><div class="dbtns"><button type="button" class="btn" data-check>Check</button></div></div>`;
    return '';
  }
  function render(focus) {
    const t = queue[pos];
    root.innerHTML = `<div class="drill"><div class="dtop"><button type="button" class="dx" data-quit aria-label="Stop">✕</button>` +
      `<div class="prog"><i style="width:${Math.round(Math.min(pos, total) / total * 100)}%"></i></div><span class="dn">${Math.min(pos + 1, total)}/${total}</span></div>` +
      `<section class="card dcard" style="--sh:${opts.colour || 'var(--yellow)'}"><span class="tag" style="--tc:${opts.colour || 'var(--yellow)'}">${TITLES[t.type]}</span>` +
      `${pos >= total ? '<div class="again">one more try</div>' : ''}${body(t)}</section>${foot(t)}</div>`;
    const g = root.querySelector('[data-gap]');
    if (g && !answered && focus !== false) g.focus();
    if (g && answered) { g.value = typed; g.disabled = true; }
  }
  function finish(ok, auto) {
    const t = queue[pos];
    answered = ok ? 'ok' : 'no';
    if (ok && pos < total) right++;
    if (!ok && !t.again) { missed.push(t.item); queue.push({...t, again: true}); }
    render(false);
    if (!auto && t.type !== 'pairs') speak(answerText(t));
  }
  function next() {
    pos++; answered = false; picked = []; pairs = null; typed = '';
    if (pos >= queue.length) return opts.onEnd && opts.onEnd({right, total, missed, seconds: Math.round((Date.now() - t0) / 1000)});
    render();
    const t = queue[pos];
    if (t.type === 'meaning') speak(t.item.en);
    if (t.type === 'listen') speak(t.target.en);
  }
  function check() {
    const t = queue[pos];
    if (t.type === 'build' || t.type === 'listen') return finish(drillNorm(picked.map(i => t.tiles[i]).join(' ')) === drillNorm(t.target.en));
    if (t.type === 'gap') {
      const g = root.querySelector('[data-gap]'); typed = g.value;
      if (!typed.trim()) return g.focus();
      return finish(drillNorm(g.value) === drillNorm(t.gap.answer));
    }
    if (t.type === 'say') { answered = 'ok'; render(false); speak(t.item.en); }
  }
  root.onclick = e => {
    const b = e.target.closest('button'); if (!b || b.disabled) return;
    const t = queue[pos];
    if (b.dataset.say) return speak(b.dataset.say);
    if (b.dataset.slow) { const r = voicePref().rate; setVoicePref({rate: .7}); speak(b.dataset.slow); return setVoicePref({rate: r}); }
    if (b.hasAttribute('data-quit')) return opts.onQuit && opts.onQuit();
    if (b.hasAttribute('data-next')) return next();
    if (b.dataset.said) { if (b.dataset.said === '1' && pos < total) right++; if (b.dataset.said === '0') missed.push(t.item); return next(); }
    if (answered) return;
    if (b.dataset.opt) {
      const ok = t.options[b.dataset.opt] === (t.type === 'meaning' ? t.item.ru : t.item.en);
      finish(ok);
      const opts2 = [...root.querySelectorAll('[data-opt]')];
      opts2.forEach(x => { x.disabled = true; if (t.options[x.dataset.opt] === (t.type === 'meaning' ? t.item.ru : t.item.en)) x.classList.add('right'); });
      if (!ok) opts2.find(x => x.dataset.opt === b.dataset.opt).classList.add('wrong');
      return;
    }
    if (b.dataset.tile) { picked.push(Number(b.dataset.tile)); return render(); }
    if (b.dataset.back) { picked.splice(Number(b.dataset.back), 1); return render(); }
    if (b.hasAttribute('data-check')) return check();
    if (b.dataset.pair) {
      const [side, i] = b.dataset.pair.split(':'), x = pairs[side][i];
      if (!pairs.sel || pairs.sel.side === side) { pairs.sel = {side, i: Number(i)}; return render(); }
      if (pairs[pairs.sel.side][pairs.sel.i].id === x.id) {
        pairs.done.add(x.id); pairs.sel = null; speak(x.en);
        if (pairs.done.size === t.set.length) return finish(pairs.bad <= 1, true);
        return render();
      }
      pairs.bad++; pairs.sel = null; render();
      root.querySelector(`[data-pair="${side}:${i}"]`).classList.add('bad');
    }
  };
  document.onkeydown = e => {
    if (e.key !== 'Enter') return;
    if (answered) { const n = root.querySelector('[data-next]'); if (n) { e.preventDefault(); next(); } return; }
    if (e.target.matches('[data-gap]')) { e.preventDefault(); check(); }
  };
  render();
  const t = queue[0];
  if (t.type === 'meaning') speak(t.item.en);
  if (t.type === 'listen') speak(t.target.en);
  return {task: () => queue[pos], answered: () => answered};   // for the tests
}
