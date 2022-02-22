var Qt=Object.defineProperty,Nt=Object.defineProperties;var Lt=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable;var Ee=(e,t,r)=>t in e?Qt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,nt=(e,t)=>{for(var r in t||(t={}))ot.call(t,r)&&Ee(e,r,t[r]);if(X)for(var r of X(t))it.call(t,r)&&Ee(e,r,t[r]);return e},lt=(e,t)=>Nt(e,Lt(t));var ct=(e,t)=>{var r={};for(var s in e)ot.call(e,s)&&t.indexOf(s)<0&&(r[s]=e[s]);if(e!=null&&X)for(var s of X(e))t.indexOf(s)<0&&it.call(e,s)&&(r[s]=e[s]);return r};var g=(e,t,r)=>(Ee(e,typeof t!="symbol"?t+"":t,r),r),Ce=(e,t,r)=>{if(!t.has(e))throw TypeError("Cannot "+r)};var n=(e,t,r)=>(Ce(e,t,"read from private field"),r?r.call(e):t.get(e)),l=(e,t,r)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,r)},H=(e,t,r,s)=>(Ce(e,t,"write to private field"),s?s.call(e,r):t.set(e,r),r);var c=(e,t,r)=>(Ce(e,t,"access private method"),r);import{r as _,c as Ft,a as Ut,g as Gt,s as Jt,d as Wt,b as He,e as S,f as Yt,h as Xt,i as Ht,p as Kt,j as Zt,k as m,o as x,$ as d,n as R,t as v,l as $e,m as y,q as pt,u as f,v as Z,w as dt,x as qt,y as ea}from"./vendor.bb4be921.js";const ta=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};ta();const Me=_`
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

  @media (max-width: 1820px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1900px) and (min-height: 1140px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 1970px) and (min-height: 1200px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 2050px) and (min-height: 1240px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 2080px) and (min-height: 1280px) {
    .sheets {
      grid-template-columns: 1fr;
    }
  }
`;var T;class ra{constructor(){l(this,T,Ft("v0","Pirate"));Ut()}async getItem(t){return JSON.stringify(await Gt(t,n(this,T)))}setItem(t,r){return Jt(t,JSON.parse(r),n(this,T))}removeItem(t){return Wt(t,n(this,T))}}T=new WeakMap;const k=He("global/clear"),jt=He("global/export"),Tt=He("global/import"),ut={reRoll:0,misfortune:0},At=S({name:"dice",initialState:ut,reducers:{increment(e,t){e[t.payload]+=1},decrement(e,t){e[t.payload]>0&&(e[t.payload]-=1)},roll(e){e.misfortune>0&&(e.misfortune-=1)},reRoll(e){e.reRoll-=1,e.misfortune>0&&(e.misfortune-=1)}},extraReducers:e=>{e.addCase(k,()=>ut)}}),ht={events:[!1,!1,!1,!1,!1],chartEvents:[],chartProgress:[]},zt=S({name:"constellation",initialState:ht,reducers:{toggleChartEvent({chartEvents:e},{payload:t}){e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)},toggleChartProgress({chartProgress:e},{payload:t}){e.includes(t)?e.splice(e.indexOf(t),1):e.push(t)},toggleEvent({events:e},{payload:t}){e[t]!==void 0&&(e[t]=!e[t])}},extraReducers:e=>{e.addCase(k,()=>ht)}}),gt={exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},$t=S({name:"skills",initialState:gt,reducers:{update(e,t){const[r,s]=t.payload;e[r]=s}},extraReducers:e=>{e.addCase(k,()=>gt)}}),bt={nickname:"",pirateName:"",pirate:void 0,storyBlanks:["","","","",""]},Mt=S({name:"social",initialState:bt,reducers:{selectPirate(e,t){e.pirate=t.payload},updateName(e,t){e.pirateName=t.payload},updateNickname(e,t){e.nickname=t.payload},updateStoryBlank(e,t){const[r,s]=t.payload;e.storyBlanks[r]=s}},extraReducers:e=>{e.addCase(k,()=>bt)}}),sa="modulepreload",ft={},oa="/forgotten-waters-pirate-sheet/",ia=function(t,r){return!r||r.length===0?t():Promise.all(r.map(s=>{if(s=`${oa}${s}`,s in ft)return;ft[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${o}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":sa,a||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),a)return new Promise((h,w)=>{i.addEventListener("load",h),i.addEventListener("error",w)})})).then(()=>t())},na=e=>{},Et=Yt("data/fetchPirates",async()=>(await ia(()=>import("./pirates.822ac89f.js"),[])).default),la={pirates:[]},Ct=S({name:"data",initialState:la,reducers:{},extraReducers:e=>{e.addCase(Et.fulfilled,(t,r)=>na(t.pirates.push(...r.payload)))}}),_t={theme:void 0,font:void 0,shouldPlaySounds:!0,soundVolume:.2},Rt=S({name:"settings",initialState:_t,reducers:{selectTheme(e,t){e.theme=t.payload},selectFont(e,t){e.font=t.payload},toggleSounds(e){e.shouldPlaySounds=!e.shouldPlaySounds},adjustVolume(e,t){e.soundVolume=t.payload}},extraReducers:e=>{e.addCase(k,()=>_t)}}),mt={isPirateOpen:!0,isStoryBlanksOpen:!1,isSettingsOpen:!1},Dt=S({name:"ui",initialState:mt,reducers:{togglePirate(e){e.isPirateOpen=!e.isPirateOpen},toggleStoryBlanks(e){e.isStoryBlanksOpen=!e.isStoryBlanksOpen},toggleSettings(e){e.isSettingsOpen=!e.isSettingsOpen}},extraReducers:e=>{e.addCase(k,()=>mt)}}),ca=Xt({constellation:zt.reducer,data:Ct.reducer,dice:At.reducer,skills:$t.reducer,social:Mt.reducer,settings:Rt.reducer,ui:Dt.reducer}),p={constellation:zt.actions,data:Ct.actions,dice:At.actions,global:{clear:k,exportData:jt,importData:Tt},skills:$t.actions,social:Mt.actions,settings:Rt.actions,ui:Dt.actions};function pa(e){return Object.keys(e)}function da(e){throw e}function q(e){return Array.from({length:e},(t,r)=>r)}function Ke(e){return new Promise(t=>setTimeout(()=>t(),e))}function ua(e,t){let r;return(...a)=>{r&&clearTimeout(r),r=setTimeout(()=>t(...a),e)}}function Ze(e,t){return new Promise(r=>e.addEventListener(t,s=>r(s),{once:!0}))}function Bt(e){return t=>{const r=ua(200,s=>e.dispatch(t(s)));return s=>r(s.currentTarget.value)}}async function ha(e,t){if(jt.match(e)){const r=t,{data:s,_persist:a}=r,o=ct(r,["data","_persist"]);await ga("pirate-data.json",JSON.stringify(o))}else if(Tt.match(e)){const s=await ba();if(alert("There's no validation on the imported file's content. I'll just trust that you are providing data in a correct format, alright? \u{1F928}"),s)return{type:"persist/REHYDRATE",key:"root",import:!0,payload:s}}}async function ga(e,t){const r=new Blob([t],{type:"application/json"}),s=URL.createObjectURL(r),a=document.createElement("a"),o=Ze(a,"click");a.href=s,a.download=e,a.click(),await o,await Ke(50),URL.revokeObjectURL(s)}async function ba(){const e=document.createElement("input");if(e.type="file",e.accept="application/json,.json",e.click(),await Ze(e,"input"),e.files){const[t]=e.files;return JSON.parse(await t.text())}}var fa="/forgotten-waters-pirate-sheet/assets/coin-clink.ac2914d5.mp3",_a="/forgotten-waters-pirate-sheet/assets/coin-clink-2.a2741018.mp3",vt="/forgotten-waters-pirate-sheet/assets/coin-use.6c7ae85b.mp3",K="/forgotten-waters-pirate-sheet/assets/pen-scratch.69d14fde.mp3",ma="/forgotten-waters-pirate-sheet/assets/bell.2e3d72f4.mp3";function va(e){return async(...t)=>{const r=t[Math.floor(Math.random()*t.length)],s=new Audio(r);s.volume=e.settings.soundVolume,await Ze(s,"canplay"),await s.play(),await Ke(s.duration*1e3)}}async function ya(e,t){if(!t.settings.shouldPlaySounds)return;const r=va(t),s=()=>r(fa,_a),{constellation:a}=t;p.constellation.toggleChartProgress.match(e)&&a.chartProgress.includes(e.payload)&&await r(K),p.constellation.toggleChartEvent.match(e)&&a.chartEvents.includes(e.payload)&&(await r(K),await s()),p.constellation.toggleEvent.match(e)&&(await r(K),await(a.events[e.payload]?r(vt):s())),p.dice.increment.match(e)&&await s(),p.dice.decrement.match(e)&&await r(vt),p.skills.update.match(e)&&await r(K),e.type==="persist/REHYDRATE"&&e.import&&await r(ma)}function wa(){const e=[...document.styleSheets].at(-1).ownerNode,t=document.createElement("link");t.type="text/css",t.rel="stylesheet";const r=["bright-parchment","bright-skies","moldy-parchment","ocean-heart"],s=new Map(r.map(a=>[a,`/forgotten-waters-pirate-sheet/${a}.css`]));return a=>{var w;const o=a.settings.theme;if(o===void 0&&t.parentNode!==null)t.remove();else if(o!==void 0){const P=(w=s.get(o))!=null?w:"undefined.css";t.href!==P&&(t.href=P),t.parentNode===null&&e.insertAdjacentElement("afterend",t)}const i=a.settings.font,h=document.documentElement.style;i!==void 0&&i!==h.getPropertyValue("--font-family")&&h.setProperty("--font-family",i)}}const xa=e=>{const t=wa();return Sa(e),r=>s=>{const a=r(s);return ka(e,a,e.getState()),t(e.getState()),a}};async function Sa(e){const t=[Et];await Ke(1),t.forEach(r=>e.dispatch(r()))}async function ka(e,t,r){const s=[ya,ha].map(a=>a(t,r));for(const a of await Promise.all(s))typeof a!="undefined"&&e.dispatch(a)}const ee=Ht({reducer:Kt({key:"root",blacklist:["data"],storage:new ra},ca),devTools:!0,middleware:e=>[...e({serializableCheck:{ignoredActions:["persist/PERSIST"]}}),xa]});Zt(ee);var B,V;class C{constructor(t){l(this,B,void 0);l(this,V,void 0);t.addController(this),H(this,V,t)}hostConnected(){const t=()=>{n(this,V).state=ee.getState()};t(),H(this,B,ee.subscribe(t))}hostDisconnected(){var t;(t=n(this,B))==null||t.call(this)}dispatch(t){ee.dispatch(t)}}B=new WeakMap,V=new WeakMap;var Pa="data:image/webp;base64,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",Oa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pa}),ja="/forgotten-waters-pirate-sheet/assets/coin-misfortune.2611b957.webp",Ta=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ja}),Aa="/forgotten-waters-pirate-sheet/assets/coin-re-roll.2f4ae4b8.webp",za=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Aa}),$a="data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSEsAAAABYE3bVq2FEEoIIR2TgxDSRglhf+7uAyAiFKZtwyQduoXYtvKWaEXL4GysTgbkbNTzZNf0Z+bGcGH4hYeVjVYpGcxyMn2sQcpucgEAVlA4ICoAAACwAgCdASoUABQAPiUQh0KhoQoCAAwBIlpAAA9o6AAA/v7urxVNvyYAAAA=",Ma=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$a}),Ea="/forgotten-waters-pirate-sheet/assets/icons.f12f798a.svg",Ca=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ea}),Ra="/forgotten-waters-pirate-sheet/assets/pirate-pub.101f2f3e.webp",Da=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ra}),Ba="/forgotten-waters-pirate-sheet/assets/the-alchemist-pirate_1.5e03d1c5.webp",Va=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ba}),Ia="/forgotten-waters-pirate-sheet/assets/the-alchemist-pirate_2.e71a7481.webp",Qa=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ia}),Na="/forgotten-waters-pirate-sheet/assets/the-all-seeing-pirate_1.7f3aa6ef.webp",La=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Na}),Fa="/forgotten-waters-pirate-sheet/assets/the-all-seeing-pirate_2.13ae0a39.webp",Ua=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fa}),Ga="/forgotten-waters-pirate-sheet/assets/the-assassin-pirate_1.1618617a.webp",Ja=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ga}),Wa="/forgotten-waters-pirate-sheet/assets/the-assassin-pirate_2.c454d1f7.webp",Ya=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wa}),Xa="/forgotten-waters-pirate-sheet/assets/the-cannonwright-pirate_1.bb786948.webp",Ha=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xa}),Ka="/forgotten-waters-pirate-sheet/assets/the-cannonwright-pirate_2.d388706c.webp",Za=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ka}),qa="/forgotten-waters-pirate-sheet/assets/the-culinary-pirate_1.e2f59e4a.webp",er=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qa}),tr="/forgotten-waters-pirate-sheet/assets/the-culinary-pirate_2.9317962d.webp",ar=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tr}),rr="/forgotten-waters-pirate-sheet/assets/the-debater-pirate_1.a900322b.webp",sr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rr}),or="/forgotten-waters-pirate-sheet/assets/the-debater-pirate_2.41a319a8.webp",ir=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:or}),nr="/forgotten-waters-pirate-sheet/assets/the-doomed-pirate_1.a5e65da2.webp",lr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:nr}),cr="/forgotten-waters-pirate-sheet/assets/the-doomed-pirate_2.64a68190.webp",pr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cr}),dr="/forgotten-waters-pirate-sheet/assets/the-duelist-pirate_1.95a561be.webp",ur=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dr}),hr="/forgotten-waters-pirate-sheet/assets/the-duelist-pirate_2.74c618e1.webp",gr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:hr}),br="/forgotten-waters-pirate-sheet/assets/the-gold-coat-pirate_1.9f162bd6.webp",fr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:br}),_r="/forgotten-waters-pirate-sheet/assets/the-gold-coat-pirate_2.670c2c72.webp",mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_r}),vr="/forgotten-waters-pirate-sheet/assets/the-grifter-pirate_1.5449294d.webp",yr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vr}),wr="/forgotten-waters-pirate-sheet/assets/the-grifter-pirate_2.89b34e5a.webp",xr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wr}),Sr="/forgotten-waters-pirate-sheet/assets/the-lovesick-pirate_1.5c2f9a6c.webp",kr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Sr}),Pr="/forgotten-waters-pirate-sheet/assets/the-lovesick-pirate_2.50ba4c13.webp",Or=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Pr}),jr="/forgotten-waters-pirate-sheet/assets/the-orphan-pirate_1.ca0061a9.webp",Tr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jr}),Ar="/forgotten-waters-pirate-sheet/assets/the-orphan-pirate_2.aad17ddb.webp",zr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ar}),$r="/forgotten-waters-pirate-sheet/assets/the-parent-pirate_1.ee52d5b4.webp",Mr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:$r}),Er="/forgotten-waters-pirate-sheet/assets/the-parent-pirate_2.5125e722.webp",Cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Er}),Rr="/forgotten-waters-pirate-sheet/assets/the-safety-pirate_1.1b37934e.webp",Dr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Rr}),Br="/forgotten-waters-pirate-sheet/assets/the-safety-pirate_2.d77ddd35.webp",Vr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Br}),Ir="/forgotten-waters-pirate-sheet/assets/the-sea-serpent-pirate_1.af1dd84a.webp",Qr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ir}),Nr="/forgotten-waters-pirate-sheet/assets/the-sea-serpent-pirate_2.6aa553e2.webp",Lr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Nr}),Fr="/forgotten-waters-pirate-sheet/assets/the-seasick-pirate_1.31d9df45.webp",Ur=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Fr}),Gr="/forgotten-waters-pirate-sheet/assets/the-seasick-pirate_2.5b817690.webp",Jr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Gr}),Wr="/forgotten-waters-pirate-sheet/assets/the-seeker-pirate_1.346f8062.webp",Yr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Wr}),Xr="/forgotten-waters-pirate-sheet/assets/the-seeker-pirate_2.76bfbc8a.webp",Hr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xr}),Kr="/forgotten-waters-pirate-sheet/assets/the-skeleton-pirate_1.2183f124.webp",Zr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Kr}),qr="/forgotten-waters-pirate-sheet/assets/the-skeleton-pirate_2.96983d9a.webp",es=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:qr}),ts="/forgotten-waters-pirate-sheet/assets/the-survivor-pirate_1.782951b4.webp",as=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ts}),rs="/forgotten-waters-pirate-sheet/assets/the-survivor-pirate_2.897b6841.webp",ss=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:rs}),os="/forgotten-waters-pirate-sheet/assets/the-thespian-pirate_1.76259dbb.webp",is=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:os}),ns="/forgotten-waters-pirate-sheet/assets/the-thespian-pirate_2.f6b337fb.webp",ls=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ns}),cs="/forgotten-waters-pirate-sheet/assets/the-trickster-pirate_1.0de8c6de.webp",ps=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:cs}),ds="/forgotten-waters-pirate-sheet/assets/the-trickster-pirate_2.dfa0222c.webp",us=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ds});const j=Object.fromEntries(Object.entries({"./assets/coin-constellation-event.webp":Oa,"./assets/coin-misfortune.webp":Ta,"./assets/coin-re-roll.webp":za,"./assets/draw.webp":Ma,"./assets/icons.svg":Ca,"./assets/pirate-pub.webp":Da,"./assets/pirates/the-alchemist-pirate_1.webp":Va,"./assets/pirates/the-alchemist-pirate_2.webp":Qa,"./assets/pirates/the-all-seeing-pirate_1.webp":La,"./assets/pirates/the-all-seeing-pirate_2.webp":Ua,"./assets/pirates/the-assassin-pirate_1.webp":Ja,"./assets/pirates/the-assassin-pirate_2.webp":Ya,"./assets/pirates/the-cannonwright-pirate_1.webp":Ha,"./assets/pirates/the-cannonwright-pirate_2.webp":Za,"./assets/pirates/the-culinary-pirate_1.webp":er,"./assets/pirates/the-culinary-pirate_2.webp":ar,"./assets/pirates/the-debater-pirate_1.webp":sr,"./assets/pirates/the-debater-pirate_2.webp":ir,"./assets/pirates/the-doomed-pirate_1.webp":lr,"./assets/pirates/the-doomed-pirate_2.webp":pr,"./assets/pirates/the-duelist-pirate_1.webp":ur,"./assets/pirates/the-duelist-pirate_2.webp":gr,"./assets/pirates/the-gold-coat-pirate_1.webp":fr,"./assets/pirates/the-gold-coat-pirate_2.webp":mr,"./assets/pirates/the-grifter-pirate_1.webp":yr,"./assets/pirates/the-grifter-pirate_2.webp":xr,"./assets/pirates/the-lovesick-pirate_1.webp":kr,"./assets/pirates/the-lovesick-pirate_2.webp":Or,"./assets/pirates/the-orphan-pirate_1.webp":Tr,"./assets/pirates/the-orphan-pirate_2.webp":zr,"./assets/pirates/the-parent-pirate_1.webp":Mr,"./assets/pirates/the-parent-pirate_2.webp":Cr,"./assets/pirates/the-safety-pirate_1.webp":Dr,"./assets/pirates/the-safety-pirate_2.webp":Vr,"./assets/pirates/the-sea-serpent-pirate_1.webp":Qr,"./assets/pirates/the-sea-serpent-pirate_2.webp":Lr,"./assets/pirates/the-seasick-pirate_1.webp":Ur,"./assets/pirates/the-seasick-pirate_2.webp":Jr,"./assets/pirates/the-seeker-pirate_1.webp":Yr,"./assets/pirates/the-seeker-pirate_2.webp":Hr,"./assets/pirates/the-skeleton-pirate_1.webp":Zr,"./assets/pirates/the-skeleton-pirate_2.webp":es,"./assets/pirates/the-survivor-pirate_1.webp":as,"./assets/pirates/the-survivor-pirate_2.webp":ss,"./assets/pirates/the-thespian-pirate_1.webp":is,"./assets/pirates/the-thespian-pirate_2.webp":ls,"./assets/pirates/the-trickster-pirate_1.webp":ps,"./assets/pirates/the-trickster-pirate_2.webp":us}).map(([e,t])=>[e,t.default])),D=j["./assets/icons.svg"];j["./assets/draw.webp"];const Re={reRoll:j["./assets/coin-re-roll.webp"],misfortune:j["./assets/coin-misfortune.webp"],constellationEvent:j["./assets/coin-constellation-event.webp"]};function hs(e,t){return j[`./assets/pirates/${e}_${t}.webp`]}var gs=Object.defineProperty,bs=Object.getOwnPropertyDescriptor,qe=(e,t,r,s)=>{for(var a=s>1?void 0:s?bs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&gs(t,r,a),a},Ie,I,Q,A,De,N,yt,L,wt,F,xt,ie,fs,ne,_s;let te=(Ie=class extends m{constructor(){super(...arguments);l(this,A);l(this,N);l(this,L);l(this,F);l(this,ie);l(this,ne);l(this,I,new C(this));l(this,Q,void 0)}updated(){var t,r;const e=n(this,Q);if(e!==void 0&&e!==n(this,A,De)){const s=(t=this.shadowRoot)==null?void 0:t.querySelector(".coin"),a=Number(getComputedStyle(s).getPropertyValue("--image-rotation").replace(/deg$/,"")),o=Math.sin(a*Math.PI/180),i=Math.cos(a*Math.PI/180);s.animate([{transform:`rotate(${a}deg)`},{transform:`rotate(${a}deg) rotate3d(${o}, ${i}, 0, 180deg) scale(1.55)`,offset:.5},{transform:`rotate(${a}deg) rotate3d(${o}, ${i}, 0, 360deg)`,offset:1}],{duration:400})}((r=this.state)==null?void 0:r._persist.rehydrated)&&H(this,Q,n(this,A,De))}render(){return d`
      <div class="coin ${this.type}"></div>
      x${n(this,A,De)}
      ${R(this.type!=="constellationEvent",()=>d`
        <div class="buttons">
          <button aria-label=${n(this,L,wt)} title=${n(this,L,wt)} @click=${c(this,ie,fs)}>+</button>
          <button aria-label=${n(this,F,xt)} title=${n(this,F,xt)} @click=${c(this,ne,_s)}>-</button>
        </div>
      `)}
    `}},I=new WeakMap,Q=new WeakMap,A=new WeakSet,De=function(){const{dice:e,constellation:{events:t,chartEvents:r}}=this.state;return this.type==="constellationEvent"?r.length-t.filter(s=>s).length:e[this.type]},N=new WeakSet,yt=function(){return this.type==="reRoll"?"Re-Roll":this.type==="misfortune"?"Misfortune":this.type==="constellationEvent"?"Constellation-Event":da(new Error(`Invalid type "${this.type}"`))},L=new WeakSet,wt=function(){return`Increment ${n(this,N,yt)} coin`},F=new WeakSet,xt=function(){return`Decrement ${n(this,N,yt)} coin`},ie=new WeakSet,fs=function(){n(this,I).dispatch(p.dice.increment(this.type))},ne=new WeakSet,_s=function(){n(this,I).dispatch(p.dice.decrement(this.type))},g(Ie,"styles",[Me,_`
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
  `]),Ie);qe([v()],te.prototype,"state",2);qe([$e()],te.prototype,"type",2);te=qe([y("x-coin")],te);var ms=Object.defineProperty,vs=Object.getOwnPropertyDescriptor,Vt=(e,t,r,s)=>{for(var a=s>1?void 0:s?vs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&ms(t,r,a),a},Qe,u,z,$,b,O,le,ys,U,St,ce,ws,pe,xs,de,Ss,ue,ks,he,Ps,ge,Os,be,js,fe,Ts,_e,As,me,zs;let We=(Qe=class extends m{constructor(){super(...arguments);l(this,b);l(this,le);l(this,U);l(this,ce);l(this,pe);l(this,de);l(this,ue);l(this,he);l(this,ge);l(this,be);l(this,fe);l(this,_e);l(this,me);l(this,u,new C(this));l(this,z,Bt(n(this,u)));l(this,$,"--default--")}render(){var e,t,r;return d`
      <x-form-section legend="Pirate" .open=${this.state.ui.isPirateOpen} @toggle=${c(this,ue,ks)}>
        <label for="nickname">Nickname</label>
        <input id="nickname" type="text" name="nickname" placeholder="Pogchamp" .xautofocus=${n(this,b,O).nickname.length===0} .value=${n(this,b,O).nickname} @input=${n(this,z).call(this,s=>p.social.updateNickname(s))}>

        <label for="pirateName">Pirate name</label>
        <input id="pirateName" type="text" name="pirateName" placeholder="Randy McDude" .value=${n(this,b,O).pirateName} @input=${n(this,z).call(this,s=>p.social.updateName(s))}>

        <label for="pirate">Pirate type</label>
        <select id="pirate" name="pirate" .value=${(e=n(this,b,O).pirate)!=null?e:""} @change=${c(this,le,ys)}>
          <option value="">Select a pirate!</option>
          ${this.state.data.pirates.map(({id:s,name:a})=>d`
            <option value=${s} .selected=${s===n(this,b,O).pirate}>${a}</option>
          `)}
        </select>
        ${c(this,U,St).call(this)>0?d`<p>Constellation event count: ${c(this,U,St).call(this)}</p>`:""}
      </x-form-section>

      <x-form-section legend="Story blanks" .open=${this.state.ui.isStoryBlanksOpen} @toggle=${c(this,he,Ps)}>
        ${n(this,b,O).storyBlanks.map((s,a)=>d`
          <label for="blank${a}">#${a+1}</label>
          <input
              id="blank${a}"
              type="text"
              name="blank${a}"
              placeholder="Story..."
              .value=${s}
              @input=${n(this,z).call(this,o=>p.social.updateStoryBlank([a,o]))}>
        `)}
      </x-form-section>

      <x-form-section legend="Settings" .open=${this.state.ui.isSettingsOpen} @toggle=${c(this,ge,Os)}>
        <label for="theme">Theme</label>
        <select id="theme" name="theme" .value=${pt((t=this.state.settings.theme)!=null?t:n(this,$))} @change=${c(this,be,js)}>
          <option value=${n(this,$)}>Comforting sky</option>
          <option value="moldy-parchment">Moldy parchment</option>
          <option value="ocean-heart">Ocean's heart</option>
          <option value="bright-skies">Bright skies</option>
          <option value="bright-parchment">Bright parchment</option>
        </select>

        <label for="font">Font</label>
        <select id="font" name="font" .value=${pt((r=this.state.settings.font)!=null?r:"Mansalva")} @change=${c(this,fe,Ts)}>
          <option value="Mansalva">Mansalva</option>
          <option value="Caveat">Caveat</option>
          <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label for="sound-volume">Sound volume (0-1)</label>
        <input id="sound-volume" name="sound-volume" type="number" min="0" max="1" step="0.02" .value=${this.state.settings.soundVolume} @input=${c(this,me,zs)}>

        <label for="sounds">Sounds enabled</label>
        <input id="sounds" name="sounds" type="checkbox" .checked=${this.state.settings.shouldPlaySounds} @change=${c(this,_e,As)}><br>
      </x-form-section>

      <hr style="width: 90%">

      <button @click=${c(this,ce,ws)}>Clear</button>
      <button @click=${c(this,pe,xs)}>Import</button>
      <button @click=${c(this,de,Ss)}>Export</button>
    `}},u=new WeakMap,z=new WeakMap,$=new WeakMap,b=new WeakSet,O=function(){return this.state.social},le=new WeakSet,ys=function(e){const t=e.currentTarget;n(this,u).dispatch(p.social.selectPirate(t.value))},U=new WeakSet,St=function(){var a,o;const{social:{pirate:e},data:{pirates:t}}=this.state,{chartEvents:r=[],chartProgress:s=[]}=(o=(a=t.find(i=>i.id===e))==null?void 0:a.positions)!=null?o:{};return r.length+s.length},ce=new WeakSet,ws=function(){confirm("Are you sure you want to delete all saved data?")&&n(this,u).dispatch(p.global.clear())},pe=new WeakSet,xs=function(){n(this,u).dispatch(p.global.importData())},de=new WeakSet,Ss=function(){n(this,u).dispatch(p.global.exportData())},ue=new WeakSet,ks=function(){n(this,u).dispatch(p.ui.togglePirate())},he=new WeakSet,Ps=function(){n(this,u).dispatch(p.ui.toggleStoryBlanks())},ge=new WeakSet,Os=function(){n(this,u).dispatch(p.ui.toggleSettings())},be=new WeakSet,js=function(e){const t=e.currentTarget.value;n(this,u).dispatch(p.settings.selectTheme(t===n(this,$)?void 0:t))},fe=new WeakSet,Ts=function(e){const t=e.currentTarget.value;n(this,u).dispatch(p.settings.selectFont(t))},_e=new WeakSet,As=function(){n(this,u).dispatch(p.settings.toggleSounds())},me=new WeakSet,zs=function(e){const t=Number(e.currentTarget.value);n(this,u).dispatch(p.settings.adjustVolume(t))},g(Qe,"styles",[Me,_`
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
  `]),Qe);Vt([v()],We.prototype,"state",2);We=Vt([y("x-controls")],We);var $s=Object.defineProperty,Ms=Object.getOwnPropertyDescriptor,Es=(e,t,r,s)=>{for(var a=s>1?void 0:s?Ms(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&$s(t,r,a),a},Ne;let kt=(Ne=class extends m{updated(){this.setAttribute("aria-hidden","true")}render(){var t;const e=`${D}#${(t=this.textContent)==null?void 0:t.trim()}`;return d`
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <use href="${e}" />
      </svg>
    `}},g(Ne,"styles",[Me,_`
    :host {
      color: var(--on-bg);
      display: inline-grid;
      width: 1.2em;
    }

    svg {
      fill: currentColor;
      aspect-ratio: 1;
    }
  `]),Ne);kt=Es([y("x-icon")],kt);var Cs=Object.defineProperty,Rs=Object.getOwnPropertyDescriptor,et=(e,t,r,s)=>{for(var a=s>1?void 0:s?Rs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&Cs(t,r,a),a},Le,ve,G,Pt,ye,Ds,we,Bs;let ae=(Le=class extends m{constructor(){super(...arguments);l(this,G);l(this,ye);l(this,we);l(this,ve,new C(this))}render(){return d`
      ${[...c(this,we,Bs).call(this),...c(this,ye,Ds).call(this)].map(e=>d`
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
    `}},ve=new WeakMap,G=new WeakSet,Pt=function(e){var h,w;const{social:t,data:r,constellation:s}=this.state,a=(w=(h=r.pirates.find(P=>P.id===t.pirate))==null?void 0:h.positions[e])!=null?w:[],o=e==="chartEvents"?s.chartEvents:s.chartProgress,i=p.constellation[e==="chartEvents"?"toggleChartEvent":"toggleChartProgress"];return a.map((P,st)=>lt(nt({},P),{type:e==="chartEvents"?"event":"progress",selected:o.includes(st),toggle:()=>n(this,ve).dispatch(i(st))}))},ye=new WeakSet,Ds=function(){return c(this,G,Pt).call(this,"chartEvents")},we=new WeakSet,Bs=function(){return c(this,G,Pt).call(this,"chartProgress")},g(Le,"styles",_`
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
      mask-image: url('${x(D+"#cross-mask")}');
      -webkit-mask-image: url('${x(D+"#cross-mask")}');
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
  `),Le);et([v()],ae.prototype,"pulse",2);et([v()],ae.prototype,"state",2);ae=et([y("x-star-chart")],ae);var Vs=Object.defineProperty,Is=Object.getOwnPropertyDescriptor,tt=(e,t,r,s)=>{for(var a=s>1?void 0:s?Is(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&Vs(t,r,a),a},Fe,xe,Se,Qs,ke,Ns,Pe,Ls;let re=(Fe=class extends m{constructor(){super(...arguments);l(this,Se);l(this,ke);l(this,Pe);l(this,xe,new C(this))}render(){return d`
      <div class="labels"></div>
      ${dt(c(this,ke,Ns).call(this),e=>dt(q(8),t=>d`
        <button class="stat-value${f({pulse:this.pulse,active:c(this,Se,Qs).call(this,e,t)})}" @click=${()=>c(this,Pe,Ls).call(this,e,t)}></button>
      `))}

      <x-icon
          id="help"
          title="Click stat boxes to raise or lower stats"
          @mouseenter=${()=>this.pulse=!0}
          @mouseleave=${()=>this.pulse=!1}>
        questionmark
      </x-icon>
    `}},xe=new WeakMap,Se=new WeakSet,Qs=function(e,t){return t>0&&this.state.skills[e]>=t},ke=new WeakSet,Ns=function(){return pa(this.state.skills)},Pe=new WeakSet,Ls=function(e,t){n(this,xe).dispatch(p.skills.update([e,t]))},g(Fe,"styles",_`
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
      mask-image: url('${x(D+"#cross-mask")}');
      -webkit-mask-image: url('${x(D+"#cross-mask")}');
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
  `),Fe);tt([v()],re.prototype,"pulse",2);tt([v()],re.prototype,"state",2);re=tt([y("x-stats")],re);var Fs=Object.defineProperty,Us=Object.getOwnPropertyDescriptor,at=(e,t,r,s)=>{for(var a=s>1?void 0:s?Us(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&Fs(t,r,a),a},Ue,J,Oe,W,je,Gs,M,Be,Te,Js,Ae,Ws,ze,Ys,E,Ve;let se=(Ue=class extends m{constructor(){super(...arguments);l(this,je);l(this,M);l(this,Te);l(this,Ae);l(this,ze);l(this,E);l(this,J,new C(this));l(this,Oe,new qt(this,{callback:([e])=>e?e.contentRect.height:void 0}));l(this,W,Bt(n(this,J)))}get pirate(){return this.state.social.pirate}get social(){return this.state.social}updated(){const e=n(this,Oe).value;e&&this.style.setProperty("--base-height",(e/1100).toPrecision(2))}render(){return this.pirate?d`
      ${R(this.type==="cover",()=>d`
        <div class="inputs cover">
          <input type="text" name="pirateName" placeholder="Pirate name" .value=${this.social.pirateName} @input=${n(this,W).call(this,e=>p.social.updateName(e))}>
        </div>
        <x-star-chart class="star-chart"></x-star-chart>
        <x-stats class="stats"></x-stats>
      `)}

      ${R(this.type==="background",()=>d`
        <div class="inputs background">
          ${this.social.storyBlanks.map((e,t)=>d`
            <input type="text" name="blank${t}" placeholder="Story blank ${t+1}" .value=${e} @input=${n(this,W).call(this,r=>p.social.updateStoryBlank([t,r]))}>
          `)}
        </div>
      `)}

      ${R(this.type==="constellation",()=>this.state.constellation.events.map((e,t)=>d`
        <button
            class="exclamation constellation-event ${f({active:e})}"
            style="--y: ${c(this,ze,Ys).call(this,t)}"
            .disabled=${!c(this,Te,Js).call(this,t)}
            @click=${()=>c(this,Ae,Ws).call(this,t)}>
          <x-icon>exclamation</x-icon>
        </button>

        <x-icon
            id="ending-help"
            title="Constellation events can be clicked below when you have constellation event coins available (received from constellation map on the cover page)">
          questionmark
        </x-icon>
      `))}

      ${R(this.type==="endings",()=>d`
        <div class="ending bad" style=${Z(c(this,E,Ve).call(this,"bad"))}>
          ${q(3).map(e=>d`
            <button
                class="exclamation ${f({active:c(this,M,Be).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending good" style=${Z(c(this,E,Ve).call(this,"good"))}>
          ${q(4).map(e=>d`
            <button
                class="exclamation ${f({active:c(this,M,Be).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
        <div class="ending legendary" style=${Z(c(this,E,Ve).call(this,"legendary"))}>
          ${q(5).map(e=>d`
            <button
                class="exclamation ${f({active:c(this,M,Be).call(this)>e})}"
                .disabled=${!0}>
              <x-icon>exclamation</x-icon>
            </button>
          `)}
        </div>
      `)}

      <img class="sheet${f({[this.type]:!0})}" src=${c(this,je,Gs).call(this)}>
    `:ea}},J=new WeakMap,Oe=new WeakMap,W=new WeakMap,je=new WeakSet,Gs=function(){return hs(this.pirate,this.type==="cover"||this.type==="endings"?1:2)},M=new WeakSet,Be=function(){return this.state.constellation.events.reduce((e,t)=>e+(t?1:0),0)},Te=new WeakSet,Js=function(e){var s,a;const{constellation:{events:t,chartEvents:r}}=this.state;return r.length>e&&(t[e]&&!((s=t[e+1])!=null?s:!1)||!t[e]&&((a=t[e-1])!=null?a:!0))},Ae=new WeakSet,Ws=function(e){n(this,J).dispatch(p.constellation.toggleEvent(e))},ze=new WeakSet,Ys=function(e){var a,o;const{social:{pirate:t},data:{pirates:r}}=this.state;return`${(o=(a=r.find(i=>i.id===t))==null?void 0:a.positions.constellationEvents[e])!=null?o:e*10}%`},E=new WeakSet,Ve=function(e){var o,i;const{social:{pirate:t},data:{pirates:r}}=this.state,{x:s=0,y:a=0}=(i=(o=r.find(h=>h.id===t))==null?void 0:o.positions.endings[e])!=null?i:{};return{"--x":`${s}%`,"--y":`${a}%`}},g(Ue,"styles",_`
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
  `),Ue);at([v()],se.prototype,"state",2);at([$e()],se.prototype,"type",2);se=at([y("x-sheet")],se);var Xs=Object.defineProperty,Hs=Object.getOwnPropertyDescriptor,rt=(e,t,r,s)=>{for(var a=s>1?void 0:s?Hs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&Xs(t,r,a),a},Ge,Y,Ot;let oe=(Ge=class extends m{constructor(){super(...arguments);l(this,Y)}toggle(){this.dispatchEvent(new Event("toggle"))}render(){return d`
      <fieldset>
        <legend>${this.legend}</legend>
        <button class=${f({rotate:!n(this,Y,Ot)})} @click=${this.toggle}>
          <x-icon>arrow-down</x-icon>
        </button>
        <div class="collapsible${f({open:n(this,Y,Ot)})}">
          <slot></slot>
        </div>
      </fieldset>
    `}},Y=new WeakSet,Ot=function(){var e;return(e=this.open)!=null?e:!0},g(Ge,"styles",_`
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
  `),Ge);rt([$e()],oe.prototype,"legend",2);rt([$e()],oe.prototype,"open",2);oe=rt([y("x-form-section")],oe);var Ks=Object.defineProperty,Zs=Object.getOwnPropertyDescriptor,It=(e,t,r,s)=>{for(var a=s>1?void 0:s?Zs(t,r):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(s?i(t,r,a):i(a))||a);return s&&a&&Ks(t,r,a),a},Je,Xe;let Ye=(Je=class extends m{constructor(){super(...arguments);l(this,Xe,new C(this))}changeFont(e){document.documentElement.style.setProperty("--font-family",e.currentTarget.value)}render(){return d`
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
    `}},Xe=new WeakMap,g(Je,"styles",[Me,aa]),Je);It([v()],Ye.prototype,"state",2);Ye=It([y("x-root")],Ye);
