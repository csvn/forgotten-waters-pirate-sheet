var R=Object.defineProperty;var z=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(t,e,i)=>e in t?R(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i,S=(t,e)=>{for(var i in e||(e={}))F.call(e,i)&&k(t,i,e[i]);if(z)for(var i of z(e))D.call(e,i)&&k(t,i,e[i]);return t};var Q=(t,e,i)=>(k(t,typeof e!="symbol"?e+"":e,i),i),E=(t,e,i)=>{if(!e.has(t))throw TypeError("Cannot "+i)};var a=(t,e,i)=>(E(t,e,"read from private field"),i?i.call(t):e.get(t)),u=(t,e,i)=>{if(e.has(t))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(t):e.set(t,i)},g=(t,e,i,o)=>(E(t,e,"write to private field"),o?o.call(t,i):e.set(t,i),i);var m=(t,e,i)=>(E(t,e,"access private method"),i);import{s as U,r as W,o as A,g as X,a as Y,p,c as x,n as G}from"./vendor.2c1be18c.js";const J=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function o(r){if(r.ep)return;r.ep=!0;const l=i(r);fetch(r.href,l)}};J();async function O(t){var i;const e=document.createElement("input");return e.type="file",e.accept=t,e.multiple=!1,e.hidden=!0,e.click(),await K(e,"change"),(i=e.files)==null?void 0:i[0]}function K(t,e){return new Promise(i=>{t.addEventListener(e,o=>i(o),{once:!0})})}var Z=[["Adam","The All-Seeing Pirate","Owen Three-eyes"],["Christian","The Lovesick Pirate","Vince 'Snaggletooth' Winters"],["Elias","The Orphan Pirate","Furryback Bob"],["Erik","The Cannonwright Pirate","Bastian 'Notoe' Shortfuse"],["Johan","The Alchemist Pirate","Seaman 'Salty Whiskey' Willy"],["Simon","The Gold Coat Pirate","Ivar McDuck"],["Tim","The Culinary Pirate","Alistair McFeast"]],H="data:image/webp;base64,UklGRpwAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSEsAAAABYE3bVq2FEEoIIR2TgxDSRglhf+7uAyAiFKZtwyQduoXYtvKWaEXL4GysTgbkbNTzZNf0Z+bGcGH4hYeVjVYpGcxyMn2sQcpucgEAVlA4ICoAAACwAgCdASoUABQAPiUQh0KhoQoCAAwBIlpAAA9o6AAA/v7urxVNvyYAAAA=",N="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.2611b957.webp",q="/forgotten-waters-pirate-sheet/assets/coin-re-roll.2f4ae4b8.webp",$="data:image/webp;base64,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",_=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,te=(t,e,i,o)=>{for(var r=o>1?void 0:o?ee(e,i):e,l=t.length-1,s;l>=0;l--)(s=t[l])&&(r=(o?s(e,i,r):s(r))||r);return o&&r&&_(e,i,r),r};const P=new WeakMap;var T,h,n,b,f,v,V,y,j;let B=(T=class extends U{constructor(){super(...arguments);u(this,v);u(this,y);u(this,h,m(this,y,j).call(this));u(this,n,m(this,v,V).call(this));u(this,b,void 0);u(this,f,!1)}async connectedCallback(){super.connectedCallback();const t=await X("state");if(g(this,n,S(S({},a(this,n)),t)),a(this,n).starSign){const e=new Image,i=a(this,h),o=()=>i.getContext("2d").drawImage(e,0,0);e.src=URL.createObjectURL(a(this,n).starSign),e.addEventListener("load",o,{once:!0})}this.requestUpdate()}getSheet(t){const e=a(this,n)[t===0?"sheet1":"sheet2"];return e&&!P.has(e)&&P.set(e,URL.createObjectURL(new Blob([e]))),P.get(e)}async selectSheet(t){const e=await O("image/*");if(!e)return;const i=await e.arrayBuffer(),o=t===0?"sheet1":"sheet2";a(this,n)[o]=i,this.persist()}async persist(){this.requestUpdate();const t=navigator.storage;!a(this,f)&&t&&!await t.persisted()&&(await t.persist(),g(this,f,!0)),await Y("state",a(this,n))}updateField(t){const e=t.currentTarget,i=e.name;a(this,n)[i]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(g(this,h,m(this,y,j).call(this)),g(this,n,m(this,v,V).call(this)),this.persist())}coinStyle(t,e,i=a(this,n).coinSize){return`--x: ${t}; --y: ${e}; --size: ${i};`}coinDragStart(t){const e=t.currentTarget,{x:i,y:o}=e.coin,{pageX:r,pageY:l}=t,s=d=>{const{pageX:I,pageY:L}=d,M=I-r,C=L-l;e.style=this.coinStyle(i+M,o+C),e.coin.x=i+M,e.coin.y=o+C},c=()=>{this.persist(),document.body.removeEventListener("mousemove",s),document.body.removeEventListener("mouseup",c)};document.body.addEventListener("mousemove",s),document.body.addEventListener("mouseup",c)}updateCoinSize(t){const e=t.currentTarget.value;a(this,n).coinSize=e,this.persist()}setStat(t,e){a(this,n).skills[t]=e,this.persist()}changeFont(t){document.documentElement.style.setProperty("--font-family",t.currentTarget.value)}startDraw(t){const e=a(this,h),i=e.getContext("2d"),o=t.button===2,{x:r,y:l}=e.getBoundingClientRect(),s=d=>{i.beginPath(),i.fillStyle="firebrick",i.arc(d.x-r,d.y-l,o?9:5,0,2*Math.PI),o?(i.save(),i.clip(),i.clearRect(0,0,e.width,e.height),i.restore()):i.fill()},c=()=>{a(this,h).toBlob(d=>{a(this,n).starSign=d,this.persist()}),document.body.removeEventListener("mousemove",s),document.body.removeEventListener("mouseup",c)};document.body.addEventListener("mousemove",s),document.body.addEventListener("mouseup",c),s(t)}rollDie(){const t=10+Math.random()*12;let e=0;const i=()=>{e<t&&requestAnimationFrame(i),g(this,b,Math.floor(e)%12),e+=.2,this.requestUpdate()};i()}render(){var t,e,i,o,r,l;return p`
      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${a(this,b)===void 0?"":p`<span class="roll">Current roll: <span class="roll-value">${String(a(this,b)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${a(this,n).coinSize} @input=${this.updateCoinSize}></label>
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
        ${a(this,n).sheet1?p`
          <section>
            <div class="sheet1 inputs">
              <input type="text" name="name" placeholder="Pirate name" .value=${(t=a(this,n).name)!=null?t:""} @input=${this.updateField}>
            </div>
            <div class="star-chart" @mousedown=${this.startDraw} @contextmenu=${s=>s.preventDefault()}>
              ${a(this,h)}
            </div>
            <div class="stats">
              ${x(Object.keys(a(this,n).skills),s=>x(w(8),c=>p`
                <button class="stat-value${c>0&&a(this,n).skills[s]>=c?" active":""}" @click=${()=>this.setStat(s,c)}></button>
              `))}
            </div>
            <img src=${this.getSheet(0)}>
          </section>
        `:""}
        ${a(this,n).sheet2?p`
          <section>
            <div class="sheet2 inputs">
              <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=a(this,n).blank1)!=null?e:""} @input=${this.updateField}>
              <input type="text" name="blank2" placeholder="Story blank 2" .value=${(i=a(this,n).blank2)!=null?i:""} @input=${this.updateField}>
              <input type="text" name="blank3" placeholder="Story blank 3" .value=${(o=a(this,n).blank3)!=null?o:""} @input=${this.updateField}>
              <input type="text" name="blank4" placeholder="Story blank 4" .value=${(r=a(this,n).blank4)!=null?r:""} @input=${this.updateField}>
              <input type="text" name="blank5" placeholder="Story blank 5" .value=${(l=a(this,n).blank5)!=null?l:""} @input=${this.updateField}>
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
            ${x(Z,([s,c,d])=>p`<tr>
              <td>${s}</td>
              <td>${d}</td>
              <td>${c}</td>
            </tr>`)}
          </tbody>
        </table>
      </aside>


      ${x(a(this,n).coins,s=>p`
        <div class="coin ${s.type}" .style="${this.coinStyle(s.x,s.y)}" .coin=${s} @mousedown=${this.coinDragStart}></div>
      `)}
    `}},h=new WeakMap,n=new WeakMap,b=new WeakMap,f=new WeakMap,v=new WeakSet,V=function(){const t=90;return{sheet1:void 0,sheet2:void 0,starSign:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...w(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...w(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...w(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}},y=new WeakSet,j=function(){const t=document.createElement("canvas");return t.width=600,t.height=600,t},Q(T,"styles",W`
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
      cursor: url('${A(H)}') 0 20, pointer;
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
      background-image: url('${A(N)}');
      filter: brightness(1.6);
      transform: rotate(30deg);
    }
    .coin.re-roll {
      background-image: url('${A(q)}');
    }
    .coin.star-sign {
      background-image: url('${A($)}');
      transform: rotate(45deg);
    }
  `),T);B=te([G("x-root")],B);function w(t){return Array.from({length:t},(e,i)=>i)}
