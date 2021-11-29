var P=Object.defineProperty;var w=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable;var z=(i,t,e)=>t in i?P(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,m=(i,t)=>{for(var e in t||(t={}))O.call(t,e)&&z(i,e,t[e]);if(w)for(var e of w(t))U.call(t,e)&&z(i,e,t[e]);return i};var y=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var a=(i,t,e)=>(y(i,t,"read from private field"),e?e.call(i):t.get(i)),b=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},f=(i,t,e,r)=>(y(i,t,"write to private field"),r?r.call(i,e):t.set(i,e),e);var v=(i,t,e)=>(y(i,t,"access private method"),e);import{s as q,g as A,a as D,p as d,c as k}from"./vendor.3f3aa34a.js";const M=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function e(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerpolicy&&(o.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?o.credentials="include":n.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(n){if(n.ep)return;n.ep=!0;const o=e(n);fetch(n.href,o)}};M();var R="/forgotten-waters-pirate-sheet/assets/coin-bad-luck.37eaaf02.png",T="/forgotten-waters-pirate-sheet/assets/coin-re-roll.e5db71a5.png",j="/forgotten-waters-pirate-sheet/assets/coin-star-sign.f0370ed1.png";const x=new WeakMap;var s,p,h,L;class N extends q{constructor(){super(...arguments);b(this,h);b(this,s,v(this,h,L).call(this));b(this,p,void 0)}async connectedCallback(){super.connectedCallback();const t=await A("state");f(this,s,m(m({},a(this,s)),t)),this.requestUpdate()}getSheet(t){const e=a(this,s)[t===0?"sheet1":"sheet2"];return x.has(e)||x.set(e,URL.createObjectURL(new Blob([e]))),x.get(e)}async selectSheet(t){const e=await X("image/*");if(!e)return;const r=await e.arrayBuffer(),n=t===0?"sheet1":"sheet2";a(this,s)[n]=r,this.persist()}async persist(){this.requestUpdate(),await D("state",a(this,s))}updateField(t){const e=t.currentTarget,r=e.name;a(this,s)[r]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(f(this,s,v(this,h,L).call(this)),this.persist())}coinStyle(t,e,r=a(this,s).coinSize){return`--x: ${t}; --y: ${e}; --size: ${r};`}coinDragStart(t){const e=t.currentTarget,{x:r,y:n}=e.coin,{pageX:o,pageY:c}=t,l=F=>{const{pageX:C,pageY:E}=F,$=C-o,S=E-c;e.style=this.coinStyle(r+$,n+S),e.coin.x=r+$,e.coin.y=n+S},u=()=>{this.persist(),document.body.removeEventListener("mousemove",l),document.body.removeEventListener("mouseup",u)};document.body.addEventListener("mousemove",l),document.body.addEventListener("mouseup",u)}updateCoinSize(t){const e=t.currentTarget.value;a(this,s).coinSize=e,this.persist()}setStat(t,e){a(this,s).skills[t]=e,this.persist()}rollDie(){const t=10+Math.random()*12;let e=0;const r=()=>{e<t&&requestAnimationFrame(r),f(this,p,Math.floor(e)%12),e+=.2,this.requestUpdate()};r()}render(){var t,e,r,n,o,c;return d`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 30px;
        }

        header {
          display: flex;
          align-items: center;
          gap: 20px;
          padding-bottom: 100px;
        }

        header h1 {
          flex: 1;
          margin: 0;
        }

        header button {
          cursor: pointer;
          color: #fff;
          background-color: #17368d;
          border: 0;
          border-radius: 5px;
          height: 36px;
          padding: 0 16px;
          transition: all .25s;
        }
        header button:hover {
          background-color: #37469d;
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
          border: dashed 7px rgb(237 177 40 / 40%);
          flex: 1;
          font-size: 30px;
          padding: 0 20px;
        }
        .inputs input:focus-visible {
          border: dashed 7px rgb(237 177 40 / 80%);
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
          border-color: rgb(237 177 40 / 90%);
        }
        .stat-value.active {
          background-color: rgb(237 177 40 / 40%);
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
          background-image: url('${R}');
        }
        .coin.re-roll {
          background-image: url('${T}');
        }
        .coin.star-sign {
          background-image: url('${j}');
        }
      </style>

      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${a(this,p)===void 0?"":d`<span class="roll">Current roll: <span class="roll-value">${String(a(this,p)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${a(this,s).coinSize} @input=${this.updateCoinSize}></label>
      </header>
      ${a(this,s).sheet1?d`
        <section>
          <div class="sheet1 inputs">
            <input type="text" name="name" placeholder="Pirate name" .value=${(t=a(this,s).name)!=null?t:""} @input=${this.updateField}>
          </div>
          <div class="stats">
            ${k(Object.keys(a(this,s).skills),l=>k(g(8),u=>d`
              <button class="stat-value${u>0&&a(this,s).skills[l]>=u?" active":""}" @click=${()=>this.setStat(l,u)}></button>
            `))}
          </div>
          <img src=${this.getSheet(0)}>
        </section>
      `:""}
      ${a(this,s).sheet2?d`
        <section>
          <div class="sheet2 inputs">
            <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=a(this,s).blank1)!=null?e:""} @input=${this.updateField}>
            <input type="text" name="blank2" placeholder="Story blank 2" .value=${(r=a(this,s).blank2)!=null?r:""} @input=${this.updateField}>
            <input type="text" name="blank3" placeholder="Story blank 3" .value=${(n=a(this,s).blank3)!=null?n:""} @input=${this.updateField}>
            <input type="text" name="blank4" placeholder="Story blank 4" .value=${(o=a(this,s).blank4)!=null?o:""} @input=${this.updateField}>
            <input type="text" name="blank5" placeholder="Story blank 5" .value=${(c=a(this,s).blank5)!=null?c:""} @input=${this.updateField}>
          </div>
          <img src=${this.getSheet(1)}>
        </section>
      `:""}


      ${k(a(this,s).coins,l=>d`
        <div class="coin ${l.type}" .style="${this.coinStyle(l.x,l.y)}" .coin=${l} @mousedown=${this.coinDragStart}></div>
      `)}
    `}}s=new WeakMap,p=new WeakMap,h=new WeakSet,L=function(){const t=90;return{sheet1:void 0,sheet2:void 0,name:"",blank1:"",blank2:"",blank3:"",blank4:"",blank5:"",coinSize:80,skills:{exploration:0,brawn:0,hunting:0,aim:0,swagger:0,navigation:0},coins:[...g(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...g(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...g(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}};customElements.define("x-root",N);function g(i){return Array.from({length:i},(t,e)=>e)}async function X(i){var e;const t=document.createElement("input");return t.type="file",t.accept=i,t.multiple=!1,t.hidden=!0,t.click(),await Y(t,"change"),(e=t.files)==null?void 0:e[0]}function Y(i,t){return new Promise(e=>{i.addEventListener(t,r=>e(r),{once:!0})})}
