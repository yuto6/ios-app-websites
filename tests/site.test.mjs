import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir} from 'node:fs/promises';
import {execFileSync} from 'node:child_process';
import {resolve,dirname} from 'node:path';
const read=p=>readFile(resolve('dist',p),'utf8');
const apps=JSON.parse(await readFile('data/apps.json','utf8'));
test('six correct store destinations, all route links, and safe public output',async()=>{
 execFileSync(process.execPath,['scripts/build.mjs'],{env:{...process.env,SITE_URL:'https://verified-host.example',DEPLOYMENT:'true'}});
 const htmlFiles=[];
 async function walk(dir){for(const f of await readdir(dir,{withFileTypes:true})){const path=resolve(dir,f.name);if(f.isDirectory())await walk(path);else if(path.endsWith('.html'))htmlFiles.push(path);}}
 await walk(resolve('dist'));
 assert.equal(htmlFiles.length,21);
 const destinations=new Set();
 for(const file of htmlFiles){
  const html=await readFile(file,'utf8');
  assert.equal((html.match(/<h1>/g)||[]).length,1);
  assert.match(html,/<html lang="ja">/);
  assert.match(html,/<meta name="description"/);
  assert.doesNotMatch(html,/generated\/|ca-app-pub-|G-[A-Z0-9]+|apiKey|yuto-apps\.web\.app/);
  for(const match of html.matchAll(/href="(\/[^"#]*)/g)){
   let p=match[1];if(p.endsWith('/'))p+='index.html';await read(p.slice(1));
  }
 }
 for(const a of apps){
  destinations.add(a.storeUrl);
  const html=await read(`apps/${a.id}/index.html`);
  assert.ok(html.includes(`href="${a.storeUrl}"`));
  assert.ok(html.includes(`https://verified-host.example/apps/${a.id}/`));
  assert.ok(html.includes(a.minimumOS));
  const legal=await read(`apps/${a.id}/privacy/index.html`);
  assert.ok(legal.includes(a.privacyUrl));
 }
 assert.equal(destinations.size,6);
 assert.equal((await read('sitemap.xml')).match(/<loc>/g).length,20);
 assert.equal(await read('app-ads.txt'),'google.com, pub-9365795276850353, DIRECT, f08c47fec0942fa0\n');
 assert.match(await read('robots.txt'),/Sitemap: https:\/\/verified-host.example\/sitemap.xml/);
});
test('deployment rejects missing origin and untrusted URL shape',()=>{
 const run=env=>execFileSync(process.execPath,['scripts/build.mjs'],{env:{...process.env,...env},stdio:'pipe'});
 assert.throws(()=>run({SITE_URL:'',DEPLOYMENT:'true'}));
 for(const SITE_URL of ['http://example.com','https://example.com/wrong','https://example.com/?x=1'])assert.throws(()=>run({SITE_URL}));
});
