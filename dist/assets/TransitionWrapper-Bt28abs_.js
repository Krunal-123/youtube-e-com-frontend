import{r as i,a7 as L,R as m,j as P,ac as S}from"./index-CslP1rqZ.js";import{o as V,l as E,u as F}from"./useMergedRefs-Cm2hL9Nq.js";function N(t){var n=V(t);return n&&n.defaultView||window}function $(t,n){return N(t).getComputedStyle(t,n)}var A=/([A-Z])/g;function H(t){return t.replace(A,"-$1").toLowerCase()}var O=/^ms-/;function c(t){return H(t).replace(O,"-ms-")}var W=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;function X(t){return!!(t&&W.test(t))}function g(t,n){var e="",r="";if(typeof n=="string")return t.style.getPropertyValue(c(n))||$(t).getPropertyValue(c(n));Object.keys(n).forEach(function(s){var a=n[s];!a&&a!==0?t.style.removeProperty(c(s)):X(s)?r+=s+"("+a+") ":e+=c(s)+": "+a+";"}),r&&(e+="transform: "+r+";"),t.style.cssText+=";"+e}function I(t){return t.code==="Escape"||t.keyCode===27}function Y(){const t=i.version.split(".");return{major:+t[0],minor:+t[1],patch:+t[2]}}function J(t){if(!t||typeof t=="function")return null;const{major:n}=Y();return n>=19?t.props.ref:t.ref}function Z(t,n,e,r){if(r===void 0&&(r=!0),t){var s=document.createEvent("HTMLEvents");s.initEvent(n,e,r),t.dispatchEvent(s)}}function z(t){var n=g(t,"transitionDuration")||"",e=n.indexOf("ms")===-1?1e3:1;return parseFloat(n)*e}function B(t,n,e){e===void 0&&(e=5);var r=!1,s=setTimeout(function(){r||Z(t,"transitionend",!0)},n+e),a=E(t,"transitionend",function(){r=!0},{once:!0});return function(){clearTimeout(s),a()}}function K(t,n,e,r){e==null&&(e=z(t)||0);var s=B(t,e,r),a=E(t,"transitionend",n);return function(){s(),a()}}function h(t,n){const e=g(t,n)||"",r=e.indexOf("ms")===-1?1e3:1;return parseFloat(e)*r}function Q(t,n){const e=h(t,"transitionDuration"),r=h(t,"transitionDelay"),s=K(t,a=>{a.target===t&&(s(),n(a))},e+r)}function _(t){t.offsetHeight}function U(t){return t&&"setState"in t?L.findDOMNode(t):t??null}const tt=m.forwardRef(({onEnter:t,onEntering:n,onEntered:e,onExit:r,onExiting:s,onExited:a,addEndListener:v,children:l,childRef:R,...x},y)=>{const f=i.useRef(null),C=F(f,R),p=u=>{C(U(u))},o=u=>d=>{u&&f.current&&u(f.current,d)},w=i.useCallback(o(t),[t]),T=i.useCallback(o(n),[n]),D=i.useCallback(o(e),[e]),b=i.useCallback(o(r),[r]),j=i.useCallback(o(s),[s]),k=i.useCallback(o(a),[a]),M=i.useCallback(o(v),[v]);return P.jsx(S,{ref:y,...x,onEnter:w,onEntered:D,onEntering:T,onExit:b,onExited:k,onExiting:j,addEndListener:M,nodeRef:f,children:typeof l=="function"?(u,d)=>l(u,{...d,ref:p}):m.cloneElement(l,{ref:p})})});export{tt as T,_ as a,K as b,J as g,I as i,g as s,Q as t};
