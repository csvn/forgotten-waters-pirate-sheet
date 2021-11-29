/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const B=window.ShadowRoot&&(window.ShadyCSS===void 0||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol(),K=new Map;class Q{constructor(t,e){if(this._$cssResult$=!0,e!==k)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=K.get(this.cssText);return B&&t===void 0&&(K.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const yt=s=>new Q(typeof s=="string"?s:s+"",k),It=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,n,r)=>i+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+s[r+1],s[0]);return new Q(e,k)},Et=(s,t)=>{B?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),n=window.litNonce;n!==void 0&&i.setAttribute("nonce",n),i.textContent=e.cssText,s.appendChild(i)})},Y=B?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return yt(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var I;const q=window.trustedTypes,St=q?q.emptyScript:"",X=window.reactiveElementPolyfillSupport,L={toAttribute(s,t){switch(t){case Boolean:s=s?St:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},tt=(s,t)=>t!==s&&(t==t||s==s),D={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:tt};class S extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;(e=this.l)!==null&&e!==void 0||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const n=this._$Eh(i,e);n!==void 0&&(this._$Eu.set(n,i),t.push(n))}),t}static createProperty(t,e=D){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const r=this[t];this[e]=n,this.requestUpdate(t,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||D}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of i)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const n of i)e.unshift(Y(n))}else t!==void 0&&e.push(Y(t));return e}static _$Eh(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Em(),this.requestUpdate(),(t=this.constructor.l)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$Eg)!==null&&e!==void 0?e:this._$Eg=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$Eg)===null||e===void 0||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Et(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$Eg)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=D){var n,r;const o=this.constructor._$Eh(t,i);if(o!==void 0&&i.reflect===!0){const a=((r=(n=i.converter)===null||n===void 0?void 0:n.toAttribute)!==null&&r!==void 0?r:L.toAttribute)(e,i.type);this._$Ei=t,a==null?this.removeAttribute(o):this.setAttribute(o,a),this._$Ei=null}}_$AK(t,e){var i,n,r;const o=this.constructor,a=o._$Eu.get(t);if(a!==void 0&&this._$Ei!==a){const h=o.getPropertyOptions(a),l=h.converter,p=(r=(n=(i=l)===null||i===void 0?void 0:i.fromAttribute)!==null&&n!==void 0?n:typeof l=="function"?l:null)!==null&&r!==void 0?r:L.fromAttribute;this._$Ei=a,this[a]=p(e,h.type),this._$Ei=null}}requestUpdate(t,e,i){let n=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||tt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Ei!==t&&(this._$E_===void 0&&(this._$E_=new Map),this._$E_.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach((n,r)=>this[r]=n),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$Eg)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(i)):this._$EU()}catch(n){throw e=!1,this._$EU(),n}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$Eg)===null||e===void 0||e.forEach(i=>{var n;return(n=i.hostUpdated)===null||n===void 0?void 0:n.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){this._$E_!==void 0&&(this._$E_.forEach((e,i)=>this._$ES(i,this[i],e)),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}S.finalized=!0,S.elementProperties=new Map,S.elementStyles=[],S.shadowRootOptions={mode:"open"},X==null||X({ReactiveElement:S}),((I=globalThis.reactiveElementVersions)!==null&&I!==void 0?I:globalThis.reactiveElementVersions=[]).push("1.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var z;const b=globalThis.trustedTypes,et=b?b.createPolicy("lit-html",{createHTML:s=>s}):void 0,A=`lit$${(Math.random()+"").slice(9)}$`,j="?"+A,bt=`<${j}>`,w=document,U=(s="")=>w.createComment(s),T=s=>s===null||typeof s!="object"&&typeof s!="function",it=Array.isArray,st=s=>{var t;return it(s)||typeof((t=s)===null||t===void 0?void 0:t[Symbol.iterator])=="function"},P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,rt=/>/g,g=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,ot=/'/g,lt=/"/g,ht=/^(?:script|style|textarea)$/i,wt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),Lt=wt(1),m=Symbol.for("lit-noChange"),_=Symbol.for("lit-nothing"),at=new WeakMap,Ct=(s,t,e)=>{var i,n;const r=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let o=r._$litPart$;if(o===void 0){const a=(n=e==null?void 0:e.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=o=new x(t.insertBefore(U(),a),a,void 0,e!=null?e:{})}return o._$AI(s),o},C=w.createTreeWalker(w,129,null,!1),dt=(s,t)=>{const e=s.length-1,i=[];let n,r=t===2?"<svg>":"",o=P;for(let h=0;h<e;h++){const l=s[h];let p,c,d=-1,u=0;for(;u<l.length&&(o.lastIndex=u,c=o.exec(l),c!==null);)u=o.lastIndex,o===P?c[1]==="!--"?o=nt:c[1]!==void 0?o=rt:c[2]!==void 0?(ht.test(c[2])&&(n=RegExp("</"+c[2],"g")),o=g):c[3]!==void 0&&(o=g):o===g?c[0]===">"?(o=n!=null?n:P,d=-1):c[1]===void 0?d=-2:(d=o.lastIndex-c[2].length,p=c[1],o=c[3]===void 0?g:c[3]==='"'?lt:ot):o===lt||o===ot?o=g:o===nt||o===rt?o=P:(o=g,n=void 0);const $=o===g&&s[h+1].startsWith("/>")?" ":"";r+=o===P?l+bt:d>=0?(i.push(p),l.slice(0,d)+"$lit$"+l.slice(d)+A+$):l+A+(d===-2?(i.push(void 0),h):$)}const a=r+(s[e]||"<?>")+(t===2?"</svg>":"");return[et!==void 0?et.createHTML(a):a,i]};class H{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let r=0,o=0;const a=t.length-1,h=this.parts,[l,p]=dt(t,e);if(this.el=H.createElement(l,i),C.currentNode=this.el.content,e===2){const c=this.el.content,d=c.firstChild;d.remove(),c.append(...d.childNodes)}for(;(n=C.nextNode())!==null&&h.length<a;){if(n.nodeType===1){if(n.hasAttributes()){const c=[];for(const d of n.getAttributeNames())if(d.endsWith("$lit$")||d.startsWith(A)){const u=p[o++];if(c.push(d),u!==void 0){const $=n.getAttribute(u.toLowerCase()+"$lit$").split(A),v=/([.?@])?(.*)/.exec(u);h.push({type:1,index:r,name:v[2],strings:$,ctor:v[1]==="."?ut:v[1]==="?"?$t:v[1]==="@"?pt:R})}else h.push({type:6,index:r})}for(const d of c)n.removeAttribute(d)}if(ht.test(n.tagName)){const c=n.textContent.split(A),d=c.length-1;if(d>0){n.textContent=b?b.emptyScript:"";for(let u=0;u<d;u++)n.append(c[u],U()),C.nextNode(),h.push({type:2,index:++r});n.append(c[d],U())}}}else if(n.nodeType===8)if(n.data===j)h.push({type:2,index:r});else{let c=-1;for(;(c=n.data.indexOf(A,c+1))!==-1;)h.push({type:7,index:r}),c+=A.length-1}r++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function y(s,t,e=s,i){var n,r,o,a;if(t===m)return t;let h=i!==void 0?(n=e._$Cl)===null||n===void 0?void 0:n[i]:e._$Cu;const l=T(t)?void 0:t._$litDirective$;return(h==null?void 0:h.constructor)!==l&&((r=h==null?void 0:h._$AO)===null||r===void 0||r.call(h,!1),l===void 0?h=void 0:(h=new l(s),h._$AT(s,e,i)),i!==void 0?((o=(a=e)._$Cl)!==null&&o!==void 0?o:a._$Cl=[])[i]=h:e._$Cu=h),h!==void 0&&(t=y(s,h._$AS(s,t.values),h,i)),t}class ct{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:n}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:w).importNode(i,!0);C.currentNode=r;let o=C.nextNode(),a=0,h=0,l=n[0];for(;l!==void 0;){if(a===l.index){let p;l.type===2?p=new x(o,o.nextSibling,this,t):l.type===1?p=new l.ctor(o,l.name,l.strings,this,t):l.type===6&&(p=new vt(o,this,t)),this.v.push(p),l=n[++h]}a!==(l==null?void 0:l.index)&&(o=C.nextNode(),a++)}return r}m(t){let e=0;for(const i of this.v)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class x{constructor(t,e,i,n){var r;this.type=2,this._$AH=_,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cg=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=y(this,t,e),T(t)?t===_||t==null||t===""?(this._$AH!==_&&this._$AR(),this._$AH=_):t!==this._$AH&&t!==m&&this.$(t):t._$litType$!==void 0?this.T(t):t.nodeType!==void 0?this.S(t):st(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==_&&T(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=H.createElement(n.h,this.options)),n);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.m(i);else{const o=new ct(r,this),a=o.p(this.options);o.m(i),this.S(a),this._$AH=o}}_$AC(t){let e=at.get(t.strings);return e===void 0&&at.set(t.strings,e=new H(t)),e}M(t){it(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const r of t)n===e.length?e.push(i=new x(this.A(U()),this.A(U()),this,this.options)):i=e[n],i._$AI(r),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var e;this._$AM===void 0&&(this._$Cg=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class R{constructor(t,e,i,n,r){this.type=1,this._$AH=_,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=_}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const r=this.strings;let o=!1;if(r===void 0)t=y(this,t,e,0),o=!T(t)||t!==this._$AH&&t!==m,o&&(this._$AH=t);else{const a=t;let h,l;for(t=r[0],h=0;h<r.length-1;h++)l=y(this,a[i+h],e,h),l===m&&(l=this._$AH[h]),o||(o=!T(l)||l!==this._$AH[h]),l===_?t=_:t!==_&&(t+=(l!=null?l:"")+r[h+1]),this._$AH[h]=l}o&&!n&&this.k(t)}k(t){t===_?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t!=null?t:"")}}class ut extends R{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===_?void 0:t}}const xt=b?b.emptyScript:"";class $t extends R{constructor(){super(...arguments),this.type=4}k(t){t&&t!==_?this.element.setAttribute(this.name,xt):this.element.removeAttribute(this.name)}}class pt extends R{constructor(t,e,i,n,r){super(t,e,i,n,r),this.type=5}_$AI(t,e=this){var i;if((t=(i=y(this,t,e,0))!==null&&i!==void 0?i:_)===m)return;const n=this._$AH,r=t===_&&n!==_||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==_&&(n===_||r);r&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class vt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){y(this,t)}}const Ut={P:"$lit$",V:A,L:j,I:1,N:dt,R:ct,D:st,j:y,H:x,O:R,F:$t,B:pt,W:ut,Z:vt},_t=window.litHtmlPolyfillSupport;_t==null||_t(H,x),((z=globalThis.litHtmlVersions)!==null&&z!==void 0?z:globalThis.litHtmlVersions=[]).push("2.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var V,W;class N extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=Ct(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Dt)===null||t===void 0||t.setConnected(!1)}render(){return m}}N.finalized=!0,N._$litElement$=!0,(V=globalThis.litElementHydrateSupport)===null||V===void 0||V.call(globalThis,{LitElement:N});const ft=globalThis.litElementPolyfillSupport;ft==null||ft({LitElement:N});((W=globalThis.litElementVersions)!==null&&W!==void 0?W:globalThis.litElementVersions=[]).push("3.0.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt=s=>t=>typeof t=="function"?((e,i)=>(window.customElements.define(e,i),i))(s,t):((e,i)=>{const{kind:n,elements:r}=i;return{kind:n,elements:r,finisher(o){window.customElements.define(e,o)}}})(s,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Tt={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Pt=s=>(...t)=>({_$litDirective$:s,values:t});class Ht{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:Rt}=Ut,At=()=>document.createComment(""),M=(s,t,e)=>{var i;const n=s._$AA.parentNode,r=t===void 0?s._$AB:t._$AA;if(e===void 0){const o=n.insertBefore(At(),r),a=n.insertBefore(At(),r);e=new Rt(o,a,s,s.options)}else{const o=e._$AB.nextSibling,a=e._$AM,h=a!==s;if(h){let l;(i=e._$AQ)===null||i===void 0||i.call(e,s),e._$AM=s,e._$AP!==void 0&&(l=s._$AU)!==a._$AU&&e._$AP(l)}if(o!==r||h){let l=e._$AA;for(;l!==o;){const p=l.nextSibling;n.insertBefore(l,r),l=p}}}return e},E=(s,t,e=s)=>(s._$AI(t,e),s),Mt={},Nt=(s,t=Mt)=>s._$AH=t,Ot=s=>s._$AH,Z=s=>{var t;(t=s._$AP)===null||t===void 0||t.call(s,!1,!0);let e=s._$AA;const i=s._$AB.nextSibling;for(;e!==i;){const n=e.nextSibling;e.remove(),e=n}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const gt=(s,t,e)=>{const i=new Map;for(let n=t;n<=e;n++)i.set(s[n],n);return i},zt=Pt(class extends Ht{constructor(s){if(super(s),s.type!==Tt.CHILD)throw Error("repeat() can only be used in text expressions")}dt(s,t,e){let i;e===void 0?e=t:t!==void 0&&(i=t);const n=[],r=[];let o=0;for(const a of s)n[o]=i?i(a,o):o,r[o]=e(a,o),o++;return{values:r,keys:n}}render(s,t,e){return this.dt(s,t,e).values}update(s,[t,e,i]){var n;const r=Ot(s),{values:o,keys:a}=this.dt(t,e,i);if(!Array.isArray(r))return this.ct=a,o;const h=(n=this.ct)!==null&&n!==void 0?n:this.ct=[],l=[];let p,c,d=0,u=r.length-1,$=0,v=o.length-1;for(;d<=u&&$<=v;)if(r[d]===null)d++;else if(r[u]===null)u--;else if(h[d]===a[$])l[$]=E(r[d],o[$]),d++,$++;else if(h[u]===a[v])l[v]=E(r[u],o[v]),u--,v--;else if(h[d]===a[v])l[v]=E(r[d],o[v]),M(s,l[v+1],r[d]),d++,v--;else if(h[u]===a[$])l[$]=E(r[u],o[$]),M(s,r[d],r[u]),u--,$++;else if(p===void 0&&(p=gt(a,$,v),c=gt(h,d,u)),p.has(h[d]))if(p.has(h[u])){const f=c.get(a[$]),O=f!==void 0?r[f]:null;if(O===null){const J=M(s,r[d]);E(J,o[$]),l[$]=J}else l[$]=E(O,o[$]),M(s,r[d],O),r[f]=null;$++}else Z(r[u]),u--;else Z(r[d]),d++;for(;$<=v;){const f=M(s,l[v+1]);E(f,o[$]),l[$++]=f}for(;d<=u;){const f=r[d++];f!==null&&Z(f)}return this.ct=a,Nt(s,l),m}});function Bt(){var s=!navigator.userAgentData&&/Safari\//.test(navigator.userAgent)&&!/Chrom(e|ium)\//.test(navigator.userAgent);if(!s||!indexedDB.databases)return Promise.resolve();var t;return new Promise(function(e){var i=function(){return indexedDB.databases().finally(e)};t=setInterval(i,100),i()}).finally(function(){return clearInterval(t)})}function F(s){return new Promise((t,e)=>{s.oncomplete=s.onsuccess=()=>t(s.result),s.onabort=s.onerror=()=>e(s.error)})}function kt(s,t){const e=Bt().then(()=>{const i=indexedDB.open(s);return i.onupgradeneeded=()=>i.result.createObjectStore(t),F(i)});return(i,n)=>e.then(r=>n(r.transaction(t,i).objectStore(t)))}let G;function mt(){return G||(G=kt("keyval-store","keyval")),G}function jt(s,t=mt()){return t("readonly",e=>F(e.get(s)))}function Vt(s,t,e=mt()){return e("readwrite",i=>(i.put(t,s),F(i.transaction)))}export{Vt as a,zt as c,jt as g,Dt as n,yt as o,Lt as p,It as r,N as s};