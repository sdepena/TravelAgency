!function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[908],{73908:function(n,t,i){"use strict";i.r(t),i.d(t,{gx_map_line:function(){return r}});var a=i(46841),o=i(15949),r=function(){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(0,a.r)(this,e),this.gxMapLineDidLoad=(0,a.c)(this,"gxMapLineDidLoad",7),this.gxMapLineDeleted=(0,a.c)(this,"gxMapLineDeleted",7),this.coords="0, 0"}var t,i,r;return t=n,(i=[{key:"setupLine",value:function(e){this.lineInstance=(0,o.a)(e,{color:"red",weight:3})}},{key:"componentDidLoad",value:function(){var e=(0,o.p)(this.coords);null!==e?this.setupLine(e):(console.warn("GX warning: Cannot read 'coords' attribute, default coords set (gx-map-line)",this.element),this.setupLine([0,0])),this.gxMapLineDidLoad.emit(this.lineInstance)}},{key:"componentDidUnload",value:function(){this.gxMapLineDeleted.emit(this.lineInstance)}},{key:"render",value:function(){return(0,a.h)("div",null,(0,a.h)("slot",null))}},{key:"element",get:function(){return(0,a.g)(this)}}])&&e(t.prototype,i),r&&e(t,r),n}()}}])}();