// The voice that reads English out loud (2026-10-05, her «голос не нрав»), shared by every page with ▶.
// It is one of the browser's own voices: the one she picks on the cards page is kept in this browser
// (localStorage "voice": {name, rate}); without a pick, the best English voice there is. Voices differ from
// device to device, so the pick is not moved by move.html.
const canSpeak = 'speechSynthesis' in window;
// novelty and robotic voices of Apple devices: never offered
const JUNK = /^(Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Junior|Kathy|Ralph|Grandma|Grandpa|Eddy|Flo|Reed|Rocko|Sandy|Shelley)\b/;
const ACCENT = {GB: 'British', US: 'American', AU: 'Australian', IE: 'Irish', NZ: 'New Zealand', ZA: 'South African', IN: 'Indian', SC: 'Scottish'};
const RATES = [['Slow', .75], ['Normal', .95], ['Fast', 1.1]];

function voicePref() { try { return JSON.parse(localStorage.getItem('voice')) || {}; } catch (e) { return {}; } }
function setVoicePref(p) { try { localStorage.setItem('voice', JSON.stringify({...voicePref(), ...p})); } catch (e) {} }
const voiceLang = v => v.lang.replace('_', '-');
const voiceAccent = v => ACCENT[voiceLang(v).slice(3, 5).toUpperCase()] || voiceLang(v);
// 3 premium, 2 enhanced or neural, 1 a network voice, 0 the small built-in one
function voiceQuality(v) {
  const s = v.name + ' ' + v.voiceURI;
  return /premium/i.test(s) ? 3 : /enhanced|neural|natural/i.test(s) ? 2 : /google|online/i.test(s) || v.localService === false ? 1 : 0;
}
const QUALITY = ['', 'online', 'Enhanced', 'Premium'];
function englishVoices() {
  if (!canSpeak) return [];
  const seen = new Set(), order = ['GB', 'US', 'AU', 'IE', 'NZ', 'ZA', 'IN'];
  const rank = v => { const i = order.indexOf(voiceLang(v).slice(3, 5).toUpperCase()); return i < 0 ? 9 : i; };
  return speechSynthesis.getVoices()
    .filter(v => /^en-/i.test(voiceLang(v)) && !JUNK.test(v.name) && !seen.has(v.voiceURI) && seen.add(v.voiceURI))
    .sort((a, b) => voiceQuality(b) - voiceQuality(a) || rank(a) - rank(b) || a.name.localeCompare(b.name));
}
// "Microsoft Hazel - English (United Kingdom)" → "Microsoft Hazel": the accent is said next to it
const voiceName = v => v.name.replace(/\s+-\s+English.*$/, '');
function currentVoice() { const vs = englishVoices(), p = voicePref(); return vs.find(v => v.voiceURI === p.uri) || vs.find(v => v.name === p.name) || vs[0] || null; }
// some browsers fill the list a moment after the page opens
const voiceListeners = [];
if (canSpeak) speechSynthesis.onvoiceschanged = () => voiceListeners.forEach(f => f());

function speak(text, v) {
  if (!canSpeak) return;
  speechSynthesis.cancel();
  // words in capitals for stress ("it IS") are read as words; real abbreviations stay letters
  const u = new SpeechSynthesisUtterance(String(text).replace(/_{3,}/g, 'blank').replace(/…/g, '')
    .replace(/\b[A-Z]{2,}\b/g, w => /^(AI|BBC|TV|OK|UK|USA?|CV|PDF)$/.test(w) ? w : w.toLowerCase()));
  v = v || currentVoice();
  if (v) u.voice = v;
  u.lang = v ? voiceLang(v) : 'en-GB'; u.rate = voicePref().rate || .95;
  speechSynthesis.speak(u);
}
