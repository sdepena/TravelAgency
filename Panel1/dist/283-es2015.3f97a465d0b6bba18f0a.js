(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[283],{96283:function(e,t,i){"use strict";i.r(t),i.d(t,{gx_loading:function(){return l}});var n=i(46841);const l=class{constructor(e){(0,n.r)(this,e),this.lottiePath="",this.presented=!1,this.value=0}valueWatchHandler(e,t){if(e!==t&&this.lottiePath){const i=this.element.querySelector("gx-lottie");null!==i&&i.play(t>e?0:t,e)}}presentedWatchHandler(e,t=!1){e!==t&&(e?this.present():this.dismiss())}present(){const e=window.getComputedStyle(this.element.querySelector(".gx-lottie-test")).getPropertyValue("--gx-lottie-file-path");e&&(this.lottiePath=e.trim().replace(/^"/,"").replace(/"$/,"")),this.element.style.display="block"}dismiss(){this.element.style.display="none"}render(){return this.element.style.display=this.presented?"block":"none",(0,n.h)("div",{class:"box",role:"dialog"},(0,n.h)("div",{class:"gx-lottie-test"}),this.lottiePath?(0,n.h)("gx-lottie",{path:this.lottiePath,loop:"indeterminate"===this.type,autoPlay:"indeterminate"===this.type}):(0,n.h)("div",{class:{[this.type]:!0,loader:!0}},(0,n.h)("div",{class:"loader-inner",style:{width:100*this.value+"%"}})),(0,n.h)("div",{class:"title"},this.caption),(0,n.h)("div",{class:"description"},this.description))}get element(){return(0,n.g)(this)}static get watchers(){return{value:["valueWatchHandler"],presented:["presentedWatchHandler"]}}};l.style='.gx-line-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--max-lines);overflow:hidden;max-height:var(--max-height)}.line-measuring{visibility:hidden;position:absolute}gx-loading{display:block;position:fixed;top:0;right:0;bottom:0;left:0;z-index:10000}gx-loading[hidden]{display:none !important}gx-loading[hidden][invisible-mode=keep-space]{display:block !important;visibility:hidden}gx-loading .gx-lottie-test{display:none !important}gx-loading .box{position:fixed;padding:30px 20px;border-radius:3px;overflow:hidden;left:50%;top:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);background-color:rgba(200, 200, 200, 0.8);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-align:center;align-items:center;max-width:30%;min-width:200px;z-index:10001}gx-loading .title{font-size:16px;font-weight:bold;text-align:center}gx-loading .description{padding-top:5px;font-size:14px;text-align:center}gx-loading .loader{height:4px;width:100%;position:absolute;top:0;left:0;overflow:hidden}gx-loading .loader .loader-inner{display:block;position:absolute;width:0;height:4px;background-color:#2980b9}gx-loading .loader.determinate .loader-inner{-webkit-transition:width linear 0.2s;transition:width linear 0.2s}gx-loading .loader.indeterminate .loader-inner{content:"";left:-100%;width:10%;-webkit-animation:gx-loading-animation 1.4s linear infinite;animation:gx-loading-animation 1.4s linear infinite}@-webkit-keyframes gx-loading-animation{from{left:-100%;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}@keyframes gx-loading-animation{from{left:-100%;width:30%}50%{width:30%}70%{width:70%}80%{left:50%}95%{left:120%}to{left:100%}}'}}]);