import{M as t,m as r,j as c,a as l,V as f,b as m,c as p}from"./makeScene2D.js";import{C as g}from"./Circle.js";import{c as u}from"./createRef.js";import"./ArcSegment.js";let o;o??(o=new t("project2",!1));o.loadData({version:0,shared:{background:null,range:[0,null],size:{x:1920,y:1080},audioOffset:0},preview:{fps:30,resolutionScale:1},rendering:{fps:60,resolutionScale:1,colorSpace:"srgb",exporter:{name:"@motion-canvas/core/image-sequence",options:{fileType:"image/png",quality:100,groupByScene:!1}}}});const d=o;let s;s??(s=new t("scene2",!1));s.loadData({version:0,timeEvents:[],seed:1711448815});const b=s,e=r(function*(i){const a=u();i.add(c(g,{ref:a,x:-300,width:140,height:140,fill:"#e13238"})),yield*l(a().position([300,100],1).back(1),a().fill("#00f",1).back(1))});e.name="scene2";b.attach(e.meta);e.onReplaced??(e.onReplaced=new f(e.config));const v=m({scenes:[e]}),n=new t("settings","\0settings");n.loadData({version:1,appearance:{color:"rgb(51,166,255)",font:!1,coordinates:!0},defaults:{background:"rgb(0,0,0)",size:{x:1920,y:1080}}});const k=p("project2",{core:"3.13.0",two:"3.13.0",ui:"3.13.0",vitePlugin:"3.13.0"},[],v,d,n);export{k as default};
