!function(){function e(e,t,n,i,a,r,s){try{var u=e[r](s),o=u.value}catch(h){return void n(h)}u.done?t(o):Promise.resolve(o).then(i,a)}function t(t){return function(){var n=this,i=arguments;return new Promise(function(a,r){var s=t.apply(n,i);function u(t){e(s,a,r,u,o,"next",t)}function o(t){e(s,a,r,u,o,"throw",t)}u(void 0)})}}function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[756],{43756:function(e,i,a){"use strict";a.r(i),a.d(i,{gx_chronometer:function(){return u}});var r,s=a(46841);!function(e){e.Running="running",e.Stopped="stopped",e.Reset="reset"}(r||(r={}));var u=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),(0,s.r)(this,t),this.input=(0,s.c)(this,"input",7),this.change=(0,s.c)(this,"change",7),this.end=(0,s.c)(this,"end",7),this.tick=(0,s.c)(this,"tick",7),this.startedTime=0,this.started=!1,this.elapsedTime=0,this.invisibleMode="collapse",this.maxValue=0,this.unit="s",this.interval=1,this.state=r.Stopped,this.value=0}var i,a,u,o,h,l,c;return i=e,a=[{key:"getNativeInputId",value:(c=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.element);case 1:case"end":return e.stop()}},e,this)})),function(){return c.apply(this,arguments)})},{key:"componentWillLoad",value:function(){this.elapsedTime=this.value*this.getUnit()}},{key:"componentDidUnload",value:function(){this.stop()}},{key:"start",value:(l=t(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.started||(this.started=!0,this.startedTime=Date.now()-this.elapsedTime,this.updateElapsedTime(),this.timer=window.setInterval(function(){t.updateElapsedTime(),t.maxValue>0&&t.elapsedTime>=t.maxValue*t.getUnit()&&(t.end.emit(),t.stop())},1e3),this.interval>0&&(this.eventTimer=window.setInterval(function(){t.tickHandler()},this.interval*this.getUnit())));case 1:case"end":return e.stop()}},e,this)})),function(){return l.apply(this,arguments)})},{key:"stop",value:(h=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.clearInterval(this.eventTimer),window.clearInterval(this.timer),this.started=!1,this.startedTime=0;case 1:case"end":return e.stop()}},e,this)})),function(){return h.apply(this,arguments)})},{key:"reset",value:(o=t(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.stop(),this.value=0,this.startedTime=0,this.elapsedTime=0;case 1:case"end":return e.stop()}},e,this)})),function(){return o.apply(this,arguments)})},{key:"handleChange",value:function(){this.input.emit(),this.change.emit()}},{key:"tickHandler",value:function(){this.tick.emit()}},{key:"stateChanged",value:function(e,t){if(t!==e)switch(e){case r.Running:this.start();break;case r.Stopped:this.stop();break;case r.Reset:this.reset()}}},{key:"getUnit",value:function(){return"s"===this.unit?1e3:1}},{key:"updateElapsedTime",value:function(){this.elapsedTime=Date.now()-this.startedTime,this.value=Math.floor(this.elapsedTime/this.getUnit())}},{key:"render",value:function(){var e=Math.floor(this.elapsedTime/1e3),t=this.maxValue*this.getUnit();return(0,s.h)("span",null,this.elapsedTime>t&&0!==t?this.maxValueText:e)}},{key:"element",get:function(){return(0,s.g)(this)}}],u=[{key:"watchers",get:function(){return{value:["handleChange"],state:["stateChanged"]}}}],a&&n(i.prototype,a),u&&n(i,u),e}();u.style=".gx-line-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--max-lines);overflow:hidden;max-height:var(--max-height)}.line-measuring{visibility:hidden;position:absolute}gx-chronometer{display:inline}gx-chronometer[hidden]{display:none !important}gx-chronometer[hidden][invisible-mode=keep-space]{display:inline !important;visibility:hidden}"}}])}();