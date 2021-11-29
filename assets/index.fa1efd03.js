var O=Object.defineProperty;var z=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var k=(t,e,i)=>e in t?O(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,S=(t,e)=>{for(var i in e||(e={}))D.call(e,i)&&k(t,i,e[i]);if(z)for(var i of z(e))I.call(e,i)&&k(t,i,e[i]);return t};var F=(t,e,i)=>(k(t,typeof e!="symbol"?e+"":e,i),i),$=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var a=(t,e,i)=>($(t,e,"read from private field"),i?i.call(t):e.get(t)),u=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},g=(t,e,i,o)=>($(t,e,"write to private field"),o?o.call(t,i):e.set(t,i),i);var b=(t,e,i)=>($(t,e,"access private method"),i);import{s as V,r as N,o as y,g as j,a as _,p,c as x,n as J}from"./vendor.2c1be18c.js";const Q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const l of n)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(n){const l={};return n.integrity&&(l.integrity=n.integrity),n.referrerpolicy&&(l.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?l.credentials="include":n.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(n){if(n.ep)return;n.ep=!0;const l=i(n);fetch(n.href,l)}};Q();async function W(t){var i;const e=document.createElement("input");return e.type="file",e.accept=t,e.multiple=!1,e.hidden=!0,e.click(),await X(e,"change"),(i=e.files)==null?void 0:i[0]}function X(t,e){return new Promise(i=>{t.addEventListener(e,o=>i(o),{once:!0})})}var q=[["Adam","The All-Seeing Pirate","Owen Three-eyes"],["Christian","The Lovesick Pirate","Vince 'Snaggletooth' Winters"],["Elias","The Orphan Pirate","Furryback Bob"],["Erik","The Cannonwright Pirate","Bastian 'Notoe' Shortfuse"],["Johan","The Alchemist Pirate","Seaman 'Salty Whiskey' Willy"],["Simon","The Gold Coat Pirate","Ivar McDuck"],["Tim","The Culinary Pirate","Alistair McFeast"]],G="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAAIVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJCQkAAAABAQEke8uCAAAACnRSTlMAz49w7zBAEM+fn348ZAAAAEpJREFUCNdjgAEtARiLWUARxlRcwAUX5BKCCTIwLoAJMgiFwAVNF+AXZIELGiC0MxAlyL4QLsiRLGgAZXKxLYI5VGVhAYw5Ce4lAAm4ClNQIiITAAAAAElFTkSuQmCC",Y="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.37eaaf02.png",K="/forgotten-waters-pirate-sheet/assets/coin-re-roll.e5db71a5.png",Z="/forgotten-waters-pirate-sheet/assets/coin-star-sign.f0370ed1.png",H=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(t,e,i,o)=>{for(var n=o>1?void 0:o?ee(e,i):e,l=t.length-1,s;l>=0;l--)(s=t[l])&&(n=(o?s(e,i,n):s(n))||n);return o&&n&&H(e,i,n),n};const C=new WeakMap;var L,h,r,m,f,v,M,A,R;let T=(L=class extends V{constructor(){super(...arguments);u(this,v);u(this,A);u(this,h,b(this,A,R).call(this));u(this,r,b(this,v,M).call(this));u(this,m,void 0);u(this,f,!1)}async connectedCallback(){super.connectedCallback();const t=await j("state");if(g(this,r,S(S({},a(this,r)),t)),a(this,r).starSign){const e=new Image,i=a(this,h),o=()=>i.getContext("2d").drawImage(e,0,0);e.src=URL.createObjectURL(a(this,r).starSign),e.addEventListener("load",o,{once:!0})}this.requestUpdate()}getSheet(t){const e=a(this,r)[t===0?"sheet1":"sheet2"];return e&&!C.has(e)&&C.set(e,URL.createObjectURL(new Blob([e]))),C.get(e)}async selectSheet(t){const e=await W("image/*");if(!e)return;const i=await e.arrayBuffer(),o=t===0?"sheet1":"sheet2";a(this,r)[o]=i,this.persist()}async persist(){this.requestUpdate();const t=navigator.storage;!a(this,f)&&t&&!await t.persisted()&&(await t.persist(),g(this,f,!0)),await _("state",a(this,r))}updateField(t){const e=t.currentTarget,i=e.name;a(this,r)[i]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(g(this,h,b(this,A,R).call(this)),g(this,r,b(this,v,M).call(this)),this.persist())}coinStyle(t,e,i=a(this,r).coinSize){return`--x: ${t}; --y: ${e}; --size: ${i};`}coinDragStart(t){const e=t.currentTarget,{x:i,y:o}=e.coin,{pageX:n,pageY:l}=t,s=d=>{const{pageX:U,pageY:B}=d,E=U-n,P=B-l;e.style=this.coinStyle(i+E,o+P),e.coin.x=i+E,e.coin.y=o+P},c=()=>{this.persist(),document.body.removeEventListener("mousemove",s),document.body.removeEventListener("mouseup",c)};document.body.addEventListener("mousemove",s),document.body.addEventListener("mouseup",c)}updateCoinSize(t){const e=t.currentTarget.value;a(this,r).coinSize=e,this.persist()}setStat(t,e){a(this,r).skills[t]=e,this.persist()}changeFont(t){document.documentElement.style.setProperty("--font-family",t.currentTarget.value)}startDraw(t){const e=a(this,h),i=e.getContext("2d"),o=t.button===2,{x:n,y:l}=e.getBoundingClientRect(),s=d=>{i.beginPath(),i.fillStyle="firebrick",i.arc(d.x-n,d.y-l,o?9:5,0,2*Math.PI),o?(i.save(),i.clip(),i.clearRect(0,0,e.width,e.height),i.restore()):i.fill()},c=()=>{a(this,h).toBlob(d=>{a(this,r).starSign=d,this.persist()}),document.body.removeEventListener("mousemove",s),document.body.removeEventListener("mouseup",c)};document.body.addEventListener("mousemove",s),document.body.addEventListener("mouseup",c),s(t)}rollDie(){const t=10+Math.random()*12;let e=0;const i=()=>{e<t&&requestAnimationFrame(i),g(this,m,Math.floor(e)%12),e+=.2,this.requestUpdate()};i()}render(){var t,e,i,o,n,l;return p`
      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${a(this,m)===void 0?"":p`<span class="roll">Current roll: <span class="roll-value">${String(a(this,m)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${a(this,r).coinSize} @input=${this.updateCoinSize}></label>
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
        ${a(this,r).sheet1?p`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${(t=a(this,r).name)!=null?t:""} @input=${this.updateField}>
            </div>
            <div class="star-chart" @mousedown=${this.startDraw} @contextmenu=${s=>s.preventDefault()}>
              ${a(this,h)}
            </div>
            <div class="stats">
              ${x(Object.keys(a(this,r).skills),s=>x(w(8),c=>p`
                <button class="stat-value${c>0&&a(this,r).skills[s]>=c?" active":""}" @click=${()=>this.setStat(s,c)}></button>
              `))}
            </div>
            <img src=${this.getSheet(0)}>
          </section>
        `:""}
        ${a(this,r).sheet2?p`
          <section>
            <div class="sheet2 inputs">
              <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=a(this,r).blank1)!=null?e:""} @input=${this.updateField}>
              <input type="text" name="blank2" placeholder="Story blank 2" .value=${(i=a(this,r).blank2)!=null?i:""} @input=${this.updateField}>
              <input type="text" name="blank3" placeholder="Story blank 3" .value=${(o=a(this,r).blank3)!=null?o:""} @input=${this.updateField}>
              <input type="text" name="blank4" placeholder="Story blank 4" .value=${(n=a(this,r).blank4)!=null?n:""} @input=${this.updateField}>
              <input type="text" name="blank5" placeholder="Story blank 5" .value=${(l=a(this,r).blank5)!=null?l:""} @input=${this.updateField}>
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
            ${x(q,([s,c,d])=>p`<tr>
              <td>${s}</td>
              <td>${d}</td>
              <td>${c}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${x(a(this,r).coins,s=>p`
        <div class="coin ${s.type}" .style="${this.coinStyle(s.x,s.y)}" .coin=${s} @mousedown=${this.coinDragStart}></div>
      `)}
    `}},h=new WeakMap,r=new WeakMap,m=new WeakMap,f=new WeakMap,v=new WeakSet,M=function(){const t=90;return{sheet1:void 0,sheet2:void 0,starSign:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...w(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...w(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...w(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}},A=new WeakSet,R=function(){const t=document.createElement("canvas");return t.width=600,t.height=600,t},F(L,"styles",N`
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

    .star-chart {
      cursor: url('${y(G)}') 0 20, pointer;
      position: absolute;
      top: 17%;
      left: 59%;
      width: 31.5%;
      height: 37.5%;
      overflow: hidden;
      user-select: none;
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
      background-image: url('${y(Y)}');
      filter: brightness(1.6);
      transform: rotate(120deg);
    }
    .coin.re-roll {
      background-image: url('${y(K)}');
    }
    .coin.star-sign {
      background-image: url('${y(Z)}');
      transform: rotate(45deg);
    }
  `),L);T=te([J("x-root")],T);function w(t){return Array.from({length:t},(e,i)=>i)}
