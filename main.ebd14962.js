parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"NJdl":[function(require,module,exports) {
var define;
var e;!function(t,n,o,r,i){"function"==typeof e&&e.amd?e(function(){return t.fullpage=r(n,o),t.fullpage}):"object"==typeof exports?module.exports=r(n,o):n.fullpage=r(n,o)}(this,window,document,function(e,t){"use strict";var n="fullpage-wrapper",o="."+n,r="fp-responsive",i="fp-notransition",l="fp-destroyed",a="fp-enabled",c="fp-viewing",s="active",u="."+s,f="fp-completely",d="."+f,v=".section",p="fp-section",h="."+p,g=h+u,m="fp-tableCell",S="."+m,w="fp-auto-height",b="."+w,y=".fp-auto-height-responsive",E="fp-normal-scroll",L="fp-nav",x="#"+L,A="fp-tooltip",T="."+A,k="fp-show-active",O=".slide",M="fp-slide",C="."+M,H=C+u,I="fp-slides",B="."+I,R="fp-slidesContainer",N="."+R,z="fp-table",j="fp-slidesNav",P="."+j,D=P+" a",V=".fp-controlArrow",W="fp-prev",Y="fp-controlArrow "+W,F=V+("."+W),U="fp-controlArrow fp-next",X=V+".fp-next";function K(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function _(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function $(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=$(e[r],o[r]))}return e}function q(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function Q(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function G(){return e.innerWidth}function J(e,t){var n;for(n in e=le(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function Z(e,t,n){for(var o=e[n];o&&!Te(o,t);)o=o[n];return o}function ee(e,t){return Z(e,t,"previousElementSibling")}function te(e,t){return Z(e,t,"nextElementSibling")}function ne(e){return e.previousElementSibling}function oe(e){return e.nextElementSibling}function re(e){return e[e.length-1]}function ie(e,t){e=se(e)?e[0]:e;for(var n=null!=t?_(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function le(e){return se(e)?e:[e]}function ae(e){e=le(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ce(e){e=le(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function se(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function ue(e,t){e=le(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function fe(e,t){e=le(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function de(e,t){t.appendChild(e)}function ve(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function pe(e,t){ve(e,t,!0)}function he(e,t){for("string"==typeof t&&(t=Oe(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function ge(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function me(e,t){return e&&1===e.nodeType?Te(e,t)?e:me(e.parentNode,t):null}function Se(e,t){be(e,e.nextSibling,t)}function we(e,t){be(e,e,t)}function be(e,t,n){se(n)||("string"==typeof n&&(n=Oe(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function ye(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function Ee(e){return Array.prototype.filter.call(e.parentNode.children,function(t){return t!==e})}function Le(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function xe(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function Ae(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function Te(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function ke(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function Oe(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function Me(e){e=le(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function Ce(e,t,n){for(var o=e[n],r=[];o;)(Te(o,t)||null==t)&&r.push(o),o=o[n];return r}function He(e,t){return Ce(e,t,"nextElementSibling")}function Ie(e,t){return Ce(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:_,deepExtend:$,hasClass:q,getWindowHeight:Q,css:J,until:Z,prevUntil:ee,nextUntil:te,prev:ne,next:oe,last:re,index:ie,getList:le,hide:ae,show:ce,isArrayOrList:se,addClass:ue,removeClass:fe,appendTo:de,wrap:ve,wrapAll:pe,wrapInner:he,unwrap:ge,closest:me,after:Se,before:we,insertBefore:be,getScrollTop:ye,siblings:Ee,preventDefault:Le,isFunction:xe,trigger:Ae,matches:Te,toggle:ke,createElementFromHTML:Oe,remove:Me,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:Ce,nextAll:He,prevAll:Ie,showError:K},function(Z,le){var se=le&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(le.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1,ve=_("html, body"),be=_("html")[0],Ce=_("body")[0];if(!q(be,a)){var Be={};le=$({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof Z?_(Z)[0]:Z,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:v,slideSelector:O,v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},le);var Re,Ne,ze,je,Pe=!1,De=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),Ve="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,We="string"==typeof Z?_(Z)[0]:Z,Ye=Q(),Fe=G(),Ue=!1,Xe=!0,Ke=!0,_e=[],$e={m:{up:!0,down:!0,left:!0,right:!0}};$e.k=$({},$e.m);var qe,Qe,Ge,Je,Ze,et,tt,nt,ot,rt=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"},it={touchmove:"ontouchmove"in e?"touchmove":rt.move,touchstart:"ontouchstart"in e?"touchstart":rt.down},lt='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',at=!1;try{var ct=Object.defineProperty({},"passive",{get:function(){at=!0}});e.addEventListener("testPassive",null,ct),e.removeEventListener("testPassive",null,ct)}catch(vo){}var st,ut,ft,dt=$({},le),vt=!1,pt=!0,ht=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];lo(),e.fp_easings=$(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),We&&(Be.version="3.0.8",Be.setAutoScrolling=Tt,Be.setRecordHistory=kt,Be.setScrollingSpeed=Ot,Be.setFitToSection=Mt,Be.setLockAnchors=function(e){le.lockAnchors=e},Be.setMouseWheelScrolling=Ct,Be.setAllowScrolling=Ht,Be.setKeyboardScrolling=Bt,Be.moveSectionUp=Rt,Be.moveSectionDown=Nt,Be.silentMoveTo=zt,Be.moveTo=jt,Be.moveSlideRight=Pt,Be.moveSlideLeft=Dt,Be.fitToSection=Zt,Be.reBuild=Vt,Be.setResponsive=Yt,Be.getFullpageData=function(){return le},Be.destroy=function(n){Tt(!1,"internal"),Ht(!0),It(!1),Bt(!1),ue(We,l),[Ze,Je,Qe,et,tt,ot,Ge,ft].forEach(function(e){clearTimeout(e)}),e.removeEventListener("scroll",Jt),e.removeEventListener("hashchange",An),e.removeEventListener("resize",jn),t.removeEventListener("keydown",kn),t.removeEventListener("keyup",On),["click","touchstart"].forEach(function(e){t.removeEventListener(e,Ft)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){t.removeEventListener(e,Xt,!0)}),n&&(no(0),_("img[data-src], source[data-src], audio[data-src], iframe[data-src]",We).forEach(function(e){gn(e,"src")}),_("img[data-srcset]").forEach(function(e){gn(e,"srcset")}),Me(_(x+", "+P+", "+V)),J(_(h),{height:"","background-color":"",padding:""}),J(_(C),{width:""}),J(We,{height:"",position:"","-ms-touch-action":"","touch-action":""}),J(ve,{overflow:"",height:""}),fe(be,a),fe(Ce,r),Ce.className.split(/\s+/).forEach(function(e){0===e.indexOf(c)&&fe(Ce,e)}),_(h+", "+C).forEach(function(e){le.scrollOverflowHandler&&le.scrollOverflow&&le.scrollOverflowHandler.remove(e),fe(e,z+" "+s+" "+f);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),q(e,p)&&!vt&&e.removeAttribute("data-anchor")}),Wn(We),[S,N,B].forEach(function(e){_(e,We).forEach(function(e){ge(e)})}),J(We,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[p,M,R].forEach(function(e){fe(_("."+e),e)}))},Be.getActiveSection=function(){return new uo(_(g)[0])},Be.getActiveSlide=function(){return vn(_(H,_(g)[0])[0])},Be.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<_(le.sectionSelector,We).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<_(le.sectionSelector,We).length;t++)e.push(0);return e}(),options:le,setAutoScrolling:Tt},Be.shared={afterRenderActions:Gt,isNormalScrollElement:!1},e.fullpage_api=Be,le.$&&Object.keys(Be).forEach(function(e){le.$.fn.fullpage[e]=Be[e]}),le.css3&&(le.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}()),le.scrollBar=le.scrollBar||le.hybrid,function(){if(!le.anchors.length){var e=_(le.sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",We);e.length&&e.length===_(h).length&&(vt=!0,e.forEach(function(e){le.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!le.navigationTooltips.length){var t=_(le.sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",We);t.length&&t.forEach(function(e){le.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){J(We,{height:"100%",position:"relative"}),ue(We,n),ue(be,a),Ye=Q(),fe(We,l),ue(_(le.sectionSelector,We),p),ue(_(le.slideSelector,We),M);for(var e=_(h),o=0;o<e.length;o++){var r=o,i=e[o],c=_(C,i),u=c.length;i.setAttribute("data-fp-styles",i.getAttribute("style")),$t(i,r),qt(i,r),u>0?_t(i,c,u):le.verticalCentered&&Un(i)}le.fixedElements&&le.css3&&_(le.fixedElements).forEach(function(e){Ce.appendChild(e)}),le.navigation&&function(){var e=t.createElement("div");e.setAttribute("id",L);var n=t.createElement("ul");e.appendChild(n),de(e,Ce);var o=_(x)[0];ue(o,"fp-"+le.navigationPosition),le.showActiveTooltip&&ue(o,k);for(var r="",i=0;i<_(h).length;i++){var l="";le.anchors.length&&(l=le.anchors[i]),r+='<li><a href="#'+l+'"><span class="fp-sr-only">'+Qt(i,"Section")+"</span><span></span></a>";var a=le.navigationTooltips[i];void 0!==a&&""!==a&&(r+='<div class="'+A+" fp-"+le.navigationPosition+'">'+a+"</div>"),r+="</li>"}_("ul",o)[0].innerHTML=r;var c=_("li",_(x)[0])[ie(_(g)[0],h)];ue(_("a",c),s)}(),_('iframe[src*="youtube.com/embed/"]',We).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),le.scrollOverflow&&(qe=le.scrollOverflowHandler.init(le))}(),Ht(!0),It(!0),Tt(le.autoScrolling,"internal"),Dn(),Zn(),"complete"===t.readyState&&xn(),e.addEventListener("load",xn),le.scrollOverflow||Gt(),function(){for(var e=1;e<4;e++)ot=setTimeout(Kt,350*e)}(),e.addEventListener("scroll",Jt),e.addEventListener("hashchange",An),e.addEventListener("focus",In),e.addEventListener("blur",Bn),e.addEventListener("resize",jn),t.addEventListener("keydown",kn),t.addEventListener("keyup",On),["click","touchstart"].forEach(function(e){t.addEventListener(e,Ft)}),le.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ut(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ut(e,!0)})));var gt=!1,mt=0,St=0,wt=0,bt=0,yt=0,Et=(new Date).getTime(),Lt=0,xt=0,At=Ye;return Be}function Tt(e,t){e||no(0),io("autoScrolling",e,t);var n=_(g)[0];if(le.autoScrolling&&!le.scrollBar)J(ve,{overflow:"hidden",height:"100%"}),kt(dt.recordHistory,"internal"),J(We,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&no(n.offsetTop);else if(J(ve,{overflow:"visible",height:"initial"}),kt(!!le.autoScrolling&&dt.recordHistory,"internal"),J(We,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=pn(n.offsetTop);o.element.scrollTo(0,o.options)}}function kt(e,t){io("recordHistory",e,t)}function Ot(e,t){io("scrollingSpeed",e,t)}function Mt(e,t){io("fitToSection",e,t)}function Ct(n){n?(function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!at&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",an,i):t[n](o+r,an,i)}(),We.addEventListener("mousedown",Mn),We.addEventListener("mouseup",Cn)):(t.addEventListener?(t.removeEventListener("mousewheel",an,!1),t.removeEventListener("wheel",an,!1),t.removeEventListener("MozMousePixelScroll",an,!1)):t.detachEvent("onmousewheel",an),We.removeEventListener("mousedown",Mn),We.removeEventListener("mouseup",Cn))}function Ht(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){ro(e,t,"m")}):ro(e,"all","m")}function It(e){e?(Ct(!0),function(){if(De||Ve){le.autoScrolling&&(Ce.removeEventListener(it.touchmove,tn,{passive:!1}),Ce.addEventListener(it.touchmove,tn,{passive:!1}));var e=le.touchWrapper;e.removeEventListener(it.touchstart,rn),e.removeEventListener(it.touchmove,nn,{passive:!1}),e.addEventListener(it.touchstart,rn),e.addEventListener(it.touchmove,nn,{passive:!1})}}()):(Ct(!1),function(){if(De||Ve){le.autoScrolling&&(Ce.removeEventListener(it.touchmove,nn,{passive:!1}),Ce.removeEventListener(it.touchmove,tn,{passive:!1}));var e=le.touchWrapper;e.removeEventListener(it.touchstart,rn),e.removeEventListener(it.touchmove,nn,{passive:!1})}}())}function Bt(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach(function(t){ro(e,t,"k")}):(ro(e,"all","k"),le.keyboardScrolling=e)}function Rt(){var e=ee(_(g)[0],h);e||!le.loopTop&&!le.continuousVertical||(e=re(_(h))),null!=e&&un(e,null,!0)}function Nt(){var e=te(_(g)[0],h);e||!le.loopBottom&&!le.continuousVertical||(e=_(h)[0]),null!=e&&un(e,null,!1)}function zt(e,t){Ot(0,"internal"),jt(e,t),Ot(dt.scrollingSpeed,"internal")}function jt(e,t){var n=_n(e);void 0!==t?$n(e,t):null!=n&&un(n)}function Pt(e){cn("right",e)}function Dt(e){cn("left",e)}function Vt(t){if(!q(We,l)){Ue=!0,Ye=Q(),Fe=G();for(var n=_(h),o=0;o<n.length;++o){var r=n[o],i=_(B,r)[0],a=_(C,r);le.verticalCentered&&J(_(S,r),{height:Xn(r)+"px"}),J(r,{height:Ye+"px"}),a.length>1&&Nn(i,_(H,i)[0])}le.scrollOverflow&&qe.createScrollBarForAll();var c=ie(_(g)[0],h);c&&zt(c+1),Ue=!1,xe(le.afterResize)&&t&&le.afterResize.call(We,e.innerWidth,e.innerHeight),xe(le.afterReBuild)&&!t&&le.afterReBuild.call(We)}}function Wt(){return q(Ce,r)}function Yt(e){var t=Wt();e?t||(Tt(!1,"internal"),Mt(!1,"internal"),ae(_(x)),ue(Ce,r),xe(le.afterResponsive)&&le.afterResponsive.call(We,e),le.scrollOverflow&&qe.createScrollBarForAll()):t&&(Tt(dt.autoScrolling,"internal"),Mt(dt.autoScrolling,"internal"),ce(_(x)),fe(Ce,r),xe(le.afterResponsive)&&le.afterResponsive.call(We,e))}function Ft(e){var t=e.target;t&&me(t,x+" a")?function(e){Le(e);var t=ie(me(this,x+" li"));un(_(h)[t])}.call(t,e):Te(t,T)?function(){Ae(ne(this),"click")}.call(t):Te(t,V)?function(){var e=me(this,h);q(this,W)?$e.m.left&&Dt(e):$e.m.right&&Pt(e)}.call(t,e):Te(t,D)||null!=me(t,D)?function(e){Le(e);var t=_(B,me(this,h))[0],n=_(C,t)[ie(me(this,"li"))];Nn(t,n)}.call(t,e):me(t,le.menu+" [data-menuanchor]")&&function(e){!_(le.menu)[0]||!le.lockAnchors&&le.anchors.length||(Le(e),jt(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ut(e,n){t["fp_"+e]=n,t.addEventListener(e,Xt,!0)}function Xt(e){var n=e.type,o=!1,r=le.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return It(!0),void(r&&le.scrollOverflowHandler.setIscroll(i,!0));"touchend"===n&&(pt=!1,setTimeout(function(){pt=!0},800)),("mouseenter"!==n||pt)&&(le.normalScrollElements.split(",").forEach(function(e){if(!o){var t=Te(i,e),n=me(i,e);(t||n)&&(Be.shared.isNormalScrollElement||(It(!1),r&&le.scrollOverflowHandler.setIscroll(i,!1)),Be.shared.isNormalScrollElement=!0,o=!0)}}),!o&&Be.shared.isNormalScrollElement&&(It(!0),r&&le.scrollOverflowHandler.setIscroll(i,!0),Be.shared.isNormalScrollElement=!1))}function Kt(){var e=Q(),t=G();Ye===e&&Fe===t||(Ye=e,Fe=t,Vt(!0))}function _t(e,n,o){var r=100*o,i=100/o,l=t.createElement("div");l.className=I,pe(n,l);var a=t.createElement("div");a.className=R,pe(n,a),J(_(N,e),{width:r+"%"}),o>1&&(le.controlArrows&&function(e){var t=[Oe('<div class="'+Y+'"></div>'),Oe('<div class="'+U+'"></div>')];Se(_(B,e)[0],t),"#fff"!==le.controlArrowColor&&(J(_(X,e),{"border-color":"transparent transparent transparent "+le.controlArrowColor}),J(_(F,e),{"border-color":"transparent "+le.controlArrowColor+" transparent transparent"})),le.loopHorizontal||ae(_(F,e))}(e),le.slidesNavigation&&function(e,t){de(Oe('<div class="'+j+'"><ul></ul></div>'),e);var n=_(P,e)[0];ue(n,"fp-"+le.slidesNavPosition);for(var o=0;o<t;o++){var r=_(C,e)[o];de(Oe('<li><a href="#"><span class="fp-sr-only">'+Qt(o,"Slide",r)+"</span><span></span></a></li>"),_("ul",n)[0])}J(n,{"margin-left":"-"+n.innerWidth/2+"px"}),ue(_("a",_("li",n)[0]),s)}(e,o)),n.forEach(function(e){J(e,{width:i+"%"}),le.verticalCentered&&Un(e)});var c=_(H,e)[0];null!=c&&(0!==ie(_(g),h)||0===ie(_(g),h)&&0!==ie(c))?to(c,"internal"):ue(n[0],s)}function $t(e,t){t||null!=_(g)[0]||ue(e,s),je=_(g)[0],J(e,{height:Ye+"px"}),le.paddingTop&&J(e,{"padding-top":le.paddingTop}),le.paddingBottom&&J(e,{"padding-bottom":le.paddingBottom}),void 0!==le.sectionsColor[t]&&J(e,{"background-color":le.sectionsColor[t]}),void 0!==le.anchors[t]&&e.setAttribute("data-anchor",le.anchors[t])}function qt(e,t){void 0!==le.anchors[t]&&q(e,s)&&Yn(le.anchors[t],t),le.menu&&le.css3&&null!=me(_(le.menu)[0],o)&&_(le.menu).forEach(function(e){Ce.appendChild(e)})}function Qt(e,t,n){var o="Section"===t?le.anchors[e]:n.getAttribute("data-anchor");return le.navigationTooltips[e]||o||t+" "+(e+1)}function Gt(){var e,t,n=_(g)[0];ue(n,f),Sn(n),mn(),bn(n),le.scrollOverflow&&le.scrollOverflowHandler.afterLoad(),e=Tn(),t=_n(e.section),e.section&&t&&(void 0===t||ie(t)!==ie(je))||!xe(le.afterLoad)||fn("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:ie(n,h)}),xe(le.afterRender)&&fn("afterRender")}function Jt(){var e,t,n,o;if(!Ue&&(!le.autoScrolling||le.scrollBar)){var r=ye(),i=function(e){var t=e>mt?"down":"up";return mt=e,Lt=e,t}(r),l=0,a=r+Q()/2,c=Ce.offsetHeight-Q()===r,u=_(h);if(c)l=u.length-1;else if(r)for(var d=0;d<u.length;++d)u[d].offsetTop<=a&&(l=d);else l=0;if(t=i,n=_(g)[0].offsetTop,o=n+Q(),("up"==t?o>=ye()+Q():n<=ye())&&(q(_(g)[0],f)||(ue(_(g)[0],f),fe(Ee(_(g)[0]),f))),!q(e=u[l],s)){gt=!0;var v,p,m=_(g)[0],S=ie(m,h)+1,w=Fn(e),b=e.getAttribute("data-anchor"),y=ie(e,h)+1,E=_(H,e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:b,element:e,leavingSection:S,direction:w};E&&(p=E.getAttribute("data-anchor"),v=ie(E)),Ke&&(ue(e,s),fe(Ee(e),s),xe(le.onLeave)&&fn("onLeave",L),xe(le.afterLoad)&&fn("afterLoad",L),En(m),Sn(e),bn(e),Yn(b,y-1),le.anchors.length&&(Re=b),Qn(v,p,b)),clearTimeout(et),et=setTimeout(function(){gt=!1},100)}le.fitToSection&&(clearTimeout(tt),tt=setTimeout(function(){le.fitToSection&&_(g)[0].offsetHeight<=Ye&&Zt()},le.fitToSectionDelay))}}function Zt(){Ke&&(Ue=!0,un(_(g)[0]),Ue=!1)}function en(e){if($e.m[e]){var t="down"===e?Nt:Rt;if(le.scrollOverflow){var n=le.scrollOverflowHandler.scrollable(_(g)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!le.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function tn(e){le.autoScrolling&&on(e)&&$e.m.up&&Le(e)}function nn(t){var n=me(t.target,h)||_(g)[0];if(on(t)){le.autoScrolling&&Le(t);var o=eo(t);bt=o.y,yt=o.x,_(B,n).length&&Math.abs(wt-yt)>Math.abs(St-bt)?!Pe&&Math.abs(wt-yt)>G()/100*le.touchSensitivity&&(wt>yt?$e.m.right&&Pt(n):$e.m.left&&Dt(n)):le.autoScrolling&&Ke&&Math.abs(St-bt)>e.innerHeight/100*le.touchSensitivity&&(St>bt?en("down"):bt>St&&en("up"))}}function on(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function rn(e){if(le.fitToSection&&(st=!1),on(e)){var t=eo(e);St=t.y,wt=t.x}}function ln(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function an(t){var n=(new Date).getTime(),o=q(_(d)[0],E);if(!$e.m.down&&!$e.m.up)return Le(t),!1;if(le.autoScrolling&&!ze&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;_e.length>149&&_e.shift(),_e.push(Math.abs(r)),le.scrollBar&&Le(t);var c=n-Et;return Et=n,c>200&&(_e=[]),Ke&&ln(_e,10)>=ln(_e,70)&&a&&en(i<0?"down":"up"),!1}le.fitToSection&&(st=!1)}function cn(e,t){var n=null==t?_(g)[0]:t,o=_(B,n)[0];if(!(null==o||Pe||_(C,o).length<2)){var r=_(H,o)[0],i=null;if(null==(i="left"===e?ee(r,C):te(r,C))){if(!le.loopHorizontal)return;var l=Ee(r);i="left"===e?l[l.length-1]:l[0]}Pe=!Be.test.isTesting,Nn(o,i,e)}}function sn(){for(var e=_(H),t=0;t<e.length;t++)to(e[t],"internal")}function un(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>Lt,i=o-Ye+t,l=le.bigSectionsDestination;return t>Ye?(r||l)&&"bottom"!==l||(o=i):(r||Ue&&null==oe(e))&&(o=i),Lt=o,o}(e),yMovement:Fn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:ie(e,h),activeSlide:_(H,e)[0],activeSection:_(g)[0],leavingSection:ie(_(g),h)+1,localIsResizing:Ue};if(!(i.activeSection==e&&!Ue||le.scrollBar&&ye()===i.dtop&&!q(e,w))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=ie(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,xe(le.onLeave)&&!1===fn("onLeave",i))return}le.autoScrolling&&le.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&(i=function(e){return e.isMovementUp?we(_(g)[0],He(e.activeSection,h)):Se(_(g)[0],Ie(e.activeSection,h).reverse()),no(_(g)[0].offsetTop),sn(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=Fn(e.element),e}(i)),i.localIsResizing||En(i.activeSection),le.scrollOverflow&&le.scrollOverflowHandler.beforeLeave(),ue(e,s),fe(Ee(e),s),Sn(e),le.scrollOverflow&&le.scrollOverflowHandler.onLeave(),Ke=Be.test.isTesting,Qn(r,o,i.anchorLink,i.sectionIndex),function(e){var t=le.scrollingSpeed<700,n=t?700:le.scrollingSpeed;if(le.css3&&le.autoScrolling&&!le.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";Kn(o,!0),le.scrollingSpeed?(clearTimeout(Je),Je=setTimeout(function(){hn(e),Ke=!t},le.scrollingSpeed)):hn(e)}else{var r=pn(e.dtop);Be.test.top=-e.dtop+"px",ao(r.element,r.options,le.scrollingSpeed,function(){le.scrollBar?setTimeout(function(){hn(e)},30):(hn(e),Ke=!t)})}t&&(clearTimeout(ft),ft=setTimeout(function(){Ke=!0},n))}(i),Re=i.anchorLink,Yn(i.anchorLink,i.sectionIndex)}}}function fn(e,t){var n,o=function(e,t){var n;return(n=le.v2compatible?{afterRender:function(){return[We]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:dn(_(g)[0]),slide:vn(_(H,_(g)[0])[0])}},onLeave:function(){return{origin:dn(t.activeSection),destination:dn(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:dn(t.section),origin:vn(t.prevSlide),destination:vn(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}})[e]()}(e,t);if(le.v2compatible){if(!1===le[e].apply(o[0],o.slice(1)))return!1}else if(Ae(We,e,o),!1===le[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function dn(e){return e?new uo(e):null}function vn(e){return e?new fo(e):null}function pn(t){var n={};return le.autoScrolling&&!le.scrollBar?(n.options=-t,n.element=_(o)[0]):(n.options=t,n.element=e),n}function hn(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?we(_(h)[0],e.wrapAroundElements):Se(_(h)[_(h).length-1],e.wrapAroundElements),no(_(g)[0].offsetTop),sn())}(e),xe(le.afterLoad)&&!e.localIsResizing&&fn("afterLoad",e),le.scrollOverflow&&le.scrollOverflowHandler.afterLoad(),e.localIsResizing||bn(e.element),ue(e.element,f),fe(Ee(e.element),f),mn(),Ke=!0,xe(e.callback)&&e.callback()}function gn(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function mn(){var e=_(b)[0]||Wt()&&_(y)[0];le.lazyLoading&&e&&_(h+":not("+u+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<Ye&&n>0||o>2&&o<Ye)&&Sn(e)})}function Sn(e){le.lazyLoading&&_("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Ln(e)).forEach(function(t){if(["src","srcset"].forEach(function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(gn(t,n),t.addEventListener("load",function(){wn(e)}))}),Te(t,"source")){var n=me(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){wn(e)})}})}function wn(e){le.scrollOverflow&&(clearTimeout(ut),ut=setTimeout(function(){q(Ce,r)||qe.createScrollBar(e)},200))}function bn(e){var t=Ln(e);_("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),_('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&yn(e),e.onload=function(){e.hasAttribute("data-autoplay")&&yn(e)}})}function yn(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function En(e){var t=Ln(e);_("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),_('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function Ln(e){var t=_(H,e);return t.length&&(e=t[0]),e}function xn(){var e=Tn(),t=e.section,n=e.slide;t&&(le.animateAnchor?$n(t,n):zt(t,n))}function An(){if(!gt&&!le.lockAnchors){var e=Tn(),t=e.section,n=e.slide,o=void 0===Re,r=void 0===Re&&void 0===n&&!Pe;t&&t.length&&(t&&t!==Re&&!o||r||!Pe&&Ne!=n)&&$n(t,n)}}function Tn(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function kn(e){clearTimeout(nt);var n=t.activeElement,o=e.keyCode;9===o?function(e){var n=e.shiftKey,o=t.activeElement,r=Hn(Ln(_(g)[0]));function i(e){return Le(e),r[0]?r[0].focus():null}(function(e){var n=Hn(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,i=n[r],l=vn(me(i,C)),a=dn(me(i,h));return!l&&!a})(e)||(o?null==me(o,g+","+g+" "+H)&&(o=i(e)):i(e),(!n&&o==r[r.length-1]||n&&o==r[0])&&Le(e))}(e):Te(n,"textarea")||Te(n,"input")||Te(n,"select")||"true"===n.getAttribute("contentEditable")||""===n.getAttribute("contentEditable")||!le.keyboardScrolling||!le.autoScrolling||([40,38,32,33,34].indexOf(o)>-1&&Le(e),ze=e.ctrlKey,nt=setTimeout(function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=Te(o,"video")||Te(o,"audio");if(Ke||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:$e.k.up&&Rt();break;case 32:if(n&&$e.k.up&&!r){Rt();break}case 40:case 34:$e.k.down&&(32===e.keyCode&&r||Nt());break;case 36:$e.k.up&&jt(1);break;case 35:$e.k.down&&jt(_(h).length);break;case 37:$e.k.left&&Dt();break;case 39:$e.k.right&&Pt()}}(e)},150))}function On(e){Xe&&(ze=e.ctrlKey)}function Mn(e){2==e.which&&(xt=e.pageY,We.addEventListener("mousemove",Rn))}function Cn(e){2==e.which&&We.removeEventListener("mousemove",Rn)}function Hn(e){return[].slice.call(_(lt,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function In(){Xe=!0}function Bn(){Xe=!1,ze=!1}function Rn(e){le.autoScrolling&&(Ke&&(e.pageY<xt&&$e.m.up?Rt():e.pageY>xt&&$e.m.down&&Nt()),xt=e.pageY)}function Nn(e,t,n){var o,r,i=me(e,h),l={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:ie(t),section:i,sectionIndex:ie(i,h),anchorLink:i.getAttribute("data-anchor"),slidesNav:_(P,i)[0],slideAnchor:Jn(t),prevSlide:_(H,i)[0],prevSlideIndex:ie(_(H,i)[0]),localIsResizing:Ue};l.xMovement=(o=l.prevSlideIndex,r=l.slideIndex,o==r?"none":o>r?"left":"right"),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(Ke=!1),le.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&xe(le.onSlideLeave)&&!1===fn("onSlideLeave",l)?Pe=!1:(ue(t,s),fe(Ee(t),s),l.localIsResizing||(En(l.prevSlide),Sn(t)),!le.loopHorizontal&&le.controlArrows&&(ke(_(F,i),0!==l.slideIndex),ke(_(X,i),null!=oe(t))),q(i,s)&&!l.localIsResizing&&Qn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(le.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";Be.test.translate3dH[t.sectionIndex]=r,J(Vn(_(N,e)),oo(r)),Ze=setTimeout(function(){n&&zn(t)},le.scrollingSpeed)}else Be.test.left[t.sectionIndex]=Math.round(o.left),ao(e,Math.round(o.left),le.scrollingSpeed,function(){n&&zn(t)})}(e,l,!0))}function zn(e){var t,n;t=e.slidesNav,n=e.slideIndex,le.slidesNavigation&&null!=t&&(fe(_(u,t),s),ue(_("a",_("li",t)[n]),s)),e.localIsResizing||(xe(le.afterSlideLoad)&&fn("afterSlideLoad",e),Ke=!0,bn(e.destiny)),Pe=!1}function jn(){Ue=!0,clearTimeout(Qe),Qe=setTimeout(function(){for(var e=0;e<4;e++)Ge=setTimeout(Pn,200*e)},200)}function Pn(){if(Dn(),De){var e=t.activeElement;if(!Te(e,"textarea")&&!Te(e,"input")&&!Te(e,"select")){var n=Q();Math.abs(n-At)>20*Math.max(At,n)/100&&(Vt(!0),At=n)}}else Kt()}function Dn(){var t=le.responsive||le.responsiveWidth,n=le.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?Yt(o||r):t?Yt(o):n&&Yt(r)}function Vn(e){var t="all "+le.scrollingSpeed+"ms "+le.easingcss3;return fe(e,i),J(e,{"-webkit-transition":t,transition:t})}function Wn(e){return ue(e,i)}function Yn(e,t){var n;n=e,_(le.menu).forEach(function(e){le.menu&&null!=e&&(fe(_(u,e),s),ue(_('[data-menuanchor="'+n+'"]',e),s))}),function(e,t){le.navigation&&null!=_(x)[0]&&(fe(_(u,_(x)[0]),s),ue(e?_('a[href="#'+e+'"]',_(x)[0]):_("a",_("li",_(x)[0])[t]),s))}(e,t)}function Fn(e){var t=ie(_(g)[0],h),n=ie(e,h);return t==n?"none":t>n?"up":"down"}function Un(e){if(!q(e,z)){var n=t.createElement("div");n.className=m,n.style.height=Xn(e)+"px",ue(e,z),he(e,n)}}function Xn(e){var t=Ye;if(le.paddingTop||le.paddingBottom){var n=e;q(n,p)||(n=me(e,h));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=Ye-o}return t}function Kn(e,t){t?Vn(We):Wn(We),J(We,oo(e)),Be.test.translate3d=e,setTimeout(function(){fe(We,i)},10)}function _n(e){var t=_(h+'[data-anchor="'+e+'"]',We)[0];if(!t){var n=void 0!==e?e-1:0;t=_(h)[n]}return t}function $n(e,t){var n=_n(e);if(null!=n){var o=function(e,t){var n=_(C+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=_(C,t)[e]),n}(t,n);Jn(n)===Re||q(n,s)?qn(o):un(n,function(){qn(o)})}}function qn(e){null!=e&&Nn(me(e,B),e)}function Qn(e,t,n,o){var r="";le.anchors.length&&!le.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Ne=t,Gn(r+"/"+t)):null!=e?(Ne=t,Gn(n)):Gn(n)),Zn()}function Gn(t){if(le.recordHistory)location.hash=t;else if(De||Ve)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function Jn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=ie(e);return null==t&&(t=n),t}function Zn(){var e=_(g)[0],t=_(H,e)[0],n=Jn(e),o=Jn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+c+"-[^\\s]+\\b","g");Ce.className=Ce.className.replace(i,""),ue(Ce,c+"-"+r)}function eo(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,Ve&&on(e)&&le.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function to(e,t){Ot(0,"internal"),void 0!==t&&(Ue=!0),Nn(me(e,B),e),void 0!==t&&(Ue=!1),Ot(dt.scrollingSpeed,"internal")}function no(e){var t=Math.round(e);if(le.css3&&le.autoScrolling&&!le.scrollBar)Kn("translate3d(0px, -"+t+"px, 0px)",!1);else if(le.autoScrolling&&!le.scrollBar)J(We,{top:-t+"px"}),Be.test.top=-t+"px";else{var n=pn(t);co(n.element,n.options)}}function oo(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function ro(e,t,n){"all"!==t?$e[n][t]=e:Object.keys($e[n]).forEach(function(t){$e[n][t]=e})}function io(e,t,n){le[e]=t,"internal"!==n&&(dt[e]=t)}function lo(){var e=le.licenseKey,t="font-size: 15px;background:yellow;";se?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(K("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),K("error","https://github.com/alvarotrigo/fullPage.js#options.")),q(be,a)?K("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(le.continuousVertical&&(le.loopTop||le.loopBottom)&&(le.continuousVertical=!1,K("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!le.scrollOverflow||!le.scrollBar&&le.autoScrolling||K("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!le.continuousVertical||!le.scrollBar&&le.autoScrolling||(le.continuousVertical=!1,K("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),le.scrollOverflow&&null==le.scrollOverflowHandler&&(le.scrollOverflow=!1,K("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),ht.forEach(function(e){le[e]&&K("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)}),le.anchors.forEach(function(e){var t=[].slice.call(_("[name]")).filter(function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()}),n=[].slice.call(_("[id]")).filter(function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()});if(n.length||t.length){K("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||t.length)&&K("error",'"'+e+'" is is being used by another element `'+o+"` property")}}))}function ao(t,n,o,r){var i=function(t){return t.self!=e&&q(t,I)?t.scrollLeft:!le.autoScrolling||le.scrollBar?ye():t.offsetTop}(t),l=n-i,a=0;st=!0;var c=function(){if(st){var s=n;a+=20,o&&(s=e.fp_easings[le.easing](a,i,l,o)),co(t,s),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function co(t,n){!le.autoScrolling||le.scrollBar||t.self!=e&&q(t,I)?t.self!=e&&q(t,I)?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function so(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=ie(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function uo(e){so.call(this,e,h)}function fo(e){so.call(this,e,C)}lo()}}),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e});new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);
},{}],"RWcn":[function(require,module,exports) {

},{}],"epB2":[function(require,module,exports) {
"use strict";var e=i(require("fullpage.js"));function i(e){return e&&e.__esModule?e:{default:e}}require("fullpage.js/dist/fullpage.min.css"),new e.default("#fullpage",{autoScrolling:!0,navigation:!0,navigationPosition:"left",navigationTooltips:["Main","Sale","Newsletter","Social"],fadingEffect:!0,recordHistory:!1,easing:"easeInOutCubic",dragAndMove:!0});
},{"fullpage.js":"NJdl","fullpage.js/dist/fullpage.min.css":"RWcn"}]},{},["epB2"], null)
//# sourceMappingURL=/main.ebd14962.js.map