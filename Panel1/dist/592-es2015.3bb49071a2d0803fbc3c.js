(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[592],{76278:function(e,t,n){"use strict";n.d(t,{a:function(){return i},c:function(){return o}});var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function o(e,t,n){return e(n={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},n.exports),n.exports}},56234:function(e,t,n){"use strict";n.d(t,{G:function(){return o}});var i=n(61123);class o{static init(e){(0,i.m)(e)}static hostData(e){return{class:{"gx-grid-base":!0,"gx-grid-empty":this.isEmptyGrid(e),"gx-grid-empty-loading":"loading"===e.loadingState&&e.recordCount<=0,"gx-grid-loading":"loading"===e.loadingState}}}static isEmptyGrid(e){return 0===e.recordCount&&"loaded"===e.loadingState}}o.GRID_BASE_CLASSNAME="gx-grid-base"},61123:function(e,t,n){"use strict";n.d(t,{m:function(){return o}});let i=!1;function o(e){e.highlightable&&(i||(i=!0,r("mousedown","mouseup","mousemove"),r("touchstart","touchend","touchmove")),e.element.addEventListener("highlight",t=>{t.stopPropagation(),e.element.classList.add("gx-highlighted")}),e.element.addEventListener("unhighlight",t=>{t.stopPropagation(),e.element.classList.remove("gx-highlighted")}))}function r(e,t,n){document.body.addEventListener(e,e=>{u("highlight",e.target);const i=e=>{u("unhighlight",e.target),document.body.removeEventListener(t,i),document.body.removeEventListener(n,i)};document.body.addEventListener(t,i),document.body.addEventListener(n,i)})}function u(e,t){const n=new CustomEvent(e,{bubbles:!0});t.dispatchEvent(n)}},58255:function(e,t,n){"use strict";n.d(t,{a:function(){return r},h:function(){return u},i:function(){return o}});var i=n(46841);function o(e){return[e.mainImage,e.disabledImage,(0,i.h)("span",null,e.default)]}function r(e){return`gx-image-position--${e||"above"}`}const u="gx-image-position--hide-main"},9905:function(e,t,n){"use strict";function i(e,t,n=!1){let i;return function(...o){const r=(function(){i=null,n||e.apply(this,o)}).bind(this),u=n&&!i;clearTimeout(i),i=setTimeout(r,t),u&&e.apply(this,o)}}function o(e,t,{before:n,after:i}){const o=e[t];e[t]=()=>{void 0!==n&&n(),void 0!==o&&o.call(e),void 0!==i&&i()}}function r(e,t){const n=i(function(){for(const n of t){const t=getComputedStyle(e.element).getPropertyValue(n.cssVariableName).trim();t&&e[n.propertyName]!==t&&(e[n.propertyName]=t)}},100),r=new MutationObserver(e=>{for(const t of e)"attributes"!==t.type||"class"!==t.attributeName&&"style"!==t.attributeName||n()});o(e,"componentDidLoad",{after:()=>n(),before:()=>{r.observe(e.element,{attributes:!0,childList:!1,subtree:!1})}}),o(e,"componentDidUpdate",{after:()=>n()}),o(e,"componentDidUnload",{before:()=>r.disconnect()})}function u(e,t,n){const r=i(function(){requestAnimationFrame(function(){const i=e.element.querySelector(t),o=e.element.querySelector(n);if(null===i||null===o)return;const{offsetHeight:r,scrollHeight:u}=i,s=o.clientHeight;u-r>.3*s&&(e.maxLines=Math.trunc(r/s),e.maxHeight=e.maxLines*s)})},100),u=function(){e.maxLines=0};let s=null;return o(e,"componentDidLoad",{before:()=>{e.lineClamp&&(s=new ResizeObserver(()=>{u(),r()}),s.observe(e.element))}}),o(e,"componentDidRender",{before:()=>{e.lineClamp&&r()}}),o(e,"disconnectedCallback",{before:()=>{null!==s&&s.disconnect()}}),{applyLineClamp:r,resetLineClamp:u}}n.d(t,{c:function(){return r},m:function(){return u}})},5279:function(e,t,n){"use strict";function i(e){const t=e.element;t.addEventListener("touchstart",function(e){n=e.touches[0].clientX,i=e.touches[0].clientY}),t.addEventListener("touchmove",function(t){if(null===n)return;if(null===i)return;const o=n-t.touches[0].clientX,r=i-t.touches[0].clientY;e.swipe.emit(event),Math.abs(o)>Math.abs(r)?o>0?e.swipeLeft.emit(event):e.swipeRight.emit(event):r>0?e.swipeUp.emit(event):e.swipeDown.emit(event),n=null,i=null});let n=null,i=null}n.d(t,{m:function(){return i}})}}]);