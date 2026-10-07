// The AI helper (2026-10-07): a small chat on every page that includes this file, and voice feedback for the
// drills' "say it" and "talk" tasks (drill.js calls aiRecorder / aiTranscribe). Talks to the Cloudflare Worker in
// worker/index.js, which holds the OpenAI key; nothing secret lives here. Empty AI_URL = everything stays hidden.
const AI_URL = 'https://workbook-ai.storyboard-review-cloud.workers.dev';
const aiReady = () => !!AI_URL && 'MediaRecorder' in window && !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);

async function aiPost(path, body) {
  const res = await fetch(AI_URL + path, {method: 'POST', body});
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'The helper did not answer');
  return data;
}
const aiAsk = (message, context) => aiPost('/chat', JSON.stringify({message, context}));
function aiTranscribe(blob, task) {
  const f = new FormData(); f.append('audio', blob, 'audio.webm'); f.append('task', task || '');
  return aiPost('/transcribe', f);
}
// start() asks for the microphone; stop() resolves with the recorded Blob
async function aiRecorder() {
  const stream = await navigator.mediaDevices.getUserMedia({audio: true});
  const rec = new MediaRecorder(stream), chunks = [];
  rec.ondataavailable = e => chunks.push(e.data);
  rec.start();
  return {stop: () => new Promise(done => {
    rec.onstop = () => { stream.getTracks().forEach(t => t.stop()); done(new Blob(chunks, {type: rec.mimeType || 'audio/webm'})); };
    rec.stop();
  }), cancel: () => { rec.onstop = null; try { rec.stop(); } catch (e) {} stream.getTracks().forEach(t => t.stop()); }};
}

(function () {
  if (!AI_URL) return;
  const el = document.createElement('div');
  el.className = 'aichat';
  el.innerHTML = '<button type="button" class="aibtn" aria-label="Ask the helper">Ask</button>' +
    '<div class="aipanel" hidden><div class="ailog"></div>' +
    '<form class="aiform"><input class="aiin" autocomplete="off" placeholder="How do I say… ?" aria-label="Your question"><button class="btn" type="submit">Send</button></form></div>';
  if (document.body) document.body.appendChild(el); else document.addEventListener('DOMContentLoaded', () => document.body.appendChild(el));
  const panel = () => el.querySelector('.aipanel'), log = () => el.querySelector('.ailog');
  const say = (cls, text) => { const d = document.createElement('div'); d.className = 'aimsg ' + cls; d.textContent = text; log().appendChild(d); log().scrollTop = 1e6; return d; };
  el.addEventListener('click', e => { if (e.target.closest('.aibtn')) { const p = panel(); p.hidden = !p.hidden; if (!p.hidden) el.querySelector('.aiin').focus(); } });
  el.addEventListener('submit', async e => {
    e.preventDefault();
    const inp = el.querySelector('.aiin'), q = inp.value.trim(); if (!q) return;
    inp.value = ''; say('me', q);
    const wait = say('bot', '…');
    try { wait.textContent = (await aiAsk(q, document.title)).reply; } catch (err) { wait.textContent = 'No answer: ' + err.message; wait.classList.add('err'); }
  });
})();
