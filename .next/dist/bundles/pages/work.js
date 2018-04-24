module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: 'Stevie Sans';\n  src: url(/static/titleFont/steviesanslight-webfont.woff) format(\"woff\"), url(/static/titleFont/steviesanslight-webfont.woff2) format(\"woff2\"); }\n\n@font-face {\n  font-family: 'IA Writer';\n  src: url(/static/titleFont/iawriterduospace-regular-webfont.woff) format(\"woff\"), url(/static/titleFont/iawriterduospace-regular-webfont.woff2) format(\"woff2\"); }\n\nhtml, body {\n  background-color: black; }\n\nbody {\n  margin: 0;\n  padding: 50px 15px 0px 15px;\n  color: white;\n  font-family: \"Stevie Sans\", sans-serif !important; }\n\na {\n  color: white; }\n\na:hover {\n    color: #FFC425 !important;\n    text-decoration: none;\n    text-decoration: line-through !important; }\n\na:active {\n    color: #FFC425 !important; }\n\na:visited {\n    color: white;\n    text-decoration: none; }\n\nul, li {\n  text-decoration: none;\n  list-style: none;\n  padding: 0; }\n\nh1, h2, h3, h4, h5, h6, .navbar-brand {\n  font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n#cta {\n  color: #FFC425; }\n\n.navbar .navbar-brand {\n  color: #FFC425; }\n\n.navbar ul {\n  min-height: 1200px;\n  font-size: 3em;\n  padding-top: 2em;\n  text-align: center;\n  font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n.navbar .navbar-toggler:focus, .navbar .navbar-toggler:active {\n  outline: none !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.container-fluid, .navbar {\n  background-color: black; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: white; }\n\n.homepage {\n  display: none; }\n\n.title {\n  font-size: 2em; }\n\n.subtitles {\n  font-size: 1.25em; }\n\n.title, .subtitles, .footer-copyright {\n  font-family: \"IA Writer\", \"Courier New\", monospace !important; }\n\n.page-footer {\n  border-top: 2px solid white; }\n\n.page-footer .container-fluid {\n    padding-top: 1em;\n    padding-bottom: 1em;\n    font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n.page-footer .footer-copyright {\n    border-top: 2px solid white;\n    color: #757575;\n    opacity: .3; }\n\n.page-footer .footer-copyright a {\n      color: #757575; }\n\n.footer-copyright {\n  color: #757575;\n  opacity: .3; }\n\n.footer-copyright a {\n    color: #757575; }\n\n.top-row {\n  padding-top: 2em; }\n\n.top-row .single-title {\n    padding-bottom: 1em; }\n\n.top-row .showdeck {\n    padding: 0; }\n\n.top-row .approach {\n    padding-top: 2em; }\n\n.videos .showdeck2 {\n  margin-top: 2em; }\n\n.body-row {\n  padding-top: 2em; }\n\n.body-row .single-title {\n    padding-bottom: 1em; }\n\n.body-row .showdeck {\n    padding: 0; }\n\n.body-row .services ul {\n    padding-left: 0em; }\n\n.subsection {\n  padding-top: 2em; }\n\n.case-divider {\n  border: 1px solid white;\n  opacity: .25; }\n\n/* team cards */\n\n.team-slide {\n  display: none; }\n\n.carousel.slide, .carousel-inner {\n  width: 20em auto;\n  margin: 0 auto;\n  overflow: hidden;\n  min-height: 560px; }\n\n.card {\n  background-color: black;\n  margin: 0 auto;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 1px 8px 0 rgba(255, 255, 255, 0.85);\n          box-shadow: 0 1px 8px 0 rgba(255, 255, 255, 0.85);\n  -webkit-transition: ease-out 0.3s;\n  transition: ease-out 0.3s; }\n\n.card h4 {\n    font-size: 1.25em; }\n\n.card h5 {\n    font-size: 1.1em; }\n\n.card .card-body {\n    height: 300px;\n    border-right: .5px solid #757575;\n    border-left: .5px solid #757575;\n    overflow: scroll; }\n\n.card .card-img-top {\n    height: 200px; }\n\n.card .card-text {\n    font-size: .9em; }\n\n.accordion {\n  padding-bottom: 3em; }\n\n.accordion .card {\n    border-top: .5px solid #757575;\n    border-left: none;\n    border-right: none;\n    -webkit-box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.5);\n            box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.5); }\n\n.case-group {\n  display: none; }\n\n.brand-group {\n  margin: 0 auto; }\n\n.brand-group ul {\n    font-size: .85em;\n    width: 130px; }\n\n.logo-slider {\n  max-height: 220px; }\n\n.logo-slider .carousel.slide {\n    max-height: 220px; }\n\n@media (min-width: 576px) {\n  .homepage-mobile {\n    display: none; }\n  .homepage {\n    display: block; }\n  .navbar {\n    padding-left: 40px;\n    padding-right: 40px; }\n  /* team cards */\n  .carousel.slide, .carousel-inner {\n    width: 20em;\n    margin: 0 auto;\n    overflow: hidden;\n    min-height: 560px; }\n  .card {\n    background-color: black;\n    margin: 0 auto;\n    border-radius: 5px;\n    -webkit-transition: ease-out 0.3s;\n    transition: ease-out 0.3s; }\n    .card h4 {\n      font-size: 1.25em; }\n    .card h5 {\n      font-size: 1.1em; }\n    .card .card-body {\n      height: 300px;\n      border-right: .5px solid #757575;\n      border-left: .5px solid #757575;\n      overflow: scroll; }\n    .card .card-img-top {\n      height: 200px; }\n    .card .card-text {\n      font-size: .9em; }\n  .accordion {\n    display: none; }\n  .case-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .list-group-item {\n    background-color: black;\n    color: white; }\n    .list-group-item.active {\n      background-color: #282828;\n      border-color: #FFC425; }\n  .case-studies {\n    max-height: 360px;\n    overflow: scroll; }\n  .brand-group {\n    padding-top: 4em; }\n  .logo-slider {\n    max-height: 340px; }\n    .logo-slider .carousel.slide, .logo-slider .carousel-inner {\n      margin: 0 auto;\n      overflow: hidden;\n      min-height: 0;\n      height: auto;\n      width: 100%; } }\n\n@media (min-width: 768px) {\n  .navbar {\n    position: absolute; }\n  .title {\n    font-size: 3em; }\n  .subtitles {\n    font-size: 1.75em; }\n  p, ul {\n    font-size: 18px; }\n  p {\n    padding-right: 2em; }\n  .top-row {\n    padding-top: 4em; }\n    .top-row .single-title {\n      padding-bottom: 2em; }\n  .videos {\n    padding-bottom: 2em; }\n    .videos .showdeck2 {\n      margin-top: 0; }\n  .body-row {\n    padding-top: 5em; }\n    .body-row .single-title {\n      padding-bottom: 1em; }\n    .body-row .services ul {\n      padding-left: 0em; }\n    .body-row .motto.subsection, .body-row .idea.subsection {\n      padding-top: 0; }\n  .subsection {\n    padding-top: 2em; }\n  /* services */\n  .service-approach .showdeck {\n    max-height: 400px; }\n  .team-cards {\n    display: none; }\n  .team-slide {\n    display: block;\n    padding-top: 2em; }\n    .team-slide .carousel.slide, .team-slide .carousel-inner {\n      margin: 0 auto;\n      overflow: hidden;\n      height: auto;\n      width: 100%; }\n    .team-slide .carousel-multi-item .col-md-4 {\n      float: left;\n      width: 33.333333%;\n      max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .subsection {\n    padding-top: 0; }\n  .brand-group {\n    padding-top: 8em; } }\n";
})();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);





var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a } }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      { className: "navbar fixed-top navbar-dark" },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "navbar-brand", href: "/" },
        "amagazi"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbar" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "navbar-toggler-icon" })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "collapse navbar-collapse justify-content-stretch", id: "navbar" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "ul",
          { className: "navbar-nav ml-auto" },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "/services" },
              "services"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "/about" },
              "about"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "/work" },
              "work"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "https://medium.com/@amagazi", rel: "noopener noreferrer", target: "_blank" },
              "the scoop"
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);





var Footer = function Footer() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "footer",
        { className: "page-footer font-small pt-4 mt-4" },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "container-fluid text-xs-left text-md-left" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "row" },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-6" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { id: "cta", href: "/" },
                            "amagazi"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        null,
                        "A full-service digital agency experienced in branding, business strategy, and crafting share-worthy consumer experiences.",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", null),
                        "We don't walk the line, we create it."
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-4" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        "contact us"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "list-unstyled" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            "7155 old katy road, ste. s255"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            "houston, tx 77024"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "tel:832-304-5500" },
                                "832.304.5500"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "mailto:hello@amagazi.com?subject=Hello, amagazi!" },
                                "hello@amagazi.com"
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-2" },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        null,
                        "follow us"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "list-unstyled" },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://www.linkedin.com/company/amagazi/", rel: "noopener noreferrer", target: "_blank" },
                                "linkedin"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://twitter.com/amagaziagency", rel: "noopener noreferrer", target: "_blank" },
                                "twitter"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://www.facebook.com/amagazi", rel: "noopener noreferrer", target: "_blank" },
                                "facebook"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://www.medium.com/@amagazi", rel: "noopener noreferrer", target: "_blank" },
                                "the scoop"
                            )
                        )
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "footer-copyright py-3 text-center" },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                null,
                "\xA9 2018 copyright |",
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/privacy" },
                    " privacy "
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(5);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(2);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./styles/index.scss
var styles = __webpack_require__(1);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// EXTERNAL MODULE: ./components/navigation.js
var navigation = __webpack_require__(3);

// EXTERNAL MODULE: ./components/footer.js
var footer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/accordion.js





var accordion_Accordion = function Accordion() {
    return external__react__default.a.createElement(
        "div",
        { className: "accordion accordion-7 col-xs-12 col-md-6", id: "accordionEx2", role: "tablist", "aria-multiselectable": "true" },
        external__react__default.a.createElement("style", { dangerouslySetInnerHTML: { __html: styles_default.a } }),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading10" },
                external__react__default.a.createElement(
                    "a",
                    { "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse10", "aria-expanded": "false", "aria-controls": "collapse10" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "cpg"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse10", className: "collapse", role: "tabpanel", "aria-labelledby": "heading10", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "snacktime bonding"
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "opportunity"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Gain market share in the growing snack category and create an ownable and entertaining solution to reposition snacktime as a fun, cross-generational family activity."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "strategy"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Reworked the traditional product package graphics and typography to evolve the brand\u2019s personality, expand the audience, and help create a distinct snacktime experience."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "success"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Positioned the brand\u2019s core values of fun, taste, family, and excitement which rejuvenated shopper perception of the brand\u2019s rich and iconic heritage. Our team utilized this concept for the rebrand of product line extensions in the same fashion."
                    ),
                    external__react__default.a.createElement("hr", { className: "case-divider" }),
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "staycation of smiles"
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "opportunity"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Create a family-friendly and memorable way to drive product sales within the Hispanic market."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "strategy"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Partnered with Walmart to create an activity and product-pairing guide for family staycations."
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Beyond in-store sampling, shoppers received activity ideas and product suggestions (i.e. games, movies, etc.) for the family to enjoy together."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "success"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "The event resulted in a 471% sales lift the day of the in-store demo, which significantly impacted both brand sales and retailer\u2019s general sales. The brand effectively reached and connected with Hispanic moms for the first time at a major retail level."
                    ),
                    external__react__default.a.createElement("hr", { className: "case-divider" }),
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "craveable satisfaction"
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "opportunity"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Develop and grow brand awareness for a product line launch at a major retailer."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "strategy"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Created a 360-degree digital engagement platform based on the overarching concept:",
                        external__react__default.a.createElement(
                            "i",
                            null,
                            " As craveable and satisfying as a restaurant meal"
                        ),
                        "."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "success"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Secured first-time competitive brand placement in robust soup, sauces, sides category at major retail level, which increased shoppers\u2019 selection for restaurant-quality dinnertime."
                    )
                )
            )
        ),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading11" },
                external__react__default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse11", "aria-expanded": "false", "aria-controls": "collapse11" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "construction"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse11", className: "collapse", role: "tabpanel", "aria-labelledby": "heading11", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "building business"
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "opportunity"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Establish a high level of client trust and credibility within the construction industry in order to attract more RFP opportunities."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "strategy"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Designed a modern, informative, and user-friendly website to engage prospective clients through an interactive user-flow."
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Created brand messaging that emphasized notable projects, safety, and expertise."
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Incorporated bold and contemporary web design elements which translated beyond web."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "success"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "This digital rebrand broke the mold within traditional category messaging and design. This new brand perception gained more consulting contracts and RFP wins for the company."
                    )
                )
            )
        ),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading12" },
                external__react__default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse12", "aria-expanded": "false", "aria-controls": "collapse12" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "law"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse12", className: "collapse", role: "tabpanel", "aria-labelledby": "heading12", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "lucky ticket"
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "opportunity"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Design a new logo and create a brand strategy to acquire and increase new-client traffic."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "strategy"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Created insight-driven, humorous brand messaging through print and OOH to elicit legal trust and guidance for new clients."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "success"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Increased brand awareness and created a unique messaging approach that engaged clients through relatable human insight:",
                        external__react__default.a.createElement(
                            "i",
                            null,
                            " Behind every traffic ticket, there\u2019s a story that matters. A story with the power to successfully dispute what most people accept\u2014a tainted driving record and an increased insurance rate."
                        )
                    )
                )
            )
        ),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading13" },
                external__react__default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse13", "aria-expanded": "true", "aria-controls": "collapse13" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "education"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse13", className: "collapse", role: "tabpanel", "aria-labelledby": "heading13", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "class above the rest"
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "opportunity"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Increase brand awareness, student enrollment, and donor contribution."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "strategy"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Implemented a digital campaign across social media platforms to maximize reach within target audience."
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Positioned the school as an exclusive and elite educational institution to resonate with parents\u2019 motivation for enrollment."
                    ),
                    external__react__default.a.createElement(
                        "h4",
                        null,
                        "success"
                    ),
                    external__react__default.a.createElement(
                        "p",
                        null,
                        "Increased parent/student enrollment leads and campaign engagement due to stats-based messaging: 100% of our graduates are accepted to the private high school of their choice."
                    )
                )
            )
        ),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading14" },
                external__react__default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse14", "aria-expanded": "false", "aria-controls": "collapse14" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "financial"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse14", className: "collapse", role: "tabpanel", "aria-labelledby": "heading14", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "coming soon"
                    )
                )
            )
        ),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading15" },
                external__react__default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse15", "aria-expanded": "false", "aria-controls": "collapse15" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "healthcare"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse15", className: "collapse", role: "tabpanel", "aria-labelledby": "heading15", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "coming soon"
                    )
                )
            )
        ),
        external__react__default.a.createElement(
            "div",
            { className: "card" },
            external__react__default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading16" },
                external__react__default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse16", "aria-expanded": "false", "aria-controls": "collapse16" },
                    external__react__default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center" },
                        "hospitality"
                    )
                )
            ),
            external__react__default.a.createElement(
                "div",
                { id: "collapse16", className: "collapse", role: "tabpanel", "aria-labelledby": "heading16", "data-parent": "#accordionEx2" },
                external__react__default.a.createElement(
                    "div",
                    { className: "card-body white-text" },
                    external__react__default.a.createElement(
                        "h3",
                        null,
                        "coming soon"
                    )
                )
            )
        )
    );
};

/* harmony default export */ var accordion = (accordion_Accordion);
// CONCATENATED MODULE: ./components/listgroup.js





var listgroup_ListGroup = function ListGroup() {
  return external__react__default.a.createElement(
    "div",
    { className: "case-group" },
    external__react__default.a.createElement("style", { dangerouslySetInnerHTML: { __html: styles_default.a } }),
    external__react__default.a.createElement(
      "div",
      { "class": "col-md-4" },
      external__react__default.a.createElement(
        "div",
        { "class": "list-group", id: "list-tab", role: "tablist" },
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action active", id: "list-cpg-list", "data-toggle": "list", href: "#list-cpg", role: "tab", "aria-controls": "cpg" },
          "cpg"
        ),
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-con-list", "data-toggle": "list", href: "#list-con", role: "tab", "aria-controls": "con" },
          "construction"
        ),
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-law-list", "data-toggle": "list", href: "#list-law", role: "tab", "aria-controls": "law" },
          "law"
        ),
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-edu-list", "data-toggle": "list", href: "#list-edu", role: "tab", "aria-controls": "edu" },
          "education"
        ),
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-fin-list", "data-toggle": "list", href: "#list-fin", role: "tab", "aria-controls": "fin" },
          "financial"
        ),
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-health-list", "data-toggle": "list", href: "#list-health", role: "tab", "aria-controls": "health" },
          "healthcare"
        ),
        external__react__default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-hosp-list", "data-toggle": "list", href: "#list-hosp", role: "tab", "aria-controls": "hosp" },
          "hospitality"
        )
      )
    ),
    external__react__default.a.createElement(
      "div",
      { "class": "col-md-8 case-studies" },
      external__react__default.a.createElement(
        "div",
        { "class": "tab-content", id: "nav-tabContent" },
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade show active", id: "list-cpg", role: "tabpanel", "aria-labelledby": "list-cpg-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "snacktime bonding"
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "opportunity"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Gain market share in the growing snack category and create an ownable and entertaining solution to reposition snacktime as a fun, cross-generational family activity."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "strategy"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Reworked the traditional product package graphics and typography to evolve the brand\u2019s personality, expand the audience, and help create a distinct snacktime experience."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "success"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Positioned the brand\u2019s core values of fun, taste, family, and excitement which rejuvenated shopper perception of the brand\u2019s rich and iconic heritage. Our team utilized this concept for the rebrand of product line extensions in the same fashion."
          ),
          external__react__default.a.createElement("hr", { className: "case-divider" }),
          external__react__default.a.createElement(
            "h3",
            null,
            "staycation of smiles"
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "opportunity"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Create a family-friendly and memorable way to drive product sales within the Hispanic market."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "strategy"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Partnered with Walmart to create an activity and product-pairing guide for family staycations."
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Beyond in-store sampling, shoppers received activity ideas and product suggestions (i.e. games, movies, etc.) for the family to enjoy together."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "success"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "The event resulted in a 471% sales lift the day of the in-store demo, which significantly impacted both brand sales and retailer\u2019s general sales. The brand effectively reached and connected with Hispanic moms for the first time at a major retail level."
          ),
          external__react__default.a.createElement("hr", { className: "case-divider" }),
          external__react__default.a.createElement(
            "h3",
            null,
            "craveable satisfaction"
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "opportunity"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Develop and grow brand awareness for a product line launch at a major retailer."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "strategy"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Created a 360-degree digital engagement platform based on the overarching concept:",
            external__react__default.a.createElement(
              "i",
              null,
              " As craveable and satisfying as a restaurant meal"
            ),
            "."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "success"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Secured first-time competitive brand placement in robust soup, sauces, sides category at major retail level, which increased shoppers\u2019 selection for restaurant-quality dinnertime."
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-con", role: "tabpanel", "aria-labelledby": "list-con-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "building business"
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "opportunity"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Establish a high level of client trust and credibility within the construction industry in order to attract more RFP opportunities."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "strategy"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Designed a modern, informative, and user-friendly website to engage prospective clients through an interactive user-flow."
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Created brand messaging that emphasized notable projects, safety, and expertise."
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Incorporated bold and contemporary web design elements which translated beyond web."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "success"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "This digital rebrand broke the mold within traditional category messaging and design. This new brand perception gained more consulting contracts and RFP wins for the company."
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-law", role: "tabpanel", "aria-labelledby": "list-law-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "lucky ticket"
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "opportunity"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Design a new logo and create a brand strategy to acquire and increase new-client traffic."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "strategy"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Created insight-driven, humorous brand messaging through print and OOH to elicit legal trust and guidance for new clients."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "success"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Increased brand awareness and created a unique messaging approach that engaged clients through relatable human insight:",
            external__react__default.a.createElement(
              "i",
              null,
              " Behind every traffic ticket, there\u2019s a story that matters. A story with the power to successfully dispute what most people accept\u2014a tainted driving record and an increased insurance rate."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-edu", role: "tabpanel", "aria-labelledby": "list-edu-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "class above the rest"
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "opportunity"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Increase brand awareness, student enrollment, and donor contribution."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "strategy"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Implemented a digital campaign across social media platforms to maximize reach within target audience."
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Positioned the school as an exclusive and elite educational institution to resonate with parents\u2019 motivation for enrollment."
          ),
          external__react__default.a.createElement(
            "h4",
            null,
            "success"
          ),
          external__react__default.a.createElement(
            "p",
            null,
            "Increased parent/student enrollment leads and campaign engagement due to stats-based messaging: 100% of our graduates are accepted to the private high school of their choice."
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-fin", role: "tabpanel", "aria-labelledby": "list-fin-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "coming soon"
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-health", role: "tabpanel", "aria-labelledby": "list-health-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "coming soon"
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-hosp", role: "tabpanel", "aria-labelledby": "list-hosp-list" },
          external__react__default.a.createElement(
            "h3",
            null,
            "coming soon"
          )
        )
      )
    )
  );
};

/* harmony default export */ var listgroup = (listgroup_ListGroup);
// CONCATENATED MODULE: ./components/logos.js





var logos_Logos = function Logos() {
  return external__react__default.a.createElement(
    "div",
    { className: "logo-slider" },
    external__react__default.a.createElement("style", { dangerouslySetInnerHTML: { __html: styles_default.a } }),
    external__react__default.a.createElement(
      "div",
      { className: "carousel slide", "data-ride": "carousel", "data-interval": "70000" },
      external__react__default.a.createElement(
        "div",
        { className: "carousel-inner" },
        external__react__default.a.createElement(
          "div",
          { className: "carousel-item active" },
          external__react__default.a.createElement("img", { className: "img-fluid d-block w-100", src: "/static/logos_01.gif", alt: "First slide" })
        ),
        external__react__default.a.createElement(
          "div",
          { className: "carousel-item" },
          external__react__default.a.createElement("img", { className: "img-fluid d-block w-100", src: "/static/logos_02.gif", alt: "Second slide" })
        ),
        external__react__default.a.createElement(
          "div",
          { className: "carousel-item" },
          external__react__default.a.createElement("img", { className: "img-fluid d-block w-100", src: "/static/logos_03.gif", alt: "Third slide" })
        )
      )
    )
  );
};

/* harmony default export */ var logos = (logos_Logos);
// CONCATENATED MODULE: ./components/brands.js







var brands_Brands = function Brands() {
  return external__react__default.a.createElement(
    'div',
    { className: 'brand-group' },
    external__react__default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles_default.a } }),
    external__react__default.a.createElement(
      'div',
      { className: 'container text-md-left' },
      external__react__default.a.createElement(
        'div',
        { className: 'row' },
        external__react__default.a.createElement(
          'div',
          { className: 'col-md-4' },
          external__react__default.a.createElement(logos, null)
        ),
        external__react__default.a.createElement('hr', { className: 'w-100 d-md-none' }),
        external__react__default.a.createElement(
          'div',
          { className: 'col-md-2 mx-auto' },
          external__react__default.a.createElement(
            'div',
            { className: 'row mx-auto justify-content-around' },
            external__react__default.a.createElement(
              'div',
              { className: 'col-xs-6' },
              external__react__default.a.createElement(
                'ul',
                { className: 'list-unstyled' },
                external__react__default.a.createElement(
                  'li',
                  null,
                  'BMW'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Cadbury'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Direct Energy'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Exxon'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Campbell\'s'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Pepperidge Farm'
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'col-xs-6' },
              external__react__default.a.createElement(
                'ul',
                { className: 'list-unstyled' },
                external__react__default.a.createElement(
                  'li',
                  null,
                  'General Mills'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Houston Rising'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Fully Raw'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'LA Economic Development'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Green Seed Vegan'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Trelleborg'
                )
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'col-md-2 mx-auto' },
          external__react__default.a.createElement(
            'div',
            { className: 'row mx-auto justify-content-around' },
            external__react__default.a.createElement(
              'div',
              { className: 'col-xs-6' },
              external__react__default.a.createElement(
                'ul',
                { className: 'list-unstyled' },
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Kraft'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Maxwell House'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Gutier Roofing'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Johnsen Law'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Markowitz Law'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Miller Lite'
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'col-xs-6' },
              external__react__default.a.createElement(
                'ul',
                { className: 'list-unstyled' },
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Mission'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'NRG'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Quilted Northern'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Monster Worldwide, Inc.'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'SCFD'
                )
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          { className: 'col-md-2 mx-auto' },
          external__react__default.a.createElement(
            'div',
            { className: 'row mx-auto justify-content-around' },
            external__react__default.a.createElement(
              'div',
              { className: 'col-xs-6' },
              external__react__default.a.createElement(
                'ul',
                { className: 'list-unstyled' },
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Reliant Energy'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Rich\'s Foods'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Sonic'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Texaco'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Tyson'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'VW'
                )
              )
            ),
            external__react__default.a.createElement(
              'div',
              { className: 'col-xs-6' },
              external__react__default.a.createElement(
                'ul',
                { className: 'list-unstyled' },
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Walmart'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Saint Theresa Catholic School'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Webb Gallery'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Krewe du Optic'
                ),
                external__react__default.a.createElement(
                  'li',
                  null,
                  'Old New Orleans Rum'
                )
              )
            )
          )
        )
      )
    )
  );
};

/* harmony default export */ var brands = (brands_Brands);
// CONCATENATED MODULE: ./pages/work.js














var work_Work = function Work() {
  return external__react__default.a.createElement(
    'div',
    { className: 'container-fluid' },
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(
        'title',
        null,
        'work | amagazi'
      ),
      external__react__default.a.createElement('meta', { name: 'description', content: 'tbd' }),
      external__react__default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles_default.a } })
    ),
    external__react__default.a.createElement(navigation["a" /* default */], null),
    external__react__default.a.createElement(
      'div',
      { className: 'row top-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'col-lg-12 single-title' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'eye candy'
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'row videos justify-content-around' },
      external__react__default.a.createElement(
        'div',
        { className: 'showdeck col-md-5 order-lg-7 embed-responsive embed-responsive-16by9' },
        external__react__default.a.createElement('iframe', { className: 'embed-responsive-item', src: 'https://www.youtube.com/embed/uuyy212-HQQ?rel=0&showinfo=0', frameborder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, title: 'show-deck' })
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'showdeck2 col-md-5 order-lg-7 embed-responsive embed-responsive-16by9' },
        external__react__default.a.createElement('iframe', { className: 'embed-responsive-item', src: 'https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&showinfo=0', frameborder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, title: 'show-deck' })
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'row body-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'showdeck col-lg-8 order-lg-8' },
        external__react__default.a.createElement('img', { className: 'img-fluid float-right', src: '/static/gutier.gif', alt: '' })
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'subsection col-lg-4 order-lg-4' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'latest projects'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'innovation meets impact'
        ),
        external__react__default.a.createElement(
          'p',
          null,
          'This digital rebrand broke the mold within the construction category through non-traditional, bold, and contemporary web design. Our team also revamped Gutier\u2019s brand messaging to emphasize notable projects, safety, and expertise establishing the company as a key player in their industry.'
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'row body-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'col-lg-12 single-title' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'for the record'
        )
      )
    ),
    external__react__default.a.createElement(accordion, null),
    external__react__default.a.createElement(listgroup, null),
    external__react__default.a.createElement(brands, null),
    external__react__default.a.createElement(footer["a" /* default */], null)
  );
};

/* harmony default export */ var work = __webpack_exports__["default"] = (work_Work);

/***/ })
/******/ ]);