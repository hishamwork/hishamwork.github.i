if(!self.define){let e,i={};const r=(r,n)=>(r=new URL(r+".js",n).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let l={};const f=e=>r(e,o),c={module:{uri:o},exports:l,require:f};i[o]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(s(...e),l)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"HishamHosn"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/android-chrome-192x192.png",revision:"74ff67e804c03a54edc55fc144aa401c"},{url:"/android-chrome-512x512.png",revision:"7373136673b777f8728d66b27a974adf"},{url:"/apple-touch-icon.png",revision:"43150b7633342d9c39493ec159e897f7"},{url:"/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/css/186.f905b423.css",revision:null},{url:"/css/app.f5ed08e4.css",revision:null},{url:"/favicon-16x16.png",revision:"3a9f5a6cb7e7f659034df44a8c466f96"},{url:"/favicon-32x32.png",revision:"013656edc793fef85dc14c0d1600ba42"},{url:"/favicon_io.zip",revision:"07f938670cd11dd0f23bead128729276"},{url:"/img/hisham.f9eff657.jpg",revision:null},{url:"/img/qr.2470f0f0.jpg",revision:null},{url:"/img/ramadan-green.8f4f8e70.gif",revision:null},{url:"/index.html",revision:"8a22253fe977c3506d304d76db3f90fd"},{url:"/js/186.e1eef88e.js",revision:null},{url:"/js/app.13305ba5.js",revision:null},{url:"/js/chunk-vendors.a6be6b41.js",revision:null},{url:"/manifest.json",revision:"2553b2e401621d8e8b1859e11729ea08"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
