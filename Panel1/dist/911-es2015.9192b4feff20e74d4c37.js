(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[911],{42911:function(e,t,i){"use strict";i.r(t),i.d(t,{gx_switch:function(){return s}});var c=i(46841);let n=0;class a{constructor(e){this.component=e}getNativeInputId(){return this.getNativeInput().id}getNativeInput(){return this.component.element.querySelector("[data-native-element]")}getValueFromEvent(e){return e.target&&e.target.checked}handleChange(e){this.component.checked=this.getValueFromEvent(e),this.component.input.emit(e)}checkedChanged(){const e=this.getNativeInput();e&&e.checked!==this.component.checked&&(e.checked=this.component.checked)}render(){const e=this.component;this.inputId||(this.inputId=e.element.id?`${e.element.id}_checkbox`:"gx-checkbox-auto-id-"+n++);const t={"aria-checked":e.checked?"true":"false","aria-disabled":e.disabled?"true":"false",checked:e.checked,class:"switch","data-native-element":"",disabled:e.disabled,id:this.inputId,onChange:this.handleChange.bind(this),type:"checkbox"};return[(0,c.h)("gx-bootstrap",null),(0,c.h)("span",{class:"switch switch-sm"},(0,c.h)("input",Object.assign({},t)),(0,c.h)("label",{htmlFor:this.inputId},e.caption))]}}const s=class{constructor(e){(0,c.r)(this,e),this.input=(0,c.c)(this,"input",7),this.disabled=!1,this.invisibleMode="collapse",this.renderer=new a(this)}async getNativeInputId(){return this.renderer.getNativeInputId()}checkedChanged(){this.renderer.checkedChanged()}render(){return(0,c.h)(c.H,{role:"switch"},this.renderer.render())}get element(){return(0,c.g)(this)}static get watchers(){return{checked:["checkedChanged"]}}};s.style='.gx-line-clamp{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:var(--max-lines);overflow:hidden;max-height:var(--max-height)}.line-measuring{visibility:hidden;position:absolute}gx-switch{display:block}gx-switch[hidden]{display:none !important}gx-switch[hidden][invisible-mode=keep-space]{display:block !important;visibility:hidden}gx-switch .switch{font-size:1rem;position:relative}gx-switch .switch input{position:absolute;height:1px;width:1px;background:none;border:0;clip:rect(0 0 0 0);-webkit-clip-path:inset(50%);clip-path:inset(50%);overflow:hidden;padding:0}gx-switch .switch input+label{position:relative;min-width:calc(calc(2.375rem * 0.8) * 2);border-radius:calc(2.375rem * 0.8);height:calc(2.375rem * 0.8);line-height:calc(2.375rem * 0.8);display:inline-block;cursor:pointer;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:middle;text-indent:calc(calc(calc(2.375rem * 0.8) * 2) + 0.5rem)}gx-switch .switch input+label::before,gx-switch .switch input+label::after{content:"";position:absolute;top:0;left:0;width:calc(calc(2.375rem * 0.8) * 2);bottom:0;display:block}gx-switch .switch input+label::before{right:0;background-color:#dee2e6;border-radius:calc(2.375rem * 0.8);-webkit-transition:0.2s all;transition:0.2s all}gx-switch .switch input+label::after{top:2px;left:2px;width:calc(calc(2.375rem * 0.8) - calc(2px * 2));height:calc(calc(2.375rem * 0.8) - calc(2px * 2));border-radius:50%;background-color:white;-webkit-transition:0.2s all;transition:0.2s all}gx-switch .switch input:checked+label::before{background-color:#08d}gx-switch .switch input:checked+label::after{margin-left:calc(2.375rem * 0.8)}gx-switch .switch input:focus+label::before{outline:none;-webkit-box-shadow:0 0 0 0.2rem rgba(0, 136, 221, 0.25);box-shadow:0 0 0 0.2rem rgba(0, 136, 221, 0.25)}gx-switch .switch input:disabled+label{color:#868e96;cursor:not-allowed}gx-switch .switch input:disabled+label::before{background-color:#e9ecef}gx-switch .switch.switch-sm{font-size:0.875rem}gx-switch .switch.switch-sm input+label{min-width:calc(calc(1.9375rem * 0.8) * 2);height:calc(1.9375rem * 0.8);line-height:calc(1.9375rem * 0.8);text-indent:calc(calc(calc(1.9375rem * 0.8) * 2) + 0.5rem)}gx-switch .switch.switch-sm input+label::before{width:calc(calc(1.9375rem * 0.8) * 2)}gx-switch .switch.switch-sm input+label::after{width:calc(calc(1.9375rem * 0.8) - calc(2px * 2));height:calc(calc(1.9375rem * 0.8) - calc(2px * 2))}gx-switch .switch.switch-sm input:checked+label::after{margin-left:calc(1.9375rem * 0.8)}'}}]);