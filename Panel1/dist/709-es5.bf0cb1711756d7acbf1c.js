!function(){function e(e,i){for(var a=0;a<i.length;a++){var n=i[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[709],{94709:function(i,a,n){"use strict";n.r(a),n.d(a,{gx_radio_group:function(){return o}});var t=n(46841),o=function(){function i(e){!function(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}(this,i),(0,t.r)(this,e),this.change=(0,t.c)(this,"change",7),this.radios=[],this.direction="horizontal",this.invisibleMode="collapse",this.disabled=!1}var a,n,o;return a=i,o=[{key:"watchers",get:function(){return{disabled:["disabledChanged"],value:["valueChanged"]}}}],(n=[{key:"disabledChanged",value:function(){this.setDisabled()}},{key:"valueChanged",value:function(){var e=this;if(void 0===this.value)this.radios.filter(function(e){return e.checked}).forEach(function(e){e.checked=!1});else{var i=!1;this.radios.forEach(function(a){a.value===e.value?(a.checked||i?i&&a.checked&&(a.checked=!1):a.checked=!0,i=!0):a.checked&&(a.checked=!1)})}this.didLoad&&this.change.emit({value:this.value})}},{key:"onRadioDidLoad",value:function(e){var i=e.target;this.radios.push(i),i.name=this.name,void 0!==this.value&&i.value===this.value?i.checked=!0:void 0===this.value&&i.checked?this.value=i.value:i.checked&&(i.checked=!1)}},{key:"onRadioDidUnload",value:function(e){var i=this.radios.indexOf(e.target);i>-1&&this.radios.splice(i,1)}},{key:"onRadioSelect",value:function(e){var i=this;this.radios.forEach(function(a){a===e.target?a.value!==i.value&&(i.value=a.value):a.checked=!1})}},{key:"setDisabled",value:function(){var e=this;this.radios.forEach(function(i){i.disabled=e.disabled||e.readonly})}},{key:"componentDidLoad",value:function(){this.setDisabled(),this.didLoad=!0}},{key:"render",value:function(){return(0,t.h)(t.H,{role:"radiogroup"},(0,t.h)("slot",null))}},{key:"element",get:function(){return(0,t.g)(this)}}])&&e(a.prototype,n),o&&e(a,o),i}();o.style=".gx-line-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--max-lines);overflow:hidden;max-height:var(--max-height)}.line-measuring{visibility:hidden;position:absolute}gx-radio-group{display:block}gx-radio-group[hidden]{display:none !important}gx-radio-group[hidden][invisible-mode=keep-space]{display:block !important;visibility:hidden}gx-radio-group[direction=horizontal]>gx-radio-option{display:-ms-inline-flexbox;display:inline-flex;margin-right:1rem}"}}])}();