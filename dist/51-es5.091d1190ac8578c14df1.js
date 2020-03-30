function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function asyncGeneratorStep(e,t,n,i,r,o,a){try{var s=e[o](a),c=s.value}catch(u){return void n(u)}s.done?t(c):Promise.resolve(c).then(i,r)}function _asyncToGenerator(e){return function(){var t=this,n=arguments;return new Promise((function(i,r){var o=e.apply(t,n);function a(e){asyncGeneratorStep(o,i,r,a,s,"next",e)}function s(e){asyncGeneratorStep(o,i,r,a,s,"throw",e)}a(void 0)}))}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{IlGI:function(e,t,n){"use strict";n.r(t),n.d(t,"ion_menu",(function(){return h})),n.d(t,"ion_menu_button",(function(){return g})),n.d(t,"ion_menu_toggle",(function(){return v}));var i=n("54nT"),r=n("AfW+"),o=n("aiEM"),a=(n("iAHb"),n("0AIG")),s=n("AzGJ"),c=n("MgeF"),u=n("Dl6n"),h=function(){function e(t){_classCallCheck(this,e),Object(i.k)(this,t),this.lastOnEnd=0,this.blocker=s.GESTURE_CONTROLLER.createBlocker({disableScroll:!0}),this.mode=Object(i.d)(this),this.easing="ios"===this.mode?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",this.easingReverse="ios"===this.mode?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50,this.ionWillOpen=Object(i.e)(this,"ionWillOpen",7),this.ionWillClose=Object(i.e)(this,"ionWillClose",7),this.ionDidOpen=Object(i.e)(this,"ionDidOpen",7),this.ionDidClose=Object(i.e)(this,"ionDidClose",7),this.ionMenuChange=Object(i.e)(this,"ionMenuChange",7)}var t,u,h,f,g;return _createClass(e,[{key:"typeChanged",value:function(e,t){var n=this.contentEl;n&&(void 0!==t&&n.classList.remove("menu-content-".concat(t)),n.classList.add("menu-content-".concat(e)),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}},{key:"disabledChanged",value:function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}},{key:"sideChanged",value:function(){this.isEndSide=Object(o.h)(this.side)}},{key:"swipeGestureChanged",value:function(){this.updateState()}},{key:"connectedCallback",value:(g=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t,i,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===this.type&&(this.type=r.b.get("menuType","overlay")),t=this.el.parentNode,void 0===this.contentId&&console.warn('[DEPRECATED][ion-menu] Using the [main] attribute is deprecated, please use the "contentId" property instead:\nBEFORE:\n  <ion-menu>...</ion-menu>\n  <div main>...</div>\n\nAFTER:\n  <ion-menu contentId="main-content"></ion-menu>\n  <div id="main-content">...</div>\n'),!(i=void 0!==this.contentId?document.getElementById(this.contentId):t&&t.querySelector&&t.querySelector("[main]"))||!i.tagName){e.next=17;break}return this.contentEl=i,i.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),c.a._register(this),e.next=12,Promise.resolve().then(n.bind(null,"AzGJ"));case 12:e.t0={el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,canStart:function(e){return o.canStart(e)},onWillStart:function(){return o.onWillStart()},onStart:function(){return o.onStart()},onMove:function(e){return o.onMove(e)},onEnd:function(e){return o.onEnd(e)}},this.gesture=e.sent.createGesture(e.t0),this.updateState(),e.next=18;break;case 17:console.error('Menu: must have a "content" element to listen for drag events on.');case 18:case"end":return e.stop()}}),e,this)}))),function(){return g.apply(this,arguments)})},{key:"componentDidLoad",value:(f=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState();case 1:case"end":return e.stop()}}),e,this)}))),function(){return f.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.blocker.destroy(),c.a._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0}},{key:"onSplitPaneChanged",value:function(e){this.isPaneVisible=e.detail.isPane(this.el),this.updateState()}},{key:"onBackdropClick",value:function(e){this._isOpen&&this.lastOnEnd<e.timeStamp-100&&e.composedPath&&!e.composedPath().includes(this.menuInnerEl)&&(e.preventDefault(),e.stopPropagation(),this.close())}},{key:"isOpen",value:function(){return Promise.resolve(this._isOpen)}},{key:"isActive",value:function(){return Promise.resolve(this._isActive())}},{key:"open",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!0,e)}},{key:"close",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!1,e)}},{key:"toggle",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return this.setOpen(!this._isOpen,e)}},{key:"setOpen",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return c.a._setOpen(this,e,t)}},{key:"_setOpen",value:(h=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n,i=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=!(i.length>1&&void 0!==i[1])||i[1],e.t0=!this._isActive()||this.isAnimating||t===this._isOpen,e.t0){e.next=10;break}return this.beforeAnimation(t),e.next=6,this.loadAnimation();case 6:return e.next=8,this.startAnimation(t,n);case 8:this.afterAnimation(t),e.t0=0;case 10:return e.abrupt("return",!e.t0);case 11:case"end":return e.stop()}}),e,this)}))),function(e){return h.apply(this,arguments)})},{key:"loadAnimation",value:(u=_asyncToGenerator(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.menuInnerEl.offsetWidth,e.t0=t===this.width&&void 0!==this.animation,e.t0){e.next=10;break}return this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e.next=7,c.a._createAnimation(this.type,this);case 7:this.animation=e.sent,r.b.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both");case 10:case"end":return e.stop()}}),e,this)}))),function(){return u.apply(this,arguments)})},{key:"startAnimation",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(t,n){var i,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!t,r=this.animation.direction(i?"reverse":"normal").easing(i?this.easingReverse:this.easing).onFinish((function(){"reverse"===r.getDirection()&&r.direction("normal")})),!n){e.next=6;break}return e.next=4,r.play();case 4:e.next=7;break;case 6:r.play({sync:!0});case 7:case"end":return e.stop()}}),e,this)}))),function(e,n){return t.apply(this,arguments)})},{key:"_isActive",value:function(){return!this.disabled&&!this.isPaneVisible}},{key:"canSwipe",value:function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}},{key:"canStart",value:function(e){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c.a._getOpenSync()&&d(window,e.currentX,this.isEndSide,this.maxEdgeStart))}},{key:"onWillStart",value:function(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}},{key:"onStart",value:function(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):Object(o.b)(!1,"isAnimating has to be true")}},{key:"onMove",value:function(e){if(this.isAnimating&&this.animation){var t=l(e.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-t:t)}else Object(o.b)(!1,"isAnimating has to be true")}},{key:"onEnd",value:function(e){var t=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,r=l(e.deltaX,n,i),s=this.width,c=r/s,u=e.velocityX,h=s/2,d=u>=0&&(u>.2||e.deltaX>h),p=u<=0&&(u<-.2||e.deltaX<-h),m=n?i?d:p:i?p:d,b=!n&&m;n&&!m&&(b=!0),this.lastOnEnd=e.currentTime;var f=m?.001:-.001,g=c<0?.01:c;f+=Object(a.a)([0,0],[.4,0],[.6,1],[1,1],Object(o.c)(0,g,.9999))[0]||0;var v=this._isOpen?!m:m;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((function(){return t.afterAnimation(b)}),{oneTimeCallback:!0}).progressEnd(v?1:0,this._isOpen?1-f:f,300)}else Object(o.b)(!1,"isAnimating has to be true")}},{key:"beforeAnimation",value:function(e){Object(o.b)(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(p),this.backdropEl&&this.backdropEl.classList.add(m),this.blocker.block(),this.isAnimating=!0,e?this.ionWillOpen.emit():this.ionWillClose.emit()}},{key:"afterAnimation",value:function(e){Object(o.b)(this.isAnimating,"_before() should be called while animating"),this._isOpen=e,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),e?(this.contentEl&&this.contentEl.classList.add(b),this.ionDidOpen.emit()):(this.el.classList.remove(p),this.contentEl&&this.contentEl.classList.remove(b),this.backdropEl&&this.backdropEl.classList.remove(m),this.animation&&this.animation.stop(),this.ionDidClose.emit())}},{key:"updateState",value:function(){var e=this._isActive();this.gesture&&this.gesture.enable(e&&this.swipeGesture),!e&&this._isOpen&&this.forceClosing(),this.disabled||c.a._setActiveMenu(this),Object(o.b)(!this.isAnimating,"can not be animating")}},{key:"forceClosing",value:function(){Object(o.b)(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}},{key:"render",value:function(){var e,t=this,n=this.isEndSide,r=this.type,o=this.disabled,a=this.mode,s=this.isPaneVisible;return Object(i.i)(i.a,{role:"navigation",class:(e={},_defineProperty(e,a,!0),_defineProperty(e,"menu-type-".concat(r),!0),_defineProperty(e,"menu-enabled",!o),_defineProperty(e,"menu-side-end",n),_defineProperty(e,"menu-side-start",!n),_defineProperty(e,"menu-pane-visible",s),e)},Object(i.i)("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(i.i)("slot",null)),Object(i.i)("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1}))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"watchers",get:function(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},{key:"style",get:function(){return":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color,#fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host-context([dir=rtl]) .menu-inner,[dir=rtl] .menu-inner{left:unset;right:unset;left:auto;right:0;-webkit-transform:translate3d(calc(-1 * -9999px),0,0);transform:translate3d(calc(-1 * -9999px),0,0)}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;right:auto;left:0}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop{display:none;opacity:.01;z-index:-1}@media (max-width:340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translateZ(0);transform:translateZ(0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}:host(.menu-pane-visible) ion-backdrop{display:hidden!important}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}"}}]),e}(),l=function(e,t,n){return Math.max(0,t!==n?-e:e)},d=function(e,t,n,i){return n?t>=e.innerWidth-i:t<=i},p="show-menu",m="show-backdrop",b="menu-content-open",f=function(){var e=_asyncToGenerator(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get(t);case 2:if(n=e.sent,e.t0=!n,e.t0){e.next=8;break}return e.next=7,n.isActive();case 7:e.t0=!e.sent;case 8:return e.abrupt("return",!e.t0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.k)(this,t),this.visible=!1,this.disabled=!1,this.autoHide=!0,this.type="button",this.onClick=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.a.toggle(n.menu));case 1:case"end":return e.stop()}}),e)})))}var t;return _createClass(e,[{key:"componentDidLoad",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(this.menu);case 2:this.visible=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e=this.color,t=this.disabled,n=Object(i.d)(this),o=r.b.get("menuIcon","ios"===n?"menu-outline":"menu-sharp"),a=this.autoHide&&!this.visible,s={type:this.type};return Object(i.i)(i.a,{onClick:this.onClick,"aria-disabled":t?"true":null,"aria-hidden":a?"true":null,class:Object.assign(Object.assign(_defineProperty({},n,!0),Object(u.a)(e)),{button:!0,"menu-button-hidden":a,"menu-button-disabled":t,"in-toolbar":Object(u.c)("ion-toolbar",this.el),"ion-activatable":!0,"ion-focusable":!0})},Object(i.i)("button",Object.assign({},s,{disabled:t,class:"button-native"}),Object(i.i)("span",{class:"button-inner"},Object(i.i)("slot",null,Object(i.i)("ion-icon",{icon:o,mode:n,lazy:!1}))),"md"===n&&Object(i.i)("ion-ripple-effect",{type:"unbounded"})))}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"style",get:function(){return':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native:after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native:after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover:hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native:after{background:var(--background-hover);opacity:var(--background-hover-opacity,0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar){color:var(--ion-toolbar-color,var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary,#3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:.4}@media (any-hover:hover){:host(:hover){opacity:.6}}'}}]),e}(),v=function(){function e(t){var n=this;_classCallCheck(this,e),Object(i.k)(this,t),this.visible=!1,this.autoHide=!0,this.onClick=function(){return c.a.toggle(n.menu)}}var t;return _createClass(e,[{key:"connectedCallback",value:function(){this.visibilityChanged()}},{key:"visibilityChanged",value:(t=_asyncToGenerator(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(this.menu);case 2:this.visible=e.sent;case 3:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"render",value:function(){var e,t=Object(i.d)(this),n=this.autoHide&&!this.visible;return Object(i.i)(i.a,{onClick:this.onClick,"aria-hidden":n?"true":null,class:(e={},_defineProperty(e,t,!0),_defineProperty(e,"menu-toggle-hidden",n),e)},Object(i.i)("slot",null))}}],[{key:"style",get:function(){return":host(.menu-toggle-hidden){display:none}"}}]),e}()}}]);