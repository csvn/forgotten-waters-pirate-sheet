var M=Object.defineProperty;var L=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var C=(i,t,e)=>t in i?M(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,k=(i,t)=>{for(var e in t||(t={}))A.call(t,e)&&C(i,e,t[e]);if(L)for(var e of L(t))D.call(t,e)&&C(i,e,t[e]);return i};var $=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var s=(i,t,e)=>($(i,t,"read from private field"),e?e.call(i):t.get(i)),g=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},b=(i,t,e,n)=>($(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);var S=(i,t,e)=>($(i,t,"access private method"),e);import{s as O,g as T,a as U,p,c as y}from"./vendor.3f3aa34a.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function e(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=e(r);fetch(r.href,o)}};j();var q="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.37eaaf02.png",N="/forgotten-waters-pirate-sheet/assets/coin-re-roll.e5db71a5.png",R="/forgotten-waters-pirate-sheet/assets/coin-star-sign.f0370ed1.png";const w=new WeakMap;var a,u,f,m,P;class V extends O{constructor(){super(...arguments);g(this,m);g(this,a,S(this,m,P).call(this));g(this,u,void 0);g(this,f,void 0)}async connectedCallback(){super.connectedCallback();const[t,e]=await Promise.all([T("state"),fetch("/players.json").then(n=>n.json())]);b(this,a,k(k({},s(this,a)),t)),b(this,f,e),this.requestUpdate()}getSheet(t){const e=s(this,a)[t===0?"sheet1":"sheet2"];return w.has(e)||w.set(e,URL.createObjectURL(new Blob([e]))),w.get(e)}async selectSheet(t){const e=await X("image/*");if(!e)return;const n=await e.arrayBuffer(),r=t===0?"sheet1":"sheet2";s(this,a)[r]=n,this.persist()}async persist(){this.requestUpdate(),await U("state",s(this,a))}updateField(t){const e=t.currentTarget,n=e.name;s(this,a)[n]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(b(this,a,S(this,m,P).call(this)),this.persist())}coinStyle(t,e,n=s(this,a).coinSize){return`--x: ${t}; --y: ${e}; --size: ${n};`}coinDragStart(t){const e=t.currentTarget,{x:n,y:r}=e.coin,{pageX:o,pageY:c}=t,h=d=>{const{pageX:x,pageY:E}=d,z=x-o,F=E-c;e.style=this.coinStyle(n+z,r+F),e.coin.x=n+z,e.coin.y=r+F},l=()=>{this.persist(),document.body.removeEventListener("mousemove",h),document.body.removeEventListener("mouseup",l)};document.body.addEventListener("mousemove",h),document.body.addEventListener("mouseup",l)}updateCoinSize(t){const e=t.currentTarget.value;s(this,a).coinSize=e,this.persist()}setStat(t,e){s(this,a).skills[t]=e,this.persist()}changeFont(t){document.documentElement.style.setProperty("--font-family",t.currentTarget.value)}rollDie(){const t=10+Math.random()*12;let e=0;const n=()=>{e<t&&requestAnimationFrame(n),b(this,u,Math.floor(e)%12),e+=.2,this.requestUpdate()};n()}render(){var t,e,n,r,o,c,h;return p`
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
          background-image: url('${q}');
        }
        .coin.re-roll {
          background-image: url('${N}');
        }
        .coin.star-sign {
          background-image: url('${R}');
        }
      </style>

      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${s(this,u)===void 0?"":p`<span class="roll">Current roll: <span class="roll-value">${String(s(this,u)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${s(this,a).coinSize} @input=${this.updateCoinSize}></label>
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
        ${s(this,a).sheet1?p`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${(t=s(this,a).name)!=null?t:""} @input=${this.updateField}>
            </div>
            <div class="stats">
              ${y(Object.keys(s(this,a).skills),l=>y(v(8),d=>p`
                <button class="stat-value${d>0&&s(this,a).skills[l]>=d?" active":""}" @click=${()=>this.setStat(l,d)}></button>
              `))}
            </div>
            <img src=${this.getSheet(0)}>
          </section>
        `:""}
        ${s(this,a).sheet2?p`
          <section>
            <div class="sheet2 inputs">
              <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=s(this,a).blank1)!=null?e:""} @input=${this.updateField}>
              <input type="text" name="blank2" placeholder="Story blank 2" .value=${(n=s(this,a).blank2)!=null?n:""} @input=${this.updateField}>
              <input type="text" name="blank3" placeholder="Story blank 3" .value=${(r=s(this,a).blank3)!=null?r:""} @input=${this.updateField}>
              <input type="text" name="blank4" placeholder="Story blank 4" .value=${(o=s(this,a).blank4)!=null?o:""} @input=${this.updateField}>
              <input type="text" name="blank5" placeholder="Story blank 5" .value=${(c=s(this,a).blank5)!=null?c:""} @input=${this.updateField}>
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
            ${y((h=s(this,f))!=null?h:[],([l,d,x])=>p`<tr>
              <td>${l}</td>
              <td>${x}</td>
              <td>${d}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${y(s(this,a).coins,l=>p`
        <div class="coin ${l.type}" .style="${this.coinStyle(l.x,l.y)}" .coin=${l} @mousedown=${this.coinDragStart}></div>
      `)}
    `}}a=new WeakMap,u=new WeakMap,f=new WeakMap,m=new WeakSet,P=function(){const t=90;return{sheet1:void 0,sheet2:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...v(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...v(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...v(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}};customElements.define("x-root",V);function v(i){return Array.from({length:i},(t,e)=>e)}async function X(i){var e;const t=document.createElement("input");return t.type="file",t.accept=i,t.multiple=!1,t.hidden=!0,t.click(),await Y(t,"change"),(e=t.files)==null?void 0:e[0]}function Y(i,t){return new Promise(e=>{i.addEventListener(t,n=>e(n),{once:!0})})}
