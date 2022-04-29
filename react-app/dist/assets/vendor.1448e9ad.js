var Xe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A={exports:{}},D={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Ul=Object.getOwnPropertySymbols,wh=Object.prototype.hasOwnProperty,_h=Object.prototype.propertyIsEnumerable;function Eh(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function Sh(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(o){return t[o]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(o){i[o]=o}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var jl=Sh()?Object.assign:function(e,t){for(var n,r=Eh(e),i,o=1;o<arguments.length;o++){n=Object(arguments[o]);for(var s in n)wh.call(n,s)&&(r[s]=n[s]);if(Ul){i=Ul(n);for(var a=0;a<i.length;a++)_h.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zo=jl,on=60103,Fl=60106;D.Fragment=60107;D.StrictMode=60108;D.Profiler=60114;var $l=60109,zl=60110,Bl=60112;D.Suspense=60113;var Hl=60115,Vl=60116;if(typeof Symbol=="function"&&Symbol.for){var Se=Symbol.for;on=Se("react.element"),Fl=Se("react.portal"),D.Fragment=Se("react.fragment"),D.StrictMode=Se("react.strict_mode"),D.Profiler=Se("react.profiler"),$l=Se("react.provider"),zl=Se("react.context"),Bl=Se("react.forward_ref"),D.Suspense=Se("react.suspense"),Hl=Se("react.memo"),Vl=Se("react.lazy")}var Wl=typeof Symbol=="function"&&Symbol.iterator;function kh(e){return e===null||typeof e!="object"?null:(e=Wl&&e[Wl]||e["@@iterator"],typeof e=="function"?e:null)}function qn(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ql={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Gl={};function sn(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||ql}sn.prototype.isReactComponent={};sn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(qn(85));this.updater.enqueueSetState(this,e,t,"setState")};sn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Kl(){}Kl.prototype=sn.prototype;function Bo(e,t,n){this.props=e,this.context=t,this.refs=Gl,this.updater=n||ql}var Ho=Bo.prototype=new Kl;Ho.constructor=Bo;zo(Ho,sn.prototype);Ho.isPureReactComponent=!0;var Vo={current:null},Yl=Object.prototype.hasOwnProperty,Ql={key:!0,ref:!0,__self:!0,__source:!0};function Xl(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)Yl.call(t,r)&&!Ql.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:on,type:e,key:o,ref:s,props:i,_owner:Vo.current}}function Ih(e,t){return{$$typeof:on,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wo(e){return typeof e=="object"&&e!==null&&e.$$typeof===on}function Th(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Jl=/\/+/g;function qo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Th(""+e.key):t.toString(36)}function li(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case on:case Fl:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+qo(s,0):r,Array.isArray(i)?(n="",e!=null&&(n=e.replace(Jl,"$&/")+"/"),li(i,t,n,"",function(u){return u})):i!=null&&(Wo(i)&&(i=Ih(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Jl,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Array.isArray(e))for(var a=0;a<e.length;a++){o=e[a];var l=r+qo(o,a);s+=li(o,t,n,l,i)}else if(l=kh(e),typeof l=="function")for(e=l.call(e),a=0;!(o=e.next()).done;)o=o.value,l=r+qo(o,a++),s+=li(o,t,n,l,i);else if(o==="object")throw t=""+e,Error(qn(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t));return s}function ui(e,t,n){if(e==null)return e;var r=[],i=0;return li(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Ch(e){if(e._status===-1){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(n){e._status===0&&(n=n.default,e._status=1,e._result=n)},function(n){e._status===0&&(e._status=2,e._result=n)})}if(e._status===1)return e._result;throw e._result}var Zl={current:null};function Ue(){var e=Zl.current;if(e===null)throw Error(qn(321));return e}var Oh={ReactCurrentDispatcher:Zl,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Vo,IsSomeRendererActing:{current:!1},assign:zo};D.Children={map:ui,forEach:function(e,t,n){ui(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ui(e,function(){t++}),t},toArray:function(e){return ui(e,function(t){return t})||[]},only:function(e){if(!Wo(e))throw Error(qn(143));return e}};D.Component=sn;D.PureComponent=Bo;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Oh;D.cloneElement=function(e,t,n){if(e==null)throw Error(qn(267,e));var r=zo({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=Vo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(l in t)Yl.call(t,l)&&!Ql.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&a!==void 0?a[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:on,type:e.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(e,t){return t===void 0&&(t=null),e={$$typeof:zl,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:$l,_context:e},e.Consumer=e};D.createElement=Xl;D.createFactory=function(e){var t=Xl.bind(null,e);return t.type=e,t};D.createRef=function(){return{current:null}};D.forwardRef=function(e){return{$$typeof:Bl,render:e}};D.isValidElement=Wo;D.lazy=function(e){return{$$typeof:Vl,_payload:{_status:-1,_result:e},_init:Ch}};D.memo=function(e,t){return{$$typeof:Hl,type:e,compare:t===void 0?null:t}};D.useCallback=function(e,t){return Ue().useCallback(e,t)};D.useContext=function(e,t){return Ue().useContext(e,t)};D.useDebugValue=function(){};D.useEffect=function(e,t){return Ue().useEffect(e,t)};D.useImperativeHandle=function(e,t,n){return Ue().useImperativeHandle(e,t,n)};D.useLayoutEffect=function(e,t){return Ue().useLayoutEffect(e,t)};D.useMemo=function(e,t){return Ue().useMemo(e,t)};D.useReducer=function(e,t,n){return Ue().useReducer(e,t,n)};D.useRef=function(e){return Ue().useRef(e)};D.useState=function(e){return Ue().useState(e)};D.version="17.0.2";A.exports=D;var xt=A.exports,eu={exports:{}},me={},tu={exports:{}},nu={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){var t,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();e.unstable_now=function(){return s.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var l=null,u=null,p=function(){if(l!==null)try{var k=e.unstable_now();l(!0,k),l=null}catch(N){throw setTimeout(p,0),N}};t=function(k){l!==null?setTimeout(t,0,k):(l=k,setTimeout(p,0))},n=function(k,N){u=setTimeout(k,N)},r=function(){clearTimeout(u)},e.unstable_shouldYield=function(){return!1},i=e.unstable_forceFrameRate=function(){}}else{var y=window.setTimeout,h=window.clearTimeout;if(typeof console!="undefined"){var w=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof w!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var S=!1,E=null,f=-1,c=5,d=0;e.unstable_shouldYield=function(){return e.unstable_now()>=d},i=function(){},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):c=0<k?Math.floor(1e3/k):5};var m=new MessageChannel,g=m.port2;m.port1.onmessage=function(){if(E!==null){var k=e.unstable_now();d=k+c;try{E(!0,k)?g.postMessage(null):(S=!1,E=null)}catch(N){throw g.postMessage(null),N}}else S=!1},t=function(k){E=k,S||(S=!0,g.postMessage(null))},n=function(k,N){f=y(function(){k(e.unstable_now())},N)},r=function(){h(f),f=-1}}function T(k,N){var L=k.length;k.push(N);e:for(;;){var H=L-1>>>1,Y=k[H];if(Y!==void 0&&0<P(Y,N))k[H]=N,k[L]=Y,L=H;else break e}}function v(k){return k=k[0],k===void 0?null:k}function I(k){var N=k[0];if(N!==void 0){var L=k.pop();if(L!==N){k[0]=L;e:for(var H=0,Y=k.length;H<Y;){var Ot=2*(H+1)-1,Pt=k[Ot],Wn=Ot+1,rn=k[Wn];if(Pt!==void 0&&0>P(Pt,L))rn!==void 0&&0>P(rn,Pt)?(k[H]=rn,k[Wn]=L,H=Wn):(k[H]=Pt,k[Ot]=L,H=Ot);else if(rn!==void 0&&0>P(rn,L))k[H]=rn,k[Wn]=L,H=Wn;else break e}}return N}return null}function P(k,N){var L=k.sortIndex-N.sortIndex;return L!==0?L:k.id-N.id}var O=[],W=[],Uo=1,he=null,Z=3,ai=!1,Ct=!1,Vn=!1;function jo(k){for(var N=v(W);N!==null;){if(N.callback===null)I(W);else if(N.startTime<=k)I(W),N.sortIndex=N.expirationTime,T(O,N);else break;N=v(W)}}function Fo(k){if(Vn=!1,jo(k),!Ct)if(v(O)!==null)Ct=!0,t($o);else{var N=v(W);N!==null&&n(Fo,N.startTime-k)}}function $o(k,N){Ct=!1,Vn&&(Vn=!1,r()),ai=!0;var L=Z;try{for(jo(N),he=v(O);he!==null&&(!(he.expirationTime>N)||k&&!e.unstable_shouldYield());){var H=he.callback;if(typeof H=="function"){he.callback=null,Z=he.priorityLevel;var Y=H(he.expirationTime<=N);N=e.unstable_now(),typeof Y=="function"?he.callback=Y:he===v(O)&&I(O),jo(N)}else I(O);he=v(O)}if(he!==null)var Ot=!0;else{var Pt=v(W);Pt!==null&&n(Fo,Pt.startTime-N),Ot=!1}return Ot}finally{he=null,Z=L,ai=!1}}var yh=i;e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){Ct||ai||(Ct=!0,t($o))},e.unstable_getCurrentPriorityLevel=function(){return Z},e.unstable_getFirstCallbackNode=function(){return v(O)},e.unstable_next=function(k){switch(Z){case 1:case 2:case 3:var N=3;break;default:N=Z}var L=Z;Z=N;try{return k()}finally{Z=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=yh,e.unstable_runWithPriority=function(k,N){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var L=Z;Z=k;try{return N()}finally{Z=L}},e.unstable_scheduleCallback=function(k,N,L){var H=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?H+L:H):L=H,k){case 1:var Y=-1;break;case 2:Y=250;break;case 5:Y=1073741823;break;case 4:Y=1e4;break;default:Y=5e3}return Y=L+Y,k={id:Uo++,callback:N,priorityLevel:k,startTime:L,expirationTime:Y,sortIndex:-1},L>H?(k.sortIndex=L,T(W,k),v(O)===null&&k===v(W)&&(Vn?r():Vn=!0,n(Fo,L-H))):(k.sortIndex=Y,T(O,k),Ct||ai||(Ct=!0,t($o))),k},e.unstable_wrapCallback=function(k){var N=Z;return function(){var L=Z;Z=N;try{return k.apply(this,arguments)}finally{Z=L}}}})(nu);tu.exports=nu;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ci=A.exports,F=jl,G=tu.exports;function _(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!ci)throw Error(_(227));var ru=new Set,Gn={};function Nt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Gn[e]=t,e=0;e<t.length;e++)ru.add(t[e])}var je=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),Ph=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,iu=Object.prototype.hasOwnProperty,ou={},su={};function xh(e){return iu.call(su,e)?!0:iu.call(ou,e)?!1:Ph.test(e)?su[e]=!0:(ou[e]=!0,!1)}function Nh(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rh(e,t,n,r){if(t===null||typeof t=="undefined"||Nh(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function oe(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new oe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new oe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new oe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new oe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new oe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new oe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Q[e]=new oe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Q[e]=new oe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Q[e]=new oe(e,5,!1,e.toLowerCase(),null,!1,!1)});var Go=/[\-:]([a-z])/g;function Ko(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Go,Ko);Q[t]=new oe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Go,Ko);Q[t]=new oe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Go,Ko);Q[t]=new oe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new oe(e,1,!1,e.toLowerCase(),null,!1,!1)});Q.xlinkHref=new oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Q[e]=new oe(e,1,!1,e.toLowerCase(),null,!0,!0)});function Yo(e,t,n,r){var i=Q.hasOwnProperty(t)?Q[t]:null,o=i!==null?i.type===0:r?!1:!(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N");o||(Rh(t,n,i,r)&&(n=null),r||i===null?xh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Rt=ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Kn=60103,At=60106,Je=60107,Qo=60108,Yn=60114,Xo=60109,Jo=60110,fi=60112,Qn=60113,di=60120,pi=60115,Zo=60116,es=60121,ts=60128,au=60129,ns=60130,rs=60131;if(typeof Symbol=="function"&&Symbol.for){var K=Symbol.for;Kn=K("react.element"),At=K("react.portal"),Je=K("react.fragment"),Qo=K("react.strict_mode"),Yn=K("react.profiler"),Xo=K("react.provider"),Jo=K("react.context"),fi=K("react.forward_ref"),Qn=K("react.suspense"),di=K("react.suspense_list"),pi=K("react.memo"),Zo=K("react.lazy"),es=K("react.block"),K("react.scope"),ts=K("react.opaque.id"),au=K("react.debug_trace_mode"),ns=K("react.offscreen"),rs=K("react.legacy_hidden")}var lu=typeof Symbol=="function"&&Symbol.iterator;function Xn(e){return e===null||typeof e!="object"?null:(e=lu&&e[lu]||e["@@iterator"],typeof e=="function"?e:null)}var is;function Jn(e){if(is===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);is=t&&t[1]||""}return`
`+is+e}var os=!1;function hi(e,t){if(!e||os)return"";os=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(l){var r=l}Reflect.construct(e,[],t)}else{try{t.call()}catch(l){r=l}e.call(t.prototype)}else{try{throw Error()}catch(l){r=l}e()}}catch(l){if(l&&r&&typeof l.stack=="string"){for(var i=l.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a])return`
`+i[s].replace(" at new "," at ");while(1<=s&&0<=a);break}}}finally{os=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Jn(e):""}function Ah(e){switch(e.tag){case 5:return Jn(e.type);case 16:return Jn("Lazy");case 13:return Jn("Suspense");case 19:return Jn("SuspenseList");case 0:case 2:case 15:return e=hi(e.type,!1),e;case 11:return e=hi(e.type.render,!1),e;case 22:return e=hi(e.type._render,!1),e;case 1:return e=hi(e.type,!0),e;default:return""}}function ln(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Je:return"Fragment";case At:return"Portal";case Yn:return"Profiler";case Qo:return"StrictMode";case Qn:return"Suspense";case di:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jo:return(e.displayName||"Context")+".Consumer";case Xo:return(e._context.displayName||"Context")+".Provider";case fi:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case pi:return ln(e.type);case es:return ln(e._render);case Zo:t=e._payload,e=e._init;try{return ln(e(t))}catch{}}return null}function Ze(e){switch(typeof e){case"boolean":case"number":case"object":case"string":case"undefined":return e;default:return""}}function uu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Lh(e){var t=uu(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function mi(e){e._valueTracker||(e._valueTracker=Lh(e))}function cu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=uu(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gi(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function ss(e,t){var n=t.checked;return F({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function fu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ze(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function du(e,t){t=t.checked,t!=null&&Yo(e,"checked",t,!1)}function as(e,t){du(e,t);var n=Ze(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ls(e,t.type,n):t.hasOwnProperty("defaultValue")&&ls(e,t.type,Ze(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function pu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ls(e,t,n){(t!=="number"||gi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}function Dh(e){var t="";return ci.Children.forEach(e,function(n){n!=null&&(t+=n)}),t}function us(e,t){return e=F({children:void 0},t),(t=Dh(t.children))&&(e.children=t),e}function un(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ze(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function cs(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(_(91));return F({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(_(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(_(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ze(n)}}function mu(e,t){var n=Ze(t.value),r=Ze(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function gu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}var fs={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function vu(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ds(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vu(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vi,yu=function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==fs.svg||"innerHTML"in e)e.innerHTML=t;else{for(vi=vi||document.createElement("div"),vi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Zn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var er={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Mh=["Webkit","ms","Moz","O"];Object.keys(er).forEach(function(e){Mh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),er[t]=er[e]})});function wu(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||er.hasOwnProperty(e)&&er[e]?(""+t).trim():t+"px"}function _u(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=wu(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var bh=F({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ps(e,t){if(t){if(bh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(_(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(_(60));if(!(typeof t.dangerouslySetInnerHTML=="object"&&"__html"in t.dangerouslySetInnerHTML))throw Error(_(61))}if(t.style!=null&&typeof t.style!="object")throw Error(_(62))}}function hs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function ms(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var gs=null,cn=null,fn=null;function Eu(e){if(e=wr(e)){if(typeof gs!="function")throw Error(_(280));var t=e.stateNode;t&&(t=Mi(t),gs(e.stateNode,e.type,t))}}function Su(e){cn?fn?fn.push(e):fn=[e]:cn=e}function ku(){if(cn){var e=cn,t=fn;if(fn=cn=null,Eu(e),t)for(e=0;e<t.length;e++)Eu(t[e])}}function vs(e,t){return e(t)}function Iu(e,t,n,r,i){return e(t,n,r,i)}function ys(){}var Tu=vs,Lt=!1,ws=!1;function _s(){(cn!==null||fn!==null)&&(ys(),ku())}function Uh(e,t,n){if(ws)return e(t,n);ws=!0;try{return Tu(e,t,n)}finally{ws=!1,_s()}}function tr(e,t){var n=e.stateNode;if(n===null)return null;var r=Mi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(_(231,t,typeof n));return n}var Es=!1;if(je)try{var nr={};Object.defineProperty(nr,"passive",{get:function(){Es=!0}}),window.addEventListener("test",nr,nr),window.removeEventListener("test",nr,nr)}catch{Es=!1}function jh(e,t,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(p){this.onError(p)}}var rr=!1,yi=null,wi=!1,Ss=null,Fh={onError:function(e){rr=!0,yi=e}};function $h(e,t,n,r,i,o,s,a,l){rr=!1,yi=null,jh.apply(Fh,arguments)}function zh(e,t,n,r,i,o,s,a,l){if($h.apply(this,arguments),rr){if(rr){var u=yi;rr=!1,yi=null}else throw Error(_(198));wi||(wi=!0,Ss=u)}}function Dt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&1026)!=0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Cu(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ou(e){if(Dt(e)!==e)throw Error(_(188))}function Bh(e){var t=e.alternate;if(!t){if(t=Dt(e),t===null)throw Error(_(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return Ou(i),e;if(o===r)return Ou(i),t;o=o.sibling}throw Error(_(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(_(189))}}if(n.alternate!==r)throw Error(_(190))}if(n.tag!==3)throw Error(_(188));return n.stateNode.current===n?e:t}function Pu(e){if(e=Bh(e),!e)return null;for(var t=e;;){if(t.tag===5||t.tag===6)return t;if(t.child)t.child.return=t,t=t.child;else{if(t===e)break;for(;!t.sibling;){if(!t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}}return null}function xu(e,t){for(var n=e.alternate;t!==null;){if(t===e||t===n)return!0;t=t.return}return!1}var Nu,ks,Ru,Au,Is=!1,Oe=[],et=null,tt=null,nt=null,ir=new Map,or=new Map,sr=[],Lu="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ts(e,t,n,r,i){return{blockedOn:e,domEventName:t,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Du(e,t){switch(e){case"focusin":case"focusout":et=null;break;case"dragenter":case"dragleave":tt=null;break;case"mouseover":case"mouseout":nt=null;break;case"pointerover":case"pointerout":ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":or.delete(t.pointerId)}}function ar(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e=Ts(t,n,r,i,o),t!==null&&(t=wr(t),t!==null&&ks(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Hh(e,t,n,r,i){switch(t){case"focusin":return et=ar(et,e,t,n,r,i),!0;case"dragenter":return tt=ar(tt,e,t,n,r,i),!0;case"mouseover":return nt=ar(nt,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return ir.set(o,ar(ir.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,or.set(o,ar(or.get(o)||null,e,t,n,r,i)),!0}return!1}function Vh(e){var t=Mt(e.target);if(t!==null){var n=Dt(t);if(n!==null){if(t=n.tag,t===13){if(t=Cu(n),t!==null){e.blockedOn=t,Au(e.lanePriority,function(){G.unstable_runWithPriority(e.priority,function(){Ru(n)})});return}}else if(t===3&&n.stateNode.hydrate){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null)return t=wr(n),t!==null&&ks(t),e.blockedOn=n,!1;t.shift()}return!0}function Mu(e,t,n){_i(e)&&n.delete(t)}function Wh(){for(Is=!1;0<Oe.length;){var e=Oe[0];if(e.blockedOn!==null){e=wr(e.blockedOn),e!==null&&Nu(e);break}for(var t=e.targetContainers;0<t.length;){var n=Rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n!==null){e.blockedOn=n;break}t.shift()}e.blockedOn===null&&Oe.shift()}et!==null&&_i(et)&&(et=null),tt!==null&&_i(tt)&&(tt=null),nt!==null&&_i(nt)&&(nt=null),ir.forEach(Mu),or.forEach(Mu)}function lr(e,t){e.blockedOn===t&&(e.blockedOn=null,Is||(Is=!0,G.unstable_scheduleCallback(G.unstable_NormalPriority,Wh)))}function bu(e){function t(i){return lr(i,e)}if(0<Oe.length){lr(Oe[0],e);for(var n=1;n<Oe.length;n++){var r=Oe[n];r.blockedOn===e&&(r.blockedOn=null)}}for(et!==null&&lr(et,e),tt!==null&&lr(tt,e),nt!==null&&lr(nt,e),ir.forEach(t),or.forEach(t),n=0;n<sr.length;n++)r=sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<sr.length&&(n=sr[0],n.blockedOn===null);)Vh(n),n.blockedOn===null&&sr.shift()}function Ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var dn={animationend:Ei("Animation","AnimationEnd"),animationiteration:Ei("Animation","AnimationIteration"),animationstart:Ei("Animation","AnimationStart"),transitionend:Ei("Transition","TransitionEnd")},Cs={},Uu={};je&&(Uu=document.createElement("div").style,"AnimationEvent"in window||(delete dn.animationend.animation,delete dn.animationiteration.animation,delete dn.animationstart.animation),"TransitionEvent"in window||delete dn.transitionend.transition);function Si(e){if(Cs[e])return Cs[e];if(!dn[e])return e;var t=dn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Uu)return Cs[e]=t[n];return e}var ju=Si("animationend"),Fu=Si("animationiteration"),$u=Si("animationstart"),zu=Si("transitionend"),Bu=new Map,Os=new Map,qh=["abort","abort",ju,"animationEnd",Fu,"animationIteration",$u,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",zu,"transitionEnd","waiting","waiting"];function Ps(e,t){for(var n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Os.set(r,t),Bu.set(r,i),Nt(i,[r])}}var Gh=G.unstable_now;Gh();var M=8;function pn(e){if((1&e)!=0)return M=15,1;if((2&e)!=0)return M=14,2;if((4&e)!=0)return M=13,4;var t=24&e;return t!==0?(M=12,t):(e&32)!=0?(M=11,32):(t=192&e,t!==0?(M=10,t):(e&256)!=0?(M=9,256):(t=3584&e,t!==0?(M=8,t):(e&4096)!=0?(M=7,4096):(t=4186112&e,t!==0?(M=6,t):(t=62914560&e,t!==0?(M=5,t):e&67108864?(M=4,67108864):(e&134217728)!=0?(M=3,134217728):(t=805306368&e,t!==0?(M=2,t):(1073741824&e)!=0?(M=1,1073741824):(M=8,e))))))}function Kh(e){switch(e){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Yh(e){switch(e){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(_(358,e))}}function ur(e,t){var n=e.pendingLanes;if(n===0)return M=0;var r=0,i=0,o=e.expiredLanes,s=e.suspendedLanes,a=e.pingedLanes;if(o!==0)r=o,i=M=15;else if(o=n&134217727,o!==0){var l=o&~s;l!==0?(r=pn(l),i=M):(a&=o,a!==0&&(r=pn(a),i=M))}else o=n&~s,o!==0?(r=pn(o),i=M):a!==0&&(r=pn(a),i=M);if(r===0)return 0;if(r=31-rt(r),r=n&((0>r?0:1<<r)<<1)-1,t!==0&&t!==r&&(t&s)==0){if(pn(t),i<=M)return t;M=i}if(t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-rt(t),i=1<<n,r|=e[n],t&=~i;return r}function Hu(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function ki(e,t){switch(e){case 15:return 1;case 14:return 2;case 12:return e=hn(24&~t),e===0?ki(10,t):e;case 10:return e=hn(192&~t),e===0?ki(8,t):e;case 8:return e=hn(3584&~t),e===0&&(e=hn(4186112&~t),e===0&&(e=512)),e;case 2:return t=hn(805306368&~t),t===0&&(t=268435456),t}throw Error(_(358,e))}function hn(e){return e&-e}function xs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ii(e,t,n){e.pendingLanes|=t;var r=t-1;e.suspendedLanes&=r,e.pingedLanes&=r,e=e.eventTimes,t=31-rt(t),e[t]=n}var rt=Math.clz32?Math.clz32:Jh,Qh=Math.log,Xh=Math.LN2;function Jh(e){return e===0?32:31-(Qh(e)/Xh|0)|0}var Zh=G.unstable_UserBlockingPriority,em=G.unstable_runWithPriority,Ti=!0;function tm(e,t,n,r){Lt||ys();var i=Ns,o=Lt;Lt=!0;try{Iu(i,e,t,n,r)}finally{(Lt=o)||_s()}}function nm(e,t,n,r){em(Zh,Ns.bind(null,e,t,n,r))}function Ns(e,t,n,r){if(Ti){var i;if((i=(t&4)==0)&&0<Oe.length&&-1<Lu.indexOf(e))e=Ts(null,e,t,n,r),Oe.push(e);else{var o=Rs(e,t,n,r);if(o===null)i&&Du(e,r);else{if(i){if(-1<Lu.indexOf(e)){e=Ts(o,e,t,n,r),Oe.push(e);return}if(Hh(o,e,t,n,r))return;Du(e,r)}wc(e,t,r,null,n)}}}}function Rs(e,t,n,r){var i=ms(r);if(i=Mt(i),i!==null){var o=Dt(i);if(o===null)i=null;else{var s=o.tag;if(s===13){if(i=Cu(o),i!==null)return i;i=null}else if(s===3){if(o.stateNode.hydrate)return o.tag===3?o.stateNode.containerInfo:null;i=null}else o!==i&&(i=null)}}return wc(e,t,r,i,n),null}var it=null,As=null,Ci=null;function Vu(){if(Ci)return Ci;var e,t=As,n=t.length,r,i="value"in it?it.value:it.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return Ci=i.slice(e,1<r?1-r:void 0)}function Oi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function Wu(){return!1}function fe(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Pi:Wu,this.isPropagationStopped=Wu,this}return F(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),t}var mn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=fe(mn),cr=F({},mn,{view:0,detail:0}),rm=fe(cr),Ds,Ms,fr,xi=F({},cr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fr&&(fr&&e.type==="mousemove"?(Ds=e.screenX-fr.screenX,Ms=e.screenY-fr.screenY):Ms=Ds=0,fr=e),Ds)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),qu=fe(xi),im=F({},xi,{dataTransfer:0}),om=fe(im),sm=F({},cr,{relatedTarget:0}),bs=fe(sm),am=F({},mn,{animationName:0,elapsedTime:0,pseudoElement:0}),lm=fe(am),um=F({},mn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),cm=fe(um),fm=F({},mn,{data:0}),Gu=fe(fm),dm={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=hm[e])?!!t[e]:!1}function Us(){return mm}var gm=F({},cr,{key:function(e){if(e.key){var t=dm[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Oi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?pm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Us,charCode:function(e){return e.type==="keypress"?Oi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Oi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vm=fe(gm),ym=F({},xi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ku=fe(ym),wm=F({},cr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Us}),_m=fe(wm),Em=F({},mn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Sm=fe(Em),km=F({},xi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Im=fe(km),Tm=[9,13,27,32],js=je&&"CompositionEvent"in window,dr=null;je&&"documentMode"in document&&(dr=document.documentMode);var Cm=je&&"TextEvent"in window&&!dr,Yu=je&&(!js||dr&&8<dr&&11>=dr),Qu=String.fromCharCode(32),Xu=!1;function Ju(e,t){switch(e){case"keyup":return Tm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gn=!1;function Om(e,t){switch(e){case"compositionend":return Zu(t);case"keypress":return t.which!==32?null:(Xu=!0,Qu);case"textInput":return e=t.data,e===Qu&&Xu?null:e;default:return null}}function Pm(e,t){if(gn)return e==="compositionend"||!js&&Ju(e,t)?(e=Vu(),Ci=As=it=null,gn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var xm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!xm[e.type]:t==="textarea"}function tc(e,t,n,r){Su(r),t=Ri(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,hr=null;function Nm(e){hc(e,0)}function Ni(e){var t=En(e);if(cu(t))return e}function Rm(e,t){if(e==="change")return t}var nc=!1;if(je){var Fs;if(je){var $s="oninput"in document;if(!$s){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),$s=typeof rc.oninput=="function"}Fs=$s}else Fs=!1;nc=Fs&&(!document.documentMode||9<document.documentMode)}function ic(){pr&&(pr.detachEvent("onpropertychange",oc),hr=pr=null)}function oc(e){if(e.propertyName==="value"&&Ni(hr)){var t=[];if(tc(t,hr,e,ms(e)),e=Nm,Lt)e(t);else{Lt=!0;try{vs(e,t)}finally{Lt=!1,_s()}}}}function Am(e,t,n){e==="focusin"?(ic(),pr=t,hr=n,pr.attachEvent("onpropertychange",oc)):e==="focusout"&&ic()}function Lm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ni(hr)}function Dm(e,t){if(e==="click")return Ni(t)}function Mm(e,t){if(e==="input"||e==="change")return Ni(t)}function bm(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var ge=typeof Object.is=="function"?Object.is:bm,Um=Object.prototype.hasOwnProperty;function mr(e,t){if(ge(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!Um.call(t,n[r])||!ge(e[n[r]],t[n[r]]))return!1;return!0}function sc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var n=sc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=sc(n)}}function lc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?lc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(){for(var e=window,t=gi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gi(e.document)}return t}function zs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var jm=je&&"documentMode"in document&&11>=document.documentMode,vn=null,Bs=null,gr=null,Hs=!1;function cc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Hs||vn==null||vn!==gi(r)||(r=vn,"selectionStart"in r&&zs(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),gr&&mr(gr,r)||(gr=r,r=Ri(Bs,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=vn)))}Ps("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Ps("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Ps(qh,2);for(var fc="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Vs=0;Vs<fc.length;Vs++)Os.set(fc[Vs],0);an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Nt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Nt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Nt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Nt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Nt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dc=new Set("cancel close invalid load scroll toggle".split(" ").concat(vr));function pc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,zh(r,t,void 0,e),e.currentTarget=null}function hc(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;pc(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;pc(i,a,u),o=l}}}if(wi)throw e=Ss,wi=!1,Ss=null,e}function U(e,t){var n=Tc(t),r=e+"__bubble";n.has(r)||(yc(t,e,2,!1),n.add(r))}var mc="_reactListening"+Math.random().toString(36).slice(2);function gc(e){e[mc]||(e[mc]=!0,ru.forEach(function(t){dc.has(t)||vc(t,!1,e,null),vc(t,!0,e,null)}))}function vc(e,t,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,o=n;if(e==="selectionchange"&&n.nodeType!==9&&(o=n.ownerDocument),r!==null&&!t&&dc.has(e)){if(e!=="scroll")return;i|=2,o=r}var s=Tc(o),a=e+"__"+(t?"capture":"bubble");s.has(a)||(t&&(i|=4),yc(o,e,i,t),s.add(a))}function yc(e,t,n,r){var i=Os.get(t);switch(i===void 0?2:i){case 0:i=tm;break;case 1:i=nm;break;default:i=Ns}n=i.bind(null,t,n,e),i=void 0,!Es||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function wc(e,t,n,r,i){var o=r;if((t&1)==0&&(t&2)==0&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=Mt(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Uh(function(){var u=o,p=ms(n),y=[];e:{var h=Bu.get(e);if(h!==void 0){var w=Ls,S=e;switch(e){case"keypress":if(Oi(n)===0)break e;case"keydown":case"keyup":w=vm;break;case"focusin":S="focus",w=bs;break;case"focusout":S="blur",w=bs;break;case"beforeblur":case"afterblur":w=bs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=qu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=om;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=_m;break;case ju:case Fu:case $u:w=lm;break;case zu:w=Sm;break;case"scroll":w=rm;break;case"wheel":w=Im;break;case"copy":case"cut":case"paste":w=cm;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Ku}var E=(t&4)!=0,f=!E&&e==="scroll",c=E?h!==null?h+"Capture":null:h;E=[];for(var d=u,m;d!==null;){m=d;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,c!==null&&(g=tr(d,c),g!=null&&E.push(yr(d,g,m)))),f)break;d=d.return}0<E.length&&(h=new w(h,S,null,n,p),y.push({event:h,listeners:E}))}}if((t&7)==0){e:{if(h=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",h&&(t&16)==0&&(S=n.relatedTarget||n.fromElement)&&(Mt(S)||S[_n]))break e;if((w||h)&&(h=p.window===p?p:(h=p.ownerDocument)?h.defaultView||h.parentWindow:window,w?(S=n.relatedTarget||n.toElement,w=u,S=S?Mt(S):null,S!==null&&(f=Dt(S),S!==f||S.tag!==5&&S.tag!==6)&&(S=null)):(w=null,S=u),w!==S)){if(E=qu,g="onMouseLeave",c="onMouseEnter",d="mouse",(e==="pointerout"||e==="pointerover")&&(E=Ku,g="onPointerLeave",c="onPointerEnter",d="pointer"),f=w==null?h:En(w),m=S==null?h:En(S),h=new E(g,d+"leave",w,n,p),h.target=f,h.relatedTarget=m,g=null,Mt(p)===u&&(E=new E(c,d+"enter",S,n,p),E.target=m,E.relatedTarget=f,g=E),f=g,w&&S)t:{for(E=w,c=S,d=0,m=E;m;m=yn(m))d++;for(m=0,g=c;g;g=yn(g))m++;for(;0<d-m;)E=yn(E),d--;for(;0<m-d;)c=yn(c),m--;for(;d--;){if(E===c||c!==null&&E===c.alternate)break t;E=yn(E),c=yn(c)}E=null}else E=null;w!==null&&_c(y,h,w,E,!1),S!==null&&f!==null&&_c(y,f,S,E,!0)}}e:{if(h=u?En(u):window,w=h.nodeName&&h.nodeName.toLowerCase(),w==="select"||w==="input"&&h.type==="file")var T=Rm;else if(ec(h))if(nc)T=Mm;else{T=Lm;var v=Am}else(w=h.nodeName)&&w.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(T=Dm);if(T&&(T=T(e,u))){tc(y,T,n,p);break e}v&&v(e,h,u),e==="focusout"&&(v=h._wrapperState)&&v.controlled&&h.type==="number"&&ls(h,"number",h.value)}switch(v=u?En(u):window,e){case"focusin":(ec(v)||v.contentEditable==="true")&&(vn=v,Bs=u,gr=null);break;case"focusout":gr=Bs=vn=null;break;case"mousedown":Hs=!0;break;case"contextmenu":case"mouseup":case"dragend":Hs=!1,cc(y,n,p);break;case"selectionchange":if(jm)break;case"keydown":case"keyup":cc(y,n,p)}var I;if(js)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else gn?Ju(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Yu&&n.locale!=="ko"&&(gn||P!=="onCompositionStart"?P==="onCompositionEnd"&&gn&&(I=Vu()):(it=p,As="value"in it?it.value:it.textContent,gn=!0)),v=Ri(u,P),0<v.length&&(P=new Gu(P,e,null,n,p),y.push({event:P,listeners:v}),I?P.data=I:(I=Zu(n),I!==null&&(P.data=I)))),(I=Cm?Om(e,n):Pm(e,n))&&(u=Ri(u,"onBeforeInput"),0<u.length&&(p=new Gu("onBeforeInput","beforeinput",null,n,p),y.push({event:p,listeners:u}),p.data=I))}hc(y,t)})}function yr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ri(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=tr(e,n),o!=null&&r.unshift(yr(e,o,i)),o=tr(e,t),o!=null&&r.push(yr(e,o,i))),e=e.return}return r}function yn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function _c(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=tr(n,o),l!=null&&s.unshift(yr(n,l,a))):i||(l=tr(n,o),l!=null&&s.push(yr(n,l,a)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}function Ai(){}var Ws=null,qs=null;function Ec(e,t){switch(e){case"button":case"input":case"select":case"textarea":return!!t.autoFocus}return!1}function Gs(e,t){return e==="textarea"||e==="option"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Sc=typeof setTimeout=="function"?setTimeout:void 0,Fm=typeof clearTimeout=="function"?clearTimeout:void 0;function Ks(e){e.nodeType===1?e.textContent="":e.nodeType===9&&(e=e.body,e!=null&&(e.textContent=""))}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break}return e}function kc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Ys=0;function $m(e){return{$$typeof:ts,toString:e,valueOf:e}}var Li=Math.random().toString(36).slice(2),ot="__reactFiber$"+Li,Di="__reactProps$"+Li,_n="__reactContainer$"+Li,Ic="__reactEvents$"+Li;function Mt(e){var t=e[ot];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_n]||n[ot]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kc(e);e!==null;){if(n=e[ot])return n;e=kc(e)}return t}e=n,n=e.parentNode}return null}function wr(e){return e=e[ot]||e[_n],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function En(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(_(33))}function Mi(e){return e[Di]||null}function Tc(e){var t=e[Ic];return t===void 0&&(t=e[Ic]=new Set),t}var Qs=[],Sn=-1;function st(e){return{current:e}}function j(e){0>Sn||(e.current=Qs[Sn],Qs[Sn]=null,Sn--)}function $(e,t){Sn++,Qs[Sn]=e.current,e.current=t}var at={},ee=st(at),ae=st(!1),bt=at;function kn(e,t){var n=e.type.contextTypes;if(!n)return at;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function le(e){return e=e.childContextTypes,e!=null}function bi(){j(ae),j(ee)}function Cc(e,t,n){if(ee.current!==at)throw Error(_(168));$(ee,t),$(ae,n)}function Oc(e,t,n){var r=e.stateNode;if(e=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(_(108,ln(t)||"Unknown",i));return F({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||at,bt=ee.current,$(ee,e),$(ae,ae.current),!0}function Pc(e,t,n){var r=e.stateNode;if(!r)throw Error(_(169));n?(e=Oc(e,t,bt),r.__reactInternalMemoizedMergedChildContext=e,j(ae),j(ee),$(ee,e)):j(ae),$(ae,n)}var Xs=null,Ut=null,zm=G.unstable_runWithPriority,Js=G.unstable_scheduleCallback,Zs=G.unstable_cancelCallback,Bm=G.unstable_shouldYield,xc=G.unstable_requestPaint,ea=G.unstable_now,Hm=G.unstable_getCurrentPriorityLevel,ji=G.unstable_ImmediatePriority,Nc=G.unstable_UserBlockingPriority,Rc=G.unstable_NormalPriority,Ac=G.unstable_LowPriority,Lc=G.unstable_IdlePriority,ta={},Vm=xc!==void 0?xc:function(){},Fe=null,Fi=null,na=!1,Dc=ea(),te=1e4>Dc?ea:function(){return ea()-Dc};function In(){switch(Hm()){case ji:return 99;case Nc:return 98;case Rc:return 97;case Ac:return 96;case Lc:return 95;default:throw Error(_(332))}}function Mc(e){switch(e){case 99:return ji;case 98:return Nc;case 97:return Rc;case 96:return Ac;case 95:return Lc;default:throw Error(_(332))}}function jt(e,t){return e=Mc(e),zm(e,t)}function _r(e,t,n){return e=Mc(e),Js(e,t,n)}function Pe(){if(Fi!==null){var e=Fi;Fi=null,Zs(e)}bc()}function bc(){if(!na&&Fe!==null){na=!0;var e=0;try{var t=Fe;jt(99,function(){for(;e<t.length;e++){var n=t[e];do n=n(!0);while(n!==null)}}),Fe=null}catch(n){throw Fe!==null&&(Fe=Fe.slice(e+1)),Js(ji,Pe),n}finally{na=!1}}}var Wm=Rt.ReactCurrentBatchConfig;function ke(e,t){if(e&&e.defaultProps){t=F({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var $i=st(null),zi=null,Tn=null,Bi=null;function ra(){Bi=Tn=zi=null}function ia(e){var t=$i.current;j($i),e.type._context._currentValue=t}function Uc(e,t){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)===t){if(n===null||(n.childLanes&t)===t)break;n.childLanes|=t}else e.childLanes|=t,n!==null&&(n.childLanes|=t);e=e.return}}function Cn(e,t){zi=e,Bi=Tn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!=0&&(Ie=!0),e.firstContext=null)}function ve(e,t){if(Bi!==e&&t!==!1&&t!==0)if((typeof t!="number"||t===1073741823)&&(Bi=e,t=1073741823),t={context:e,observedBits:t,next:null},Tn===null){if(zi===null)throw Error(_(308));Tn=t,zi.dependencies={lanes:0,firstContext:t,responders:null}}else Tn=Tn.next=t;return e._currentValue}var lt=!1;function oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function jc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ut(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ct(e,t){if(e=e.updateQueue,e!==null){e=e.shared;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}}function Fc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Er(e,t,n,r){var i=e.updateQueue;lt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var p=e.alternate;if(p!==null){p=p.updateQueue;var y=p.lastBaseUpdate;y!==s&&(y===null?p.firstBaseUpdate=u:y.next=u,p.lastBaseUpdate=l)}}if(o!==null){y=i.baseState,s=0,p=u=l=null;do{a=o.lane;var h=o.eventTime;if((r&a)===a){p!==null&&(p=p.next={eventTime:h,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var w=e,S=o;switch(a=t,h=n,S.tag){case 1:if(w=S.payload,typeof w=="function"){y=w.call(h,y,a);break e}y=w;break e;case 3:w.flags=w.flags&-4097|64;case 0:if(w=S.payload,a=typeof w=="function"?w.call(h,y,a):w,a==null)break e;y=F({},y,a);break e;case 2:lt=!0}}o.callback!==null&&(e.flags|=32,a=i.effects,a===null?i.effects=[o]:a.push(o))}else h={eventTime:h,lane:a,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(u=p=h,l=y):p=p.next=h,s|=a;if(o=o.next,o===null){if(a=i.shared.pending,a===null)break;o=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);p===null&&(l=y),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=p,Lr|=s,e.lanes=s,e.memoizedState=y}}function $c(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(_(191,i));i.call(r)}}}var zc=new ci.Component().refs;function Hi(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:F({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Vi={isMounted:function(e){return(e=e._reactInternals)?Dt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=de(),i=pt(e),o=ut(r,i);o.payload=t,n!=null&&(o.callback=n),ct(e,o),ht(e,i,r)},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=de(),i=pt(e),o=ut(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),ct(e,o),ht(e,i,r)},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=de(),r=pt(e),i=ut(n,r);i.tag=2,t!=null&&(i.callback=t),ct(e,i),ht(e,r,n)}};function Bc(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!mr(n,r)||!mr(i,o):!0}function Hc(e,t,n){var r=!1,i=at,o=t.contextType;return typeof o=="object"&&o!==null?o=ve(o):(i=le(t)?bt:ee.current,r=t.contextTypes,o=(r=r!=null)?kn(e,i):at),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Vi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function Vc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Vi.enqueueReplaceState(t,t.state,null)}function sa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=zc,oa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=ve(o):(o=le(t)?bt:ee.current,i.context=kn(e,o)),Er(e,n,i,r),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Hi(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Vi.enqueueReplaceState(i,i.state,null),Er(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4)}var Wi=Array.isArray;function Sr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(_(309));var r=n.stateNode}if(!r)throw Error(_(147,e));var i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var s=r.refs;s===zc&&(s=r.refs={}),o===null?delete s[i]:s[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(_(284));if(!n._owner)throw Error(_(290,e))}return e}function qi(e,t){if(e.type!=="textarea")throw Error(_(31,Object.prototype.toString.call(t)==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":t))}function Wc(e){function t(f,c){if(e){var d=f.lastEffect;d!==null?(d.nextEffect=c,f.lastEffect=c):f.firstEffect=f.lastEffect=c,c.nextEffect=null,c.flags=8}}function n(f,c){if(!e)return null;for(;c!==null;)t(f,c),c=c.sibling;return null}function r(f,c){for(f=new Map;c!==null;)c.key!==null?f.set(c.key,c):f.set(c.index,c),c=c.sibling;return f}function i(f,c){return f=vt(f,c),f.index=0,f.sibling=null,f}function o(f,c,d){return f.index=d,e?(d=f.alternate,d!==null?(d=d.index,d<c?(f.flags=2,c):d):(f.flags=2,c)):c}function s(f){return e&&f.alternate===null&&(f.flags=2),f}function a(f,c,d,m){return c===null||c.tag!==6?(c=Ba(d,f.mode,m),c.return=f,c):(c=i(c,d),c.return=f,c)}function l(f,c,d,m){return c!==null&&c.elementType===d.type?(m=i(c,d.props),m.ref=Sr(f,c,d),m.return=f,m):(m=co(d.type,d.key,d.props,null,f.mode,m),m.ref=Sr(f,c,d),m.return=f,m)}function u(f,c,d,m){return c===null||c.tag!==4||c.stateNode.containerInfo!==d.containerInfo||c.stateNode.implementation!==d.implementation?(c=Ha(d,f.mode,m),c.return=f,c):(c=i(c,d.children||[]),c.return=f,c)}function p(f,c,d,m,g){return c===null||c.tag!==7?(c=Dn(d,f.mode,m,g),c.return=f,c):(c=i(c,d),c.return=f,c)}function y(f,c,d){if(typeof c=="string"||typeof c=="number")return c=Ba(""+c,f.mode,d),c.return=f,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Kn:return d=co(c.type,c.key,c.props,null,f.mode,d),d.ref=Sr(f,null,c),d.return=f,d;case At:return c=Ha(c,f.mode,d),c.return=f,c}if(Wi(c)||Xn(c))return c=Dn(c,f.mode,d,null),c.return=f,c;qi(f,c)}return null}function h(f,c,d,m){var g=c!==null?c.key:null;if(typeof d=="string"||typeof d=="number")return g!==null?null:a(f,c,""+d,m);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Kn:return d.key===g?d.type===Je?p(f,c,d.props.children,m,g):l(f,c,d,m):null;case At:return d.key===g?u(f,c,d,m):null}if(Wi(d)||Xn(d))return g!==null?null:p(f,c,d,m,null);qi(f,d)}return null}function w(f,c,d,m,g){if(typeof m=="string"||typeof m=="number")return f=f.get(d)||null,a(c,f,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Kn:return f=f.get(m.key===null?d:m.key)||null,m.type===Je?p(c,f,m.props.children,g,m.key):l(c,f,m,g);case At:return f=f.get(m.key===null?d:m.key)||null,u(c,f,m,g)}if(Wi(m)||Xn(m))return f=f.get(d)||null,p(c,f,m,g,null);qi(c,m)}return null}function S(f,c,d,m){for(var g=null,T=null,v=c,I=c=0,P=null;v!==null&&I<d.length;I++){v.index>I?(P=v,v=null):P=v.sibling;var O=h(f,v,d[I],m);if(O===null){v===null&&(v=P);break}e&&v&&O.alternate===null&&t(f,v),c=o(O,c,I),T===null?g=O:T.sibling=O,T=O,v=P}if(I===d.length)return n(f,v),g;if(v===null){for(;I<d.length;I++)v=y(f,d[I],m),v!==null&&(c=o(v,c,I),T===null?g=v:T.sibling=v,T=v);return g}for(v=r(f,v);I<d.length;I++)P=w(v,f,I,d[I],m),P!==null&&(e&&P.alternate!==null&&v.delete(P.key===null?I:P.key),c=o(P,c,I),T===null?g=P:T.sibling=P,T=P);return e&&v.forEach(function(W){return t(f,W)}),g}function E(f,c,d,m){var g=Xn(d);if(typeof g!="function")throw Error(_(150));if(d=g.call(d),d==null)throw Error(_(151));for(var T=g=null,v=c,I=c=0,P=null,O=d.next();v!==null&&!O.done;I++,O=d.next()){v.index>I?(P=v,v=null):P=v.sibling;var W=h(f,v,O.value,m);if(W===null){v===null&&(v=P);break}e&&v&&W.alternate===null&&t(f,v),c=o(W,c,I),T===null?g=W:T.sibling=W,T=W,v=P}if(O.done)return n(f,v),g;if(v===null){for(;!O.done;I++,O=d.next())O=y(f,O.value,m),O!==null&&(c=o(O,c,I),T===null?g=O:T.sibling=O,T=O);return g}for(v=r(f,v);!O.done;I++,O=d.next())O=w(v,f,I,O.value,m),O!==null&&(e&&O.alternate!==null&&v.delete(O.key===null?I:O.key),c=o(O,c,I),T===null?g=O:T.sibling=O,T=O);return e&&v.forEach(function(Uo){return t(f,Uo)}),g}return function(f,c,d,m){var g=typeof d=="object"&&d!==null&&d.type===Je&&d.key===null;g&&(d=d.props.children);var T=typeof d=="object"&&d!==null;if(T)switch(d.$$typeof){case Kn:e:{for(T=d.key,g=c;g!==null;){if(g.key===T){switch(g.tag){case 7:if(d.type===Je){n(f,g.sibling),c=i(g,d.props.children),c.return=f,f=c;break e}break;default:if(g.elementType===d.type){n(f,g.sibling),c=i(g,d.props),c.ref=Sr(f,g,d),c.return=f,f=c;break e}}n(f,g);break}else t(f,g);g=g.sibling}d.type===Je?(c=Dn(d.props.children,f.mode,m,d.key),c.return=f,f=c):(m=co(d.type,d.key,d.props,null,f.mode,m),m.ref=Sr(f,c,d),m.return=f,f=m)}return s(f);case At:e:{for(g=d.key;c!==null;){if(c.key===g)if(c.tag===4&&c.stateNode.containerInfo===d.containerInfo&&c.stateNode.implementation===d.implementation){n(f,c.sibling),c=i(c,d.children||[]),c.return=f,f=c;break e}else{n(f,c);break}else t(f,c);c=c.sibling}c=Ha(d,f.mode,m),c.return=f,f=c}return s(f)}if(typeof d=="string"||typeof d=="number")return d=""+d,c!==null&&c.tag===6?(n(f,c.sibling),c=i(c,d),c.return=f,f=c):(n(f,c),c=Ba(d,f.mode,m),c.return=f,f=c),s(f);if(Wi(d))return S(f,c,d,m);if(Xn(d))return E(f,c,d,m);if(T&&qi(f,d),typeof d=="undefined"&&!g)switch(f.tag){case 1:case 22:case 0:case 11:case 15:throw Error(_(152,ln(f.type)||"Component"))}return n(f,c)}}var Gi=Wc(!0),qc=Wc(!1),kr={},xe=st(kr),Ir=st(kr),Tr=st(kr);function Ft(e){if(e===kr)throw Error(_(174));return e}function aa(e,t){switch($(Tr,t),$(Ir,e),$(xe,kr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ds(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ds(t,e)}j(xe),$(xe,t)}function On(){j(xe),j(Ir),j(Tr)}function Gc(e){Ft(Tr.current);var t=Ft(xe.current),n=ds(t,e.type);t!==n&&($(Ir,e),$(xe,n))}function la(e){Ir.current===e&&(j(xe),j(Ir))}var z=st(0);function Ki(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&64)!=0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var $e=null,ft=null,Ne=!1;function Kc(e,t){var n=_e(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=t,n.return=e,n.flags=8,e.lastEffect!==null?(e.lastEffect.nextEffect=n,e.lastEffect=n):e.firstEffect=e.lastEffect=n}function Yc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,!0):!1;case 13:return!1;default:return!1}}function ua(e){if(Ne){var t=ft;if(t){var n=t;if(!Yc(e,t)){if(t=wn(n.nextSibling),!t||!Yc(e,t)){e.flags=e.flags&-1025|2,Ne=!1,$e=e;return}Kc($e,n)}$e=e,ft=wn(t.firstChild)}else e.flags=e.flags&-1025|2,Ne=!1,$e=e}}function Qc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;$e=e}function Yi(e){if(e!==$e)return!1;if(!Ne)return Qc(e),Ne=!0,!1;var t=e.type;if(e.tag!==5||t!=="head"&&t!=="body"&&!Gs(t,e.memoizedProps))for(t=ft;t;)Kc(e,t),t=wn(t.nextSibling);if(Qc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(_(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ft=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ft=null}}else ft=$e?wn(e.stateNode.nextSibling):null;return!0}function ca(){ft=$e=null,Ne=!1}var Pn=[];function fa(){for(var e=0;e<Pn.length;e++)Pn[e]._workInProgressVersionPrimary=null;Pn.length=0}var Cr=Rt.ReactCurrentDispatcher,ye=Rt.ReactCurrentBatchConfig,Or=0,V=null,ne=null,X=null,Qi=!1,Pr=!1;function ue(){throw Error(_(321))}function da(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ge(e[n],t[n]))return!1;return!0}function pa(e,t,n,r,i,o){if(Or=o,V=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Cr.current=e===null||e.memoizedState===null?Gm:Km,e=n(r,i),Pr){o=0;do{if(Pr=!1,!(25>o))throw Error(_(301));o+=1,X=ne=null,t.updateQueue=null,Cr.current=Ym,e=n(r,i)}while(Pr)}if(Cr.current=eo,t=ne!==null&&ne.next!==null,Or=0,X=ne=V=null,Qi=!1,t)throw Error(_(300));return e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return X===null?V.memoizedState=X=e:X=X.next=e,X}function zt(){if(ne===null){var e=V.alternate;e=e!==null?e.memoizedState:null}else e=ne.next;var t=X===null?V.memoizedState:X.next;if(t!==null)X=t,ne=e;else{if(e===null)throw Error(_(310));ne=e,e={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},X===null?V.memoizedState=X=e:X=X.next=e}return X}function Re(e,t){return typeof t=="function"?t(e):t}function xr(e){var t=zt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=s=o=null,l=i;do{var u=l.lane;if((Or&u)===u)a!==null&&(a=a.next={lane:0,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),r=l.eagerReducer===e?l.eagerState:e(r,l.action);else{var p={lane:u,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(s=a=p,o=r):a=a.next=p,V.lanes|=u,Lr|=u}l=l.next}while(l!==null&&l!==i);a===null?o=r:a.next=s,ge(r,t.memoizedState)||(Ie=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}return[t.memoizedState,n.dispatch]}function Nr(e){var t=zt(),n=t.queue;if(n===null)throw Error(_(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);ge(o,t.memoizedState)||(Ie=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Xc(e,t,n){var r=t._getVersion;r=r(t._source);var i=t._workInProgressVersionPrimary;if(i!==null?e=i===r:(e=e.mutableReadLanes,(e=(Or&e)===e)&&(t._workInProgressVersionPrimary=r,Pn.push(t))),e)return n(t._source);throw Pn.push(t),Error(_(350))}function Jc(e,t,n,r){var i=se;if(i===null)throw Error(_(349));var o=t._getVersion,s=o(t._source),a=Cr.current,l=a.useState(function(){return Xc(i,t,n)}),u=l[1],p=l[0];l=X;var y=e.memoizedState,h=y.refs,w=h.getSnapshot,S=y.source;y=y.subscribe;var E=V;return e.memoizedState={refs:h,source:t,subscribe:r},a.useEffect(function(){h.getSnapshot=n,h.setSnapshot=u;var f=o(t._source);if(!ge(s,f)){f=n(t._source),ge(p,f)||(u(f),f=pt(E),i.mutableReadLanes|=f&i.pendingLanes),f=i.mutableReadLanes,i.entangledLanes|=f;for(var c=i.entanglements,d=f;0<d;){var m=31-rt(d),g=1<<m;c[m]|=f,d&=~g}}},[n,t,r]),a.useEffect(function(){return r(t._source,function(){var f=h.getSnapshot,c=h.setSnapshot;try{c(f(t._source));var d=pt(E);i.mutableReadLanes|=d&i.pendingLanes}catch(m){c(function(){throw m})}})},[t,r]),ge(w,n)&&ge(S,t)&&ge(y,r)||(e={pending:null,dispatch:null,lastRenderedReducer:Re,lastRenderedState:p},e.dispatch=u=va.bind(null,V,e),l.queue=e,l.baseQueue=null,p=Xc(i,t,n),l.memoizedState=l.baseState=p),p}function Zc(e,t,n){var r=zt();return Jc(r,e,t,n)}function Rr(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e=t.queue={pending:null,dispatch:null,lastRenderedReducer:Re,lastRenderedState:e},e=e.dispatch=va.bind(null,V,e),[t.memoizedState,e]}function Xi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=V.updateQueue,t===null?(t={lastEffect:null},V.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ef(e){var t=$t();return e={current:e},t.memoizedState=e}function Ji(){return zt().memoizedState}function ha(e,t,n,r){var i=$t();V.flags|=e,i.memoizedState=Xi(1|t,n,void 0,r===void 0?null:r)}function ma(e,t,n,r){var i=zt();r=r===void 0?null:r;var o=void 0;if(ne!==null){var s=ne.memoizedState;if(o=s.destroy,r!==null&&da(r,s.deps)){Xi(t,n,o,r);return}}V.flags|=e,i.memoizedState=Xi(1|t,n,o,r)}function tf(e,t){return ha(516,4,e,t)}function Zi(e,t){return ma(516,4,e,t)}function nf(e,t){return ma(4,2,e,t)}function rf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function of(e,t,n){return n=n!=null?n.concat([e]):null,ma(4,2,rf.bind(null,t,e),n)}function ga(){}function sf(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function af(e,t){var n=zt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&da(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qm(e,t){var n=In();jt(98>n?98:n,function(){e(!0)}),jt(97<n?97:n,function(){var r=ye.transition;ye.transition=1;try{e(!1),t()}finally{ye.transition=r}})}function va(e,t,n){var r=de(),i=pt(e),o={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},s=t.pending;if(s===null?o.next=o:(o.next=s.next,s.next=o),t.pending=o,s=e.alternate,e===V||s!==null&&s===V)Pr=Qi=!0;else{if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var a=t.lastRenderedState,l=s(a,n);if(o.eagerReducer=s,o.eagerState=l,ge(l,a))return}catch{}finally{}ht(e,i,r)}}var eo={readContext:ve,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useMutableSource:ue,useOpaqueIdentifier:ue,unstable_isNewReconciler:!1},Gm={readContext:ve,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:ve,useEffect:tf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ha(4,2,rf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ha(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e=r.queue={pending:null,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},e=e.dispatch=va.bind(null,V,e),[r.memoizedState,e]},useRef:ef,useState:Rr,useDebugValue:ga,useDeferredValue:function(e){var t=Rr(e),n=t[0],r=t[1];return tf(function(){var i=ye.transition;ye.transition=1;try{r(e)}finally{ye.transition=i}},[e]),n},useTransition:function(){var e=Rr(!1),t=e[0];return e=qm.bind(null,e[1]),ef(e),[e,t]},useMutableSource:function(e,t,n){var r=$t();return r.memoizedState={refs:{getSnapshot:t,setSnapshot:null},source:e,subscribe:n},Jc(r,e,t,n)},useOpaqueIdentifier:function(){if(Ne){var e=!1,t=$m(function(){throw e||(e=!0,n("r:"+(Ys++).toString(36))),Error(_(355))}),n=Rr(t)[1];return(V.mode&2)==0&&(V.flags|=516,Xi(5,function(){n("r:"+(Ys++).toString(36))},void 0,null)),t}return t="r:"+(Ys++).toString(36),Rr(t),t},unstable_isNewReconciler:!1},Km={readContext:ve,useCallback:sf,useContext:ve,useEffect:Zi,useImperativeHandle:of,useLayoutEffect:nf,useMemo:af,useReducer:xr,useRef:Ji,useState:function(){return xr(Re)},useDebugValue:ga,useDeferredValue:function(e){var t=xr(Re),n=t[0],r=t[1];return Zi(function(){var i=ye.transition;ye.transition=1;try{r(e)}finally{ye.transition=i}},[e]),n},useTransition:function(){var e=xr(Re)[0];return[Ji().current,e]},useMutableSource:Zc,useOpaqueIdentifier:function(){return xr(Re)[0]},unstable_isNewReconciler:!1},Ym={readContext:ve,useCallback:sf,useContext:ve,useEffect:Zi,useImperativeHandle:of,useLayoutEffect:nf,useMemo:af,useReducer:Nr,useRef:Ji,useState:function(){return Nr(Re)},useDebugValue:ga,useDeferredValue:function(e){var t=Nr(Re),n=t[0],r=t[1];return Zi(function(){var i=ye.transition;ye.transition=1;try{r(e)}finally{ye.transition=i}},[e]),n},useTransition:function(){var e=Nr(Re)[0];return[Ji().current,e]},useMutableSource:Zc,useOpaqueIdentifier:function(){return Nr(Re)[0]},unstable_isNewReconciler:!1},Qm=Rt.ReactCurrentOwner,Ie=!1;function ce(e,t,n,r){t.child=e===null?qc(t,null,n,r):Gi(t,e.child,n,r)}function lf(e,t,n,r,i){n=n.render;var o=t.ref;return Cn(t,i),r=pa(e,t,n,r,o,i),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ze(e,t,i)):(t.flags|=1,ce(e,t,r,i),t.child)}function uf(e,t,n,r,i,o){if(e===null){var s=n.type;return typeof s=="function"&&!$a(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,cf(e,t,s,r,i,o)):(e=co(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}return s=e.child,(i&o)==0&&(i=s.memoizedProps,n=n.compare,n=n!==null?n:mr,n(i,r)&&e.ref===t.ref)?ze(e,t,o):(t.flags|=1,e=vt(s,r),e.ref=t.ref,e.return=t,t.child=e)}function cf(e,t,n,r,i,o){if(e!==null&&mr(e.memoizedProps,r)&&e.ref===t.ref)if(Ie=!1,(o&i)!=0)(e.flags&16384)!=0&&(Ie=!0);else return t.lanes=e.lanes,ze(e,t,o);return wa(e,t,n,r,o)}function ya(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((t.mode&4)==0)t.memoizedState={baseLanes:0},uo(t,n);else if((n&1073741824)!=0)t.memoizedState={baseLanes:0},uo(t,o!==null?o.baseLanes:n);else return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e},uo(t,e),null;else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,uo(t,r);return ce(e,t,i,n),t.child}function ff(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=128)}function wa(e,t,n,r,i){var o=le(n)?bt:ee.current;return o=kn(t,o),Cn(t,i),n=pa(e,t,n,r,o,i),e!==null&&!Ie?(t.updateQueue=e.updateQueue,t.flags&=-517,e.lanes&=~i,ze(e,t,i)):(t.flags|=1,ce(e,t,n,i),t.child)}function df(e,t,n,r,i){if(le(n)){var o=!0;Ui(t)}else o=!1;if(Cn(t,i),t.stateNode===null)e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),Hc(t,n,r),sa(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,a=t.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ve(u):(u=le(n)?bt:ee.current,u=kn(t,u));var p=n.getDerivedStateFromProps,y=typeof p=="function"||typeof s.getSnapshotBeforeUpdate=="function";y||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Vc(t,s,r,u),lt=!1;var h=t.memoizedState;s.state=h,Er(t,r,s,i),l=t.memoizedState,a!==r||h!==l||ae.current||lt?(typeof p=="function"&&(Hi(t,n,p,r),l=t.memoizedState),(a=lt||Bc(t,n,a,r,h,l,u))?(y||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4)):(typeof s.componentDidMount=="function"&&(t.flags|=4),t.memoizedProps=r,t.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(t.flags|=4),r=!1)}else{s=t.stateNode,jc(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:ke(t.type,a),s.props=u,y=t.pendingProps,h=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ve(l):(l=le(n)?bt:ee.current,l=kn(t,l));var w=n.getDerivedStateFromProps;(p=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==y||h!==l)&&Vc(t,s,r,l),lt=!1,h=t.memoizedState,s.state=h,Er(t,r,s,i);var S=t.memoizedState;a!==y||h!==S||ae.current||lt?(typeof w=="function"&&(Hi(t,n,w,r),S=t.memoizedState),(u=lt||Bc(t,n,u,r,h,S,l))?(p||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,S,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,S,l)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=256)):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),t.memoizedProps=r,t.memoizedState=S),s.props=r,s.state=S,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=256),r=!1)}return _a(e,t,n,r,o,i)}function _a(e,t,n,r,i,o){ff(e,t);var s=(t.flags&64)!=0;if(!r&&!s)return i&&Pc(t,n,!1),ze(e,t,o);r=t.stateNode,Qm.current=t;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=Gi(t,e.child,null,o),t.child=Gi(t,null,a,o)):ce(e,t,a,o),t.memoizedState=r.state,i&&Pc(t,n,!0),t.child}function pf(e){var t=e.stateNode;t.pendingContext?Cc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cc(e,t.context,!1),aa(e,t.containerInfo)}var to={dehydrated:null,retryLane:0};function hf(e,t,n){var r=t.pendingProps,i=z.current,o=!1,s;return(s=(t.flags&64)!=0)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(o=!0,t.flags&=-65):e!==null&&e.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),$(z,i&1),e===null?(r.fallback!==void 0&&ua(t),e=r.children,i=r.fallback,o?(e=mf(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=to,e):typeof r.unstable_expectedLoadTime=="number"?(e=mf(t,e,i,n),t.child.memoizedState={baseLanes:n},t.memoizedState=to,t.lanes=33554432,e):(n=za({mode:"visible",children:e},t.mode,n,null),n.return=t,t.child=n)):e.memoizedState!==null?o?(r=vf(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=to,r):(n=gf(e,t,r.children,n),t.memoizedState=null,n):o?(r=vf(e,t,r.children,r.fallback,n),o=t.child,i=e.child.memoizedState,o.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},o.childLanes=e.childLanes&~n,t.memoizedState=to,r):(n=gf(e,t,r.children,n),t.memoizedState=null,n)}function mf(e,t,n,r){var i=e.mode,o=e.child;return t={mode:"hidden",children:t},(i&2)==0&&o!==null?(o.childLanes=0,o.pendingProps=t):o=za(t,i,0,null),n=Dn(n,i,r,null),o.return=e,n.return=e,o.sibling=n,e.child=o,n}function gf(e,t,n,r){var i=e.child;return e=i.sibling,n=vt(i,{mode:"visible",children:n}),(t.mode&2)==0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(e.nextEffect=null,e.flags=8,t.firstEffect=t.lastEffect=e),t.child=n}function vf(e,t,n,r,i){var o=t.mode,s=e.child;e=s.sibling;var a={mode:"hidden",children:n};return(o&2)==0&&t.child!==s?(n=t.child,n.childLanes=0,n.pendingProps=a,s=n.lastEffect,s!==null?(t.firstEffect=n.firstEffect,t.lastEffect=s,s.nextEffect=null):t.firstEffect=t.lastEffect=null):n=vt(s,a),e!==null?r=vt(e,r):(r=Dn(r,o,i,null),r.flags|=2),r.return=t,n.return=t,n.sibling=r,t.child=n,r}function yf(e,t){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Uc(e.return,t)}function Ea(e,t,n,r,i,o){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:o}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i,s.lastEffect=o)}function wf(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ce(e,t,r.children,n),r=z.current,(r&2)!=0)r=r&1|2,t.flags|=64;else{if(e!==null&&(e.flags&64)!=0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&yf(e,n);else if(e.tag===19)yf(e,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if($(z,r),(t.mode&2)==0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Ki(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ea(t,!1,i,n,o,t.lastEffect);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Ki(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ea(t,!0,n,null,o,t.lastEffect);break;case"together":Ea(t,!1,null,null,void 0,t.lastEffect);break;default:t.memoizedState=null}return t.child}function ze(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Lr|=t.lanes,(n&t.childLanes)!=0){if(e!==null&&t.child!==e.child)throw Error(_(153));if(t.child!==null){for(e=t.child,n=vt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=vt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}return null}var _f,Sa,Ef,Sf;_f=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sa=function(){};Ef=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ft(xe.current);var o=null;switch(n){case"input":i=ss(e,i),r=ss(e,r),o=[];break;case"option":i=us(e,i),r=us(e,r),o=[];break;case"select":i=F({},i,{value:void 0}),r=F({},r,{value:void 0}),o=[];break;case"textarea":i=cs(e,i),r=cs(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ai)}ps(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Gn.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Gn.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&U("scroll",e),o||a===l||(o=[])):typeof l=="object"&&l!==null&&l.$$typeof===ts?l.toString():(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};Sf=function(e,t,n,r){n!==r&&(t.flags|=4)};function Ar(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Xm(e,t,n){var r=t.pendingProps;switch(t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return le(t.type)&&bi(),null;case 3:return On(),j(ae),j(ee),fa(),r=t.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Yi(t)?t.flags|=4:r.hydrate||(t.flags|=256)),Sa(t),null;case 5:la(t);var i=Ft(Tr.current);if(n=t.type,e!==null&&t.stateNode!=null)Ef(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=128);else{if(!r){if(t.stateNode===null)throw Error(_(166));return null}if(e=Ft(xe.current),Yi(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[ot]=t,r[Di]=o,n){case"dialog":U("cancel",r),U("close",r);break;case"iframe":case"object":case"embed":U("load",r);break;case"video":case"audio":for(e=0;e<vr.length;e++)U(vr[e],r);break;case"source":U("error",r);break;case"img":case"image":case"link":U("error",r),U("load",r);break;case"details":U("toggle",r);break;case"input":fu(r,o),U("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},U("invalid",r);break;case"textarea":hu(r,o),U("invalid",r)}ps(n,o),e=null;for(var s in o)o.hasOwnProperty(s)&&(i=o[s],s==="children"?typeof i=="string"?r.textContent!==i&&(e=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(e=["children",""+i]):Gn.hasOwnProperty(s)&&i!=null&&s==="onScroll"&&U("scroll",r));switch(n){case"input":mi(r),pu(r,o,!0);break;case"textarea":mi(r),gu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Ai)}r=e,t.updateQueue=r,r!==null&&(t.flags|=4)}else{switch(s=i.nodeType===9?i:i.ownerDocument,e===fs.html&&(e=vu(n)),e===fs.html?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[ot]=t,e[Di]=r,_f(e,t,!1,!1),t.stateNode=e,s=hs(n,r),n){case"dialog":U("cancel",e),U("close",e),i=r;break;case"iframe":case"object":case"embed":U("load",e),i=r;break;case"video":case"audio":for(i=0;i<vr.length;i++)U(vr[i],e);i=r;break;case"source":U("error",e),i=r;break;case"img":case"image":case"link":U("error",e),U("load",e),i=r;break;case"details":U("toggle",e),i=r;break;case"input":fu(e,r),i=ss(e,r),U("invalid",e);break;case"option":i=us(e,r);break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=F({},r,{value:void 0}),U("invalid",e);break;case"textarea":hu(e,r),i=cs(e,r),U("invalid",e);break;default:i=r}ps(n,i);var a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?_u(e,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yu(e,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Zn(e,l):typeof l=="number"&&Zn(e,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(Gn.hasOwnProperty(o)?l!=null&&o==="onScroll"&&U("scroll",e):l!=null&&Yo(e,o,l,s))}switch(n){case"input":mi(e),pu(e,r,!1);break;case"textarea":mi(e),gu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ze(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?un(e,!!r.multiple,o,!1):r.defaultValue!=null&&un(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Ai)}Ec(n,r)&&(t.flags|=4)}t.ref!==null&&(t.flags|=128)}return null;case 6:if(e&&t.stateNode!=null)Sf(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(_(166));n=Ft(Tr.current),Ft(xe.current),Yi(t)?(r=t.stateNode,n=t.memoizedProps,r[ot]=t,r.nodeValue!==n&&(t.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ot]=t,t.stateNode=r)}return null;case 13:return j(z),r=t.memoizedState,(t.flags&64)!=0?(t.lanes=n,t):(r=r!==null,n=!1,e===null?t.memoizedProps.fallback!==void 0&&Yi(t):n=e.memoizedState!==null,r&&!n&&(t.mode&2)!=0&&(e===null&&t.memoizedProps.unstable_avoidThisFallback!==!0||(z.current&1)!=0?J===0&&(J=3):((J===0||J===3)&&(J=4),se===null||(Lr&134217727)==0&&(Nn&134217727)==0||An(se,re))),(r||n)&&(t.flags|=4),null);case 4:return On(),Sa(t),e===null&&gc(t.stateNode.containerInfo),null;case 10:return ia(t),null;case 17:return le(t.type)&&bi(),null;case 19:if(j(z),r=t.memoizedState,r===null)return null;if(o=(t.flags&64)!=0,s=r.rendering,s===null)if(o)Ar(r,!1);else{if(J!==0||e!==null&&(e.flags&64)!=0)for(e=t.child;e!==null;){if(s=Ki(e),s!==null){for(t.flags|=64,Ar(r,!1),o=s.updateQueue,o!==null&&(t.updateQueue=o,t.flags|=4),r.lastEffect===null&&(t.firstEffect=null),t.lastEffect=r.lastEffect,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=2,o.nextEffect=null,o.firstEffect=null,o.lastEffect=null,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return $(z,z.current&1|2),t.child}e=e.sibling}r.tail!==null&&te()>La&&(t.flags|=64,o=!0,Ar(r,!1),t.lanes=33554432)}else{if(!o)if(e=Ki(s),e!==null){if(t.flags|=64,o=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Ar(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate&&!Ne)return t=t.lastEffect=r.lastEffect,t!==null&&(t.nextEffect=null),null}else 2*te()-r.renderingStartTime>La&&n!==1073741824&&(t.flags|=64,o=!0,Ar(r,!1),t.lanes=33554432);r.isBackwards?(s.sibling=t.child,t.child=s):(n=r.last,n!==null?n.sibling=s:t.child=s,r.last=s)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=t.lastEffect,r.renderingStartTime=te(),n.sibling=null,t=z.current,$(z,o?t&1|2:t&1),n):null;case 23:case 24:return Fa(),e!==null&&e.memoizedState!==null!=(t.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(t.flags|=4),null}throw Error(_(156,t.tag))}function Jm(e){switch(e.tag){case 1:le(e.type)&&bi();var t=e.flags;return t&4096?(e.flags=t&-4097|64,e):null;case 3:if(On(),j(ae),j(ee),fa(),t=e.flags,(t&64)!=0)throw Error(_(285));return e.flags=t&-4097|64,e;case 5:return la(e),null;case 13:return j(z),t=e.flags,t&4096?(e.flags=t&-4097|64,e):null;case 19:return j(z),null;case 4:return On(),null;case 10:return ia(e),null;case 23:case 24:return Fa(),null;default:return null}}function ka(e,t){try{var n="",r=t;do n+=Ah(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i}}function Ia(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Zm=typeof WeakMap=="function"?WeakMap:Map;function kf(e,t,n){n=ut(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){io||(io=!0,Da=r),Ia(e,t)},n}function If(e,t,n){n=ut(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return Ia(e,t),r(i)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Ae===null?Ae=new Set([this]):Ae.add(this),Ia(e,t));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}var eg=typeof WeakSet=="function"?WeakSet:Set;function Tf(e){var t=e.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(n){gt(e,n)}else t.current=null}function tg(e,t){switch(t.tag){case 0:case 11:case 15:case 22:return;case 1:if(t.flags&256&&e!==null){var n=e.memoizedProps,r=e.memoizedState;e=t.stateNode,t=e.getSnapshotBeforeUpdate(t.elementType===t.type?n:ke(t.type,n),r),e.__reactInternalSnapshotBeforeUpdate=t}return;case 3:t.flags&256&&Ks(t.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(_(163))}function ng(e,t,n){switch(n.tag){case 0:case 11:case 15:case 22:if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{if((e.tag&3)==3){var r=e.create;e.destroy=r()}e=e.next}while(e!==t)}if(t=n.updateQueue,t=t!==null?t.lastEffect:null,t!==null){e=t=t.next;do{var i=e;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&($f(n,e),cg(n,e)),e=r}while(e!==t)}return;case 1:e=n.stateNode,n.flags&4&&(t===null?e.componentDidMount():(r=n.elementType===n.type?t.memoizedProps:ke(n.type,t.memoizedProps),e.componentDidUpdate(r,t.memoizedState,e.__reactInternalSnapshotBeforeUpdate))),t=n.updateQueue,t!==null&&$c(n,t,e);return;case 3:if(t=n.updateQueue,t!==null){if(e=null,n.child!==null)switch(n.child.tag){case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}$c(n,t,e)}return;case 5:e=n.stateNode,t===null&&n.flags&4&&Ec(n.type,n.memoizedProps)&&e.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&bu(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(_(163))}function Cf(e,t){for(var n=e;;){if(n.tag===5){var r=n.stateNode;if(t)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=wu("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=t?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function Of(e,t){if(Ut&&typeof Ut.onCommitFiberUnmount=="function")try{Ut.onCommitFiberUnmount(Xs,t)}catch{}switch(t.tag){case 0:case 11:case 14:case 15:case 22:if(e=t.updateQueue,e!==null&&(e=e.lastEffect,e!==null)){var n=e=e.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)$f(t,n);else{r=t;try{i()}catch(o){gt(r,o)}}n=n.next}while(n!==e)}break;case 1:if(Tf(t),e=t.stateNode,typeof e.componentWillUnmount=="function")try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(o){gt(t,o)}break;case 5:Tf(t);break;case 4:Rf(e,t)}}function Pf(e){e.alternate=null,e.child=null,e.dependencies=null,e.firstEffect=null,e.lastEffect=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.return=null,e.updateQueue=null}function xf(e){return e.tag===5||e.tag===3||e.tag===4}function Nf(e){e:{for(var t=e.return;t!==null;){if(xf(t))break e;t=t.return}throw Error(_(160))}var n=t;switch(t=n.stateNode,n.tag){case 5:var r=!1;break;case 3:t=t.containerInfo,r=!0;break;case 4:t=t.containerInfo,r=!0;break;default:throw Error(_(161))}n.flags&16&&(Zn(t,""),n.flags&=-17);e:t:for(n=e;;){for(;n.sibling===null;){if(n.return===null||xf(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Ta(e,n,t):Ca(e,n,t)}function Ta(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ai));else if(r!==4&&(e=e.child,e!==null))for(Ta(e,t,n),e=e.sibling;e!==null;)Ta(e,t,n),e=e.sibling}function Ca(e,t,n){var r=e.tag,i=r===5||r===6;if(i)e=i?e.stateNode:e.stateNode.instance,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ca(e,t,n),e=e.sibling;e!==null;)Ca(e,t,n),e=e.sibling}function Rf(e,t){for(var n=t,r=!1,i,o;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(_(160));switch(i=r.stateNode,r.tag){case 5:o=!1;break e;case 3:i=i.containerInfo,o=!0;break e;case 4:i=i.containerInfo,o=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var s=e,a=n,l=a;;)if(Of(s,l),l.child!==null&&l.tag!==4)l.child.return=l,l=l.child;else{if(l===a)break e;for(;l.sibling===null;){if(l.return===null||l.return===a)break e;l=l.return}l.sibling.return=l.return,l=l.sibling}o?(s=i,a=n.stateNode,s.nodeType===8?s.parentNode.removeChild(a):s.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,o=!0,n.child.return=n,n=n.child;continue}}else if(Of(e,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function Oa(e,t){switch(t.tag){case 0:case 11:case 14:case 15:case 22:var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(e=r.destroy,r.destroy=void 0,e!==void 0&&e()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=t.stateNode,n!=null){r=t.memoizedProps;var i=e!==null?e.memoizedProps:r;e=t.type;var o=t.updateQueue;if(t.updateQueue=null,o!==null){for(n[Di]=r,e==="input"&&r.type==="radio"&&r.name!=null&&du(n,r),hs(e,i),t=hs(e,r),i=0;i<o.length;i+=2){var s=o[i],a=o[i+1];s==="style"?_u(n,a):s==="dangerouslySetInnerHTML"?yu(n,a):s==="children"?Zn(n,a):Yo(n,s,a,t)}switch(e){case"input":as(n,r);break;case"textarea":mu(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,o=r.value,o!=null?un(n,!!r.multiple,o,!1):e!==!!r.multiple&&(r.defaultValue!=null?un(n,!!r.multiple,r.defaultValue,!0):un(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(t.stateNode===null)throw Error(_(162));t.stateNode.nodeValue=t.memoizedProps;return;case 3:n=t.stateNode,n.hydrate&&(n.hydrate=!1,bu(n.containerInfo));return;case 12:return;case 13:t.memoizedState!==null&&(Aa=te(),Cf(t.child,!0)),Af(t);return;case 19:Af(t);return;case 17:return;case 23:case 24:Cf(t,t.memoizedState!==null);return}throw Error(_(163))}function Af(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new eg),t.forEach(function(r){var i=pg.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function rg(e,t){return e!==null&&(e=e.memoizedState,e===null||e.dehydrated!==null)?(t=t.memoizedState,t!==null&&t.dehydrated===null):!1}var ig=Math.ceil,no=Rt.ReactCurrentDispatcher,Pa=Rt.ReactCurrentOwner,x=0,se=null,q=null,re=0,Bt=0,xa=st(0),J=0,ro=null,xn=0,Lr=0,Nn=0,Na=0,Ra=null,Aa=0,La=1/0;function Rn(){La=te()+500}var C=null,io=!1,Da=null,Ae=null,dt=!1,Dr=null,Mr=90,Ma=[],ba=[],Be=null,br=0,Ua=null,oo=-1,He=0,so=0,Ur=null,ao=!1;function de(){return(x&48)!=0?te():oo!==-1?oo:oo=te()}function pt(e){if(e=e.mode,(e&2)==0)return 1;if((e&4)==0)return In()===99?1:2;if(He===0&&(He=xn),Wm.transition!==0){so!==0&&(so=Ra!==null?Ra.pendingLanes:0),e=He;var t=4186112&~so;return t&=-t,t===0&&(e=4186112&~e,t=e&-e,t===0&&(t=8192)),t}return e=In(),(x&4)!=0&&e===98?e=ki(12,He):(e=Kh(e),e=ki(e,He)),e}function ht(e,t,n){if(50<br)throw br=0,Ua=null,Error(_(185));if(e=lo(e,t),e===null)return null;Ii(e,t,n),e===se&&(Nn|=t,J===4&&An(e,re));var r=In();t===1?(x&8)!=0&&(x&48)==0?ja(e):(we(e,n),x===0&&(Rn(),Pe())):((x&4)==0||r!==98&&r!==99||(Be===null?Be=new Set([e]):Be.add(e)),we(e,n)),Ra=e}function lo(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}function we(e,t){for(var n=e.callbackNode,r=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-rt(s),l=1<<a,u=o[a];if(u===-1){if((l&r)==0||(l&i)!=0){u=t,pn(l);var p=M;o[a]=10<=p?u+250:6<=p?u+5e3:-1}}else u<=t&&(e.expiredLanes|=l);s&=~l}if(r=ur(e,e===se?re:0),t=M,r===0)n!==null&&(n!==ta&&Zs(n),e.callbackNode=null,e.callbackPriority=0);else{if(n!==null){if(e.callbackPriority===t)return;n!==ta&&Zs(n)}t===15?(n=ja.bind(null,e),Fe===null?(Fe=[n],Fi=Js(ji,bc)):Fe.push(n),n=ta):t===14?n=_r(99,ja.bind(null,e)):(n=Yh(t),n=_r(n,Lf.bind(null,e))),e.callbackPriority=t,e.callbackNode=n}}function Lf(e){if(oo=-1,so=He=0,(x&48)!=0)throw Error(_(327));var t=e.callbackNode;if(mt()&&e.callbackNode!==t)return null;var n=ur(e,e===se?re:0);if(n===0)return null;var r=n,i=x;x|=16;var o=Uf();(se!==e||re!==r)&&(Rn(),Ln(e,r));do try{ag();break}catch(a){bf(e,a)}while(1);if(ra(),no.current=o,x=i,q!==null?r=0:(se=null,re=0,r=J),(xn&Nn)!=0)Ln(e,0);else if(r!==0){if(r===2&&(x|=64,e.hydrate&&(e.hydrate=!1,Ks(e.containerInfo)),n=Hu(e),n!==0&&(r=jr(e,n))),r===1)throw t=ro,Ln(e,0),An(e,n),we(e,te()),t;switch(e.finishedWork=e.current.alternate,e.finishedLanes=n,r){case 0:case 1:throw Error(_(345));case 2:Ht(e);break;case 3:if(An(e,n),(n&62914560)===n&&(r=Aa+500-te(),10<r)){if(ur(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){de(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Sc(Ht.bind(null,e),r);break}Ht(e);break;case 4:if(An(e,n),(n&4186112)===n)break;for(r=e.eventTimes,i=-1;0<n;){var s=31-rt(n);o=1<<s,s=r[s],s>i&&(i=s),n&=~o}if(n=i,n=te()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*ig(n/1960))-n,10<n){e.timeoutHandle=Sc(Ht.bind(null,e),n);break}Ht(e);break;case 5:Ht(e);break;default:throw Error(_(329))}}return we(e,te()),e.callbackNode===t?Lf.bind(null,e):null}function An(e,t){for(t&=~Na,t&=~Nn,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-rt(t),r=1<<n;e[n]=-1,t&=~r}}function ja(e){if((x&48)!=0)throw Error(_(327));if(mt(),e===se&&(e.expiredLanes&re)!=0){var t=re,n=jr(e,t);(xn&Nn)!=0&&(t=ur(e,t),n=jr(e,t))}else t=ur(e,0),n=jr(e,t);if(e.tag!==0&&n===2&&(x|=64,e.hydrate&&(e.hydrate=!1,Ks(e.containerInfo)),t=Hu(e),t!==0&&(n=jr(e,t))),n===1)throw n=ro,Ln(e,0),An(e,t),we(e,te()),n;return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ht(e),we(e,te()),null}function og(){if(Be!==null){var e=Be;Be=null,e.forEach(function(t){t.expiredLanes|=24&t.pendingLanes,we(t,te())})}Pe()}function Df(e,t){var n=x;x|=1;try{return e(t)}finally{x=n,x===0&&(Rn(),Pe())}}function Mf(e,t){var n=x;x&=-2,x|=8;try{return e(t)}finally{x=n,x===0&&(Rn(),Pe())}}function uo(e,t){$(xa,Bt),Bt|=t,xn|=t}function Fa(){Bt=xa.current,j(xa)}function Ln(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Fm(n)),q!==null)for(n=q.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&bi();break;case 3:On(),j(ae),j(ee),fa();break;case 5:la(r);break;case 4:On();break;case 13:j(z);break;case 19:j(z);break;case 10:ia(r);break;case 23:case 24:Fa()}n=n.return}se=e,q=vt(e.current,null),re=Bt=xn=t,J=0,ro=null,Na=Nn=Lr=0}function bf(e,t){do{var n=q;try{if(ra(),Cr.current=eo,Qi){for(var r=V.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Qi=!1}if(Or=0,X=ne=V=null,Pr=!1,Pa.current=null,n===null||n.return===null){J=1,ro=t,q=null;break}e:{var o=e,s=n.return,a=n,l=t;if(t=re,a.flags|=2048,a.firstEffect=a.lastEffect=null,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l;if((a.mode&2)==0){var p=a.alternate;p?(a.updateQueue=p.updateQueue,a.memoizedState=p.memoizedState,a.lanes=p.lanes):(a.updateQueue=null,a.memoizedState=null)}var y=(z.current&1)!=0,h=s;do{var w;if(w=h.tag===13){var S=h.memoizedState;if(S!==null)w=S.dehydrated!==null;else{var E=h.memoizedProps;w=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!y}}if(w){var f=h.updateQueue;if(f===null){var c=new Set;c.add(u),h.updateQueue=c}else f.add(u);if((h.mode&2)==0){if(h.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var d=ut(-1,1);d.tag=2,ct(a,d)}a.lanes|=1;break e}l=void 0,a=t;var m=o.pingCache;if(m===null?(m=o.pingCache=new Zm,l=new Set,m.set(u,l)):(l=m.get(u),l===void 0&&(l=new Set,m.set(u,l))),!l.has(a)){l.add(a);var g=dg.bind(null,o,u,a);u.then(g,g)}h.flags|=4096,h.lanes=t;break e}h=h.return}while(h!==null);l=Error((ln(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}J!==5&&(J=2),l=ka(l,a),h=s;do{switch(h.tag){case 3:o=l,h.flags|=4096,t&=-t,h.lanes|=t;var T=kf(h,o,t);Fc(h,T);break e;case 1:o=l;var v=h.type,I=h.stateNode;if((h.flags&64)==0&&(typeof v.getDerivedStateFromError=="function"||I!==null&&typeof I.componentDidCatch=="function"&&(Ae===null||!Ae.has(I)))){h.flags|=4096,t&=-t,h.lanes|=t;var P=If(h,o,t);Fc(h,P);break e}}h=h.return}while(h!==null)}Ff(n)}catch(O){t=O,q===n&&n!==null&&(q=n=n.return);continue}break}while(1)}function Uf(){var e=no.current;return no.current=eo,e===null?eo:e}function jr(e,t){var n=x;x|=16;var r=Uf();se===e&&re===t||Ln(e,t);do try{sg();break}catch(i){bf(e,i)}while(1);if(ra(),x=n,no.current=r,q!==null)throw Error(_(261));return se=null,re=0,J}function sg(){for(;q!==null;)jf(q)}function ag(){for(;q!==null&&!Bm();)jf(q)}function jf(e){var t=Bf(e.alternate,e,Bt);e.memoizedProps=e.pendingProps,t===null?Ff(e):q=t,Pa.current=null}function Ff(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&2048)==0){if(n=Xm(n,t,Bt),n!==null){q=n;return}if(n=t,n.tag!==24&&n.tag!==23||n.memoizedState===null||(Bt&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}e!==null&&(e.flags&2048)==0&&(e.firstEffect===null&&(e.firstEffect=t.firstEffect),t.lastEffect!==null&&(e.lastEffect!==null&&(e.lastEffect.nextEffect=t.firstEffect),e.lastEffect=t.lastEffect),1<t.flags&&(e.lastEffect!==null?e.lastEffect.nextEffect=t:e.firstEffect=t,e.lastEffect=t))}else{if(n=Jm(t),n!==null){n.flags&=2047,q=n;return}e!==null&&(e.firstEffect=e.lastEffect=null,e.flags|=2048)}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);J===0&&(J=5)}function Ht(e){var t=In();return jt(99,lg.bind(null,e,t)),null}function lg(e,t){do mt();while(Dr!==null);if((x&48)!=0)throw Error(_(327));var n=e.finishedWork;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(_(177));e.callbackNode=null;var r=n.lanes|n.childLanes,i=r,o=e.pendingLanes&~i;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=i,e.mutableReadLanes&=i,e.entangledLanes&=i,i=e.entanglements;for(var s=e.eventTimes,a=e.expirationTimes;0<o;){var l=31-rt(o),u=1<<l;i[l]=0,s[l]=-1,a[l]=-1,o&=~u}if(Be!==null&&(r&24)==0&&Be.has(e)&&Be.delete(e),e===se&&(q=se=null,re=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=x,x|=32,Pa.current=null,Ws=Ti,s=uc(),zs(s)){if("selectionStart"in s)a={start:s.selectionStart,end:s.selectionEnd};else e:if(a=(a=s.ownerDocument)&&a.defaultView||window,(u=a.getSelection&&a.getSelection())&&u.rangeCount!==0){a=u.anchorNode,o=u.anchorOffset,l=u.focusNode,u=u.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var p=0,y=-1,h=-1,w=0,S=0,E=s,f=null;t:for(;;){for(var c;E!==a||o!==0&&E.nodeType!==3||(y=p+o),E!==l||u!==0&&E.nodeType!==3||(h=p+u),E.nodeType===3&&(p+=E.nodeValue.length),(c=E.firstChild)!==null;)f=E,E=c;for(;;){if(E===s)break t;if(f===a&&++w===o&&(y=p),f===l&&++S===u&&(h=p),(c=E.nextSibling)!==null)break;E=f,f=E.parentNode}E=c}a=y===-1||h===-1?null:{start:y,end:h}}else a=null;a=a||{start:0,end:0}}else a=null;qs={focusedElem:s,selectionRange:a},Ti=!1,Ur=null,ao=!1,C=r;do try{ug()}catch(O){if(C===null)throw Error(_(330));gt(C,O),C=C.nextEffect}while(C!==null);Ur=null,C=r;do try{for(s=e;C!==null;){var d=C.flags;if(d&16&&Zn(C.stateNode,""),d&128){var m=C.alternate;if(m!==null){var g=m.ref;g!==null&&(typeof g=="function"?g(null):g.current=null)}}switch(d&1038){case 2:Nf(C),C.flags&=-3;break;case 6:Nf(C),C.flags&=-3,Oa(C.alternate,C);break;case 1024:C.flags&=-1025;break;case 1028:C.flags&=-1025,Oa(C.alternate,C);break;case 4:Oa(C.alternate,C);break;case 8:a=C,Rf(s,a);var T=a.alternate;Pf(a),T!==null&&Pf(T)}C=C.nextEffect}}catch(O){if(C===null)throw Error(_(330));gt(C,O),C=C.nextEffect}while(C!==null);if(g=qs,m=uc(),d=g.focusedElem,s=g.selectionRange,m!==d&&d&&d.ownerDocument&&lc(d.ownerDocument.documentElement,d)){for(s!==null&&zs(d)&&(m=s.start,g=s.end,g===void 0&&(g=m),"selectionStart"in d?(d.selectionStart=m,d.selectionEnd=Math.min(g,d.value.length)):(g=(m=d.ownerDocument||document)&&m.defaultView||window,g.getSelection&&(g=g.getSelection(),a=d.textContent.length,T=Math.min(s.start,a),s=s.end===void 0?T:Math.min(s.end,a),!g.extend&&T>s&&(a=s,s=T,T=a),a=ac(d,T),o=ac(d,s),a&&o&&(g.rangeCount!==1||g.anchorNode!==a.node||g.anchorOffset!==a.offset||g.focusNode!==o.node||g.focusOffset!==o.offset)&&(m=m.createRange(),m.setStart(a.node,a.offset),g.removeAllRanges(),T>s?(g.addRange(m),g.extend(o.node,o.offset)):(m.setEnd(o.node,o.offset),g.addRange(m)))))),m=[],g=d;g=g.parentNode;)g.nodeType===1&&m.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof d.focus=="function"&&d.focus(),d=0;d<m.length;d++)g=m[d],g.element.scrollLeft=g.left,g.element.scrollTop=g.top}Ti=!!Ws,qs=Ws=null,e.current=n,C=r;do try{for(d=e;C!==null;){var v=C.flags;if(v&36&&ng(d,C.alternate,C),v&128){m=void 0;var I=C.ref;if(I!==null){var P=C.stateNode;switch(C.tag){case 5:m=P;break;default:m=P}typeof I=="function"?I(m):I.current=m}}C=C.nextEffect}}catch(O){if(C===null)throw Error(_(330));gt(C,O),C=C.nextEffect}while(C!==null);C=null,Vm(),x=i}else e.current=n;if(dt)dt=!1,Dr=e,Mr=t;else for(C=r;C!==null;)t=C.nextEffect,C.nextEffect=null,C.flags&8&&(v=C,v.sibling=null,v.stateNode=null),C=t;if(r=e.pendingLanes,r===0&&(Ae=null),r===1?e===Ua?br++:(br=0,Ua=e):br=0,n=n.stateNode,Ut&&typeof Ut.onCommitFiberRoot=="function")try{Ut.onCommitFiberRoot(Xs,n,void 0,(n.current.flags&64)==64)}catch{}if(we(e,te()),io)throw io=!1,e=Da,Da=null,e;return(x&8)!=0||Pe(),null}function ug(){for(;C!==null;){var e=C.alternate;ao||Ur===null||((C.flags&8)!=0?xu(C,Ur)&&(ao=!0):C.tag===13&&rg(e,C)&&xu(C,Ur)&&(ao=!0));var t=C.flags;(t&256)!=0&&tg(e,C),(t&512)==0||dt||(dt=!0,_r(97,function(){return mt(),null})),C=C.nextEffect}}function mt(){if(Mr!==90){var e=97<Mr?97:Mr;return Mr=90,jt(e,fg)}return!1}function cg(e,t){Ma.push(t,e),dt||(dt=!0,_r(97,function(){return mt(),null}))}function $f(e,t){ba.push(t,e),dt||(dt=!0,_r(97,function(){return mt(),null}))}function fg(){if(Dr===null)return!1;var e=Dr;if(Dr=null,(x&48)!=0)throw Error(_(331));var t=x;x|=32;var n=ba;ba=[];for(var r=0;r<n.length;r+=2){var i=n[r],o=n[r+1],s=i.destroy;if(i.destroy=void 0,typeof s=="function")try{s()}catch(l){if(o===null)throw Error(_(330));gt(o,l)}}for(n=Ma,Ma=[],r=0;r<n.length;r+=2){i=n[r],o=n[r+1];try{var a=i.create;i.destroy=a()}catch(l){if(o===null)throw Error(_(330));gt(o,l)}}for(a=e.current.firstEffect;a!==null;)e=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=e;return x=t,Pe(),!0}function zf(e,t,n){t=ka(n,t),t=kf(e,t,1),ct(e,t),t=de(),e=lo(e,1),e!==null&&(Ii(e,1,t),we(e,t))}function gt(e,t){if(e.tag===3)zf(e,e,t);else for(var n=e.return;n!==null;){if(n.tag===3){zf(n,e,t);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r))){e=ka(t,e);var i=If(n,e,1);if(ct(n,i),i=de(),n=lo(n,1),n!==null)Ii(n,1,i),we(n,i);else if(typeof r.componentDidCatch=="function"&&(Ae===null||!Ae.has(r)))try{r.componentDidCatch(t,e)}catch{}break}}n=n.return}}function dg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=de(),e.pingedLanes|=e.suspendedLanes&n,se===e&&(re&n)===n&&(J===4||J===3&&(re&62914560)===re&&500>te()-Aa?Ln(e,0):Na|=n),we(e,t)}function pg(e,t){var n=e.stateNode;n!==null&&n.delete(t),t=0,t===0&&(t=e.mode,(t&2)==0?t=1:(t&4)==0?t=In()===99?1:2:(He===0&&(He=xn),t=hn(62914560&~He),t===0&&(t=4194304))),n=de(),e=lo(e,t),e!==null&&(Ii(e,t,n),we(e,n))}var Bf;Bf=function(e,t,n){var r=t.lanes;if(e!==null)if(e.memoizedProps!==t.pendingProps||ae.current)Ie=!0;else if((n&r)!=0)Ie=(e.flags&16384)!=0;else{switch(Ie=!1,t.tag){case 3:pf(t),ca();break;case 5:Gc(t);break;case 1:le(t.type)&&Ui(t);break;case 4:aa(t,t.stateNode.containerInfo);break;case 10:r=t.memoizedProps.value;var i=t.type._context;$($i,i._currentValue),i._currentValue=r;break;case 13:if(t.memoizedState!==null)return(n&t.child.childLanes)!=0?hf(e,t,n):($(z,z.current&1),t=ze(e,t,n),t!==null?t.sibling:null);$(z,z.current&1);break;case 19:if(r=(n&t.childLanes)!=0,(e.flags&64)!=0){if(r)return wf(e,t,n);t.flags|=64}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),$(z,z.current),r)break;return null;case 23:case 24:return t.lanes=0,ya(e,t,n)}return ze(e,t,n)}else Ie=!1;switch(t.lanes=0,t.tag){case 2:if(r=t.type,e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,i=kn(t,ee.current),Cn(t,n),i=pa(null,t,r,e,i,n),t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(t.tag=1,t.memoizedState=null,t.updateQueue=null,le(r)){var o=!0;Ui(t)}else o=!1;t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,oa(t);var s=r.getDerivedStateFromProps;typeof s=="function"&&Hi(t,r,s,e),i.updater=Vi,t.stateNode=i,i._reactInternals=t,sa(t,r,e,n),t=_a(null,t,r,!0,o,n)}else t.tag=0,ce(null,t,i,n),t=t.child;return t;case 16:i=t.elementType;e:{switch(e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),e=t.pendingProps,o=i._init,i=o(i._payload),t.type=i,o=t.tag=mg(i),e=ke(i,e),o){case 0:t=wa(null,t,i,e,n);break e;case 1:t=df(null,t,i,e,n);break e;case 11:t=lf(null,t,i,e,n);break e;case 14:t=uf(null,t,i,ke(i.type,e),r,n);break e}throw Error(_(306,i,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ke(r,i),wa(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ke(r,i),df(e,t,r,i,n);case 3:if(pf(t),r=t.updateQueue,e===null||r===null)throw Error(_(282));if(r=t.pendingProps,i=t.memoizedState,i=i!==null?i.element:null,jc(e,t),Er(t,r,null,n),r=t.memoizedState.element,r===i)ca(),t=ze(e,t,n);else{if(i=t.stateNode,(o=i.hydrate)&&(ft=wn(t.stateNode.containerInfo.firstChild),$e=t,o=Ne=!0),o){if(e=i.mutableSourceEagerHydrationData,e!=null)for(i=0;i<e.length;i+=2)o=e[i],o._workInProgressVersionPrimary=e[i+1],Pn.push(o);for(n=qc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else ce(e,t,r,n),ca();t=t.child}return t;case 5:return Gc(t),e===null&&ua(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,Gs(r,i)?s=null:o!==null&&Gs(r,o)&&(t.flags|=16),ff(e,t),ce(e,t,s,n),t.child;case 6:return e===null&&ua(t),null;case 13:return hf(e,t,n);case 4:return aa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Gi(t,null,r,n):ce(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ke(r,i),lf(e,t,r,i,n);case 7:return ce(e,t,t.pendingProps,n),t.child;case 8:return ce(e,t,t.pendingProps.children,n),t.child;case 12:return ce(e,t,t.pendingProps.children,n),t.child;case 10:e:{r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value;var a=t.type._context;if($($i,a._currentValue),a._currentValue=o,s!==null)if(a=s.value,o=ge(a,o)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,o):1073741823)|0,o===0){if(s.children===i.children&&!ae.current){t=ze(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){s=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&(u.observedBits&o)!=0){a.tag===1&&(u=ut(-1,n&-n),u.tag=2,ct(a,u)),a.lanes|=n,u=a.alternate,u!==null&&(u.lanes|=n),Uc(a.return,n),l.lanes|=n;break}u=u.next}}else s=a.tag===10&&a.type===t.type?null:a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===t){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}ce(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,o=t.pendingProps,r=o.children,Cn(t,n),i=ve(i,o.unstable_observedBits),r=r(i),t.flags|=1,ce(e,t,r,n),t.child;case 14:return i=t.type,o=ke(i,t.pendingProps),o=ke(i.type,o),uf(e,t,i,o,r,n);case 15:return cf(e,t,t.type,t.pendingProps,r,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ke(r,i),e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2),t.tag=1,le(r)?(e=!0,Ui(t)):e=!1,Cn(t,n),Hc(t,r,i),sa(t,r,i,n),_a(null,t,r,!0,e,n);case 19:return wf(e,t,n);case 23:return ya(e,t,n);case 24:return ya(e,t,n)}throw Error(_(156,t.tag))};function hg(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function _e(e,t,n,r){return new hg(e,t,n,r)}function $a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function mg(e){if(typeof e=="function")return $a(e)?1:0;if(e!=null){if(e=e.$$typeof,e===fi)return 11;if(e===pi)return 14}return 2}function vt(e,t){var n=e.alternate;return n===null?(n=_e(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function co(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")$a(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Je:return Dn(n.children,i,o,t);case au:s=8,i|=16;break;case Qo:s=8,i|=1;break;case Yn:return e=_e(12,n,t,i|8),e.elementType=Yn,e.type=Yn,e.lanes=o,e;case Qn:return e=_e(13,n,t,i),e.type=Qn,e.elementType=Qn,e.lanes=o,e;case di:return e=_e(19,n,t,i),e.elementType=di,e.lanes=o,e;case ns:return za(n,i,o,t);case rs:return e=_e(24,n,t,i),e.elementType=rs,e.lanes=o,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xo:s=10;break e;case Jo:s=9;break e;case fi:s=11;break e;case pi:s=14;break e;case Zo:s=16,r=null;break e;case es:s=22;break e}throw Error(_(130,e==null?e:typeof e,""))}return t=_e(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Dn(e,t,n,r){return e=_e(7,e,r,t),e.lanes=n,e}function za(e,t,n,r){return e=_e(23,e,r,t),e.elementType=ns,e.lanes=n,e}function Ba(e,t,n){return e=_e(6,e,null,t),e.lanes=n,e}function Ha(e,t,n){return t=_e(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function gg(e,t,n){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.mutableSourceEagerHydrationData=null}function vg(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:At,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fo(e,t,n,r){var i=t.current,o=de(),s=pt(i);e:if(n){n=n._reactInternals;t:{if(Dt(n)!==n||n.tag!==1)throw Error(_(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(le(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(_(171))}if(n.tag===1){var l=n.type;if(le(l)){n=Oc(n,l,a);break e}}n=a}else n=at;return t.context===null?t.context=n:t.pendingContext=n,t=ut(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),ct(i,t),ht(i,s,o),s}function Va(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Hf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Wa(e,t){Hf(e,t),(e=e.alternate)&&Hf(e,t)}function yg(){return null}function qa(e,t,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new gg(e,t,n!=null&&n.hydrate===!0),t=_e(3,null,null,t===2?7:t===1?3:0),n.current=t,t.stateNode=n,oa(t),e[_n]=n.current,gc(e.nodeType===8?e.parentNode:e),r)for(e=0;e<r.length;e++){t=r[e];var i=t._getVersion;i=i(t._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[t,i]:n.mutableSourceEagerHydrationData.push(t,i)}this._internalRoot=n}qa.prototype.render=function(e){fo(e,this._internalRoot,null,null)};qa.prototype.unmount=function(){var e=this._internalRoot,t=e.containerInfo;fo(null,e,null,function(){t[_n]=null})};function Fr(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wg(e,t){if(t||(t=e?e.nodeType===9?e.documentElement:e.firstChild:null,t=!(!t||t.nodeType!==1||!t.hasAttribute("data-reactroot"))),!t)for(var n;n=e.lastChild;)e.removeChild(n);return new qa(e,0,t?{hydrate:!0}:void 0)}function po(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Va(s);a.call(u)}}fo(t,s,e,i)}else{if(o=n._reactRootContainer=wg(n,r),s=o._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Va(s);l.call(u)}}Mf(function(){fo(t,s,e,i)})}return Va(s)}Nu=function(e){if(e.tag===13){var t=de();ht(e,4,t),Wa(e,4)}};ks=function(e){if(e.tag===13){var t=de();ht(e,67108864,t),Wa(e,67108864)}};Ru=function(e){if(e.tag===13){var t=de(),n=pt(e);ht(e,n,t),Wa(e,n)}};Au=function(e,t){return t()};gs=function(e,t,n){switch(t){case"input":if(as(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Mi(r);if(!i)throw Error(_(90));cu(r),as(r,i)}}}break;case"textarea":mu(e,n);break;case"select":t=n.value,t!=null&&un(e,!!n.multiple,t,!1)}};vs=Df;Iu=function(e,t,n,r,i){var o=x;x|=4;try{return jt(98,e.bind(null,t,n,r,i))}finally{x=o,x===0&&(Rn(),Pe())}};ys=function(){(x&49)==0&&(og(),mt())};Tu=function(e,t){var n=x;x|=2;try{return e(t)}finally{x=n,x===0&&(Rn(),Pe())}};function Vf(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fr(t))throw Error(_(200));return vg(e,t,null,n)}var _g={Events:[wr,En,Mi,Su,ku,mt,{current:!1}]},$r={findFiberByHostInstance:Mt,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},Eg={bundleType:$r.bundleType,version:$r.version,rendererPackageName:$r.rendererPackageName,rendererConfig:$r.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Rt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pu(e),e===null?null:e.stateNode},findFiberByHostInstance:$r.findFiberByHostInstance||yg,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ho=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ho.isDisabled&&ho.supportsFiber)try{Xs=ho.inject(Eg),Ut=ho}catch{}}me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=_g;me.createPortal=Vf;me.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(_(188)):Error(_(268,Object.keys(e)));return e=Pu(t),e=e===null?null:e.stateNode,e};me.flushSync=function(e,t){var n=x;if((n&48)!=0)return e(t);x|=1;try{if(e)return jt(99,e.bind(null,t))}finally{x=n,Pe()}};me.hydrate=function(e,t,n){if(!Fr(t))throw Error(_(200));return po(null,e,t,!0,n)};me.render=function(e,t,n){if(!Fr(t))throw Error(_(200));return po(null,e,t,!1,n)};me.unmountComponentAtNode=function(e){if(!Fr(e))throw Error(_(40));return e._reactRootContainer?(Mf(function(){po(null,null,e,!1,function(){e._reactRootContainer=null,e[_n]=null})}),!0):!1};me.unstable_batchedUpdates=Df;me.unstable_createPortal=function(e,t){return Vf(e,t,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};me.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Fr(n))throw Error(_(200));if(e==null||e._reactInternals===void 0)throw Error(_(38));return po(e,t,n,!1,r)};me.version="17.0.2";function Wf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Wf)}catch(e){console.error(e)}}Wf(),eu.exports=me;var Ga=eu.exports;function zr(){return zr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zr.apply(this,arguments)}var Vt,Ka=Vt||(Vt={});Ka.Pop="POP";Ka.Push="PUSH";Ka.Replace="REPLACE";var qf=function(e){return e};function Gf(e){e.preventDefault(),e.returnValue=""}function Kf(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter(function(n){return n!==t})}},call:function(t){e.forEach(function(n){return n&&n(t)})}}}function Sg(){return Math.random().toString(36).substr(2,8)}function Ya(e){var t=e.pathname;t=t===void 0?"/":t;var n=e.search;return n=n===void 0?"":n,e=e.hash,e=e===void 0?"":e,n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),e&&e!=="#"&&(t+=e.charAt(0)==="#"?e:"#"+e),t}function Wt(e){var t={};if(e){var n=e.indexOf("#");0<=n&&(t.hash=e.substr(n),e=e.substr(0,n)),n=e.indexOf("?"),0<=n&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function kg(e){function t(){var f=l.location,c=u.state||{};return[c.idx,qf({pathname:f.pathname,search:f.search,hash:f.hash,state:c.usr||null,key:c.key||"default"})]}function n(f){return typeof f=="string"?f:Ya(f)}function r(f,c){return c===void 0&&(c=null),qf(zr({pathname:w.pathname,hash:"",search:""},typeof f=="string"?Wt(f):f,{state:c,key:Sg()}))}function i(f){y=f,f=t(),h=f[0],w=f[1],S.call({action:y,location:w})}function o(f,c){function d(){o(f,c)}var m=Vt.Push,g=r(f,c);if(!E.length||(E.call({action:m,location:g,retry:d}),!1)){var T=[{usr:g.state,key:g.key,idx:h+1},n(g)];g=T[0],T=T[1];try{u.pushState(g,"",T)}catch{l.location.assign(T)}i(m)}}function s(f,c){function d(){s(f,c)}var m=Vt.Replace,g=r(f,c);E.length&&(E.call({action:m,location:g,retry:d}),1)||(g=[{usr:g.state,key:g.key,idx:h},n(g)],u.replaceState(g[0],"",g[1]),i(m))}function a(f){u.go(f)}e===void 0&&(e={}),e=e.window;var l=e===void 0?document.defaultView:e,u=l.history,p=null;l.addEventListener("popstate",function(){if(p)E.call(p),p=null;else{var f=Vt.Pop,c=t(),d=c[0];if(c=c[1],E.length){if(d!=null){var m=h-d;m&&(p={action:f,location:c,retry:function(){a(-1*m)}},a(m))}}else i(f)}});var y=Vt.Pop;e=t();var h=e[0],w=e[1],S=Kf(),E=Kf();return h==null&&(h=0,u.replaceState(zr({},u.state,{idx:h}),"")),{get action(){return y},get location(){return w},createHref:n,push:o,replace:s,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(f){return S.push(f)},block:function(f){var c=E.push(f);return E.length===1&&l.addEventListener("beforeunload",Gf),function(){c(),E.length||l.removeEventListener("beforeunload",Gf)}}}}/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(e,t){if(!e)throw new Error(t)}const Qa=A.exports.createContext(null),Xa=A.exports.createContext(null),Br=A.exports.createContext({outlet:null,matches:[]});function UE(e){let{to:t,replace:n,state:r}=e;Mn()||Te(!1);let i=Yf();return A.exports.useEffect(()=>{i(t,{replace:n,state:r})}),null}function Ig(e){return xg(e.context)}function Tg(e){Te(!1)}function Cg(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Vt.Pop,navigator:o,static:s=!1}=e;Mn()&&Te(!1);let a=Yg(t),l=A.exports.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=Wt(r));let{pathname:u="/",search:p="",hash:y="",state:h=null,key:w="default"}=r,S=A.exports.useMemo(()=>{let E=Zf(u,a);return E==null?null:{pathname:E,search:p,hash:y,state:h,key:w}},[a,u,p,y,h,w]);return S==null?null:A.exports.createElement(Qa.Provider,{value:l},A.exports.createElement(Xa.Provider,{children:n,value:{location:S,navigationType:i}}))}function jE(e){let{children:t,location:n}=e;return Ng(Za(t),n)}function Og(e){Mn()||Te(!1);let{basename:t,navigator:n}=A.exports.useContext(Qa),{hash:r,pathname:i,search:o}=Ja(e),s=i;if(t!=="/"){let a=Kg(e),l=a!=null&&a.endsWith("/");s=i==="/"?t+(l?"/":""):yt([t,i])}return n.createHref({pathname:s,search:o,hash:r})}function Mn(){return A.exports.useContext(Xa)!=null}function Hr(){return Mn()||Te(!1),A.exports.useContext(Xa).location}function Yf(){Mn()||Te(!1);let{basename:e,navigator:t}=A.exports.useContext(Qa),{matches:n}=A.exports.useContext(Br),{pathname:r}=Hr(),i=JSON.stringify(n.map(a=>a.pathnameBase)),o=A.exports.useRef(!1);return A.exports.useEffect(()=>{o.current=!0}),A.exports.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){t.go(a);return}let u=Jf(a,JSON.parse(i),r);e!=="/"&&(u.pathname=yt([e,u.pathname])),(l.replace?t.replace:t.push)(u,l.state)},[e,t,i,r])}const Pg=A.exports.createContext(null);function xg(e){let t=A.exports.useContext(Br).outlet;return t&&A.exports.createElement(Pg.Provider,{value:e},t)}function Ja(e){let{matches:t}=A.exports.useContext(Br),{pathname:n}=Hr(),r=JSON.stringify(t.map(i=>i.pathnameBase));return A.exports.useMemo(()=>Jf(e,JSON.parse(r),n),[e,r,n])}function Ng(e,t){Mn()||Te(!1);let{matches:n}=A.exports.useContext(Br),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let o=r?r.pathnameBase:"/";r&&r.route;let s=Hr(),a;if(t){var l;let h=typeof t=="string"?Wt(t):t;o==="/"||((l=h.pathname)==null?void 0:l.startsWith(o))||Te(!1),a=h}else a=s;let u=a.pathname||"/",p=o==="/"?u:u.slice(o.length)||"/",y=Rg(e,{pathname:p});return Bg(y&&y.map(h=>Object.assign({},h,{params:Object.assign({},i,h.params),pathname:yt([o,h.pathname]),pathnameBase:h.pathnameBase==="/"?o:yt([o,h.pathnameBase])})),n)}function Za(e){let t=[];return A.exports.Children.forEach(e,n=>{if(!A.exports.isValidElement(n))return;if(n.type===A.exports.Fragment){t.push.apply(t,Za(n.props.children));return}n.type!==Tg&&Te(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Za(n.props.children)),t.push(r)}),t}function Rg(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Wt(t):t,i=Zf(r.pathname||"/",n);if(i==null)return null;let o=Qf(e);Ag(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=zg(o[a],i);return s}function Qf(e,t,n,r){return t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=""),e.forEach((i,o)=>{let s={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};s.relativePath.startsWith("/")&&(s.relativePath.startsWith(r)||Te(!1),s.relativePath=s.relativePath.slice(r.length));let a=yt([r,s.relativePath]),l=n.concat(s);i.children&&i.children.length>0&&(i.index===!0&&Te(!1),Qf(i.children,t,l,a)),!(i.path==null&&!i.index)&&t.push({path:a,score:Fg(a,i.index),routesMeta:l})}),t}function Ag(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:$g(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lg=/^:\w+$/,Dg=3,Mg=2,bg=1,Ug=10,jg=-2,Xf=e=>e==="*";function Fg(e,t){let n=e.split("/"),r=n.length;return n.some(Xf)&&(r+=jg),t&&(r+=Mg),n.filter(i=>!Xf(i)).reduce((i,o)=>i+(Lg.test(o)?Dg:o===""?bg:Ug),r)}function $g(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function zg(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",p=Hg({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!p)return null;Object.assign(r,p.params);let y=a.route;o.push({params:r,pathname:yt([i,p.pathname]),pathnameBase:yt([i,p.pathnameBase]),route:y}),p.pathnameBase!=="/"&&(i=yt([i,p.pathnameBase]))}return o}function Bg(e,t){return t===void 0&&(t=[]),e==null?null:e.reduceRight((n,r,i)=>A.exports.createElement(Br.Provider,{children:r.route.element!==void 0?r.route.element:A.exports.createElement(Ig,null),value:{outlet:n,matches:t.concat(e.slice(0,i+1))}}),null)}function Hg(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vg(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,p,y)=>{if(p==="*"){let h=a[y]||"";s=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[p]=Wg(a[y]||""),u},{}),pathname:o,pathnameBase:s,pattern:e}}function Vg(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(s,a)=>(r.push(a),"([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)",[new RegExp(i,t?void 0:"i"),r]}function Wg(e,t){try{return decodeURIComponent(e)}catch{return e}}function qg(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Wt(e):e;return{pathname:n?n.startsWith("/")?n:Gg(n,t):t,search:Qg(r),hash:Xg(i)}}function Gg(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Jf(e,t,n){let r=typeof e=="string"?Wt(e):e,i=e===""||r.pathname===""?"/":r.pathname,o;if(i==null)o=n;else{let a=t.length-1;if(i.startsWith("..")){let l=i.split("/");for(;l[0]==="..";)l.shift(),a-=1;r.pathname=l.join("/")}o=a>=0?t[a]:"/"}let s=qg(r,o);return i&&i!=="/"&&i.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/"),s}function Kg(e){return e===""||e.pathname===""?"/":typeof e=="string"?Wt(e).pathname:e.pathname}function Zf(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&n!=="/"?null:e.slice(t.length)||"/"}const yt=e=>e.join("/").replace(/\/\/+/g,"/"),Yg=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qg=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Xg=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function mo(){return mo=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},mo.apply(this,arguments)}function ed(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const Jg=["onClick","reloadDocument","replace","state","target","to"],Zg=["aria-current","caseSensitive","className","end","style","to","children"];function FE(e){let{basename:t,children:n,window:r}=e,i=A.exports.useRef();i.current==null&&(i.current=kg({window:r}));let o=i.current,[s,a]=A.exports.useState({action:o.action,location:o.location});return A.exports.useLayoutEffect(()=>o.listen(a),[o]),A.exports.createElement(Cg,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o})}function ev(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}const tv=A.exports.forwardRef(function(t,n){let{onClick:r,reloadDocument:i,replace:o=!1,state:s,target:a,to:l}=t,u=ed(t,Jg),p=Og(l),y=nv(l,{replace:o,state:s,target:a});function h(w){r&&r(w),!w.defaultPrevented&&!i&&y(w)}return A.exports.createElement("a",mo({},u,{href:p,onClick:h,ref:n,target:a}))}),$E=A.exports.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:a,to:l,children:u}=t,p=ed(t,Zg),y=Hr(),h=Ja(l),w=y.pathname,S=h.pathname;i||(w=w.toLowerCase(),S=S.toLowerCase());let E=w===S||!s&&w.startsWith(S)&&w.charAt(S.length)==="/",f=E?r:void 0,c;typeof o=="function"?c=o({isActive:E}):c=[o,E?"active":null].filter(Boolean).join(" ");let d=typeof a=="function"?a({isActive:E}):a;return A.exports.createElement(tv,mo({},p,{"aria-current":f,className:c,ref:n,style:d,to:l}),typeof u=="function"?u({isActive:E}):u)});function nv(e,t){let{target:n,replace:r,state:i}=t===void 0?{}:t,o=Yf(),s=Hr(),a=Ja(e);return A.exports.useCallback(l=>{if(l.button===0&&(!n||n==="_self")&&!ev(l)){l.preventDefault();let u=!!r||Ya(s)===Ya(a);o(e,{replace:u,state:i})}},[s,o,a,r,i,n,e])}var td="Expected a function",nd=0/0,rv="[object Symbol]",iv=/^\s+|\s+$/g,ov=/^[-+]0x[0-9a-f]+$/i,sv=/^0b[01]+$/i,av=/^0o[0-7]+$/i,lv=parseInt,uv=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,cv=typeof self=="object"&&self&&self.Object===Object&&self,fv=uv||cv||Function("return this")(),dv=Object.prototype,pv=dv.toString,hv=Math.max,mv=Math.min,el=function(){return fv.Date.now()};function gv(e,t,n){var r,i,o,s,a,l,u=0,p=!1,y=!1,h=!0;if(typeof e!="function")throw new TypeError(td);t=rd(t)||0,go(n)&&(p=!!n.leading,y="maxWait"in n,o=y?hv(rd(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function w(v){var I=r,P=i;return r=i=void 0,u=v,s=e.apply(P,I),s}function S(v){return u=v,a=setTimeout(c,t),p?w(v):s}function E(v){var I=v-l,P=v-u,O=t-I;return y?mv(O,o-P):O}function f(v){var I=v-l,P=v-u;return l===void 0||I>=t||I<0||y&&P>=o}function c(){var v=el();if(f(v))return d(v);a=setTimeout(c,E(v))}function d(v){return a=void 0,h&&r?w(v):(r=i=void 0,s)}function m(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function g(){return a===void 0?s:d(el())}function T(){var v=el(),I=f(v);if(r=arguments,i=this,l=v,I){if(a===void 0)return S(l);if(y)return a=setTimeout(c,t),w(l)}return a===void 0&&(a=setTimeout(c,t)),s}return T.cancel=m,T.flush=g,T}function vv(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(td);return go(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),gv(e,t,{leading:r,maxWait:t,trailing:i})}function go(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function yv(e){return!!e&&typeof e=="object"}function wv(e){return typeof e=="symbol"||yv(e)&&pv.call(e)==rv}function rd(e){if(typeof e=="number")return e;if(wv(e))return nd;if(go(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=go(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(iv,"");var n=sv.test(e);return n||av.test(e)?lv(e.slice(2),n?2:8):ov.test(e)?nd:+e}var _v=vv,Ev="Expected a function",id=0/0,Sv="[object Symbol]",kv=/^\s+|\s+$/g,Iv=/^[-+]0x[0-9a-f]+$/i,Tv=/^0b[01]+$/i,Cv=/^0o[0-7]+$/i,Ov=parseInt,Pv=typeof Xe=="object"&&Xe&&Xe.Object===Object&&Xe,xv=typeof self=="object"&&self&&self.Object===Object&&self,Nv=Pv||xv||Function("return this")(),Rv=Object.prototype,Av=Rv.toString,Lv=Math.max,Dv=Math.min,tl=function(){return Nv.Date.now()};function Mv(e,t,n){var r,i,o,s,a,l,u=0,p=!1,y=!1,h=!0;if(typeof e!="function")throw new TypeError(Ev);t=od(t)||0,nl(n)&&(p=!!n.leading,y="maxWait"in n,o=y?Lv(od(n.maxWait)||0,t):o,h="trailing"in n?!!n.trailing:h);function w(v){var I=r,P=i;return r=i=void 0,u=v,s=e.apply(P,I),s}function S(v){return u=v,a=setTimeout(c,t),p?w(v):s}function E(v){var I=v-l,P=v-u,O=t-I;return y?Dv(O,o-P):O}function f(v){var I=v-l,P=v-u;return l===void 0||I>=t||I<0||y&&P>=o}function c(){var v=tl();if(f(v))return d(v);a=setTimeout(c,E(v))}function d(v){return a=void 0,h&&r?w(v):(r=i=void 0,s)}function m(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function g(){return a===void 0?s:d(tl())}function T(){var v=tl(),I=f(v);if(r=arguments,i=this,l=v,I){if(a===void 0)return S(l);if(y)return a=setTimeout(c,t),w(l)}return a===void 0&&(a=setTimeout(c,t)),s}return T.cancel=m,T.flush=g,T}function nl(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}function bv(e){return!!e&&typeof e=="object"}function Uv(e){return typeof e=="symbol"||bv(e)&&Av.call(e)==Sv}function od(e){if(typeof e=="number")return e;if(Uv(e))return id;if(nl(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=nl(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=e.replace(kv,"");var n=Tv.test(e);return n||Cv.test(e)?Ov(e.slice(2),n?2:8):Iv.test(e)?id:+e}var sd=Mv,ad=function(){};function ld(e){var t=void 0,n=void 0,r=void 0;for(t=0;t<e.length;t+=1)if(n=e[t],n.dataset&&n.dataset.aos||(r=n.children&&ld(n.children),r))return!0;return!1}function jv(e){!e||e.forEach(function(t){var n=Array.prototype.slice.call(t.addedNodes),r=Array.prototype.slice.call(t.removedNodes),i=n.concat(r);if(ld(i))return ad()})}function ud(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function Fv(){return!!ud()}function $v(e,t){var n=window.document,r=ud(),i=new r(jv);ad=t,i.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var cd={isSupported:Fv,ready:$v},zv=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Bv=function(){function e(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Hv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Vv=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Wv=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,qv=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,Gv=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function fd(){return navigator.userAgent||navigator.vendor||window.opera||""}var Kv=function(){function e(){zv(this,e)}return Bv(e,[{key:"phone",value:function(){var n=fd();return!!(Vv.test(n)||Wv.test(n.substr(0,4)))}},{key:"mobile",value:function(){var n=fd();return!!(qv.test(n)||Gv.test(n.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}(),vo=new Kv,Yv=function(t,n){return n&&n.forEach(function(r){return t.classList.add(r)})},Qv=function(t,n){return n&&n.forEach(function(r){return t.classList.remove(r)})},yo=function(t,n){var r=void 0;return vo.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(t,!0,!0,{detail:n})):r=new CustomEvent(t,{detail:n}),document.dispatchEvent(r)},Xv=function(t,n){var r=t.options,i=t.position,o=t.node;t.data;var s=function(){!t.animated||(Qv(o,r.animatedClassNames),yo("aos:out",o),t.options.id&&yo("aos:in:"+t.options.id,o),t.animated=!1)},a=function(){t.animated||(Yv(o,r.animatedClassNames),yo("aos:in",o),t.options.id&&yo("aos:in:"+t.options.id,o),t.animated=!0)};r.mirror&&n>=i.out&&!r.once?s():n>=i.in?a():t.animated&&!r.once&&s()},dd=function(t){return t.forEach(function(n,r){return Xv(n,window.pageYOffset)})},pd=function(t){for(var n=0,r=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-(t.tagName!="BODY"?t.scrollLeft:0),r+=t.offsetTop-(t.tagName!="BODY"?t.scrollTop:0),t=t.offsetParent;return{top:r,left:n}},wt=function(e,t,n){var r=e.getAttribute("data-aos-"+t);if(typeof r!="undefined"){if(r==="true")return!0;if(r==="false")return!1}return r||n},Jv=function(t,n,r){var i=window.innerHeight,o=wt(t,"anchor"),s=wt(t,"anchor-placement"),a=Number(wt(t,"offset",s?0:n)),l=s||r,u=t;o&&document.querySelectorAll(o)&&(u=document.querySelectorAll(o)[0]);var p=pd(u).top-i;switch(l){case"top-bottom":break;case"center-bottom":p+=u.offsetHeight/2;break;case"bottom-bottom":p+=u.offsetHeight;break;case"top-center":p+=i/2;break;case"center-center":p+=i/2+u.offsetHeight/2;break;case"bottom-center":p+=i/2+u.offsetHeight;break;case"top-top":p+=i;break;case"bottom-top":p+=i+u.offsetHeight;break;case"center-top":p+=i+u.offsetHeight/2;break}return p+a},Zv=function(t,n){var r=wt(t,"anchor"),i=wt(t,"offset",n),o=t;r&&document.querySelectorAll(r)&&(o=document.querySelectorAll(r)[0]);var s=pd(o).top;return s+o.offsetHeight-i},ey=function(t,n){return t.forEach(function(r,i){var o=wt(r.node,"mirror",n.mirror),s=wt(r.node,"once",n.once),a=wt(r.node,"id"),l=n.useClassNames&&r.node.getAttribute("data-aos"),u=[n.animatedClassName].concat(l?l.split(" "):[]).filter(function(p){return typeof p=="string"});n.initClassName&&r.node.classList.add(n.initClassName),r.position={in:Jv(r.node,n.offset,n.anchorPlacement),out:o&&Zv(r.node,n.offset)},r.options={once:s,mirror:o,animatedClassNames:u,id:a}}),t},hd=function(){var e=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(e,function(t){return{node:t}})},Ve=[],md=!1,B={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},gd=function(){return document.all&&!window.atob},ty=function(){return Ve=ey(Ve,B),dd(Ve),window.addEventListener("scroll",_v(function(){dd(Ve,B.once)},B.throttleDelay)),Ve},qt=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;t&&(md=!0),md&&ty()},vd=function(){if(Ve=hd(),wd(B.disable)||gd())return yd();qt()},yd=function(){Ve.forEach(function(t,n){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),B.initClassName&&t.node.classList.remove(B.initClassName),B.animatedClassName&&t.node.classList.remove(B.animatedClassName)})},wd=function(t){return t===!0||t==="mobile"&&vo.mobile()||t==="phone"&&vo.phone()||t==="tablet"&&vo.tablet()||typeof t=="function"&&t()===!0},ny=function(t){return B=Hv(B,t),Ve=hd(),!B.disableMutationObserver&&!cd.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),B.disableMutationObserver=!0),B.disableMutationObserver||cd.ready("[data-aos]",vd),wd(B.disable)||gd()?yd():(document.querySelector("body").setAttribute("data-aos-easing",B.easing),document.querySelector("body").setAttribute("data-aos-duration",B.duration),document.querySelector("body").setAttribute("data-aos-delay",B.delay),["DOMContentLoaded","load"].indexOf(B.startEvent)===-1?document.addEventListener(B.startEvent,function(){qt(!0)}):window.addEventListener("load",function(){qt(!0)}),B.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&qt(!0),window.addEventListener("resize",sd(qt,B.debounceDelay,!0)),window.addEventListener("orientationchange",sd(qt,B.debounceDelay,!0)),Ve)},zE={init:ny,refresh:qt,refreshHard:vd};function _d(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function rl(e,t){return rl=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},rl(e,t)}function Ed(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,rl(e,t)}var Sd={exports:{}},ry="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",iy=ry,oy=iy;function kd(){}function Id(){}Id.resetWarningCache=kd;var sy=function(){function e(r,i,o,s,a,l){if(l!==oy){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Id,resetWarningCache:kd};return n.PropTypes=n,n};Sd.exports=sy();var BE=Sd.exports;function ay(e,t){return e.classList?!!t&&e.classList.contains(t):(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")!==-1}function ly(e,t){e.classList?e.classList.add(t):ay(e,t)||(typeof e.className=="string"?e.className=e.className+" "+t:e.setAttribute("class",(e.className&&e.className.baseVal||"")+" "+t))}function Td(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function uy(e,t){e.classList?e.classList.remove(t):typeof e.className=="string"?e.className=Td(e.className,t):e.setAttribute("class",Td(e.className&&e.className.baseVal||"",t))}var Cd={disabled:!1},Od=xt.createContext(null),Vr="unmounted",Gt="exited",Kt="entering",bn="entered",il="exiting",We=function(e){Ed(t,e);function t(r,i){var o;o=e.call(this,r,i)||this;var s=i,a=s&&!s.isMounting?r.enter:r.appear,l;return o.appearStatus=null,r.in?a?(l=Gt,o.appearStatus=Kt):l=bn:r.unmountOnExit||r.mountOnEnter?l=Vr:l=Gt,o.state={status:l},o.nextCallback=null,o}t.getDerivedStateFromProps=function(i,o){var s=i.in;return s&&o.status===Vr?{status:Gt}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var o=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==Kt&&s!==bn&&(o=Kt):(s===Kt||s===bn)&&(o=il)}this.updateStatus(!1,o)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,o,s,a;return o=s=a=i,i!=null&&typeof i!="number"&&(o=i.exit,s=i.enter,a=i.appear!==void 0?i.appear:s),{exit:o,enter:s,appear:a}},n.updateStatus=function(i,o){i===void 0&&(i=!1),o!==null?(this.cancelNextCallback(),o===Kt?this.performEnter(i):this.performExit()):this.props.unmountOnExit&&this.state.status===Gt&&this.setState({status:Vr})},n.performEnter=function(i){var o=this,s=this.props.enter,a=this.context?this.context.isMounting:i,l=this.props.nodeRef?[a]:[Ga.findDOMNode(this),a],u=l[0],p=l[1],y=this.getTimeouts(),h=a?y.appear:y.enter;if(!i&&!s||Cd.disabled){this.safeSetState({status:bn},function(){o.props.onEntered(u)});return}this.props.onEnter(u,p),this.safeSetState({status:Kt},function(){o.props.onEntering(u,p),o.onTransitionEnd(h,function(){o.safeSetState({status:bn},function(){o.props.onEntered(u,p)})})})},n.performExit=function(){var i=this,o=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:Ga.findDOMNode(this);if(!o||Cd.disabled){this.safeSetState({status:Gt},function(){i.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:il},function(){i.props.onExiting(a),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:Gt},function(){i.props.onExited(a)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,o){o=this.setNextCallback(o),this.setState(i,o)},n.setNextCallback=function(i){var o=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,o.nextCallback=null,i(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,o){this.setNextCallback(o);var s=this.props.nodeRef?this.props.nodeRef.current:Ga.findDOMNode(this),a=i==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=l[0],p=l[1];this.props.addEndListener(u,p)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===Vr)return null;var o=this.props,s=o.children;o.in,o.mountOnEnter,o.unmountOnExit,o.appear,o.enter,o.exit,o.timeout,o.addEndListener,o.onEnter,o.onEntering,o.onEntered,o.onExit,o.onExiting,o.onExited,o.nodeRef;var a=_d(o,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return xt.createElement(Od.Provider,{value:null},typeof s=="function"?s(i,a):xt.cloneElement(xt.Children.only(s),a))},t}(xt.Component);We.contextType=Od;We.propTypes={};function Un(){}We.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:Un,onEntering:Un,onEntered:Un,onExit:Un,onExiting:Un,onExited:Un};We.UNMOUNTED=Vr;We.EXITED=Gt;We.ENTERING=Kt;We.ENTERED=bn;We.EXITING=il;var cy=We,fy=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return ly(t,r)})},ol=function(t,n){return t&&n&&n.split(" ").forEach(function(r){return uy(t,r)})},sl=function(e){Ed(t,e);function t(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return r=e.call.apply(e,[this].concat(o))||this,r.appliedClasses={appear:{},enter:{},exit:{}},r.onEnter=function(a,l){var u=r.resolveArguments(a,l),p=u[0],y=u[1];r.removeClasses(p,"exit"),r.addClass(p,y?"appear":"enter","base"),r.props.onEnter&&r.props.onEnter(a,l)},r.onEntering=function(a,l){var u=r.resolveArguments(a,l),p=u[0],y=u[1],h=y?"appear":"enter";r.addClass(p,h,"active"),r.props.onEntering&&r.props.onEntering(a,l)},r.onEntered=function(a,l){var u=r.resolveArguments(a,l),p=u[0],y=u[1],h=y?"appear":"enter";r.removeClasses(p,h),r.addClass(p,h,"done"),r.props.onEntered&&r.props.onEntered(a,l)},r.onExit=function(a){var l=r.resolveArguments(a),u=l[0];r.removeClasses(u,"appear"),r.removeClasses(u,"enter"),r.addClass(u,"exit","base"),r.props.onExit&&r.props.onExit(a)},r.onExiting=function(a){var l=r.resolveArguments(a),u=l[0];r.addClass(u,"exit","active"),r.props.onExiting&&r.props.onExiting(a)},r.onExited=function(a){var l=r.resolveArguments(a),u=l[0];r.removeClasses(u,"exit"),r.addClass(u,"exit","done"),r.props.onExited&&r.props.onExited(a)},r.resolveArguments=function(a,l){return r.props.nodeRef?[r.props.nodeRef.current,a]:[a,l]},r.getClassNames=function(a){var l=r.props.classNames,u=typeof l=="string",p=u&&l?l+"-":"",y=u?""+p+a:l[a],h=u?y+"-active":l[a+"Active"],w=u?y+"-done":l[a+"Done"];return{baseClassName:y,activeClassName:h,doneClassName:w}},r}var n=t.prototype;return n.addClass=function(i,o,s){var a=this.getClassNames(o)[s+"ClassName"],l=this.getClassNames("enter"),u=l.doneClassName;o==="appear"&&s==="done"&&u&&(a+=" "+u),s==="active"&&i&&i.scrollTop,a&&(this.appliedClasses[o][s]=a,fy(i,a))},n.removeClasses=function(i,o){var s=this.appliedClasses[o],a=s.base,l=s.active,u=s.done;this.appliedClasses[o]={},a&&ol(i,a),l&&ol(i,l),u&&ol(i,u)},n.render=function(){var i=this.props;i.classNames;var o=_d(i,["classNames"]);return xt.createElement(cy,zr({},o,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(xt.Component);sl.defaultProps={classNames:""};sl.propTypes={};var HE=sl,dy={exports:{}},Wr={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py=A.exports,Pd=60103;Wr.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var xd=Symbol.for;Pd=xd("react.element"),Wr.Fragment=xd("react.fragment")}var hy=py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,my=Object.prototype.hasOwnProperty,gy={key:!0,ref:!0,__self:!0,__source:!0};function Nd(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)my.call(t,r)&&!gy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:Pd,type:e,key:o,ref:s,props:i,_owner:hy.current}}Wr.jsx=Nd;Wr.jsxs=Nd;dy.exports=Wr;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)==55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},vy=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(l&1023))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return t.join("")},Ad={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const o=e[i],s=i+1<e.length,a=s?e[i+1]:0,l=i+2<e.length,u=l?e[i+2]:0,p=o>>2,y=(o&3)<<4|a>>4;let h=(a&15)<<2|u>>6,w=u&63;l||(w=64,s||(h=64)),r.push(n[p],n[y],n[h],n[w])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rd(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):vy(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const o=n[e.charAt(i++)],a=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const y=i<e.length?n[e.charAt(i)]:64;if(++i,o==null||a==null||u==null||y==null)throw Error();const h=o<<2|a>>4;if(r.push(h),u!==64){const w=a<<4&240|u>>2;if(r.push(w),y!==64){const S=u<<6&192|y;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},yy=function(e){const t=Rd(e);return Ad.encodeByteArray(t,!0)},Ld=function(e){return yy(e).replace(/\./g,"")},wy=function(e){try{return Ad.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _y{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ey(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ie())}function Dd(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Sy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ky(){const e=ie();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Md(){return typeof indexedDB=="object"}function bd(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;t(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Iy(){return!(typeof navigator=="undefined"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ty="FirebaseError";class _t extends Error{constructor(t,n,r){super(n);this.code=t,this.customData=r,this.name=Ty,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Yt.prototype.create)}}class Yt{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,o=this.errors[t],s=o?Cy(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new _t(i,a,r)}}function Cy(e,t){return e.replace(Oy,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const Oy=/\{\$([^}]+)}/g;function Py(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function qr(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const o=e[i],s=t[i];if(Ud(o)&&Ud(s)){if(!qr(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ud(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function Kr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(o)}}),t}function Yr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function xy(e,t){const n=new Ny(e,t);return n.subscribe.bind(n)}class Ny{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ry(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=al),i.error===void 0&&(i.error=al),i.complete===void 0&&(i.complete=al);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ry(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function al(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ay=1e3,Ly=2,Dy=4*60*60*1e3,My=.5;function jd(e,t=Ay,n=Ly){const r=t*Math.pow(n,e),i=Math.round(My*r*(Math.random()-.5)*2);return Math.min(Dy,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(e){return e&&e._delegate?e._delegate:e}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qr(e,t){return new Promise((n,r)=>{e.onsuccess=i=>{n(i.target.result)},e.onerror=i=>{var o;r(`${t}: ${(o=i.target.error)===null||o===void 0?void 0:o.message}`)}})}class Fd{constructor(t){this._db=t,this.objectStoreNames=this._db.objectStoreNames}transaction(t,n){return new $d(this._db.transaction.call(this._db,t,n))}createObjectStore(t,n){return new zd(this._db.createObjectStore(t,n))}close(){this._db.close()}}class $d{constructor(t){this._transaction=t,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(t){return new zd(this._transaction.objectStore(t))}}class zd{constructor(t){this._store=t}index(t){return new Bd(this._store.index(t))}createIndex(t,n,r){return new Bd(this._store.createIndex(t,n,r))}get(t){const n=this._store.get(t);return Qr(n,"Error reading from IndexedDB")}put(t,n){const r=this._store.put(t,n);return Qr(r,"Error writing to IndexedDB")}delete(t){const n=this._store.delete(t);return Qr(n,"Error deleting from IndexedDB")}clear(){const t=this._store.clear();return Qr(t,"Error clearing IndexedDB object store")}}class Bd{constructor(t){this._index=t}get(t){const n=this._index.get(t);return Qr(n,"Error reading from IndexedDB")}}function Hd(e,t,n){return new Promise((r,i)=>{try{const o=indexedDB.open(e,t);o.onsuccess=s=>{r(new Fd(s.target.result))},o.onerror=s=>{var a;i(`Error opening indexedDB: ${(a=s.target.error)===null||a===void 0?void 0:a.message}`)},o.onupgradeneeded=s=>{n(new Fd(o.result),s.oldVersion,s.newVersion,new $d(o.transaction))}}catch(o){i(`Error opening indexedDB: ${o.message}`)}})}class Le{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new _y;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(jy(t))try{this.getOrInitializeService({instanceIdentifier:Qt})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(t=Qt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Qt){return this.instances.has(t)}getOptions(t=Qt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&t(s,i),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Uy(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Qt){return this.component?this.component.multipleInstances?t:Qt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Uy(e){return e===Qt?void 0:e}function jy(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new by(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var b;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(b||(b={}));const $y={debug:b.DEBUG,verbose:b.VERBOSE,info:b.INFO,warn:b.WARN,error:b.ERROR,silent:b.SILENT},zy=b.INFO,By={[b.DEBUG]:"log",[b.VERBOSE]:"log",[b.INFO]:"info",[b.WARN]:"warn",[b.ERROR]:"error"},Hy=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=By[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ll{constructor(t){this.name=t,this._logLevel=zy,this._logHandler=Hy,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in b))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?$y[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,b.DEBUG,...t),this._logHandler(this,b.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,b.VERBOSE,...t),this._logHandler(this,b.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,b.INFO,...t),this._logHandler(this,b.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,b.WARN,...t),this._logHandler(this,b.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,b.ERROR,...t),this._logHandler(this,b.ERROR,...t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Wy(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Wy(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ul="@firebase/app",Vd="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new ll("@firebase/app"),qy="@firebase/app-compat",Gy="@firebase/analytics-compat",Ky="@firebase/analytics",Yy="@firebase/app-check-compat",Qy="@firebase/app-check",Xy="@firebase/auth",Jy="@firebase/auth-compat",Zy="@firebase/database",e0="@firebase/database-compat",t0="@firebase/functions",n0="@firebase/functions-compat",r0="@firebase/installations",i0="@firebase/installations-compat",o0="@firebase/messaging",s0="@firebase/messaging-compat",a0="@firebase/performance",l0="@firebase/performance-compat",u0="@firebase/remote-config",c0="@firebase/remote-config-compat",f0="@firebase/storage",d0="@firebase/storage-compat",p0="@firebase/firestore",h0="@firebase/firestore-compat",m0="firebase",g0="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="[DEFAULT]",v0={[ul]:"fire-core",[qy]:"fire-core-compat",[Ky]:"fire-analytics",[Gy]:"fire-analytics-compat",[Qy]:"fire-app-check",[Yy]:"fire-app-check-compat",[Xy]:"fire-auth",[Jy]:"fire-auth-compat",[Zy]:"fire-rtdb",[e0]:"fire-rtdb-compat",[t0]:"fire-fn",[n0]:"fire-fn-compat",[r0]:"fire-iid",[i0]:"fire-iid-compat",[o0]:"fire-fcm",[s0]:"fire-fcm-compat",[a0]:"fire-perf",[l0]:"fire-perf-compat",[u0]:"fire-rc",[c0]:"fire-rc-compat",[f0]:"fire-gcs",[d0]:"fire-gcs-compat",[p0]:"fire-fst",[h0]:"fire-fst-compat","fire-js":"fire-js",[m0]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wo=new Map,fl=new Map;function y0(e,t){try{e.container.addComponent(t)}catch(n){cl.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ge(e){const t=e.name;if(fl.has(t))return cl.debug(`There were multiple attempts to register component ${t}.`),!1;fl.set(t,e);for(const n of wo.values())y0(n,e);return!0}function jn(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Xt=new Yt("app","Firebase",w0);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Le("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=g0;function VE(e,t={}){typeof t!="object"&&(t={name:t});const n=Object.assign({name:Wd,automaticDataCollectionEnabled:!1},t),r=n.name;if(typeof r!="string"||!r)throw Xt.create("bad-app-name",{appName:String(r)});const i=wo.get(r);if(i){if(qr(e,i.options)&&qr(n,i.config))return i;throw Xt.create("duplicate-app",{appName:r})}const o=new Fy(r);for(const a of fl.values())o.addComponent(a);const s=new _0(e,n,o);return wo.set(r,s),s}function qd(e=Wd){const t=wo.get(e);if(!t)throw Xt.create("no-app",{appName:e});return t}function De(e,t,n){var r;let i=(r=v0[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=t.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${t}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),cl.warn(a.join(" "));return}Ge(new Le(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="firebase-heartbeat-database",S0=1,Xr="firebase-heartbeat-store";let dl=null;function Gd(){return dl||(dl=Hd(E0,S0,(e,t)=>{switch(t){case 0:e.createObjectStore(Xr)}}).catch(e=>{throw Xt.create("storage-open",{originalErrorMessage:e.message})})),dl}async function k0(e){try{return(await Gd()).transaction(Xr).objectStore(Xr).get(Yd(e))}catch(t){throw Xt.create("storage-get",{originalErrorMessage:t.message})}}async function Kd(e,t){try{const r=(await Gd()).transaction(Xr,"readwrite");return await r.objectStore(Xr).put(t,Yd(e)),r.complete}catch(n){throw Xt.create("storage-set",{originalErrorMessage:n.message})}}function Yd(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=1024,T0=30*24*60*60*1e3;class C0{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new P0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Qd();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=T0}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Qd(),{heartbeatsToSend:n,unsentEntries:r}=O0(this._heartbeatsCache.heartbeats),i=Ld(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Qd(){return new Date().toISOString().substring(0,10)}function O0(e,t=I0){const n=[];let r=e.slice();for(const i of e){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Xd(n)>t){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Xd(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class P0{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Md()?bd().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await k0(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Xd(e){return Ld(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(e){Ge(new Le("platform-logger",t=>new Vy(t),"PRIVATE")),Ge(new Le("heartbeat",t=>new C0(t),"PRIVATE")),De(ul,Vd,e),De(ul,Vd,"esm2017"),De("fire-js","")}x0("");var N0="firebase",R0="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */De(N0,R0,"app");const Jd="@firebase/installations",pl="0.5.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd=1e4,ep=`w:${pl}`,tp="FIS_v2",A0="https://firebaseinstallations.googleapis.com/v1",L0=60*60*1e3,D0="installations",M0="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b0={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},Jt=new Yt(D0,M0,b0);function np(e){return e instanceof _t&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rp({projectId:e}){return`${A0}/projects/${e}/installations`}function ip(e){return{token:e.token,requestStatus:2,expiresIn:j0(e.expiresIn),creationTime:Date.now()}}async function op(e,t){const r=(await t.json()).error;return Jt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function sp({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function U0(e,{refreshToken:t}){const n=sp(e);return n.append("Authorization",F0(t)),n}async function ap(e){const t=await e();return t.status>=500&&t.status<600?e():t}function j0(e){return Number(e.replace("s","000"))}function F0(e){return`${tp} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $0({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=rp(e),i=sp(e),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={fid:n,authVersion:tp,appId:e.appId,sdkVersion:ep},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await ap(()=>fetch(r,a));if(l.ok){const u=await l.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ip(u.authToken)}}else throw await op("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lp(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z0(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B0=/^[cdef][\w-]{21}$/,hl="";function H0(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=V0(e);return B0.test(n)?n:hl}catch{return hl}}function V0(e){return z0(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function cp(e,t){const n=Eo(e);fp(n,t),W0(n,t)}function fp(e,t){const n=up.get(e);if(!!n)for(const r of n)r(t)}function W0(e,t){const n=q0();n&&n.postMessage({key:e,fid:t}),G0()}let Zt=null;function q0(){return!Zt&&"BroadcastChannel"in self&&(Zt=new BroadcastChannel("[Firebase] FID Change"),Zt.onmessage=e=>{fp(e.data.key,e.data.fid)}),Zt}function G0(){up.size===0&&Zt&&(Zt.close(),Zt=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0="firebase-installations-database",Y0=1,en="firebase-installations-store";let ml=null;function gl(){return ml||(ml=Hd(K0,Y0,(e,t)=>{switch(t){case 0:e.createObjectStore(en)}})),ml}async function So(e,t){const n=Eo(e),i=(await gl()).transaction(en,"readwrite"),o=i.objectStore(en),s=await o.get(n);return await o.put(t,n),await i.complete,(!s||s.fid!==t.fid)&&cp(e,t.fid),t}async function dp(e){const t=Eo(e),r=(await gl()).transaction(en,"readwrite");await r.objectStore(en).delete(t),await r.complete}async function ko(e,t){const n=Eo(e),i=(await gl()).transaction(en,"readwrite"),o=i.objectStore(en),s=await o.get(n),a=t(s);return a===void 0?await o.delete(n):await o.put(a,n),await i.complete,a&&(!s||s.fid!==a.fid)&&cp(e,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vl(e){let t;const n=await ko(e.appConfig,r=>{const i=Q0(r),o=X0(e,i);return t=o.registrationPromise,o.installationEntry});return n.fid===hl?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Q0(e){const t=e||{fid:H0(),registrationStatus:0};return hp(t)}function X0(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Jt.create("app-offline"));return{installationEntry:t,registrationPromise:i}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=J0(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Z0(e)}:{installationEntry:t}}async function J0(e,t){try{const n=await $0(e,t);return So(e.appConfig,n)}catch(n){throw np(n)&&n.customData.serverCode===409?await dp(e.appConfig):await So(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Z0(e){let t=await pp(e.appConfig);for(;t.registrationStatus===1;)await lp(100),t=await pp(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vl(e);return r||n}return t}function pp(e){return ko(e,t=>{if(!t)throw Jt.create("installation-not-found");return hp(t)})}function hp(e){return ew(e)?{fid:e.fid,registrationStatus:0}:e}function ew(e){return e.registrationStatus===1&&e.registrationTime+Zd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tw({appConfig:e,heartbeatServiceProvider:t},n){const r=nw(e,n),i=U0(e,n),o=t.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const s={installation:{sdkVersion:ep,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await ap(()=>fetch(r,a));if(l.ok){const u=await l.json();return ip(u)}else throw await op("Generate Auth Token",l)}function nw(e,{fid:t}){return`${rp(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yl(e,t=!1){let n;const r=await ko(e.appConfig,o=>{if(!gp(o))throw Jt.create("not-registered");const s=o.authToken;if(!t&&ow(s))return o;if(s.requestStatus===1)return n=rw(e,t),o;{if(!navigator.onLine)throw Jt.create("app-offline");const a=aw(o);return n=iw(e,a),a}});return n?await n:r.authToken}async function rw(e,t){let n=await mp(e.appConfig);for(;n.authToken.requestStatus===1;)await lp(100),n=await mp(e.appConfig);const r=n.authToken;return r.requestStatus===0?yl(e,t):r}function mp(e){return ko(e,t=>{if(!gp(t))throw Jt.create("not-registered");const n=t.authToken;return lw(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function iw(e,t){try{const n=await tw(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await So(e.appConfig,r),n}catch(n){if(np(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await dp(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await So(e.appConfig,r)}throw n}}function gp(e){return e!==void 0&&e.registrationStatus===2}function ow(e){return e.requestStatus===2&&!sw(e)}function sw(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+L0}function aw(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function lw(e){return e.requestStatus===1&&e.requestTime+Zd<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uw(e){const t=e,{installationEntry:n,registrationPromise:r}=await vl(t);return r?r.catch(console.error):yl(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cw(e,t=!1){const n=e;return await fw(n),(await yl(n,t)).token}async function fw(e){const{registrationPromise:t}=await vl(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(e){if(!e||!e.options)throw wl("App Configuration");if(!e.name)throw wl("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw wl(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function wl(e){return Jt.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vp="installations",pw="installations-internal",hw=e=>{const t=e.getProvider("app").getImmediate(),n=dw(t),r=jn(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},mw=e=>{const t=e.getProvider("app").getImmediate(),n=jn(t,vp).getImmediate();return{getId:()=>uw(n),getToken:i=>cw(n,i)}};function gw(){Ge(new Le(vp,hw,"PUBLIC")),Ge(new Le(pw,mw,"PRIVATE"))}gw();De(Jd,pl);De(Jd,pl,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io="analytics",vw="firebase_id",yw="origin",ww=60*1e3,_w="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",yp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pe=new ll("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function Ew(e,t){const n=document.createElement("script");n.src=`${yp}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function Sw(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function kw(e,t,n,r,i,o){const s=r[i];try{if(s)await t[s];else{const l=(await wp(n)).find(u=>u.measurementId===i);l&&await t[l.appId]}}catch(a){pe.error(a)}e("config",i,o)}async function Iw(e,t,n,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await wp(n);for(const l of s){const u=a.find(y=>y.measurementId===l),p=u&&t[u.appId];if(p)o.push(p);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,i||{})}catch(o){pe.error(o)}}function Tw(e,t,n,r){async function i(o,s,a){try{o==="event"?await Iw(e,t,n,s,a):o==="config"?await kw(e,t,n,r,s,a):e("set",s)}catch(l){pe.error(l)}}return i}function Cw(e,t,n,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Tw(o,e,t,n),{gtagCore:o,wrappedGtag:window[i]}}function Ow(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(yp))return t;return null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pw={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Ee=new Yt("analytics","Analytics",Pw);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=30,Nw=1e3;class Rw{constructor(t={},n=Nw){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const _p=new Rw;function Aw(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Lw(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:Aw(r)},o=_w.replace("{app-id}",n),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();((t=l.error)===null||t===void 0?void 0:t.message)&&(a=l.error.message)}catch{}throw Ee.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Dw(e,t=_p,n){const{appId:r,apiKey:i,measurementId:o}=e.options;if(!r)throw Ee.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Ee.create("no-api-key")}const s=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Uw;return setTimeout(async()=>{a.abort()},n!==void 0?n:ww),Ep({appId:r,apiKey:i,measurementId:o},s,a,t)}async function Ep(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=_p){const{appId:o,measurementId:s}=e;try{await Mw(r,t)}catch(a){if(s)return pe.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}try{const a=await Lw(e);return i.deleteThrottleMetadata(o),a}catch(a){if(!bw(a)){if(i.deleteThrottleMetadata(o),s)return pe.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${a.message}]`),{appId:o,measurementId:s};throw a}const l=Number(a.customData.httpStatus)===503?jd(n,i.intervalMillis,xw):jd(n,i.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,u),pe.debug(`Calling attemptFetch again in ${l} millis`),Ep(e,u,r,i)}}function Mw(e,t){return new Promise((n,r)=>{const i=Math.max(t-Date.now(),0),o=setTimeout(n,i);e.addEventListener(()=>{clearTimeout(o),r(Ee.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function bw(e){if(!(e instanceof _t)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Uw{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jw(){if(Md())try{await bd()}catch(e){return pe.warn(Ee.create("indexeddb-unavailable",{errorInfo:e}).message),!1}else return pe.warn(Ee.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Fw(e,t,n,r,i,o,s){var a;const l=Dw(e);l.then(w=>{n[w.measurementId]=w.appId,e.options.measurementId&&w.measurementId!==e.options.measurementId&&pe.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>pe.error(w)),t.push(l);const u=jw().then(w=>{if(w)return r.getId()}),[p,y]=await Promise.all([l,u]);Ow()||Ew(o,p.measurementId),i("js",new Date);const h=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return h[yw]="firebase",h.update=!0,y!=null&&(h[vw]=y),i("config",p.measurementId,h),p.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(t){this.app=t}_delete(){return delete Jr[this.app.options.appId],Promise.resolve()}}let Jr={},Sp=[];const kp={};let _l="dataLayer",zw="gtag",Ip,Tp,Cp=!1;function Bw(){const e=[];if(Dd()&&e.push("This is a browser extension environment."),Iy()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Ee.create("invalid-analytics-context",{errorInfo:t});pe.warn(n.message)}}function Hw(e,t,n){Bw();const r=e.options.appId;if(!r)throw Ee.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)pe.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ee.create("no-api-key");if(Jr[r]!=null)throw Ee.create("already-exists",{id:r});if(!Cp){Sw(_l);const{wrappedGtag:o,gtagCore:s}=Cw(Jr,Sp,kp,_l,zw);Tp=o,Ip=s,Cp=!0}return Jr[r]=Fw(e,Sp,kp,t,Ip,_l,n),new $w(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vw(e,t,n,r,i){if(i&&i.global){e("event",n,r);return}else{const o=await t,s=Object.assign(Object.assign({},r),{send_to:o});e("event",n,s)}}function WE(e=qd()){e=qe(e);const t=jn(e,Io);return t.isInitialized()?t.getImmediate():Ww(e)}function Ww(e,t={}){const n=jn(e,Io);if(n.isInitialized()){const i=n.getImmediate();if(qr(t,n.getOptions()))return i;throw Ee.create("already-initialized")}return n.initialize({options:t})}function qw(e,t,n,r){e=qe(e),Vw(Tp,Jr[e.app.options.appId],t,n,r).catch(i=>pe.error(i))}const Op="@firebase/analytics",Pp="0.7.7";function Gw(){Ge(new Le(Io,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("installations-internal").getImmediate();return Hw(r,i,n)},"PUBLIC")),Ge(new Le("analytics-internal",e,"PRIVATE")),De(Op,Pp),De(Op,Pp,"esm2017");function e(t){try{const n=t.getProvider(Io).getImmediate();return{logEvent:(r,i,o)=>qw(n,r,i,o)}}catch(n){throw Ee.create("interop-component-reg-failed",{reason:n})}}}Gw();/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function El(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function xp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Kw=xp,Np=new Yt("auth","Firebase",xp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rp=new ll("@firebase/auth");function To(e,...t){Rp.logLevel<=b.ERROR&&Rp.error(`Auth (${_o}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(e,...t){throw Sl(e,...t)}function Me(e,...t){return Sl(e,...t)}function Yw(e,t,n){const r=Object.assign(Object.assign({},Kw()),{[t]:n});return new Yt("auth","Firebase",r).create(t,{appName:e.name})}function Sl(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Np.create(e,...t)}function R(e,t,...n){if(!e)throw Sl(t,...n)}function Ke(e){const t="INTERNAL ASSERTION FAILED: "+e;throw To(t),new Error(t)}function Ye(e,t){e||Ke(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ap=new Map;function Qe(e){Ye(e instanceof Function,"Expected a class definition");let t=Ap.get(e);return t?(Ye(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Ap.set(e,t),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(e,t){const n=jn(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),o=n.getOptions();if(qr(o,t!=null?t:{}))return i;Ce(i,"already-initialized")}return n.initialize({options:t})}function Xw(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Qe);(t==null?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kl(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Jw(){return Lp()==="http:"||Lp()==="https:"}function Lp(){var e;return typeof self!="undefined"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jw()||Dd()||"connection"in navigator)?navigator.onLine:!0}function e_(){if(typeof navigator=="undefined")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n){this.shortDelay=t,this.longDelay=n,Ye(n>t,"Short delay should be less than long delay!"),this.isMobile=Ey()||Sy()}get(){return Zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Il(e,t){Ye(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Ke("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Ke("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Ke("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_=new Zr(3e4,6e4);function Co(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ei(e,t,n,r,i={}){return Mp(e,i,async()=>{let o={},s={};r&&(t==="GET"?s=r:o={body:JSON.stringify(r)});const a=Gr(Object.assign({key:e.config.apiKey},s)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),Dp.fetch()(bp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},o))})}async function Mp(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},t_),t);try{const i=new r_(e),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw Tl(e,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Tl(e,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw Tl(e,"email-already-in-use",s);const p=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Yw(e,p,u);Ce(e,p)}}catch(i){if(i instanceof _t)throw i;Ce(e,"network-request-failed")}}async function Oo(e,t,n,r,i={}){const o=await ei(e,t,n,r,i);return"mfaPendingCredential"in o&&Ce(e,"multi-factor-auth-required",{_serverResponse:o}),o}function bp(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Il(e.config,i):`${e.config.apiScheme}://${i}`}class r_{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),n_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Tl(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Me(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i_(e,t){return ei(e,"POST","/v1/accounts:delete",t)}async function o_(e,t){return ei(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(e){if(!!e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function s_(e,t=!1){const n=qe(e),r=await n.getIdToken(t),i=Ol(r);R(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ti(Cl(i.auth_time)),issuedAtTime:ti(Cl(i.iat)),expirationTime:ti(Cl(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Cl(e){return Number(e)*1e3}function Ol(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return To("JWT malformed, contained fewer than 3 sections"),null;try{const i=wy(n);return i?JSON.parse(i):(To("Failed to decode base64 JWT payload"),null)}catch(i){return To("Caught error parsing JWT payload as JSON",i),null}}function a_(e){const t=Ol(e);return R(t,"internal-error"),R(typeof t.exp!="undefined","internal-error"),R(typeof t.iat!="undefined","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ni(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof _t&&l_(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function l_({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u_{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){t.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ti(this.lastLoginAt),this.creationTime=ti(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Po(e){var t;const n=e.auth,r=await e.getIdToken(),i=await ni(e,o_(n,{idToken:r}));R(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=((t=o.providerUserInfo)===null||t===void 0?void 0:t.length)?d_(o.providerUserInfo):[],a=f_(e.providerData,s),l=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(a==null?void 0:a.length),p=l?u:!1,y={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Up(o.createdAt,o.lastLoginAt),isAnonymous:p};Object.assign(e,y)}async function c_(e){const t=qe(e);await Po(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function f_(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function d_(e){return e.map(t=>{var{providerId:n}=t,r=El(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function p_(e,t){const n=await Mp(e,{},async()=>{const r=Gr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=bp(e,i,"/v1/token",`key=${o}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Dp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){R(t.idToken,"internal-error"),R(typeof t.idToken!="undefined","internal-error"),R(typeof t.refreshToken!="undefined","internal-error");const n="expiresIn"in t&&typeof t.expiresIn!="undefined"?Number(t.expiresIn):a_(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return R(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await p_(t,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new ri;return r&&(R(typeof r=="string","internal-error",{appName:t}),s.refreshToken=r),i&&(R(typeof i=="string","internal-error",{appName:t}),s.accessToken=i),o&&(R(typeof o=="number","internal-error",{appName:t}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ri,this.toJSON())}_performRefresh(){return Ke("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(e,t){R(typeof e=="string"||typeof e=="undefined","internal-error",{appName:t})}class tn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,o=El(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new u_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Up(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await ni(this,this.stsTokenManager.getToken(this.auth,t));return R(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return s_(this,t)}reload(){return c_(this)}_assign(t){this!==t&&(R(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new tn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Po(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ni(this,i_(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,o,s,a,l,u,p;const y=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,w=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,S=(s=n.photoURL)!==null&&s!==void 0?s:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,f=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,c=(u=n.createdAt)!==null&&u!==void 0?u:void 0,d=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:m,emailVerified:g,isAnonymous:T,providerData:v,stsTokenManager:I}=n;R(m&&I,t,"internal-error");const P=ri.fromJSON(this.name,I);R(typeof m=="string",t,"internal-error"),Et(y,t.name),Et(h,t.name),R(typeof g=="boolean",t,"internal-error"),R(typeof T=="boolean",t,"internal-error"),Et(w,t.name),Et(S,t.name),Et(E,t.name),Et(f,t.name),Et(c,t.name),Et(d,t.name);const O=new tn({uid:m,auth:t,email:h,emailVerified:g,displayName:y,isAnonymous:T,photoURL:S,phoneNumber:w,tenantId:E,stsTokenManager:P,createdAt:c,lastLoginAt:d});return v&&Array.isArray(v)&&(O.providerData=v.map(W=>Object.assign({},W))),f&&(O._redirectEventId=f),O}static async _fromIdTokenResponse(t,n,r=!1){const i=new ri;i.updateFromServerResponse(n);const o=new tn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Po(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}jp.type="NONE";const Fp=jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xo(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=xo(this.userKey,i.apiKey,o),this.fullPersistenceKey=xo("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?tn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(Qe(Fp),t,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Qe(Fp);const s=xo(r,t.config.apiKey,t.name);let a=null;for(const u of n)try{const p=await u._get(s);if(p){const y=tn._fromJSON(t,p);u!==o&&(a=y),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Fn(o,t,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new Fn(o,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Hp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(zp(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Wp(t))return"Blackberry";if(qp(t))return"Webos";if(Pl(t))return"Safari";if((t.includes("chrome/")||Bp(t))&&!t.includes("edge/"))return"Chrome";if(Vp(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function zp(e=ie()){return/firefox\//i.test(e)}function Pl(e=ie()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Bp(e=ie()){return/crios\//i.test(e)}function Hp(e=ie()){return/iemobile/i.test(e)}function Vp(e=ie()){return/android/i.test(e)}function Wp(e=ie()){return/blackberry/i.test(e)}function qp(e=ie()){return/webos/i.test(e)}function No(e=ie()){return/iphone|ipad|ipod/i.test(e)}function h_(e=ie()){var t;return No(e)&&!!((t=window.navigator)===null||t===void 0?void 0:t.standalone)}function m_(){return ky()&&document.documentMode===10}function Gp(e=ie()){return No(e)||Vp(e)||qp(e)||Wp(e)||/windows phone/i.test(e)||Hp(e)}function g_(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kp(e,t=[]){let n;switch(e){case"Browser":n=$p(ie());break;case"Worker":n=`${$p(ie())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${_o}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(t,n,r){this.app=t,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Yp(this),this.idTokenSubscription=new Yp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=Qe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t)}}async initializeCurrentUser(t){var n;let r=await this.assertedPersistence.getCurrentUser();if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,s=await this.tryRedirectSignIn(t);(!i||i===o)&&(s==null?void 0:s.user)&&(r=s.user)}return r?r._redirectEventId?(R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Po(t)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=e_()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?qe(t):null;return n&&R(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t){if(!this._deleted)return t&&R(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qe(t))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Yt("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&Qe(t)||this._popupRedirectResolver;R(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[Qe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return R(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function xl(e){return qe(e)}class Yp{constructor(t){this.auth=t,this.observer=null,this.addObserver=xy(n=>this.observer=n)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return Ke("not implemented")}_getIdTokenResponse(t){return Ke("not implemented")}_linkToIdToken(t,n){return Ke("not implemented")}_getReauthenticationResolver(t){return Ke("not implemented")}}async function y_(e,t){return ei(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w_(e,t){return Oo(e,"POST","/v1/accounts:signInWithPassword",Co(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function __(e,t){return Oo(e,"POST","/v1/accounts:signInWithEmailLink",Co(e,t))}async function E_(e,t){return Oo(e,"POST","/v1/accounts:signInWithEmailLink",Co(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Nl{constructor(t,n,r,i=null){super("password",r);this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new ii(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new ii(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":return w_(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return __(t,{email:this._email,oobCode:this._password});default:Ce(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return y_(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return E_(t,{idToken:n,email:this._email,oobCode:this._password});default:Ce(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t){return Oo(e,"POST","/v1/accounts:signInWithIdp",Co(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="http://localhost";class nn extends Nl{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(t){const n=new nn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ce("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,o=El(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new nn(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:S_,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Gr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k_(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function I_(e){const t=Kr(Yr(e)).link,n=t?Kr(Yr(t)).deep_link_id:null,r=Kr(Yr(e)).deep_link_id;return(r?Kr(Yr(r)).link:null)||r||n||t||e}class Rl{constructor(t){var n,r,i,o,s,a;const l=Kr(Yr(t)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,p=(r=l.oobCode)!==null&&r!==void 0?r:null,y=k_((i=l.mode)!==null&&i!==void 0?i:null);R(u&&p&&y,"argument-error"),this.apiKey=u,this.operation=y,this.code=p,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(t){const n=I_(t);try{return new Rl(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(){this.providerId=zn.PROVIDER_ID}static credential(t,n){return ii._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=Rl.parseLink(n);return R(r,"argument-error"),ii._fromEmailAndCode(t,r.code,r.tenantId)}}zn.PROVIDER_ID="password";zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi extends Qp{constructor(){super(...arguments);this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends oi{constructor(){super("facebook.com")}static credential(t){return nn._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch{return null}}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com";St.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends oi{constructor(){super("google.com");this.addScope("profile")}static credential(t,n){return nn._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return kt.credential(n,r)}catch{return null}}}kt.GOOGLE_SIGN_IN_METHOD="google.com";kt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends oi{constructor(){super("github.com")}static credential(t){return nn._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return It.credentialFromTaggedObject(t)}static credentialFromError(t){return It.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return It.credential(t.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends oi{constructor(){super("twitter.com")}static credential(t,n){return nn._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Tt.credentialFromTaggedObject(t)}static credentialFromError(t){return Tt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const o=await tn._fromIdTokenResponse(t,r,i),s=Xp(r);return new Bn({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Xp(r);return new Bn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Xp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends _t{constructor(t,n,r,i){var o;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ro.prototype),this.customData={appName:t.name,tenantId:(o=t.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ro(t,n,r,i)}}function Jp(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?Ro._fromErrorAndOperation(e,o,t,r):o})}async function T_(e,t,n=!1){const r=await ni(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Bn._forOperation(e,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C_(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await ni(e,Jp(r,i,t,e),n);R(o.idToken,r,"internal-error");const s=Ol(o.idToken);R(s,r,"internal-error");const{sub:a}=s;return R(e.uid===a,r,"user-mismatch"),Bn._forOperation(e,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Ce(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zp(e,t,n=!1){const r="signIn",i=await Jp(e,r,t),o=await Bn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function O_(e,t){return Zp(xl(e),t)}function qE(e,t,n){return O_(qe(e),zn.credential(t,n))}function GE(e,t,n,r){return qe(e).onAuthStateChanged(t,n,r)}function KE(e){return qe(e).signOut()}const Ao="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ao,"1"),this.storage.removeItem(Ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(){const e=ie();return Pl(e)||No(e)}const x_=1e3,N_=10;class th extends eh{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=P_()&&g_(),this.fallbackToPolling=Gp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(t.newValue!==s)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);m_()&&o!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,N_):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},x_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}th.type="LOCAL";const R_=th;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh extends eh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}nh.type="SESSION";const rh=nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A_(e){return Promise.all(e.map(async t=>{try{const n=await t;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new Lo(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s==null?void 0:s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await A_(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Lo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Al("",20);i.port1.start();const p=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(y){const h=y;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(p),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(h.data.response);break;default:clearTimeout(p),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(){return window}function D_(e){be().location.href=e}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){return typeof be().WorkerGlobalScope!="undefined"&&typeof be().importScripts=="function"}async function M_(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b_(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function U_(){return ih()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oh="firebaseLocalStorageDb",j_=1,Do="firebaseLocalStorage",sh="fbase_key";class si{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Mo(e,t){return e.transaction([Do],t?"readwrite":"readonly").objectStore(Do)}function F_(){const e=indexedDB.deleteDatabase(oh);return new si(e).toPromise()}function Ll(){const e=indexedDB.open(oh,j_);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Do,{keyPath:sh})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Do)?t(r):(r.close(),await F_(),t(await Ll()))})})}async function ah(e,t,n){const r=Mo(e,!0).put({[sh]:t,value:n});return new si(r).toPromise()}async function $_(e,t){const n=Mo(e,!1).get(t),r=await new si(n).toPromise();return r===void 0?null:r.value}function lh(e,t){const n=Mo(e,!0).delete(t);return new si(n).toPromise()}const z_=800,B_=3;class uh{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ll(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>B_)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ih()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Lo._getInstance(U_()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await M_(),!this.activeServiceWorker)return;this.sender=new L_(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((t=r[0])===null||t===void 0?void 0:t.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||b_()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ll();return await ah(t,Ao,"1"),await lh(t,Ao),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ah(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>$_(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>lh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const o=Mo(i,!1).getAll();return new si(o).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z_)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}uh.type="LOCAL";const H_=uh;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function W_(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const o=Me("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",V_().appendChild(r)})}function q_(e){return`__${e}${Math.floor(Math.random()*1e6)}`}new Zr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G_(e,t){return t?Qe(t):(R(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl extends Nl{constructor(t){super("custom","custom");this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function K_(e){return Zp(e.auth,new Dl(e),e.bypassAuthState)}function Y_(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),C_(n,new Dl(e),e.bypassAuthState)}async function Q_(e){const{auth:t,user:n}=e;return R(n,t,"internal-error"),T_(n,new Dl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ch{constructor(t,n,r,i,o=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=t;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return K_;case"linkViaPopup":case"linkViaRedirect":return Q_;case"reauthViaPopup":case"reauthViaRedirect":return Y_;default:Ce(this.auth,"internal-error")}}resolve(t){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Ye(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X_=new Zr(2e3,1e4);class Hn extends ch{constructor(t,n,r,i,o){super(t,n,i,o);this.provider=r,this.authWindow=null,this.pollId=null,Hn.currentPopupAction&&Hn.currentPopupAction.cancel(),Hn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return R(t,this.auth,"internal-error"),t}async onExecution(){Ye(this.filter.length===1,"Popup operations only handle one event");const t=Al();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(t,X_.get())};t()}}Hn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_="pendingRedirect",Ml=new Map;class Z_ extends ch{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let t=Ml.get(this.auth._key());if(!t){try{const r=await eE(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Ml.set(this.auth._key(),t)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function eE(e,t){const n=nE(t),r=tE(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function tE(e){return Qe(e._redirectPersistence)}function nE(e){return xo(J_,e.config.apiKey,e.name)}async function rE(e,t,n=!1){const r=xl(e),i=G_(r,t),s=await new Z_(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=10*60*1e3;class oE{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!sE(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!dh(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Me(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=iE&&this.cachedEventUids.clear(),this.cachedEventUids.has(fh(t))}saveEventToCache(t){this.cachedEventUids.add(fh(t)),this.lastProcessedEventTime=Date.now()}}function fh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function dh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function sE(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return dh(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(e,t={}){return ei(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,uE=/^https?/;async function cE(e){if(e.config.emulator)return;const{authorizedDomains:t}=await aE(e);for(const n of t)try{if(fE(n))return}catch{}Ce(e,"unauthorized-domain")}function fE(e){const t=kl(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const s=new URL(e);return s.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!uE.test(n))return!1;if(lE.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dE=new Zr(3e4,6e4);function ph(){const e=be().___jsl;if(e==null?void 0:e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function pE(e){return new Promise((t,n)=>{var r,i,o;function s(){ph(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ph(),n(Me(e,"network-request-failed"))},timeout:dE.get()})}if((i=(r=be().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)t(gapi.iframes.getContext());else if((o=be().gapi)===null||o===void 0?void 0:o.load)s();else{const a=q_("iframefcb");return be()[a]=()=>{gapi.load?s():n(Me(e,"network-request-failed"))},W_(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(t=>{throw bo=null,t})}let bo=null;function hE(e){return bo=bo||pE(e),bo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mE=new Zr(5e3,15e3),gE="__/auth/iframe",vE="emulator/auth/iframe",yE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wE=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _E(e){const t=e.config;R(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Il(t,vE):`https://${e.config.authDomain}/${gE}`,r={apiKey:t.apiKey,appName:e.name,v:_o},i=wE.get(e.config.apiHost);i&&(r.eid=i);const o=e._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${Gr(r).slice(1)}`}async function EE(e){const t=await hE(e),n=be().gapi;return R(n,e,"internal-error"),t.open({where:document.body,url:_E(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:yE,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Me(e,"network-request-failed"),a=be().setTimeout(()=>{o(s)},mE.get());function l(){be().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SE={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},kE=500,IE=600,TE="_blank",CE="http://localhost";class hh{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function OE(e,t,n,r=kE,i=IE){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},SE),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ie().toLowerCase();n&&(a=Bp(u)?TE:n),zp(u)&&(t=t||CE,l.scrollbars="yes");const p=Object.entries(l).reduce((h,[w,S])=>`${h}${w}=${S},`,"");if(h_(u)&&a!=="_self")return PE(t||"",a),new hh(null);const y=window.open(t||"",a,p);R(y,e,"popup-blocked");try{y.focus()}catch{}return new hh(y)}function PE(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="__/auth/handler",NE="emulator/auth/handler";function mh(e,t,n,r,i,o){R(e.config.authDomain,e,"auth-domain-config-required"),R(e.config.apiKey,e,"invalid-api-key");const s={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:_o,eventId:i};if(t instanceof Qp){t.setDefaultLanguage(e.languageCode),s.providerId=t.providerId||"",Py(t.getCustomParameters())||(s.customParameters=JSON.stringify(t.getCustomParameters()));for(const[l,u]of Object.entries(o||{}))s[l]=u}if(t instanceof oi){const l=t.getScopes().filter(u=>u!=="");l.length>0&&(s.scopes=l.join(","))}e.tenantId&&(s.tid=e.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${RE(e)}?${Gr(a).slice(1)}`}function RE({config:e}){return e.emulator?Il(e,NE):`https://${e.authDomain}/${xE}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bl="webStorageSupport";class AE{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=rh,this._completeRedirectFn=rE}async _openPopup(t,n,r,i){var o;Ye((o=this.eventManagers[t._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=mh(t,n,r,kl(),i);return OE(t,s,Al())}async _openRedirect(t,n,r,i){return await this._originValidation(t),D_(mh(t,n,r,kl(),i)),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Ye(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await EE(t),r=new oE(t);return n.register("authEvent",i=>(R(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(bl,{type:bl},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[bl];s!==void 0&&n(!!s),Ce(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cE(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return Gp()||Pl()||No()}}const LE=AE;var gh="@firebase/auth",vh="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{var i;t(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);!n||(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ME(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bE(e){Ge(new Le("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{R(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),R(!(s==null?void 0:s.includes(":")),"argument-error",{appName:a.name});const u={apiKey:o,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kp(e)},p=new v_(a,l,u);return Xw(p,n),p})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ge(new Le("auth-internal",t=>{const n=xl(t.getProvider("auth").getImmediate());return(r=>new DE(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),De(gh,vh,ME(e)),De(gh,vh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(e=qd()){const t=jn(e,"auth");return t.isInitialized()?t.getImmediate():Qw(e,{popupRedirectResolver:LE,persistence:[H_,R_,rh]})}bE("Browser");export{FE as B,tv as L,$E as N,BE as P,xt as R,HE as a,YE as b,KE as c,UE as d,zE as e,jE as f,WE as g,Tg as h,VE as i,dy as j,Ga as k,GE as o,A as r,qE as s,Hr as u};
