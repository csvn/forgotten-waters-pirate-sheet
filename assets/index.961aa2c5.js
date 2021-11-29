var L=Object.defineProperty;var z=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var P=(i,t,e)=>t in i?L(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,v=(i,t)=>{for(var e in t||(t={}))E.call(t,e)&&P(i,e,t[e]);if(z)for(var e of z(t))A.call(t,e)&&P(i,e,t[e]);return i};var k=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var r=(i,t,e)=>(k(i,t,"read from private field"),e?e.call(i):t.get(i)),g=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},b=(i,t,e,s)=>(k(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e);var x=(i,t,e)=>(k(i,t,"access private method"),e);import{s as M,g as O,a as D,p as u,c as f}from"./vendor.3f3aa34a.js";const U=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}};U();var q=[["Adam","The All-Seeing Pirate","Owen Three-eyes"],["Christian","The Lovesick Pirate","Vince 'Snaggletooth' Winters"],["Elias","The Orphan Pirate","Furryback Bob"],["Erik","The Cannonwright Pirate","Bastian 'Notoe' Shortfuse"],["Johan","The Alchemist Pirate","Captain 'Salty Whiskey' Willy"],["Simon","The Gold Coat Pirate","Ivar McDuck"],["Tim","The Culinary Pirate","Alistair McFeast"]],N="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.37eaaf02.png",W="/forgotten-waters-pirate-sheet/assets/coin-re-roll.e5db71a5.png",B="/forgotten-waters-pirate-sheet/assets/coin-star-sign.f0370ed1.png";const $=new WeakMap;var a,p,h,C;class R extends M{constructor(){super(...arguments);g(this,h);g(this,a,x(this,h,C).call(this));g(this,p,void 0)}async connectedCallback(){super.connectedCallback();const t=await O("state");b(this,a,v(v({},r(this,a)),t)),this.requestUpdate()}getSheet(t){const e=r(this,a)[t===0?"sheet1":"sheet2"];return $.has(e)||$.set(e,URL.createObjectURL(new Blob([e]))),$.get(e)}async selectSheet(t){const e=await V("image/*");if(!e)return;const s=await e.arrayBuffer(),n=t===0?"sheet1":"sheet2";r(this,a)[n]=s,this.persist()}async persist(){this.requestUpdate(),await D("state",r(this,a))}updateField(t){const e=t.currentTarget,s=e.name;r(this,a)[s]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(b(this,a,x(this,h,C).call(this)),this.persist())}coinStyle(t,e,s=r(this,a).coinSize){return`--x: ${t}; --y: ${e}; --size: ${s};`}coinDragStart(t){const e=t.currentTarget,{x:s,y:n}=e.coin,{pageX:o,pageY:c}=t,l=y=>{const{pageX:F,pageY:T}=y,S=F-o,w=T-c;e.style=this.coinStyle(s+S,n+w),e.coin.x=s+S,e.coin.y=n+w},d=()=>{this.persist(),document.body.removeEventListener("mousemove",l),document.body.removeEventListener("mouseup",d)};document.body.addEventListener("mousemove",l),document.body.addEventListener("mouseup",d)}updateCoinSize(t){const e=t.currentTarget.value;r(this,a).coinSize=e,this.persist()}setStat(t,e){r(this,a).skills[t]=e,this.persist()}changeFont(t){document.documentElement.style.setProperty("--font-family",t.currentTarget.value)}rollDie(){const t=10+Math.random()*12;let e=0;const s=()=>{e<t&&requestAnimationFrame(s),b(this,p,Math.floor(e)%12),e+=.2,this.requestUpdate()};s()}render(){var t,e,s,n,o,c;return u`
      <style>
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
        }
        .coin.bad-luck {
          background-image: url('${N}');
        }
        .coin.re-roll {
          background-image: url('${W}');
        }
        .coin.star-sign {
          background-image: url('${B}');
        }
      </style>

      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${r(this,p)===void 0?"":u`<span class="roll">Current roll: <span class="roll-value">${String(r(this,p)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${r(this,a).coinSize} @input=${this.updateCoinSize}></label>
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
        ${r(this,a).sheet1?u`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${(t=r(this,a).name)!=null?t:""} @input=${this.updateField}>
            </div>
            <div class="stats">
              ${f(Object.keys(r(this,a).skills),l=>f(m(8),d=>u`
                <button class="stat-value${d>0&&r(this,a).skills[l]>=d?" active":""}" @click=${()=>this.setStat(l,d)}></button>
              `))}
            </div>
            <img src=${this.getSheet(0)}>
          </section>
        `:""}
        ${r(this,a).sheet2?u`
          <section>
            <div class="sheet2 inputs">
              <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=r(this,a).blank1)!=null?e:""} @input=${this.updateField}>
              <input type="text" name="blank2" placeholder="Story blank 2" .value=${(s=r(this,a).blank2)!=null?s:""} @input=${this.updateField}>
              <input type="text" name="blank3" placeholder="Story blank 3" .value=${(n=r(this,a).blank3)!=null?n:""} @input=${this.updateField}>
              <input type="text" name="blank4" placeholder="Story blank 4" .value=${(o=r(this,a).blank4)!=null?o:""} @input=${this.updateField}>
              <input type="text" name="blank5" placeholder="Story blank 5" .value=${(c=r(this,a).blank5)!=null?c:""} @input=${this.updateField}>
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
            ${f(q,([l,d,y])=>u`<tr>
              <td>${l}</td>
              <td>${y}</td>
              <td>${d}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${f(r(this,a).coins,l=>u`
        <div class="coin ${l.type}" .style="${this.coinStyle(l.x,l.y)}" .coin=${l} @mousedown=${this.coinDragStart}></div>
      `)}
    `}}a=new WeakMap,p=new WeakMap,h=new WeakSet,C=function(){const t=90;return{sheet1:void 0,sheet2:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...m(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...m(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...m(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}};customElements.define("x-root",R);function m(i){return Array.from({length:i},(t,e)=>e)}async function V(i){var e;const t=document.createElement("input");return t.type="file",t.accept=i,t.multiple=!1,t.hidden=!0,t.click(),await j(t,"change"),(e=t.files)==null?void 0:e[0]}function j(i,t){return new Promise(e=>{i.addEventListener(t,s=>e(s),{once:!0})})}
