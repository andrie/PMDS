import{S as v,B as g,e as u,i as S,s as D,M as c,m as F,j as y,F as M,a as d,w as R,f as _,V as j,b as B,d as C}from"./makeScene2D.js";import{c as O,P,C as q}from"./styles.js";import{s as m}from"./sequence.js";var T=globalThis&&globalThis.__decorate||function(t,e,n,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,n):o,a;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(t,e,n,o);else for(var l=t.length-1;l>=0;l--)(a=t[l])&&(s=(i<3?a(s):i>3?a(e,n,s):a(e,n))||s);return i>3&&s&&Object.defineProperty(e,n,s),s};class b extends v{constructor(e){super(e)}getPath(){const e=new Path2D,n=this.sides(),o=g.fromSizeCentered(this.size());return u(e,o,n),e}getRipplePath(){const e=new Path2D,n=this.sides(),o=this.rippleSize(),i=g.fromSizeCentered(this.size()).expand(o);return u(e,i,n),e}}T([S(6),D()],b.prototype,"sides",void 0);let f;f??(f=new c("hexagons",!1));f.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const k=f;let p;p??(p=new c("hexagons",!1));p.loadData({version:1,timeEvents:[],seed:3073416149});const A=p;function I(t,e,n,o){return y(b,{ref:t,x:e,y:n,size:o,fill:P.gray,lineWidth:3,stroke:q.white,scale:0})}function w(t){return Math.cos(t/180*Math.PI)}function x(t){return Math.sin(t/180*Math.PI)}const r=F(function*(t){const e=[];t.add(y(M,{children:Array.from({length:9},(s,a)=>Array.from({length:14},(l,h)=>I(_(e,a*14+h),(h-14/2)*180*w(30)+a%2*180*w(30)/2,-180*a*1.5*x(30)+(9+2)*180*x(30)/2,180)))})),yield*d(m(.01,...e.map((s,a)=>s.scale(1,2))),O(R(1),m(.01,...e.map((s,a)=>{const l=1-a/e.length;return d(s.fill(P.teal,2),s.opacity(l,2))}))))});r.name="hexagons";A.attach(r.meta);r.onReplaced??(r.onReplaced=new j(r.config));const V=B({scenes:[r]}),z=new c("settings","\0settings");z.loadData({version:1,appearance:{color:"rgb(51,166,255)",font:!1,coordinates:!0},defaults:{background:"rgb(0,0,0)",size:{x:1920,y:1080}}});const G=C("hexagons",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[],V,k,z);export{G as default};
