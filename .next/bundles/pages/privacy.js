module.exports=__NEXT_REGISTER_PAGE("/privacy",function(){var e=webpackJsonp([2],{19:function(e,t,r){"use strict";var n=r(20);var o=r(50);var a="function"===typeof Symbol&&"symbol"===typeof Symbol();var i=Object.prototype.toString;var l=function(e){return"function"===typeof e&&"[object Function]"===i.call(e)};var u=function(){var e={};try{Object.defineProperty(e,"x",{enumerable:false,value:e});for(var t in e)return false;return e.x===e}catch(e){return false}};var s=Object.defineProperty&&u();var c=function(e,t,r,n){if(t in e&&(!l(n)||!n()))return;s?Object.defineProperty(e,t,{configurable:true,enumerable:false,value:r,writable:true}):e[t]=r};var f=function(e,t){var r=arguments.length>2?arguments[2]:{};var i=n(t);a&&(i=i.concat(Object.getOwnPropertySymbols(t)));o(i,function(n){c(e,n,t[n],r[n])})};f.supportsDescriptors=!!s;e.exports=f},20:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty;var o=Object.prototype.toString;var a=Array.prototype.slice;var i=r(49);var l=Object.prototype.propertyIsEnumerable;var u=!l.call({toString:null},"toString");var s=l.call(function(){},"prototype");var c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var f=function(e){var t=e.constructor;return t&&t.prototype===e};var p={$console:true,$external:true,$frame:true,$frameElement:true,$frames:true,$innerHeight:true,$innerWidth:true,$outerHeight:true,$outerWidth:true,$pageXOffset:true,$pageYOffset:true,$parent:true,$scrollLeft:true,$scrollTop:true,$scrollX:true,$scrollY:true,$self:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$window:true};var y=function(){if("undefined"===typeof window)return false;for(var e in window)try{if(!p["$"+e]&&n.call(window,e)&&null!==window[e]&&"object"===typeof window[e])try{f(window[e])}catch(e){return true}}catch(e){return true}return false}();var v=function(e){if("undefined"===typeof window||!y)return f(e);try{return f(e)}catch(e){return false}};var d=function e(t){var r=null!==t&&"object"===typeof t;var a="[object Function]"===o.call(t);var l=i(t);var f=r&&"[object String]"===o.call(t);var p=[];if(!r&&!a&&!l)throw new TypeError("Object.keys called on a non-object");var y=s&&a;if(f&&t.length>0&&!n.call(t,0))for(var d=0;d<t.length;++d)p.push(String(d));if(l&&t.length>0)for(var h=0;h<t.length;++h)p.push(String(h));else for(var m in t)y&&"prototype"===m||!n.call(t,m)||p.push(String(m));if(u){var b=v(t);for(var g=0;g<c.length;++g)b&&"constructor"===c[g]||!n.call(t,c[g])||p.push(c[g])}return p};d.shim=function e(){if(Object.keys){var t=function(){return 2===(Object.keys(arguments)||"").length}(1,2);if(!t){var r=Object.keys;Object.keys=function e(t){return i(t)?r(a.call(t)):r(t)}}}else Object.keys=d;return Object.keys||d};e.exports=d},21:function(e,t,r){"use strict";var n=r(20);var o=r(22);var a=function(e){return"undefined"!==typeof e&&null!==e};var i=r(52)();var l=Object;var u=o.call(Function.call,Array.prototype.push);var s=o.call(Function.call,Object.prototype.propertyIsEnumerable);var c=i?Object.getOwnPropertySymbols:null;e.exports=function e(t,r){if(!a(t))throw new TypeError("target must be an object");var o=l(t);var f,p,y,v,d,h,m;for(f=1;f<arguments.length;++f){p=l(arguments[f]);v=n(p);var b=i&&(Object.getOwnPropertySymbols||c);if(b){d=b(p);for(y=0;y<d.length;++y){m=d[y];s(p,m)&&u(v,m)}}for(y=0;y<v.length;++y){m=v[y];h=p[m];s(p,m)&&(o[m]=h)}}return o}},214:function(e,t,r){e.exports=r(215)},215:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(0);var o=r.n(n);var a=r(43);var i=r.n(a);var l=r(40);var u=r.n(l);var s=r(7);var c=r.n(s);var f=r(41);var p=r(42);var y=function e(){return o.a.createElement("div",{className:"container-fluid",itemScope:true,itemType:"http://schema.org/WebPage"},o.a.createElement(u.a,null,o.a.createElement("title",null,"privacy | amagazi"),o.a.createElement("meta",{name:"description",content:"A full-service digital agency experienced in branding, business strategy, and crafting share-worthy consumer experiences. We don't walk the line, we create it."}),o.a.createElement("meta",{name:"keywords",content:"creative agency, business strategy, digital advertising"}),o.a.createElement("meta",{name:"author",content:"amagazi"}),o.a.createElement("style",{dangerouslySetInnerHTML:{__html:c.a}})),o.a.createElement(f["a"],null),o.a.createElement("div",{className:"row top-row"},o.a.createElement("div",{className:"showdeck ml-md-4 col-lg-7 order-lg-7",itemScope:true},o.a.createElement("h1",{className:"pb-4 pt-4"},"privacy statement"),o.a.createElement("h3",null,"Individual User Information that You Submit"),o.a.createElement("p",null,"amagazi may store personally identifiable information that you submitted to our site. Such information may include your name, address, phone number, email, or personal correspondence to our team."),o.a.createElement("h3",null,"Non-Individual User Information Collected by amagazi"),o.a.createElement("p",null,"amagazi may also gather and store user contact information such as internet browser type, demographic data, type of device, device OS, peripheral use, software use, browsing history on our site, and the domain you visited prior to coming to our site. This data may be compiled to track groups of users and not specific individuals. We reserve the right to share non-individual user information for promotional, advertising, or other related purposes. The following link explains how Google Analytics collects and processes data:",o.a.createElement("a",{href:"www.google.com/policies/privacy/partners/"},"Google Privacy"),"."),o.a.createElement("h3",null,"Use of Individual Information"),o.a.createElement("p",null,"We use your individual user information only to communicate with you about our services and products, or those of our clients. We will only share your individual user information with subsidiaries of amagazi, strategic partners and affiliates, clients in compliance with our privacy policy, or technical support entities who maintain our site.",o.a.createElement("br",null),o.a.createElement("br",null),"We may also compile data from other sites with data obtained through or in connection with our site. We reserve the right to transfer data to purchasers of our site assets or purchasers of our agency or divisions of our agency.",o.a.createElement("br",null),o.a.createElement("br",null),"We reserve, as well, the right to store, access, and disclose any data so required by courts or government agencies. We also reserve the right to investigate any alleged harassment, fraudulent activities, or any suspected violation of criminal law, regulatory guideline, or civil statute."),o.a.createElement("h3",null,"Cookies"),o.a.createElement("p",null,"Technology such as cookies are used to gather non-individual user data from you for the purposes of customizing your usage of our site and analyzing demographic data. Cookies are data packets that many websites place on your hard drive when you browse through them. Information in these cookies is used to track the pages you visit. You have the option of configuring your web browser to reject cookies and/or notify you that a cookie is being sent to you. You can also remove cookies from your browser. Please be advised, however, that disabling cookies may limit your ability to navigate our site."),o.a.createElement("h3",null,"Third Party Links"),o.a.createElement("p",null,"We may publish third party links on our site. We are not responsible for the privacy policies and/or practices of these sites."),o.a.createElement("h3",null,"Opt-Out Policy"),o.a.createElement("p",null,"Should you no longer wish to receive information, you may opt out from our correspondence list. You may also request to remove your information from our database of active users. Should you choose to do so, please send an email with “Privacy” in the subject line. amagazi is not responsible for removing information from third party entities with whom we have shared your information. In the event we remove you from our list of active users, we reserve the right to keep data in our archives for business reasons."),o.a.createElement("h3",null,"Changing Information"),o.a.createElement("p",null,"You may change your individual user information by contacting us directly. amagazi is not responsible for changing information in third party databases."),o.a.createElement("h3",null,"Security"),o.a.createElement("p",null,"We take every possible measure to ensure data security on our site. However, due to the nature of the internet, we cannot completely guarantee that your information will be free from access by third parties such as hackers. Using our site indicates acceptance of this risk."),o.a.createElement("h3",null,"18 and Older"),o.a.createElement("p",null,"It is our policy not to collect personally identifiable information from persons under the age of 18, and we request that such persons do not submit any personally identifiable information to us through the website. Should you be the parent or guardian of a minor who has submitted information to our site, please send an email with “Privacy” in the subject line and request his or her information be deleted.")),o.a.createElement("div",{className:"approach col-lg-4 order-lg-4 ml-md-4 pl-md-2",itemScope:true},o.a.createElement("h2",{className:"subtitle"},"amagazi respects your privacy."),o.a.createElement("p",null,"We have implemented a privacy policy that outlines the use of personally identifiable information on our site. Please understand that by using our site you are agreeing with our policy."))),o.a.createElement(p["a"],null))};t["default"]=y},22:function(e,t,r){"use strict";var n=r(51);e.exports=Function.prototype.bind||n},23:function(e,t,r){"use strict";var n=r(21);var o=function(){if(!Object.assign)return false;var e="abcdefghijklmnopqrst";var t=e.split("");var r={};for(var n=0;n<t.length;++n)r[t[n]]=t[n];var o=Object.assign({},r);var a="";for(var i in o)a+=i;return e!==a};var a=function(){if(!Object.assign||!Object.preventExtensions)return false;var e=Object.preventExtensions({1:2});try{Object.assign(e,"xy")}catch(t){return"y"===e[1]}return false};e.exports=function e(){if(!Object.assign)return n;if(o())return n;if(a())return n;return Object.assign}},43:function(e,t,r){e.exports=r(44)},44:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=r(30);var o=_(n);var a=r(45);var i=_(a);var l=r(16);var u=_(l);var s=r(5);var c=_(s);var f=r(6);var p=_(f);var y=r(17);var v=_(y);var d=r(18);var h=_(d);var m=r(64);var b=r(0);var g=_(b);var w=r(26);var O=_(w);var j=r(47);var E=_(j);var k=r(15);var S=_(k);var x=r(13);function _(e){return e&&e.__esModule?e:{default:e}}var P=function(e){(0,h.default)(t,e);function t(e){var r;(0,c.default)(this,t);for(var n=arguments.length,o=Array(n>1?n-1:0),a=1;a<n;a++)o[a-1]=arguments[a];var i=(0,v.default)(this,(r=t.__proto__||(0,u.default)(t)).call.apply(r,[this,e].concat(o)));i.linkClicked=i.linkClicked.bind(i);i.formatUrls(e);return i}(0,p.default)(t,[{key:"componentWillReceiveProps",value:function e(t){this.formatUrls(t)}},{key:"linkClicked",value:function e(t){var r=this;if("A"===t.currentTarget.nodeName&&(t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which))return;var n=this.props.shallow;var o=this.href,a=this.as;if(!T(o))return;var i=window.location.pathname;o=(0,m.resolve)(i,o);a=a?(0,m.resolve)(i,a):o;t.preventDefault();var l=this.props.scroll;null==l&&(l=a.indexOf("#")<0);var u=this.props.replace;var s=u?"replace":"push";S.default[s](o,a,{shallow:n}).then(function(e){if(!e)return;if(l){window.scrollTo(0,0);document.body.focus()}}).catch(function(e){r.props.onError&&r.props.onError(e)})}},{key:"prefetch",value:function e(){if(!this.props.prefetch)return;if("undefined"===typeof window)return;var t=window.location.pathname;var r=(0,m.resolve)(t,this.href);S.default.prefetch(r)}},{key:"componentDidMount",value:function e(){this.prefetch()}},{key:"componentDidUpdate",value:function e(t){(0,i.default)(this.props.href)!==(0,i.default)(t.href)&&this.prefetch()}},{key:"formatUrls",value:function e(t){this.href=t.href&&"object"===(0,o.default)(t.href)?(0,m.format)(t.href):t.href;this.as=t.as&&"object"===(0,o.default)(t.as)?(0,m.format)(t.as):t.as}},{key:"render",value:function e(){var t=this.props.children;var r=this.href,n=this.as;"string"===typeof t&&(t=g.default.createElement("a",null,t));var o=b.Children.only(t);var a={onClick:this.linkClicked};!this.props.passHref&&("a"!==o.type||"href"in o.props)||(a.href=n||r);a.href&&"undefined"!==typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(a.href=(0,k._rewriteUrlForNextExport)(a.href));return g.default.cloneElement(o,a)}}]);return t}(b.Component);P.propTypes=(0,E.default)({href:O.default.oneOfType([O.default.string,O.default.object]).isRequired,as:O.default.oneOfType([O.default.string,O.default.object]),prefetch:O.default.bool,replace:O.default.bool,shallow:O.default.bool,passHref:O.default.bool,scroll:O.default.bool,children:O.default.oneOfType([O.default.element,function(e,t){var r=e[t];"string"===typeof r&&$("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");return null}]).isRequired});t.default=P;function T(e){var t=(0,m.parse)(e,false,true);var r=(0,m.parse)((0,x.getLocationOrigin)(),false,true);return!t.host||t.protocol===r.protocol&&t.host===r.host}var $=(0,x.execOnce)(x.warn)},45:function(e,t,r){e.exports={default:r(46),__esModule:true}},46:function(e,t,r){var n=r(1);var o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function e(t){return o.stringify.apply(o,arguments)}},47:function(e,t,r){Object.defineProperty(t,"__esModule",{value:true});t["default"]=h;var n=r(48);var o=s(n);var a=r(54);var i=s(a);var l=r(55);var u=s(l);function s(e){return e&&e.__esModule?e:{default:e}}function c(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true}):e[t]=r;return e}var f="​";var p="prop-types-exact: "+f;var y={};function v(e){return(0,o["default"])(e,c({},p,y))}function d(e){return e&&e[p]===y}function h(e){if(!(0,u["default"])(e))throw new TypeError("given propTypes must be an object");if((0,i["default"])(e,p)&&!d(e[p]))throw new TypeError("Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`");return(0,o["default"])({},e,c({},p,v(function(){function t(t,r,n){var o=Object.keys(t).filter(function(t){return!(0,i["default"])(e,t)});if(o.length>0)return new TypeError(String(n)+": unknown props found: "+String(o.join(", ")));return null}return t}())))}e.exports=t["default"]},48:function(e,t,r){"use strict";var n=r(19);var o=r(21);var a=r(23);var i=r(53);var l=a();n(l,{getPolyfill:a,implementation:o,shim:i});e.exports=l},49:function(e,t,r){"use strict";var n=Object.prototype.toString;e.exports=function e(t){var r=n.call(t);var o="[object Arguments]"===r;o||(o="[object Array]"!==r&&null!==t&&"object"===typeof t&&"number"===typeof t.length&&t.length>=0&&"[object Function]"===n.call(t.callee));return o}},50:function(e,t){var r=Object.prototype.hasOwnProperty;var n=Object.prototype.toString;e.exports=function e(t,o,a){if("[object Function]"!==n.call(o))throw new TypeError("iterator must be a function");var i=t.length;if(i===+i)for(var l=0;l<i;l++)o.call(a,t[l],l,t);else for(var u in t)r.call(t,u)&&o.call(a,t[u],u,t)}},51:function(e,t,r){"use strict";var n="Function.prototype.bind called on incompatible ";var o=Array.prototype.slice;var a=Object.prototype.toString;var i="[object Function]";e.exports=function e(t){var r=this;if("function"!==typeof r||a.call(r)!==i)throw new TypeError(n+r);var l=o.call(arguments,1);var u;var s=function(){if(this instanceof u){var e=r.apply(this,l.concat(o.call(arguments)));if(Object(e)===e)return e;return this}return r.apply(t,l.concat(o.call(arguments)))};var c=Math.max(0,r.length-l.length);var f=[];for(var p=0;p<c;p++)f.push("$"+p);u=Function("binder","return function ("+f.join(",")+"){ return binder.apply(this,arguments); }")(s);if(r.prototype){var y=function e(){};y.prototype=r.prototype;u.prototype=new y;y.prototype=null}return u}},52:function(e,t,r){"use strict";e.exports=function e(){if("function"!==typeof Symbol||"function"!==typeof Object.getOwnPropertySymbols)return false;if("symbol"===typeof Symbol.iterator)return true;var t={};var r=Symbol("test");var n=Object(r);if("string"===typeof r)return false;if("[object Symbol]"!==Object.prototype.toString.call(r))return false;if("[object Symbol]"!==Object.prototype.toString.call(n))return false;var o=42;t[r]=o;for(r in t)return false;if("function"===typeof Object.keys&&0!==Object.keys(t).length)return false;if("function"===typeof Object.getOwnPropertyNames&&0!==Object.getOwnPropertyNames(t).length)return false;var a=Object.getOwnPropertySymbols(t);if(1!==a.length||a[0]!==r)return false;if(!Object.prototype.propertyIsEnumerable.call(t,r))return false;if("function"===typeof Object.getOwnPropertyDescriptor){var i=Object.getOwnPropertyDescriptor(t,r);if(i.value!==o||true!==i.enumerable)return false}return true}},53:function(e,t,r){"use strict";var n=r(19);var o=r(23);e.exports=function e(){var t=o();n(Object,{assign:t},{assign:function(){return Object.assign!==t}});return t}},54:function(e,t,r){var n=r(22);e.exports=n.call(Function.call,Object.prototype.hasOwnProperty)},55:function(e,t){Object.defineProperty(t,"__esModule",{value:true});var r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t["default"]=n;function n(e){return e&&"object"===("undefined"===typeof e?"undefined":r(e))&&!Array.isArray(e)}e.exports=t["default"]}},[214]);return{page:e.default}});