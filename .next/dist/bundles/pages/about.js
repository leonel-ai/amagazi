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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
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

  module.exports = "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: 'Stevie Sans';\n  src: url(/static/titleFont/steviesanslight-webfont.woff) format(\"woff\"), url(/static/titleFont/steviesanslight-webfont.woff2) format(\"woff2\"); }\n\n@font-face {\n  font-family: 'IA Writer';\n  src: url(/static/titleFont/iawriterduospace-regular-webfont.woff) format(\"woff\"), url(/static/titleFont/iawriterduospace-regular-webfont.woff2) format(\"woff2\"); }\n\nhtml, body {\n  background-color: black; }\n\nbody {\n  margin: 0;\n  padding: 50px 15px 0px 15px;\n  color: white;\n  font-family: \"Stevie Sans\", sans-serif !important; }\n\na {\n  color: white; }\n\na:hover {\n    color: #FFC425 !important;\n    text-decoration: none;\n    text-decoration: line-through !important; }\n\na:active {\n    color: #FFC425 !important; }\n\na:visited {\n    color: white;\n    text-decoration: none; }\n\nul, li {\n  text-decoration: none;\n  list-style: none;\n  padding: 0; }\n\nh1, h2, h3, h4, h5, h6, .navbar-brand {\n  font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n#cta {\n  color: #FFC425; }\n\n.navbar .navbar-brand {\n  color: #FFC425; }\n\n.navbar ul {\n  min-height: 1200px;\n  font-size: 3em;\n  padding-top: 2em;\n  text-align: center;\n  font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n.navbar .navbar-toggler:focus, .navbar .navbar-toggler:active {\n  outline: none !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.container-fluid, .navbar {\n  background-color: black; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: white; }\n\n.homepage {\n  display: none; }\n\n.title {\n  font-size: 2em; }\n\n.subtitles {\n  font-size: 1.25em; }\n\n.title, .subtitles, .footer-copyright {\n  font-family: \"IA Writer\", \"Courier New\", monospace !important; }\n\n.page-footer {\n  border-top: 2px solid white; }\n\n.page-footer .container-fluid {\n    padding-top: 1em;\n    padding-bottom: 1em;\n    font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n.page-footer .footer-copyright {\n    border-top: 2px solid white;\n    color: #757575;\n    opacity: .3; }\n\n.page-footer .footer-copyright a {\n      color: #757575; }\n\n.footer-copyright {\n  color: #757575;\n  opacity: .3; }\n\n.footer-copyright a {\n    color: #757575; }\n\n.top-row {\n  padding-top: 2em; }\n\n.top-row .single-title {\n    padding-bottom: 1em; }\n\n.top-row .showdeck {\n    padding: 0; }\n\n.top-row .approach {\n    padding-top: 2em; }\n\n.videos .showdeck2 {\n  margin-top: 2em; }\n\n.body-row {\n  padding-top: 2em; }\n\n.body-row .single-title {\n    padding-bottom: 1em; }\n\n.body-row .showdeck {\n    padding: 0; }\n\n.body-row .services ul {\n    padding-left: 0em; }\n\n.subsection {\n  padding-top: 2em; }\n\n.case-divider {\n  border: 1px solid white;\n  opacity: .25; }\n\n/* team cards */\n\n.team-slide {\n  display: none; }\n\n.carousel.slide, .carousel-inner {\n  width: 20em auto;\n  margin: 0 auto;\n  overflow: hidden;\n  min-height: 560px; }\n\n.card {\n  background-color: black;\n  margin: 0 auto;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n          box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n  -webkit-transition: ease-out 0.3s;\n  transition: ease-out 0.3s; }\n\n.card h4 {\n    font-size: 1.25em; }\n\n.card h5 {\n    font-size: 1.1em; }\n\n.card .card-body {\n    height: 300px;\n    border-right: .5px solid #757575;\n    border-left: .5px solid #757575;\n    overflow: scroll; }\n\n.card .card-img-top {\n    height: 200px; }\n\n.card .card-text {\n    font-size: .9em; }\n\n.accordion {\n  padding-bottom: 3em; }\n\n.accordion .card {\n    border-top: .5px solid #757575;\n    border-left: none;\n    border-right: none;\n    -webkit-box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.5);\n            box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.5); }\n\n.case-group {\n  display: none; }\n\n.brand-group {\n  margin: 0 auto; }\n\n.brand-group ul {\n    font-size: .85em;\n    width: 130px; }\n\n.logo-slider {\n  max-height: 220px; }\n\n.logo-slider .carousel.slide {\n    max-height: 220px; }\n\n@media (min-width: 576px) {\n  .homepage-mobile {\n    display: none; }\n  .homepage {\n    display: block; }\n  .navbar {\n    padding-left: 40px;\n    padding-right: 40px; }\n  /* team cards */\n  .carousel.slide, .carousel-inner {\n    width: 20em;\n    margin: 0 auto;\n    overflow: hidden;\n    min-height: 560px; }\n  .card {\n    background-color: black;\n    margin: 0 auto;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n            box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n    -webkit-transition: ease-out 0.3s;\n    transition: ease-out 0.3s; }\n    .card h4 {\n      font-size: 1.25em; }\n    .card h5 {\n      font-size: 1.1em; }\n    .card .card-body {\n      height: 300px;\n      border-right: .5px solid #757575;\n      border-left: .5px solid #757575;\n      overflow: scroll; }\n    .card .card-img-top {\n      height: 200px; }\n    .card .card-text {\n      font-size: .9em; }\n  .accordion {\n    display: none; }\n  .case-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .list-group-item {\n    background-color: black;\n    color: white; }\n    .list-group-item.active {\n      background-color: #282828;\n      border-color: #FFC425; }\n  .case-studies {\n    max-height: 360px;\n    overflow: scroll; }\n  .brand-group {\n    padding-top: 4em; }\n  .logo-slider {\n    max-height: 340px; }\n    .logo-slider .carousel.slide, .logo-slider .carousel-inner {\n      margin: 0 auto;\n      overflow: hidden;\n      min-height: 0;\n      height: auto;\n      width: 100%; } }\n\n@media (min-width: 768px) {\n  .navbar {\n    position: absolute; }\n  .title {\n    font-size: 3em; }\n  .subtitles {\n    font-size: 1.75em; }\n  p, ul {\n    font-size: 18px; }\n  p {\n    padding-right: 2em; }\n  .top-row {\n    padding-top: 4em; }\n    .top-row .single-title {\n      padding-bottom: 2em; }\n  .videos {\n    padding-bottom: 2em; }\n    .videos .showdeck2 {\n      margin-top: 0; }\n  .body-row {\n    padding-top: 5em; }\n    .body-row .single-title {\n      padding-bottom: 1em; }\n    .body-row .services ul {\n      padding-left: 0em; }\n    .body-row .motto.subsection, .body-row .idea.subsection {\n      padding-top: 0; }\n  .subsection {\n    padding-top: 2em; }\n  /* services */\n  .service-approach .showdeck {\n    max-height: 400px; }\n  .team-cards {\n    display: none; }\n  .team-slide {\n    display: block;\n    padding-top: 2em; }\n    .team-slide .carousel.slide, .team-slide .carousel-inner {\n      margin: 0 auto;\n      overflow: hidden;\n      height: auto;\n      width: 100%; }\n    .team-slide .carousel-multi-item .col-md-4 {\n      float: left;\n      width: 33.333333%;\n      max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .subsection {\n    padding-top: 0; }\n  .brand-group {\n    padding-top: 8em; } }\n";
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
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

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

// CONCATENATED MODULE: ./components/team.js





var team_Team = function Team() {
  return external__react__default.a.createElement(
    "div",
    { "class": "col col-xs-12 body-row team-cards" },
    external__react__default.a.createElement("style", { dangerouslySetInnerHTML: { __html: styles_default.a } }),
    external__react__default.a.createElement(
      "div",
      { id: "indicators", "class": "carousel slide carousel-fade", "data-ride": "carousel", "data-interval": "false" },
      external__react__default.a.createElement(
        "ol",
        { "class": "carousel-indicators" },
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "0", "class": "active" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "1" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "2" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "3" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "4" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "5" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "6" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "7" }),
        external__react__default.a.createElement("li", { "data-target": "#indicators", "data-slide-to": "8" })
      ),
      external__react__default.a.createElement(
        "div",
        { "class": "carousel-inner" },
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card active" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/team/ryan.png", alt: "First slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Ryan Petersen"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "founder / ceo"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Ryan brings new ideas and ambitious thoughts to life. He is our never-ending source of inspiration and gets the job done. He understands how to run a successful business and brings a wide range of business acumen to the table. He has a true sense of the global market which allows him to skillfully connect the dots."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/team/chrisJ.png", alt: "Second slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Chris Johnsen"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "coo / gc"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Chris\u2019s dual approach to solving the toughest business problems is unrivaled. You can count on him to challenge all angles of any obstacle he comes across. His bold approach to problem-solving is one that our clients appreciate. And his thought-driven leadership is one that our team aspires to model each day."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/team/miguel.png", alt: "Third slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Miguel Nogueras"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "exec. creative director"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Miguel has helped shape the ad industry for more than 25 years. He\u2019s seen it all. He keeps our team strategic and forward-thinking and is steadfast in his pursuit of excellence and innovation through communication. Miguel never fails to capture the human connection with his unique storytelling approach."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/lobby.jpg", alt: "Fourth slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Sha\xEDna Huntsberry"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "sr. copywriter"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Sha\xEDna writes stories you want to share and headlines you want to embody. She empowers brands with profound narratives that inspire the masses to action. She speaks every language of the brands we work with and uses that language to activate success."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/lobby.jpg", alt: "Fourth slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Hillary Hallinan"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "project manager"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Hillary brings to the team an impressive background in fashion and retail management. She\u2019s a master at delivering big projects for big clients and has a meticulous eye for detail. Her innate ability to see the big picture is proven everyday through her multigenerational approach to marketing."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/lobby.jpg", alt: "Fourth slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Chris Firnkoess"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "art director"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Chris turns beautiful art into strategic design. His years in the marketing industry have groomed him to become one of the most talented creatives in advertising. His fresh perspective on design makes him an invaluable asset to our team, and to our clients."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/lobby.jpg", alt: "Fourth slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Leonela Guzm\xE1n"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "full stack developer"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Leonela is a scientist and artist of the next-generation digital experience. She always stays ahead of the latest technology and knows how to create a truly captivating user journey. Her approach to digital communication always leads us toward the best path to innovation and creativity."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/lobby.jpg", alt: "Fourth slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Forrest McBride"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "producer"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Forrest is a video production genius. He has worked on major movies and television series and knows how to articulate narratives through stunning visuals. His work will transport you into an awe-inspiring visual experience."
            )
          )
        ),
        external__react__default.a.createElement(
          "div",
          { "class": "carousel-item card" },
          external__react__default.a.createElement("img", { "class": "img-fluid w-100 card-img-top", src: "/static/lobby.jpg", alt: "Fourth slide" }),
          external__react__default.a.createElement(
            "div",
            { "class": "card-body" },
            external__react__default.a.createElement(
              "h4",
              { "class": "card-title" },
              "Kristian Valent\xEDn"
            ),
            external__react__default.a.createElement(
              "h5",
              { "class": "card-title" },
              "jr. account executive"
            ),
            external__react__default.a.createElement(
              "p",
              { "class": "card-text" },
              "Krist\xEDan is our client management rock star. He has the impressive ability to seamlessly create the intersection of business strategy and business success. His extensive background organizing major PR events in New York City has proven beneficial in his approach to the business landscape and has furthered his capacity to mobilize the perfect opportunities with the right timing for all of our clients."
            )
          )
        )
      ),
      external__react__default.a.createElement(
        "a",
        { "class": "carousel-control-prev", href: "#indicators", role: "button", "data-slide": "prev" },
        external__react__default.a.createElement(
          "span",
          { "class": "sr-only" },
          "Previous"
        )
      ),
      external__react__default.a.createElement(
        "a",
        { "class": "carousel-control-next", href: "#indicators", role: "button", "data-slide": "next" },
        external__react__default.a.createElement(
          "span",
          { "class": "sr-only" },
          "Next"
        )
      )
    )
  );
};

/* harmony default export */ var team = (team_Team);
// CONCATENATED MODULE: ./components/teamSlide.js





var teamSlide_TeamSlide = function TeamSlide() {
    return external__react__default.a.createElement(
        "div",
        { className: "row body-row team-slide" },
        external__react__default.a.createElement("style", { dangerouslySetInnerHTML: { __html: styles_default.a } }),
        external__react__default.a.createElement(
            "div",
            { id: "multi-item", className: "carousel slide carousel-multi-item", "data-ride": "carousel", "data-interval": "10000" },
            external__react__default.a.createElement(
                "div",
                { className: "controls-top" },
                external__react__default.a.createElement(
                    "a",
                    { className: "btn-floating", href: "#multi-item", "data-slide": "prev" },
                    external__react__default.a.createElement("i", { className: "fa fa-chevron-left" })
                ),
                external__react__default.a.createElement(
                    "a",
                    { className: "btn-floating", href: "#multi-item", "data-slide": "next" },
                    external__react__default.a.createElement("i", { className: "fa fa-chevron-right" })
                )
            ),
            external__react__default.a.createElement(
                "ol",
                { className: "carousel-indicators" },
                external__react__default.a.createElement("li", { "data-target": "#multi-item", "data-slide-to": "0", className: "active" }),
                external__react__default.a.createElement("li", { "data-target": "#multi-item", "data-slide-to": "1" }),
                external__react__default.a.createElement("li", { "data-target": "#multi-item", "data-slide-to": "2" })
            ),
            external__react__default.a.createElement(
                "div",
                { className: "carousel-inner", role: "listbox" },
                external__react__default.a.createElement(
                    "div",
                    { className: "carousel-item active" },
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/ryan.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Ryan Petersen"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "founder / ceo"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Ryan brings new ideas and ambitious thoughts to life. He is our never-ending source of inspiration and gets the job done. He understands how to run a successful business and brings a wide range of business acumen to the table. He has a true sense of the global market which allows him to skillfully connect the dots."
                                )
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4 clearfix d-none d-md-block" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/chrisJ.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Chris Johnsen"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "coo / gc"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Chris\u2019s dual approach to solving the toughest business problems is unrivaled. You can count on him to challenge all angles of any obstacle he comes across. His bold approach to problem-solving is one that our clients appreciate. And his thought-driven leadership is one that our team aspires to model each day."
                                )
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4 clearfix d-none d-md-block" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/miguel.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Miguel Nogueras"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "exec. creative director"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Miguel has helped shape the ad industry for more than 25 years. He\u2019s seen it all. He keeps our team strategic and forward-thinking and is steadfast in his pursuit of excellence and innovation through communication. Miguel never fails to capture the human connection with his unique storytelling approach."
                                )
                            )
                        )
                    )
                ),
                external__react__default.a.createElement(
                    "div",
                    { className: "carousel-item" },
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/shaina.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Sha\xEDna Huntsberry"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "sr. copywriter"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Sha\xEDna writes stories you want to share and headlines you want to embody. She empowers brands with profound narratives that inspire the masses to action. She speaks every language of the brands we work with and uses that language to activate success."
                                )
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4 clearfix d-none d-md-block" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/hillary.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Hillary Hallinan"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "project manager"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Hillary brings to the team an impressive background in fashion and retail management. She\u2019s a master at delivering big projects for big clients and has a meticulous eye for detail. Her innate ability to see the big picture is proven everyday through her multigenerational approach to marketing."
                                )
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4 clearfix d-none d-md-block" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/chrisf.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Chris Firnkoess"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "art director"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Chris turns beautiful art into strategic design. His years in the marketing industry have groomed him to become one of the most talented creatives in advertising. His fresh perspective on design makes him an invaluable asset to our team, and to our clients."
                                )
                            )
                        )
                    )
                ),
                external__react__default.a.createElement(
                    "div",
                    { className: "carousel-item" },
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/leonela.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Leonela Guzm\xE1n"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "full stack developer"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Leonela is a scientist and artist of the next-generation digital experience. She always stays ahead of the latest technology and knows how to create a truly captivating user journey. Her approach to digital communication always leads us toward the best path to innovation and creativity."
                                )
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4 clearfix d-none d-md-block" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/forrest.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Forrest McBride"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "producer"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Forrest is a video production genius. He has worked on major movies and television series and knows how to articulate narratives through stunning visuals. His work will transport you into an awe-inspiring visual experience."
                                )
                            )
                        )
                    ),
                    external__react__default.a.createElement(
                        "div",
                        { className: "col-md-4 clearfix d-none d-md-block" },
                        external__react__default.a.createElement(
                            "div",
                            { className: "card mb-2" },
                            external__react__default.a.createElement("img", { className: "img-fluid", src: "/static/team/kristian.png", alt: "amagazi team" }),
                            external__react__default.a.createElement(
                                "div",
                                { className: "card-body" },
                                external__react__default.a.createElement(
                                    "h4",
                                    { className: "card-title" },
                                    "Kristian Valent\xEDn"
                                ),
                                external__react__default.a.createElement(
                                    "h5",
                                    { className: "card-title" },
                                    "jr. account executive"
                                ),
                                external__react__default.a.createElement(
                                    "p",
                                    { className: "card-text" },
                                    "Krist\xEDan is our client management rock star. He has the impressive ability to seamlessly create the intersection of business strategy and business success. His extensive background organizing major PR events in New York City has proven beneficial in his approach to the business landscape and has furthered his capacity to mobilize the perfect opportunities with the right timing for all of our clients."
                                )
                            )
                        )
                    )
                )
            )
        )
    );
};

/* harmony default export */ var teamSlide = (teamSlide_TeamSlide);
// CONCATENATED MODULE: ./pages/about.js












var about_About = function About() {
  return external__react__default.a.createElement(
    'div',
    { className: 'container-fluid' },
    external__react__default.a.createElement(
      head__default.a,
      null,
      external__react__default.a.createElement(
        'title',
        null,
        'about | amagazi'
      ),
      external__react__default.a.createElement('meta', { name: 'description', content: 'who we are | provocateurs with purpose' }),
      external__react__default.a.createElement('style', { dangerouslySetInnerHTML: { __html: styles_default.a } })
    ),
    external__react__default.a.createElement(navigation["a" /* default */], null),
    external__react__default.a.createElement(
      'div',
      { className: 'row top-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'showdeck col-lg-8 order-lg-8' },
        external__react__default.a.createElement('img', { className: 'img-fluid float-right', src: '/static/lobby.jpg', alt: 'about-desktop' })
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'approach col-lg-4 order-lg-4' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'who we are'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'provocateurs with purpose'
        ),
        external__react__default.a.createElement(
          'p',
          null,
          'We are brainy business experts, culture connoisseurs, and catalysts for getting what you want. Our expertise includes branding, business strategy, and crafting share-worthy consumer experiences.',
          external__react__default.a.createElement('br', null),
          external__react__default.a.createElement('br', null),
          external__react__default.a.createElement(
            'a',
            { id: 'cta', href: 'mailto:hello@amagazi.com?subject=Hello, amagazi!' },
            'Let\u2019s talk.'
          )
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'row body-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'col-md-6 order-lg-1 mr-4' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'our standard'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'exclusive. transparent. responsive. efficient.'
        ),
        external__react__default.a.createElement(
          'p',
          null,
          'We are entrepreneurs who have blazed our own trails and have gained lots of business wisdom along the way. Simply put, we get it. We don\u2019t believe one size fits all. We curate our teams to custom-fit the needs of our clients.'
        )
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'idea col-md-5 order-lg-2 subsection' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'leadership'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'motivation through confidence and trust'
        ),
        external__react__default.a.createElement(
          'p',
          null,
          'We are idea-creators and problem-solvers. We are well-seasoned in our craft, and in case you\u2019re wondering, we\u2019ve picked up some awards along the way too.'
        )
      )
    ),
    external__react__default.a.createElement(
      'div',
      { className: 'row body-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'col-lg-12 ' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'the team'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'meet the people holding our standards high'
        )
      ),
      external__react__default.a.createElement(team, null)
    ),
    external__react__default.a.createElement(teamSlide, null),
    external__react__default.a.createElement(
      'div',
      { className: 'row body-row' },
      external__react__default.a.createElement(
        'div',
        { className: 'col-md-6 order-lg-1 mr-4' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'culture'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'own it, and own it well'
        ),
        external__react__default.a.createElement(
          'p',
          null,
          'We are refined virtuosos. We are your James Bond, your superhero, and your unicorn. We prefer timeless style over temporary trends and believe in bold simplicity. We welcome unconventional ideas to solve new challenges.'
        )
      ),
      external__react__default.a.createElement(
        'div',
        { className: 'pt-xs-4 mt-xs-2 col-md-5 order-lg-2' },
        external__react__default.a.createElement(
          'h1',
          { className: 'title' },
          'careers'
        ),
        external__react__default.a.createElement(
          'h2',
          { className: 'subtitles' },
          'where teamwork meets amazing'
        ),
        external__react__default.a.createElement(
          'p',
          null,
          'Connect with us at\xA0',
          external__react__default.a.createElement(
            'a',
            { id: 'cta', href: 'mailto:hello@amagazi.com?subject=Hello, amagazi careers!' },
            'hello@amagazi.com'
          )
        )
      )
    ),
    external__react__default.a.createElement(footer["a" /* default */], null)
  );
};

/* harmony default export */ var about = __webpack_exports__["default"] = (about_About);

/***/ })
/******/ ]);