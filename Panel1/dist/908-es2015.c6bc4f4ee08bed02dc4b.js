(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[908],{73908:function(e,n,t){"use strict";t.r(n),t.d(n,{gx_map_line:function(){return a}});var i=t(46841),s=t(15949);const a=class{constructor(e){(0,i.r)(this,e),this.gxMapLineDidLoad=(0,i.c)(this,"gxMapLineDidLoad",7),this.gxMapLineDeleted=(0,i.c)(this,"gxMapLineDeleted",7),this.coords="0, 0"}setupLine(e){this.lineInstance=(0,s.a)(e,{color:"red",weight:3})}componentDidLoad(){const e=(0,s.p)(this.coords);null!==e?this.setupLine(e):(console.warn("GX warning: Cannot read 'coords' attribute, default coords set (gx-map-line)",this.element),this.setupLine([0,0])),this.gxMapLineDidLoad.emit(this.lineInstance)}componentDidUnload(){this.gxMapLineDeleted.emit(this.lineInstance)}render(){return(0,i.h)("div",null,(0,i.h)("slot",null))}get element(){return(0,i.g)(this)}}}}]);