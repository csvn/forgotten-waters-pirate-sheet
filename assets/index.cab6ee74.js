var M=Object.defineProperty;var F=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var y=(t,e,i)=>e in t?M(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,x=(t,e)=>{for(var i in e||(e={}))D.call(e,i)&&y(t,i,e[i]);if(F)for(var i of F(e))_.call(e,i)&&y(t,i,e[i]);return t};var T=(t,e,i)=>(y(t,typeof e!="symbol"?e+"":e,i),i),k=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var n=(t,e,i)=>(k(t,e,"read from private field"),i?i.call(t):e.get(t)),h=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},u=(t,e,i,s)=>(k(t,e,"write to private field"),s?s.call(t,i):e.set(t,i),i);var $=(t,e,i)=>(k(t,e,"access private method"),i);import{s as U,r as j,o as S,g as q,a as N,p as d,c as f,n as W}from"./vendor.2c1be18c.js";const B=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}};B();async function R(t){var i;const e=document.createElement("input");return e.type="file",e.accept=t,e.multiple=!1,e.hidden=!0,e.click(),await V(e,"change"),(i=e.files)==null?void 0:i[0]}function V(t,e){return new Promise(i=>{t.addEventListener(e,s=>i(s),{once:!0})})}var J=[["Adam","The All-Seeing Pirate","Owen Three-eyes"],["Christian","The Lovesick Pirate","Vince 'Snaggletooth' Winters"],["Elias","The Orphan Pirate","Furryback Bob"],["Erik","The Cannonwright Pirate","Bastian 'Notoe' Shortfuse"],["Johan","The Alchemist Pirate","Captain 'Salty Whiskey' Willy"],["Simon","The Gold Coat Pirate","Ivar McDuck"],["Tim","The Culinary Pirate","Alistair McFeast"]],X="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.37eaaf02.png",Y="/forgotten-waters-pirate-sheet/assets/coin-re-roll.e5db71a5.png",H="/forgotten-waters-pirate-sheet/assets/coin-star-sign.f0370ed1.png",I=Object.defineProperty,G=Object.getOwnPropertyDescriptor,K=(t,e,i,s)=>{for(var a=s>1?void 0:s?G(e,i):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(a=(s?l(e,i,a):l(a))||a);return s&&a&&I(e,i,a),a};const w=new WeakMap;var P,r,p,g,b,O;let L=(P=class extends U{constructor(){super(...arguments);h(this,b);h(this,r,$(this,b,O).call(this));h(this,p,void 0);h(this,g,!1)}async connectedCallback(){super.connectedCallback();const t=await q("state");u(this,r,x(x({},n(this,r)),t)),this.requestUpdate()}getSheet(t){const e=n(this,r)[t===0?"sheet1":"sheet2"];return e&&!w.has(e)&&w.set(e,URL.createObjectURL(new Blob([e]))),w.get(e)}async selectSheet(t){const e=await R("image/*");if(!e)return;const i=await e.arrayBuffer(),s=t===0?"sheet1":"sheet2";n(this,r)[s]=i,this.persist()}async persist(){this.requestUpdate();const t=navigator.storage;!n(this,g)&&t&&!await t.persisted()&&(await t.persist(),u(this,g,!0)),await N("state",n(this,r))}updateField(t){const e=t.currentTarget,i=e.name;n(this,r)[i]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(u(this,r,$(this,b,O).call(this)),this.persist())}coinStyle(t,e,i=n(this,r).coinSize){return`--x: ${t}; --y: ${e}; --size: ${i};`}coinDragStart(t){const e=t.currentTarget,{x:i,y:s}=e.coin,{pageX:a,pageY:o}=t,l=v=>{const{pageX:E,pageY:A}=v,z=E-a,C=A-o;e.style=this.coinStyle(i+z,s+C),e.coin.x=i+z,e.coin.y=s+C},c=()=>{this.persist(),document.body.removeEventListener("mousemove",l),document.body.removeEventListener("mouseup",c)};document.body.addEventListener("mousemove",l),document.body.addEventListener("mouseup",c)}updateCoinSize(t){const e=t.currentTarget.value;n(this,r).coinSize=e,this.persist()}setStat(t,e){n(this,r).skills[t]=e,this.persist()}changeFont(t){document.documentElement.style.setProperty("--font-family",t.currentTarget.value)}rollDie(){const t=10+Math.random()*12;let e=0;const i=()=>{e<t&&requestAnimationFrame(i),u(this,p,Math.floor(e)%12),e+=.2,this.requestUpdate()};i()}render(){var t,e,i,s,a,o;return d`
      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${n(this,p)===void 0?"":d`<span class="roll">Current roll: <span class="roll-value">${String(n(this,p)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${n(this,r).coinSize} @input=${this.updateCoinSize}></label>
        <label>
          Font:
          <select @change=${this.changeFont}>
            <option value="Mansalva" selected>Mansalva</option>
            <option value="Caveat">Caveat</option>
            <option value="JustMeAgainDownHere">Just Me Again Down Here</option>
            <option value="Verdana">Verdana</option>
          </select>
        </label>
      </header>
      <main>
        ${n(this,r).sheet1?d`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${(t=n(this,r).name)!=null?t:""} @input=${this.updateField}>
            </div>
            <div class="stats">
              ${f(Object.keys(n(this,r).skills),l=>f(m(8),c=>d`
                <button class="stat-value${c>0&&n(this,r).skills[l]>=c?" active":""}" @click=${()=>this.setStat(l,c)}></button>
              `))}
            </div>
            <img src=${this.getSheet(0)}>
          </section>
        `:""}
        ${n(this,r).sheet2?d`
          <section>
            <div class="sheet2 inputs">
              <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=n(this,r).blank1)!=null?e:""} @input=${this.updateField}>
              <input type="text" name="blank2" placeholder="Story blank 2" .value=${(i=n(this,r).blank2)!=null?i:""} @input=${this.updateField}>
              <input type="text" name="blank3" placeholder="Story blank 3" .value=${(s=n(this,r).blank3)!=null?s:""} @input=${this.updateField}>
              <input type="text" name="blank4" placeholder="Story blank 4" .value=${(a=n(this,r).blank4)!=null?a:""} @input=${this.updateField}>
              <input type="text" name="blank5" placeholder="Story blank 5" .value=${(o=n(this,r).blank5)!=null?o:""} @input=${this.updateField}>
            </div>
            <img src=${this.getSheet(1)}>
          </section>
        `:""}
      </main>
      <aside>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Pirate Name</th>
              <th>Pirate Type</th>
            </tr>
          </thead>
          <tbody>
            ${f(J,([l,c,v])=>d`<tr>
              <td>${l}</td>
              <td>${v}</td>
              <td>${c}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${f(n(this,r).coins,l=>d`
        <div class="coin ${l.type}" .style="${this.coinStyle(l.x,l.y)}" .coin=${l} @mousedown=${this.coinDragStart}></div>
      `)}
    `}},r=new WeakMap,p=new WeakMap,g=new WeakMap,b=new WeakSet,O=function(){const t=90;return{sheet1:void 0,sheet2:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...m(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...m(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...m(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}},T(P,"styles",j`
    :host {
      display: grid;
      grid: auto 1fr / minmax(600px, 1fr) auto;
      gap: 20px;
      padding: 15px 30px 50px;
    }

    table th {
      font-size: 32px;
    }
    table td {
      font-size: 26px;
    }
    table th + th,
    table td + td {
      padding-left: 40px;
    }

    header {
      display: flex;
      align-items: center;
      grid-column: span 2;
      gap: 20px;
      padding-bottom: 100px;
    }

    header h1 {
      flex: 1;
      margin: 0;
    }

    header input,
    header select {
      color: var(--on-bg);
      background-color: rgba(255, 255, 255, .3);
      border-radius: 5px;
      font-size: inherit;
      font-family: inherit;
      line-height: 1.8;
      margin: 0 10px;
      padding: 0 10px;
      width: 100px;
    }
    header select {
      width: 200px;
    }
    header select option {
      background-color: var(--bg-alt);
    }

    header button {
      cursor: pointer;
      color: var(--on-primary);
      background-color: var(--primary);
      border: 0;
      border-radius: 5px;
      font-size: inherit;
      font-family: inherit;
      line-height: 2.4;
      padding: 0 24px;
      transition: all .25s;
    }
    header button:hover {
      background-color: var(--primary-alt);
    }

    section {
      flex: 1;
      position: relative;
      max-width: 1600px;
    }
    section img {
      width: 100%;
      height: auto;
    }

    .inputs {
      display: flex;
      flex-direction: column;
      position: absolute;
      gap: 2%;
    }
    .sheet1 {
      top: 11%;
      left: 56%;
      width: 37%;
      height: 6.5%;
    }
    .sheet2 {
      top: 13%;
      left: 20.5%;
      width: 25%;
      height: 27%;
    }

    .inputs input {
      background-color: transparent;
      border: dashed 7px var(--hint);
      flex: 1;
      font-size: 30px;
      font-family: inherit;
      padding: 0 20px;
      transition: all .2s;
    }
    .inputs input:focus-visible {
      border-color: var(--hint-active);
      outline: 0;
    }
    .inputs.sheet2 input {
      font-size: 24px;
      border-width: 5px;
    }

    .stats {
      display: grid;
      grid: repeat(7, 1fr) / repeat(8, 1fr);
      position: absolute;
      top: 75.8%;
      left: 69.2%;
      width: 23%;
      height: 23%;
    }
    .stat-value {
      cursor: pointer;
      background-color: transparent;
      border: dashed 4px transparent;
      transition: all .2s;
    }
    .stat-value:hover {
      border-color: var(--hint-active);
    }
    .stat-value.active {
      background-color: var(--hint);
    }

    .roll {
      font-size: 20px;
      white-space: pre;
    }
    .roll-value {
      font-family: monospace;
    }

    .coin {
      --size: 80px;
      cursor: move;
      background-position: center;
      background-size: 120%;
      border-radius: 50%;
      top: var(--y);
      left: var(--x);
      width: var(--size);
      height: var(--size);
      position: absolute;
      user-select: none;
      filter: brightness(1.25);
    }
    .coin.bad-luck {
      background-image: url('${S(X)}');
      filter: brightness(1.6);
      transform: rotate(120deg);
    }
    .coin.re-roll {
      background-image: url('${S(Y)}');
    }
    .coin.star-sign {
      background-image: url('${S(H)}');
      transform: rotate(45deg);
    }
  `),P);L=K([W("x-root")],L);function m(t){return Array.from({length:t},(e,i)=>i)}
