(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Xw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Q={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ms=Symbol.for("react.element"),Jw=Symbol.for("react.portal"),Zw=Symbol.for("react.fragment"),e0=Symbol.for("react.strict_mode"),t0=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),i0=Symbol.for("react.forward_ref"),s0=Symbol.for("react.suspense"),o0=Symbol.for("react.memo"),a0=Symbol.for("react.lazy"),ch=Symbol.iterator;function l0(t){return t===null||typeof t!="object"?null:(t=ch&&t[ch]||t["@@iterator"],typeof t=="function"?t:null)}var rg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ig=Object.assign,sg={};function ui(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||rg}ui.prototype.isReactComponent={};ui.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ui.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=ui.prototype;function td(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||rg}var nd=td.prototype=new og;nd.constructor=td;ig(nd,ui.prototype);nd.isPureReactComponent=!0;var dh=Array.isArray,ag=Object.prototype.hasOwnProperty,rd={current:null},lg={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,r)&&!lg.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ms,type:t,key:s,ref:o,props:i,_owner:rd.current}}function u0(t,e){return{$$typeof:Ms,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function id(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ms}function c0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var fh=/\/+/g;function Ol(t,e){return typeof t=="object"&&t!==null&&t.key!=null?c0(""+t.key):e.toString(36)}function Ao(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ms:case Jw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ol(o,0):r,dh(i)?(n="",t!=null&&(n=t.replace(fh,"$&/")+"/"),Ao(i,e,n,"",function(u){return u})):i!=null&&(id(i)&&(i=u0(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(fh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",dh(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Ol(s,a);o+=Ao(s,e,n,l,i)}else if(l=l0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Ol(s,a++),o+=Ao(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function to(t,e,n){if(t==null)return t;var r=[],i=0;return Ao(t,r,"","",function(s){return e.call(n,s,i++)}),r}function d0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Me={current:null},Oo={transition:null},f0={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:Oo,ReactCurrentOwner:rd};W.Children={map:to,forEach:function(t,e,n){to(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return to(t,function(){e++}),e},toArray:function(t){return to(t,function(e){return e})||[]},only:function(t){if(!id(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=ui;W.Fragment=Zw;W.Profiler=t0;W.PureComponent=td;W.StrictMode=e0;W.Suspense=s0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=f0;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ig({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=rd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ag.call(e,l)&&!lg.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ms,type:t.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(t){return t={$$typeof:r0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:n0,_context:t},t.Consumer=t};W.createElement=ug;W.createFactory=function(t){var e=ug.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:i0,render:t}};W.isValidElement=id;W.lazy=function(t){return{$$typeof:a0,_payload:{_status:-1,_result:t},_init:d0}};W.memo=function(t,e){return{$$typeof:o0,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=Oo.transition;Oo.transition={};try{t()}finally{Oo.transition=e}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(t,e){return Me.current.useCallback(t,e)};W.useContext=function(t){return Me.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Me.current.useDeferredValue(t)};W.useEffect=function(t,e){return Me.current.useEffect(t,e)};W.useId=function(){return Me.current.useId()};W.useImperativeHandle=function(t,e,n){return Me.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Me.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Me.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Me.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Me.current.useReducer(t,e,n)};W.useRef=function(t){return Me.current.useRef(t)};W.useState=function(t){return Me.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Me.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Me.current.useTransition()};W.version="18.2.0";(function(t){t.exports=W})(Q);const sd=Xw(Q.exports);var Cu={},cg={exports:{}},Qe={},dg={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(x,D){var L=x.length;x.push(D);e:for(;0<L;){var ce=L-1>>>1,ge=x[ce];if(0<i(ge,D))x[ce]=D,x[L]=ge,L=ce;else break e}}function n(x){return x.length===0?null:x[0]}function r(x){if(x.length===0)return null;var D=x[0],L=x.pop();if(L!==D){x[0]=L;e:for(var ce=0,ge=x.length,Zs=ge>>>1;ce<Zs;){var Mn=2*(ce+1)-1,Al=x[Mn],Ln=Mn+1,eo=x[Ln];if(0>i(Al,L))Ln<ge&&0>i(eo,Al)?(x[ce]=eo,x[Ln]=L,ce=Ln):(x[ce]=Al,x[Mn]=L,ce=Mn);else if(Ln<ge&&0>i(eo,L))x[ce]=eo,x[Ln]=L,ce=Ln;else break e}}return D}function i(x,D){var L=x.sortIndex-D.sortIndex;return L!==0?L:x.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,g=!1,v=!1,_=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(x){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=x)r(u),D.sortIndex=D.expirationTime,e(l,D);else break;D=n(u)}}function y(x){if(_=!1,m(x),!v)if(n(l)!==null)v=!0,Pl(E);else{var D=n(u);D!==null&&Rl(y,D.startTime-x)}}function E(x,D){v=!1,_&&(_=!1,p(P),P=-1),g=!0;var L=f;try{for(m(D),d=n(l);d!==null&&(!(d.expirationTime>D)||x&&!at());){var ce=d.callback;if(typeof ce=="function"){d.callback=null,f=d.priorityLevel;var ge=ce(d.expirationTime<=D);D=t.unstable_now(),typeof ge=="function"?d.callback=ge:d===n(l)&&r(l),m(D)}else r(l);d=n(l)}if(d!==null)var Zs=!0;else{var Mn=n(u);Mn!==null&&Rl(y,Mn.startTime-D),Zs=!1}return Zs}finally{d=null,f=L,g=!1}}var C=!1,I=null,P=-1,$=5,M=-1;function at(){return!(t.unstable_now()-M<$)}function _i(){if(I!==null){var x=t.unstable_now();M=x;var D=!0;try{D=I(!0,x)}finally{D?yi():(C=!1,I=null)}}else C=!1}var yi;if(typeof h=="function")yi=function(){h(_i)};else if(typeof MessageChannel<"u"){var uh=new MessageChannel,Qw=uh.port2;uh.port1.onmessage=_i,yi=function(){Qw.postMessage(null)}}else yi=function(){k(_i,0)};function Pl(x){I=x,C||(C=!0,yi())}function Rl(x,D){P=k(function(){x(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(x){x.callback=null},t.unstable_continueExecution=function(){v||g||(v=!0,Pl(E))},t.unstable_forceFrameRate=function(x){0>x||125<x?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<x?Math.floor(1e3/x):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(x){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var L=f;f=D;try{return x()}finally{f=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(x,D){switch(x){case 1:case 2:case 3:case 4:case 5:break;default:x=3}var L=f;f=x;try{return D()}finally{f=L}},t.unstable_scheduleCallback=function(x,D,L){var ce=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?ce+L:ce):L=ce,x){case 1:var ge=-1;break;case 2:ge=250;break;case 5:ge=1073741823;break;case 4:ge=1e4;break;default:ge=5e3}return ge=L+ge,x={id:c++,callback:D,priorityLevel:x,startTime:L,expirationTime:ge,sortIndex:-1},L>ce?(x.sortIndex=L,e(u,x),n(l)===null&&x===n(u)&&(_?(p(P),P=-1):_=!0,Rl(y,L-ce))):(x.sortIndex=ge,e(l,x),v||g||(v=!0,Pl(E))),x},t.unstable_shouldYield=at,t.unstable_wrapCallback=function(x){var D=f;return function(){var L=f;f=D;try{return x.apply(this,arguments)}finally{f=L}}}})(fg);(function(t){t.exports=fg})(dg);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg=Q.exports,qe=dg.exports;function w(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var pg=new Set,ts={};function hr(t,e){Kr(t,e),Kr(t+"Capture",e)}function Kr(t,e){for(ts[t]=e,t=0;t<e.length;t++)pg.add(e[t])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Iu=Object.prototype.hasOwnProperty,h0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hh={},ph={};function p0(t){return Iu.call(ph,t)?!0:Iu.call(hh,t)?!1:h0.test(t)?ph[t]=!0:(hh[t]=!0,!1)}function m0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function g0(t,e,n,r){if(e===null||typeof e>"u"||m0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Le(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Te={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Te[t]=new Le(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Te[e]=new Le(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Te[t]=new Le(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Te[t]=new Le(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Te[t]=new Le(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Te[t]=new Le(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Te[t]=new Le(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Te[t]=new Le(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Te[t]=new Le(t,5,!1,t.toLowerCase(),null,!1,!1)});var od=/[\-:]([a-z])/g;function ad(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(od,ad);Te[e]=new Le(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(od,ad);Te[e]=new Le(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(od,ad);Te[e]=new Le(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Te[t]=new Le(t,1,!1,t.toLowerCase(),null,!1,!1)});Te.xlinkHref=new Le("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Te[t]=new Le(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,r){var i=Te.hasOwnProperty(e)?Te[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(g0(e,n,i,r)&&(n=null),r||i===null?p0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,no=Symbol.for("react.element"),yr=Symbol.for("react.portal"),wr=Symbol.for("react.fragment"),ud=Symbol.for("react.strict_mode"),Tu=Symbol.for("react.profiler"),mg=Symbol.for("react.provider"),gg=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),bu=Symbol.for("react.suspense"),xu=Symbol.for("react.suspense_list"),dd=Symbol.for("react.memo"),tn=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),mh=Symbol.iterator;function wi(t){return t===null||typeof t!="object"?null:(t=mh&&t[mh]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,Dl;function Ai(t){if(Dl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Dl=e&&e[1]||""}return`
`+Dl+t}var Ml=!1;function Ll(t,e){if(!t||Ml)return"";Ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ml=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Ai(t):""}function v0(t){switch(t.tag){case 5:return Ai(t.type);case 16:return Ai("Lazy");case 13:return Ai("Suspense");case 19:return Ai("SuspenseList");case 0:case 2:case 15:return t=Ll(t.type,!1),t;case 11:return t=Ll(t.type.render,!1),t;case 1:return t=Ll(t.type,!0),t;default:return""}}function Nu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case wr:return"Fragment";case yr:return"Portal";case Tu:return"Profiler";case ud:return"StrictMode";case bu:return"Suspense";case xu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case gg:return(t.displayName||"Context")+".Consumer";case mg:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case dd:return e=t.displayName||null,e!==null?e:Nu(t.type)||"Memo";case tn:e=t._payload,t=t._init;try{return Nu(t(e))}catch{}}return null}function _0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Nu(e);case 8:return e===ud?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Cn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function _g(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function y0(t){var e=_g(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ro(t){t._valueTracker||(t._valueTracker=y0(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=_g(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Qo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pu(t,e){var n=e.checked;return se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function gh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function wg(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function Ru(t,e){wg(t,e);var n=Cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,Cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function vh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||Qo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Oi=Array.isArray;function Mr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Ou(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(w(91));return se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _h(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(w(92));if(Oi(n)){if(1<n.length)throw Error(w(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cn(n)}}function Eg(t,e){var n=Cn(e.value),r=Cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function yh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Sg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Du(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var io,kg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(io=io||document.createElement("div"),io.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=io.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ns(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ui={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},w0=["Webkit","ms","Moz","O"];Object.keys(Ui).forEach(function(t){w0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ui[e]=Ui[t]})});function Cg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ui.hasOwnProperty(t)&&Ui[t]?(""+e).trim():e+"px"}function Ig(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Cg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var E0=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mu(t,e){if(e){if(E0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(w(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(w(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(w(61))}if(e.style!=null&&typeof e.style!="object")throw Error(w(62))}}function Lu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fu=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var zu=null,Lr=null,Fr=null;function wh(t){if(t=zs(t)){if(typeof zu!="function")throw Error(w(280));var e=t.stateNode;e&&(e=Xa(e),zu(t.stateNode,t.type,e))}}function Tg(t){Lr?Fr?Fr.push(t):Fr=[t]:Lr=t}function bg(){if(Lr){var t=Lr,e=Fr;if(Fr=Lr=null,wh(t),e)for(t=0;t<e.length;t++)wh(e[t])}}function xg(t,e){return t(e)}function Ng(){}var Fl=!1;function Pg(t,e,n){if(Fl)return t(e,n);Fl=!0;try{return xg(t,e,n)}finally{Fl=!1,(Lr!==null||Fr!==null)&&(Ng(),bg())}}function rs(t,e){var n=t.stateNode;if(n===null)return null;var r=Xa(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(w(231,e,typeof n));return n}var Uu=!1;if(Ut)try{var Ei={};Object.defineProperty(Ei,"passive",{get:function(){Uu=!0}}),window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{Uu=!1}function S0(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var ji=!1,Xo=null,Jo=!1,ju=null,k0={onError:function(t){ji=!0,Xo=t}};function C0(t,e,n,r,i,s,o,a,l){ji=!1,Xo=null,S0.apply(k0,arguments)}function I0(t,e,n,r,i,s,o,a,l){if(C0.apply(this,arguments),ji){if(ji){var u=Xo;ji=!1,Xo=null}else throw Error(w(198));Jo||(Jo=!0,ju=u)}}function pr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Rg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Eh(t){if(pr(t)!==t)throw Error(w(188))}function T0(t){var e=t.alternate;if(!e){if(e=pr(t),e===null)throw Error(w(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Eh(i),t;if(s===r)return Eh(i),e;s=s.sibling}throw Error(w(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(w(189))}}if(n.alternate!==r)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?t:e}function Ag(t){return t=T0(t),t!==null?Og(t):null}function Og(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Og(t);if(e!==null)return e;t=t.sibling}return null}var Dg=qe.unstable_scheduleCallback,Sh=qe.unstable_cancelCallback,b0=qe.unstable_shouldYield,x0=qe.unstable_requestPaint,de=qe.unstable_now,N0=qe.unstable_getCurrentPriorityLevel,hd=qe.unstable_ImmediatePriority,Mg=qe.unstable_UserBlockingPriority,Zo=qe.unstable_NormalPriority,P0=qe.unstable_LowPriority,Lg=qe.unstable_IdlePriority,Ya=null,kt=null;function R0(t){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ya,t,void 0,(t.current.flags&128)===128)}catch{}}var mt=Math.clz32?Math.clz32:D0,A0=Math.log,O0=Math.LN2;function D0(t){return t>>>=0,t===0?32:31-(A0(t)/O0|0)|0}var so=64,oo=4194304;function Di(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ea(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Di(a):(s&=o,s!==0&&(r=Di(s)))}else o=n&~i,o!==0?r=Di(o):s!==0&&(r=Di(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mt(e),i=1<<n,r|=t[n],e&=~i;return r}function M0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function L0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mt(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=M0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fg(){var t=so;return so<<=1,(so&4194240)===0&&(so=64),t}function zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ls(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mt(e),t[e]=n}function F0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var V=0;function zg(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Ug,md,jg,Wg,$g,$u=!1,ao=[],fn=null,hn=null,pn=null,is=new Map,ss=new Map,rn=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(t,e){switch(t){case"focusin":case"focusout":fn=null;break;case"dragenter":case"dragleave":hn=null;break;case"mouseover":case"mouseout":pn=null;break;case"pointerover":case"pointerout":is.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ss.delete(e.pointerId)}}function Si(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=zs(e),e!==null&&md(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function U0(t,e,n,r,i){switch(e){case"focusin":return fn=Si(fn,t,e,n,r,i),!0;case"dragenter":return hn=Si(hn,t,e,n,r,i),!0;case"mouseover":return pn=Si(pn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return is.set(s,Si(is.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,ss.set(s,Si(ss.get(s)||null,t,e,n,r,i)),!0}return!1}function Bg(t){var e=Wn(t.target);if(e!==null){var n=pr(e);if(n!==null){if(e=n.tag,e===13){if(e=Rg(n),e!==null){t.blockedOn=e,$g(t.priority,function(){jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Do(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Bu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Fu=r,n.target.dispatchEvent(r),Fu=null}else return e=zs(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function Ch(t,e,n){Do(t)&&n.delete(e)}function j0(){$u=!1,fn!==null&&Do(fn)&&(fn=null),hn!==null&&Do(hn)&&(hn=null),pn!==null&&Do(pn)&&(pn=null),is.forEach(Ch),ss.forEach(Ch)}function ki(t,e){t.blockedOn===e&&(t.blockedOn=null,$u||($u=!0,qe.unstable_scheduleCallback(qe.unstable_NormalPriority,j0)))}function os(t){function e(i){return ki(i,t)}if(0<ao.length){ki(ao[0],t);for(var n=1;n<ao.length;n++){var r=ao[n];r.blockedOn===t&&(r.blockedOn=null)}}for(fn!==null&&ki(fn,t),hn!==null&&ki(hn,t),pn!==null&&ki(pn,t),is.forEach(e),ss.forEach(e),n=0;n<rn.length;n++)r=rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<rn.length&&(n=rn[0],n.blockedOn===null);)Bg(n),n.blockedOn===null&&rn.shift()}var zr=qt.ReactCurrentBatchConfig,ta=!0;function W0(t,e,n,r){var i=V,s=zr.transition;zr.transition=null;try{V=1,gd(t,e,n,r)}finally{V=i,zr.transition=s}}function $0(t,e,n,r){var i=V,s=zr.transition;zr.transition=null;try{V=4,gd(t,e,n,r)}finally{V=i,zr.transition=s}}function gd(t,e,n,r){if(ta){var i=Bu(t,e,n,r);if(i===null)Kl(t,e,r,na,n),kh(t,r);else if(U0(i,t,e,n,r))r.stopPropagation();else if(kh(t,r),e&4&&-1<z0.indexOf(t)){for(;i!==null;){var s=zs(i);if(s!==null&&Ug(s),s=Bu(t,e,n,r),s===null&&Kl(t,e,r,na,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Kl(t,e,r,null,n)}}var na=null;function Bu(t,e,n,r){if(na=null,t=fd(r),t=Wn(t),t!==null)if(e=pr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Rg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return na=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N0()){case hd:return 1;case Mg:return 4;case Zo:case P0:return 16;case Lg:return 536870912;default:return 16}default:return 16}}var un=null,vd=null,Mo=null;function Vg(){if(Mo)return Mo;var t,e=vd,n=e.length,r,i="value"in un?un.value:un.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Mo=i.slice(t,1<r?1-r:void 0)}function Lo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function lo(){return!0}function Ih(){return!1}function Xe(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?lo:Ih,this.isPropagationStopped=Ih,this}return se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lo)},persist:function(){},isPersistent:lo}),e}var ci={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=Xe(ci),Fs=se({},ci,{view:0,detail:0}),B0=Xe(Fs),Ul,jl,Ci,Ka=se({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ci&&(Ci&&t.type==="mousemove"?(Ul=t.screenX-Ci.screenX,jl=t.screenY-Ci.screenY):jl=Ul=0,Ci=t),Ul)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),Th=Xe(Ka),H0=se({},Ka,{dataTransfer:0}),V0=Xe(H0),G0=se({},Fs,{relatedTarget:0}),Wl=Xe(G0),Y0=se({},ci,{animationName:0,elapsedTime:0,pseudoElement:0}),K0=Xe(Y0),q0=se({},ci,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Q0=Xe(q0),X0=se({},ci,{data:0}),bh=Xe(X0),J0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Z0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function t1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=e1[t])?!!e[t]:!1}function yd(){return t1}var n1=se({},Fs,{key:function(t){if(t.key){var e=J0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Lo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Z0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yd,charCode:function(t){return t.type==="keypress"?Lo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Lo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),r1=Xe(n1),i1=se({},Ka,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=Xe(i1),s1=se({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yd}),o1=Xe(s1),a1=se({},ci,{propertyName:0,elapsedTime:0,pseudoElement:0}),l1=Xe(a1),u1=se({},Ka,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),c1=Xe(u1),d1=[9,13,27,32],wd=Ut&&"CompositionEvent"in window,Wi=null;Ut&&"documentMode"in document&&(Wi=document.documentMode);var f1=Ut&&"TextEvent"in window&&!Wi,Gg=Ut&&(!wd||Wi&&8<Wi&&11>=Wi),Nh=String.fromCharCode(32),Ph=!1;function Yg(t,e){switch(t){case"keyup":return d1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Er=!1;function h1(t,e){switch(t){case"compositionend":return Kg(e);case"keypress":return e.which!==32?null:(Ph=!0,Nh);case"textInput":return t=e.data,t===Nh&&Ph?null:t;default:return null}}function p1(t,e){if(Er)return t==="compositionend"||!wd&&Yg(t,e)?(t=Vg(),Mo=vd=un=null,Er=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Gg&&e.locale!=="ko"?null:e.data;default:return null}}var m1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!m1[t.type]:e==="textarea"}function qg(t,e,n,r){Tg(r),e=ra(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $i=null,as=null;function g1(t){ov(t,0)}function qa(t){var e=Cr(t);if(yg(e))return t}function v1(t,e){if(t==="change")return e}var Qg=!1;if(Ut){var $l;if(Ut){var Bl="oninput"in document;if(!Bl){var Ah=document.createElement("div");Ah.setAttribute("oninput","return;"),Bl=typeof Ah.oninput=="function"}$l=Bl}else $l=!1;Qg=$l&&(!document.documentMode||9<document.documentMode)}function Oh(){$i&&($i.detachEvent("onpropertychange",Xg),as=$i=null)}function Xg(t){if(t.propertyName==="value"&&qa(as)){var e=[];qg(e,as,t,fd(t)),Pg(g1,e)}}function _1(t,e,n){t==="focusin"?(Oh(),$i=e,as=n,$i.attachEvent("onpropertychange",Xg)):t==="focusout"&&Oh()}function y1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return qa(as)}function w1(t,e){if(t==="click")return qa(e)}function E1(t,e){if(t==="input"||t==="change")return qa(e)}function S1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:S1;function ls(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Iu.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function Dh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mh(t,e){var n=Dh(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Dh(n)}}function Jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=Qo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Qo(t.document)}return e}function Ed(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function k1(t){var e=Zg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jg(n.ownerDocument.documentElement,n)){if(r!==null&&Ed(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Mh(n,s);var o=Mh(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var C1=Ut&&"documentMode"in document&&11>=document.documentMode,Sr=null,Hu=null,Bi=null,Vu=!1;function Lh(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vu||Sr==null||Sr!==Qo(r)||(r=Sr,"selectionStart"in r&&Ed(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&ls(Bi,r)||(Bi=r,r=ra(Hu,"onSelect"),0<r.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Sr)))}function uo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var kr={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},Hl={},ev={};Ut&&(ev=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);function Qa(t){if(Hl[t])return Hl[t];if(!kr[t])return t;var e=kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in ev)return Hl[t]=e[n];return t}var tv=Qa("animationend"),nv=Qa("animationiteration"),rv=Qa("animationstart"),iv=Qa("transitionend"),sv=new Map,Fh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rn(t,e){sv.set(t,e),hr(e,[t])}for(var Vl=0;Vl<Fh.length;Vl++){var Gl=Fh[Vl],I1=Gl.toLowerCase(),T1=Gl[0].toUpperCase()+Gl.slice(1);Rn(I1,"on"+T1)}Rn(tv,"onAnimationEnd");Rn(nv,"onAnimationIteration");Rn(rv,"onAnimationStart");Rn("dblclick","onDoubleClick");Rn("focusin","onFocus");Rn("focusout","onBlur");Rn(iv,"onTransitionEnd");Kr("onMouseEnter",["mouseout","mouseover"]);Kr("onMouseLeave",["mouseout","mouseover"]);Kr("onPointerEnter",["pointerout","pointerover"]);Kr("onPointerLeave",["pointerout","pointerover"]);hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),b1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mi));function zh(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,I0(r,e,void 0,t),t.currentTarget=null}function ov(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;zh(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;zh(i,a,u),s=l}}}if(Jo)throw t=ju,Jo=!1,ju=null,t}function J(t,e){var n=e[Qu];n===void 0&&(n=e[Qu]=new Set);var r=t+"__bubble";n.has(r)||(av(e,t,2,!1),n.add(r))}function Yl(t,e,n){var r=0;e&&(r|=4),av(n,t,r,e)}var co="_reactListening"+Math.random().toString(36).slice(2);function us(t){if(!t[co]){t[co]=!0,pg.forEach(function(n){n!=="selectionchange"&&(b1.has(n)||Yl(n,!1,t),Yl(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[co]||(e[co]=!0,Yl("selectionchange",!1,e))}}function av(t,e,n,r){switch(Hg(e)){case 1:var i=W0;break;case 4:i=$0;break;default:i=gd}n=i.bind(null,e,n,t),i=void 0,!Uu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Kl(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Wn(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Pg(function(){var u=s,c=fd(n),d=[];e:{var f=sv.get(t);if(f!==void 0){var g=_d,v=t;switch(t){case"keypress":if(Lo(n)===0)break e;case"keydown":case"keyup":g=r1;break;case"focusin":v="focus",g=Wl;break;case"focusout":v="blur",g=Wl;break;case"beforeblur":case"afterblur":g=Wl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Th;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=V0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=o1;break;case tv:case nv:case rv:g=K0;break;case iv:g=l1;break;case"scroll":g=B0;break;case"wheel":g=c1;break;case"copy":case"cut":case"paste":g=Q0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=xh}var _=(e&4)!==0,k=!_&&t==="scroll",p=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,m;h!==null;){m=h;var y=m.stateNode;if(m.tag===5&&y!==null&&(m=y,p!==null&&(y=rs(h,p),y!=null&&_.push(cs(h,y,m)))),k)break;h=h.return}0<_.length&&(f=new g(f,v,null,n,c),d.push({event:f,listeners:_}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Fu&&(v=n.relatedTarget||n.fromElement)&&(Wn(v)||v[jt]))break e;if((g||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,g?(v=n.relatedTarget||n.toElement,g=u,v=v?Wn(v):null,v!==null&&(k=pr(v),v!==k||v.tag!==5&&v.tag!==6)&&(v=null)):(g=null,v=u),g!==v)){if(_=Th,y="onMouseLeave",p="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=xh,y="onPointerLeave",p="onPointerEnter",h="pointer"),k=g==null?f:Cr(g),m=v==null?f:Cr(v),f=new _(y,h+"leave",g,n,c),f.target=k,f.relatedTarget=m,y=null,Wn(c)===u&&(_=new _(p,h+"enter",v,n,c),_.target=m,_.relatedTarget=k,y=_),k=y,g&&v)t:{for(_=g,p=v,h=0,m=_;m;m=vr(m))h++;for(m=0,y=p;y;y=vr(y))m++;for(;0<h-m;)_=vr(_),h--;for(;0<m-h;)p=vr(p),m--;for(;h--;){if(_===p||p!==null&&_===p.alternate)break t;_=vr(_),p=vr(p)}_=null}else _=null;g!==null&&Uh(d,f,g,_,!1),v!==null&&k!==null&&Uh(d,k,v,_,!0)}}e:{if(f=u?Cr(u):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var E=v1;else if(Rh(f))if(Qg)E=E1;else{E=y1;var C=_1}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(E=w1);if(E&&(E=E(t,u))){qg(d,E,n,c);break e}C&&C(t,f,u),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Au(f,"number",f.value)}switch(C=u?Cr(u):window,t){case"focusin":(Rh(C)||C.contentEditable==="true")&&(Sr=C,Hu=u,Bi=null);break;case"focusout":Bi=Hu=Sr=null;break;case"mousedown":Vu=!0;break;case"contextmenu":case"mouseup":case"dragend":Vu=!1,Lh(d,n,c);break;case"selectionchange":if(C1)break;case"keydown":case"keyup":Lh(d,n,c)}var I;if(wd)e:{switch(t){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Er?Yg(t,n)&&(P="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Gg&&n.locale!=="ko"&&(Er||P!=="onCompositionStart"?P==="onCompositionEnd"&&Er&&(I=Vg()):(un=c,vd="value"in un?un.value:un.textContent,Er=!0)),C=ra(u,P),0<C.length&&(P=new bh(P,t,null,n,c),d.push({event:P,listeners:C}),I?P.data=I:(I=Kg(n),I!==null&&(P.data=I)))),(I=f1?h1(t,n):p1(t,n))&&(u=ra(u,"onBeforeInput"),0<u.length&&(c=new bh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=I))}ov(d,e)})}function cs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ra(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=rs(t,n),s!=null&&r.unshift(cs(t,s,i)),s=rs(t,e),s!=null&&r.push(cs(t,s,i))),t=t.return}return r}function vr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Uh(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=rs(n,s),l!=null&&o.unshift(cs(n,l,a))):i||(l=rs(n,s),l!=null&&o.push(cs(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var x1=/\r\n?/g,N1=/\u0000|\uFFFD/g;function jh(t){return(typeof t=="string"?t:""+t).replace(x1,`
`).replace(N1,"")}function fo(t,e,n){if(e=jh(e),jh(t)!==e&&n)throw Error(w(425))}function ia(){}var Gu=null,Yu=null;function Ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qu=typeof setTimeout=="function"?setTimeout:void 0,P1=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,R1=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(t){return Wh.resolve(null).then(t).catch(A1)}:qu;function A1(t){setTimeout(function(){throw t})}function ql(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),os(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);os(e)}function mn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function $h(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var di=Math.random().toString(36).slice(2),Et="__reactFiber$"+di,ds="__reactProps$"+di,jt="__reactContainer$"+di,Qu="__reactEvents$"+di,O1="__reactListeners$"+di,D1="__reactHandles$"+di;function Wn(t){var e=t[Et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[jt]||n[Et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=$h(t);t!==null;){if(n=t[Et])return n;t=$h(t)}return e}t=n,n=t.parentNode}return null}function zs(t){return t=t[Et]||t[jt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(w(33))}function Xa(t){return t[ds]||null}var Xu=[],Ir=-1;function An(t){return{current:t}}function ee(t){0>Ir||(t.current=Xu[Ir],Xu[Ir]=null,Ir--)}function X(t,e){Ir++,Xu[Ir]=t.current,t.current=e}var In={},Re=An(In),We=An(!1),Zn=In;function qr(t,e){var n=t.type.contextTypes;if(!n)return In;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function $e(t){return t=t.childContextTypes,t!=null}function sa(){ee(We),ee(Re)}function Bh(t,e,n){if(Re.current!==In)throw Error(w(168));X(Re,e),X(We,n)}function lv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(w(108,_0(t)||"Unknown",i));return se({},n,r)}function oa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||In,Zn=Re.current,X(Re,t),X(We,We.current),!0}function Hh(t,e,n){var r=t.stateNode;if(!r)throw Error(w(169));n?(t=lv(t,e,Zn),r.__reactInternalMemoizedMergedChildContext=t,ee(We),ee(Re),X(Re,t)):ee(We),X(We,n)}var Pt=null,Ja=!1,Ql=!1;function uv(t){Pt===null?Pt=[t]:Pt.push(t)}function M1(t){Ja=!0,uv(t)}function On(){if(!Ql&&Pt!==null){Ql=!0;var t=0,e=V;try{var n=Pt;for(V=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Pt=null,Ja=!1}catch(i){throw Pt!==null&&(Pt=Pt.slice(t+1)),Dg(hd,On),i}finally{V=e,Ql=!1}}return null}var Tr=[],br=0,aa=null,la=0,Ze=[],et=0,er=null,At=1,Ot="";function Fn(t,e){Tr[br++]=la,Tr[br++]=aa,aa=t,la=e}function cv(t,e,n){Ze[et++]=At,Ze[et++]=Ot,Ze[et++]=er,er=t;var r=At;t=Ot;var i=32-mt(r)-1;r&=~(1<<i),n+=1;var s=32-mt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,At=1<<32-mt(e)+i|n<<i|r,Ot=s+t}else At=1<<s|n<<i|r,Ot=t}function Sd(t){t.return!==null&&(Fn(t,1),cv(t,1,0))}function kd(t){for(;t===aa;)aa=Tr[--br],Tr[br]=null,la=Tr[--br],Tr[br]=null;for(;t===er;)er=Ze[--et],Ze[et]=null,Ot=Ze[--et],Ze[et]=null,At=Ze[--et],Ze[et]=null}var Ye=null,Ge=null,ne=!1,dt=null;function dv(t,e){var n=tt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Vh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,Ge=mn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,Ge=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=er!==null?{id:At,overflow:Ot}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,Ge=null,!0):!1;default:return!1}}function Ju(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Zu(t){if(ne){var e=Ge;if(e){var n=e;if(!Vh(t,e)){if(Ju(t))throw Error(w(418));e=mn(n.nextSibling);var r=Ye;e&&Vh(t,e)?dv(r,n):(t.flags=t.flags&-4097|2,ne=!1,Ye=t)}}else{if(Ju(t))throw Error(w(418));t.flags=t.flags&-4097|2,ne=!1,Ye=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function ho(t){if(t!==Ye)return!1;if(!ne)return Gh(t),ne=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ku(t.type,t.memoizedProps)),e&&(e=Ge)){if(Ju(t))throw fv(),Error(w(418));for(;e;)dv(t,e),e=mn(e.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(w(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ge=mn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ge=null}}else Ge=Ye?mn(t.stateNode.nextSibling):null;return!0}function fv(){for(var t=Ge;t;)t=mn(t.nextSibling)}function Qr(){Ge=Ye=null,ne=!1}function Cd(t){dt===null?dt=[t]:dt.push(t)}var L1=qt.ReactCurrentBatchConfig;function ut(t,e){if(t&&t.defaultProps){e=se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var ua=An(null),ca=null,xr=null,Id=null;function Td(){Id=xr=ca=null}function bd(t){var e=ua.current;ee(ua),t._currentValue=e}function ec(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ur(t,e){ca=t,Id=xr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(ze=!0),t.firstContext=null)}function it(t){var e=t._currentValue;if(Id!==t)if(t={context:t,memoizedValue:e,next:null},xr===null){if(ca===null)throw Error(w(308));xr=t,ca.dependencies={lanes:0,firstContext:t}}else xr=xr.next=t;return e}var $n=null;function xd(t){$n===null?$n=[t]:$n.push(t)}function hv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,xd(e)):(n.next=i.next,i.next=n),e.interleaved=n,Wt(t,r)}function Wt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var nn=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function gn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(B&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Wt(t,n)}return i=r.interleaved,i===null?(e.next=e,xd(r)):(e.next=i.next,i.next=e),r.interleaved=e,Wt(t,n)}function Fo(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}function Yh(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function da(t,e,n,r){var i=t.updateQueue;nn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=t,_=a;switch(f=e,g=n,_.tag){case 1:if(v=_.payload,typeof v=="function"){d=v.call(g,d,f);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=_.payload,f=typeof v=="function"?v.call(g,d,f):v,f==null)break e;d=se({},d,f);break e;case 2:nn=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=g,l=d):c=c.next=g,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);nr|=o,t.lanes=o,t.memoizedState=d}}function Kh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(w(191,i));i.call(r)}}}var mv=new hg.Component().refs;function tc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Za={isMounted:function(t){return(t=t._reactInternals)?pr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=De(),i=_n(t),s=Ft(r,i);s.payload=e,n!=null&&(s.callback=n),e=gn(t,s,i),e!==null&&(gt(e,t,i,r),Fo(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=De(),i=_n(t),s=Ft(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=gn(t,s,i),e!==null&&(gt(e,t,i,r),Fo(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=De(),r=_n(t),i=Ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=gn(t,i,r),e!==null&&(gt(e,t,r,n),Fo(e,t,r))}};function qh(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ls(n,r)||!ls(i,s):!0}function gv(t,e,n){var r=!1,i=In,s=e.contextType;return typeof s=="object"&&s!==null?s=it(s):(i=$e(e)?Zn:Re.current,r=e.contextTypes,s=(r=r!=null)?qr(t,i):In),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Za,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Qh(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Za.enqueueReplaceState(e,e.state,null)}function nc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=mv,Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=it(s):(s=$e(e)?Zn:Re.current,i.context=qr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Za.enqueueReplaceState(i,i.state,null),da(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Ii(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(w(309));var r=n.stateNode}if(!r)throw Error(w(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===mv&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(w(284));if(!n._owner)throw Error(w(290,t))}return t}function po(t,e){throw t=Object.prototype.toString.call(e),Error(w(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Xh(t){var e=t._init;return e(t._payload)}function vv(t){function e(p,h){if(t){var m=p.deletions;m===null?(p.deletions=[h],p.flags|=16):m.push(h)}}function n(p,h){if(!t)return null;for(;h!==null;)e(p,h),h=h.sibling;return null}function r(p,h){for(p=new Map;h!==null;)h.key!==null?p.set(h.key,h):p.set(h.index,h),h=h.sibling;return p}function i(p,h){return p=yn(p,h),p.index=0,p.sibling=null,p}function s(p,h,m){return p.index=m,t?(m=p.alternate,m!==null?(m=m.index,m<h?(p.flags|=2,h):m):(p.flags|=2,h)):(p.flags|=1048576,h)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function a(p,h,m,y){return h===null||h.tag!==6?(h=ru(m,p.mode,y),h.return=p,h):(h=i(h,m),h.return=p,h)}function l(p,h,m,y){var E=m.type;return E===wr?c(p,h,m.props.children,y,m.key):h!==null&&(h.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&Xh(E)===h.type)?(y=i(h,m.props),y.ref=Ii(p,h,m),y.return=p,y):(y=Bo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ii(p,h,m),y.return=p,y)}function u(p,h,m,y){return h===null||h.tag!==4||h.stateNode.containerInfo!==m.containerInfo||h.stateNode.implementation!==m.implementation?(h=iu(m,p.mode,y),h.return=p,h):(h=i(h,m.children||[]),h.return=p,h)}function c(p,h,m,y,E){return h===null||h.tag!==7?(h=Qn(m,p.mode,y,E),h.return=p,h):(h=i(h,m),h.return=p,h)}function d(p,h,m){if(typeof h=="string"&&h!==""||typeof h=="number")return h=ru(""+h,p.mode,m),h.return=p,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case no:return m=Bo(h.type,h.key,h.props,null,p.mode,m),m.ref=Ii(p,null,h),m.return=p,m;case yr:return h=iu(h,p.mode,m),h.return=p,h;case tn:var y=h._init;return d(p,y(h._payload),m)}if(Oi(h)||wi(h))return h=Qn(h,p.mode,m,null),h.return=p,h;po(p,h)}return null}function f(p,h,m,y){var E=h!==null?h.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return E!==null?null:a(p,h,""+m,y);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case no:return m.key===E?l(p,h,m,y):null;case yr:return m.key===E?u(p,h,m,y):null;case tn:return E=m._init,f(p,h,E(m._payload),y)}if(Oi(m)||wi(m))return E!==null?null:c(p,h,m,y,null);po(p,m)}return null}function g(p,h,m,y,E){if(typeof y=="string"&&y!==""||typeof y=="number")return p=p.get(m)||null,a(h,p,""+y,E);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case no:return p=p.get(y.key===null?m:y.key)||null,l(h,p,y,E);case yr:return p=p.get(y.key===null?m:y.key)||null,u(h,p,y,E);case tn:var C=y._init;return g(p,h,m,C(y._payload),E)}if(Oi(y)||wi(y))return p=p.get(m)||null,c(h,p,y,E,null);po(h,y)}return null}function v(p,h,m,y){for(var E=null,C=null,I=h,P=h=0,$=null;I!==null&&P<m.length;P++){I.index>P?($=I,I=null):$=I.sibling;var M=f(p,I,m[P],y);if(M===null){I===null&&(I=$);break}t&&I&&M.alternate===null&&e(p,I),h=s(M,h,P),C===null?E=M:C.sibling=M,C=M,I=$}if(P===m.length)return n(p,I),ne&&Fn(p,P),E;if(I===null){for(;P<m.length;P++)I=d(p,m[P],y),I!==null&&(h=s(I,h,P),C===null?E=I:C.sibling=I,C=I);return ne&&Fn(p,P),E}for(I=r(p,I);P<m.length;P++)$=g(I,p,P,m[P],y),$!==null&&(t&&$.alternate!==null&&I.delete($.key===null?P:$.key),h=s($,h,P),C===null?E=$:C.sibling=$,C=$);return t&&I.forEach(function(at){return e(p,at)}),ne&&Fn(p,P),E}function _(p,h,m,y){var E=wi(m);if(typeof E!="function")throw Error(w(150));if(m=E.call(m),m==null)throw Error(w(151));for(var C=E=null,I=h,P=h=0,$=null,M=m.next();I!==null&&!M.done;P++,M=m.next()){I.index>P?($=I,I=null):$=I.sibling;var at=f(p,I,M.value,y);if(at===null){I===null&&(I=$);break}t&&I&&at.alternate===null&&e(p,I),h=s(at,h,P),C===null?E=at:C.sibling=at,C=at,I=$}if(M.done)return n(p,I),ne&&Fn(p,P),E;if(I===null){for(;!M.done;P++,M=m.next())M=d(p,M.value,y),M!==null&&(h=s(M,h,P),C===null?E=M:C.sibling=M,C=M);return ne&&Fn(p,P),E}for(I=r(p,I);!M.done;P++,M=m.next())M=g(I,p,P,M.value,y),M!==null&&(t&&M.alternate!==null&&I.delete(M.key===null?P:M.key),h=s(M,h,P),C===null?E=M:C.sibling=M,C=M);return t&&I.forEach(function(_i){return e(p,_i)}),ne&&Fn(p,P),E}function k(p,h,m,y){if(typeof m=="object"&&m!==null&&m.type===wr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case no:e:{for(var E=m.key,C=h;C!==null;){if(C.key===E){if(E=m.type,E===wr){if(C.tag===7){n(p,C.sibling),h=i(C,m.props.children),h.return=p,p=h;break e}}else if(C.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===tn&&Xh(E)===C.type){n(p,C.sibling),h=i(C,m.props),h.ref=Ii(p,C,m),h.return=p,p=h;break e}n(p,C);break}else e(p,C);C=C.sibling}m.type===wr?(h=Qn(m.props.children,p.mode,y,m.key),h.return=p,p=h):(y=Bo(m.type,m.key,m.props,null,p.mode,y),y.ref=Ii(p,h,m),y.return=p,p=y)}return o(p);case yr:e:{for(C=m.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===m.containerInfo&&h.stateNode.implementation===m.implementation){n(p,h.sibling),h=i(h,m.children||[]),h.return=p,p=h;break e}else{n(p,h);break}else e(p,h);h=h.sibling}h=iu(m,p.mode,y),h.return=p,p=h}return o(p);case tn:return C=m._init,k(p,h,C(m._payload),y)}if(Oi(m))return v(p,h,m,y);if(wi(m))return _(p,h,m,y);po(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,h!==null&&h.tag===6?(n(p,h.sibling),h=i(h,m),h.return=p,p=h):(n(p,h),h=ru(m,p.mode,y),h.return=p,p=h),o(p)):n(p,h)}return k}var Xr=vv(!0),_v=vv(!1),Us={},Ct=An(Us),fs=An(Us),hs=An(Us);function Bn(t){if(t===Us)throw Error(w(174));return t}function Pd(t,e){switch(X(hs,e),X(fs,t),X(Ct,Us),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Du(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Du(e,t)}ee(Ct),X(Ct,e)}function Jr(){ee(Ct),ee(fs),ee(hs)}function yv(t){Bn(hs.current);var e=Bn(Ct.current),n=Du(e,t.type);e!==n&&(X(fs,t),X(Ct,n))}function Rd(t){fs.current===t&&(ee(Ct),ee(fs))}var re=An(0);function fa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Xl=[];function Ad(){for(var t=0;t<Xl.length;t++)Xl[t]._workInProgressVersionPrimary=null;Xl.length=0}var zo=qt.ReactCurrentDispatcher,Jl=qt.ReactCurrentBatchConfig,tr=0,ie=null,he=null,_e=null,ha=!1,Hi=!1,ps=0,F1=0;function xe(){throw Error(w(321))}function Od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function Dd(t,e,n,r,i,s){if(tr=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,zo.current=t===null||t.memoizedState===null?W1:$1,t=n(r,i),Hi){s=0;do{if(Hi=!1,ps=0,25<=s)throw Error(w(301));s+=1,_e=he=null,e.updateQueue=null,zo.current=B1,t=n(r,i)}while(Hi)}if(zo.current=pa,e=he!==null&&he.next!==null,tr=0,_e=he=ie=null,ha=!1,e)throw Error(w(300));return t}function Md(){var t=ps!==0;return ps=0,t}function wt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _e===null?ie.memoizedState=_e=t:_e=_e.next=t,_e}function st(){if(he===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=he.next;var e=_e===null?ie.memoizedState:_e.next;if(e!==null)_e=e,he=t;else{if(t===null)throw Error(w(310));he=t,t={memoizedState:he.memoizedState,baseState:he.baseState,baseQueue:he.baseQueue,queue:he.queue,next:null},_e===null?ie.memoizedState=_e=t:_e=_e.next=t}return _e}function ms(t,e){return typeof e=="function"?e(t):e}function Zl(t){var e=st(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=he,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((tr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,ie.lanes|=c,nr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,_t(r,e.memoizedState)||(ze=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ie.lanes|=s,nr|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function eu(t){var e=st(),n=e.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function wv(){}function Ev(t,e){var n=ie,r=st(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,Ld(Cv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||_e!==null&&_e.memoizedState.tag&1){if(n.flags|=2048,gs(9,kv.bind(null,n,r,i,e),void 0,null),Ee===null)throw Error(w(349));(tr&30)!==0||Sv(n,e,i)}return i}function Sv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function kv(t,e,n,r){e.value=n,e.getSnapshot=r,Iv(e)&&Tv(t)}function Cv(t,e,n){return n(function(){Iv(e)&&Tv(t)})}function Iv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function Tv(t){var e=Wt(t,1);e!==null&&gt(e,t,1,-1)}function Jh(t){var e=wt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ms,lastRenderedState:t},e.queue=t,t=t.dispatch=j1.bind(null,ie,t),[e.memoizedState,t]}function gs(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ie.updateQueue,e===null?(e={lastEffect:null,stores:null},ie.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function bv(){return st().memoizedState}function Uo(t,e,n,r){var i=wt();ie.flags|=t,i.memoizedState=gs(1|e,n,void 0,r===void 0?null:r)}function el(t,e,n,r){var i=st();r=r===void 0?null:r;var s=void 0;if(he!==null){var o=he.memoizedState;if(s=o.destroy,r!==null&&Od(r,o.deps)){i.memoizedState=gs(e,n,s,r);return}}ie.flags|=t,i.memoizedState=gs(1|e,n,s,r)}function Zh(t,e){return Uo(8390656,8,t,e)}function Ld(t,e){return el(2048,8,t,e)}function xv(t,e){return el(4,2,t,e)}function Nv(t,e){return el(4,4,t,e)}function Pv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rv(t,e,n){return n=n!=null?n.concat([t]):null,el(4,4,Pv.bind(null,e,t),n)}function Fd(){}function Av(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ov(t,e){var n=st();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Dv(t,e,n){return(tr&21)===0?(t.baseState&&(t.baseState=!1,ze=!0),t.memoizedState=n):(_t(n,e)||(n=Fg(),ie.lanes|=n,nr|=n,t.baseState=!0),e)}function z1(t,e){var n=V;V=n!==0&&4>n?n:4,t(!0);var r=Jl.transition;Jl.transition={};try{t(!1),e()}finally{V=n,Jl.transition=r}}function Mv(){return st().memoizedState}function U1(t,e,n){var r=_n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Lv(t))Fv(e,n);else if(n=hv(t,e,n,r),n!==null){var i=De();gt(n,t,r,i),zv(n,e,r)}}function j1(t,e,n){var r=_n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Lv(t))Fv(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,_t(a,o)){var l=e.interleaved;l===null?(i.next=i,xd(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=hv(t,e,i,r),n!==null&&(i=De(),gt(n,t,r,i),zv(n,e,r))}}function Lv(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Fv(t,e){Hi=ha=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function zv(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,pd(t,n)}}var pa={readContext:it,useCallback:xe,useContext:xe,useEffect:xe,useImperativeHandle:xe,useInsertionEffect:xe,useLayoutEffect:xe,useMemo:xe,useReducer:xe,useRef:xe,useState:xe,useDebugValue:xe,useDeferredValue:xe,useTransition:xe,useMutableSource:xe,useSyncExternalStore:xe,useId:xe,unstable_isNewReconciler:!1},W1={readContext:it,useCallback:function(t,e){return wt().memoizedState=[t,e===void 0?null:e],t},useContext:it,useEffect:Zh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Uo(4194308,4,Pv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Uo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Uo(4,2,t,e)},useMemo:function(t,e){var n=wt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=wt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=U1.bind(null,ie,t),[r.memoizedState,t]},useRef:function(t){var e=wt();return t={current:t},e.memoizedState=t},useState:Jh,useDebugValue:Fd,useDeferredValue:function(t){return wt().memoizedState=t},useTransition:function(){var t=Jh(!1),e=t[0];return t=z1.bind(null,t[1]),wt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ie,i=wt();if(ne){if(n===void 0)throw Error(w(407));n=n()}else{if(n=e(),Ee===null)throw Error(w(349));(tr&30)!==0||Sv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Zh(Cv.bind(null,r,s,t),[t]),r.flags|=2048,gs(9,kv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=wt(),e=Ee.identifierPrefix;if(ne){var n=Ot,r=At;n=(r&~(1<<32-mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ps++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=F1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},$1={readContext:it,useCallback:Av,useContext:it,useEffect:Ld,useImperativeHandle:Rv,useInsertionEffect:xv,useLayoutEffect:Nv,useMemo:Ov,useReducer:Zl,useRef:bv,useState:function(){return Zl(ms)},useDebugValue:Fd,useDeferredValue:function(t){var e=st();return Dv(e,he.memoizedState,t)},useTransition:function(){var t=Zl(ms)[0],e=st().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Ev,useId:Mv,unstable_isNewReconciler:!1},B1={readContext:it,useCallback:Av,useContext:it,useEffect:Ld,useImperativeHandle:Rv,useInsertionEffect:xv,useLayoutEffect:Nv,useMemo:Ov,useReducer:eu,useRef:bv,useState:function(){return eu(ms)},useDebugValue:Fd,useDeferredValue:function(t){var e=st();return he===null?e.memoizedState=t:Dv(e,he.memoizedState,t)},useTransition:function(){var t=eu(ms)[0],e=st().memoizedState;return[t,e]},useMutableSource:wv,useSyncExternalStore:Ev,useId:Mv,unstable_isNewReconciler:!1};function Zr(t,e){try{var n="",r=e;do n+=v0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function tu(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var H1=typeof WeakMap=="function"?WeakMap:Map;function Uv(t,e,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){ga||(ga=!0,hc=r),rc(t,e)},n}function jv(t,e,n){n=Ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rc(t,e),typeof r!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ep(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new H1;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iE.bind(null,t,e,n),e.then(t,t))}function tp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function np(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ft(-1,1),e.tag=2,gn(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var V1=qt.ReactCurrentOwner,ze=!1;function Oe(t,e,n,r){e.child=t===null?_v(e,null,n,r):Xr(e,t.child,n,r)}function rp(t,e,n,r,i){n=n.render;var s=e.ref;return Ur(e,i),r=Dd(t,e,n,r,s,i),n=Md(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(ne&&n&&Sd(e),e.flags|=1,Oe(t,e,r,i),e.child)}function ip(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Vd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Wv(t,e,s,r,i)):(t=Bo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ls,n(o,r)&&t.ref===e.ref)return $t(t,e,i)}return e.flags|=1,t=yn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Wv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(ls(s,r)&&t.ref===e.ref)if(ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(ze=!0);else return e.lanes=t.lanes,$t(t,e,i)}return ic(t,e,n,r,i)}function $v(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},X(Pr,Ve),Ve|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,X(Pr,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,X(Pr,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,X(Pr,Ve),Ve|=r;return Oe(t,e,i,n),e.child}function Bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ic(t,e,n,r,i){var s=$e(n)?Zn:Re.current;return s=qr(e,s),Ur(e,i),n=Dd(t,e,n,r,s,i),r=Md(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,$t(t,e,i)):(ne&&r&&Sd(e),e.flags|=1,Oe(t,e,n,i),e.child)}function sp(t,e,n,r,i){if($e(n)){var s=!0;oa(e)}else s=!1;if(Ur(e,i),e.stateNode===null)jo(t,e),gv(e,n,r),nc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=it(u):(u=$e(n)?Zn:Re.current,u=qr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Qh(e,o,r,u),nn=!1;var f=e.memoizedState;o.state=f,da(e,r,o,i),l=e.memoizedState,a!==r||f!==l||We.current||nn?(typeof c=="function"&&(tc(e,n,c,r),l=e.memoizedState),(a=nn||qh(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,pv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:ut(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=it(l):(l=$e(n)?Zn:Re.current,l=qr(e,l));var g=n.getDerivedStateFromProps;(c=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&Qh(e,o,r,l),nn=!1,f=e.memoizedState,o.state=f,da(e,r,o,i);var v=e.memoizedState;a!==d||f!==v||We.current||nn?(typeof g=="function"&&(tc(e,n,g,r),v=e.memoizedState),(u=nn||qh(e,n,u,r,f,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=v),o.props=r,o.state=v,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return sc(t,e,n,r,s,i)}function sc(t,e,n,r,i,s){Bv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Hh(e,n,!1),$t(t,e,s);r=e.stateNode,V1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Xr(e,t.child,null,s),e.child=Xr(e,null,a,s)):Oe(t,e,a,s),e.memoizedState=r.state,i&&Hh(e,n,!0),e.child}function Hv(t){var e=t.stateNode;e.pendingContext?Bh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Bh(t,e.context,!1),Pd(t,e.containerInfo)}function op(t,e,n,r,i){return Qr(),Cd(i),e.flags|=256,Oe(t,e,n,r),e.child}var oc={dehydrated:null,treeContext:null,retryLane:0};function ac(t){return{baseLanes:t,cachePool:null,transitions:null}}function Vv(t,e,n){var r=e.pendingProps,i=re.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),X(re,i&1),t===null)return Zu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=rl(o,r,0,null),t=Qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ac(n),e.memoizedState=oc,t):zd(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return G1(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=yn(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=yn(a,s):(s=Qn(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?ac(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=oc,r}return s=t.child,t=s.sibling,r=yn(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function zd(t,e){return e=rl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function mo(t,e,n,r){return r!==null&&Cd(r),Xr(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function G1(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=tu(Error(w(422))),mo(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=rl({mode:"visible",children:r.children},i,0,null),s=Qn(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Xr(e,t.child,null,o),e.child.memoizedState=ac(o),e.memoizedState=oc,s);if((e.mode&1)===0)return mo(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(w(419)),r=tu(s,r,void 0),mo(t,e,o,r)}if(a=(o&t.childLanes)!==0,ze||a){if(r=Ee,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Wt(t,i),gt(r,t,i,-1))}return Hd(),r=tu(Error(w(421))),mo(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sE.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Ge=mn(i.nextSibling),Ye=e,ne=!0,dt=null,t!==null&&(Ze[et++]=At,Ze[et++]=Ot,Ze[et++]=er,At=t.id,Ot=t.overflow,er=e),e=zd(e,r.children),e.flags|=4096,e)}function ap(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ec(t.return,e,n)}function nu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Gv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Oe(t,e,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,n,e);else if(t.tag===19)ap(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(X(re,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&fa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),nu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&fa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}nu(e,!0,n,null,s);break;case"together":nu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jo(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $t(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),nr|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(w(153));if(e.child!==null){for(t=e.child,n=yn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Y1(t,e,n){switch(e.tag){case 3:Hv(e),Qr();break;case 5:yv(e);break;case 1:$e(e.type)&&oa(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;X(ua,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(X(re,re.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?Vv(t,e,n):(X(re,re.current&1),t=$t(t,e,n),t!==null?t.sibling:null);X(re,re.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return Gv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),X(re,re.current),r)break;return null;case 22:case 23:return e.lanes=0,$v(t,e,n)}return $t(t,e,n)}var Yv,lc,Kv,qv;Yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};lc=function(){};Kv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Bn(Ct.current);var s=null;switch(n){case"input":i=Pu(t,i),r=Pu(t,r),s=[];break;case"select":i=se({},i,{value:void 0}),r=se({},r,{value:void 0}),s=[];break;case"textarea":i=Ou(t,i),r=Ou(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=ia)}Mu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ts.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ts.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&J("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};qv=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ti(t,e){if(!ne)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ne(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function K1(t,e,n){var r=e.pendingProps;switch(kd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ne(e),null;case 1:return $e(e.type)&&sa(),Ne(e),null;case 3:return r=e.stateNode,Jr(),ee(We),ee(Re),Ad(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ho(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,dt!==null&&(gc(dt),dt=null))),lc(t,e),Ne(e),null;case 5:Rd(e);var i=Bn(hs.current);if(n=e.type,t!==null&&e.stateNode!=null)Kv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(w(166));return Ne(e),null}if(t=Bn(Ct.current),ho(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Et]=e,r[ds]=s,t=(e.mode&1)!==0,n){case"dialog":J("cancel",r),J("close",r);break;case"iframe":case"object":case"embed":J("load",r);break;case"video":case"audio":for(i=0;i<Mi.length;i++)J(Mi[i],r);break;case"source":J("error",r);break;case"img":case"image":case"link":J("error",r),J("load",r);break;case"details":J("toggle",r);break;case"input":gh(r,s),J("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},J("invalid",r);break;case"textarea":_h(r,s),J("invalid",r)}Mu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&fo(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&fo(r.textContent,a,t),i=["children",""+a]):ts.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&J("scroll",r)}switch(n){case"input":ro(r),vh(r,s,!0);break;case"textarea":ro(r),yh(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ia)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Sg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Et]=e,t[ds]=r,Yv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Lu(n,r),n){case"dialog":J("cancel",t),J("close",t),i=r;break;case"iframe":case"object":case"embed":J("load",t),i=r;break;case"video":case"audio":for(i=0;i<Mi.length;i++)J(Mi[i],t);i=r;break;case"source":J("error",t),i=r;break;case"img":case"image":case"link":J("error",t),J("load",t),i=r;break;case"details":J("toggle",t),i=r;break;case"input":gh(t,r),i=Pu(t,r),J("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=se({},r,{value:void 0}),J("invalid",t);break;case"textarea":_h(t,r),i=Ou(t,r),J("invalid",t);break;default:i=r}Mu(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ig(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&kg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ns(t,l):typeof l=="number"&&ns(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ts.hasOwnProperty(s)?l!=null&&s==="onScroll"&&J("scroll",t):l!=null&&ld(t,s,l,o))}switch(n){case"input":ro(t),vh(t,r,!1);break;case"textarea":ro(t),yh(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Mr(t,!!r.multiple,s,!1):r.defaultValue!=null&&Mr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=ia)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ne(e),null;case 6:if(t&&e.stateNode!=null)qv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(w(166));if(n=Bn(hs.current),Bn(Ct.current),ho(e)){if(r=e.stateNode,n=e.memoizedProps,r[Et]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:fo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&fo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=e,e.stateNode=r}return Ne(e),null;case 13:if(ee(re),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ne&&Ge!==null&&(e.mode&1)!==0&&(e.flags&128)===0)fv(),Qr(),e.flags|=98560,s=!1;else if(s=ho(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(w(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(w(317));s[Et]=e}else Qr(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Ne(e),s=!1}else dt!==null&&(gc(dt),dt=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(re.current&1)!==0?pe===0&&(pe=3):Hd())),e.updateQueue!==null&&(e.flags|=4),Ne(e),null);case 4:return Jr(),lc(t,e),t===null&&us(e.stateNode.containerInfo),Ne(e),null;case 10:return bd(e.type._context),Ne(e),null;case 17:return $e(e.type)&&sa(),Ne(e),null;case 19:if(ee(re),s=e.memoizedState,s===null)return Ne(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ti(s,!1);else{if(pe!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=fa(t),o!==null){for(e.flags|=128,Ti(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return X(re,re.current&1|2),e.child}t=t.sibling}s.tail!==null&&de()>ei&&(e.flags|=128,r=!0,Ti(s,!1),e.lanes=4194304)}else{if(!r)if(t=fa(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ti(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ne)return Ne(e),null}else 2*de()-s.renderingStartTime>ei&&n!==1073741824&&(e.flags|=128,r=!0,Ti(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=de(),e.sibling=null,n=re.current,X(re,r?n&1|2:n&1),e):(Ne(e),null);case 22:case 23:return Bd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(Ve&1073741824)!==0&&(Ne(e),e.subtreeFlags&6&&(e.flags|=8192)):Ne(e),null;case 24:return null;case 25:return null}throw Error(w(156,e.tag))}function q1(t,e){switch(kd(e),e.tag){case 1:return $e(e.type)&&sa(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Jr(),ee(We),ee(Re),Ad(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Rd(e),null;case 13:if(ee(re),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(w(340));Qr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ee(re),null;case 4:return Jr(),null;case 10:return bd(e.type._context),null;case 22:case 23:return Bd(),null;case 24:return null;default:return null}}var go=!1,Pe=!1,Q1=typeof WeakSet=="function"?WeakSet:Set,b=null;function Nr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){oe(t,e,r)}else n.current=null}function uc(t,e,n){try{n()}catch(r){oe(t,e,r)}}var lp=!1;function X1(t,e){if(Gu=ta,t=Zg(),Ed(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var g;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(g=d.firstChild)!==null;)f=d,d=g;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(g=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Yu={focusedElem:t,selectionRange:n},ta=!1,b=e;b!==null;)if(e=b,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,b=t;else for(;b!==null;){e=b;try{var v=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var _=v.memoizedProps,k=v.memoizedState,p=e.stateNode,h=p.getSnapshotBeforeUpdate(e.elementType===e.type?_:ut(e.type,_),k);p.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var m=e.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(w(163))}}catch(y){oe(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,b=t;break}b=e.return}return v=lp,lp=!1,v}function Vi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&uc(e,n,s)}i=i.next}while(i!==r)}}function tl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function cc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Qv(t){var e=t.alternate;e!==null&&(t.alternate=null,Qv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Et],delete e[ds],delete e[Qu],delete e[O1],delete e[D1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Xv(t){return t.tag===5||t.tag===3||t.tag===4}function up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Xv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function dc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ia));else if(r!==4&&(t=t.child,t!==null))for(dc(t,e,n),t=t.sibling;t!==null;)dc(t,e,n),t=t.sibling}function fc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(fc(t,e,n),t=t.sibling;t!==null;)fc(t,e,n),t=t.sibling}var Se=null,ct=!1;function Jt(t,e,n){for(n=n.child;n!==null;)Jv(t,e,n),n=n.sibling}function Jv(t,e,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ya,n)}catch{}switch(n.tag){case 5:Pe||Nr(n,e);case 6:var r=Se,i=ct;Se=null,Jt(t,e,n),Se=r,ct=i,Se!==null&&(ct?(t=Se,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Se.removeChild(n.stateNode));break;case 18:Se!==null&&(ct?(t=Se,n=n.stateNode,t.nodeType===8?ql(t.parentNode,n):t.nodeType===1&&ql(t,n),os(t)):ql(Se,n.stateNode));break;case 4:r=Se,i=ct,Se=n.stateNode.containerInfo,ct=!0,Jt(t,e,n),Se=r,ct=i;break;case 0:case 11:case 14:case 15:if(!Pe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&uc(n,e,o),i=i.next}while(i!==r)}Jt(t,e,n);break;case 1:if(!Pe&&(Nr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){oe(n,e,a)}Jt(t,e,n);break;case 21:Jt(t,e,n);break;case 22:n.mode&1?(Pe=(r=Pe)||n.memoizedState!==null,Jt(t,e,n),Pe=r):Jt(t,e,n);break;default:Jt(t,e,n)}}function cp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Q1),e.forEach(function(r){var i=oE.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function lt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Se=a.stateNode,ct=!1;break e;case 3:Se=a.stateNode.containerInfo,ct=!0;break e;case 4:Se=a.stateNode.containerInfo,ct=!0;break e}a=a.return}if(Se===null)throw Error(w(160));Jv(s,o,i),Se=null,ct=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){oe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Zv(e,t),e=e.sibling}function Zv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(lt(e,t),yt(t),r&4){try{Vi(3,t,t.return),tl(3,t)}catch(_){oe(t,t.return,_)}try{Vi(5,t,t.return)}catch(_){oe(t,t.return,_)}}break;case 1:lt(e,t),yt(t),r&512&&n!==null&&Nr(n,n.return);break;case 5:if(lt(e,t),yt(t),r&512&&n!==null&&Nr(n,n.return),t.flags&32){var i=t.stateNode;try{ns(i,"")}catch(_){oe(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&wg(i,s),Lu(a,o);var u=Lu(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?Ig(i,d):c==="dangerouslySetInnerHTML"?kg(i,d):c==="children"?ns(i,d):ld(i,c,d,u)}switch(a){case"input":Ru(i,s);break;case"textarea":Eg(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?Mr(i,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?Mr(i,!!s.multiple,s.defaultValue,!0):Mr(i,!!s.multiple,s.multiple?[]:"",!1))}i[ds]=s}catch(_){oe(t,t.return,_)}}break;case 6:if(lt(e,t),yt(t),r&4){if(t.stateNode===null)throw Error(w(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){oe(t,t.return,_)}}break;case 3:if(lt(e,t),yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{os(e.containerInfo)}catch(_){oe(t,t.return,_)}break;case 4:lt(e,t),yt(t);break;case 13:lt(e,t),yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Wd=de())),r&4&&cp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Pe=(u=Pe)||c,lt(e,t),Pe=u):lt(e,t),yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(b=t,c=t.child;c!==null;){for(d=b=c;b!==null;){switch(f=b,g=f.child,f.tag){case 0:case 11:case 14:case 15:Vi(4,f,f.return);break;case 1:Nr(f,f.return);var v=f.stateNode;if(typeof v.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(_){oe(r,n,_)}}break;case 5:Nr(f,f.return);break;case 22:if(f.memoizedState!==null){fp(d);continue}}g!==null?(g.return=f,b=g):fp(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Cg("display",o))}catch(_){oe(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){oe(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:lt(e,t),yt(t),r&4&&cp(t);break;case 21:break;default:lt(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Xv(n)){var r=n;break e}n=n.return}throw Error(w(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ns(i,""),r.flags&=-33);var s=up(t);fc(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=up(t);dc(t,a,o);break;default:throw Error(w(161))}}catch(l){oe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function J1(t,e,n){b=t,e_(t)}function e_(t,e,n){for(var r=(t.mode&1)!==0;b!==null;){var i=b,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||go;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||Pe;a=go;var u=Pe;if(go=o,(Pe=l)&&!u)for(b=i;b!==null;)o=b,l=o.child,o.tag===22&&o.memoizedState!==null?hp(i):l!==null?(l.return=o,b=l):hp(i);for(;s!==null;)b=s,e_(s),s=s.sibling;b=i,go=a,Pe=u}dp(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,b=s):dp(t)}}function dp(t){for(;b!==null;){var e=b;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:Pe||tl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Pe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ut(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Kh(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Kh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&os(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(w(163))}Pe||e.flags&512&&cc(e)}catch(f){oe(e,e.return,f)}}if(e===t){b=null;break}if(n=e.sibling,n!==null){n.return=e.return,b=n;break}b=e.return}}function fp(t){for(;b!==null;){var e=b;if(e===t){b=null;break}var n=e.sibling;if(n!==null){n.return=e.return,b=n;break}b=e.return}}function hp(t){for(;b!==null;){var e=b;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{tl(4,e)}catch(l){oe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){oe(e,i,l)}}var s=e.return;try{cc(e)}catch(l){oe(e,s,l)}break;case 5:var o=e.return;try{cc(e)}catch(l){oe(e,o,l)}}}catch(l){oe(e,e.return,l)}if(e===t){b=null;break}var a=e.sibling;if(a!==null){a.return=e.return,b=a;break}b=e.return}}var Z1=Math.ceil,ma=qt.ReactCurrentDispatcher,Ud=qt.ReactCurrentOwner,rt=qt.ReactCurrentBatchConfig,B=0,Ee=null,fe=null,Ie=0,Ve=0,Pr=An(0),pe=0,vs=null,nr=0,nl=0,jd=0,Gi=null,Fe=null,Wd=0,ei=1/0,Nt=null,ga=!1,hc=null,vn=null,vo=!1,cn=null,va=0,Yi=0,pc=null,Wo=-1,$o=0;function De(){return(B&6)!==0?de():Wo!==-1?Wo:Wo=de()}function _n(t){return(t.mode&1)===0?1:(B&2)!==0&&Ie!==0?Ie&-Ie:L1.transition!==null?($o===0&&($o=Fg()),$o):(t=V,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t)}function gt(t,e,n,r){if(50<Yi)throw Yi=0,pc=null,Error(w(185));Ls(t,n,r),((B&2)===0||t!==Ee)&&(t===Ee&&((B&2)===0&&(nl|=n),pe===4&&sn(t,Ie)),Be(t,r),n===1&&B===0&&(e.mode&1)===0&&(ei=de()+500,Ja&&On()))}function Be(t,e){var n=t.callbackNode;L0(t,e);var r=ea(t,t===Ee?Ie:0);if(r===0)n!==null&&Sh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Sh(n),e===1)t.tag===0?M1(pp.bind(null,t)):uv(pp.bind(null,t)),R1(function(){(B&6)===0&&On()}),n=null;else{switch(zg(r)){case 1:n=hd;break;case 4:n=Mg;break;case 16:n=Zo;break;case 536870912:n=Lg;break;default:n=Zo}n=l_(n,t_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function t_(t,e){if(Wo=-1,$o=0,(B&6)!==0)throw Error(w(327));var n=t.callbackNode;if(jr()&&t.callbackNode!==n)return null;var r=ea(t,t===Ee?Ie:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=_a(t,r);else{e=r;var i=B;B|=2;var s=r_();(Ee!==t||Ie!==e)&&(Nt=null,ei=de()+500,qn(t,e));do try{nE();break}catch(a){n_(t,a)}while(1);Td(),ma.current=s,B=i,fe!==null?e=0:(Ee=null,Ie=0,e=pe)}if(e!==0){if(e===2&&(i=Wu(t),i!==0&&(r=i,e=mc(t,i))),e===1)throw n=vs,qn(t,0),sn(t,r),Be(t,de()),n;if(e===6)sn(t,r);else{if(i=t.current.alternate,(r&30)===0&&!eE(i)&&(e=_a(t,r),e===2&&(s=Wu(t),s!==0&&(r=s,e=mc(t,s))),e===1))throw n=vs,qn(t,0),sn(t,r),Be(t,de()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(w(345));case 2:zn(t,Fe,Nt);break;case 3:if(sn(t,r),(r&130023424)===r&&(e=Wd+500-de(),10<e)){if(ea(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){De(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qu(zn.bind(null,t,Fe,Nt),e);break}zn(t,Fe,Nt);break;case 4:if(sn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=de()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Z1(r/1960))-r,10<r){t.timeoutHandle=qu(zn.bind(null,t,Fe,Nt),r);break}zn(t,Fe,Nt);break;case 5:zn(t,Fe,Nt);break;default:throw Error(w(329))}}}return Be(t,de()),t.callbackNode===n?t_.bind(null,t):null}function mc(t,e){var n=Gi;return t.current.memoizedState.isDehydrated&&(qn(t,e).flags|=256),t=_a(t,e),t!==2&&(e=Fe,Fe=n,e!==null&&gc(e)),t}function gc(t){Fe===null?Fe=t:Fe.push.apply(Fe,t)}function eE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sn(t,e){for(e&=~jd,e&=~nl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mt(e),r=1<<n;t[n]=-1,e&=~r}}function pp(t){if((B&6)!==0)throw Error(w(327));jr();var e=ea(t,0);if((e&1)===0)return Be(t,de()),null;var n=_a(t,e);if(t.tag!==0&&n===2){var r=Wu(t);r!==0&&(e=r,n=mc(t,r))}if(n===1)throw n=vs,qn(t,0),sn(t,e),Be(t,de()),n;if(n===6)throw Error(w(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,zn(t,Fe,Nt),Be(t,de()),null}function $d(t,e){var n=B;B|=1;try{return t(e)}finally{B=n,B===0&&(ei=de()+500,Ja&&On())}}function rr(t){cn!==null&&cn.tag===0&&(B&6)===0&&jr();var e=B;B|=1;var n=rt.transition,r=V;try{if(rt.transition=null,V=1,t)return t()}finally{V=r,rt.transition=n,B=e,(B&6)===0&&On()}}function Bd(){Ve=Pr.current,ee(Pr)}function qn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,P1(n)),fe!==null)for(n=fe.return;n!==null;){var r=n;switch(kd(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&sa();break;case 3:Jr(),ee(We),ee(Re),Ad();break;case 5:Rd(r);break;case 4:Jr();break;case 13:ee(re);break;case 19:ee(re);break;case 10:bd(r.type._context);break;case 22:case 23:Bd()}n=n.return}if(Ee=t,fe=t=yn(t.current,null),Ie=Ve=e,pe=0,vs=null,jd=nl=nr=0,Fe=Gi=null,$n!==null){for(e=0;e<$n.length;e++)if(n=$n[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}$n=null}return t}function n_(t,e){do{var n=fe;try{if(Td(),zo.current=pa,ha){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ha=!1}if(tr=0,_e=he=ie=null,Hi=!1,ps=0,Ud.current=null,n===null||n.return===null){pe=1,vs=e,fe=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ie,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var g=tp(o);if(g!==null){g.flags&=-257,np(g,o,a,s,e),g.mode&1&&ep(s,u,e),e=g,l=u;var v=e.updateQueue;if(v===null){var _=new Set;_.add(l),e.updateQueue=_}else v.add(l);break e}else{if((e&1)===0){ep(s,u,e),Hd();break e}l=Error(w(426))}}else if(ne&&a.mode&1){var k=tp(o);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),np(k,o,a,s,e),Cd(Zr(l,a));break e}}s=l=Zr(l,a),pe!==4&&(pe=2),Gi===null?Gi=[s]:Gi.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=Uv(s,l,e);Yh(s,p);break e;case 1:a=l;var h=s.type,m=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(vn===null||!vn.has(m)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=jv(s,a,e);Yh(s,y);break e}}s=s.return}while(s!==null)}s_(n)}catch(E){e=E,fe===n&&n!==null&&(fe=n=n.return);continue}break}while(1)}function r_(){var t=ma.current;return ma.current=pa,t===null?pa:t}function Hd(){(pe===0||pe===3||pe===2)&&(pe=4),Ee===null||(nr&268435455)===0&&(nl&268435455)===0||sn(Ee,Ie)}function _a(t,e){var n=B;B|=2;var r=r_();(Ee!==t||Ie!==e)&&(Nt=null,qn(t,e));do try{tE();break}catch(i){n_(t,i)}while(1);if(Td(),B=n,ma.current=r,fe!==null)throw Error(w(261));return Ee=null,Ie=0,pe}function tE(){for(;fe!==null;)i_(fe)}function nE(){for(;fe!==null&&!b0();)i_(fe)}function i_(t){var e=a_(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?s_(t):fe=e,Ud.current=null}function s_(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=K1(n,e,Ve),n!==null){fe=n;return}}else{if(n=q1(n,e),n!==null){n.flags&=32767,fe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,fe=null;return}}if(e=e.sibling,e!==null){fe=e;return}fe=e=t}while(e!==null);pe===0&&(pe=5)}function zn(t,e,n){var r=V,i=rt.transition;try{rt.transition=null,V=1,rE(t,e,n,r)}finally{rt.transition=i,V=r}return null}function rE(t,e,n,r){do jr();while(cn!==null);if((B&6)!==0)throw Error(w(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(w(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(F0(t,s),t===Ee&&(fe=Ee=null,Ie=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||vo||(vo=!0,l_(Zo,function(){return jr(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=rt.transition,rt.transition=null;var o=V;V=1;var a=B;B|=4,Ud.current=null,X1(t,n),Zv(n,t),k1(Yu),ta=!!Gu,Yu=Gu=null,t.current=n,J1(n),x0(),B=a,V=o,rt.transition=s}else t.current=n;if(vo&&(vo=!1,cn=t,va=i),s=t.pendingLanes,s===0&&(vn=null),R0(n.stateNode),Be(t,de()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(ga)throw ga=!1,t=hc,hc=null,t;return(va&1)!==0&&t.tag!==0&&jr(),s=t.pendingLanes,(s&1)!==0?t===pc?Yi++:(Yi=0,pc=t):Yi=0,On(),null}function jr(){if(cn!==null){var t=zg(va),e=rt.transition,n=V;try{if(rt.transition=null,V=16>t?16:t,cn===null)var r=!1;else{if(t=cn,cn=null,va=0,(B&6)!==0)throw Error(w(331));var i=B;for(B|=4,b=t.current;b!==null;){var s=b,o=s.child;if((b.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(b=u;b!==null;){var c=b;switch(c.tag){case 0:case 11:case 15:Vi(8,c,s)}var d=c.child;if(d!==null)d.return=c,b=d;else for(;b!==null;){c=b;var f=c.sibling,g=c.return;if(Qv(c),c===u){b=null;break}if(f!==null){f.return=g,b=f;break}b=g}}}var v=s.alternate;if(v!==null){var _=v.child;if(_!==null){v.child=null;do{var k=_.sibling;_.sibling=null,_=k}while(_!==null)}}b=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,b=o;else e:for(;b!==null;){if(s=b,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Vi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,b=p;break e}b=s.return}}var h=t.current;for(b=h;b!==null;){o=b;var m=o.child;if((o.subtreeFlags&2064)!==0&&m!==null)m.return=o,b=m;else e:for(o=h;b!==null;){if(a=b,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:tl(9,a)}}catch(E){oe(a,a.return,E)}if(a===o){b=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,b=y;break e}b=a.return}}if(B=i,On(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ya,t)}catch{}r=!0}return r}finally{V=n,rt.transition=e}}return!1}function mp(t,e,n){e=Zr(n,e),e=Uv(t,e,1),t=gn(t,e,1),e=De(),t!==null&&(Ls(t,1,e),Be(t,e))}function oe(t,e,n){if(t.tag===3)mp(t,t,n);else for(;e!==null;){if(e.tag===3){mp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(vn===null||!vn.has(r))){t=Zr(n,t),t=jv(e,t,1),e=gn(e,t,1),t=De(),e!==null&&(Ls(e,1,t),Be(e,t));break}}e=e.return}}function iE(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=De(),t.pingedLanes|=t.suspendedLanes&n,Ee===t&&(Ie&n)===n&&(pe===4||pe===3&&(Ie&130023424)===Ie&&500>de()-Wd?qn(t,0):jd|=n),Be(t,e)}function o_(t,e){e===0&&((t.mode&1)===0?e=1:(e=oo,oo<<=1,(oo&130023424)===0&&(oo=4194304)));var n=De();t=Wt(t,e),t!==null&&(Ls(t,e,n),Be(t,n))}function sE(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),o_(t,n)}function oE(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(w(314))}r!==null&&r.delete(e),o_(t,n)}var a_;a_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||We.current)ze=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return ze=!1,Y1(t,e,n);ze=(t.flags&131072)!==0}else ze=!1,ne&&(e.flags&1048576)!==0&&cv(e,la,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;jo(t,e),t=e.pendingProps;var i=qr(e,Re.current);Ur(e,n),i=Dd(null,e,r,t,i,n);var s=Md();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,$e(r)?(s=!0,oa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Nd(e),i.updater=Za,e.stateNode=i,i._reactInternals=e,nc(e,r,t,n),e=sc(null,e,r,!0,s,n)):(e.tag=0,ne&&s&&Sd(e),Oe(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(jo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lE(r),t=ut(r,t),i){case 0:e=ic(null,e,r,t,n);break e;case 1:e=sp(null,e,r,t,n);break e;case 11:e=rp(null,e,r,t,n);break e;case 14:e=ip(null,e,r,ut(r.type,t),n);break e}throw Error(w(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),ic(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),sp(t,e,r,i,n);case 3:e:{if(Hv(e),t===null)throw Error(w(387));r=e.pendingProps,s=e.memoizedState,i=s.element,pv(t,e),da(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Zr(Error(w(423)),e),e=op(t,e,r,n,i);break e}else if(r!==i){i=Zr(Error(w(424)),e),e=op(t,e,r,n,i);break e}else for(Ge=mn(e.stateNode.containerInfo.firstChild),Ye=e,ne=!0,dt=null,n=_v(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Qr(),r===i){e=$t(t,e,n);break e}Oe(t,e,r,n)}e=e.child}return e;case 5:return yv(e),t===null&&Zu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ku(r,i)?o=null:s!==null&&Ku(r,s)&&(e.flags|=32),Bv(t,e),Oe(t,e,o,n),e.child;case 6:return t===null&&Zu(e),null;case 13:return Vv(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Xr(e,null,r,n):Oe(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),rp(t,e,r,i,n);case 7:return Oe(t,e,e.pendingProps,n),e.child;case 8:return Oe(t,e,e.pendingProps.children,n),e.child;case 12:return Oe(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,X(ua,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!We.current){e=$t(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Ft(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ec(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(w(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ec(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Oe(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ur(e,n),i=it(i),r=r(i),e.flags|=1,Oe(t,e,r,n),e.child;case 14:return r=e.type,i=ut(r,e.pendingProps),i=ut(r.type,i),ip(t,e,r,i,n);case 15:return Wv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ut(r,i),jo(t,e),e.tag=1,$e(r)?(t=!0,oa(e)):t=!1,Ur(e,n),gv(e,r,i),nc(e,r,i,n),sc(null,e,r,!0,t,n);case 19:return Gv(t,e,n);case 22:return $v(t,e,n)}throw Error(w(156,e.tag))};function l_(t,e){return Dg(t,e)}function aE(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tt(t,e,n,r){return new aE(t,e,n,r)}function Vd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lE(t){if(typeof t=="function")return Vd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===dd)return 14}return 2}function yn(t,e){var n=t.alternate;return n===null?(n=tt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Bo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Vd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case wr:return Qn(n.children,i,s,e);case ud:o=8,i|=8;break;case Tu:return t=tt(12,n,e,i|2),t.elementType=Tu,t.lanes=s,t;case bu:return t=tt(13,n,e,i),t.elementType=bu,t.lanes=s,t;case xu:return t=tt(19,n,e,i),t.elementType=xu,t.lanes=s,t;case vg:return rl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case mg:o=10;break e;case gg:o=9;break e;case cd:o=11;break e;case dd:o=14;break e;case tn:o=16,r=null;break e}throw Error(w(130,t==null?t:typeof t,""))}return e=tt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Qn(t,e,n,r){return t=tt(7,t,r,e),t.lanes=n,t}function rl(t,e,n,r){return t=tt(22,t,r,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function ru(t,e,n){return t=tt(6,t,null,e),t.lanes=n,t}function iu(t,e,n){return e=tt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uE(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zl(0),this.expirationTimes=zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Gd(t,e,n,r,i,s,o,a,l){return t=new uE(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=tt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function cE(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function u_(t){if(!t)return In;t=t._reactInternals;e:{if(pr(t)!==t||t.tag!==1)throw Error(w(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if($e(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(w(171))}if(t.tag===1){var n=t.type;if($e(n))return lv(t,n,e)}return e}function c_(t,e,n,r,i,s,o,a,l){return t=Gd(n,r,!0,t,i,s,o,a,l),t.context=u_(null),n=t.current,r=De(),i=_n(n),s=Ft(r,i),s.callback=e!=null?e:null,gn(n,s,i),t.current.lanes=i,Ls(t,i,r),Be(t,r),t}function il(t,e,n,r){var i=e.current,s=De(),o=_n(i);return n=u_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ft(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=gn(i,e,o),t!==null&&(gt(t,i,o,s),Fo(t,i,o)),o}function ya(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function gp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Yd(t,e){gp(t,e),(t=t.alternate)&&gp(t,e)}function dE(){return null}var d_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Kd(t){this._internalRoot=t}sl.prototype.render=Kd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(w(409));il(t,e,null,null)};sl.prototype.unmount=Kd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;rr(function(){il(null,t,null,null)}),e[jt]=null}};function sl(t){this._internalRoot=t}sl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<rn.length&&e!==0&&e<rn[n].priority;n++);rn.splice(n,0,t),n===0&&Bg(t)}};function qd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ol(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function vp(){}function fE(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=ya(o);s.call(u)}}var o=c_(e,r,t,0,null,!1,!1,"",vp);return t._reactRootContainer=o,t[jt]=o.current,us(t.nodeType===8?t.parentNode:t),rr(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=ya(l);a.call(u)}}var l=Gd(t,0,!1,null,null,!1,!1,"",vp);return t._reactRootContainer=l,t[jt]=l.current,us(t.nodeType===8?t.parentNode:t),rr(function(){il(e,l,n,r)}),l}function al(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=ya(o);a.call(l)}}il(e,o,t,i)}else o=fE(n,e,t,i,r);return ya(o)}Ug=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Di(e.pendingLanes);n!==0&&(pd(e,n|1),Be(e,de()),(B&6)===0&&(ei=de()+500,On()))}break;case 13:rr(function(){var r=Wt(t,1);if(r!==null){var i=De();gt(r,t,1,i)}}),Yd(t,1)}};md=function(t){if(t.tag===13){var e=Wt(t,134217728);if(e!==null){var n=De();gt(e,t,134217728,n)}Yd(t,134217728)}};jg=function(t){if(t.tag===13){var e=_n(t),n=Wt(t,e);if(n!==null){var r=De();gt(n,t,e,r)}Yd(t,e)}};Wg=function(){return V};$g=function(t,e){var n=V;try{return V=t,e()}finally{V=n}};zu=function(t,e,n){switch(e){case"input":if(Ru(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Xa(r);if(!i)throw Error(w(90));yg(r),Ru(r,i)}}}break;case"textarea":Eg(t,n);break;case"select":e=n.value,e!=null&&Mr(t,!!n.multiple,e,!1)}};xg=$d;Ng=rr;var hE={usingClientEntryPoint:!1,Events:[zs,Cr,Xa,Tg,bg,$d]},bi={findFiberByHostInstance:Wn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pE={bundleType:bi.bundleType,version:bi.version,rendererPackageName:bi.rendererPackageName,rendererConfig:bi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ag(t),t===null?null:t.stateNode},findFiberByHostInstance:bi.findFiberByHostInstance||dE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Ya=_o.inject(pE),kt=_o}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hE;Qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(e))throw Error(w(200));return cE(t,e,null,n)};Qe.createRoot=function(t,e){if(!qd(t))throw Error(w(299));var n=!1,r="",i=d_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Gd(t,1,!1,null,null,n,!1,r,i),t[jt]=e.current,us(t.nodeType===8?t.parentNode:t),new Kd(e)};Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(w(188)):(t=Object.keys(t).join(","),Error(w(268,t)));return t=Ag(e),t=t===null?null:t.stateNode,t};Qe.flushSync=function(t){return rr(t)};Qe.hydrate=function(t,e,n){if(!ol(e))throw Error(w(200));return al(null,t,e,!0,n)};Qe.hydrateRoot=function(t,e,n){if(!qd(t))throw Error(w(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=d_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=c_(e,null,t,1,n!=null?n:null,i,!1,s,o),t[jt]=e.current,us(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new sl(e)};Qe.render=function(t,e,n){if(!ol(e))throw Error(w(200));return al(null,t,e,!1,n)};Qe.unmountComponentAtNode=function(t){if(!ol(t))throw Error(w(40));return t._reactRootContainer?(rr(function(){al(null,null,t,!1,function(){t._reactRootContainer=null,t[jt]=null})}),!0):!1};Qe.unstable_batchedUpdates=$d;Qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ol(n))throw Error(w(200));if(t==null||t._reactInternals===void 0)throw Error(w(38));return al(t,e,n,!1,r)};Qe.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Qe})(cg);var _p=cg.exports;Cu.createRoot=_p.createRoot,Cu.hydrateRoot=_p.hydrateRoot;const f_=t=>{let e=t.length,n,r=[...Array(t.length).keys()];for(;e!=0;)n=Math.floor(Math.random()*e),e--,[t[e],t[n]]=[t[n],t[e]],[r[e],r[n]]=[r[n],r[e]];return[t,r]},mE=t=>{const e=new Date,n=e.getHours(),r=e.getMinutes(),i=e.getSeconds(),s=parseInt(t.hour)===n&&parseInt(t.minute)===r&&i<2,o=t.active;return s&&o},gE=t=>{const e=parseInt(t.hour);let n;return e%12===0?n=12:n=e%12,String(n).padStart(2,"0")+":"+String(t.minute).padStart(2,"0")+" "+(e>=12?"PM":"AM")};/**
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
 */const h_={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw fi(e)},fi=function(t){return new Error("Firebase Database ("+h_.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const p_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vE=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Qd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(f=64)),r.push(n[c],n[d],n[f],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(p_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const f=s<<2|a>>4;if(r.push(f),u!==64){const g=a<<4&240|u>>2;if(r.push(g),d!==64){const v=u<<6&192|d;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},m_=function(t){const e=p_(t);return Qd.encodeByteArray(e,!0)},wa=function(t){return m_(t).replace(/\./g,"")},Ea=function(t){try{return Qd.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _E(t){return g_(void 0,t)}function g_(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yE(n)||(t[n]=g_(t[n],e[n]));return t}function yE(t){return t!=="__proto__"}/**
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
 */function Ae(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ae())}function wE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function v_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function EE(){const t=Ae();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function __(){return h_.NODE_ADMIN===!0}function SE(){return typeof indexedDB=="object"}function kE(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function CE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const IE=()=>CE().__FIREBASE_DEFAULTS__,TE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t=process.env.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ea(t[1]);return e&&JSON.parse(e)},Jd=()=>{try{return IE()||TE()||bE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},y_=t=>{var e,n;return(n=(e=Jd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},xE=t=>{const e=y_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},NE=()=>{var t;return(t=Jd())===null||t===void 0?void 0:t.config},w_=t=>{var e;return(e=Jd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ll{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function PE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[wa(JSON.stringify(n)),wa(JSON.stringify(o)),a].join(".")}/**
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
 */const RE="FirebaseError";class Dn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RE,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,js.prototype.create)}}class js{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AE(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,r)}}function AE(t,e){return t.replace(OE,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OE=/\{\$([^}]+)}/g;/**
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
 */function _s(t){return JSON.parse(t)}function we(t){return JSON.stringify(t)}/**
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
 */const E_=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=_s(Ea(s[0])||""),n=_s(Ea(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},DE=function(t){const e=E_(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ME=function(t){const e=E_(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function xt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function ti(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function vc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Sa(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ka(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(yp(s)&&yp(o)){if(!ka(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function yp(t){return t!==null&&typeof t=="object"}/**
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
 */function hi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
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
 */class LE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const f=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(f<<1|f>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=a^s&(o^a),c=1518500249):(u=s^o^a,c=1859775393):d<60?(u=s&o|a&(s|o),c=2400959708):(u=s^o^a,c=3395469782);const f=(i<<5|i>>>27)+u+l+c+r[d]&4294967295;l=a,a=o,o=(s<<30|s>>>2)&4294967295,s=i,i=f}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function FE(t,e){const n=new zE(t,e);return n.subscribe.bind(n)}class zE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=su),i.error===void 0&&(i.error=su),i.complete===void 0&&(i.complete=su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function su(){}function Zd(t,e){return`${t} failed: ${e} argument `}/**
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
 */const jE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,S(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},ul=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function ot(t){return t&&t._delegate?t._delegate:t}class ir{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Un="[DEFAULT]";/**
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
 */class WE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ll;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BE(e))try{this.getOrInitializeService({instanceIdentifier:Un})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Un){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Un){return this.instances.has(e)}getOptions(e=Un){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$E(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Un){return this.component?this.component.multipleInstances?e:Un:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $E(t){return t===Un?void 0:t}function BE(t){return t.instantiationMode==="EAGER"}/**
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
 */class HE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const VE={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},GE=Y.INFO,YE={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},KE=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=YE[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ef{constructor(e){this.name=e,this._logLevel=GE,this._logHandler=KE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?VE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const qE=(t,e)=>e.some(n=>t instanceof n);let wp,Ep;function QE(){return wp||(wp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function XE(){return Ep||(Ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const S_=new WeakMap,_c=new WeakMap,k_=new WeakMap,ou=new WeakMap,tf=new WeakMap;function JE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(wn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&S_.set(n,t)}).catch(()=>{}),tf.set(e,t),e}function ZE(t){if(_c.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});_c.set(t,e)}let yc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _c.get(t);if(e==="objectStoreNames")return t.objectStoreNames||k_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function eS(t){yc=t(yc)}function tS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(au(this),e,...n);return k_.set(r,e.sort?e.sort():[e]),wn(r)}:XE().includes(t)?function(...e){return t.apply(au(this),e),wn(S_.get(this))}:function(...e){return wn(t.apply(au(this),e))}}function nS(t){return typeof t=="function"?tS(t):(t instanceof IDBTransaction&&ZE(t),qE(t,QE())?new Proxy(t,yc):t)}function wn(t){if(t instanceof IDBRequest)return JE(t);if(ou.has(t))return ou.get(t);const e=nS(t);return e!==t&&(ou.set(t,e),tf.set(e,t)),e}const au=t=>tf.get(t);function rS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=wn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(wn(o.result),l.oldVersion,l.newVersion,wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const iS=["get","getKey","getAll","getAllKeys","count"],sS=["put","add","delete","clear"],lu=new Map;function Sp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(lu.get(e))return lu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=sS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||iS.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return lu.set(e,s),s}eS(t=>({...t,get:(e,n,r)=>Sp(e,n)||t.get(e,n,r),has:(e,n)=>!!Sp(e,n)||t.has(e,n)}));/**
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
 */class oS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(aS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function aS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wc="@firebase/app",kp="0.8.4";/**
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
 */const sr=new ef("@firebase/app"),lS="@firebase/app-compat",uS="@firebase/analytics-compat",cS="@firebase/analytics",dS="@firebase/app-check-compat",fS="@firebase/app-check",hS="@firebase/auth",pS="@firebase/auth-compat",mS="@firebase/database",gS="@firebase/database-compat",vS="@firebase/functions",_S="@firebase/functions-compat",yS="@firebase/installations",wS="@firebase/installations-compat",ES="@firebase/messaging",SS="@firebase/messaging-compat",kS="@firebase/performance",CS="@firebase/performance-compat",IS="@firebase/remote-config",TS="@firebase/remote-config-compat",bS="@firebase/storage",xS="@firebase/storage-compat",NS="@firebase/firestore",PS="@firebase/firestore-compat",RS="firebase",AS="9.14.0";/**
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
 */const Ec="[DEFAULT]",OS={[wc]:"fire-core",[lS]:"fire-core-compat",[cS]:"fire-analytics",[uS]:"fire-analytics-compat",[fS]:"fire-app-check",[dS]:"fire-app-check-compat",[hS]:"fire-auth",[pS]:"fire-auth-compat",[mS]:"fire-rtdb",[gS]:"fire-rtdb-compat",[vS]:"fire-fn",[_S]:"fire-fn-compat",[yS]:"fire-iid",[wS]:"fire-iid-compat",[ES]:"fire-fcm",[SS]:"fire-fcm-compat",[kS]:"fire-perf",[CS]:"fire-perf-compat",[IS]:"fire-rc",[TS]:"fire-rc-compat",[bS]:"fire-gcs",[xS]:"fire-gcs-compat",[NS]:"fire-fst",[PS]:"fire-fst-compat","fire-js":"fire-js",[RS]:"fire-js-all"};/**
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
 */const Ca=new Map,Sc=new Map;function DS(t,e){try{t.container.addComponent(e)}catch(n){sr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ni(t){const e=t.name;if(Sc.has(e))return sr.debug(`There were multiple attempts to register component ${e}.`),!1;Sc.set(e,t);for(const n of Ca.values())DS(n,t);return!0}function nf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const MS={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},En=new js("app","Firebase",MS);/**
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
 */class LS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ir("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw En.create("app-deleted",{appName:this._name})}}/**
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
 */const Ws=AS;function C_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ec,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw En.create("bad-app-name",{appName:String(i)});if(n||(n=NE()),!n)throw En.create("no-options");const s=Ca.get(i);if(s){if(ka(n,s.options)&&ka(r,s.config))return s;throw En.create("duplicate-app",{appName:i})}const o=new HE(i);for(const l of Sc.values())o.addComponent(l);const a=new LS(n,r,o);return Ca.set(i,a),a}function I_(t=Ec){const e=Ca.get(t);if(!e&&t===Ec)return C_();if(!e)throw En.create("no-app",{appName:t});return e}function Sn(t,e,n){var r;let i=(r=OS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),sr.warn(a.join(" "));return}ni(new ir(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const FS="firebase-heartbeat-database",zS=1,ys="firebase-heartbeat-store";let uu=null;function T_(){return uu||(uu=rS(FS,zS,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ys)}}}).catch(t=>{throw En.create("idb-open",{originalErrorMessage:t.message})})),uu}async function US(t){var e;try{return(await T_()).transaction(ys).objectStore(ys).get(b_(t))}catch(n){if(n instanceof Dn)sr.warn(n.message);else{const r=En.create("idb-get",{originalErrorMessage:(e=n)===null||e===void 0?void 0:e.message});sr.warn(r.message)}}}async function Cp(t,e){var n;try{const i=(await T_()).transaction(ys,"readwrite");return await i.objectStore(ys).put(e,b_(t)),i.done}catch(r){if(r instanceof Dn)sr.warn(r.message);else{const i=En.create("idb-set",{originalErrorMessage:(n=r)===null||n===void 0?void 0:n.message});sr.warn(i.message)}}}function b_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jS=1024,WS=30*24*60*60*1e3;class $S{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ip();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=WS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Ip(),{heartbeatsToSend:n,unsentEntries:r}=BS(this._heartbeatsCache.heartbeats),i=wa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ip(){return new Date().toISOString().substring(0,10)}function BS(t,e=jS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Tp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Tp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return SE()?kE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await US(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Cp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Tp(t){return wa(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function VS(t){ni(new ir("platform-logger",e=>new oS(e),"PRIVATE")),ni(new ir("heartbeat",e=>new $S(e),"PRIVATE")),Sn(wc,kp,t),Sn(wc,kp,"esm2017"),Sn("fire-js","")}VS("");var GS="firebase",YS="9.14.0";/**
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
 */Sn(GS,YS,"app");const bp="@firebase/database",xp="0.13.10";/**
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
 */let x_="";function KS(t){x_=t}/**
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
 */class qS{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),we(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:_s(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class QS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return xt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const N_=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qS(e)}}catch{}return new QS},Hn=N_("localStorage"),kc=N_("sessionStorage");/**
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
 */const Wr=new ef("@firebase/database"),XS=function(){let t=1;return function(){return t++}}(),P_=function(t){const e=jE(t),n=new LE;n.update(e);const r=n.digest();return Qd.encodeByteArray(r)},$s=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=$s.apply(null,r):typeof r=="object"?e+=we(r):e+=r,e+=" "}return e};let Xn=null,Np=!0;const JS=function(t,e){S(!e||t===!0||t===!1,"Can't turn on custom loggers persistently."),t===!0?(Wr.logLevel=Y.VERBOSE,Xn=Wr.log.bind(Wr),e&&kc.set("logging_enabled",!0)):typeof t=="function"?Xn=t:(Xn=null,kc.remove("logging_enabled"))},ke=function(...t){if(Np===!0&&(Np=!1,Xn===null&&kc.get("logging_enabled")===!0&&JS(!0)),Xn){const e=$s.apply(null,t);Xn(e)}},Bs=function(t){return function(...e){ke(t,...e)}},Cc=function(...t){const e="FIREBASE INTERNAL ERROR: "+$s(...t);Wr.error(e)},Bt=function(...t){const e=`FIREBASE FATAL ERROR: ${$s(...t)}`;throw Wr.error(e),new Error(e)},He=function(...t){const e="FIREBASE WARNING: "+$s(...t);Wr.warn(e)},ZS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&He("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},rf=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ek=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},ri="[MIN_NAME]",or="[MAX_NAME]",mr=function(t,e){if(t===e)return 0;if(t===ri||e===or)return-1;if(e===ri||t===or)return 1;{const n=Pp(t),r=Pp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},tk=function(t,e){return t===e?0:t<e?-1:1},xi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+we(e))},sf=function(t){if(typeof t!="object"||t===null)return we(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=we(e[r]),n+=":",n+=sf(t[e[r]]);return n+="}",n},R_=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const A_=function(t){S(!rf(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,a,l;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=a+r,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(l=0;l<64;l+=8){let f=parseInt(c.substr(l,8),2).toString(16);f.length===1&&(f="0"+f),d=d+f}return d.toLowerCase()},nk=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rk=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ik(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const sk=new RegExp("^-?(0*)\\d{1,10}$"),ok=-2147483648,ak=2147483647,Pp=function(t){if(sk.test(t)){const e=Number(t);if(e>=ok&&e<=ak)return e}return null},pi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw He("Exception was thrown by user callback.",n),e},Math.floor(0))}},lk=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ki=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class uk{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){He(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class ck{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',He(e)}}class $r{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}$r.OWNER="owner";/**
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
 */const of="5",O_="v",D_="s",M_="r",L_="f",F_=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,z_="ls",U_="p",Ic="ac",j_="websocket",W_="long_polling";/**
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
 */class $_{constructor(e,n,r,i,s=!1,o="",a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Hn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Hn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dk(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function B_(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let r;if(e===j_)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===W_)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dk(t)&&(n.ns=t.namespace);const i=[];return be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
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
 */class fk{constructor(){this.counters_={}}incrementCounter(e,n=1){xt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return _E(this.counters_)}}/**
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
 */const cu={},du={};function af(t){const e=t.toString();return cu[e]||(cu[e]=new fk),cu[e]}function hk(t,e){const n=t.toString();return du[n]||(du[n]=e()),du[n]}/**
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
 */class pk{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&pi(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Rp="start",mk="close",gk="pLPCommand",vk="pRTLPCB",H_="id",V_="pw",G_="ser",_k="cb",yk="seg",wk="ts",Ek="d",Sk="dframe",Y_=1870,K_=30,kk=Y_-K_,Ck=25e3,Ik=3e4;class Rr{constructor(e,n,r,i,s,o,a){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Bs(e),this.stats_=af(n),this.urlFn=l=>(this.appCheckToken&&(l[Ic]=this.appCheckToken),B_(n,W_,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pk(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Ik)),ek(()=>{if(this.isClosed_)return;this.scriptTagHolder=new lf((...s)=>{const[o,a,l,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Rp)this.id=a,this.password=l;else if(o===mk)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,a]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const r={};r[Rp]="t",r[G_]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[_k]=this.scriptTagHolder.uniqueCallbackIdentifier),r[O_]=of,this.transportSessionId&&(r[D_]=this.transportSessionId),this.lastSessionId&&(r[z_]=this.lastSessionId),this.applicationId&&(r[U_]=this.applicationId),this.appCheckToken&&(r[Ic]=this.appCheckToken),typeof location<"u"&&location.hostname&&F_.test(location.hostname)&&(r[M_]=L_);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Rr.forceAllow_=!0}static forceDisallow(){Rr.forceDisallow_=!0}static isAvailable(){return Rr.forceAllow_?!0:!Rr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nk()&&!rk()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=m_(n),i=R_(r,kk);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[Sk]="t",r[H_]=e,r[V_]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=we(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class lf{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XS(),window[gk+this.uniqueCallbackIdentifier]=e,window[vk+this.uniqueCallbackIdentifier]=n,this.myIFrame=lf.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){ke("frame writing exception"),a.stack&&ke(a.stack),ke(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.innerHTML="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[H_]=this.myID,e[V_]=this.myPW,e[G_]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+K_+r.length<=Y_;){const o=this.pendingSegs.shift();r=r+"&"+yk+i+"="+o.seg+"&"+wk+i+"="+o.ts+"&"+Ek+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(Ck)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
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
 */const Tk=16384,bk=45e3;let Ia=null;typeof MozWebSocket<"u"?Ia=MozWebSocket:typeof WebSocket<"u"&&(Ia=WebSocket);class ft{constructor(e,n,r,i,s,o,a){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Bs(this.connId),this.stats_=af(n),this.connURL=ft.connectionURL_(n,o,a,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[O_]=of,typeof location<"u"&&location.hostname&&F_.test(location.hostname)&&(o[M_]=L_),n&&(o[D_]=n),r&&(o[z_]=r),i&&(o[Ic]=i),s&&(o[U_]=s),B_(e,j_,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Hn.set("previous_websocket_failure",!0);try{let r;__(),this.mySock=new Ia(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ft.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&Ia!==null&&!ft.forceDisallow_}static previouslyFailed(){return Hn.isInMemoryStorage||Hn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Hn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=_s(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=we(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=R_(n,Tk);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(bk))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ft.responsesRequiredToBeHealthy=2;ft.healthyTimeout=3e4;/**
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
 */class ws{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Rr,ft]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ft&&ft.isAvailable();let r=n&&!ft.previouslyFailed();if(e.webSocketOnly&&(n||He("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ft];else{const i=this.transports_=[];for(const s of ws.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);ws.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ws.globalTransportInitialized_=!1;/**
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
 */const xk=6e4,Nk=5e3,Pk=10*1024,Rk=100*1024,fu="t",Ap="d",Ak="s",Op="r",Ok="e",Dp="o",Mp="a",Lp="n",Fp="p",Dk="h";class Mk{constructor(e,n,r,i,s,o,a,l,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Bs("c:"+this.id+":"),this.transportManager_=new ws(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ki(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Rk?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Pk?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(fu in e){const n=e[fu];n===Mp?this.upgradeIfSecondaryHealthy_():n===Op?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Dp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=xi("t",e),r=xi("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Fp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Mp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=xi("t",e),r=xi("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=xi(fu,e);if(Ap in e){const r=e[Ap];if(n===Dk)this.onHandshake_(r);else if(n===Lp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Ak?this.onConnectionShutdown_(r):n===Op?this.onReset_(r):n===Ok?Cc("Server Error: "+r):n===Dp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Cc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),of!==r&&He("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Ki(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(xk))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ki(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Nk))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Fp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Hn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class q_{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Q_{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class Ta extends Q_{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Xd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ta}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const zp=32,Up=768;class G{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function H(){return new G("")}function U(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Tn(t){return t.pieces_.length-t.pieceNum_}function q(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new G(t.pieces_,e)}function uf(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Lk(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Es(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function X_(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new G(e,0)}function le(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof G)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new G(n,0)}function j(t){return t.pieceNum_>=t.pieces_.length}function Ue(t,e){const n=U(t),r=U(e);if(n===null)return e;if(n===r)return Ue(q(t),q(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Fk(t,e){const n=Es(t,0),r=Es(e,0);for(let i=0;i<n.length&&i<r.length;i++){const s=mr(n[i],r[i]);if(s!==0)return s}return n.length===r.length?0:n.length<r.length?-1:1}function cf(t,e){if(Tn(t)!==Tn(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function nt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(Tn(t)>Tn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class zk{constructor(e,n){this.errorPrefix_=n,this.parts_=Es(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=ul(this.parts_[r]);J_(this)}}function Uk(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=ul(e),J_(t)}function jk(t){const e=t.parts_.pop();t.byteLength_-=ul(e),t.parts_.length>0&&(t.byteLength_-=1)}function J_(t){if(t.byteLength_>Up)throw new Error(t.errorPrefix_+"has a key path longer than "+Up+" bytes ("+t.byteLength_+").");if(t.parts_.length>zp)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+zp+") or object contains a cycle "+jn(t))}function jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class df extends Q_{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new df}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ni=1e3,Wk=60*5*1e3,jp=30*1e3,$k=1.3,Bk=3e4,Hk="server_kill",Wp=3;class zt extends q_{constructor(e,n,r,i,s,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=zt.nextPersistentConnectionId_++,this.log_=Bs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ni,this.maxReconnectDelay_=Wk,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!__())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");df.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Ta.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(we(s)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new ll,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,a=>{const l=a.d,u=a.s;zt.warnOnListenWarnings_(l,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&xt(e,"w")){const r=ti(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();He(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ME(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=jp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DE(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+we(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Cc("Unrecognized action received from server: "+we(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Bk&&(this.reconnectDelay_=Ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*$k)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,r())},u=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,f]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=f&&f.token,a=new Mk(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,g=>{He(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(Hk)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&He(d),l())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vc(this.interruptReasons_)&&(this.reconnectDelay_=Ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>sf(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new G(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wp&&(this.reconnectDelay_=jp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+x_.replace(/\./g,"-")]=1,Xd()?e["framework.cordova"]=1:v_()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Ta.getInstance().currentlyOnline();return vc(this.interruptReasons_)&&e}}zt.nextPersistentConnectionId_=0;zt.nextConnectionId_=0;/**
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
 */class z{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new z(e,n)}}/**
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
 */class cl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new z(ri,e),i=new z(ri,n);return this.compare(r,i)!==0}minPost(){return z.MIN}}/**
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
 */let yo;class Z_ extends cl{static get __EMPTY_NODE(){return yo}static set __EMPTY_NODE(e){yo=e}compare(e,n){return mr(e.name,n.name)}isDefinedOn(e){throw fi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return z.MIN}maxPost(){return new z(or,yo)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new z(e,yo)}toString(){return".key"}}const Br=new Z_;/**
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
 */class wo{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ye{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ye.RED,this.left=i!=null?i:je.EMPTY_NODE,this.right=s!=null?s:je.EMPTY_NODE}copy(e,n,r,i,s){return new ye(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return je.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return je.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ye.RED=!0;ye.BLACK=!1;class Vk{copy(e,n,r,i,s){return this}insert(e,n,r){return new ye(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class je{constructor(e,n=je.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new je(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ye.BLACK,null,null))}remove(e){return new je(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ye.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new wo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new wo(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new wo(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new wo(this.root_,null,this.comparator_,!0,e)}}je.EMPTY_NODE=new Vk;/**
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
 */function Gk(t,e){return mr(t.name,e.name)}function ff(t,e){return mr(t,e)}/**
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
 */let Tc;function Yk(t){Tc=t}const ey=function(t){return typeof t=="number"?"number:"+A_(t):"string:"+t},ty=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&xt(e,".sv"),"Priority must be a string or number.")}else S(t===Tc||t.isEmpty(),"priority of unexpected type.");S(t===Tc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let $p;class ve{constructor(e,n=ve.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ty(this.priorityNode_)}static set __childrenNodeConstructor(e){$p=e}static get __childrenNodeConstructor(){return $p}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ve(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return j(e)?this:U(e)===".priority"?this.priorityNode_:ve.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ve.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=U(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(S(r!==".priority"||Tn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,ve.__childrenNodeConstructor.EMPTY_NODE.updateChild(q(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+ey(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=A_(this.value_):e+=this.value_,this.lazyHash_=P_(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ve.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ve.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=ve.VALUE_TYPE_ORDER.indexOf(n),s=ve.VALUE_TYPE_ORDER.indexOf(r);return S(i>=0,"Unknown leaf type: "+n),S(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ve.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let ny,ry;function Kk(t){ny=t}function qk(t){ry=t}class Qk extends cl{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?mr(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return z.MIN}maxPost(){return new z(or,new ve("[PRIORITY-POST]",ry))}makePost(e,n){const r=ny(e);return new z(n,new ve("[PRIORITY-POST]",r))}toString(){return".priority"}}const ue=new Qk;/**
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
 */const Xk=Math.log(2);class Jk{constructor(e){const n=s=>parseInt(Math.log(s)/Xk,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ba=function(t,e,n,r){t.sort(e);const i=function(l,u){const c=u-l;let d,f;if(c===0)return null;if(c===1)return d=t[l],f=n?n(d):d,new ye(f,d.node,ye.BLACK,null,null);{const g=parseInt(c/2,10)+l,v=i(l,g),_=i(g+1,u);return d=t[g],f=n?n(d):d,new ye(f,d.node,ye.BLACK,v,_)}},s=function(l){let u=null,c=null,d=t.length;const f=function(v,_){const k=d-v,p=d;d-=v;const h=i(k+1,p),m=t[k],y=n?n(m):m;g(new ye(y,m.node,_,null,h))},g=function(v){u?(u.left=v,u=v):(c=v,u=v)};for(let v=0;v<l.count;++v){const _=l.nextBitIsOne(),k=Math.pow(2,l.count-(v+1));_?f(k,ye.BLACK):(f(k,ye.BLACK),f(k,ye.RED))}return c},o=new Jk(t.length),a=s(o);return new je(r||e,a)};/**
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
 */let hu;const _r={};class Dt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return S(_r&&ue,"ChildrenNode.ts has not been loaded"),hu=hu||new Dt({".priority":_r},{".priority":ue}),hu}get(e){const n=ti(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof je?n:null}hasIndex(e){return xt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Br,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(z.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let a;i?a=ba(r,e.getCompare()):a=_r;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const c=Object.assign({},this.indexes_);return c[l]=a,new Dt(c,u)}addToIndexes(e,n){const r=Sa(this.indexes_,(i,s)=>{const o=ti(this.indexSet_,s);if(S(o,"Missing index implementation for "+s),i===_r)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(z.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),ba(a,o.getCompare())}else return _r;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new z(e.name,a))),l.insert(e,e.node)}});return new Dt(r,this.indexSet_)}removeFromIndexes(e,n){const r=Sa(this.indexes_,i=>{if(i===_r)return i;{const s=n.get(e.name);return s?i.remove(new z(e.name,s)):i}});return new Dt(r,this.indexSet_)}}/**
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
 */let Pi;class A{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&ty(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Pi||(Pi=new A(new je(ff),null,Dt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Pi}updatePriority(e){return this.children_.isEmpty()?this:new A(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Pi:n}}getChild(e){const n=U(e);return n===null?this:this.getImmediateChild(n).getChild(q(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new z(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?Pi:this.priorityNode_;return new A(i,o,s)}}updateChild(e,n){const r=U(e);if(r===null)return n;{S(U(e)!==".priority"||Tn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(q(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ue,(o,a)=>{n[o]=a.val(e),r++,s&&A.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+ey(this.getPriority().val())+":"),this.forEachChild(ue,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":P_(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new z(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new z(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new z(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,z.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Hs?-1:0}withIndex(e){if(e===Br||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new A(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Br||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ue),i=n.getIterator(ue);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Br?null:this.indexMap_.get(e.toString())}}A.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Zk extends A{constructor(){super(new je(ff),A.EMPTY_NODE,Dt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return A.EMPTY_NODE}isEmpty(){return!1}}const Hs=new Zk;Object.defineProperties(z,{MIN:{value:new z(ri,A.EMPTY_NODE)},MAX:{value:new z(or,Hs)}});Z_.__EMPTY_NODE=A.EMPTY_NODE;ve.__childrenNodeConstructor=A;Yk(Hs);qk(Hs);/**
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
 */const eC=!0;function Ce(t,e=null){if(t===null)return A.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ve(n,Ce(e))}if(!(t instanceof Array)&&eC){const n=[];let r=!1;if(be(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Ce(a);l.isEmpty()||(r=r||!l.getPriority().isEmpty(),n.push(new z(o,l)))}}),n.length===0)return A.EMPTY_NODE;const s=ba(n,Gk,o=>o.name,ff);if(r){const o=ba(n,ue.getCompare());return new A(s,Ce(e),new Dt({".priority":o},{".priority":ue}))}else return new A(s,Ce(e),Dt.Default)}else{let n=A.EMPTY_NODE;return be(t,(r,i)=>{if(xt(t,r)&&r.substring(0,1)!=="."){const s=Ce(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Ce(e))}}Kk(Ce);/**
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
 */class tC extends cl{constructor(e){super(),this.indexPath_=e,S(!j(e)&&U(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?mr(e.name,n.name):s}makePost(e,n){const r=Ce(e),i=A.EMPTY_NODE.updateChild(this.indexPath_,r);return new z(n,i)}maxPost(){const e=A.EMPTY_NODE.updateChild(this.indexPath_,Hs);return new z(or,e)}toString(){return Es(this.indexPath_,0).join("/")}}/**
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
 */class nC extends cl{compare(e,n){const r=e.node.compareTo(n.node);return r===0?mr(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return z.MIN}maxPost(){return z.MAX}makePost(e,n){const r=Ce(e);return new z(n,r)}toString(){return".value"}}const rC=new nC;/**
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
 */function iy(t){return{type:"value",snapshotNode:t}}function ii(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Ss(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function ks(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function iC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class hf{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(r.getChild(i))&&a.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(Ss(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(ii(n,r)):o.trackChildChange(ks(n,r,a))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ue,(i,s)=>{n.hasChild(i)||r.trackChildChange(Ss(i,s))}),n.isLeafNode()||n.forEachChild(ue,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(ks(i,s,o))}else r.trackChildChange(ii(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?A.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Cs{constructor(e){this.indexedFilter_=new hf(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Cs.getStartPost_(e),this.endPost_=Cs.getEndPost_(e)}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){return this.index_.compare(this.getStartPost(),e)<=0&&this.index_.compare(e,this.getEndPost())<=0}updateChild(e,n,r,i,s,o){return this.matches(new z(n,r))||(r=A.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=A.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(A.EMPTY_NODE);const s=this;return n.forEachChild(ue,(o,a)=>{s.matches(new z(o,a))||(i=i.updateImmediateChild(o,A.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class sC{constructor(e){this.rangedFilter_=new Cs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft()}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new z(n,r))||(r=A.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=A.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=A.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const a=s.getNext();let l;if(this.reverse_?l=this.index_.compare(this.rangedFilter_.getStartPost(),a)<=0:l=this.index_.compare(a,this.rangedFilter_.getEndPost())<=0,l)i=i.updateImmediateChild(a.name,a.node),o++;else break}}else{i=n.withIndex(this.index_),i=i.updatePriority(A.EMPTY_NODE);let s,o,a,l;if(this.reverse_){l=i.getReverseIterator(this.index_),s=this.rangedFilter_.getEndPost(),o=this.rangedFilter_.getStartPost();const d=this.index_.getCompare();a=(f,g)=>d(g,f)}else l=i.getIterator(this.index_),s=this.rangedFilter_.getStartPost(),o=this.rangedFilter_.getEndPost(),a=this.index_.getCompare();let u=0,c=!1;for(;l.hasNext();){const d=l.getNext();!c&&a(s,d)<=0&&(c=!0),c&&u<this.limit_&&a(d,o)<=0?u++:i=i.updateImmediateChild(d.name,A.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(f,g)=>d(g,f)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new z(n,r),u=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let f=i.getChildAfterChild(this.index_,u,this.reverse_);for(;f!=null&&(f.name===n||a.hasChild(f.name));)f=i.getChildAfterChild(this.index_,f,this.reverse_);const g=f==null?1:o(f,l);if(c&&!r.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ks(n,r,d)),a.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(Ss(n,d));const _=a.updateImmediateChild(n,A.EMPTY_NODE);return f!=null&&this.rangedFilter_.matches(f)?(s!=null&&s.trackChildChange(ii(f.name,f.node)),_.updateImmediateChild(f.name,f.node)):_}}else return r.isEmpty()?e:c&&o(u,l)>=0?(s!=null&&(s.trackChildChange(Ss(u.name,u.node)),s.trackChildChange(ii(n,r))),a.updateImmediateChild(n,r).updateImmediateChild(u.name,A.EMPTY_NODE)):e}}/**
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
 */class pf{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ue}hasStart(){return this.startSet_}hasStartAfter(){return this.startAfterSet_}hasEndBefore(){return this.endBeforeSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:ri}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:or}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ue}copy(){const e=new pf;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function oC(t){return t.loadsAllData()?new hf(t.getIndex()):t.hasLimit()?new sC(t):new Cs(t)}function Bp(t){const e={};if(t.isDefault())return e;let n;return t.index_===ue?n="$priority":t.index_===rC?n="$value":t.index_===Br?n="$key":(S(t.index_ instanceof tC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=we(n),t.startSet_&&(e.startAt=we(t.indexStartValue_),t.startNameSet_&&(e.startAt+=","+we(t.indexStartName_))),t.endSet_&&(e.endAt=we(t.indexEndValue_),t.endNameSet_&&(e.endAt+=","+we(t.indexEndName_))),t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Hp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_)),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_)),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ue&&(e.i=t.index_.toString()),e}/**
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
 */class xa extends q_{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=Bs("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=xa.getListenId_(e,r),a={};this.listens_[o]=a;const l=Bp(e._queryParams);this.restRequest_(s+".json",l,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),ti(this.listens_,o)===a){let f;u?u===401?f="permission_denied":f="rest_error:"+u:f="ok",i(f,null)}})}unlisten(e,n){const r=xa.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Bp(e._queryParams),r=e._path.toString(),i=new ll;return this.restRequest_(r+".json",n,(s,o)=>{let a=o;s===404&&(a=null,s=null),s===null?(this.onDataUpdate_(r,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+hi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(r&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=_s(a.responseText)}catch{He("Failed to parse JSON response for "+o+": "+a.responseText)}r(null,l)}else a.status!==401&&a.status!==404&&He("Got unsuccessful REST response for "+o+" Status: "+a.status),r(a.status);r=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class aC{constructor(){this.rootNode_=A.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Na(){return{value:null,children:new Map}}function sy(t,e,n){if(j(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=U(e);t.children.has(r)||t.children.set(r,Na());const i=t.children.get(r);e=q(e),sy(i,e,n)}}function bc(t,e,n){t.value!==null?n(e,t.value):lC(t,(r,i)=>{const s=new G(e.toString()+"/"+r);bc(i,s,n)})}function lC(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
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
 */class uC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
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
 */const Vp=10*1e3,cC=30*1e3,dC=5*60*1e3;class fC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new uC(e);const r=Vp+(cC-Vp)*Math.random();Ki(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;be(e,(i,s)=>{s>0&&xt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Ki(this.reportStats_.bind(this),Math.floor(Math.random()*2*dC))}}/**
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
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function mf(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gf(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function vf(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Pa{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ht.ACK_USER_WRITE,this.source=mf()}operationForChild(e){if(j(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new G(e));return new Pa(H(),n,this.revert)}}else return S(U(this.path)===e,"operationForChild called for unrelated child."),new Pa(q(this.path),this.affectedTree,this.revert)}}/**
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
 */class Is{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return j(this.path)?new Is(this.source,H()):new Is(this.source,q(this.path))}}/**
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
 */class ar{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ht.OVERWRITE}operationForChild(e){return j(this.path)?new ar(this.source,H(),this.snap.getImmediateChild(e)):new ar(this.source,q(this.path),this.snap)}}/**
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
 */class si{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ht.MERGE}operationForChild(e){if(j(this.path)){const n=this.children.subtree(new G(e));return n.isEmpty()?null:n.value?new ar(this.source,H(),n.value):new si(this.source,H(),n)}else return S(U(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new si(this.source,q(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class lr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(j(e))return this.isFullyInitialized()&&!this.filtered_;const n=U(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class hC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function pC(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(iC(o.childName,o.snapshotNode))}),Ri(t,i,"child_removed",e,r,n),Ri(t,i,"child_added",e,r,n),Ri(t,i,"child_moved",s,r,n),Ri(t,i,"child_changed",e,r,n),Ri(t,i,"value",e,r,n),i}function Ri(t,e,n,r,i,s){const o=r.filter(a=>a.type===n);o.sort((a,l)=>gC(t,a,l)),o.forEach(a=>{const l=mC(t,a,s);i.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function mC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function gC(t,e,n){if(e.childName==null||n.childName==null)throw fi("Should only compare child_ events.");const r=new z(e.childName,e.snapshotNode),i=new z(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
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
 */function dl(t,e){return{eventCache:t,serverCache:e}}function qi(t,e,n,r){return dl(new lr(e,n,r),t.serverCache)}function oy(t,e,n,r){return dl(t.eventCache,new lr(e,n,r))}function xc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ur(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let pu;const vC=()=>(pu||(pu=new je(tk)),pu);class K{constructor(e,n=vC()){this.value=e,this.children=n}static fromObject(e){let n=new K(null);return be(e,(r,i)=>{n=n.set(new G(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:H(),value:this.value};if(j(e))return null;{const r=U(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(q(e),n);return s!=null?{path:le(new G(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(j(e))return this;{const n=U(e),r=this.children.get(n);return r!==null?r.subtree(q(e)):new K(null)}}set(e,n){if(j(e))return new K(n,this.children);{const r=U(e),s=(this.children.get(r)||new K(null)).set(q(e),n),o=this.children.insert(r,s);return new K(this.value,o)}}remove(e){if(j(e))return this.children.isEmpty()?new K(null):new K(null,this.children);{const n=U(e),r=this.children.get(n);if(r){const i=r.remove(q(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new K(null):new K(this.value,s)}else return this}}get(e){if(j(e))return this.value;{const n=U(e),r=this.children.get(n);return r?r.get(q(e)):null}}setTree(e,n){if(j(e))return n;{const r=U(e),s=(this.children.get(r)||new K(null)).setTree(q(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new K(this.value,o)}}fold(e){return this.fold_(H(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(le(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,H(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(j(e))return null;{const s=U(e),o=this.children.get(s);return o?o.findOnPath_(q(e),le(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,H(),n)}foreachOnPath_(e,n,r){if(j(e))return this;{this.value&&r(n,this.value);const i=U(e),s=this.children.get(i);return s?s.foreachOnPath_(q(e),le(n,i),r):new K(null)}}foreach(e){this.foreach_(H(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(le(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
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
 */class vt{constructor(e){this.writeTree_=e}static empty(){return new vt(new K(null))}}function Qi(t,e,n){if(j(e))return new vt(new K(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Ue(i,e);return s=s.updateChild(o,n),new vt(t.writeTree_.set(i,s))}else{const i=new K(n),s=t.writeTree_.setTree(e,i);return new vt(s)}}}function Nc(t,e,n){let r=t;return be(n,(i,s)=>{r=Qi(r,le(e,i),s)}),r}function Gp(t,e){if(j(e))return vt.empty();{const n=t.writeTree_.setTree(e,new K(null));return new vt(n)}}function Pc(t,e){return gr(t,e)!=null}function gr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Ue(n.path,e)):null}function Yp(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ue,(r,i)=>{e.push(new z(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new z(r,i.value))}),e}function kn(t,e){if(j(e))return t;{const n=gr(t,e);return n!=null?new vt(new K(n)):new vt(t.writeTree_.subtree(e))}}function Rc(t){return t.writeTree_.isEmpty()}function oi(t,e){return ay(H(),t.writeTree_,e)}function ay(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(S(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=ay(le(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(le(t,".priority"),r)),n}}/**
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
 */function _f(t,e){return dy(e,t)}function _C(t,e,n,r,i){S(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=Qi(t.visibleWrites,e,n)),t.lastWriteId=r}function yC(t,e,n,r){S(r>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:r,visible:!0}),t.visibleWrites=Nc(t.visibleWrites,e,n),t.lastWriteId=r}function wC(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function EC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&SC(a,r.path)?i=!1:nt(r.path,a.path)&&(s=!0)),o--}if(i){if(s)return kC(t),!0;if(r.snap)t.visibleWrites=Gp(t.visibleWrites,r.path);else{const a=r.children;be(a,l=>{t.visibleWrites=Gp(t.visibleWrites,le(r.path,l))})}return!0}else return!1}function SC(t,e){if(t.snap)return nt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&nt(le(t.path,n),e))return!0;return!1}function kC(t){t.visibleWrites=ly(t.allWrites,CC,H()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function CC(t){return t.visible}function ly(t,e,n){let r=vt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let a;if(s.snap)nt(n,o)?(a=Ue(n,o),r=Qi(r,a,s.snap)):nt(o,n)&&(a=Ue(o,n),r=Qi(r,H(),s.snap.getChild(a)));else if(s.children){if(nt(n,o))a=Ue(n,o),r=Nc(r,a,s.children);else if(nt(o,n))if(a=Ue(o,n),j(a))r=Nc(r,H(),s.children);else{const l=ti(s.children,U(a));if(l){const u=l.getChild(q(a));r=Qi(r,H(),u)}}}else throw fi("WriteRecord should have .snap or .children")}}return r}function uy(t,e,n,r,i){if(!r&&!i){const s=gr(t.visibleWrites,e);if(s!=null)return s;{const o=kn(t.visibleWrites,e);if(Rc(o))return n;if(n==null&&!Pc(o,H()))return null;{const a=n||A.EMPTY_NODE;return oi(o,a)}}}else{const s=kn(t.visibleWrites,e);if(!i&&Rc(s))return n;if(!i&&n==null&&!Pc(s,H()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(nt(u.path,e)||nt(e,u.path))},a=ly(t.allWrites,o,e),l=n||A.EMPTY_NODE;return oi(a,l)}}}function IC(t,e,n){let r=A.EMPTY_NODE;const i=gr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ue,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=kn(t.visibleWrites,e);return n.forEachChild(ue,(o,a)=>{const l=oi(kn(s,new G(o)),a);r=r.updateImmediateChild(o,l)}),Yp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=kn(t.visibleWrites,e);return Yp(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function TC(t,e,n,r,i){S(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=le(e,n);if(Pc(t.visibleWrites,s))return null;{const o=kn(t.visibleWrites,s);return Rc(o)?i.getChild(n):oi(o,i.getChild(n))}}function bC(t,e,n,r){const i=le(e,n),s=gr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=kn(t.visibleWrites,i);return oi(o,r.getNode().getImmediateChild(n))}else return null}function xC(t,e){return gr(t.visibleWrites,e)}function NC(t,e,n,r,i,s,o){let a;const l=kn(t.visibleWrites,e),u=gr(l,H());if(u!=null)a=u;else if(n!=null)a=oi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const c=[],d=o.getCompare(),f=s?a.getReverseIteratorFrom(r,o):a.getIteratorFrom(r,o);let g=f.getNext();for(;g&&c.length<i;)d(g,r)!==0&&c.push(g),g=f.getNext();return c}else return[]}function PC(){return{visibleWrites:vt.empty(),allWrites:[],lastWriteId:-1}}function Ra(t,e,n,r){return uy(t.writeTree,t.treePath,e,n,r)}function yf(t,e){return IC(t.writeTree,t.treePath,e)}function Kp(t,e,n,r){return TC(t.writeTree,t.treePath,e,n,r)}function Aa(t,e){return xC(t.writeTree,le(t.treePath,e))}function RC(t,e,n,r,i,s){return NC(t.writeTree,t.treePath,e,n,r,i,s)}function wf(t,e,n){return bC(t.writeTree,t.treePath,e,n)}function cy(t,e){return dy(le(t.treePath,e),t.writeTree)}function dy(t,e){return{treePath:t,writeTree:e}}/**
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
 */class AC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ks(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,Ss(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,ii(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ks(r,e.snapshotNode,i.oldSnap));else throw fi("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class OC{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const fy=new OC;class Ef{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new lr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return wf(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ur(this.viewCache_),s=RC(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
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
 */function DC(t){return{filter:t}}function MC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function LC(t,e,n,r,i){const s=new AC;let o,a;if(n.type===ht.OVERWRITE){const u=n;u.source.fromUser?o=Ac(t,e,u.path,u.snap,r,i,s):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!j(u.path),o=Oa(t,e,u.path,u.snap,r,i,a,s))}else if(n.type===ht.MERGE){const u=n;u.source.fromUser?o=zC(t,e,u.path,u.children,r,i,s):(S(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Oc(t,e,u.path,u.children,r,i,a,s))}else if(n.type===ht.ACK_USER_WRITE){const u=n;u.revert?o=WC(t,e,u.path,r,i,s):o=UC(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ht.LISTEN_COMPLETE)o=jC(t,e,n.path,r,s);else throw fi("Unknown operation type: "+n.type);const l=s.getChanges();return FC(e,o,l),{viewCache:o,changes:l}}function FC(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=xc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(iy(xc(e)))}}function hy(t,e,n,r,i,s){const o=e.eventCache;if(Aa(r,n)!=null)return e;{let a,l;if(j(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=ur(e),c=u instanceof A?u:A.EMPTY_NODE,d=yf(r,c);a=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=Ra(r,ur(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){S(Tn(n)===1,"Can't have a priority with additional path components");const c=o.getNode();l=e.serverCache.getNode();const d=Kp(r,n,c,l);d!=null?a=t.filter.updatePriority(c,d):a=o.getNode()}else{const c=q(n);let d;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const f=Kp(r,n,o.getNode(),l);f!=null?d=o.getNode().getImmediateChild(u).updateChild(c,f):d=o.getNode().getImmediateChild(u)}else d=wf(r,u,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),u,d,c,i,s):a=o.getNode()}}return qi(e,a,o.isFullyInitialized()||j(n),t.filter.filtersNodes())}}function Oa(t,e,n,r,i,s,o,a){const l=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(j(n))u=c.updateFullNode(l.getNode(),r,null);else if(c.filtersNodes()&&!l.isFiltered()){const g=l.getNode().updateChild(n,r);u=c.updateFullNode(l.getNode(),g,null)}else{const g=U(n);if(!l.isCompleteForPath(n)&&Tn(n)>1)return e;const v=q(n),k=l.getNode().getImmediateChild(g).updateChild(v,r);g===".priority"?u=c.updatePriority(l.getNode(),k):u=c.updateChild(l.getNode(),g,k,v,fy,null)}const d=oy(e,u,l.isFullyInitialized()||j(n),c.filtersNodes()),f=new Ef(i,d,s);return hy(t,d,n,i,f,a)}function Ac(t,e,n,r,i,s,o){const a=e.eventCache;let l,u;const c=new Ef(i,e,s);if(j(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),l=qi(e,u,!0,t.filter.filtersNodes());else{const d=U(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),l=qi(e,u,a.isFullyInitialized(),a.isFiltered());else{const f=q(n),g=a.getNode().getImmediateChild(d);let v;if(j(f))v=r;else{const _=c.getCompleteChild(d);_!=null?uf(f)===".priority"&&_.getChild(X_(f)).isEmpty()?v=_:v=_.updateChild(f,r):v=A.EMPTY_NODE}if(g.equals(v))l=e;else{const _=t.filter.updateChild(a.getNode(),d,v,f,c,o);l=qi(e,_,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function qp(t,e){return t.eventCache.isCompleteForChild(e)}function zC(t,e,n,r,i,s,o){let a=e;return r.foreach((l,u)=>{const c=le(n,l);qp(e,U(c))&&(a=Ac(t,a,c,u,i,s,o))}),r.foreach((l,u)=>{const c=le(n,l);qp(e,U(c))||(a=Ac(t,a,c,u,i,s,o))}),a}function Qp(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Oc(t,e,n,r,i,s,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;j(n)?u=r:u=new K(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,f)=>{if(c.hasChild(d)){const g=e.serverCache.getNode().getImmediateChild(d),v=Qp(t,g,f);l=Oa(t,l,new G(d),v,i,s,o,a)}}),u.children.inorderTraversal((d,f)=>{const g=!e.serverCache.isCompleteForChild(d)&&f.value===null;if(!c.hasChild(d)&&!g){const v=e.serverCache.getNode().getImmediateChild(d),_=Qp(t,v,f);l=Oa(t,l,new G(d),_,i,s,o,a)}}),l}function UC(t,e,n,r,i,s,o){if(Aa(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(r.value!=null){if(j(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Oa(t,e,n,l.getNode().getChild(n),i,s,a,o);if(j(n)){let u=new K(null);return l.getNode().forEachChild(Br,(c,d)=>{u=u.set(new G(c),d)}),Oc(t,e,n,u,i,s,a,o)}else return e}else{let u=new K(null);return r.foreach((c,d)=>{const f=le(n,c);l.isCompleteForPath(f)&&(u=u.set(c,l.getNode().getChild(f)))}),Oc(t,e,n,u,i,s,a,o)}}function jC(t,e,n,r,i){const s=e.serverCache,o=oy(e,s.getNode(),s.isFullyInitialized()||j(n),s.isFiltered());return hy(t,o,n,r,fy,i)}function WC(t,e,n,r,i,s){let o;if(Aa(r,n)!=null)return e;{const a=new Ef(r,e,i),l=e.eventCache.getNode();let u;if(j(n)||U(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=Ra(r,ur(e));else{const d=e.serverCache.getNode();S(d instanceof A,"serverChildren would be complete if leaf node"),c=yf(r,d)}c=c,u=t.filter.updateFullNode(l,c,s)}else{const c=U(n);let d=wf(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=l.getImmediateChild(c)),d!=null?u=t.filter.updateChild(l,c,d,q(n),a,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(l,c,A.EMPTY_NODE,q(n),a,s):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Ra(r,ur(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Aa(r,H())!=null,qi(e,u,o,t.filter.filtersNodes())}}/**
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
 */class $C{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new hf(r.getIndex()),s=oC(r);this.processor_=DC(s);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(A.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(A.EMPTY_NODE,a.getNode(),null),c=new lr(l,o.isFullyInitialized(),i.filtersNodes()),d=new lr(u,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=dl(d,c),this.eventGenerator_=new hC(this.query_)}get query(){return this.query_}}function BC(t){return t.viewCache_.serverCache.getNode()}function HC(t,e){const n=ur(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!j(e)&&!n.getImmediateChild(U(e)).isEmpty())?n.getChild(e):null}function Xp(t){return t.eventRegistrations_.length===0}function VC(t,e){t.eventRegistrations_.push(e)}function Jp(t,e,n){const r=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function Zp(t,e,n,r){e.type===ht.MERGE&&e.source.queryId!==null&&(S(ur(t.viewCache_),"We should always have a full cache before handling merges"),S(xc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=LC(t.processor_,i,e,n,r);return MC(t.processor_,s.viewCache),S(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,py(t,s.changes,s.viewCache.eventCache.getNode(),null)}function GC(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ue,(s,o)=>{r.push(ii(s,o))}),n.isFullyInitialized()&&r.push(iy(n.getNode())),py(t,r,n.getNode(),e)}function py(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return pC(t.eventGenerator_,e,n,i)}/**
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
 */let Da;class YC{constructor(){this.views=new Map}}function KC(t){S(!Da,"__referenceConstructor has already been defined"),Da=t}function qC(){return S(Da,"Reference.ts has not been loaded"),Da}function QC(t){return t.views.size===0}function Sf(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return S(s!=null,"SyncTree gave us an op for an invalid query."),Zp(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(Zp(o,e,n,r));return s}}function XC(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let a=Ra(n,i?r:null),l=!1;a?l=!0:r instanceof A?(a=yf(n,r),l=!1):(a=A.EMPTY_NODE,l=!1);const u=dl(new lr(a,l,!1),new lr(r,i,!1));return new $C(e,u)}return o}function JC(t,e,n,r,i,s){const o=XC(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),VC(o,n),GC(o,n)}function ZC(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const a=bn(t);if(i==="default")for(const[l,u]of t.views.entries())o=o.concat(Jp(u,n,r)),Xp(u)&&(t.views.delete(l),u.query._queryParams.loadsAllData()||s.push(u.query));else{const l=t.views.get(i);l&&(o=o.concat(Jp(l,n,r)),Xp(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||s.push(l.query)))}return a&&!bn(t)&&s.push(new(qC())(e._repo,e._path)),{removed:s,events:o}}function my(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Hr(t,e){let n=null;for(const r of t.views.values())n=n||HC(r,e);return n}function gy(t,e){if(e._queryParams.loadsAllData())return fl(t);{const r=e._queryIdentifier;return t.views.get(r)}}function vy(t,e){return gy(t,e)!=null}function bn(t){return fl(t)!=null}function fl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Ma;function eI(t){S(!Ma,"__referenceConstructor has already been defined"),Ma=t}function tI(){return S(Ma,"Reference.ts has not been loaded"),Ma}let nI=1;class em{constructor(e){this.listenProvider_=e,this.syncPointTree_=new K(null),this.pendingWriteTree_=PC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function rI(t,e,n,r,i){return _C(t.pendingWriteTree_,e,n,r,i),i?mi(t,new ar(mf(),e,n)):[]}function iI(t,e,n,r){yC(t.pendingWriteTree_,e,n,r);const i=K.fromObject(n);return mi(t,new si(mf(),e,i))}function Vn(t,e,n=!1){const r=wC(t.pendingWriteTree_,e);if(EC(t.pendingWriteTree_,e)){let s=new K(null);return r.snap!=null?s=s.set(H(),!0):be(r.children,o=>{s=s.set(new G(o),!0)}),mi(t,new Pa(r.path,s,n))}else return[]}function hl(t,e,n){return mi(t,new ar(gf(),e,n))}function sI(t,e,n){const r=K.fromObject(n);return mi(t,new si(gf(),e,r))}function oI(t,e){return mi(t,new Is(gf(),e))}function aI(t,e,n){const r=kf(t,n);if(r){const i=Cf(r),s=i.path,o=i.queryId,a=Ue(s,e),l=new Is(vf(o),a);return If(t,s,l)}else return[]}function Dc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let a=[];if(o&&(e._queryIdentifier==="default"||vy(o,e))){const l=ZC(o,e,n,r);QC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=l.removed;if(a=l.events,!i){const c=u.findIndex(f=>f._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(f,g)=>bn(g));if(c&&!d){const f=t.syncPointTree_.subtree(s);if(!f.isEmpty()){const g=cI(f);for(let v=0;v<g.length;++v){const _=g[v],k=_.query,p=Ey(t,_);t.listenProvider_.startListening(Xi(k),La(t,k),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(Xi(e),null):u.forEach(f=>{const g=t.queryToTagMap.get(pl(f));t.listenProvider_.stopListening(Xi(f),g)}))}dI(t,u)}return a}function lI(t,e,n,r){const i=kf(t,r);if(i!=null){const s=Cf(i),o=s.path,a=s.queryId,l=Ue(o,e),u=new ar(vf(a),l,n);return If(t,o,u)}else return[]}function uI(t,e,n,r){const i=kf(t,r);if(i){const s=Cf(i),o=s.path,a=s.queryId,l=Ue(o,e),u=K.fromObject(n),c=new si(vf(a),l,u);return If(t,o,c)}else return[]}function tm(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(f,g)=>{const v=Ue(f,i);s=s||Hr(g,v),o=o||bn(g)});let a=t.syncPointTree_.get(i);a?(o=o||bn(a),s=s||Hr(a,H())):(a=new YC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;s!=null?l=!0:(l=!1,s=A.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((g,v)=>{const _=Hr(v,H());_&&(s=s.updateImmediateChild(g,_))}));const u=vy(a,e);if(!u&&!e._queryParams.loadsAllData()){const f=pl(e);S(!t.queryToTagMap.has(f),"View does not exist, but we have a tag");const g=fI();t.queryToTagMap.set(f,g),t.tagToQueryMap.set(g,f)}const c=_f(t.pendingWriteTree_,i);let d=JC(a,e,n,c,s,l);if(!u&&!o&&!r){const f=gy(a,e);d=d.concat(hI(t,e,f))}return d}function _y(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=Ue(o,e),u=Hr(a,l);if(u)return u});return uy(i,e,s,n,!0)}function mi(t,e){return yy(e,t.syncPointTree_,null,_f(t.pendingWriteTree_,H()))}function yy(t,e,n,r){if(j(t.path))return wy(t,e,n,r);{const i=e.get(H());n==null&&i!=null&&(n=Hr(i,H()));let s=[];const o=U(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,c=cy(r,o);s=s.concat(yy(a,l,u,c))}return i&&(s=s.concat(Sf(i,t,r,n))),s}}function wy(t,e,n,r){const i=e.get(H());n==null&&i!=null&&(n=Hr(i,H()));let s=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=cy(r,o),c=t.operationForChild(o);c&&(s=s.concat(wy(c,a,l,u)))}),i&&(s=s.concat(Sf(i,t,r,n))),s}function Ey(t,e){const n=e.query,r=La(t,n);return{hashFn:()=>(BC(e)||A.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?aI(t,n._path,r):oI(t,n._path);{const s=ik(i,n);return Dc(t,n,null,s)}}}}function La(t,e){const n=pl(e);return t.queryToTagMap.get(n)}function pl(t){return t._path.toString()+"$"+t._queryIdentifier}function kf(t,e){return t.tagToQueryMap.get(e)}function Cf(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new G(t.substr(0,e))}}function If(t,e,n){const r=t.syncPointTree_.get(e);S(r,"Missing sync point for query tag that we're tracking");const i=_f(t.pendingWriteTree_,e);return Sf(r,n,i,null)}function cI(t){return t.fold((e,n,r)=>{if(n&&bn(n))return[fl(n)];{let i=[];return n&&(i=my(n)),be(r,(s,o)=>{i=i.concat(o)}),i}})}function Xi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(tI())(t._repo,t._path):t}function dI(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=pl(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function fI(){return nI++}function hI(t,e,n){const r=e._path,i=La(t,e),s=Ey(t,n),o=t.listenProvider_.startListening(Xi(e),i,s.hashFn,s.onComplete),a=t.syncPointTree_.subtree(r);if(i)S(!bn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((u,c,d)=>{if(!j(u)&&c&&bn(c))return[fl(c).query];{let f=[];return c&&(f=f.concat(my(c).map(g=>g.query))),be(d,(g,v)=>{f=f.concat(v)}),f}});for(let u=0;u<l.length;++u){const c=l[u];t.listenProvider_.stopListening(Xi(c),La(t,c))}}return o}/**
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
 */class Tf{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Tf(n)}node(){return this.node_}}class bf{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=le(this.path_,e);return new bf(this.syncTree_,n)}node(){return _y(this.syncTree_,this.path_)}}const pI=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nm=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return mI(t[".sv"],e,n);if(typeof t[".sv"]=="object")return gI(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},mI=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},gI=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&S(!1,"Unexpected increment value: "+r);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},Sy=function(t,e,n,r){return xf(e,new bf(n,t),r)},vI=function(t,e,n){return xf(t,new Tf(e),n)};function xf(t,e,n){const r=t.getPriority().val(),i=nm(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,a=nm(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new ve(a,Ce(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new ve(i))),o.forEachChild(ue,(a,l)=>{const u=xf(l,e.getImmediateChild(a),n);u!==l&&(s=s.updateImmediateChild(a,u))}),s}}/**
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
 */class Nf{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Pf(t,e){let n=e instanceof G?e:new G(e),r=t,i=U(n);for(;i!==null;){const s=ti(r.node.children,i)||{children:{},childCount:0};r=new Nf(i,r,s),n=q(n),i=U(n)}return r}function gi(t){return t.node.value}function ky(t,e){t.node.value=e,Mc(t)}function Cy(t){return t.node.childCount>0}function _I(t){return gi(t)===void 0&&!Cy(t)}function ml(t,e){be(t.node.children,(n,r)=>{e(new Nf(n,t,r))})}function Iy(t,e,n,r){n&&!r&&e(t),ml(t,i=>{Iy(i,e,!0,r)}),n&&r&&e(t)}function yI(t,e,n){let r=n?t:t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Vs(t){return new G(t.parent===null?t.name:Vs(t.parent)+"/"+t.name)}function Mc(t){t.parent!==null&&wI(t.parent,t.name,t)}function wI(t,e,n){const r=_I(n),i=xt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Mc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Mc(t))}/**
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
 */const EI=/[\[\].#$\/\u0000-\u001F\u007F]/,SI=/[\[\].#$\u0000-\u001F\u007F]/,mu=10*1024*1024,Rf=function(t){return typeof t=="string"&&t.length!==0&&!EI.test(t)},Ty=function(t){return typeof t=="string"&&t.length!==0&&!SI.test(t)},kI=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Ty(t)},CI=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!rf(t)||t&&typeof t=="object"&&xt(t,".sv")},Af=function(t,e,n){const r=n instanceof G?new zk(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jn(r));if(typeof e=="function")throw new Error(t+"contains a function "+jn(r)+" with contents = "+e.toString());if(rf(e))throw new Error(t+"contains "+e.toString()+" "+jn(r));if(typeof e=="string"&&e.length>mu/3&&ul(e)>mu)throw new Error(t+"contains a string greater than "+mu+" utf8 bytes "+jn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(be(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Rf(o)))throw new Error(t+" contains an invalid key ("+o+") "+jn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Uk(r,o),Af(t,a,r),jk(r)}),i&&s)throw new Error(t+' contains ".value" child '+jn(r)+" in addition to actual children.")}},II=function(t,e){let n,r;for(n=0;n<e.length;n++){r=e[n];const s=Es(r);for(let o=0;o<s.length;o++)if(!(s[o]===".priority"&&o===s.length-1)){if(!Rf(s[o]))throw new Error(t+"contains an invalid key ("+s[o]+") in path "+r.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Fk);let i=null;for(n=0;n<e.length;n++){if(r=e[n],i!==null&&nt(i,r))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+r.toString());i=r}},TI=function(t,e,n,r){if(r&&e===void 0)return;const i=Zd(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const s=[];be(e,(o,a)=>{const l=new G(o);if(Af(i,a,le(n,l)),uf(l)===".priority"&&!CI(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(l)}),II(i,s)},by=function(t,e,n,r){if(!(r&&n===void 0)&&!Ty(n))throw new Error(Zd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},bI=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),by(t,e,n,r)},xI=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Rf(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kI(n))throw new Error(Zd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class NI{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Of(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!cf(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function xy(t,e,n){Of(t,n),Ny(t,r=>cf(r,e))}function Ht(t,e,n){Of(t,n),Ny(t,r=>nt(r,e)||nt(e,r))}function Ny(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(PI(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function PI(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();Xn&&ke("event: "+n.toString()),pi(r)}}}/**
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
 */const RI="repo_interrupt",AI=25;class OI{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NI,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Na(),this.transactionQueueTree_=new Nf,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function DI(t,e,n){if(t.stats_=af(t.repoInfo_),t.forceRestClient_||lk())t.server_=new xa(t.repoInfo_,(r,i,s,o)=>{rm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>im(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{we(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new zt(t.repoInfo_,e,(r,i,s,o)=>{rm(t,r,i,s,o)},r=>{im(t,r)},r=>{LI(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=hk(t.repoInfo_,()=>new fC(t.stats_,t.server_)),t.infoData_=new aC,t.infoSyncTree_=new em({startListening:(r,i,s,o)=>{let a=[];const l=t.infoData_.getNode(r._path);return l.isEmpty()||(a=hl(t.infoSyncTree_,r._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Mf(t,"connected",!1),t.serverSyncTree_=new em({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(a,l)=>{const u=o(a,l);Ht(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function MI(t){const n=t.infoData_.getNode(new G(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Df(t){return pI({timestamp:MI(t)})}function rm(t,e,n,r,i){t.dataUpdateCount++;const s=new G(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const l=Sa(n,u=>Ce(u));o=uI(t.serverSyncTree_,s,l,i)}else{const l=Ce(n);o=lI(t.serverSyncTree_,s,l,i)}else if(r){const l=Sa(n,u=>Ce(u));o=sI(t.serverSyncTree_,s,l)}else{const l=Ce(n);o=hl(t.serverSyncTree_,s,l)}let a=s;o.length>0&&(a=Ts(t,s)),Ht(t.eventQueue_,a,o)}function im(t,e){Mf(t,"connected",e),e===!1&&zI(t)}function LI(t,e){be(e,(n,r)=>{Mf(t,n,r)})}function Mf(t,e,n){const r=new G("/.info/"+e),i=Ce(n);t.infoData_.updateSnapshot(r,i);const s=hl(t.infoSyncTree_,r,i);Ht(t.eventQueue_,r,s)}function Py(t){return t.nextWriteId_++}function FI(t,e,n,r){Lf(t,"update",{path:e.toString(),value:n});let i=!0;const s=Df(t),o={};if(be(n,(a,l)=>{i=!1,o[a]=Sy(le(e,a),Ce(l),t.serverSyncTree_,s)}),i)ke("update() called with empty data.  Don't do anything."),om(t,r,"ok",void 0);else{const a=Py(t),l=iI(t.serverSyncTree_,e,o,a);Of(t.eventQueue_,l),t.server_.merge(e.toString(),n,(u,c)=>{const d=u==="ok";d||He("update at "+e+" failed: "+u);const f=Vn(t.serverSyncTree_,a,!d),g=f.length>0?Ts(t,e):e;Ht(t.eventQueue_,g,f),om(t,r,u,c)}),be(n,u=>{const c=My(t,le(e,u));Ts(t,c)}),Ht(t.eventQueue_,e,[])}}function zI(t){Lf(t,"onDisconnectEvents");const e=Df(t),n=Na();bc(t.onDisconnect_,H(),(i,s)=>{const o=Sy(i,s,t.serverSyncTree_,e);sy(n,i,o)});let r=[];bc(n,H(),(i,s)=>{r=r.concat(hl(t.serverSyncTree_,i,s));const o=My(t,i);Ts(t,o)}),t.onDisconnect_=Na(),Ht(t.eventQueue_,H(),r)}function UI(t,e,n){let r;U(e._path)===".info"?r=tm(t.infoSyncTree_,e,n):r=tm(t.serverSyncTree_,e,n),xy(t.eventQueue_,e._path,r)}function sm(t,e,n){let r;U(e._path)===".info"?r=Dc(t.infoSyncTree_,e,n):r=Dc(t.serverSyncTree_,e,n),xy(t.eventQueue_,e._path,r)}function jI(t){t.persistentConnection_&&t.persistentConnection_.interrupt(RI)}function Lf(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function om(t,e,n,r){e&&pi(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function Ry(t,e,n){return _y(t.serverSyncTree_,e,n)||A.EMPTY_NODE}function Ff(t,e=t.transactionQueueTree_){if(e||gl(t,e),gi(e)){const n=Oy(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&WI(t,Vs(e),n)}else Cy(e)&&ml(e,n=>{Ff(t,n)})}function WI(t,e,n){const r=n.map(u=>u.currentWriteId),i=Ry(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];S(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Ue(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const a=s.val(!0),l=e;t.server_.put(l.toString(),a,u=>{Lf(t,"transaction put response",{path:l.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let f=0;f<n.length;f++)n[f].status=2,c=c.concat(Vn(t.serverSyncTree_,n[f].currentWriteId)),n[f].onComplete&&d.push(()=>n[f].onComplete(null,!0,n[f].currentOutputSnapshotResolved)),n[f].unwatcher();gl(t,Pf(t.transactionQueueTree_,e)),Ff(t,t.transactionQueueTree_),Ht(t.eventQueue_,e,c);for(let f=0;f<d.length;f++)pi(d[f])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{He("transaction at "+l.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}Ts(t,e)}},o)}function Ts(t,e){const n=Ay(t,e),r=Vs(n),i=Oy(t,n);return $I(t,i,r),r}function $I(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=Ue(n,l.path);let c=!1,d;if(S(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)c=!0,d=l.abortReason,i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=AI)c=!0,d="maxretry",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0));else{const f=Ry(t,l.path,o);l.currentInputSnapshot=f;const g=e[a].update(f.val());if(g!==void 0){Af("transaction failed: Data returned ",g,l.path);let v=Ce(g);typeof g=="object"&&g!=null&&xt(g,".priority")||(v=v.updatePriority(f.getPriority()));const k=l.currentWriteId,p=Df(t),h=vI(v,f,p);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=h,l.currentWriteId=Py(t),o.splice(o.indexOf(k),1),i=i.concat(rI(t.serverSyncTree_,l.path,h,l.currentWriteId,l.applyLocally)),i=i.concat(Vn(t.serverSyncTree_,k,!0))}else c=!0,d="nodata",i=i.concat(Vn(t.serverSyncTree_,l.currentWriteId,!0))}Ht(t.eventQueue_,n,i),i=[],c&&(e[a].status=2,function(f){setTimeout(f,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?r.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):r.push(()=>e[a].onComplete(new Error(d),!1,null))))}gl(t,t.transactionQueueTree_);for(let a=0;a<r.length;a++)pi(r[a]);Ff(t,t.transactionQueueTree_)}function Ay(t,e){let n,r=t.transactionQueueTree_;for(n=U(e);n!==null&&gi(r)===void 0;)r=Pf(r,n),e=q(e),n=U(e);return r}function Oy(t,e){const n=[];return Dy(t,e,n),n.sort((r,i)=>r.order-i.order),n}function Dy(t,e,n){const r=gi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);ml(e,i=>{Dy(t,i,n)})}function gl(t,e){const n=gi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,ky(e,n.length>0?n:void 0)}ml(e,r=>{gl(t,r)})}function My(t,e){const n=Vs(Ay(t,e)),r=Pf(t.transactionQueueTree_,e);return yI(r,i=>{gu(t,i)}),gu(t,r),Iy(r,i=>{gu(t,i)}),n}function gu(t,e){const n=gi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Vn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?ky(e,void 0):n.length=s+1,Ht(t.eventQueue_,Vs(e),i);for(let o=0;o<r.length;o++)pi(r[o])}}/**
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
 */function BI(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function HI(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):He(`Invalid query segment '${n}' in query '${t}'`)}return e}const am=function(t,e){const n=VI(t),r=n.namespace;n.domain==="firebase.com"&&Bt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Bt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ZS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $_(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new G(n.pathString)}},VI=function(t){let e="",n="",r="",i="",s="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=BI(t.substring(c,d)));const f=HI(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const g=e.slice(0,u);if(g.toLowerCase()==="localhost")n="localhost";else if(g.split(".").length<=2)n=g;else{const v=e.indexOf(".");r=e.substring(0,v).toLowerCase(),n=e.substring(v+1),s=r}"ns"in f&&(s=f.ns)}return{host:e,port:l,domain:n,subdomain:r,secure:o,scheme:a,pathString:i,namespace:s}};/**
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
 */class Ly{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+we(this.snapshot.exportVal())}}class Fy{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class GI{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class zf{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return j(this._path)?null:uf(this._path)}get ref(){return new Qt(this._repo,this._path)}get _queryIdentifier(){const e=Hp(this._queryParams),n=sf(e);return n==="{}"?"default":n}get _queryObject(){return Hp(this._queryParams)}isEqual(e){if(e=ot(e),!(e instanceof zf))return!1;const n=this._repo===e._repo,r=cf(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Lk(this._path)}}class Qt extends zf{constructor(e,n){super(e,n,new pf,!1)}get parent(){const e=X_(this._path);return e===null?null:new Qt(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class bs{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new G(e),r=Fa(this.ref,e);return new bs(this._node.getChild(n),r,ue)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new bs(i,Fa(this.ref,r),ue)))}hasChild(e){const n=new G(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function zy(t,e){return t=ot(t),t._checkNotDeleted("ref"),e!==void 0?Fa(t._root,e):t._root}function Fa(t,e){return t=ot(t),U(t._path)===null?bI("child","path",e,!1):by("child","path",e,!1),new Qt(t._repo,le(t._path,e))}function YI(t,e){TI("update",e,t._path,!1);const n=new ll;return FI(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Uf{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new Ly("value",this,new bs(e.snapshotNode,new Qt(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Fy(this,e,n):null}matches(e){return e instanceof Uf?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class jf{constructor(e,n){this.eventType=e,this.callbackContext=n}respondsTo(e){let n=e==="children_added"?"child_added":e;return n=n==="children_removed"?"child_removed":n,this.eventType===n}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new Fy(this,e,n):null}createEvent(e,n){S(e.childName!=null,"Child events should have a childName.");const r=Fa(new Qt(n._repo,n._path),e.childName),i=n._queryParams.getIndex();return new Ly(e.type,this,new bs(e.snapshotNode,r,i),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof jf?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function KI(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const l=n,u=(c,d)=>{sm(t._repo,t,a),l(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new GI(n,s||void 0),a=e==="value"?new Uf(o):new jf(e,o);return UI(t._repo,t,a),()=>sm(t._repo,t,a)}function qI(t,e,n,r){return KI(t,"value",e,n,r)}KC(Qt);eI(Qt);/**
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
 */const QI="FIREBASE_DATABASE_EMULATOR_HOST",Lc={};let XI=!1;function JI(t,e,n,r){t.repoInfo_=new $_(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams),r&&(t.authTokenProvider_=r)}function ZI(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Bt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=am(s,i),a=o.repoInfo,l,u;typeof process<"u"&&process.env&&(u=process.env[QI]),u?(l=!0,s=`http://${u}?ns=${a.namespace}`,o=am(s,i),a=o.repoInfo):l=!o.repoInfo.secure;const c=i&&l?new $r($r.OWNER):new ck(t.name,t.options,e);xI("Invalid Firebase Database URL",o),j(o.path)||Bt("Database URL must point to the root of a Firebase Database (not including a child path).");const d=tT(a,t,c,new uk(t.name,n));return new nT(d,t)}function eT(t,e){const n=Lc[e];(!n||n[t.key]!==t)&&Bt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),jI(t),delete n[t.key]}function tT(t,e,n,r){let i=Lc[e.name];i||(i={},Lc[e.name]=i);let s=i[t.toURLString()];return s&&Bt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new OI(t,XI,n,r),i[t.toURLString()]=s,s}class nT{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(DI(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qt(this._repo,H())),this._rootInternal}_delete(){return this._rootInternal!==null&&(eT(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Bt("Cannot call "+e+" on a deleted database.")}}function rT(t=I_(),e){const n=nf(t,"database").getImmediate({identifier:e}),r=xE("database");return r&&iT(n,...r),n}function iT(t,e,n,r={}){t=ot(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Bt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Bt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new $r($r.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:PE(r.mockUserToken,t.app.options.projectId);s=new $r(o)}JI(i,e,n,s)}/**
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
 */function sT(t){KS(Ws),ni(new ir("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return ZI(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Sn(bp,xp,t),Sn(bp,xp,"esm2017")}zt.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};zt.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};sT();function Wf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Uy(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oT=Uy,jy=new js("auth","Firebase",Uy());/**
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
 */const lm=new ef("@firebase/auth");function Ho(t,...e){lm.logLevel<=Y.ERROR&&lm.error(`Auth (${Ws}): ${t}`,...e)}/**
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
 */function bt(t,...e){throw $f(t,...e)}function It(t,...e){return $f(t,...e)}function Wy(t,e,n){const r=Object.assign(Object.assign({},oT()),{[e]:n});return new js("auth","Firebase",r).create(e,{appName:t.name})}function aT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&bt(t,"argument-error"),Wy(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return jy.create(t,...e)}function O(t,e,...n){if(!t)throw $f(e,...n)}function Mt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ho(e),new Error(e)}function Vt(t,e){t||Mt(e)}/**
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
 */const um=new Map;function Lt(t){Vt(t instanceof Function,"Expected a class definition");let e=um.get(t);return e?(Vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,um.set(t,e),e)}/**
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
 */function lT(t,e){const n=nf(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ka(s,e!=null?e:{}))return i;bt(i,"already-initialized")}return n.initialize({options:e})}function uT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Fc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function cT(){return cm()==="http:"||cm()==="https:"}function cm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function dT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cT()||wE()||"connection"in navigator)?navigator.onLine:!0}function fT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Gs{constructor(e,n){this.shortDelay=e,this.longDelay=n,Vt(n>e,"Short delay should be less than long delay!"),this.isMobile=Xd()||v_()}get(){return dT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Bf(t,e){Vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class $y{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Mt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Mt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Mt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const hT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const pT=new Gs(3e4,6e4);function mT(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function vl(t,e,n,r,i={}){return By(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=hi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),$y.fetch()(Hy(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function By(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hT),e);try{const i=new vT(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wy(t,c,u);bt(t,c)}}catch(i){if(i instanceof Dn)throw i;bt(t,"network-request-failed")}}async function gT(t,e,n,r,i={}){const s=await vl(t,e,n,r,i);return"mfaPendingCredential"in s&&bt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Hy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bf(t.config,i):`${t.config.apiScheme}://${i}`}class vT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(It(this.auth,"network-request-failed")),pT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=It(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function _T(t,e){return vl(t,"POST","/v1/accounts:delete",e)}async function yT(t,e){return vl(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ji(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function wT(t,e=!1){const n=ot(t),r=await n.getIdToken(e),i=Hf(r);O(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ji(vu(i.auth_time)),issuedAtTime:Ji(vu(i.iat)),expirationTime:Ji(vu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function vu(t){return Number(t)*1e3}function Hf(t){var e;const[n,r,i]=t.split(".");if(n===void 0||r===void 0||i===void 0)return Ho("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ea(r);return s?JSON.parse(s):(Ho("Failed to decode base64 JWT payload"),null)}catch(s){return Ho("Caught error parsing JWT payload as JSON",(e=s)===null||e===void 0?void 0:e.toString()),null}}function ET(t){const e=Hf(t);return O(e,"internal-error"),O(typeof e.exp<"u","internal-error"),O(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Dn&&ST(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ST({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(n){((e=n)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Vy{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ji(this.lastLoginAt),this.creationTime=Ji(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function za(t){var e;const n=t.auth,r=await t.getIdToken(),i=await xs(t,yT(n,{idToken:r}));O(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TT(s.providerUserInfo):[],a=IT(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Vy(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function CT(t){const e=ot(t);await za(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IT(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TT(t){return t.map(e=>{var{providerId:n}=e,r=Wf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function bT(t,e){const n=await By(t,{},async()=>{const r=hi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Hy(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$y.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){O(e.idToken,"internal-error"),O(typeof e.idToken<"u","internal-error"),O(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ET(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return O(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bT(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ns;return r&&(O(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return Mt("not implemented")}}/**
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
 */function Zt(t,e){O(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Wf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Vy(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xs(this,this.stsTokenManager.getToken(this.auth,e));return O(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return wT(this,e)}reload(){return CT(this)}_assign(e){this!==e&&(O(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Jn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await za(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await xs(this,_T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:m,emailVerified:y,isAnonymous:E,providerData:C,stsTokenManager:I}=n;O(m&&I,e,"internal-error");const P=Ns.fromJSON(this.name,I);O(typeof m=="string",e,"internal-error"),Zt(d,e.name),Zt(f,e.name),O(typeof y=="boolean",e,"internal-error"),O(typeof E=="boolean",e,"internal-error"),Zt(g,e.name),Zt(v,e.name),Zt(_,e.name),Zt(k,e.name),Zt(p,e.name),Zt(h,e.name);const $=new Jn({uid:m,auth:e,email:f,emailVerified:y,displayName:d,isAnonymous:E,photoURL:v,phoneNumber:g,tenantId:_,stsTokenManager:P,createdAt:p,lastLoginAt:h});return C&&Array.isArray(C)&&($.providerData=C.map(M=>Object.assign({},M))),k&&($._redirectEventId=k),$}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ns;i.updateFromServerResponse(n);const s=new Jn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await za(s),s}}/**
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
 */class Gy{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Gy.type="NONE";const dm=Gy;/**
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
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class Vr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Vo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Vo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Jn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Vr(Lt(dm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Lt(dm);const o=Vo(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Jn._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Vr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Vr(s,e,r))}}/**
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
 */function fm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Yy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Xy(e))return"Blackberry";if(Jy(e))return"Webos";if(Vf(e))return"Safari";if((e.includes("chrome/")||Ky(e))&&!e.includes("edge/"))return"Chrome";if(Qy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Yy(t=Ae()){return/firefox\//i.test(t)}function Vf(t=Ae()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ky(t=Ae()){return/crios\//i.test(t)}function qy(t=Ae()){return/iemobile/i.test(t)}function Qy(t=Ae()){return/android/i.test(t)}function Xy(t=Ae()){return/blackberry/i.test(t)}function Jy(t=Ae()){return/webos/i.test(t)}function _l(t=Ae()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function xT(t=Ae()){var e;return _l(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NT(){return EE()&&document.documentMode===10}function Zy(t=Ae()){return _l(t)||Qy(t)||Jy(t)||Xy(t)||/windows phone/i.test(t)||qy(t)}function PT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function ew(t,e=[]){let n;switch(t){case"Browser":n=fm(Ae());break;case"Worker":n=`${fm(Ae())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ws}/${r}`}/**
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
 */class RT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var n;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const s of r)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(n=i)===null||n===void 0?void 0:n.message})}}}/**
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
 */class AT{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hm(this),this.idTokenSubscription=new hm(this),this.beforeStateQueue=new RT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=jy,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Vr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){var n;try{await za(e)}catch(r){if(((n=r)===null||n===void 0?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ot(e):null;return n&&O(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&O(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new js("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;O(n,this,"argument-error"),this.redirectPersistenceManager=await Vr.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return O(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=ew(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function yl(t){return ot(t)}class hm{constructor(e){this.auth=e,this.observer=null,this.addObserver=FE(n=>this.observer=n)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function OT(t,e,n){const r=yl(t);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=tw(e),{host:o,port:a}=DT(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||MT()}function tw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DT(t){const e=tw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pm(o)}}}function pm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function MT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class nw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Mt("not implemented")}_getIdTokenResponse(e){return Mt("not implemented")}_linkToIdToken(e,n){return Mt("not implemented")}_getReauthenticationResolver(e){return Mt("not implemented")}}/**
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
 */async function Gr(t,e){return gT(t,"POST","/v1/accounts:signInWithIdp",mT(t,e))}/**
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
 */const LT="http://localhost";class cr extends nw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):bt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Wf(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new cr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Gr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Gr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Gr(e,n)}buildRequest(){const e={requestUri:LT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=hi(n)}return e}}/**
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
 */class Gf{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ys extends Gf{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class on extends Ys{constructor(){super("facebook.com")}static credential(e){return cr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.FACEBOOK_SIGN_IN_METHOD="facebook.com";on.PROVIDER_ID="facebook.com";/**
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
 */class Rt extends Ys{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return cr._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Rt.credentialFromTaggedObject(e)}static credentialFromError(e){return Rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Rt.credential(n,r)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
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
 */class an extends Ys{constructor(){super("github.com")}static credential(e){return cr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return an.credential(e.oauthAccessToken)}catch{return null}}}an.GITHUB_SIGN_IN_METHOD="github.com";an.PROVIDER_ID="github.com";/**
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
 */class ln extends Ys{constructor(){super("twitter.com")}static credential(e,n){return cr._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ln.credential(n,r)}catch{return null}}}ln.TWITTER_SIGN_IN_METHOD="twitter.com";ln.PROVIDER_ID="twitter.com";/**
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
 */class ai{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Jn._fromIdTokenResponse(e,r,i),o=mm(r);return new ai({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mm(r);return new ai({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mm(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ua extends Dn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ua.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ua(e,n,r,i)}}function rw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ua._fromErrorAndOperation(t,s,e,r):s})}async function FT(t,e,n=!1){const r=await xs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ai._forOperation(t,"link",r)}/**
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
 */async function zT(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const o=await xs(t,rw(i,s,e,t),n);O(o.idToken,i,"internal-error");const a=Hf(o.idToken);O(a,i,"internal-error");const{sub:l}=a;return O(t.uid===l,i,"user-mismatch"),ai._forOperation(t,s,o)}catch(o){throw((r=o)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&bt(i,"user-mismatch"),o}}/**
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
 */async function UT(t,e,n=!1){const r="signIn",i=await rw(t,r,e),s=await ai._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function jT(t,e,n,r){return ot(t).onIdTokenChanged(e,n,r)}function WT(t,e,n){return ot(t).beforeAuthStateChanged(e,n)}function $T(t,e,n,r){return ot(t).onAuthStateChanged(e,n,r)}function BT(t){return ot(t).signOut()}const ja="__sak";/**
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
 */class iw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ja,"1"),this.storage.removeItem(ja),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function HT(){const t=Ae();return Vf(t)||_l(t)}const VT=1e3,GT=10;class sw extends iw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=HT()&&PT(),this.fallbackToPolling=Zy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);NT()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,GT):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},VT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}sw.type="LOCAL";const YT=sw;/**
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
 */class ow extends iw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ow.type="SESSION";const aw=ow;/**
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
 */function KT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new wl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await KT(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wl.receivers=[];/**
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
 */function Yf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Yf("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Tt(){return window}function QT(t){Tt().location.href=t}/**
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
 */function lw(){return typeof Tt().WorkerGlobalScope<"u"&&typeof Tt().importScripts=="function"}async function XT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function JT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function ZT(){return lw()?self:null}/**
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
 */const uw="firebaseLocalStorageDb",eb=1,Wa="firebaseLocalStorage",cw="fbase_key";class Ks{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function El(t,e){return t.transaction([Wa],e?"readwrite":"readonly").objectStore(Wa)}function tb(){const t=indexedDB.deleteDatabase(uw);return new Ks(t).toPromise()}function zc(){const t=indexedDB.open(uw,eb);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wa,{keyPath:cw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wa)?e(r):(r.close(),await tb(),e(await zc()))})})}async function gm(t,e,n){const r=El(t,!0).put({[cw]:e,value:n});return new Ks(r).toPromise()}async function nb(t,e){const n=El(t,!1).get(e),r=await new Ks(n).toPromise();return r===void 0?null:r.value}function vm(t,e){const n=El(t,!0).delete(e);return new Ks(n).toPromise()}const rb=800,ib=3;class dw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>ib)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return lw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wl._getInstance(ZT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await XT(),!this.activeServiceWorker)return;this.sender=new qT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||JT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await gm(e,ja,"1"),await vm(e,ja),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>nb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=El(i,!1).getAll();return new Ks(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}dw.type="LOCAL";const sb=dw;/**
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
 */function ob(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function ab(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=It("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",ob().appendChild(r)})}function lb(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Gs(3e4,6e4);/**
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
 */function fw(t,e){return e?Lt(e):(O(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kf extends nw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Gr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Gr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Gr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ub(t){return UT(t.auth,new Kf(t),t.bypassAuthState)}function cb(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),zT(n,new Kf(t),t.bypassAuthState)}async function db(t){const{auth:e,user:n}=t;return O(n,e,"internal-error"),FT(n,new Kf(t),t.bypassAuthState)}/**
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
 */class hw{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ub;case"linkViaPopup":case"linkViaRedirect":return db;case"reauthViaPopup":case"reauthViaRedirect":return cb;default:bt(this.auth,"internal-error")}}resolve(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Vt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const fb=new Gs(2e3,1e4);async function hb(t,e,n){const r=yl(t);aT(t,e,Gf);const i=fw(r,n);return new Gn(r,"signInViaPopup",e,i).executeNotNull()}class Gn extends hw{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return O(e,this.auth,"internal-error"),e}async onExecution(){Vt(this.filter.length===1,"Popup operations only handle one event");const e=Yf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(It(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(It(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(It(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,fb.get())};e()}}Gn.currentPopupAction=null;/**
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
 */const pb="pendingRedirect",Go=new Map;class mb extends hw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Go.get(this.auth._key());if(!e){try{const r=await gb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Go.set(this.auth._key(),e)}return this.bypassAuthState||Go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gb(t,e){const n=yb(e),r=_b(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function vb(t,e){Go.set(t._key(),e)}function _b(t){return Lt(t._redirectPersistence)}function yb(t){return Vo(pb,t.config.apiKey,t.name)}async function wb(t,e,n=!1){const r=yl(t),i=fw(r,e),o=await new mb(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const Eb=10*60*1e3;class Sb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!pw(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(It(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Eb&&this.cachedEventUids.clear(),this.cachedEventUids.has(_m(e))}saveEventToCache(e){this.cachedEventUids.add(_m(e)),this.lastProcessedEventTime=Date.now()}}function _m(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function pw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pw(t);default:return!1}}/**
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
 */async function Cb(t,e={}){return vl(t,"GET","/v1/projects",e)}/**
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
 */const Ib=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tb=/^https?/;async function bb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Cb(t);for(const n of e)try{if(xb(n))return}catch{}bt(t,"unauthorized-domain")}function xb(t){const e=Fc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Tb.test(n))return!1;if(Ib.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Nb=new Gs(3e4,6e4);function ym(){const t=Tt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Pb(t){return new Promise((e,n)=>{var r,i,s;function o(){ym(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ym(),n(It(t,"network-request-failed"))},timeout:Nb.get()})}if(!((i=(r=Tt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Tt().gapi)===null||s===void 0)&&s.load)o();else{const a=lb("iframefcb");return Tt()[a]=()=>{gapi.load?o():n(It(t,"network-request-failed"))},ab(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Yo=null,e})}let Yo=null;function Rb(t){return Yo=Yo||Pb(t),Yo}/**
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
 */const Ab=new Gs(5e3,15e3),Ob="__/auth/iframe",Db="emulator/auth/iframe",Mb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Fb(t){const e=t.config;O(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bf(e,Db):`https://${t.config.authDomain}/${Ob}`,r={apiKey:e.apiKey,appName:t.name,v:Ws},i=Lb.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${hi(r).slice(1)}`}async function zb(t){const e=await Rb(t),n=Tt().gapi;return O(n,t,"internal-error"),e.open({where:document.body,url:Fb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=It(t,"network-request-failed"),a=Tt().setTimeout(()=>{s(o)},Ab.get());function l(){Tt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
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
 */const Ub={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jb=500,Wb=600,$b="_blank",Bb="http://localhost";class wm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Hb(t,e,n,r=jb,i=Wb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Ub),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Ae().toLowerCase();n&&(a=Ky(u)?$b:n),Yy(u)&&(e=e||Bb,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[g,v])=>`${f}${g}=${v},`,"");if(xT(u)&&a!=="_self")return Vb(e||"",a),new wm(null);const d=window.open(e||"",a,c);O(d,t,"popup-blocked");try{d.focus()}catch{}return new wm(d)}function Vb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Gb="__/auth/handler",Yb="emulator/auth/handler";function Em(t,e,n,r,i,s){O(t.config.authDomain,t,"auth-domain-config-required"),O(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ws,eventId:i};if(e instanceof Gf){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",vc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ys){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Kb(t)}?${hi(a).slice(1)}`}function Kb({config:t}){return t.emulator?Bf(t,Yb):`https://${t.authDomain}/${Gb}`}/**
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
 */const _u="webStorageSupport";class qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=aw,this._completeRedirectFn=wb,this._overrideRedirectResult=vb}async _openPopup(e,n,r,i){var s;Vt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Em(e,n,r,Fc(),i);return Hb(e,o,Yf())}async _openRedirect(e,n,r,i){return await this._originValidation(e),QT(Em(e,n,r,Fc(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Vt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zb(e),r=new Sb(e);return n.register("authEvent",i=>(O(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_u,{type:_u},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_u];o!==void 0&&n(!!o),bt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Zy()||Vf()||_l()}}const Qb=qb;var Sm="@firebase/auth",km="0.20.11";/**
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
 */class Xb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Zb(t){ni(new ir("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{O(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),O(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ew(t)},c=new AT(a,l,u);return uT(c,n),c})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ni(new ir("auth-internal",e=>{const n=yl(e.getProvider("auth").getImmediate());return(r=>new Xb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Sn(Sm,km,Jb(t)),Sn(Sm,km,"esm2017")}/**
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
 */const ex=5*60,tx=w_("authIdTokenMaxAge")||ex;let Cm=null;const nx=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>tx)return;const i=n==null?void 0:n.token;Cm!==i&&(Cm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function qf(t=I_()){const e=nf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lT(t,{popupRedirectResolver:Qb,persistence:[sb,YT,aw]}),r=w_("authTokenSyncURL");if(r){const s=nx(r);WT(n,s,()=>s(n.currentUser)),jT(n,o=>s(o))}const i=y_("auth");return i&&OT(n,`http://${i}`),n}Zb("Browser");const rx={apiKey:"AIzaSyBvAWkjUPwpWWw9FLeMZlBqqQK72BAg7uM",authDomain:"clockin-a0a9b.firebaseapp.com",projectId:"clockin-a0a9b",storageBucket:"clockin-a0a9b.appspot.com",messagingSenderId:"392310330405",appId:"1:392310330405:web:3ba87fc197a064200f1bcc",measurementId:"G-5LC1S7W8WJ"},Sl=C_(rx),Uc=rT(Sl),ix=t=>{const[e,n]=Q.exports.useState(),[r,i]=Q.exports.useState(null);return Q.exports.useEffect(()=>qI(zy(Uc,t),s=>{n(s.val())},s=>{i(s)}),[t]),[e,r]},Im=t=>{const e=Date.now(),n=(t==null?void 0:t.message)||`Updated: ${new Date(e).toLocaleString()}`;return{timestamp:e,error:t,message:n}},kl=t=>{const[e,n]=Q.exports.useState();return[Q.exports.useCallback(i=>{YI(zy(Uc,t),i).then(()=>n(Im())).catch(s=>n(Im(s)))},[Uc,t]),e]},sx=()=>{hb(qf(Sl),new Rt)},ox=()=>BT(qf(Sl)),ax=()=>{const[t,e]=Q.exports.useState();return Q.exports.useEffect(()=>$T(qf(Sl),e),[]),[t]};function Tm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Tm(Object(n),!0).forEach(function(r){me(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $a(t){return $a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$a(t)}function lx(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function bm(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ux(t,e,n){return e&&bm(t.prototype,e),n&&bm(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function me(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Qf(t,e){return dx(t)||hx(t,e)||mw(t,e)||mx()}function qs(t){return cx(t)||fx(t)||mw(t)||px()}function cx(t){if(Array.isArray(t))return jc(t)}function dx(t){if(Array.isArray(t))return t}function fx(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function hx(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function mw(t,e){if(!!t){if(typeof t=="string")return jc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jc(t,e)}}function jc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function px(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xm=function(){},Xf={},gw={},vw=null,_w={mark:xm,measure:xm};try{typeof window<"u"&&(Xf=window),typeof document<"u"&&(gw=document),typeof MutationObserver<"u"&&(vw=MutationObserver),typeof performance<"u"&&(_w=performance)}catch{}var gx=Xf.navigator||{},Nm=gx.userAgent,Pm=Nm===void 0?"":Nm,xn=Xf,te=gw,Rm=vw,So=_w;xn.document;var Xt=!!te.documentElement&&!!te.head&&typeof te.addEventListener=="function"&&typeof te.createElement=="function",yw=~Pm.indexOf("MSIE")||~Pm.indexOf("Trident/"),ko,Co,Io,To,bo,Gt="___FONT_AWESOME___",Wc=16,ww="fa",Ew="svg-inline--fa",dr="data-fa-i2svg",$c="data-fa-pseudo-element",vx="data-fa-pseudo-element-pending",Jf="data-prefix",Zf="data-icon",Am="fontawesome-i2svg",_x="async",yx=["HTML","HEAD","STYLE","SCRIPT"],Sw=function(){try{return!0}catch{return!1}}(),Z="classic",ae="sharp",eh=[Z,ae];function Qs(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Z]}})}var Ps=Qs((ko={},me(ko,Z,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),me(ko,ae,{fa:"solid",fass:"solid","fa-solid":"solid"}),ko)),Rs=Qs((Co={},me(Co,Z,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),me(Co,ae,{solid:"fass"}),Co)),As=Qs((Io={},me(Io,Z,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),me(Io,ae,{fass:"fa-solid"}),Io)),wx=Qs((To={},me(To,Z,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),me(To,ae,{"fa-solid":"fass"}),To)),Ex=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,kw="fa-layers-text",Sx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,kx=Qs((bo={},me(bo,Z,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),me(bo,ae,{900:"fass"}),bo)),Cw=[1,2,3,4,5,6,7,8,9,10],Cx=Cw.concat([11,12,13,14,15,16,17,18,19,20]),Ix=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Yn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Os=new Set;Object.keys(Rs[Z]).map(Os.add.bind(Os));Object.keys(Rs[ae]).map(Os.add.bind(Os));var Tx=[].concat(eh,qs(Os),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Yn.GROUP,Yn.SWAP_OPACITY,Yn.PRIMARY,Yn.SECONDARY]).concat(Cw.map(function(t){return"".concat(t,"x")})).concat(Cx.map(function(t){return"w-".concat(t)})),Zi=xn.FontAwesomeConfig||{};function bx(t){var e=te.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function xx(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(te&&typeof te.querySelector=="function"){var Nx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Nx.forEach(function(t){var e=Qf(t,2),n=e[0],r=e[1],i=xx(bx(n));i!=null&&(Zi[r]=i)})}var Iw={styleDefault:"solid",familyDefault:"classic",cssPrefix:ww,replacementClass:Ew,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Zi.familyPrefix&&(Zi.cssPrefix=Zi.familyPrefix);var li=T(T({},Iw),Zi);li.autoReplaceSvg||(li.observeMutations=!1);var N={};Object.keys(Iw).forEach(function(t){Object.defineProperty(N,t,{enumerable:!0,set:function(n){li[t]=n,es.forEach(function(r){return r(N)})},get:function(){return li[t]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(e){li.cssPrefix=e,es.forEach(function(n){return n(N)})},get:function(){return li.cssPrefix}});xn.FontAwesomeConfig=N;var es=[];function Px(t){return es.push(t),function(){es.splice(es.indexOf(t),1)}}var en=Wc,St={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Rx(t){if(!(!t||!Xt)){var e=te.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=te.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return te.head.insertBefore(e,r),t}}var Ax="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ds(){for(var t=12,e="";t-- >0;)e+=Ax[Math.random()*62|0];return e}function vi(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function th(t){return t.classList?vi(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Tw(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ox(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Tw(t[n]),'" ')},"").trim()}function Cl(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function nh(t){return t.size!==St.size||t.x!==St.x||t.y!==St.y||t.rotate!==St.rotate||t.flipX||t.flipY}function Dx(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function Mx(t){var e=t.transform,n=t.width,r=n===void 0?Wc:n,i=t.height,s=i===void 0?Wc:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&yw?l+="translate(".concat(e.x/en-r/2,"em, ").concat(e.y/en-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/en,"em), calc(-50% + ").concat(e.y/en,"em)) "):l+="translate(".concat(e.x/en,"em, ").concat(e.y/en,"em) "),l+="scale(".concat(e.size/en*(e.flipX?-1:1),", ").concat(e.size/en*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Lx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function bw(){var t=ww,e=Ew,n=N.cssPrefix,r=N.replacementClass,i=Lx;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Om=!1;function yu(){N.autoAddCss&&!Om&&(Rx(bw()),Om=!0)}var Fx={mixout:function(){return{dom:{css:bw,insertCss:yu}}},hooks:function(){return{beforeDOMElementCreation:function(){yu()},beforeI2svg:function(){yu()}}}},Yt=xn||{};Yt[Gt]||(Yt[Gt]={});Yt[Gt].styles||(Yt[Gt].styles={});Yt[Gt].hooks||(Yt[Gt].hooks={});Yt[Gt].shims||(Yt[Gt].shims=[]);var pt=Yt[Gt],xw=[],zx=function t(){te.removeEventListener("DOMContentLoaded",t),Ba=1,xw.map(function(e){return e()})},Ba=!1;Xt&&(Ba=(te.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(te.readyState),Ba||te.addEventListener("DOMContentLoaded",zx));function Ux(t){!Xt||(Ba?setTimeout(t,0):xw.push(t))}function Xs(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?Tw(t):"<".concat(e," ").concat(Ox(r),">").concat(s.map(Xs).join(""),"</").concat(e,">")}function Dm(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var jx=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},wu=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?jx(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function Wx(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function Bc(t){var e=Wx(t);return e.length===1?e[0].toString(16):null}function $x(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Mm(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Hc(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Mm(e);typeof pt.hooks.addPack=="function"&&!i?pt.hooks.addPack(t,Mm(e)):pt.styles[t]=T(T({},pt.styles[t]||{}),s),t==="fas"&&Hc("fa",e)}var xo,No,Po,Ar=pt.styles,Bx=pt.shims,Hx=(xo={},me(xo,Z,Object.values(As[Z])),me(xo,ae,Object.values(As[ae])),xo),rh=null,Nw={},Pw={},Rw={},Aw={},Ow={},Vx=(No={},me(No,Z,Object.keys(Ps[Z])),me(No,ae,Object.keys(Ps[ae])),No);function Gx(t){return~Tx.indexOf(t)}function Yx(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!Gx(i)?i:null}var Dw=function(){var e=function(s){return wu(Ar,function(o,a,l){return o[l]=wu(a,s,{}),o},{})};Nw=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),Pw=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),Ow=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in Ar||N.autoFetchSvg,r=wu(Bx,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});Rw=r.names,Aw=r.unicodes,rh=Il(N.styleDefault,{family:N.familyDefault})};Px(function(t){rh=Il(t.styleDefault,{family:N.familyDefault})});Dw();function ih(t,e){return(Nw[t]||{})[e]}function Kx(t,e){return(Pw[t]||{})[e]}function Kn(t,e){return(Ow[t]||{})[e]}function Mw(t){return Rw[t]||{prefix:null,iconName:null}}function qx(t){var e=Aw[t],n=ih("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Nn(){return rh}var sh=function(){return{prefix:null,iconName:null,rest:[]}};function Il(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Z:n,i=Ps[r][t],s=Rs[r][t]||Rs[r][i],o=t in pt.styles?t:null;return s||o||null}var Lm=(Po={},me(Po,Z,Object.keys(As[Z])),me(Po,ae,Object.keys(As[ae])),Po);function Tl(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},me(e,Z,"".concat(N.cssPrefix,"-").concat(Z)),me(e,ae,"".concat(N.cssPrefix,"-").concat(ae)),e),o=null,a=Z;(t.includes(s[Z])||t.some(function(u){return Lm[Z].includes(u)}))&&(a=Z),(t.includes(s[ae])||t.some(function(u){return Lm[ae].includes(u)}))&&(a=ae);var l=t.reduce(function(u,c){var d=Yx(N.cssPrefix,c);if(Ar[c]?(c=Hx[a].includes(c)?wx[a][c]:c,o=c,u.prefix=c):Vx[a].indexOf(c)>-1?(o=c,u.prefix=Il(c,{family:a})):d?u.iconName=d:c!==N.replacementClass&&c!==s[Z]&&c!==s[ae]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?Mw(u.iconName):{},g=Kn(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||g||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!Ar.far&&Ar.fas&&!N.autoFetchSvg&&(u.prefix="fas")}return u},sh());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===ae&&(Ar.fass||N.autoFetchSvg)&&(l.prefix="fass",l.iconName=Kn(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Nn()||"fas"),l}var Qx=function(){function t(){lx(this,t),this.definitions={}}return ux(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=T(T({},n.definitions[a]||{}),o[a]),Hc(a,o[a]);var l=As[Z][a];l&&Hc(l,o[a]),Dw()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Fm=[],Or={},Yr={},Xx=Object.keys(Yr);function Jx(t,e){var n=e.mixoutsTo;return Fm=t,Or={},Object.keys(Yr).forEach(function(r){Xx.indexOf(r)===-1&&delete Yr[r]}),Fm.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),$a(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){Or[o]||(Or[o]=[]),Or[o].push(s[o])})}r.provides&&r.provides(Yr)}),n}function Vc(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Or[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function fr(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=Or[t]||[];i.forEach(function(s){s.apply(null,n)})}function Kt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return Yr[t]?Yr[t].apply(null,e):void 0}function Gc(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Nn();if(!!e)return e=Kn(n,e)||e,Dm(Lw.definitions,n,e)||Dm(pt.styles,n,e)}var Lw=new Qx,Zx=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,fr("noAuto")},eN={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Xt?(fr("beforeI2svg",e),Kt("pseudoElements2svg",e),Kt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,Ux(function(){nN({autoReplaceSvgRoot:n}),fr("watch",e)})}},tN={icon:function(e){if(e===null)return null;if($a(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:Kn(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Il(e[0]);return{prefix:r,iconName:Kn(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(N.cssPrefix,"-"))>-1||e.match(Ex))){var i=Tl(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Nn(),iconName:Kn(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Nn();return{prefix:s,iconName:Kn(s,e)||e}}}},Je={noAuto:Zx,config:N,dom:eN,parse:tN,library:Lw,findIconDefinition:Gc,toHtml:Xs},nN=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?te:n;(Object.keys(pt.styles).length>0||N.autoFetchSvg)&&Xt&&N.autoReplaceSvg&&Je.dom.i2svg({node:r})};function bl(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Xs(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Xt){var r=te.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function rN(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(nh(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Cl(T(T({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function iN(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(N.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:T(T({},i),{},{id:o}),children:r}]}]}function oh(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,g=f===void 0?!1:f,v=r.found?r:n,_=v.width,k=v.height,p=i==="fak",h=[N.replacementClass,s?"".concat(N.cssPrefix,"-").concat(s):""].filter(function($){return d.classes.indexOf($)===-1}).filter(function($){return $!==""||!!$}).concat(d.classes).join(" "),m={children:[],attributes:T(T({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(k)})},y=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/k*16*.0625,"em")}:{};g&&(m.attributes[dr]=""),l&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(c||Ds())},children:[l]}),delete m.attributes.title);var E=T(T({},m),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:T(T({},y),d.styles)}),C=r.found&&n.found?Kt("generateAbstractMask",E)||{children:[],attributes:{}}:Kt("generateAbstractIcon",E)||{children:[],attributes:{}},I=C.children,P=C.attributes;return E.children=I,E.attributes=P,a?iN(E):rN(E)}function zm(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=T(T(T({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[dr]="");var c=T({},o.styles);nh(i)&&(c.transform=Mx({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Cl(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function sN(t){var e=t.content,n=t.title,r=t.extra,i=T(T(T({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Cl(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Eu=pt.styles;function Yc(t){var e=t[0],n=t[1],r=t.slice(4),i=Qf(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Yn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Yn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Yn.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var oN={found:!1,width:512,height:512};function aN(t,e){!Sw&&!N.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Kc(t,e){var n=e;return e==="fa"&&N.styleDefault!==null&&(e=Nn()),new Promise(function(r,i){if(Kt("missingIconAbstract"),n==="fa"){var s=Mw(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Eu[e]&&Eu[e][t]){var o=Eu[e][t];return r(Yc(o))}aN(t,e),r(T(T({},oN),{},{icon:N.showMissingIcons&&t?Kt("missingIconAbstract")||{}:{}}))})}var Um=function(){},qc=N.measurePerformance&&So&&So.mark&&So.measure?So:{mark:Um,measure:Um},Li='FA "6.2.1"',lN=function(e){return qc.mark("".concat(Li," ").concat(e," begins")),function(){return Fw(e)}},Fw=function(e){qc.mark("".concat(Li," ").concat(e," ends")),qc.measure("".concat(Li," ").concat(e),"".concat(Li," ").concat(e," begins"),"".concat(Li," ").concat(e," ends"))},ah={begin:lN,end:Fw},Ko=function(){};function jm(t){var e=t.getAttribute?t.getAttribute(dr):null;return typeof e=="string"}function uN(t){var e=t.getAttribute?t.getAttribute(Jf):null,n=t.getAttribute?t.getAttribute(Zf):null;return e&&n}function cN(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(N.replacementClass)}function dN(){if(N.autoReplaceSvg===!0)return qo.replace;var t=qo[N.autoReplaceSvg];return t||qo.replace}function fN(t){return te.createElementNS("http://www.w3.org/2000/svg",t)}function hN(t){return te.createElement(t)}function zw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?fN:hN:n;if(typeof t=="string")return te.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(zw(o,{ceFn:r}))}),i}function pN(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var qo={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(zw(i),n)}),n.getAttribute(dr)===null&&N.keepOriginalSource){var r=te.createComment(pN(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~th(n).indexOf(N.replacementClass))return qo.replace(e);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===N.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return Xs(a)}).join(`
`);n.setAttribute(dr,""),n.innerHTML=o}};function Wm(t){t()}function Uw(t,e){var n=typeof e=="function"?e:Ko;if(t.length===0)n();else{var r=Wm;N.mutateApproach===_x&&(r=xn.requestAnimationFrame||Wm),r(function(){var i=dN(),s=ah.begin("mutate");t.map(i),s(),n()})}}var lh=!1;function jw(){lh=!0}function Qc(){lh=!1}var Ha=null;function $m(t){if(!!Rm&&!!N.observeMutations){var e=t.treeCallback,n=e===void 0?Ko:e,r=t.nodeCallback,i=r===void 0?Ko:r,s=t.pseudoElementsCallback,o=s===void 0?Ko:s,a=t.observeMutationsRoot,l=a===void 0?te:a;Ha=new Rm(function(u){if(!lh){var c=Nn();vi(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!jm(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&jm(d.target)&&~Ix.indexOf(d.attributeName))if(d.attributeName==="class"&&uN(d.target)){var f=Tl(th(d.target)),g=f.prefix,v=f.iconName;d.target.setAttribute(Jf,g||c),v&&d.target.setAttribute(Zf,v)}else cN(d.target)&&i(d.target)})}}),Xt&&Ha.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mN(){!Ha||Ha.disconnect()}function gN(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function vN(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Tl(th(t));return i.prefix||(i.prefix=Nn()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=Kx(i.prefix,t.innerText)||ih(i.prefix,Bc(t.innerText))),!i.iconName&&N.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function _N(t){var e=vi(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return N.autoA11y&&(n?e["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(r||Ds()):(e["aria-hidden"]="true",e.focusable="false")),e}function yN(){return{iconName:null,title:null,titleId:null,prefix:null,transform:St,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Bm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=vN(t),r=n.iconName,i=n.prefix,s=n.rest,o=_N(t),a=Vc("parseNodeAttributes",{},t),l=e.styleParser?gN(t):[];return T({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:St,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var wN=pt.styles;function Ww(t){var e=N.autoReplaceSvg==="nest"?Bm(t,{styleParser:!1}):Bm(t);return~e.extra.classes.indexOf(kw)?Kt("generateLayersText",t,e):Kt("generateSvgReplacementMutation",t,e)}var Pn=new Set;eh.map(function(t){Pn.add("fa-".concat(t))});Object.keys(Ps[Z]).map(Pn.add.bind(Pn));Object.keys(Ps[ae]).map(Pn.add.bind(Pn));Pn=qs(Pn);function Hm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Xt)return Promise.resolve();var n=te.documentElement.classList,r=function(d){return n.add("".concat(Am,"-").concat(d))},i=function(d){return n.remove("".concat(Am,"-").concat(d))},s=N.autoFetchSvg?Pn:eh.map(function(c){return"fa-".concat(c)}).concat(Object.keys(wN));s.includes("fa")||s.push("fa");var o=[".".concat(kw,":not([").concat(dr,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(dr,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=vi(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=ah.begin("onTree"),u=a.reduce(function(c,d){try{var f=Ww(d);f&&c.push(f)}catch(g){Sw||g.name==="MissingIcon"&&console.error(g)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){Uw(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function EN(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ww(t).then(function(n){n&&Uw([n],e)})}function SN(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Gc(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Gc(i||{})),t(r,T(T({},n),{},{mask:i}))}}var kN=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?St:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,g=n.titleId,v=g===void 0?null:g,_=n.classes,k=_===void 0?[]:_,p=n.attributes,h=p===void 0?{}:p,m=n.styles,y=m===void 0?{}:m;if(!!e){var E=e.prefix,C=e.iconName,I=e.icon;return bl(T({type:"icon"},e),function(){return fr("beforeDOMElementCreation",{iconDefinition:e,params:n}),N.autoA11y&&(f?h["aria-labelledby"]="".concat(N.replacementClass,"-title-").concat(v||Ds()):(h["aria-hidden"]="true",h.focusable="false")),oh({icons:{main:Yc(I),mask:l?Yc(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:E,iconName:C,transform:T(T({},St),i),symbol:o,title:f,maskId:c,titleId:v,extra:{attributes:h,styles:y,classes:k}})})}},CN={mixout:function(){return{icon:SN(kN)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Hm,n.nodeCallback=EN,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?te:r,s=n.callback,o=s===void 0?function(){}:s;return Hm(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(g,v){Promise.all([Kc(i,a),c.iconName?Kc(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var k=Qf(_,2),p=k[0],h=k[1];g([n,oh({icons:{main:p,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(v)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Cl(a);l.length>0&&(i.style=l);var u;return nh(o)&&(u=Kt("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},IN={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return bl({type:"layer"},function(){fr("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(qs(s)).join(" ")},children:o}]})}}}},TN={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return bl({type:"counter",content:n},function(){return fr("beforeDOMElementCreation",{content:n,params:r}),sN({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(qs(a))}})})}}}},bN={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?St:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,g=f===void 0?{}:f;return bl({type:"text",content:n},function(){return fr("beforeDOMElementCreation",{content:n,params:r}),zm({content:n,transform:T(T({},St),s),title:a,extra:{attributes:d,styles:g,classes:["".concat(N.cssPrefix,"-layers-text")].concat(qs(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(yw){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return N.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,zm({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},xN=new RegExp('"',"ug"),Vm=[1105920,1112319];function NN(t){var e=t.replace(xN,""),n=$x(e,0),r=n>=Vm[0]&&n<=Vm[1],i=e.length===2?e[0]===e[1]:!1;return{value:Bc(i?e[0]:e),isSecondary:r||i}}function Gm(t,e){var n="".concat(vx).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=vi(t.children),o=s.filter(function(I){return I.getAttribute($c)===e})[0],a=xn.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(Sx),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?ae:Z,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Rs[f][l[2].toLowerCase()]:kx[f][u],v=NN(d),_=v.value,k=v.isSecondary,p=l[0].startsWith("FontAwesome"),h=ih(g,_),m=h;if(p){var y=qx(_);y.iconName&&y.prefix&&(h=y.iconName,g=y.prefix)}if(h&&!k&&(!o||o.getAttribute(Jf)!==g||o.getAttribute(Zf)!==m)){t.setAttribute(n,m),o&&t.removeChild(o);var E=yN(),C=E.extra;C.attributes[$c]=e,Kc(h,g).then(function(I){var P=oh(T(T({},E),{},{icons:{main:I,mask:sh()},prefix:g,iconName:m,extra:C,watchable:!0})),$=te.createElement("svg");e==="::before"?t.insertBefore($,t.firstChild):t.appendChild($),$.outerHTML=P.map(function(M){return Xs(M)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function PN(t){return Promise.all([Gm(t,"::before"),Gm(t,"::after")])}function RN(t){return t.parentNode!==document.head&&!~yx.indexOf(t.tagName.toUpperCase())&&!t.getAttribute($c)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ym(t){if(!!Xt)return new Promise(function(e,n){var r=vi(t.querySelectorAll("*")).filter(RN).map(PN),i=ah.begin("searchPseudoElements");jw(),Promise.all(r).then(function(){i(),Qc(),e()}).catch(function(){i(),Qc(),n()})})}var AN={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ym,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?te:r;N.searchPseudoElements&&Ym(i)}}},Km=!1,ON={mixout:function(){return{dom:{unwatch:function(){jw(),Km=!0}}}},hooks:function(){return{bootstrap:function(){$m(Vc("mutationObserverCallbacks",{}))},noAuto:function(){mN()},watch:function(n){var r=n.observeMutationsRoot;Km?Qc():$m(Vc("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},qm=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},DN={mixout:function(){return{parse:{transform:function(n){return qm(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=qm(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},g={outer:a,inner:d,path:f};return{tag:"g",attributes:T({},g.outer),children:[{tag:"g",attributes:T({},g.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:T(T({},r.icon.attributes),g.path)}]}]}}}},Su={x:0,y:0,width:"100%",height:"100%"};function Qm(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function MN(t){return t.tag==="g"?t.children:[t]}var LN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Tl(i.split(" ").map(function(o){return o.trim()})):sh();return s.prefix||(s.prefix=Nn()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,g=Dx({transform:l,containerWidth:d,iconWidth:u}),v={tag:"rect",attributes:T(T({},Su),{},{fill:"white"})},_=c.children?{children:c.children.map(Qm)}:{},k={tag:"g",attributes:T({},g.inner),children:[Qm(T({tag:c.tag,attributes:T(T({},c.attributes),g.path)},_))]},p={tag:"g",attributes:T({},g.outer),children:[k]},h="mask-".concat(a||Ds()),m="clip-".concat(a||Ds()),y={tag:"mask",attributes:T(T({},Su),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[v,p]},E={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:MN(f)},y]};return r.push(E,{tag:"rect",attributes:T({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(h,")")},Su)}),{children:r,attributes:i}}}},FN={provides:function(e){var n=!1;xn.matchMedia&&(n=xn.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:T(T({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=T(T({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:T(T({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:T(T({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:T(T({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:T(T({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:T(T({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:T(T({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:T(T({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},zN={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},UN=[Fx,CN,IN,TN,bN,AN,ON,DN,LN,FN,zN];Jx(UN,{mixoutsTo:Je});Je.noAuto;Je.config;Je.library;Je.dom;var Xc=Je.parse;Je.findIconDefinition;Je.toHtml;var jN=Je.icon;Je.layer;Je.text;Je.counter;var F={exports:{}},WN="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",$N=WN,BN=$N;function $w(){}function Bw(){}Bw.resetWarningCache=$w;var HN=function(){function t(r,i,s,o,a,l){if(l!==BN){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Bw,resetWarningCache:$w};return n.PropTypes=n,n};F.exports=HN();function Xm(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function dn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Xm(Object(n),!0).forEach(function(r){Dr(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Xm(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Va(t){return Va=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Va(t)}function Dr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function VN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function GN(t,e){if(t==null)return{};var n=VN(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Jc(t){return YN(t)||KN(t)||qN(t)||QN()}function YN(t){if(Array.isArray(t))return Zc(t)}function KN(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function qN(t,e){if(!!t){if(typeof t=="string")return Zc(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Zc(t,e)}}function Zc(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function QN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function XN(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,g=t.inverse,v=t.border,_=t.listItem,k=t.flip,p=t.size,h=t.rotation,m=t.pull,y=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":g,"fa-border":v,"fa-li":_,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Dr(e,"fa-".concat(p),typeof p<"u"&&p!==null),Dr(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),Dr(e,"fa-pull-".concat(m),typeof m<"u"&&m!==null),Dr(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(y).map(function(E){return y[E]?E:null}).filter(function(E){return E})}function JN(t){return t=t-0,t===t}function Hw(t){return JN(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var ZN=["style"];function eP(t){return t.charAt(0).toUpperCase()+t.slice(1)}function tP(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=Hw(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[eP(i)]=s:e[i]=s,e},{})}function Vw(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Vw(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=tP(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[Hw(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=GN(n,ZN);return i.attrs.style=dn(dn({},i.attrs.style),o),t.apply(void 0,[e.tag,dn(dn({},i.attrs),a)].concat(Jc(r)))}var Gw=!1;try{Gw=!0}catch{}function nP(){if(!Gw&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Jm(t){if(t&&Va(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(Xc.icon)return Xc.icon(t);if(t===null)return null;if(t&&Va(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function ku(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Dr({},t,e):{}}var Js=sd.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Jm(n),c=ku("classes",[].concat(Jc(XN(t)),Jc(s.split(" ")))),d=ku("transform",typeof t.transform=="string"?Xc.transform(t.transform):t.transform),f=ku("mask",Jm(r)),g=jN(u,dn(dn(dn(dn({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!g)return nP("Could not find icon",u),null;var v=g.abstract,_={ref:e};return Object.keys(t).forEach(function(k){Js.defaultProps.hasOwnProperty(k)||(_[k]=t[k])}),rP(v[0],_)});Js.displayName="FontAwesomeIcon";Js.propTypes={beat:F.exports.bool,border:F.exports.bool,beatFade:F.exports.bool,bounce:F.exports.bool,className:F.exports.string,fade:F.exports.bool,flash:F.exports.bool,mask:F.exports.oneOfType([F.exports.object,F.exports.array,F.exports.string]),maskId:F.exports.string,fixedWidth:F.exports.bool,inverse:F.exports.bool,flip:F.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:F.exports.oneOfType([F.exports.object,F.exports.array,F.exports.string]),listItem:F.exports.bool,pull:F.exports.oneOf(["right","left"]),pulse:F.exports.bool,rotation:F.exports.oneOf([0,90,180,270]),shake:F.exports.bool,size:F.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:F.exports.bool,spinPulse:F.exports.bool,spinReverse:F.exports.bool,symbol:F.exports.oneOfType([F.exports.bool,F.exports.string]),title:F.exports.string,titleId:F.exports.string,transform:F.exports.oneOfType([F.exports.string,F.exports.object]),swapOpacity:F.exports.bool};Js.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var rP=Vw.bind(null,sd.createElement),iP={prefix:"fas",iconName:"trash-can",icon:[448,512,[61460,"trash-alt"],"f2ed","M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z"]},xl={exports:{}},Nl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sP=Q.exports,oP=Symbol.for("react.element"),aP=Symbol.for("react.fragment"),lP=Object.prototype.hasOwnProperty,uP=sP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cP={key:!0,ref:!0,__self:!0,__source:!0};function Yw(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lP.call(e,r)&&!cP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oP,type:t,key:s,ref:o,props:i,_owner:uP.current}}Nl.Fragment=aP;Nl.jsx=Yw;Nl.jsxs=Yw;(function(t){t.exports=Nl})(xl);const Zm=xl.exports.Fragment,R=xl.exports.jsx,Ke=xl.exports.jsxs,dP=-77,fP=({currentUser:t,alarmIdList:e,alarmIdDb:n,alarm:r,alarmList:i,setAlarmList:s})=>{const[o,a]=kl(`alarms/${n}`),l=()=>{if(t.uid==="guest"){alert("Please login first to edit alarms!");return}s([...i.slice(0,e),{...r,active:!r.active},...i.slice(e+1)]),console.log(n),o({...r,active:!r.active})},u=()=>{s([...i.slice(0,e),...i.slice(e+1)]),console.log(n),o({...r,uid:dP})};return Ke("div",{className:"alarm",children:[R("div",{className:`alarm-text ${r.active?"":"alarm-inactive"}`,children:gE(r)}),R("input",{className:"alarm-checkbox",type:"checkbox",checked:r.active,onChange:l}),R(Js,{onClick:u,icon:iP,className:"trash-button"})]})};const hP=({alarmList:t,setAlarmList:e,nextAlarmId:n,setNextAlarmId:r,currentUser:i,testing:s})=>{const[o,a]=kl(`alarms/${n}`);return R("form",{onSubmit:u=>{if(u.preventDefault(),i.uid==="guest"){alert("Please login to create new alarms!");return}let c;u.target[0].value==="12"?u.target[2].value==="AM"?c=0:c=12:c=u.target[2].value=="AM"?u.target[0].value:String(parseInt(u.target[0].value)+12);const d={hour:String(c),minute:u.target[1].value,active:!0,uid:i.uid,alarm_id:n};e([...t,d]),r(n+1),s||o({...d,alarm_id:n,uid:i.uid})},"data-testid":"submit",children:Ke("div",{className:"setAlarm",children:[Ke("div",{className:"setAlarmColumns",children:[R("div",{className:"setAlarmColumn",children:R("select",{className:"setAlarmSelect",children:[...Array(12).keys()].map(u=>R("option",{value:u+1,children:String(u+1).padStart(2,"0")},`hour-${u+1}`))})}),R("div",{className:"setAlarmColumn",children:R("select",{className:"setAlarmSelect",children:[...Array(60).keys()].map(u=>R("option",{value:u,children:String(u).padStart(2,"0")},`minute-${u}`))})}),R("div",{className:"setAlarmColumn",children:R("select",{className:"setAlarmSelect",children:["AM","PM"].map(u=>R("option",{value:u,children:u},`minute-${u}`))})})]}),R("div",{children:R("button",{className:"alarmSubmit",type:"submit",children:"Set Alarm"})})]})})};const pP=({char:t,correctIndex:e,currentSolution:n})=>{const r=document.getElementById(`char-${e}`);Q.exports.useEffect(()=>{r!==null&&(r.className=i())},[n]);const i=()=>n.length>e&&n[e]===t?"char-gray":"char-default";return R("div",{id:`char-${e}`,children:t})};const Ga=[{word:"ability"},{word:"absence"},{word:"academy"},{word:"account"},{word:"accused"},{word:"achieve"},{word:"acquire"},{word:"address"},{word:"advance"},{word:"adverse"},{word:"advised"},{word:"adviser"},{word:"against"},{word:"airline"},{word:"airport"},{word:"alcohol"},{word:"alleged"},{word:"already"},{word:"analyst"},{word:"ancient"},{word:"another"},{word:"anxiety"},{word:"anxious"},{word:"anybody"},{word:"applied"},{word:"arrange"},{word:"arrival"},{word:"article"},{word:"assault"},{word:"assumed"},{word:"assured"},{word:"attempt"},{word:"attract"},{word:"auction"},{word:"average"},{word:"backing"},{word:"balance"},{word:"banking"},{word:"barrier"},{word:"battery"},{word:"bearing"},{word:"beating"},{word:"because"},{word:"bedroom"},{word:"believe"},{word:"beneath"},{word:"benefit"},{word:"besides"},{word:"between"},{word:"billion"},{word:"binding"},{word:"brother"},{word:"brought"},{word:"burning"},{word:"cabinet"},{word:"caliber"},{word:"calling"},{word:"capable"},{word:"capital"},{word:"captain"},{word:"caption"},{word:"capture"},{word:"careful"},{word:"carrier"},{word:"caution"},{word:"ceiling"},{word:"central"},{word:"centric"},{word:"century"},{word:"certain"},{word:"chamber"},{word:"channel"},{word:"chapter"},{word:"charity"},{word:"charlie"},{word:"charter"},{word:"checked"},{word:"chicken"},{word:"chronic"},{word:"circuit"},{word:"classes"},{word:"classic"},{word:"climate"},{word:"closing"},{word:"closure"},{word:"clothes"},{word:"collect"},{word:"college"},{word:"combine"},{word:"comfort"},{word:"command"},{word:"comment"},{word:"compact"},{word:"company"},{word:"compare"},{word:"compete"},{word:"complex"},{word:"concept"},{word:"concern"},{word:"concert"},{word:"conduct"},{word:"confirm"},{word:"connect"},{word:"consent"},{word:"consist"},{word:"contact"},{word:"contain"},{word:"content"},{word:"contest"},{word:"context"},{word:"control"},{word:"convert"},{word:"correct"},{word:"council"},{word:"counsel"},{word:"counter"},{word:"country"},{word:"crucial"},{word:"crystal"},{word:"culture"},{word:"current"},{word:"cutting"},{word:"dealing"},{word:"decided"},{word:"decline"},{word:"default"},{word:"defence"},{word:"deficit"},{word:"deliver"},{word:"density"},{word:"deposit"},{word:"desktop"},{word:"despite"},{word:"destroy"},{word:"develop"},{word:"devoted"},{word:"diamond"},{word:"digital"},{word:"discuss"},{word:"disease"},{word:"display"},{word:"dispute"},{word:"distant"},{word:"diverse"},{word:"divided"},{word:"drawing"},{word:"driving"},{word:"dynamic"},{word:"eastern"},{word:"economy"},{word:"edition"},{word:"elderly"},{word:"element"},{word:"engaged"},{word:"enhance"},{word:"essence"},{word:"evening"},{word:"evident"},{word:"exactly"},{word:"examine"},{word:"example"},{word:"excited"},{word:"exclude"},{word:"exhibit"},{word:"expense"},{word:"explain"},{word:"explore"},{word:"express"},{word:"extreme"},{word:"factory"},{word:"faculty"},{word:"failing"},{word:"failure"},{word:"fashion"},{word:"feature"},{word:"federal"},{word:"feeling"},{word:"fiction"},{word:"fifteen"},{word:"filling"},{word:"finance"},{word:"finding"},{word:"fishing"},{word:"fitness"},{word:"foreign"},{word:"forever"},{word:"formula"},{word:"fortune"},{word:"forward"},{word:"founder"},{word:"freedom"},{word:"further"},{word:"gallery"},{word:"gateway"},{word:"general"},{word:"genetic"},{word:"genuine"},{word:"gigabit"},{word:"greater"},{word:"hanging"},{word:"heading"},{word:"healthy"},{word:"hearing"},{word:"heavily"},{word:"helpful"},{word:"helping"},{word:"herself"},{word:"highway"},{word:"himself"},{word:"history"},{word:"holding"},{word:"holiday"},{word:"housing"},{word:"however"},{word:"hundred"},{word:"husband"},{word:"illegal"},{word:"illness"},{word:"imagine"},{word:"imaging"},{word:"improve"},{word:"include"},{word:"initial"},{word:"inquiry"},{word:"insight"},{word:"install"},{word:"instant"},{word:"instead"},{word:"intense"},{word:"interim"},{word:"involve"},{word:"jointly"},{word:"journal"},{word:"journey"},{word:"justice"},{word:"justify"},{word:"keeping"},{word:"killing"},{word:"kingdom"},{word:"kitchen"},{word:"knowing"},{word:"landing"},{word:"largely"},{word:"lasting"},{word:"leading"},{word:"learned"},{word:"leisure"},{word:"liberal"},{word:"liberty"},{word:"library"},{word:"license"},{word:"limited"},{word:"listing"},{word:"logical"},{word:"loyalty"},{word:"machine"},{word:"manager"},{word:"married"},{word:"massive"},{word:"maximum"},{word:"meaning"},{word:"measure"},{word:"medical"},{word:"meeting"},{word:"mention"},{word:"message"},{word:"million"},{word:"mineral"},{word:"minimal"},{word:"minimum"},{word:"missing"},{word:"mission"},{word:"mistake"},{word:"mixture"},{word:"monitor"},{word:"monthly"},{word:"morning"},{word:"musical"},{word:"mystery"},{word:"natural"},{word:"neither"},{word:"nervous"},{word:"network"},{word:"neutral"},{word:"notable"},{word:"nothing"},{word:"nowhere"},{word:"nuclear"},{word:"nursing"},{word:"obvious"},{word:"offense"},{word:"officer"},{word:"ongoing"},{word:"opening"},{word:"operate"},{word:"opinion"},{word:"optical"},{word:"organic"},{word:"outcome"},{word:"outdoor"},{word:"outlook"},{word:"outside"},{word:"overall"},{word:"pacific"},{word:"package"},{word:"painted"},{word:"parking"},{word:"partial"},{word:"partner"},{word:"passage"},{word:"passing"},{word:"passion"},{word:"passive"},{word:"patient"},{word:"pattern"},{word:"payable"},{word:"payment"},{word:"penalty"},{word:"pending"},{word:"pension"},{word:"percent"},{word:"perfect"},{word:"perform"},{word:"perhaps"},{word:"phoenix"},{word:"picking"},{word:"picture"},{word:"pioneer"},{word:"plastic"},{word:"pointed"},{word:"popular"},{word:"portion"},{word:"poverty"},{word:"precise"},{word:"predict"},{word:"premier"},{word:"premium"},{word:"prepare"},{word:"present"},{word:"prevent"},{word:"primary"},{word:"printer"},{word:"privacy"},{word:"private"},{word:"problem"},{word:"proceed"},{word:"process"},{word:"produce"},{word:"product"},{word:"profile"},{word:"program"},{word:"project"},{word:"promise"},{word:"promote"},{word:"protect"},{word:"protein"},{word:"protest"},{word:"provide"},{word:"publish"},{word:"purpose"},{word:"pushing"},{word:"qualify"},{word:"quality"},{word:"quarter"},{word:"radical"},{word:"railway"},{word:"readily"},{word:"Reading"},{word:"reality"},{word:"realize"},{word:"receipt"},{word:"receive"},{word:"recover"},{word:"reflect"},{word:"regular"},{word:"related"},{word:"release"},{word:"remains"},{word:"removal"},{word:"removed"},{word:"replace"},{word:"request"},{word:"require"},{word:"reserve"},{word:"resolve"},{word:"respect"},{word:"respond"},{word:"restore"},{word:"retired"},{word:"revenue"},{word:"reverse"},{word:"rollout"},{word:"routine"},{word:"running"},{word:"satisfy"},{word:"science"},{word:"section"},{word:"segment"},{word:"serious"},{word:"service"},{word:"serving"},{word:"session"},{word:"setting"},{word:"seventh"},{word:"several"},{word:"shortly"},{word:"showing"},{word:"silence"},{word:"silicon"},{word:"similar"},{word:"sitting"},{word:"sixteen"},{word:"skilled"},{word:"smoking"},{word:"society"},{word:"somehow"},{word:"someone"},{word:"speaker"},{word:"special"},{word:"species"},{word:"sponsor"},{word:"station"},{word:"storage"},{word:"strange"},{word:"stretch"},{word:"student"},{word:"studied"},{word:"subject"},{word:"succeed"},{word:"success"},{word:"suggest"},{word:"summary"},{word:"support"},{word:"suppose"},{word:"supreme"},{word:"surface"},{word:"surgery"},{word:"surplus"},{word:"survive"},{word:"suspect"},{word:"sustain"},{word:"teacher"},{word:"telecom"},{word:"telling"},{word:"tension"},{word:"theatre"},{word:"therapy"},{word:"thereby"},{word:"thought"},{word:"through"},{word:"tonight"},{word:"totally"},{word:"touched"},{word:"towards"},{word:"traffic"},{word:"trouble"},{word:"turning"},{word:"typical"},{word:"uniform"},{word:"unknown"},{word:"unusual"},{word:"upgrade"},{word:"upscale"},{word:"utility"},{word:"variety"},{word:"various"},{word:"vehicle"},{word:"venture"},{word:"version"},{word:"veteran"},{word:"victory"},{word:"viewing"},{word:"village"},{word:"violent"},{word:"virtual"},{word:"visible"},{word:"waiting"},{word:"walking"},{word:"wanting"},{word:"warning"},{word:"warrant"},{word:"wearing"},{word:"weather"},{word:"webcast"},{word:"website"},{word:"wedding"},{word:"weekend"},{word:"welcome"},{word:"welfare"},{word:"western"},{word:"whereas"},{word:"whereby"},{word:"whether"},{word:"willing"},{word:"winning"},{word:"without"},{word:"witness"},{word:"working"},{word:"writing"},{word:"written"}];let ed=Math.floor(Math.random()*Ga.length),Fi=Ga[ed].word,[eg,tg]=f_(Array.from(Fi));const mP=({setAlarmRinging:t})=>{const[e,n]=Q.exports.useState([]);return Q.exports.useEffect(()=>{if(e===Fi){alert("Puzzle solved!"),document.getElementById("puzzle-input").value="",n(""),ed=Math.floor(Math.random()*Ga.length),Fi=Ga[ed].word,[eg,tg]=f_(Array.from(Fi));const r=document.getElementById("alarm");r.mute=!0,r.pause(),t(!1)}},[e]),Ke("div",{children:[R("div",{children:R("input",{id:"puzzle-input",className:"puzzle-input",onChange:r=>n(r.target.value)})}),R("div",{className:"puzzle-elements",children:eg.map((r,i)=>R(pP,{char:r,correctIndex:tg[i],word:Fi,currentSolution:e},i))})]})},gP="/assets/alarm.103a11cf.mp3";let ng=["+","-","*","/"],zi,Kw;const Ro=(t,e,n)=>{switch(n){case"+":return t+e;case"-":return t-e;case"*":return t*e;case"/":return t/e}},qw=()=>{let t,e,n,r,i;t=Math.ceil(Math.random()*12),e=Math.ceil(Math.random()*12),n=Math.ceil(Math.random()*12),r=ng[Math.floor(Math.random()*4)],i=ng[Math.floor(Math.random()*3)],r==="/"&&(t=t*e),Kw=`${t} ${r} ${e} ${i} ${n} = ?`,i==="*"?(zi=Ro(e,n,"*"),zi=Ro(t,zi,r)):zi=Ro(Ro(t,e,r),n,i)};qw();const vP=({setAlarmRinging:t})=>{const[e,n]=Q.exports.useState(null);return Q.exports.useEffect(()=>{if(e===zi.toString()){alert("Puzzle solved!"),document.getElementById("puzzle-input").value="",n(""),qw();const r=document.getElementById("alarm");r.mute=!0,r.pause(),t(!1)}},[e]),Ke("div",{children:[R("div",{className:"math-problem",children:Kw}),R("input",{id:"puzzle-input",className:"puzzle-input",onChange:r=>n(r.target.value)})]})};const _P=({changePuzzleMode:t,puzzleMode:e,currentUser:n})=>Ke("div",{className:"slider-container",children:[R("div",{className:"word",children:"Word"}),Ke("label",{className:"switch",children:[R("input",{type:"checkbox","data-testid":"slider",onChange:()=>{if(n.uid==="guest"){alert("Please login to change puzzle mode!");return}else t()},checked:n.uid!=="guest"&&e==="math"}),R("span",{className:"slider round"})]}),R("div",{className:"math",children:"Math"})]}),yP=({currentUser:t,alarms:e,testing:n})=>{const r=t.uid,[i,s]=Q.exports.useState(e.filter(p=>p.uid===r)),[o,a]=Q.exports.useState(e.length),[l,u]=Q.exports.useState(!1),[c,d]=Q.exports.useState(t.puzzle_mode),[f,g]=kl(`users/${r}`),v=p=>{s(p.sort((h,m)=>h.hour===m.hour?h.minute-m.minute:h.hour-m.hour))},_=()=>{if(l){alert("Please solve puzzle to change puzzle mode!");return}else d(c==="word"?"math":"word"),n||f({puzzle_mode:c==="word"?"math":"word"})},k=Q.exports.useRef(null);return Q.exports.useEffect(()=>((()=>{k.current=setInterval(()=>{const h=document.getElementById("alarm");i.some(m=>mE(m))&&(h.play(),u(!0))},1e3)})(),()=>clearInterval(k.current)),[i]),Q.exports.useEffect(()=>{const p=t.uid;v(e.filter(h=>h.uid===p))},[t,o]),Ke(Zm,{children:[R("audio",{id:"alarm",loop:!0,children:R("source",{src:gP,type:"audio/mp3"})}),R(_P,{currentUser:t,changePuzzleMode:_,puzzleMode:c}),Ke("div",{className:"alarm-list",children:[R("div",{className:"headers",children:"Set a New Alarm"}),R("div",{className:"set-alarm",children:R(hP,{testing:n,alarmList:i,setAlarmList:v,nextAlarmId:o,setNextAlarmId:a,currentUser:t})}),t.uid!=="guest"&&Ke(Zm,{children:[R("div",{className:"headers",children:"Current Alarms"}),R("div",{className:"alarm-list-body",children:i.map((p,h)=>R(fP,{currentUser:t,alarmIdList:h,alarmIdDb:p.alarm_id,alarm:p,alarmList:i,setAlarmList:v},h))})]}),R("hr",{className:"alarm-puzzle-divider"}),l&&(c==="word"?R(mP,{setAlarmRinging:u}):R(vP,{setAlarmRinging:u}))]}),n&&R("div",{"data-testid":"puzzleMode",children:c}),n&&R("div",{"data-testid":"ringing",children:l.toString()})]})};const wP=()=>R("button",{className:"button-base sign-in-button",onClick:sx,children:"Sign In"}),EP=()=>R("button",{className:"button-base sign-out-button",onClick:ox,children:"Sign Out"}),SP=({currentUser:t,users:e})=>{const n=t?t.uid:"guest",[r,i]=kl(`users/${n}`),[s,o]=Q.exports.useState(new Date);return Q.exports.useEffect(()=>{!t||e.filter(a=>a.uid===n).length===0&&r({uid:n,email:t.email,puzzle_mode:"word"})},[t]),Q.exports.useEffect(()=>{setInterval(()=>o(new Date),1e3)},[]),Ke("div",{className:"header",children:[R("div",{className:"clockin",children:"ClockIn"}),R("h1",{children:s.toLocaleTimeString()}),t?R(EP,{}):R(wP,{})]})},kP=()=>{const[t]=ax(),[e,n]=ix("/");if(n)return Ke("h1",{children:["Error loading data: ",n.toString()]});if(e===void 0)return R("h1",{children:"Loading data..."});if(!e)return R("h1",{children:"No data found"});const r=t?t.uid:"guest";let i=Object.values(e.users).filter(s=>s.uid===r)[0];return i||(i={uid:"guest",puzzle_mode:"word"}),Ke("div",{children:[R(SP,{currentUser:t,users:Object.values(e.users)}),R(yP,{currentUser:i,alarms:Object.values(e.alarms)})]})},CP=Cu.createRoot(document.getElementById("root"));CP.render(R(sd.StrictMode,{children:R(kP,{})}));
