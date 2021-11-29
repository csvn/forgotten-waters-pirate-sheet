var L=Object.defineProperty;var v=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var k=(i,t,e)=>t in i?L(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,p=(i,t)=>{for(var e in t||(t={}))F.call(t,e)&&k(i,e,t[e]);if(v)for(var e of v(t))C.call(t,e)&&k(i,e,t[e]);return i};var $=(i,t,e)=>{if(!t.has(i))throw TypeError("Cannot "+e)};var r=(i,t,e)=>($(i,t,"read from private field"),e?e.call(i):t.get(i)),f=(i,t,e)=>{if(t.has(i))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(i):t.set(i,e)},h=(i,t,e,s)=>($(i,t,"write to private field"),s?s.call(i,e):t.set(i,e),e);import{s as E,g as P,a as U,p as d,c as q}from"./vendor.3f3aa34a.js";const O=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}};O();const m=new WeakMap;var o,u;class A extends E{constructor(){super(...arguments);f(this,o,p({},this.defaultCoins()));f(this,u,void 0)}async connectedCallback(){super.connectedCallback();const t=await P("state");h(this,o,p({},t)),this.requestUpdate()}getSheet(t){const e=r(this,o)[t===0?"sheet1":"sheet2"];return m.has(e)||m.set(e,URL.createObjectURL(new Blob([e]))),m.get(e)}async selectSheet(t){const e=await D("image/*");if(!e)return;const s=await e.arrayBuffer(),n=t===0?"sheet1":"sheet2";r(this,o)[n]=s,this.persist()}async persist(){this.requestUpdate(),await U("state",r(this,o))}updateField(t){const e=t.currentTarget,s=e.name;r(this,o)[s]=e.value,this.persist()}clear(){!confirm("Are you sure you want to remove all locally saved data?")||(h(this,o,p({},this.defaultCoins())),this.persist())}defaultCoins(){const t=90;return{coinSize:80,coins:[...g(10).map(e=>({id:e,type:"bad-luck",x:30+25*e,y:t})),...g(10).map(e=>({id:e,type:"re-roll",x:350+25*e,y:t})),...g(5).map(e=>({id:e,type:"star-sign",x:670+25*e,y:t}))]}}coinStyle(t,e,s=r(this,o).coinSize){return`--x: ${t}; --y: ${e}; --size: ${s};`}coinDragStart(t){const e=t.currentTarget,{x:s,y:n}=e.coin,{pageX:a,pageY:l}=t,c=S=>{const{pageX:w,pageY:z}=S,y=w-a,x=z-l;e.style=this.coinStyle(s+y,n+x),e.coin.x=s+y,e.coin.y=n+x},b=()=>{this.persist(),document.body.removeEventListener("mousemove",c),document.body.removeEventListener("mouseup",b)};document.body.addEventListener("mousemove",c),document.body.addEventListener("mouseup",b)}updateCoinSize(t){const e=t.currentTarget.value;r(this,o).coinSize=e,this.persist()}rollDie(){const t=10+Math.random()*12;let e=0;const s=()=>{e<t&&requestAnimationFrame(s),h(this,u,Math.floor(e)%12),e+=.2,this.requestUpdate()};s()}render(){var t,e,s,n,a,l;return d`
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

        button {
          cursor: pointer;
          color: #fff;
          background-color: #17368d;
          border: 0;
          border-radius: 5px;
          height: 36px;
          padding: 0 16px;
          transition: all .25s;
        }
        button:hover {
          background-color: #37469d;
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
          background-image: url('/images/coin-bad-luck.png');
        }
        .coin.re-roll {
          background-image: url('/images/coin-re-roll.png');
        }
        .coin.star-sign {
          background-image: url('/images/coin-star-sign.png');
        }
      </style>

      <header>
        <h1>Forgotten Waters - Pirate sheet</h1>
        ${r(this,u)===void 0?"":d`<span class="roll">Current roll: <span class="roll-value">${String(r(this,u)+1).padStart(2," ")}</span></span>`}
        <button @click=${this.rollDie}>Roll die (1-12)</button>
        <button @click=${()=>this.selectSheet(0)}>Set Pirate sheet 1</button>
        <button @click=${()=>this.selectSheet(1)}>Set Pirate sheet 2</button>
        <button @click=${this.clear}>Clear</button>
        <label>Coin size:<input type="number" .value=${r(this,o).coinSize} @input=${this.updateCoinSize}></label>
      </header>
      ${r(this,o).sheet1?d`
        <section>
          <div class="sheet1 inputs">
            <input type="text" name="name" placeholder="Pirate name" .value=${(t=r(this,o).name)!=null?t:""} @input=${this.updateField}>
          </div>
          <img src=${this.getSheet(0)}>
        </section>
      `:""}
      ${r(this,o).sheet2?d`
        <section>
          <div class="sheet2 inputs">
            <input type="text" name="blank1" placeholder="Story blank 1" .value=${(e=r(this,o).blank1)!=null?e:""} @input=${this.updateField}>
            <input type="text" name="blank2" placeholder="Story blank 2" .value=${(s=r(this,o).blank2)!=null?s:""} @input=${this.updateField}>
            <input type="text" name="blank3" placeholder="Story blank 3" .value=${(n=r(this,o).blank3)!=null?n:""} @input=${this.updateField}>
            <input type="text" name="blank4" placeholder="Story blank 4" .value=${(a=r(this,o).blank4)!=null?a:""} @input=${this.updateField}>
            <input type="text" name="blank5" placeholder="Story blank 5" .value=${(l=r(this,o).blank5)!=null?l:""} @input=${this.updateField}>
          </div>
          <img src=${this.getSheet(1)}>
        </section>
      `:""}

      ${q(r(this,o).coins,c=>d`
        <div class="coin ${c.type}" .style="${this.coinStyle(c.x,c.y)}" .coin=${c} @mousedown=${this.coinDragStart}></div>
      `)}
    `}}o=new WeakMap,u=new WeakMap;customElements.define("x-root",A);function g(i){return Array.from({length:i},(t,e)=>e)}async function D(i){var e;const t=document.createElement("input");return t.type="file",t.accept=i,t.multiple=!1,t.hidden=!0,t.click(),await M(t,"change"),(e=t.files)==null?void 0:e[0]}function M(i,t){return new Promise(e=>{i.addEventListener(t,s=>e(s),{once:!0})})}
