module.exports=__NEXT_REGISTER_PAGE("/services",function(){var e=webpackJsonp([1],{19:function(e,t,r){"use strict";var n=r(20);var a=r(50);var o="function"===typeof Symbol&&"symbol"===typeof Symbol();var l=Object.prototype.toString;var i=function(e){return"function"===typeof e&&"[object Function]"===l.call(e)};var c=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var u=Object.defineProperty&&c();var s=function(e,t,r,n){if(t in e&&(!i(n)||!n()))return;u?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var l=n(t);o&&(l=l.concat(Object.getOwnPropertySymbols(t)));a(l,function(n){s(e,n,t[n],r[n])})};f.supportsDescriptors=!!u;e.exports=f},20:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var a=Object.prototype.toString;var o=Array.prototype.slice;var l=r(49);var i=Object.prototype.propertyIsEnumerable;var c=!i.call({toString:null},"toString");var u=i.call(function(){},"prototype");var s=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var v=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var y=function(e){if("undefined"===typeof window||!v)return f(e);try{return f(e)}catch(e){return false}};var h=function e(t){var r=null!==t&&"object"===typeof t;var o="[object Function]"===a.call(t);var i=l(t);var f=r&&"[object String]"===a.call(t);var p=[];if(!r&&!o&&!i)throw new TypeError("Object.keys called on a non-object");var v=u&&o;if(f&&t.length>0&&!n.call(t,0))for(var h=0;h<t.length;++h)p.push(String(h));if(i&&t.length>0)for(var d=0;d<t.length;++d)p.push(String(d));else for(var m in t)v&&"prototype"===m||!n.call(t,m)||p.push(String(m));if(c){var b=y(t);for(var g=0;g<s.length;++g)b&&"constructor"===s[g]||!n.call(t,s[g])||p.push(s[g])}return p};h.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return l(t)?r(o.call(t)):r(t)}}}else Object.keys=h;return Object.keys||h};e.exports=h},21:function(e,t,r){"use strict";var n=r(20);var a=r(22);var o=function(e){return"undefined"!==typeof e&&null!==e};var l=r(52)();var i=Object;var c=a.call(Function.call,Array.prototype.push);var u=a.call(Function.call,Object.prototype.propertyIsEnumerable);var s=l?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!o(t))throw new TypeError("target must be an object");var a=i(t);var f,p,v,y,h,d,m;for(f=1;f<arguments.length;++f){p=i(arguments[f]);y=n(p);var b=l&&(Object.getOwnPropertySymbols||s);if(b){h=b(p);for(v=0;v<h.length;++v){m=h[v];u(p,m)&&c(y,m)}}for(v=0;v<y.length;++v){m=y[v];d=p[m];u(p,m)&&(a[m]=d)}}return a}},218:function(e,t,r){e.exports=r(219)},219:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var a=r.n(n);var o=r(43);var l=r.n(o);var i=r(40);var c=r.n(i);var u=r(7);var s=r.n(u);var f=r(41);var p=r(42);var v=function e(){return a.a.createElement("div",{className:"container-fluid",itemScope:true,itemType:"http://schema.org/WebPage"},a.a.createElement(c.a,null,a.a.createElement("title",null,"services | amagazi"),a.a.createElement("meta",{name:"description",content:"how we think | branding + corporate identity + UX/UI + market research"}),a.a.createElement("meta",{name:"keywords",content:"creative agency, business strategy, digital advertising"}),a.a.createElement("meta",{name:"author",content:"amagazi"}),a.a.createElement("style",{dangerouslySetInnerHTML:{__html:s.a}})),a.a.createElement(f["a"],null),a.a.createElement("div",{className:"row top-row"},a.a.createElement("div",{className:"showdeck col-lg-8 order-lg-8 embed-responsive embed-responsive-16by9",itemScope:true,itemType:"http://schema.org/VideoObject"},a.a.createElement("iframe",{className:"embed-responsive-item",src:"https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&showinfo=0",allowFullScreen:true,title:"show-deck"})),a.a.createElement("div",{className:"approach col-lg-4 order-lg-4",itemScope:true},a.a.createElement("h1",{className:"title"},"how we think"),a.a.createElement("h2",{className:"subtitles"},"our approach to success"),a.a.createElement("p",null,"We speak human in all we create and only produce work that evokes curiosity. We create the right space around the fundamentals which drive human behavior — touch, taste, smell, sound, and sight. We also recognize staying ahead in the fast lane of growth and longevity is no easy feat for most businesses — that's where our expertise comes in.",a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("a",{id:"cta",href:"mailto:hello@amagazi.com?subject=Hello, amagazi!",itemScope:true,itemType:"http://schema.org/Action"},"Let’s connect.")))),a.a.createElement("div",{className:"row body-row justify-content-center"},a.a.createElement("div",{className:"services col-md-5 mr-md-4",itemScope:true,itemType:"http://schema.org/ItemList"},a.a.createElement("h1",{className:"title"},"areas we ignite"),a.a.createElement("ul",null,a.a.createElement("li",null,"film + video production"),a.a.createElement("li",null,"branding + corporate identity"),a.a.createElement("li",null,"media planning + digital strategy"),a.a.createElement("li",null,"consumer experience + user journey"),a.a.createElement("li",null,"market research + analysis"),a.a.createElement("li",null,"business strategy"))),a.a.createElement("div",{className:"motto col-md-4 subsection",itemScope:true},a.a.createElement("h1",{className:"title"},"how we roll"),a.a.createElement("p",null,"We set the bar high for ourselves because our moms taught us never to settle. And neither should you.",a.a.createElement("br",null),a.a.createElement("br",null),"We make change happen."))),a.a.createElement(p["a"],null))};t["default"]=v},22:function(e,t,r){"use strict";var n=r(51);e.exports=Function.prototype.bind||n},23:function(e,t,r){"use strict";var n=r(21);var a=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var a=Object.assign({},r);var o="";for(var l in a)o+=l;return e!==o};var o=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(a())return n;if(o())return n;return Object.assign}},43:function(e,t,r){e.exports=r(44)},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(30);var a=_(n);var o=r(45);var l=_(o);var i=r(16);var c=_(i);var u=r(5);var s=_(u);var f=r(6);var p=_(f);var v=r(17);var y=_(v);var h=r(18);var d=_(h);var m=r(64);var b=r(0);var g=_(b);var w=r(26);var j=_(w);var O=r(47);var E=_(O);var S=r(15);var k=_(S);var x=r(13);function _(e){return e&&e.__esModule?e:{default:e}}var T=function(e){(0,d.default)(t,e);function t(e){var r;(0,s.default)(this,t);for(var n=arguments.length,a=Array(n>1?n-1:0),o=1;o<n;o++)a[o-1]=arguments[o];var l=(0,y.default)(this,(r=t.__proto__||(0,c.default)(t)).call.apply(r,[this,e].concat(a)));l.linkClicked=l.linkClicked.bind(l);l.formatUrls(e);return l}(0,p.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var a=this.href,o=this.as;if(!P(a))return;var l=window.location.pathname;a=(0,m.resolve)(l,a);o=o?(0,m.resolve)(l,o):a;t.preventDefault();var i=this.props.scroll;null==i&&(i=o.indexOf("#")<0);var c=this.props.replace;var u=c?"replace":"push";k.default[u](a,o,{shallow:n}).then(function(e){if(!e)return;if(i){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,m.resolve)(t,this.href);k.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,l.default)(this.props.href)!==(0,l.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,a.default)(t.href)?(0,m.format)(t.href):t.href;this.as=t.as&&"object"===(0,a.default)(t.as)?(0,m.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=g.default.createElement("a",null,t));var a=b.Children.only(t);var o={onClick:this.linkClicked};!this.props.passHref&&("a"!==a.type||"href"in a.props)||(o.href=n||r);o.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(o.href=(0,S._rewriteUrlForNextExport)(o.href));return g.default.cloneElement(a,o)}}]);return t}(b.Component);T.propTypes=(0,E.default)({href:j.default.oneOfType([j.default.string,j.default.object]).isRequired,as:j.default.oneOfType([j.default.string,j.default.object]),prefetch:j.default.bool,replace:j.default.bool,shallow:j.default.bool,passHref:j.default.bool,scroll:j.default.bool,children:j.default.oneOfType([j.default.element,function(e,t){var r=e[t];"string"===typeof r&&N("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired});t.default=T;function P(e){var t=(0,m.parse)(e,false,true);var r=(0,m.parse)((0,x.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var N=(0,x.execOnce)(x.warn)},45:function(e,t,r){e.exports={default:r(46),__esModule:true}},46:function(e,t,r){var n=r(1);var a=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return a.stringify.apply(a,arguments)}},47:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=d;var n=r(48);var a=u(n);var o=r(54);var l=u(o);var i=r(55);var c=u(i);function u(e){return e&&e.__esModule?e:{default:e}}function s(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var v={};function y(e){return(0,a["default"])(e,s({},p,v))}function h(e){return e&&e[p]===v}function d(e){if(!(0,c["default"])(e))throw new TypeError("given propTypes must be an object");if((0,l["default"])(e,p)&&!h(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,a["default"])({},e,s({},p,y(function(){function t(t,r,n){var a=Object.keys(t).filter(function(t){return!(0,l["default"])(e,t)});if(a.length>0)return new TypeError(String(n)+": unknown props found: "+String(a.join(", ")));return null}return t}())))}e.exports=t["default"]},48:function(e,t,r){"use strict";var n=r(19);var a=r(21);var o=r(23);var l=r(53);var i=o();n(i,{getPolyfill:o,implementation:a,shim:l});e.exports=i},49:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var a="[object Arguments]"===r;a||(a="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return a}},50:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,a,o){if("[object Function]"!==n.call(a))throw new TypeError("iterator must be a function");var l=t.length;if(l===+l)for(var i=0;i<l;i++)a.call(o,t[i],i,t);else for(var c in t)r.call(t,c)&&a.call(o,t[c],c,t)}},51:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var a=Array.prototype.slice;var o=Object.prototype.toString;var l="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||o.call(r)!==l)throw new TypeError(n+r);var i=a.call(arguments,1);var c;var u=function(){if(this instanceof c){var e=r.apply(this,i.concat(a.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,i.concat(a.call(arguments)))};var s=Math.max(0,r.length-i.length);var f=[];for(var p=0;p<s;p++)f.push("$"+p);c=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(u);if(r.prototype){var v=function e(){};v.prototype=r.prototype;c.prototype=new v;v.prototype=null}return c}},52:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var a=42;t[r]=a;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var o=Object.getOwnPropertySymbols(t);if(1!==o.length||o[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var l=Object.getOwnPropertyDescriptor(t,r);if(l.value!==a||true!==l.enumerable)return false}return true}},53:function(e,t,r){"use strict";var n=r(19);var a=r(23);e.exports=function e(){var t=a();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},54:function(e,t,r){var n=r(22);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},55:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]}},[218]);return{page:e.default}});