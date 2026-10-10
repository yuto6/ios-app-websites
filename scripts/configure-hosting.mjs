import {writeFile} from 'node:fs/promises';
const project=process.env.FIREBASE_PROJECT_ID,site=process.env.FIREBASE_SITE_ID;
if(!/^[a-z][a-z0-9-]{4,28}[a-z0-9]$/.test(project||'') || !/^[a-z0-9][a-z0-9-]{2,28}[a-z0-9]$/.test(site||''))throw Error('Confirmed Firebase project and site IDs are required');
const config={hosting:{site,public:'dist',ignore:['firebase.json','**/.*','**/node_modules/**'],trailingSlash:true,headers:[{source:'**',headers:[{key:'X-Content-Type-Options',value:'nosniff'},{key:'Referrer-Policy',value:'no-referrer'},{key:'Content-Security-Policy',value:"default-src 'self'; img-src 'self' https://is1-ssl.mzstatic.com https://is2-ssl.mzstatic.com https://is3-ssl.mzstatic.com https://is4-ssl.mzstatic.com https://is5-ssl.mzstatic.com; style-src 'self' 'unsafe-inline'; script-src 'self'; object-src 'none'; base-uri 'none'; frame-ancestors 'none'; form-action 'none'"}]},{source:'/app-ads.txt',headers:[{key:'Content-Type',value:'text/plain; charset=utf-8'},{key:'Cache-Control',value:'public, max-age=300'}]}]}};
await writeFile('firebase.json',JSON.stringify(config,null,2)+'\n');
await writeFile('.firebaserc',JSON.stringify({projects:{default:project}},null,2)+'\n');
console.log(`Configured exactly one Hosting site: ${site}`);
