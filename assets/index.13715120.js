var A=Object.defineProperty;var C=Object.getOwnPropertySymbols;var M=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var v=(t,e,i)=>e in t?A(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,y=(t,e)=>{for(var i in e||(e={}))M.call(e,i)&&v(t,i,e[i]);if(C)for(var i of C(e))D.call(e,i)&&v(t,i,e[i]);return t};var F=(t,e,i)=>(v(t,typeof e!="symbol"?e+"":e,i),i),x=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var r=(t,e,i)=>(x(t,e,"read from private field"),i?i.call(t):e.get(t)),u=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},g=(t,e,i,s)=>(x(t,e,"write to private field"),s?s.call(t,i):e.set(t,i),i);var k=(t,e,i)=>(x(t,e,"access private method"),i);import{s as _,r as U,o as $,g as j,a as q,p as d,c as b,n as N}from"./vendor.2c1be18c.js";const W=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=i(a);fetch(a.href,o)}};W();async function B(t){var i;const e=document.createElement("input");return e.type="file",e.accept=t,e.multiple=!1,e.hidden=!0,e.click(),await R(e,"change"),(i=e.files)==null?void 0:i[0]}function R(t,e){return new Promise(i=>{t.addEventListener(e,s=>i(s),{once:!0})})}var V=[["Adam","The All-Seeing Pirate","Owen Three-eyes"],["Christian","The Lovesick Pirate","Vince 'Snaggletooth' Winters"],["Elias","The Orphan Pirate","Furryback Bob"],["Erik","The Cannonwright Pirate","Bastian 'Notoe' Shortfuse"],["Johan","The Alchemist Pirate","Captain 'Salty Whiskey' Willy"],["Simon","The Gold Coat Pirate","Ivar McDuck"],["Tim","The Culinary Pirate","Alistair McFeast"]],J="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.37eaaf02.png",X="/forgotten-waters-pirate-sheet/assets/coin-re-roll.e5db71a5.png",Y="/forgotten-waters-pirate-sheet/assets/coin-star-sign.f0370ed1.png",H=Object.defineProperty,I=Object.getOwnPropertyDescriptor,G=(t,e,i,s)=>{for(var a=s>1?void 0:s?I(e,i):e,o=t.length-1,l;o>=0;o--)(l=t[o])&&(a=(s?l(e,i,a):l(a))||a);return s&&a&&H(e,i,a),a};const S=new WeakMap;var w,n,p,h,L;let T=(w=class extends _{constructor(){super(...arguments);u(this,h);u(this,n,k(this,h,L).call(this));u(this,p,void 0)}async connectedCallback(){super.connectedCallback();const t=await j("state");g(this,n,y(y({},r(this,n)),t)),this.requestUpdate()}getSheet(t){const e=r(this,n)[t===0?"sheet1":"sheet2"];return e&&!S.has(e)&&S.set(e,URL.createObjectURL(new Blob([e]))),S.get(e)}async selectSheet(t){const e=await B("image/*");if(!e)return;const i=await e.arrayBuffer(),s=t===0?"sheet1":"sheet2";r(this,n)[s]=i,this.persist()}async persist(){this.requestUpdate(),await q("state",r(this,n))}updateField(t){const e=t.currentTarget,i=e.name;r(this,n)[i]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(g(this,n,k(this,h,L).call(this)),this.persist())}coinStyle(t,e,i=r(this,n).coinSize){return`--x: ${t}; --y: ${e}; --size: ${i};`}coinDragStart(t){const e=t.currentTarget,{x:i,y:s}=e.coin,{pageX:a,pageY:o}=t,l=m=>{const{pageX:O,pageY:E}=m,P=O-a,z=E-o;e.style=this.coinStyle(i+P,s+z),e.coin.x=i+P,e.coin.y=s+z},c=()=>{this.persist(),document.body.removeEventListener("mousemove",l),document.body.removeEventListener("mouseup",c)};document.body.addEventListener("mousemove",l),document.body.addEventListener("mouseup",c)}updateCoinSize(t){const e=t.currentTarget.value;r(this,n).coinSize=e,this.persist()}setStat(t,e){r(this,n).skills[t]=e,this.persist()}changeFont(t){document.documentElement.style.setProperty("--font-family",t.currentTarget.value)}rollDie(){const t=10+Math.random()*12;let e=0;const i=()=>{e<t&&requestAnimationFrame(i),g(this,p,Math.floor(e)%12),e+=.2,this.requestUpdate()};i()}render(){var t,e,i,s,a,o;return d`
      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${r(this,p)===void 0?"":d`<span class="roll">Current roll: <span class="roll-value">${String(r(this,p)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${r(this,n).coinSize} @input=${this.updateCoinSize}></label>
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
        ${r(this,n).sheet1?d`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${(t=r(this,n).name)!=null?t:""} @input=${this.updateField}>
            </div>
            <div class="stats">
              ${b(Object.keys(r(this,n).skills),l=>b(f(8),c=>d`
                <button class="stat-value${c>0&&r(this,n).skills[l]>=c?" active":""}" @click=${()=>this.setStat(l,c)}></button>
              `))}
            </div>
            <img src=${this.getSheet(0)}>
          </section>
        `:""}
        ${r(this,n).sheet2?d`
          <section>
            <div class="sheet2 inputs">
              <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=r(this,n).blank1)!=null?e:""} @input=${this.updateField}>
              <input type="text" name="blank2" placeholder="Story blank 2" .value=${(i=r(this,n).blank2)!=null?i:""} @input=${this.updateField}>
              <input type="text" name="blank3" placeholder="Story blank 3" .value=${(s=r(this,n).blank3)!=null?s:""} @input=${this.updateField}>
              <input type="text" name="blank4" placeholder="Story blank 4" .value=${(a=r(this,n).blank4)!=null?a:""} @input=${this.updateField}>
              <input type="text" name="blank5" placeholder="Story blank 5" .value=${(o=r(this,n).blank5)!=null?o:""} @input=${this.updateField}>
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
            ${b(V,([l,c,m])=>d`<tr>
              <td>${l}</td>
              <td>${m}</td>
              <td>${c}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${b(r(this,n).coins,l=>d`
        <div class="coin ${l.type}" .style="${this.coinStyle(l.x,l.y)}" .coin=${l} @mousedown=${this.coinDragStart}></div>
      `)}
    `}},n=new WeakMap,p=new WeakMap,h=new WeakSet,L=function(){const t=90;return{sheet1:void 0,sheet2:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...f(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...f(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...f(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}},F(w,"styles",U`
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
      background-image: url('${$(J)}');
      filter: brightness(1.6);
      transform: rotate(120deg);
    }
    .coin.re-roll {
      background-image: url('${$(X)}');
    }
    .coin.star-sign {
      background-image: url('${$(Y)}');
      transform: rotate(45deg);
    }
  `),w);T=G([N("x-root")],T);function f(t){return Array.from({length:t},(e,i)=>i)}
