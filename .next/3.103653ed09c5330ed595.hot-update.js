webpackHotUpdate(3,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_navigation__ = __webpack_require__("./components/navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_footer__ = __webpack_require__("./components/footer.js");


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Agency/amagazi/pages/index.js';

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();





// or to work with plain css
// import stylesheet from 'styles/index.css'



var Home = function Home() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'container-fluid', itemScope: true, itemType: 'http://schema.org/WebPage', __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        'amagazi'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description',
        content: 'A full-service creative compan experienced in branding, business strategy, and crafting share-worthy consumer experiences. We don\'t walk the line, we create it.', __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'keywords', content: 'creative agency, business strategy, digital advertising', __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'author', content: 'amagazi', __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_2__styles_index_scss___default.a }, __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_navigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'homepage', itemScope: true, itemType: 'http://schema.org/ImageObject', __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/homepage.gif', alt: 'amagazi creative agency', className: 'img-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'homepage-mobile', itemScope: true, itemType: 'http://schema.org/ImageObject', __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { src: '/static/homepage-m.gif', alt: 'amagazi creative agency', className: 'img-fluid', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { 'class': 'footer-copyright py-3 text-center', itemScope: true, itemType: 'http://schema.org/WPFooter', __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'p',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        },
        '\xA9 2018 copyright |',
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'a',
          { href: '/privacy', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          ' privacy '
        )
      )
    )
  );
};

var _default = Home;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Home, 'Home', '/Users/leonelaguzman/Documents/Clients/Agency/amagazi/pages/index.js');
  reactHotLoader.register(_default, 'default', '/Users/leonelaguzman/Documents/Clients/Agency/amagazi/pages/index.js');
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=3.103653ed09c5330ed595.hot-update.js.map