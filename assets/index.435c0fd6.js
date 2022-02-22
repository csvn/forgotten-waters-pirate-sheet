var Vt=Object.defineProperty,Qt=Object.defineProperties;var Nt=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var Ee=(e,t,a)=>t in e?Vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,nt=(e,t)=>{for(var a in t||(t={}))ot.call(t,a)&&Ee(e,a,t[a]);if(X)for(var a of X(t))it.call(t,a)&&Ee(e,a,t[a]);return e},lt=(e,t)=>Qt(e,Nt(t));var ct=(e,t)=>{var a={};for(var s in e)ot.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&X)for(var s of X(e))t.indexOf(s)<0&&it.call(e,s)&&(a[s]=e[s]);return a};var g=(e,t,a)=>(Ee(e,typeof t!="symbol"?t+"":t,a),a),Ce=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};var n=(e,t,a)=>(Ce(e,t,"read from private field"),a?a.call(e):t.get(e)),l=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},H=(e,t,a,s)=>(Ce(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a);var c=(e,t,a)=>(Ce(e,t,"access private method"),a);import{r as _,c as Lt,a as Ut,g as Ft,s as Gt,d as Jt,b as He,e as S,f as Wt,h as Yt,i as Xt,p as Ht,j as Kt,k as m,o as x,$ as d,n as C,t as y,l as ze,m as w,q as Zt,u as f,v as Z,w as pt,x as qt,y as ea}from"./vendor.bb4be921.js";const ta=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};ta();const $e=_`
  button {
    cursor: pointer;
    color: var(--on-primary);
    background-color: var(--primary);
    border: 0;
    border-radius: 5px;
    font-size: inherit;
    font-family: inherit;
    line-height: 2.4;
    padding: 0 1em;
    transition: all .25s;
  }
  button:hover {
    background-color: var(--primary-alt);
  }

  input:not([type="checkbox"]),
  select {
    display: block;
    color: var(--on-input);
    background-color: var(--input);
    border: solid 1px var(--border);
    border-radius: 5px;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.8;
    padding: 0 10px;
  }
  input:not([type="checkbox"]):focus {
    background-color: var(--input-active);
  }
  select option {
    background-color: var(--input);
  }
  select option[selected] {
    background-color: var(--input-active);
  }

  input[type="checkbox"] {
    margin-left: 20px;
    transform: scale(1.8);
  }
`,aa=_`
  :host {
    display: grid;
    grid:
      "header header" auto
      "controls main" 1fr
      "footer footer" auto
      / auto 1fr;
  }

  header, x-controls {
    background-color: var(--bg-alt);
  }

  header {
    display: flex;
    grid-area: header;
    align-items: center;
    gap: 20px;
    padding: 5px 25px;
    position: sticky;
    top: 0;
    z-index: var(--z-header);
  }

  header h1 {
    font-size: 1.6em;
    flex: 1;
    margin: 0;
  }

  main {
    padding: 25px;
  }

  .sheets {
    display: grid;
    gap: 50px 10px;
    grid-auto-rows: minmax(1000px, calc(100vh - 105px));
    grid-template-columns: repeat(2, minmax(10px, 1fr));
    /* grid-template-columns: repeat(auto-fill, minmax(max-content, 1fr));*/
    justify-items: center;
  }

  footer {
    grid-area: footer;
    text-align: center;
  }

  @media (max-width: 2300px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }
`;var j;class ra{constructor(){l(this,j,Lt("v0","Pirate"));Ut()}async getItem(t){return JSON.stringify(await Ft(t,n(this,j)))}setItem(t,a){return Gt(t,JSON.parse(a),n(this,j))}removeItem(t){return Jt(t,n(this,j))}}j=new WeakMap;const k=He("global/clear"),Ot=He("global/export"),jt=He("global/import"),dt={reRoll:0,misfortune:0},At=S({name:"dice",initialState:dt,reducers:{increment(e,t){e[t.payload]+=1},decrement(e,t){e[t.payload]>0&&(e[t.payload]-=1)},roll(e){e.misfortune>0&&(e.misfortune-=1)},reRoll(e){e.reRoll-=1,e.misfortune>0&&(e.misfortune-=1)}},extraReducers:e=>{e.addCase(k,()=>dt)}}),ut={events:[!1,!1,!1,!1,!1],chartEvents:[],chartProgress:[]},Tt=S({name:"constellation",initialState:ut,reducers:{toggleChartEvent({chartEvents:e},{payload:t}){e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)},toggleChartProgress({chartProgress:e},{payload:t}){e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)},toggleEvent({events:e},{payload:t}){e[t]!==void 0&&(e[t]=!e[t])}},extraReducers:e=>{e.addCase(k,()=>ut)}}),ht={exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},zt=S({name:"skills",initialState:ht,reducers:{update(e,t){const[a,s]=t.payload;e[a]=s}},extraReducers:e=>{e.addCase(k,()=>ht)}}),gt={nickname:"",pirateName:"",pirate:void 0,storyBlanks:["","","","",""]},$t=S({name:"social",initialState:gt,reducers:{selectPirate(e,t){e.pirate=t.payload},updateName(e,t){e.pirateName=t.payload},updateNickname(e,t){e.nickname=t.payload},updateStoryBlank(e,t){const[a,s]=t.payload;e.storyBlanks[a]=s}},extraReducers:e=>{e.addCase(k,()=>gt)}}),sa="modulepreload",bt={},oa="/forgotten-waters-pirate-sheet/",ia=function(t,a){return!a||a.length===0?t():Promise.all(a.map(s=>{if(s=`${oa}${s}`,s in bt)return;bt[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":sa,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((h,Y)=>{i.addEventListener("load",h),i.addEventListener("error",Y)})})).then(()=>t())},na=e=>{},Mt=Wt("data/fetchPirates",async()=>(await ia(()=>import("./pirates.822ac89f.js"),[])).default),la={pirates:[]},Et=S({name:"data",initialState:la,reducers:{},extraReducers:e=>{e.addCase(Mt.fulfilled,(t,a)=>na(t.pirates.push(...a.payload)))}}),ft={theme:void 0,shouldPlaySounds:!0},Ct=S({name:"settings",initialState:ft,reducers:{selectTheme(e,t){e.theme=t.payload},toggleSounds(e){e.shouldPlaySounds=!e.shouldPlaySounds}},extraReducers:e=>{e.addCase(k,()=>ft)}}),_t={isPirateOpen:!0,isStoryBlanksOpen:!1,isSettingsOpen:!1},Rt=S({name:"ui",initialState:_t,reducers:{togglePirate(e){e.isPirateOpen=!e.isPirateOpen},toggleStoryBlanks(e){e.isStoryBlanksOpen=!e.isStoryBlanksOpen},toggleSettings(e){e.isSettingsOpen=!e.isSettingsOpen}},extraReducers:e=>{e.addCase(k,()=>_t)}}),ca=Yt({constellation:Tt.reducer,data:Et.reducer,dice:At.reducer,skills:zt.reducer,social:$t.reducer,settings:Ct.reducer,ui:Rt.reducer}),p={constellation:Tt.actions,data:Et.actions,dice:At.actions,global:{clear:k,exportData:Ot,importData:jt},skills:zt.actions,social:$t.actions,settings:Ct.actions,ui:Rt.actions};function pa(e){return Object.keys(e)}function da(e){throw e}function q(e){return Array.from({length:e},(t,a)=>a)}function Ke(e){return new Promise(t=>setTimeout(()=>t(),e))}function ua(e,t){let a;return(...r)=>{a&&clearTimeout(a),a=setTimeout(()=>t(...r),e)}}function Ze(e,t){return new Promise(a=>e.addEventListener(t,s=>a(s),{once:!0}))}function Dt(e){return t=>{const a=ua(200,s=>e.dispatch(t(s)));return s=>a(s.currentTarget.value)}}async function ha(e,t){if(Ot.match(e)){const a=t,{data:s,_persist:r}=a,o=ct(a,["data","_persist"]);await ga("pirate-data.json",JSON.stringify(o))}else if(jt.match(e)){const s=await ba();if(alert("There's no validation on the imported file's content. I'll just trust that you are providing data in a correct format, alright? \u{1F928}"),s)return{type:"persist/REHYDRATE",key:"root",import:!0,payload:s}}}async function ga(e,t){const a=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(a),r=document.createElement("a"),o=Ze(r,"click");r.href=s,r.download=e,r.click(),await o,await Ke(50),URL.revokeObjectURL(s)}async function ba(){const e=document.createElement("input");if(e.type="file",e.accept="application/json,.json",e.click(),await Ze(e,"input"),e.files){const[t]=e.files;return JSON.parse(await t.text())}}var fa="/forgotten-waters-pirate-sheet/assets/coin-clink.ac2914d5.mp3",_a="/forgotten-waters-pirate-sheet/assets/coin-clink-2.a2741018.mp3",vt="/forgotten-waters-pirate-sheet/assets/coin-use.6c7ae85b.mp3",K="/forgotten-waters-pirate-sheet/assets/pen-scratch.69d14fde.mp3",va="/forgotten-waters-pirate-sheet/assets/bell.2e3d72f4.mp3";async function v(...e){const t=e[Math.floor(Math.random()*e.length)],a=new Audio(t);a.volume=.2,await Ze(a,"canplay"),await a.play(),await Ke(a.duration*1e3)}async function ma(e,t){if(!t.settings.shouldPlaySounds)return;const a=()=>v(fa,_a),{constellation:s}=t;p.constellation.toggleChartProgress.match(e)&&s.chartProgress.includes(e.payload)&&await v(K),p.constellation.toggleChartEvent.match(e)&&s.chartEvents.includes(e.payload)&&(await v(K),await a()),p.constellation.toggleEvent.match(e)&&(await v(K),await(s.events[e.payload]?v(vt):a())),p.dice.increment.match(e)&&await a(),p.dice.decrement.match(e)&&await v(vt),p.skills.update.match(e)&&await v(K),e.type==="persist/REHYDRATE"&&e.import&&await v(va)}function ya(){const e=[...document.styleSheets].at(-1).ownerNode,t=document.createElement("link");t.type="text/css",t.rel="stylesheet";const a=["bright-parchment","bright-skies","moldy-parchment","ocean-heart"],s=new Map(a.map(r=>[r,`/${r}.css`]));return r=>{var i;const o=r.settings.theme;if(o===void 0&&t.parentNode!==null)t.remove();else if(o!==void 0){const h=(i=s.get(o))!=null?i:"undefined.css";t.href!==h&&(t.href=h),t.parentNode===null&&e.insertAdjacentElement("afterend",t)}}}const wa=e=>{const t=ya();return xa(e),a=>s=>{const r=a(s);return Sa(e,r,e.getState()),t(e.getState()),r}};async function xa(e){const t=[Mt];await Ke(1),t.forEach(a=>e.dispatch(a()))}async function Sa(e,t,a){const s=[ma,ha].map(r=>r(t,a));for(const r of await Promise.all(s))typeof r!="undefined"&&e.dispatch(r)}const ee=Xt({reducer:Ht({key:"root",blacklist:["data"],storage:new ra},ca),devTools:!0,middleware:e=>[...e({serializableCheck:{ignoredActions:["persist/PERSIST"]}}),wa]});Kt(ee);var D,B;class E{constructor(t){l(this,D,void 0);l(this,B,void 0);t.addController(this),H(this,B,t)}hostConnected(){const t=()=>{n(this,B).state=ee.getState()};t(),H(this,D,ee.subscribe(t))}hostDisconnected(){var t;(t=n(this,D))==null||t.call(this)}dispatch(t){ee.dispatch(t)}}D=new WeakMap,B=new WeakMap;var ka="data:image/webp;base64,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",Pa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ka}),Oa="/forgotten-waters-pirate-sheet/assets/coin-misfortune.2611b957.webp",ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oa}),Aa="/forgotten-waters-pirate-sheet/assets/coin-re-roll.2f4ae4b8.webp",Ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Aa}),za="data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSEsAAAABYE3bVq2FEEoIIR2TgxDSRglhf+7uAyAiFKZtwyQduoXYtvKWaEXL4GysTgbkbNTzZNf0Z+bGcGH4hYeVjVYpGcxyMn2sQcpucgEAVlA4ICoAAACwAgCdASoUABQAPiUQh0KhoQoCAAwBIlpAAA9o6AAA/v7urxVNvyYAAAA=",$a=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:za}),Ma="/forgotten-waters-pirate-sheet/assets/icons.f12f798a.svg",Ea=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ma}),Ca="/forgotten-waters-pirate-sheet/assets/pirate-pub.101f2f3e.webp",Ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ca}),Da="/forgotten-waters-pirate-sheet/assets/the-alchemist-pirate_1.5e03d1c5.webp",Ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Da}),Ia="/forgotten-waters-pirate-sheet/assets/the-alchemist-pirate_2.e71a7481.webp",Va=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ia}),Qa="/forgotten-waters-pirate-sheet/assets/the-all-seeing-pirate_1.7f3aa6ef.webp",Na=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qa}),La="/forgotten-waters-pirate-sheet/assets/the-all-seeing-pirate_2.13ae0a39.webp",Ua=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:La}),Fa="/forgotten-waters-pirate-sheet/assets/the-assassin-pirate_1.1618617a.webp",Ga=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fa}),Ja="/forgotten-waters-pirate-sheet/assets/the-assassin-pirate_2.c454d1f7.webp",Wa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ja}),Ya="/forgotten-waters-pirate-sheet/assets/the-cannonwright-pirate_1.bb786948.webp",Xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ya}),Ha="/forgotten-waters-pirate-sheet/assets/the-cannonwright-pirate_2.d388706c.webp",Ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ha}),Za="/forgotten-waters-pirate-sheet/assets/the-culinary-pirate_1.e2f59e4a.webp",qa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Za}),er="/forgotten-waters-pirate-sheet/assets/the-culinary-pirate_2.9317962d.webp",tr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:er}),ar="/forgotten-waters-pirate-sheet/assets/the-debater-pirate_1.a900322b.webp",rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ar}),sr="/forgotten-waters-pirate-sheet/assets/the-debater-pirate_2.41a319a8.webp",or=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sr}),ir="/forgotten-waters-pirate-sheet/assets/the-doomed-pirate_1.a5e65da2.webp",nr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ir}),lr="/forgotten-waters-pirate-sheet/assets/the-doomed-pirate_2.64a68190.webp",cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lr}),pr="/forgotten-waters-pirate-sheet/assets/the-duelist-pirate_1.95a561be.webp",dr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pr}),ur="/forgotten-waters-pirate-sheet/assets/the-duelist-pirate_2.74c618e1.webp",hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ur}),gr="/forgotten-waters-pirate-sheet/assets/the-gold-coat-pirate_1.9f162bd6.webp",br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gr}),fr="/forgotten-waters-pirate-sheet/assets/the-gold-coat-pirate_2.670c2c72.webp",_r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fr}),vr="/forgotten-waters-pirate-sheet/assets/the-grifter-pirate_1.5449294d.webp",mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vr}),yr="/forgotten-waters-pirate-sheet/assets/the-grifter-pirate_2.89b34e5a.webp",wr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:yr}),xr="/forgotten-waters-pirate-sheet/assets/the-lovesick-pirate_1.5c2f9a6c.webp",Sr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xr}),kr="/forgotten-waters-pirate-sheet/assets/the-lovesick-pirate_2.50ba4c13.webp",Pr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kr}),Or="/forgotten-waters-pirate-sheet/assets/the-orphan-pirate_1.ca0061a9.webp",jr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Or}),Ar="/forgotten-waters-pirate-sheet/assets/the-orphan-pirate_2.aad17ddb.webp",Tr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ar}),zr="/forgotten-waters-pirate-sheet/assets/the-parent-pirate_1.ee52d5b4.webp",$r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zr}),Mr="/forgotten-waters-pirate-sheet/assets/the-parent-pirate_2.5125e722.webp",Er=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Mr}),Cr="/forgotten-waters-pirate-sheet/assets/the-safety-pirate_1.1b37934e.webp",Rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cr}),Dr="/forgotten-waters-pirate-sheet/assets/the-safety-pirate_2.d77ddd35.webp",Br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dr}),Ir="/forgotten-waters-pirate-sheet/assets/the-sea-serpent-pirate_1.af1dd84a.webp",Vr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ir}),Qr="/forgotten-waters-pirate-sheet/assets/the-sea-serpent-pirate_2.6aa553e2.webp",Nr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qr}),Lr="/forgotten-waters-pirate-sheet/assets/the-seasick-pirate_1.31d9df45.webp",Ur=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lr}),Fr="/forgotten-waters-pirate-sheet/assets/the-seasick-pirate_2.5b817690.webp",Gr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fr}),Jr="/forgotten-waters-pirate-sheet/assets/the-seeker-pirate_1.346f8062.webp",Wr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Jr}),Yr="/forgotten-waters-pirate-sheet/assets/the-seeker-pirate_2.76bfbc8a.webp",Xr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yr}),Hr="/forgotten-waters-pirate-sheet/assets/the-skeleton-pirate_1.2183f124.webp",Kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Hr}),Zr="/forgotten-waters-pirate-sheet/assets/the-skeleton-pirate_2.96983d9a.webp",qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zr}),es="/forgotten-waters-pirate-sheet/assets/the-survivor-pirate_1.782951b4.webp",ts=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:es}),as="/forgotten-waters-pirate-sheet/assets/the-survivor-pirate_2.897b6841.webp",rs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:as}),ss="/forgotten-waters-pirate-sheet/assets/the-thespian-pirate_1.76259dbb.webp",os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ss}),is="/forgotten-waters-pirate-sheet/assets/the-thespian-pirate_2.f6b337fb.webp",ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:is}),ls="/forgotten-waters-pirate-sheet/assets/the-trickster-pirate_1.0de8c6de.webp",cs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ls}),ps="/forgotten-waters-pirate-sheet/assets/the-trickster-pirate_2.dfa0222c.webp",ds=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ps});const O=Object.fromEntries(Object.entries({"./assets/coin-constellation-event.webp":Pa,"./assets/coin-misfortune.webp":ja,"./assets/coin-re-roll.webp":Ta,"./assets/draw.webp":$a,"./assets/icons.svg":Ea,"./assets/pirate-pub.webp":Ra,"./assets/pirates/the-alchemist-pirate_1.webp":Ba,"./assets/pirates/the-alchemist-pirate_2.webp":Va,"./assets/pirates/the-all-seeing-pirate_1.webp":Na,"./assets/pirates/the-all-seeing-pirate_2.webp":Ua,"./assets/pirates/the-assassin-pirate_1.webp":Ga,"./assets/pirates/the-assassin-pirate_2.webp":Wa,"./assets/pirates/the-cannonwright-pirate_1.webp":Xa,"./assets/pirates/the-cannonwright-pirate_2.webp":Ka,"./assets/pirates/the-culinary-pirate_1.webp":qa,"./assets/pirates/the-culinary-pirate_2.webp":tr,"./assets/pirates/the-debater-pirate_1.webp":rr,"./assets/pirates/the-debater-pirate_2.webp":or,"./assets/pirates/the-doomed-pirate_1.webp":nr,"./assets/pirates/the-doomed-pirate_2.webp":cr,"./assets/pirates/the-duelist-pirate_1.webp":dr,"./assets/pirates/the-duelist-pirate_2.webp":hr,"./assets/pirates/the-gold-coat-pirate_1.webp":br,"./assets/pirates/the-gold-coat-pirate_2.webp":_r,"./assets/pirates/the-grifter-pirate_1.webp":mr,"./assets/pirates/the-grifter-pirate_2.webp":wr,"./assets/pirates/the-lovesick-pirate_1.webp":Sr,"./assets/pirates/the-lovesick-pirate_2.webp":Pr,"./assets/pirates/the-orphan-pirate_1.webp":jr,"./assets/pirates/the-orphan-pirate_2.webp":Tr,"./assets/pirates/the-parent-pirate_1.webp":$r,"./assets/pirates/the-parent-pirate_2.webp":Er,"./assets/pirates/the-safety-pirate_1.webp":Rr,"./assets/pirates/the-safety-pirate_2.webp":Br,"./assets/pirates/the-sea-serpent-pirate_1.webp":Vr,"./assets/pirates/the-sea-serpent-pirate_2.webp":Nr,"./assets/pirates/the-seasick-pirate_1.webp":Ur,"./assets/pirates/the-seasick-pirate_2.webp":Gr,"./assets/pirates/the-seeker-pirate_1.webp":Wr,"./assets/pirates/the-seeker-pirate_2.webp":Xr,"./assets/pirates/the-skeleton-pirate_1.webp":Kr,"./assets/pirates/the-skeleton-pirate_2.webp":qr,"./assets/pirates/the-survivor-pirate_1.webp":ts,"./assets/pirates/the-survivor-pirate_2.webp":rs,"./assets/pirates/the-thespian-pirate_1.webp":os,"./assets/pirates/the-thespian-pirate_2.webp":ns,"./assets/pirates/the-trickster-pirate_1.webp":cs,"./assets/pirates/the-trickster-pirate_2.webp":ds}).map(([e,t])=>[e,t.default])),R=O["./assets/icons.svg"];O["./assets/draw.webp"];const Re={reRoll:O["./assets/coin-re-roll.webp"],misfortune:O["./assets/coin-misfortune.webp"],constellationEvent:O["./assets/coin-constellation-event.webp"]};function us(e,t){return O[`./assets/pirates/${e}_${t}.webp`]}var hs=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,qe=(e,t,a,s)=>{for(var r=s>1?void 0:s?gs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&hs(t,a,r),r},Ve,I,V,A,De,Q,mt,N,yt,L,wt,ie,bs,ne,fs;let te=(Ve=class extends m{constructor(){super(...arguments);l(this,A);l(this,Q);l(this,N);l(this,L);l(this,ie);l(this,ne);l(this,I,new E(this));l(this,V,void 0)}updated(){var t,a;const e=n(this,V);if(e!==void 0&&e!==n(this,A,De)){const s=(t=this.shadowRoot)==null?void 0:t.querySelector(".coin"),r=Number(getComputedStyle(s).getPropertyValue("--image-rotation").replace(/deg$/,"")),o=Math.sin(r*Math.PI/180),i=Math.cos(r*Math.PI/180);s.animate([{transform:`rotate(${r}deg)`},{transform:`rotate(${r}deg) rotate3d(${o}, ${i}, 0, 180deg) scale(1.55)`,offset:.5},{transform:`rotate(${r}deg) rotate3d(${o}, ${i}, 0, 360deg)`,offset:1}],{duration:400})}((a=this.state)==null?void 0:a._persist.rehydrated)&&H(this,V,n(this,A,De))}render(){return d`
      <div class="coin ${this.type}"></div>
      x${n(this,A,De)}
      ${C(this.type!=="constellationEvent",()=>d`
        <div class="buttons">
          <button aria-label=${n(this,N,yt)} title=${n(this,N,yt)} @click=${c(this,ie,bs)}>+</button>
          <button aria-label=${n(this,L,wt)} title=${n(this,L,wt)} @click=${c(this,ne,fs)}>-</button>
        </div>
      `)}
    `}},I=new WeakMap,V=new WeakMap,A=new WeakSet,De=function(){const{dice:e,constellation:{events:t,chartEvents:a}}=this.state;return this.type==="constellationEvent"?a.length-t.filter(s=>s).length:e[this.type]},Q=new WeakSet,mt=function(){return this.type==="reRoll"?"Re-Roll":this.type==="misfortune"?"Misfortune":this.type==="constellationEvent"?"Constellation-Event":da(new Error(`Invalid type "${this.type}"`))},N=new WeakSet,yt=function(){return`Increment ${n(this,Q,mt)} coin`},L=new WeakSet,wt=function(){return`Decrement ${n(this,Q,mt)} coin`},ie=new WeakSet,bs=function(){n(this,I).dispatch(p.dice.increment(this.type))},ne=new WeakSet,fs=function(){n(this,I).dispatch(p.dice.decrement(this.type))},g(Ve,"styles",[$e,_`
    :host {
      display: flex;
      gap: 8px;
      font-size: 1.8em;
      align-items: center;
      margin: 0 8px;
    }

    .buttons {
      display: flex;
      flex-direction: column;
      gap: 5px;
      padding: 5px;
    }

    button {
      display: block;
      aspect-ratio: 1;
      font-size: 1rem;
      line-height: 1.4;
      padding: 0 .3em;
    }

    .coin {
      --size: 45px;
      background-position: center;
      background-size: 120%;
      border-radius: 50%;
      width: var(--size);
      height: var(--size);
      user-select: none;
      filter: var(--filter);
      transform: rotate(var(--image-rotation));
    }
    .coin.reRoll {
      --image-rotation: 100deg;
      --filter: var(--coin-re-roll-filter);
      background-image: url('${x(Re.reRoll)}');
    }
    .coin.misfortune {
      --image-rotation: 35deg;
      --filter: var(--coin-misfortune-filter);
      background-image: url('${x(Re.misfortune)}');
    }
    .coin.constellationEvent {
      --image-rotation: 45deg;
      --filter: var(--coin-constellation-event-filter);
      background-image: url('${x(Re.constellationEvent)}');
    }
  `]),Ve);qe([y()],te.prototype,"state",2);qe([ze()],te.prototype,"type",2);te=qe([w("x-coin")],te);var _s=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Bt=(e,t,a,s)=>{for(var r=s>1?void 0:s?vs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&_s(t,a,r),r},Qe,u,T,z,b,P,le,ms,ce,ys,U,xt,pe,ws,de,xs,ue,Ss,he,ks,ge,Ps,be,Os,fe,js,_e,As;let We=(Qe=class extends m{constructor(){super(...arguments);l(this,b);l(this,le);l(this,ce);l(this,U);l(this,pe);l(this,de);l(this,ue);l(this,he);l(this,ge);l(this,be);l(this,fe);l(this,_e);l(this,u,new E(this));l(this,T,Dt(n(this,u)));l(this,z,"--default--")}render(){var e,t;return d`
      <x-form-section legend="Pirate" .open=${this.state.ui.isPirateOpen} @toggle=${c(this,he,ks)}>
        <label for="nickname">Nickname</label>
        <input id="nickname" type="text" name="nickname" placeholder="Pogchamp" .xautofocus=${n(this,b,P).nickname.length===0} .value=${n(this,b,P).nickname} @input=${n(this,T).call(this,a=>p.social.updateNickname(a))}>

        <label for="pirateName">Pirate name</label>
        <input id="pirateName" type="text" name="pirateName" placeholder="Randy McDude" .value=${n(this,b,P).pirateName} @input=${n(this,T).call(this,a=>p.social.updateName(a))}>

        <label for="pirate">Pirate type</label>
        <select id="pirate" name="pirate" .value=${(e=n(this,b,P).pirate)!=null?e:""} @change=${c(this,ce,ys)}>
          <option value="">Select a pirate!</option>
          ${this.state.data.pirates.map(({id:a,name:s})=>d`
            <option value=${a} .selected=${a===n(this,b,P).pirate}>${s}</option>
          `)}
        </select>
        ${c(this,U,xt).call(this)>0?d`<p>Constellation event count: ${c(this,U,xt).call(this)}</p>`:""}
      </x-form-section>

      <x-form-section legend="Story blanks" .open=${this.state.ui.isStoryBlanksOpen} @toggle=${c(this,ge,Ps)}>
        ${n(this,b,P).storyBlanks.map((a,s)=>d`
          <label for="blank${s}">#${s+1}</label>
          <input
              id="blank${s}"
              type="text"
              name="blank${s}"
              placeholder="Story..."
              .value=${a}
              @input=${n(this,T).call(this,r=>p.social.updateStoryBlank([s,r]))}>
        `)}
      </x-form-section>

      <x-form-section legend="Settings" .open=${this.state.ui.isSettingsOpen} @toggle=${c(this,be,Os)}>
        <label for="theme">Theme</label>
        <select id="theme" name="theme" .value=${Zt((t=this.state.settings.theme)!=null?t:n(this,z))} @change=${c(this,fe,js)}>
          <option value=${n(this,z)}>Comforting sky</option>
          <option value="moldy-parchment">Moldy parchment</option>
          <option value="ocean-heart">Ocean's heart</option>
          <option value="bright-skies">Bright skies</option>
          <option value="bright-parchment">Bright parchment</option>
        </select>

        <label for="font">Font</label>
        <select id="font" name="font" @change=${c(this,le,ms)}>
          <option value="Mansalva" selected>Mansalva</option>
          <option value="Caveat">Caveat</option>
          <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label for="sounds">Sounds enabled</label>
        <input id="sounds" name="sounds" type="checkbox" .checked=${this.state.settings.shouldPlaySounds} @change=${c(this,_e,As)}>
      </x-form-section>

      <hr style="width: 90%">

      <button @click=${c(this,pe,ws)}>Clear</button>
      <button @click=${c(this,de,xs)}>Import</button>
      <button @click=${c(this,ue,Ss)}>Export</button>
    `}},u=new WeakMap,T=new WeakMap,z=new WeakMap,b=new WeakSet,P=function(){return this.state.social},le=new WeakSet,ms=function(e){document.documentElement.style.setProperty("--font-family",e.currentTarget.value)},ce=new WeakSet,ys=function(e){const t=e.currentTarget;n(this,u).dispatch(p.social.selectPirate(t.value))},U=new WeakSet,xt=function(){var r,o;const{social:{pirate:e},data:{pirates:t}}=this.state,{chartEvents:a=[],chartProgress:s=[]}=(o=(r=t.find(i=>i.id===e))==null?void 0:r.positions)!=null?o:{};return a.length+s.length},pe=new WeakSet,ws=function(){confirm("Are you sure you want to delete all saved data?")&&n(this,u).dispatch(p.global.clear())},de=new WeakSet,xs=function(){n(this,u).dispatch(p.global.importData())},ue=new WeakSet,Ss=function(){n(this,u).dispatch(p.global.exportData())},he=new WeakSet,ks=function(){n(this,u).dispatch(p.ui.togglePirate())},ge=new WeakSet,Ps=function(){n(this,u).dispatch(p.ui.toggleStoryBlanks())},be=new WeakSet,Os=function(){n(this,u).dispatch(p.ui.toggleSettings())},fe=new WeakSet,js=function(e){const t=e.currentTarget.value;n(this,u).dispatch(p.settings.selectTheme(t===n(this,z)?void 0:t))},_e=new WeakSet,As=function(){n(this,u).dispatch(p.settings.toggleSounds())},g(Qe,"styles",[$e,_`
    :host {
      display: flex;
      gap: 10px 0;
      grid-area: controls;
      flex-direction: column;
      padding: 0 15px;
    }

    p {
      color: var(--inactive);
      font-size: .7em;
      margin: 0;
    }

    label {
      font-size: .85rem;
      font-weight: bold;
      margin-top: -1em;
      transform: translate(0, .7em);
    }

    input:not([type="checkbox"]), select {
      width: 100%;
      min-width: 100px;
    }
  `]),Qe);Bt([y()],We.prototype,"state",2);We=Bt([w("x-controls")],We);var Ts=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,$s=(e,t,a,s)=>{for(var r=s>1?void 0:s?zs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ts(t,a,r),r},Ne;let St=(Ne=class extends m{updated(){this.setAttribute("aria-hidden","true")}render(){var t;const e=`${R}#${(t=this.textContent)==null?void 0:t.trim()}`;return d`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${e}" />
      </svg>
    `}},g(Ne,"styles",[$e,_`
    :host {
      color: var(--on-bg);
      display: inline-grid;
      width: 1.2em;
    }

    svg {
      fill: currentColor;
      aspect-ratio: 1;
    }
  `]),Ne);St=$s([w("x-icon")],St);var Ms=Object.defineProperty,Es=Object.getOwnPropertyDescriptor,et=(e,t,a,s)=>{for(var r=s>1?void 0:s?Es(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ms(t,a,r),r},Le,ve,F,kt,me,Cs,ye,Rs;let ae=(Le=class extends m{constructor(){super(...arguments);l(this,F);l(this,me);l(this,ye);l(this,ve,new E(this))}render(){return d`
      ${[...c(this,ye,Rs).call(this),...c(this,me,Cs).call(this)].map(e=>d`
        <button
            class=${f({selected:e.selected,pulse:this.pulse,[e.type]:!0})}
            style=${Z({"--x":String(e.x),"--y":String(e.y)})}
            @click=${e.toggle}></button>
      `)}

      <x-icon
          id="help"
          title="Click on constellation nodes to select them"
          @mouseenter=${()=>this.pulse=!0}
          @mouseleave=${()=>this.pulse=!1}>
        questionmark
      </x-icon>
    `}},ve=new WeakMap,F=new WeakSet,kt=function(e){var h,Y;const{social:t,data:a,constellation:s}=this.state,r=(Y=(h=a.pirates.find(Me=>Me.id===t.pirate))==null?void 0:h.positions[e])!=null?Y:[],o=e==="chartEvents"?s.chartEvents:s.chartProgress,i=p.constellation[e==="chartEvents"?"toggleChartEvent":"toggleChartProgress"];return r.map((Me,st)=>lt(nt({},Me),{type:e==="chartEvents"?"event":"progress",selected:o.includes(st),toggle:()=>n(this,ve).dispatch(i(st))}))},me=new WeakSet,Cs=function(){return c(this,F,kt).call(this,"chartEvents")},ye=new WeakSet,Rs=function(){return c(this,F,kt).call(this,"chartProgress")},g(Le,"styles",_`
    :host {
      display: block;
      aspect-ratio: 1.204;
      position: relative;
    }

    button {
      cursor: pointer;
      background-color: transparent;
      border: dashed 3px transparent;
      border-radius: 50%;
      box-sizing: border-box;
      aspect-ratio: 1;
      position: absolute;
      width: 5%;
      top: calc(var(--y) * 100%);
      left: calc(var(--x) * 100%);
      transform: translate(-50%, -50%);
      transition: background-color .2s linear, border-color .2s linear;
    }
    button.selected {
      background-color: var(--hint-active);
      mask-image: url('${x(R+"#cross-mask")}');
      -webkit-mask-image: url('${x(R+"#cross-mask")}');
      animation: grow 0.4s cubic-bezier(.71,.51,.58,2.4);
      transform-origin: top left;
    }
    button:hover:not(.selected) {
      background-color: var(--hint);
      border-color: var(--hint-active);
    }
    button.pulse:not(:hover):not(.selected) {
      --to: var(--hint);
      animation: pulse 2s linear infinite;
    }

    .progress {
      width: 5.2%;
    }

    .event {
      width: 7.2%;
    }

    #help {
      cursor: help;
      color: var(--hint-active);
      position: absolute;
      right: -10%;
      bottom: -10%;
    }

    @keyframes grow {
      0% {
        transform: scale(0) translate(-50%, -50%);
      }
      100% {
        transform: scale(1) translate(-50%, -50%);
      }
    }

    @keyframes pulse {
      0% {
        background-color: transparent;
      }
      35% {
        background-color: var(--to);
      }
      70%, 100% {
        background-color: transparent;
      }
    }
  `),Le);et([y()],ae.prototype,"pulse",2);et([y()],ae.prototype,"state",2);ae=et([w("x-star-chart")],ae);var Ds=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,tt=(e,t,a,s)=>{for(var r=s>1?void 0:s?Bs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ds(t,a,r),r},Ue,we,xe,Is,Se,Vs,ke,Qs;let re=(Ue=class extends m{constructor(){super(...arguments);l(this,xe);l(this,Se);l(this,ke);l(this,we,new E(this))}render(){return d`
      <div class="labels"></div>
      ${pt(c(this,Se,Vs).call(this),e=>pt(q(8),t=>d`
        <button class="stat-value${f({pulse:this.pulse,active:c(this,xe,Is).call(this,e,t)})}" @click=${()=>c(this,ke,Qs).call(this,e,t)}></button>
      `))}

      <x-icon
          id="help"
          title="Click stat boxes to raise or lower stats"
          @mouseenter=${()=>this.pulse=!0}
          @mouseleave=${()=>this.pulse=!1}>
        questionmark
      </x-icon>
    `}},we=new WeakMap,xe=new WeakSet,Is=function(e,t){return t>0&&this.state.skills[e]>=t},Se=new WeakSet,Vs=function(){return pa(this.state.skills)},ke=new WeakSet,Qs=function(e,t){n(this,we).dispatch(p.skills.update([e,t]))},g(Ue,"styles",_`
    :host {
      display: grid;
      grid: 17.6% repeat(5, 1fr) / 32.8% 8.7% repeat(6, 1fr) 9%;
      gap: 1px;
      aspect-ratio: 324 / 133;
    }
    .labels {
      grid-row: span 6;
    }
    .stat-value {
      cursor: pointer;
      background-color: transparent;
      border: dashed 1px var(--hint);
      padding: 0;
      transition: background-color .2s linear;
    }
    .stat-value:hover {
      background-color: var(--hint);
      border-color: var(--hint-active);
    }
    .stat-value.active {
      background-color: var(--hint-active);
      mask-image: url('${x(R+"#cross-mask")}');
      -webkit-mask-image: url('${x(R+"#cross-mask")}');
      animation: grow 0.4s cubic-bezier(.71,.51,.58,2.4);
    }
    .stat-value.pulse:not(:hover):not(.active) {
      --to: var(--hint);
      animation: pulse 2s linear infinite;
    }

    #help {
      cursor: help;
      color: var(--hint-active);
      position: absolute;
      right: -10%;
      bottom: -10%;
    }

    @keyframes grow {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }

    @keyframes pulse {
      0% {
        background-color: transparent;
      }
      35% {
        background-color: var(--to);
      }
      70%, 100% {
        background-color: transparent;
      }
    }
  `),Ue);tt([y()],re.prototype,"pulse",2);tt([y()],re.prototype,"state",2);re=tt([w("x-stats")],re);var Ns=Object.defineProperty,Ls=Object.getOwnPropertyDescriptor,at=(e,t,a,s)=>{for(var r=s>1?void 0:s?Ls(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ns(t,a,r),r},Fe,G,Pe,J,Oe,Us,$,Be,je,Fs,Ae,Gs,Te,Js,M,Ie;let se=(Fe=class extends m{constructor(){super(...arguments);l(this,Oe);l(this,$);l(this,je);l(this,Ae);l(this,Te);l(this,M);l(this,G,new E(this));l(this,Pe,new qt(this,{callback:([e])=>e?e.contentRect.height:void 0}));l(this,J,Dt(n(this,G)))}get pirate(){return this.state.social.pirate}get social(){return this.state.social}updated(){const e=n(this,Pe).value;e&&this.style.setProperty("--base-height",(e/1100).toPrecision(2))}render(){return this.pirate?d`
      ${C(this.type==="cover",()=>d`
        <div class="inputs cover">
          <input type="text" name="pirateName" placeholder="Pirate name" .value=${this.social.pirateName} @input=${n(this,J).call(this,e=>p.social.updateName(e))}>
        </div>
        <x-star-chart class="star-chart"></x-star-chart>
        <x-stats class="stats"></x-stats>
      `)}

      ${C(this.type==="background",()=>d`
        <div class="inputs background">
          ${this.social.storyBlanks.map((e,t)=>d`
            <input type="text" name="blank${t}" placeholder="Story blank ${t+1}" .value=${e} @input=${n(this,J).call(this,a=>p.social.updateStoryBlank([t,a]))}>
          `)}
        </div>
      `)}

      ${C(this.type==="constellation",()=>this.state.constellation.events.map((e,t)=>d`
        <button
            class="exclamation constellation-event ${f({active:e})}"
            style="--y: ${c(this,Te,Js).call(this,t)}"
            .disabled=${!c(this,je,Fs).call(this,t)}
            @click=${()=>c(this,Ae,Gs).call(this,t)}>
          <x-icon>exclamation</x-icon>
        </button>

        <x-icon
            id="ending-help"
            title="Constellation events can be clicked below when you have constellation event coins available (received from constellation map on the cover page)">
          questionmark
        </x-icon>
      `))}

      ${C(this.type==="endings",()=>d`
        <div class="ending bad" style=${Z(c(this,M,Ie).call(this,"bad"))}>
          ${q(3).map(e=>d`
            <button
                class="exclamation ${f({active:c(this,$,Be).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending good" style=${Z(c(this,M,Ie).call(this,"good"))}>
          ${q(4).map(e=>d`
            <button
                class="exclamation ${f({active:c(this,$,Be).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending legendary" style=${Z(c(this,M,Ie).call(this,"legendary"))}>
          ${q(5).map(e=>d`
            <button
                class="exclamation ${f({active:c(this,$,Be).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
      `)}

      <img class="sheet${f({[this.type]:!0})}" src=${c(this,Oe,Us).call(this)}>
    `:ea}},G=new WeakMap,Pe=new WeakMap,J=new WeakMap,Oe=new WeakSet,Us=function(){return us(this.pirate,this.type==="cover"||this.type==="endings"?1:2)},$=new WeakSet,Be=function(){return this.state.constellation.events.reduce((e,t)=>e+(t?1:0),0)},je=new WeakSet,Fs=function(e){var s,r;const{constellation:{events:t,chartEvents:a}}=this.state;return a.length>e&&(t[e]&&!((s=t[e+1])!=null?s:!1)||!t[e]&&((r=t[e-1])!=null?r:!0))},Ae=new WeakSet,Gs=function(e){n(this,G).dispatch(p.constellation.toggleEvent(e))},Te=new WeakSet,Js=function(e){var r,o;const{social:{pirate:t},data:{pirates:a}}=this.state;return`${(o=(r=a.find(i=>i.id===t))==null?void 0:r.positions.constellationEvents[e])!=null?o:e*10}%`},M=new WeakSet,Ie=function(e){var o,i;const{social:{pirate:t},data:{pirates:a}}=this.state,{x:s=0,y:r=0}=(i=(o=a.find(h=>h.id===t))==null?void 0:o.positions.endings[e])!=null?i:{};return{"--x":`${s}%`,"--y":`${r}%`}},g(Fe,"styles",_`
    :host {
      display: grid;
      grid: "sheet" 1fr / 1fr;
      aspect-ratio: 1 / var(--paper-ratio);
      position: relative;
      height: 100%;
    }

    .sheet {
      grid-area: sheet;
      object-fit: cover;
      filter: var(--sheet-filter);
      width: 100%;
      height: 100%;
    }

    .sheet.cover {
      object-position: top right;
    }
    .sheet.background {
      object-position: top left;
    }
    .sheet.constellation {
      object-position: top right;
    }
    .sheet.endings {
      object-position: top left;
    }

    .stats {
      position: absolute;
      top: 75.4%;
      left: 14.9%;
      width: 69.3%;
      z-index: var(--z-default);
    }

    .star-chart {
      position: absolute;
      top: 17.5%;
      left: 17%;
      width: 64%;
      z-index: var(--z-default);
    }

    .inputs {
      display: flex;
      flex-direction: column;
      position: absolute;
      gap: 2%;
      z-index: var(--z-default);
    }

    .inputs.cover {
      top: 11%;
      left: 11.2%;
      width: 75.2%;
      height: 6.5%;
    }
    .inputs.background {
      top: 12.5%;
      left: 48%;
      width: 45%;
      height: 28.4%;
    }

    .inputs input {
      color: var(--on-bg);
      background-color: transparent;
      border: dashed 7px var(--hint);
      flex: 1;
      font-size: calc(var(--base-height, 1) * 30px);
      font-family: inherit;
      padding: 0 20px;
      transition: all .2s;
    }
    .inputs input:focus-visible {
      border-color: var(--hint-active);
      outline: 0;
    }
    .inputs.cover input {
      text-align: center;
    }
    .inputs.background input {
      font-size: calc(var(--base-height, 1) * 24px);
      border-width: 5px;
    }

    .exclamation {
      aspect-ratio: 1;
      background-color: transparent;
      border: 0;
      border-radius: 50%;
      padding: 0;
    }

    .exclamation:not([disabled]) {
      cursor: pointer;
    }
    .exclamation:not([disabled]):hover {
      background-color: var(--hint);
    }
    .exclamation:not([disabled]):not(.active) {
      --to: var(--hint);
      animation: pulseBg 2s linear infinite;
    }

    .exclamation x-icon {
      color: transparent;
      width: 100%;
      height: 100%;
    }
    .exclamation.active x-icon {
      color: var(--hint-active);
    }
    .exclamation:not([disabled]):not(.active) x-icon {
      --to: var(--hint-active);
      animation: pulse 2s linear infinite;
    }

    .exclamation.constellation-event {
      position: absolute;
      padding: 3px;
      top: var(--y);
      left: 7.2%;
      width: 4.2%;
      z-index: var(--z-default);
    }

    .ending {
      display: grid;
      grid: 1fr / repeat(5, 1fr);
      position: absolute;
      top: calc(10.35% + var(--y));
      width: 16.9%;
      height: 2.34%;
      z-index: var(--z-default);
    }
    .bad {
      left: calc(42.4% + var(--x));
    }
    .good {
      left: calc(38.5% + var(--x));
    }
    .legendary {
      left: calc(32.3% + var(--x));
    }

    #ending-help {
      cursor: help;
      color: var(--hint-active);
      position: absolute;
      left: 7.5%;
      top: 9%;
      z-index: var(--z-default);
    }

    @keyframes pulse {
      0% {
        color: transparent;
      }
      40%, 60% {
        color: var(--to);
      }
      100% {
        color: transparent;
      }
    }

    @keyframes pulseBg {
      0% {
        background-color: transparent;
      }
      40%, 60% {
        background-color: var(--to);
      }
      100% {
        background-color: transparent;
      }
    }
  `),Fe);at([y()],se.prototype,"state",2);at([ze()],se.prototype,"type",2);se=at([w("x-sheet")],se);var Ws=Object.defineProperty,Ys=Object.getOwnPropertyDescriptor,rt=(e,t,a,s)=>{for(var r=s>1?void 0:s?Ys(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ws(t,a,r),r},Ge,W,Pt;let oe=(Ge=class extends m{constructor(){super(...arguments);l(this,W)}toggle(){this.dispatchEvent(new Event("toggle"))}render(){return d`
      <fieldset>
        <legend>${this.legend}</legend>
        <button class=${f({rotate:!n(this,W,Pt)})} @click=${this.toggle}>
          <x-icon>arrow-down</x-icon>
        </button>
        <div class="collapsible${f({open:n(this,W,Pt)})}">
          <slot></slot>
        </div>
      </fieldset>
    `}},W=new WeakSet,Pt=function(){var e;return(e=this.open)!=null?e:!0},g(Ge,"styles",_`
    :host {
      display: block;
      position: relative;
    }

    fieldset {
      border: solid var(--border);
      border-width: 3px 0 0;
      margin: 0;
      padding: 0;
      overflow: hidden;
    }

    legend {
      font-size: 1.2rem;
      margin: 0 15px;
      padding: 0 10px;
    }

    button {
      cursor: pointer;
      aspect-ratio: 1;
      background-color: var(--input);
      border: none;
      border-radius: 50%;
      position: absolute;
      top: 3px;
      right: 10px;
      transition: background .3s linear, transform .3s cubic-bezier(.82,.02,.13,.98);
    }
    button:hover {
      background: var(--input-active);
    }
    button.rotate {
      transform: rotate(180deg);
    }

    .collapsible {
      padding: 2px;
    }
    .collapsible:not(.open) {
      height: 0;
      overflow: hidden;
    }
  `),Ge);rt([ze()],oe.prototype,"legend",2);rt([ze()],oe.prototype,"open",2);oe=rt([w("x-form-section")],oe);var Xs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,It=(e,t,a,s)=>{for(var r=s>1?void 0:s?Hs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Xs(t,a,r),r},Je,Xe;let Ye=(Je=class extends m{constructor(){super(...arguments);l(this,Xe,new E(this))}changeFont(e){document.documentElement.style.setProperty("--font-family",e.currentTarget.value)}render(){return d`
      <header>
        <h1>Forgotten Waters <small>- Pirate sheet</small></h1>
        <x-coin type="reRoll"></x-coin>
        <x-coin type="misfortune"></x-coin>
        <x-coin type="constellationEvent"></x-coin>
      </header>

      <x-controls></x-controls>

      <main class="sheets">
        <x-sheet type="cover"></x-sheet>
        <x-sheet type="background"></x-sheet>
        <x-sheet type="constellation"></x-sheet>
        <x-sheet type="endings"></x-sheet>
      </main>

      <footer>
        <p>Copyright © Dunno, 2022</p>
      </footer>
    `}},Xe=new WeakMap,g(Je,"styles",[$e,aa]),Je);It([y()],Ye.prototype,"state",2);Ye=It([w("x-root")],Ye);
