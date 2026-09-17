const CACHE='english-workbook-v1';
const CORE=[
  './','./index.html','./reader.html','./roadmap.html','./writing.html','./certificate.html',
  './styles.css','./app.js','./data.js','./manifest.webmanifest',
  './assets/cover.jpg','./assets/icon-192.png','./assets/icon-512.png',
  './8-weeks-of-english-full.pdf'
];
self.addEventListener('install',event=>{
  event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(CORE)).then(()=>self.skipWaiting()));
});
self.addEventListener('activate',event=>{
  event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
async function rangeResponse(request, cached){
  const range=request.headers.get('range');
  if(!range) return cached;
  const blob=await cached.blob();
  const m=/bytes=(\d+)-(\d*)/.exec(range);
  if(!m) return cached;
  const start=Number(m[1]);
  const end=m[2]?Number(m[2]):blob.size-1;
  const sliced=blob.slice(start,end+1,blob.type||'application/pdf');
  return new Response(sliced,{status:206,statusText:'Partial Content',headers:{
    'Content-Type':blob.type||'application/pdf',
    'Content-Range':`bytes ${start}-${end}/${blob.size}`,
    'Accept-Ranges':'bytes',
    'Content-Length':String(end-start+1)
  }});
}
self.addEventListener('fetch',event=>{
  if(event.request.method!=='GET') return;
  event.respondWith((async()=>{
    const cached=await caches.match(event.request,{ignoreSearch:true});
    if(cached) return rangeResponse(event.request,cached);
    try{
      const resp=await fetch(event.request);
      if(resp && resp.status===200){const copy=resp.clone();caches.open(CACHE).then(c=>c.put(event.request,copy));}
      return resp;
    }catch(e){
      if(event.request.mode==='navigate') return caches.match('./index.html');
      throw e;
    }
  })());
});
