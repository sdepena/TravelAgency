(self.webpackChunktravelagencyangular=self.webpackChunktravelagencyangular||[]).push([[36],{74036:function(e,i,t){"use strict";t.r(i),t.d(i,{gx_image_upload:function(){return o}});var a=t(46841);const o=class{constructor(e){(0,a.r)(this,e),this.click=(0,a.c)(this,"click",7),this.onImageChanged=(0,a.c)(this,"onImageChanged",7),this.alt="",this.autoGrow=!0,this.disabled=!1,this.invisibleMode="collapse",this.lazyLoad=!0,this.lowResolutionSrc="",this.src="",this.highlightable=!1,this.readonly=!1,this.modalTitle=null,this.changeButtonText="Change image...",this.removeButtonText="Remove image",this.cancelButtonText="CANCEL",this.reader=new FileReader,this.clickImageAction=e=>{this.click.emit(e)},this.triggerAction=e=>{""===this.src?this.input.click():this.modal.opened=!0,e.stopPropagation()},this.clearImageAction=()=>{this.input.value="",this.src="",this.alt="",this.onImageChanged.emit(null),this.closeAction()},this.closeAction=()=>{this.modal.opened=!1},this.fileSelectedAction=()=>{const e=this.element,i=this.input.files[0];null!=i&&(this.alt=this.getFileNameWithoutExtension(i.name),this.reader.addEventListener("load",function(){e.src=this.result.toString()},!1),this.reader.readAsDataURL(i),this.closeAction(),this.onImageChanged.emit(i))}}stopPropagation(e){e.stopPropagation()}getFileNameWithoutExtension(e){const i=e.lastIndexOf(".");return-1===i?e:e.substring(0,i)}getSearchPlusSolidSVG(){return(0,a.h)("svg",{viewBox:"3 2 20 20"},(0,a.h)("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),(0,a.h)("path",{d:"M0 0h24v24H0z",fill:"none"}))}getPencilAltSolidSVG(){return(0,a.h)("svg",{viewBox:"0 -35 570 570"},(0,a.h)("path",{fill:"black",d:"M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"}))}render(){return(0,a.h)(a.H,null,(0,a.h)("div",{class:"click-capture",onClick:this.stopPropagation},(0,a.h)("gx-image",{class:"image-viewer-image",alt:this.alt,autoGrow:this.autoGrow,disabled:this.disabled,height:this.height,invisibleMode:this.invisibleMode,lazyLoad:this.lazyLoad,lowResolutionSrc:this.lowResolutionSrc,scaleType:this.scaleType,src:this.src,width:this.width,highlightable:this.highlightable,onClick:this.clickImageAction},!this.readonly&&(0,a.h)("div",{class:{"button-edit-container":!0,bottom:""!==this.src}},(0,a.h)("button",{class:"image-edit",disabled:this.disabled,onClick:this.triggerAction},""===this.src?this.getSearchPlusSolidSVG():this.getPencilAltSolidSVG()))),(0,a.h)("gx-modal",{class:"action-dialog",ref:e=>this.modal=e},(0,a.h)("div",{slot:"header"},null===this.modalTitle?document.title:this.modalTitle),(0,a.h)("div",{class:"body-container",slot:"body"},(0,a.h)("label",{class:"file"},(0,a.h)("input",{type:"file",onChange:this.fileSelectedAction,ref:e=>this.input=e}),(0,a.h)("span",{class:"file-custom"},this.changeButtonText)),(0,a.h)("gx-button",{class:"remove-button",onClick:this.clearImageAction},this.removeButtonText)),(0,a.h)("div",{slot:"secondary-action"},(0,a.h)("gx-button",{class:"cancel-button",onClick:this.closeAction},this.cancelButtonText)))))}get element(){return(0,a.g)(this)}};o.style=":host{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;pointer-events:none}.click-capture{display:contents;pointer-events:auto}.click-capture .image-viewer-image{position:relative;min-width:30px;min-height:30px}.click-capture .image-viewer-image .button-edit-container{position:absolute;right:0;z-index:99;pointer-events:none}.click-capture .image-viewer-image .button-edit-container .image-edit{border:0.075rem solid #ddd;border-radius:15px;background-color:#efefef;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:0 0 0 2.5px;width:30px;height:30px;pointer-events:all;-webkit-transition:0.2s ease;transition:0.2s ease}.click-capture .image-viewer-image .button-edit-container .image-edit:not([disabled]):hover{background-color:#ddd}.click-capture .image-viewer-image .button-edit-container .image-edit:not([disabled]):focus,.click-capture .image-viewer-image .button-edit-container .image-edit:not([disabled]):active{outline:none}.click-capture .image-viewer-image .button-edit-container .image-edit:not([disabled]):active{background-color:#ccc}.click-capture .image-viewer-image .button-edit-container .image-edit[disabled]{border:0.075rem solid #aaa;border-radius:15px;background-color:#ccc}.click-capture .image-viewer-image .button-edit-container .image-edit svg{width:18px;height:18px}.click-capture .action-dialog .body-container{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.click-capture .action-dialog .body-container .file{display:-ms-flexbox;display:flex;cursor:pointer;width:40%;margin:0px}.click-capture .action-dialog .body-container .file input{width:0}.click-capture .action-dialog .body-container .file .file-custom{border:0.075rem solid #ddd;border-radius:0.25rem;padding:5px 12px 5px 12px;width:100%;-webkit-box-shadow:inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);box-shadow:inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05)}.click-capture .action-dialog .body-container .remove-button{border:0.075rem solid #ddd;border-radius:0.25rem;padding:0 12px 0 12px;background-color:#eee}.click-capture .action-dialog div .cancel-button{border:0.075rem solid #ddd;border-radius:0.25rem;padding:2px 12px 2px 12px;background-color:#eee}.bottom{bottom:0}"}}]);