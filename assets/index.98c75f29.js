var Bt=Object.defineProperty,It=Object.defineProperties;var Vt=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var rt=Object.prototype.hasOwnProperty,st=Object.prototype.propertyIsEnumerable;var Me=(e,t,a)=>t in e?Bt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,ot=(e,t)=>{for(var a in t||(t={}))rt.call(t,a)&&Me(e,a,t[a]);if(Y)for(var a of Y(t))st.call(t,a)&&Me(e,a,t[a]);return e},it=(e,t)=>It(e,Vt(t));var nt=(e,t)=>{var a={};for(var s in e)rt.call(e,s)&&t.indexOf(s)<0&&(a[s]=e[s]);if(e!=null&&Y)for(var s of Y(e))t.indexOf(s)<0&&st.call(e,s)&&(a[s]=e[s]);return a};var h=(e,t,a)=>(Me(e,typeof t!="symbol"?t+"":t,a),a),$e=(e,t,a)=>{if(!t.has(e))throw TypeError("Cannot "+a)};var n=(e,t,a)=>($e(e,t,"read from private field"),a?a.call(e):t.get(e)),l=(e,t,a)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,a)},X=(e,t,a,s)=>($e(e,t,"write to private field"),s?s.call(e,a):t.set(e,a),a);var c=(e,t,a)=>($e(e,t,"access private method"),a);import{r as g,c as Qt,a as Lt,g as Nt,s as Ut,d as Gt,b as Ee,e as y,f as Jt,h as Wt,i as Ft,p as Yt,j as Xt,k as _,o as x,$ as d,n as E,t as v,l as H,m,q as b,u as K,v as lt,w as Ht,x as Kt}from"./vendor.a5eb97e1.js";const Zt=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}};Zt();const Z=g`
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
`,qt=g`
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
`;var A;class ea{constructor(){l(this,A,Qt("v0","Pirate"));Lt()}async getItem(t){return JSON.stringify(await Nt(t,n(this,A)))}setItem(t,a){return Ut(t,JSON.parse(a),n(this,A))}removeItem(t){return Gt(t,n(this,A))}}A=new WeakMap;const S=Ee("global/clear"),ct=Ee("global/export"),pt=Ee("global/import"),dt={reRoll:0,misfortune:0},ut=y({name:"dice",initialState:dt,reducers:{increment(e,t){e[t.payload]+=1},decrement(e,t){e[t.payload]>0&&(e[t.payload]-=1)},roll(e){e.misfortune>0&&(e.misfortune-=1)},reRoll(e){e.reRoll-=1,e.misfortune>0&&(e.misfortune-=1)}},extraReducers:e=>{e.addCase(S,()=>dt)}}),ht={events:[!1,!1,!1,!1,!1],chartEvents:[],chartProgress:[]},gt=y({name:"constellation",initialState:ht,reducers:{toggleChartEvent({chartEvents:e},{payload:t}){e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)},toggleChartProgress({chartProgress:e},{payload:t}){e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)},toggleEvent({events:e},{payload:t}){e[t]!==void 0&&(e[t]=!e[t])}},extraReducers:e=>{e.addCase(S,()=>ht)}}),bt={exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},ft=y({name:"skills",initialState:bt,reducers:{update(e,t){const[a,s]=t.payload;e[a]=s}},extraReducers:e=>{e.addCase(S,()=>bt)}}),_t={nickname:"",pirateName:"",pirate:void 0,storyBlanks:["","","","",""]},vt=y({name:"social",initialState:_t,reducers:{selectPirate(e,t){e.pirate=t.payload},updateName(e,t){e.pirateName=t.payload},updateNickname(e,t){e.nickname=t.payload},updateStoryBlank(e,t){const[a,s]=t.payload;e.storyBlanks[a]=s}},extraReducers:e=>{e.addCase(S,()=>_t)}}),ta="modulepreload",mt={},aa="/forgotten-waters-pirate-sheet/",ra=function(t,a){return!a||a.length===0?t():Promise.all(a.map(s=>{if(s=`${aa}${s}`,s in mt)return;mt[s]=!0;const r=s.endsWith(".css"),o=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=r?"stylesheet":ta,r||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),r)return new Promise((P,F)=>{i.addEventListener("load",P),i.addEventListener("error",F)})})).then(()=>t())},sa=e=>{},wt=Jt("data/fetchPirates",async()=>(await ra(()=>import("./pirates.822ac89f.js"),[])).default),oa={pirates:[]},yt=y({name:"data",initialState:oa,reducers:{},extraReducers:e=>{e.addCase(wt.fulfilled,(t,a)=>sa(t.pirates.push(...a.payload)))}}),xt={shouldPlaySounds:!0},St=y({name:"settings",initialState:xt,reducers:{toggleSounds(e){e.shouldPlaySounds=!e.shouldPlaySounds}},extraReducers:e=>{e.addCase(S,()=>xt)}}),Pt={isPirateOpen:!0,isStoryBlanksOpen:!1,isSettingsOpen:!1},kt=y({name:"ui",initialState:Pt,reducers:{togglePirate(e){e.isPirateOpen=!e.isPirateOpen},toggleStoryBlanks(e){e.isStoryBlanksOpen=!e.isStoryBlanksOpen},toggleSettings(e){e.isSettingsOpen=!e.isSettingsOpen}},extraReducers:e=>{e.addCase(S,()=>Pt)}}),ia=Wt({constellation:gt.reducer,data:yt.reducer,dice:ut.reducer,skills:ft.reducer,social:vt.reducer,settings:St.reducer,ui:kt.reducer}),p={constellation:gt.actions,data:yt.actions,dice:ut.actions,global:{clear:S,exportData:ct,importData:pt},skills:ft.actions,social:vt.actions,settings:St.actions,ui:kt.actions};function na(e){return Object.keys(e)}function la(e){throw e}function q(e){return Array.from({length:e},(t,a)=>a)}function Ce(e){return new Promise(t=>setTimeout(()=>t(),e))}function ca(e,t){let a;return(...r)=>{a&&clearTimeout(a),a=setTimeout(()=>t(...r),e)}}function Re(e,t){return new Promise(a=>e.addEventListener(t,s=>a(s),{once:!0}))}function Ot(e){return t=>{const a=ca(200,s=>e.dispatch(t(s)));return s=>a(s.currentTarget.value)}}async function pa(e,t){if(ct.match(e)){const a=t,{data:s,_persist:r}=a,o=nt(a,["data","_persist"]);await da("pirate-data.json",JSON.stringify(o))}else if(pt.match(e)){const s=await ua();if(alert("There's no validation on the imported file's content. I'll just trust that you are providing data in a correct format, alright? \u{1F928}"),s)return{type:"persist/REHYDRATE",key:"root",import:!0,payload:s}}}async function da(e,t){const a=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(a),r=document.createElement("a"),o=Re(r,"click");r.href=s,r.download=e,r.click(),await o,await Ce(50),URL.revokeObjectURL(s)}async function ua(){const e=document.createElement("input");if(e.type="file",e.accept="application/json,.json",e.click(),await Re(e,"input"),e.files){const[t]=e.files;return JSON.parse(await t.text())}}var ha="/forgotten-waters-pirate-sheet/assets/coin-clink.ac2914d5.mp3",ga="/forgotten-waters-pirate-sheet/assets/coin-clink-2.a2741018.mp3",jt="/forgotten-waters-pirate-sheet/assets/coin-use.6c7ae85b.mp3",ee="/forgotten-waters-pirate-sheet/assets/pen-scratch.69d14fde.mp3",ba="/forgotten-waters-pirate-sheet/assets/bell.2e3d72f4.mp3";async function w(...e){const t=e[Math.floor(Math.random()*e.length)],a=new Audio(t);a.volume=.2,await Re(a,"canplay"),await a.play(),await Ce(a.duration*1e3)}async function fa(e,t){if(!t.settings.shouldPlaySounds)return;const a=()=>w(ha,ga),{constellation:s}=t;p.constellation.toggleChartProgress.match(e)&&s.chartProgress.includes(e.payload)&&await w(ee),p.constellation.toggleChartEvent.match(e)&&s.chartEvents.includes(e.payload)&&(await w(ee),await a()),p.constellation.toggleEvent.match(e)&&(await w(ee),await(s.events[e.payload]?w(jt):a())),p.dice.increment.match(e)&&await a(),p.dice.decrement.match(e)&&await w(jt),p.skills.update.match(e)&&await w(ee),e.type==="persist/REHYDRATE"&&e.import&&await w(ba)}const _a=e=>(va(e),t=>a=>{const s=t(a);return ma(e,s,e.getState()),s});async function va(e){const t=[wt];await Ce(1),t.forEach(a=>e.dispatch(a()))}async function ma(e,t,a){const s=[fa,pa].map(r=>r(t,a));for(const r of await Promise.all(s))typeof r!="undefined"&&e.dispatch(r)}const te=Ft({reducer:Yt({key:"root",blacklist:["data"],storage:new ea},ia),devTools:!0,middleware:e=>[...e({serializableCheck:{ignoredActions:["persist/PERSIST"]}}),_a]});Xt(te);var R,D;class k{constructor(t){l(this,R,void 0);l(this,D,void 0);t.addController(this),X(this,D,t)}hostConnected(){const t=()=>{n(this,D).state=te.getState()};t(),X(this,R,te.subscribe(t))}hostDisconnected(){var t;(t=n(this,R))==null||t.call(this)}dispatch(t){te.dispatch(t)}}R=new WeakMap,D=new WeakMap;var wa="data:image/webp;base64,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",ya=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wa}),xa="/forgotten-waters-pirate-sheet/assets/coin-misfortune.2611b957.webp",Sa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xa}),Pa="/forgotten-waters-pirate-sheet/assets/coin-re-roll.2f4ae4b8.webp",ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pa}),Oa="data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSEsAAAABYE3bVq2FEEoIIR2TgxDSRglhf+7uAyAiFKZtwyQduoXYtvKWaEXL4GysTgbkbNTzZNf0Z+bGcGH4hYeVjVYpGcxyMn2sQcpucgEAVlA4ICoAAACwAgCdASoUABQAPiUQh0KhoQoCAAwBIlpAAA9o6AAA/v7urxVNvyYAAAA=",ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oa}),Aa="/forgotten-waters-pirate-sheet/assets/icons.f12f798a.svg",za=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Aa}),Ta="/forgotten-waters-pirate-sheet/assets/pirate-pub.101f2f3e.webp",Ma=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ta}),$a="/forgotten-waters-pirate-sheet/assets/the-alchemist-pirate_1.5e03d1c5.webp",Ea=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$a}),Ca="/forgotten-waters-pirate-sheet/assets/the-alchemist-pirate_2.e71a7481.webp",Ra=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ca}),Da="/forgotten-waters-pirate-sheet/assets/the-all-seeing-pirate_1.7f3aa6ef.webp",Ba=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Da}),Ia="/forgotten-waters-pirate-sheet/assets/the-all-seeing-pirate_2.13ae0a39.webp",Va=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ia}),Qa="/forgotten-waters-pirate-sheet/assets/the-assassin-pirate_1.1618617a.webp",La=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qa}),Na="/forgotten-waters-pirate-sheet/assets/the-assassin-pirate_2.c454d1f7.webp",Ua=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Na}),Ga="/forgotten-waters-pirate-sheet/assets/the-cannonwright-pirate_1.bb786948.webp",Ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ga}),Wa="/forgotten-waters-pirate-sheet/assets/the-cannonwright-pirate_2.d388706c.webp",Fa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wa}),Ya="/forgotten-waters-pirate-sheet/assets/the-culinary-pirate_1.e2f59e4a.webp",Xa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ya}),Ha="/forgotten-waters-pirate-sheet/assets/the-culinary-pirate_2.9317962d.webp",Ka=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ha}),Za="/forgotten-waters-pirate-sheet/assets/the-debater-pirate_1.a900322b.webp",qa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Za}),er="/forgotten-waters-pirate-sheet/assets/the-debater-pirate_2.41a319a8.webp",tr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:er}),ar="/forgotten-waters-pirate-sheet/assets/the-doomed-pirate_1.a5e65da2.webp",rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ar}),sr="/forgotten-waters-pirate-sheet/assets/the-doomed-pirate_2.64a68190.webp",or=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:sr}),ir="/forgotten-waters-pirate-sheet/assets/the-duelist-pirate_1.95a561be.webp",nr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ir}),lr="/forgotten-waters-pirate-sheet/assets/the-duelist-pirate_2.74c618e1.webp",cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lr}),pr="/forgotten-waters-pirate-sheet/assets/the-gold-coat-pirate_1.9f162bd6.webp",dr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pr}),ur="/forgotten-waters-pirate-sheet/assets/the-gold-coat-pirate_2.670c2c72.webp",hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ur}),gr="/forgotten-waters-pirate-sheet/assets/the-grifter-pirate_1.5449294d.webp",br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gr}),fr="/forgotten-waters-pirate-sheet/assets/the-grifter-pirate_2.89b34e5a.webp",_r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fr}),vr="/forgotten-waters-pirate-sheet/assets/the-lovesick-pirate_1.5c2f9a6c.webp",mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vr}),wr="/forgotten-waters-pirate-sheet/assets/the-lovesick-pirate_2.50ba4c13.webp",yr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wr}),xr="/forgotten-waters-pirate-sheet/assets/the-orphan-pirate_1.ca0061a9.webp",Sr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xr}),Pr="/forgotten-waters-pirate-sheet/assets/the-orphan-pirate_2.aad17ddb.webp",kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pr}),Or="/forgotten-waters-pirate-sheet/assets/the-parent-pirate_1.ee52d5b4.webp",jr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Or}),Ar="/forgotten-waters-pirate-sheet/assets/the-parent-pirate_2.5125e722.webp",zr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ar}),Tr="/forgotten-waters-pirate-sheet/assets/the-safety-pirate_1.1b37934e.webp",Mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tr}),$r="/forgotten-waters-pirate-sheet/assets/the-safety-pirate_2.d77ddd35.webp",Er=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$r}),Cr="/forgotten-waters-pirate-sheet/assets/the-sea-serpent-pirate_1.af1dd84a.webp",Rr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Cr}),Dr="/forgotten-waters-pirate-sheet/assets/the-sea-serpent-pirate_2.6aa553e2.webp",Br=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Dr}),Ir="/forgotten-waters-pirate-sheet/assets/the-seasick-pirate_1.31d9df45.webp",Vr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ir}),Qr="/forgotten-waters-pirate-sheet/assets/the-seasick-pirate_2.5b817690.webp",Lr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qr}),Nr="/forgotten-waters-pirate-sheet/assets/the-seeker-pirate_1.346f8062.webp",Ur=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nr}),Gr="/forgotten-waters-pirate-sheet/assets/the-seeker-pirate_2.76bfbc8a.webp",Jr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gr}),Wr="/forgotten-waters-pirate-sheet/assets/the-skeleton-pirate_1.2183f124.webp",Fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wr}),Yr="/forgotten-waters-pirate-sheet/assets/the-skeleton-pirate_2.96983d9a.webp",Xr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Yr}),Hr="/forgotten-waters-pirate-sheet/assets/the-survivor-pirate_1.782951b4.webp",Kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Hr}),Zr="/forgotten-waters-pirate-sheet/assets/the-survivor-pirate_2.897b6841.webp",qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Zr}),es="/forgotten-waters-pirate-sheet/assets/the-thespian-pirate_1.76259dbb.webp",ts=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:es}),as="/forgotten-waters-pirate-sheet/assets/the-thespian-pirate_2.f6b337fb.webp",rs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:as}),ss="/forgotten-waters-pirate-sheet/assets/the-trickster-pirate_1.0de8c6de.webp",os=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ss}),is="/forgotten-waters-pirate-sheet/assets/the-trickster-pirate_2.dfa0222c.webp",ns=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:is});const O=Object.fromEntries(Object.entries({"./assets/coin-constellation-event.webp":ya,"./assets/coin-misfortune.webp":Sa,"./assets/coin-re-roll.webp":ka,"./assets/draw.webp":ja,"./assets/icons.svg":za,"./assets/pirate-pub.webp":Ma,"./assets/pirates/the-alchemist-pirate_1.webp":Ea,"./assets/pirates/the-alchemist-pirate_2.webp":Ra,"./assets/pirates/the-all-seeing-pirate_1.webp":Ba,"./assets/pirates/the-all-seeing-pirate_2.webp":Va,"./assets/pirates/the-assassin-pirate_1.webp":La,"./assets/pirates/the-assassin-pirate_2.webp":Ua,"./assets/pirates/the-cannonwright-pirate_1.webp":Ja,"./assets/pirates/the-cannonwright-pirate_2.webp":Fa,"./assets/pirates/the-culinary-pirate_1.webp":Xa,"./assets/pirates/the-culinary-pirate_2.webp":Ka,"./assets/pirates/the-debater-pirate_1.webp":qa,"./assets/pirates/the-debater-pirate_2.webp":tr,"./assets/pirates/the-doomed-pirate_1.webp":rr,"./assets/pirates/the-doomed-pirate_2.webp":or,"./assets/pirates/the-duelist-pirate_1.webp":nr,"./assets/pirates/the-duelist-pirate_2.webp":cr,"./assets/pirates/the-gold-coat-pirate_1.webp":dr,"./assets/pirates/the-gold-coat-pirate_2.webp":hr,"./assets/pirates/the-grifter-pirate_1.webp":br,"./assets/pirates/the-grifter-pirate_2.webp":_r,"./assets/pirates/the-lovesick-pirate_1.webp":mr,"./assets/pirates/the-lovesick-pirate_2.webp":yr,"./assets/pirates/the-orphan-pirate_1.webp":Sr,"./assets/pirates/the-orphan-pirate_2.webp":kr,"./assets/pirates/the-parent-pirate_1.webp":jr,"./assets/pirates/the-parent-pirate_2.webp":zr,"./assets/pirates/the-safety-pirate_1.webp":Mr,"./assets/pirates/the-safety-pirate_2.webp":Er,"./assets/pirates/the-sea-serpent-pirate_1.webp":Rr,"./assets/pirates/the-sea-serpent-pirate_2.webp":Br,"./assets/pirates/the-seasick-pirate_1.webp":Vr,"./assets/pirates/the-seasick-pirate_2.webp":Lr,"./assets/pirates/the-seeker-pirate_1.webp":Ur,"./assets/pirates/the-seeker-pirate_2.webp":Jr,"./assets/pirates/the-skeleton-pirate_1.webp":Fr,"./assets/pirates/the-skeleton-pirate_2.webp":Xr,"./assets/pirates/the-survivor-pirate_1.webp":Kr,"./assets/pirates/the-survivor-pirate_2.webp":qr,"./assets/pirates/the-thespian-pirate_1.webp":ts,"./assets/pirates/the-thespian-pirate_2.webp":rs,"./assets/pirates/the-trickster-pirate_1.webp":os,"./assets/pirates/the-trickster-pirate_2.webp":ns}).map(([e,t])=>[e,t.default])),C=O["./assets/icons.svg"];O["./assets/draw.webp"];const De={reRoll:O["./assets/coin-re-roll.webp"],misfortune:O["./assets/coin-misfortune.webp"],constellationEvent:O["./assets/coin-constellation-event.webp"]};function ls(e,t){return O[`./assets/pirates/${e}_${t}.webp`]}var cs=Object.defineProperty,ps=Object.getOwnPropertyDescriptor,Be=(e,t,a,s)=>{for(var r=s>1?void 0:s?ps(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&cs(t,a,r),r},Fe,B,I,z,Ie,V,At,Q,zt,L,Tt,ne,ds,le,us;let ae=(Fe=class extends _{constructor(){super(...arguments);l(this,z);l(this,V);l(this,Q);l(this,L);l(this,ne);l(this,le);l(this,B,new k(this));l(this,I,void 0)}updated(){var t,a;const e=n(this,I);if(e!==void 0&&e!==n(this,z,Ie)){const s=(t=this.shadowRoot)==null?void 0:t.querySelector(".coin"),r=Number(getComputedStyle(s).getPropertyValue("--image-rotation").replace(/deg$/,"")),o=Math.sin(r*Math.PI/180),i=Math.cos(r*Math.PI/180);s.animate([{transform:`rotate(${r}deg)`},{transform:`rotate(${r}deg) rotate3d(${o}, ${i}, 0, 180deg) scale(1.55)`,offset:.5},{transform:`rotate(${r}deg) rotate3d(${o}, ${i}, 0, 360deg)`,offset:1}],{duration:400})}((a=this.state)==null?void 0:a._persist.rehydrated)&&X(this,I,n(this,z,Ie))}render(){return d`
      <div class="coin ${this.type}"></div>
      x${n(this,z,Ie)}
      ${E(this.type!=="constellationEvent",()=>d`
        <div class="buttons">
          <button aria-label=${n(this,Q,zt)} title=${n(this,Q,zt)} @click=${c(this,ne,ds)}>+</button>
          <button aria-label=${n(this,L,Tt)} title=${n(this,L,Tt)} @click=${c(this,le,us)}>-</button>
        </div>
      `)}
    `}},B=new WeakMap,I=new WeakMap,z=new WeakSet,Ie=function(){const{dice:e,constellation:{events:t,chartEvents:a}}=this.state;return this.type==="constellationEvent"?a.length-t.filter(s=>s).length:e[this.type]},V=new WeakSet,At=function(){return this.type==="reRoll"?"Re-Roll":this.type==="misfortune"?"Misfortune":this.type==="constellationEvent"?"Constellation-Event":la(new Error(`Invalid type "${this.type}"`))},Q=new WeakSet,zt=function(){return`Increment ${n(this,V,At)} coin`},L=new WeakSet,Tt=function(){return`Decrement ${n(this,V,At)} coin`},ne=new WeakSet,ds=function(){n(this,B).dispatch(p.dice.increment(this.type))},le=new WeakSet,us=function(){n(this,B).dispatch(p.dice.decrement(this.type))},h(Fe,"styles",[Z,g`
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
      filter: brightness(1.25);
      transform: rotate(var(--image-rotation));
    }
    .coin.reRoll {
      --image-rotation: 100deg;
      background-image: url('${x(De.reRoll)}');
    }
    .coin.misfortune {
      --image-rotation: 35deg;
      background-image: url('${x(De.misfortune)}');
      filter: brightness(1.6);
    }
    .coin.constellationEvent {
      --image-rotation: 45deg;
      background-image: url('${x(De.constellationEvent)}');
    }
  `]),Fe);Be([v()],ae.prototype,"state",2);Be([H()],ae.prototype,"type",2);ae=Be([m("x-coin")],ae);var hs=Object.defineProperty,gs=Object.getOwnPropertyDescriptor,Mt=(e,t,a,s)=>{for(var r=s>1?void 0:s?gs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&hs(t,a,r),r},Ye,u,T,f,j,ce,bs,pe,fs,N,$t,de,_s,ue,vs,he,ms,ge,ws,be,ys,fe,xs,_e,Ss;let Ve=(Ye=class extends _{constructor(){super(...arguments);l(this,f);l(this,ce);l(this,pe);l(this,N);l(this,de);l(this,ue);l(this,he);l(this,ge);l(this,be);l(this,fe);l(this,_e);l(this,u,new k(this));l(this,T,Ot(n(this,u)))}render(){var e;return d`
      <x-form-section legend="Pirate" .open=${this.state.ui.isPirateOpen} @toggle=${c(this,ge,ws)}>
        <label for="nickname">Nickname</label>
        <input id="nickname" type="text" name="nickname" placeholder="Pogchamp" .xautofocus=${n(this,f,j).nickname.length===0} .value=${n(this,f,j).nickname} @input=${n(this,T).call(this,t=>p.social.updateNickname(t))}>

        <label for="pirateName">Pirate name</label>
        <input id="pirateName" type="text" name="pirateName" placeholder="Randy McDude" .value=${n(this,f,j).pirateName} @input=${n(this,T).call(this,t=>p.social.updateName(t))}>

        <label for="pirate">Pirate type</label>
        <select id="pirate" name="pirate" .value=${(e=n(this,f,j).pirate)!=null?e:""} @change=${c(this,pe,fs)}>
          <option value="">Select a pirate!</option>
          ${this.state.data.pirates.map(({id:t,name:a})=>d`
            <option value=${t} .selected=${t===n(this,f,j).pirate}>${a}</option>
          `)}
        </select>
        ${c(this,N,$t).call(this)>0?d`<p>Constellation event count: ${c(this,N,$t).call(this)}</p>`:""}
      </x-form-section>

      <x-form-section legend="Story blanks" .open=${this.state.ui.isStoryBlanksOpen} @toggle=${c(this,be,ys)}>
        ${n(this,f,j).storyBlanks.map((t,a)=>d`
          <label for="blank${a}">#${a+1}</label>
          <input
              id="blank${a}"
              type="text"
              name="blank${a}"
              placeholder="Story..."
              .value=${t}
              @input=${n(this,T).call(this,s=>p.social.updateStoryBlank([a,s]))}>
        `)}
      </x-form-section>

      <x-form-section legend="Settings" .open=${this.state.ui.isSettingsOpen} @toggle=${c(this,fe,xs)}>
        <label for="font">Font</label>
        <select id="font" name="font" @change=${c(this,ce,bs)}>
          <option value="Mansalva" selected>Mansalva</option>
          <option value="Caveat">Caveat</option>
          <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label for="sounds">Sounds enabled</label>
        <input id="sounds" name="sounds" type="checkbox" .checked=${this.state.settings.shouldPlaySounds} @change=${c(this,_e,Ss)}>
      </x-form-section>

      <hr style="width: 90%">

      <button @click=${c(this,de,_s)}>Clear</button>
      <button @click=${c(this,ue,vs)}>Import</button>
      <button @click=${c(this,he,ms)}>Export</button>
    `}},u=new WeakMap,T=new WeakMap,f=new WeakSet,j=function(){return this.state.social},ce=new WeakSet,bs=function(e){document.documentElement.style.setProperty("--font-family",e.currentTarget.value)},pe=new WeakSet,fs=function(e){const t=e.currentTarget;n(this,u).dispatch(p.social.selectPirate(t.value))},N=new WeakSet,$t=function(){var r,o;const{social:{pirate:e},data:{pirates:t}}=this.state,{chartEvents:a=[],chartProgress:s=[]}=(o=(r=t.find(i=>i.id===e))==null?void 0:r.positions)!=null?o:{};return a.length+s.length},de=new WeakSet,_s=function(){confirm("Are you sure you want to delete all saved data?")&&n(this,u).dispatch(p.global.clear())},ue=new WeakSet,vs=function(){n(this,u).dispatch(p.global.importData())},he=new WeakSet,ms=function(){n(this,u).dispatch(p.global.exportData())},ge=new WeakSet,ws=function(){n(this,u).dispatch(p.ui.togglePirate())},be=new WeakSet,ys=function(){n(this,u).dispatch(p.ui.toggleStoryBlanks())},fe=new WeakSet,xs=function(){n(this,u).dispatch(p.ui.toggleSettings())},_e=new WeakSet,Ss=function(){n(this,u).dispatch(p.settings.toggleSounds())},h(Ye,"styles",[Z,g`
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
  `]),Ye);Mt([v()],Ve.prototype,"state",2);Ve=Mt([m("x-controls")],Ve);var Ps=Object.defineProperty,ks=Object.getOwnPropertyDescriptor,Os=(e,t,a,s)=>{for(var r=s>1?void 0:s?ks(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ps(t,a,r),r},Xe;let Et=(Xe=class extends _{updated(){this.setAttribute("aria-hidden","true")}render(){var t;const e=`${C}#${(t=this.textContent)==null?void 0:t.trim()}`;return d`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${e}" />
      </svg>
    `}},h(Xe,"styles",[Z,g`
    :host {
      color: var(--on-bg);
      display: inline-grid;
      width: 1.2em;
    }

    svg {
      fill: currentColor;
      aspect-ratio: 1;
    }
  `]),Xe);Et=Os([m("x-icon")],Et);var js=Object.defineProperty,As=Object.getOwnPropertyDescriptor,Qe=(e,t,a,s)=>{for(var r=s>1?void 0:s?As(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&js(t,a,r),r},He,ve,U,Ct,me,zs,we,Ts;let re=(He=class extends _{constructor(){super(...arguments);l(this,U);l(this,me);l(this,we);l(this,ve,new k(this))}render(){return d`
      ${[...c(this,we,Ts).call(this),...c(this,me,zs).call(this)].map(e=>d`
        <button
            class=${b({selected:e.selected,pulse:this.pulse,[e.type]:!0})}
            style=${K({"--x":String(e.x),"--y":String(e.y)})}
            @click=${e.toggle}></button>
      `)}

      <x-icon
          id="help"
          title="Click on constellation nodes to select them"
          @mouseenter=${()=>this.pulse=!0}
          @mouseleave=${()=>this.pulse=!1}>
        questionmark
      </x-icon>
    `}},ve=new WeakMap,U=new WeakSet,Ct=function(e){var P,F;const{social:t,data:a,constellation:s}=this.state,r=(F=(P=a.pirates.find(Te=>Te.id===t.pirate))==null?void 0:P.positions[e])!=null?F:[],o=e==="chartEvents"?s.chartEvents:s.chartProgress,i=p.constellation[e==="chartEvents"?"toggleChartEvent":"toggleChartProgress"];return r.map((Te,at)=>it(ot({},Te),{type:e==="chartEvents"?"event":"progress",selected:o.includes(at),toggle:()=>n(this,ve).dispatch(i(at))}))},me=new WeakSet,zs=function(){return c(this,U,Ct).call(this,"chartEvents")},we=new WeakSet,Ts=function(){return c(this,U,Ct).call(this,"chartProgress")},h(He,"styles",g`
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
      mask-image: url('${x(C+"#cross-mask")}');
      -webkit-mask-image: url('${x(C+"#cross-mask")}');
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
  `),He);Qe([v()],re.prototype,"pulse",2);Qe([v()],re.prototype,"state",2);re=Qe([m("x-star-chart")],re);var Ms=Object.defineProperty,$s=Object.getOwnPropertyDescriptor,Le=(e,t,a,s)=>{for(var r=s>1?void 0:s?$s(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ms(t,a,r),r},Ke,ye,xe,Es,Se,Cs,Pe,Rs;let se=(Ke=class extends _{constructor(){super(...arguments);l(this,xe);l(this,Se);l(this,Pe);l(this,ye,new k(this))}render(){return d`
      <div class="labels"></div>
      ${lt(c(this,Se,Cs).call(this),e=>lt(q(8),t=>d`
        <button class="stat-value${b({pulse:this.pulse,active:c(this,xe,Es).call(this,e,t)})}" @click=${()=>c(this,Pe,Rs).call(this,e,t)}></button>
      `))}

      <x-icon
          id="help"
          title="Click stat boxes to raise or lower stats"
          @mouseenter=${()=>this.pulse=!0}
          @mouseleave=${()=>this.pulse=!1}>
        questionmark
      </x-icon>
    `}},ye=new WeakMap,xe=new WeakSet,Es=function(e,t){return t>0&&this.state.skills[e]>=t},Se=new WeakSet,Cs=function(){return na(this.state.skills)},Pe=new WeakSet,Rs=function(e,t){n(this,ye).dispatch(p.skills.update([e,t]))},h(Ke,"styles",g`
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
      mask-image: url('${x(C+"#cross-mask")}');
      -webkit-mask-image: url('${x(C+"#cross-mask")}');
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
  `),Ke);Le([v()],se.prototype,"pulse",2);Le([v()],se.prototype,"state",2);se=Le([m("x-stats")],se);var Ds=Object.defineProperty,Bs=Object.getOwnPropertyDescriptor,Ne=(e,t,a,s)=>{for(var r=s>1?void 0:s?Bs(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ds(t,a,r),r},Ze,G,ke,J,Oe,Is,M,Ue,je,Vs,Ae,Qs,ze,Ls,$,Ge;let oe=(Ze=class extends _{constructor(){super(...arguments);l(this,Oe);l(this,M);l(this,je);l(this,Ae);l(this,ze);l(this,$);l(this,G,new k(this));l(this,ke,new Ht(this,{callback:([e])=>e?e.contentRect.height:void 0}));l(this,J,Ot(n(this,G)))}get pirate(){return this.state.social.pirate}get social(){return this.state.social}updated(){const e=n(this,ke).value;e&&this.style.setProperty("--base-height",(e/1100).toPrecision(2))}render(){return this.pirate?d`
      ${E(this.type==="cover",()=>d`
        <div class="inputs cover">
          <input type="text" name="pirateName" placeholder="Pirate name" .value=${this.social.pirateName} @input=${n(this,J).call(this,e=>p.social.updateName(e))}>
        </div>
        <x-star-chart class="star-chart"></x-star-chart>
        <x-stats class="stats"></x-stats>
      `)}

      ${E(this.type==="background",()=>d`
        <div class="inputs background">
          ${this.social.storyBlanks.map((e,t)=>d`
            <input type="text" name="blank${t}" placeholder="Story blank ${t+1}" .value=${e} @input=${n(this,J).call(this,a=>p.social.updateStoryBlank([t,a]))}>
          `)}
        </div>
      `)}

      ${E(this.type==="constellation",()=>this.state.constellation.events.map((e,t)=>d`
        <button
            class="exclamation constellation-event ${b({active:e})}"
            style="--y: ${c(this,ze,Ls).call(this,t)}"
            .disabled=${!c(this,je,Vs).call(this,t)}
            @click=${()=>c(this,Ae,Qs).call(this,t)}>
          <x-icon>exclamation</x-icon>
        </button>

        <x-icon
            id="ending-help"
            title="Constellation events can be clicked below when you have constellation event coins available (received from constellation map on the cover page)">
          questionmark
        </x-icon>
      `))}

      ${E(this.type==="endings",()=>d`
        <div class="ending bad" style=${K(c(this,$,Ge).call(this,"bad"))}>
          ${q(3).map(e=>d`
            <button
                class="exclamation ${b({active:c(this,M,Ue).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending good" style=${K(c(this,$,Ge).call(this,"good"))}>
          ${q(4).map(e=>d`
            <button
                class="exclamation ${b({active:c(this,M,Ue).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending legendary" style=${K(c(this,$,Ge).call(this,"legendary"))}>
          ${q(5).map(e=>d`
            <button
                class="exclamation ${b({active:c(this,M,Ue).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
      `)}

      <img class="sheet${b({[this.type]:!0})}" src=${c(this,Oe,Is).call(this)}>
    `:Kt}},G=new WeakMap,ke=new WeakMap,J=new WeakMap,Oe=new WeakSet,Is=function(){return ls(this.pirate,this.type==="cover"||this.type==="endings"?1:2)},M=new WeakSet,Ue=function(){return this.state.constellation.events.reduce((e,t)=>e+(t?1:0),0)},je=new WeakSet,Vs=function(e){var s,r;const{constellation:{events:t,chartEvents:a}}=this.state;return a.length>e&&(t[e]&&!((s=t[e+1])!=null?s:!1)||!t[e]&&((r=t[e-1])!=null?r:!0))},Ae=new WeakSet,Qs=function(e){n(this,G).dispatch(p.constellation.toggleEvent(e))},ze=new WeakSet,Ls=function(e){var r,o;const{social:{pirate:t},data:{pirates:a}}=this.state;return`${(o=(r=a.find(i=>i.id===t))==null?void 0:r.positions.constellationEvents[e])!=null?o:e*10}%`},$=new WeakSet,Ge=function(e){var o,i;const{social:{pirate:t},data:{pirates:a}}=this.state,{x:s=0,y:r=0}=(i=(o=a.find(P=>P.id===t))==null?void 0:o.positions.endings[e])!=null?i:{};return{"--x":`${s}%`,"--y":`${r}%`}},h(Ze,"styles",g`
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
  `),Ze);Ne([v()],oe.prototype,"state",2);Ne([H()],oe.prototype,"type",2);oe=Ne([m("x-sheet")],oe);var Ns=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,Je=(e,t,a,s)=>{for(var r=s>1?void 0:s?Us(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Ns(t,a,r),r},qe,W,Rt;let ie=(qe=class extends _{constructor(){super(...arguments);l(this,W)}toggle(){this.dispatchEvent(new Event("toggle"))}render(){return d`
      <fieldset>
        <legend>${this.legend}</legend>
        <button class=${b({rotate:!n(this,W,Rt)})} @click=${this.toggle}>
          <x-icon>arrow-down</x-icon>
        </button>
        <div class="collapsible${b({open:n(this,W,Rt)})}">
          <slot></slot>
        </div>
      </fieldset>
    `}},W=new WeakSet,Rt=function(){var e;return(e=this.open)!=null?e:!0},h(qe,"styles",g`
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
  `),qe);Je([H()],ie.prototype,"legend",2);Je([H()],ie.prototype,"open",2);ie=Je([m("x-form-section")],ie);var Gs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Dt=(e,t,a,s)=>{for(var r=s>1?void 0:s?Js(t,a):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(s?i(t,a,r):i(r))||r);return s&&r&&Gs(t,a,r),r},et,tt;let We=(et=class extends _{constructor(){super(...arguments);l(this,tt,new k(this))}changeFont(e){document.documentElement.style.setProperty("--font-family",e.currentTarget.value)}render(){return d`
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
    `}},tt=new WeakMap,h(et,"styles",[Z,qt]),et);Dt([v()],We.prototype,"state",2);We=Dt([m("x-root")],We);
