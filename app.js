// a page brought back by the Back button is a frozen copy: reload it, or its old ticks would overwrite what another
// page saved meanwhile (the cards tick the day's Core, 2026-10-05)
window.addEventListener('pageshow', e => { if (e.persisted) location.reload(); });
if ('serviceWorker' in navigator) {
  // a page shown by an older offline copy reloads once the new copy takes over, so a fix shows on the first open
  const hadCopy = !!navigator.serviceWorker.controller;
  navigator.serviceWorker.addEventListener('controllerchange', () => { if (hadCopy) location.reload(); });
  window.addEventListener('load', () => navigator.serviceWorker.register('./service-worker.js').catch(console.error));
}
const offlineEl = document.querySelector('[data-status]');
function setStatus(){
  if(!offlineEl) return;
  const online = navigator.onLine;
  offlineEl.innerHTML = `<span class="dot ${online?'online':'offline'}"></span>${online?'Online · offline copy available after first load':'Offline mode'}`;
}
window.addEventListener('online',setStatus);window.addEventListener('offline',setStatus);setStatus();
let deferredPrompt;
window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredPrompt=e;const b=document.querySelector('[data-install]');if(b)b.hidden=false;});
document.querySelector('[data-install]')?.addEventListener('click',async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;});
