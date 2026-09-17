if ('serviceWorker' in navigator) {
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
