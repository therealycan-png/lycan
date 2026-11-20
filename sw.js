const C='lycan-v8';const F=['./','index.html','manifest.json','icon.svg','jspdf.umd.min.js','pdf.min.js','pdf.worker.min.js'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(F)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET'||/googleapis|accounts.google|groq.com|openrouter.ai|cerebras.ai/.test(e.request.url))return;e.respondWith(fetch(e.request).then(r=>{const c=r.clone();caches.open(C).then(x=>x.put(e.request,c));return r}).catch(()=>caches.match(e.request)))});
