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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/accordion.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/Agency/amagazi/components/accordion.js";



var Accordion = function Accordion() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "accordion accordion-7 col-xs-12 col-md-6", id: "accordionEx2", role: "tablist", "aria-multiselectable": "true", __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading10", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse10", "aria-expanded": "false", "aria-controls": "collapse10", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 10
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 11
                            }
                        },
                        "cpg"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse10", className: "collapse", role: "tabpanel", "aria-labelledby": "heading10", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 17
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        "snacktime bonding"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 20
                            }
                        },
                        "opportunity"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 21
                            }
                        },
                        "Gain market share in the growing snack category and create an ownable and entertaining solution to reposition snacktime as a fun, cross-generational family activity."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 23
                            }
                        },
                        "strategy"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 24
                            }
                        },
                        "Reworked the traditional product package graphics and typography to evolve the brand\u2019s personality, expand the audience, and help create a distinct snacktime experience."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 26
                            }
                        },
                        "success"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 27
                            }
                        },
                        "Positioned the brand\u2019s core values of fun, taste, family, and excitement which rejuvenated shopper perception of the brand\u2019s rich and iconic heritage. Our team utilized this concept for the rebrand of product line extensions in the same fashion."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "case-divider", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 33
                            }
                        },
                        "staycation of smiles"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 34
                            }
                        },
                        "opportunity"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 35
                            }
                        },
                        "Create a family-friendly and memorable way to drive product sales within the Hispanic market."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        "strategy"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        "Partnered with Walmart to create an activity and product-pairing guide for family staycations."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 38
                            }
                        },
                        "Beyond in-store sampling, shoppers received activity ideas and product suggestions (i.e. games, movies, etc.) for the family to enjoy together."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 39
                            }
                        },
                        "success"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 40
                            }
                        },
                        "The event resulted in a 471% sales lift the day of the in-store demo, which significantly impacted both brand sales and retailer\u2019s general sales. The brand effectively reached and connected with Hispanic moms for the first time at a major retail level."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "case-divider", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 44
                        }
                    }),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 46
                            }
                        },
                        "craveable satisfaction"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 47
                            }
                        },
                        "opportunity"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 48
                            }
                        },
                        "Develop and grow brand awareness for a product line launch at a major retailer."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 49
                            }
                        },
                        "strategy"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 50
                            }
                        },
                        "Created a 360-degree digital engagement platform based on the overarching concept:",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "i",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 51
                                }
                            },
                            " As craveable and satisfying as a restaurant meal"
                        ),
                        "."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 52
                            }
                        },
                        "success"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 53
                            }
                        },
                        "Secured first-time competitive brand placement in robust soup, sauces, sides category at major retail level, which increased shoppers\u2019 selection for restaurant-quality dinnertime."
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading11", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 60
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse11", "aria-expanded": "false", "aria-controls": "collapse11", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 61
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 62
                            }
                        },
                        "construction"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse11", className: "collapse", role: "tabpanel", "aria-labelledby": "heading11", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 68
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 70
                            }
                        },
                        "building business"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 71
                            }
                        },
                        "opportunity"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 72
                            }
                        },
                        "Establish a high level of client trust and credibility within the construction industry in order to attract more RFP opportunities."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                            }
                        },
                        "strategy"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 75
                            }
                        },
                        "Designed a modern, informative, and user-friendly website to engage prospective clients through an interactive user-flow."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 76
                            }
                        },
                        "Created brand messaging that emphasized notable projects, safety, and expertise."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 77
                            }
                        },
                        "Incorporated bold and contemporary web design elements which translated beyond web."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 78
                            }
                        },
                        "success"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 79
                            }
                        },
                        "This digital rebrand broke the mold within traditional category messaging and design. This new brand perception gained more consulting contracts and RFP wins for the company."
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading12", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 86
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse12", "aria-expanded": "false", "aria-controls": "collapse12", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 87
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 88
                            }
                        },
                        "law"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse12", className: "collapse", role: "tabpanel", "aria-labelledby": "heading12", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 94
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 95
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 96
                            }
                        },
                        "lucky ticket"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 97
                            }
                        },
                        "opportunity"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 98
                            }
                        },
                        "Design a new logo and create a brand strategy to acquire and increase new-client traffic."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 99
                            }
                        },
                        "strategy"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 100
                            }
                        },
                        "Created insight-driven, humorous brand messaging through print and OOH to elicit legal trust and guidance for new clients."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 101
                            }
                        },
                        "success"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 102
                            }
                        },
                        "Increased brand awareness and created a unique messaging approach that engaged clients through relatable human insight:",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "i",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 103
                                }
                            },
                            " Behind every traffic ticket, there\u2019s a story that matters. A story with the power to successfully dispute what most people accept\u2014a tainted driving record and an increased insurance rate."
                        )
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 109
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading13", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 110
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse13", "aria-expanded": "true", "aria-controls": "collapse13", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 111
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 112
                            }
                        },
                        "education"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse13", className: "collapse", role: "tabpanel", "aria-labelledby": "heading13", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 118
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 119
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 120
                            }
                        },
                        "class above the rest"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 121
                            }
                        },
                        "opportunity"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 122
                            }
                        },
                        "Increase brand awareness, student enrollment, and donor contribution."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 123
                            }
                        },
                        "strategy"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 124
                            }
                        },
                        "Implemented a digital campaign across social media platforms to maximize reach within target audience."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 125
                            }
                        },
                        "Positioned the school as an exclusive and elite educational institution to resonate with parents\u2019 motivation for enrollment."
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 126
                            }
                        },
                        "success"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 127
                            }
                        },
                        "Increased parent/student enrollment leads and campaign engagement due to stats-based messaging: 100% of our graduates are accepted to the private high school of their choice."
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 133
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading14", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 134
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse14", "aria-expanded": "false", "aria-controls": "collapse14", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 135
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 136
                            }
                        },
                        "financial"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse14", className: "collapse", role: "tabpanel", "aria-labelledby": "heading14", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 142
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 143
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 144
                            }
                        },
                        "coming soon"
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 149
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading15", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 150
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse15", "aria-expanded": "false", "aria-controls": "collapse15", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 151
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 152
                            }
                        },
                        "healthcare"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse15", className: "collapse", role: "tabpanel", "aria-labelledby": "heading15", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 158
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 159
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 160
                            }
                        },
                        "coming soon"
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "card", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 165
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "card-header z-depth-1", role: "tab", id: "heading16", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 166
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { className: "collapsed", "data-toggle": "collapse", "data-parent": "#accordionEx2", href: "#collapse16", "aria-expanded": "false", "aria-controls": "collapse16", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 167
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        { className: "mb-0 text-center", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 168
                            }
                        },
                        "hospitality"
                    )
                )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { id: "collapse16", className: "collapse", role: "tabpanel", "aria-labelledby": "heading16", "data-parent": "#accordionEx2", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 174
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "card-body white-text", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 175
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h3",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 176
                            }
                        },
                        "coming soon"
                    )
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),

/***/ "./components/brands.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_logos__ = __webpack_require__("./components/logos.js");


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Agency/amagazi/components/brands.js';





var Brands = function Brands() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'brand-group', __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'container text-md-left', __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'row', __source: {
            fileName: _jsxFileName,
            lineNumber: 12
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-4', __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_logos__["a" /* default */], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('hr', { className: 'w-100 d-md-none', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-2 mx-auto', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row mx-auto justify-content-around', __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'list-unstyled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    }
                  },
                  'BMW'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 26
                    }
                  },
                  'Cadbury'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    }
                  },
                  'Direct Energy'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 28
                    }
                  },
                  'Exxon'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 29
                    }
                  },
                  'Campbell\'s'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 30
                    }
                  },
                  'Pepperidge Farm'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'list-unstyled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 35
                    }
                  },
                  'General Mills'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 36
                    }
                  },
                  'Houston Rising'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 37
                    }
                  },
                  'Fully Raw'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 38
                    }
                  },
                  'LA Economic Development'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 39
                    }
                  },
                  'Green Seed Vegan'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 40
                    }
                  },
                  'Trelleborg'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-2 mx-auto', __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row mx-auto justify-content-around', __source: {
                fileName: _jsxFileName,
                lineNumber: 47
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 48
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'list-unstyled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 50
                    }
                  },
                  'Kraft'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 51
                    }
                  },
                  'Maxwell House'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    }
                  },
                  'Gutier Roofing'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    }
                  },
                  'Johnsen Law'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    }
                  },
                  'Markowitz Law'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    }
                  },
                  'Miller Lite'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'list-unstyled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    }
                  },
                  'Mission'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    }
                  },
                  'NRG'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    }
                  },
                  'Quilted Northern'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 63
                    }
                  },
                  'Monster Worldwide, Inc.'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 64
                    }
                  },
                  'SCFD'
                )
              )
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'col-md-2 mx-auto', __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row mx-auto justify-content-around', __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 72
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'list-unstyled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 74
                    }
                  },
                  'Reliant Energy'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 75
                    }
                  },
                  'Rich\'s Foods'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 76
                    }
                  },
                  'Sonic'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 77
                    }
                  },
                  'Texaco'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 78
                    }
                  },
                  'Tyson'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 79
                    }
                  },
                  'VW'
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'col-xs-6', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'ul',
                { className: 'list-unstyled', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 84
                    }
                  },
                  'Walmart'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 85
                    }
                  },
                  'Saint Theresa Catholic School'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 86
                    }
                  },
                  'Webb Gallery'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 87
                    }
                  },
                  'Krewe du Optic'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'li',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 88
                    }
                  },
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

/* harmony default export */ __webpack_exports__["a"] = (Brands);

/***/ }),

/***/ "./components/footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/Agency/amagazi/components/footer.js";



var Footer = function Footer() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "footer",
        { className: "page-footer font-small pt-4 mt-4", __source: {
                fileName: _jsxFileName,
                lineNumber: 5
            }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
                fileName: _jsxFileName,
                lineNumber: 6
            }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "container-fluid text-xs-left text-md-left", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 8
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "div",
                { className: "row", __source: {
                        fileName: _jsxFileName,
                        lineNumber: 9
                    }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-6", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 11
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 12
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "a",
                            { id: "cta", href: "/", __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 12
                                }
                            },
                            "amagazi"
                        )
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "p",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 13
                            }
                        },
                        "A full-service digital agency experienced in branding, business strategy, and crafting share-worthy consumer experiences.",
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 14
                            }
                        }),
                        "We don't walk the line, we create it."
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-4", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 17
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 18
                            }
                        },
                        "contact us"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "list-unstyled", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 19
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 20
                                }
                            },
                            "7155 old katy road, ste. s255"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 23
                                }
                            },
                            "houston, tx 77024"
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 26
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "tel:832-304-5500", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 27
                                    }
                                },
                                "832.304.5500"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 29
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "mailto:hello@amagazi.com?subject=Hello, amagazi!", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 30
                                    }
                                },
                                "hello@amagazi.com"
                            )
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "div",
                    { className: "col-md-2", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 35
                        }
                    },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "h4",
                        {
                            __source: {
                                fileName: _jsxFileName,
                                lineNumber: 36
                            }
                        },
                        "follow us"
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        "ul",
                        { className: "list-unstyled", __source: {
                                fileName: _jsxFileName,
                                lineNumber: 37
                            }
                        },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 38
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://www.linkedin.com/company/amagazi/", rel: "noopener noreferrer", target: "_blank", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 39
                                    }
                                },
                                "linkedin"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 41
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://twitter.com/amagaziagency", rel: "noopener noreferrer", target: "_blank", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 42
                                    }
                                },
                                "twitter"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 44
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://www.facebook.com/amagazi", rel: "noopener noreferrer", target: "_blank", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 45
                                    }
                                },
                                "facebook"
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            "li",
                            {
                                __source: {
                                    fileName: _jsxFileName,
                                    lineNumber: 47
                                }
                            },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                "a",
                                { href: "https://www.medium.com/@amagazi", rel: "noopener noreferrer", target: "_blank", __source: {
                                        fileName: _jsxFileName,
                                        lineNumber: 48
                                    }
                                },
                                "the scoop"
                            )
                        )
                    )
                )
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "div",
            { className: "footer-copyright py-3 text-center", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                "p",
                {
                    __source: {
                        fileName: _jsxFileName,
                        lineNumber: 56
                    }
                },
                "\xA9 2018 copyright |",
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    "a",
                    { href: "/privacy", __source: {
                            fileName: _jsxFileName,
                            lineNumber: 57
                        }
                    },
                    " privacy "
                )
            )
        )
    );
};

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "./components/listgroup.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/Agency/amagazi/components/listgroup.js";



var ListGroup = function ListGroup() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "case-group", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { "class": "col-md-4", __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { "class": "list-group", id: "list-tab", role: "tablist", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action active", id: "list-cpg-list", "data-toggle": "list", href: "#list-cpg", role: "tab", "aria-controls": "cpg", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          },
          "cpg"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-con-list", "data-toggle": "list", href: "#list-con", role: "tab", "aria-controls": "con", __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          "construction"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-law-list", "data-toggle": "list", href: "#list-law", role: "tab", "aria-controls": "law", __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          "law"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-edu-list", "data-toggle": "list", href: "#list-edu", role: "tab", "aria-controls": "edu", __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          },
          "education"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-fin-list", "data-toggle": "list", href: "#list-fin", role: "tab", "aria-controls": "fin", __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          "financial"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-health-list", "data-toggle": "list", href: "#list-health", role: "tab", "aria-controls": "health", __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          "healthcare"
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "a",
          { "class": "list-group-item list-group-item-action", id: "list-hosp-list", "data-toggle": "list", href: "#list-hosp", role: "tab", "aria-controls": "hosp", __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          },
          "hospitality"
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { "class": "col-md-8 case-studies", __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { "class": "tab-content", id: "nav-tabContent", __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade show active", id: "list-cpg", role: "tabpanel", "aria-labelledby": "list-cpg-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            },
            "snacktime bonding"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 23
              }
            },
            "opportunity"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            "Gain market share in the growing snack category and create an ownable and entertaining solution to reposition snacktime as a fun, cross-generational family activity."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              }
            },
            "strategy"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            "Reworked the traditional product package graphics and typography to evolve the brand\u2019s personality, expand the audience, and help create a distinct snacktime experience."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 29
              }
            },
            "success"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            "Positioned the brand\u2019s core values of fun, taste, family, and excitement which rejuvenated shopper perception of the brand\u2019s rich and iconic heritage. Our team utilized this concept for the rebrand of product line extensions in the same fashion."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "case-divider", __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              }
            },
            "staycation of smiles"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37
              }
            },
            "opportunity"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              }
            },
            "Create a family-friendly and memorable way to drive product sales within the Hispanic market."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              }
            },
            "strategy"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              }
            },
            "Partnered with Walmart to create an activity and product-pairing guide for family staycations."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            "Beyond in-store sampling, shoppers received activity ideas and product suggestions (i.e. games, movies, etc.) for the family to enjoy together."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 42
              }
            },
            "success"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            "The event resulted in a 471% sales lift the day of the in-store demo, which significantly impacted both brand sales and retailer\u2019s general sales. The brand effectively reached and connected with Hispanic moms for the first time at a major retail level."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("hr", { className: "case-divider", __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              }
            },
            "craveable satisfaction"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              }
            },
            "opportunity"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            "Develop and grow brand awareness for a product line launch at a major retailer."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 52
              }
            },
            "strategy"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            "Created a 360-degree digital engagement platform based on the overarching concept:",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              " As craveable and satisfying as a restaurant meal"
            ),
            "."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 55
              }
            },
            "success"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 56
              }
            },
            "Secured first-time competitive brand placement in robust soup, sauces, sides category at major retail level, which increased shoppers\u2019 selection for restaurant-quality dinnertime."
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-con", role: "tabpanel", "aria-labelledby": "list-con-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 61
              }
            },
            "building business"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 62
              }
            },
            "opportunity"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 63
              }
            },
            "Establish a high level of client trust and credibility within the construction industry in order to attract more RFP opportunities."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65
              }
            },
            "strategy"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66
              }
            },
            "Designed a modern, informative, and user-friendly website to engage prospective clients through an interactive user-flow."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              }
            },
            "Created brand messaging that emphasized notable projects, safety, and expertise."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              }
            },
            "Incorporated bold and contemporary web design elements which translated beyond web."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              }
            },
            "success"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70
              }
            },
            "This digital rebrand broke the mold within traditional category messaging and design. This new brand perception gained more consulting contracts and RFP wins for the company."
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-law", role: "tabpanel", "aria-labelledby": "list-law-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              }
            },
            "lucky ticket"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 76
              }
            },
            "opportunity"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 77
              }
            },
            "Design a new logo and create a brand strategy to acquire and increase new-client traffic."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              }
            },
            "strategy"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              }
            },
            "Created insight-driven, humorous brand messaging through print and OOH to elicit legal trust and guidance for new clients."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 80
              }
            },
            "success"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 81
              }
            },
            "Increased brand awareness and created a unique messaging approach that engaged clients through relatable human insight:",
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "i",
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 82
                }
              },
              " Behind every traffic ticket, there\u2019s a story that matters. A story with the power to successfully dispute what most people accept\u2014a tainted driving record and an increased insurance rate."
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-edu", role: "tabpanel", "aria-labelledby": "list-edu-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              }
            },
            "class above the rest"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              }
            },
            "opportunity"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 89
              }
            },
            "Increase brand awareness, student enrollment, and donor contribution."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 90
              }
            },
            "strategy"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91
              }
            },
            "Implemented a digital campaign across social media platforms to maximize reach within target audience."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92
              }
            },
            "Positioned the school as an exclusive and elite educational institution to resonate with parents\u2019 motivation for enrollment."
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h4",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 93
              }
            },
            "success"
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "p",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 94
              }
            },
            "Increased parent/student enrollment leads and campaign engagement due to stats-based messaging: 100% of our graduates are accepted to the private high school of their choice."
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-fin", role: "tabpanel", "aria-labelledby": "list-fin-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 98
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 99
              }
            },
            "coming soon"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-health", role: "tabpanel", "aria-labelledby": "list-health-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 102
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 103
              }
            },
            "coming soon"
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { "class": "tab-pane fade", id: "list-hosp", role: "tabpanel", "aria-labelledby": "list-hosp-list", __source: {
              fileName: _jsxFileName,
              lineNumber: 106
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "h3",
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 107
              }
            },
            "coming soon"
          )
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (ListGroup);

/***/ }),

/***/ "./components/logos.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/Agency/amagazi/components/logos.js";



var Logos = function Logos() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    { className: "logo-slider", __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "div",
      { className: "carousel slide", "data-ride": "carousel", "data-interval": "70000", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "carousel-inner", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "carousel-item active", __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "img-fluid d-block w-100", src: "/static/logos_01.gif", alt: "First slide", __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "carousel-item", __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "img-fluid d-block w-100", src: "/static/logos_02.gif", alt: "Second slide", __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            }
          })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "div",
          { className: "carousel-item", __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", { className: "img-fluid d-block w-100", src: "/static/logos_03.gif", alt: "Third slide", __source: {
              fileName: _jsxFileName,
              lineNumber: 16
            }
          })
        )
      )
    )
  );
};

/* harmony default export */ __webpack_exports__["a"] = (Logos);

/***/ }),

/***/ "./components/navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__styles_index_scss__);


var _jsxFileName = "/Users/leonelaguzman/Documents/Clients/Agency/amagazi/components/navigation.js";



var Nav = function Nav() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    "div",
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 5
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("style", { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_1__styles_index_scss___default.a }, __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      "nav",
      { className: "navbar fixed-top navbar-dark", __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "a",
        { className: "navbar-brand", href: "/", __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          }
        },
        "amagazi"
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "button",
        { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbar", __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", { className: "navbar-toggler-icon", __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        "div",
        { className: "collapse navbar-collapse justify-content-stretch", id: "navbar", __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          "ul",
          { className: "navbar-nav ml-auto", __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item", __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "/services", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                }
              },
              "services"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item", __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "/about", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 19
                }
              },
              "about"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item", __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "/work", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                }
              },
              "work"
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            "li",
            { className: "nav-item", __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              "a",
              { className: "nav-link", href: "https://medium.com/@amagazi", rel: "noopener noreferrer", target: "_blank", __source: {
                  fileName: _jsxFileName,
                  lineNumber: 25
                }
              },
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

/***/ "./pages/work.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_index_scss__ = __webpack_require__("./styles/index.scss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_index_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_index_scss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_navigation__ = __webpack_require__("./components/navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer__ = __webpack_require__("./components/footer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_accordion__ = __webpack_require__("./components/accordion.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_listgroup__ = __webpack_require__("./components/listgroup.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_brands__ = __webpack_require__("./components/brands.js");


var _jsxFileName = '/Users/leonelaguzman/Documents/Clients/Agency/amagazi/pages/work.js';












var Work = function Work() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'div',
    { className: 'container-fluid', __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_next_head___default.a,
      {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'title',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        },
        'work | amagazi'
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'description', content: 'tbd', __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('style', { dangerouslySetInnerHTML: { __html: __WEBPACK_IMPORTED_MODULE_3__styles_index_scss___default.a }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      })
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_navigation__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row top-row', __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-lg-12 single-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'title', __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            }
          },
          'eye candy'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row videos justify-content-around', __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'showdeck col-md-5 order-lg-7 embed-responsive embed-responsive-16by9', __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { className: 'embed-responsive-item', src: 'https://www.youtube.com/embed/uuyy212-HQQ?rel=0&showinfo=0', frameborder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, title: 'show-deck', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'showdeck2 col-md-5 order-lg-7 embed-responsive embed-responsive-16by9', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('iframe', { className: 'embed-responsive-item', src: 'https://www.youtube.com/embed/zlTwDTgQuh0?rel=0&showinfo=0', frameborder: '0', allow: 'autoplay; encrypted-media', allowFullScreen: true, title: 'show-deck', __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        })
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row body-row', __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'showdeck col-lg-8 order-lg-8', __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: 'img-fluid float-right', src: '/static/gutier.gif', alt: '', __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          }
        })
      ),
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'subsection col-lg-4 order-lg-4', __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'title', __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          'latest projects'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'subtitles', __source: {
              fileName: _jsxFileName,
              lineNumber: 43
            }
          },
          'innovation meets impact'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'p',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            }
          },
          'This digital rebrand broke the mold within the construction category through non-traditional, bold, and contemporary web design. Our team also revamped Gutier\u2019s brand messaging to emphasize notable projects, safety, and expertise establishing the company as a key player in their industry.'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      { className: 'row body-row', __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'col-lg-12 single-title', __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'title', __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            }
          },
          'for the record'
        )
      )
    ),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__components_accordion__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__components_listgroup__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__components_brands__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      }
    }),
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_footer__["a" /* default */], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    })
  );
};

/* harmony default export */ __webpack_exports__["default"] = (Work);

/***/ }),

/***/ "./styles/index.scss":
/***/ (function(module, exports) {

;

(function () {
  "use strict";

  module.exports = "/*! normalize.css v7.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -ms-text-size-adjust: 100%; /* 2 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  -webkit-box-sizing: content-box;\n          box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57- and Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n@font-face {\n  font-family: 'Stevie Sans';\n  src: url(/static/titleFont/steviesanslight-webfont.woff) format(\"woff\"), url(/static/titleFont/steviesanslight-webfont.woff2) format(\"woff2\"); }\n\n@font-face {\n  font-family: 'IA Writer';\n  src: url(/static/titleFont/iawriterduospace-regular-webfont.woff) format(\"woff\"), url(/static/titleFont/iawriterduospace-regular-webfont.woff2) format(\"woff2\"); }\n\nhtml, body {\n  background-color: black; }\n\nbody {\n  margin: 0;\n  padding: 50px 15px 0px 15px;\n  color: white;\n  font-family: \"Stevie Sans\", sans-serif !important; }\n\na {\n  color: white; }\n\na:hover {\n    color: #FFC425 !important;\n    text-decoration: none;\n    text-decoration: line-through !important; }\n\na:active {\n    color: #FFC425 !important; }\n\na:visited {\n    color: white;\n    text-decoration: none; }\n\nul, li {\n  text-decoration: none;\n  list-style: none;\n  padding: 0; }\n\nh1, h2, h3, h4, h5, h6, .navbar-brand {\n  font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n#cta {\n  color: #FFC425; }\n\n.navbar .navbar-brand {\n  color: #FFC425; }\n\n.navbar ul {\n  min-height: 1200px;\n  font-size: 3em;\n  padding-top: 2em;\n  text-align: center;\n  font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n.navbar .navbar-toggler:focus, .navbar .navbar-toggler:active {\n  outline: none !important;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n\n.container-fluid, .navbar {\n  background-color: black; }\n\n.navbar-dark .navbar-nav .nav-link {\n  color: white; }\n\n.homepage {\n  display: none; }\n\n.title {\n  font-size: 2em; }\n\n.subtitles {\n  font-size: 1.25em; }\n\n.title, .subtitles, .footer-copyright {\n  font-family: \"IA Writer\", \"Courier New\", monospace !important; }\n\n.page-footer {\n  border-top: 2px solid white; }\n\n.page-footer .container-fluid {\n    padding-top: 1em;\n    padding-bottom: 1em;\n    font-family: \"IA Writer\", \"Courier New\", monospace; }\n\n.page-footer .footer-copyright {\n    border-top: 2px solid white;\n    color: #757575;\n    opacity: .3; }\n\n.page-footer .footer-copyright a {\n      color: #757575; }\n\n.footer-copyright {\n  color: #757575;\n  opacity: .3; }\n\n.footer-copyright a {\n    color: #757575; }\n\n.top-row {\n  padding-top: 2em; }\n\n.top-row .single-title {\n    padding-bottom: 1em; }\n\n.top-row .showdeck {\n    padding: 0; }\n\n.top-row .approach {\n    padding-top: 2em; }\n\n.videos .showdeck2 {\n  margin-top: 2em; }\n\n.body-row {\n  padding-top: 2em; }\n\n.body-row .single-title {\n    padding-bottom: 1em; }\n\n.body-row .showdeck {\n    padding: 0; }\n\n.body-row .services ul {\n    padding-left: 0em; }\n\n.subsection {\n  padding-top: 2em; }\n\n.case-divider {\n  border: 1px solid white;\n  opacity: .25; }\n\n/* team cards */\n\n.team-slide {\n  display: none; }\n\n.carousel.slide, .carousel-inner {\n  width: 20em auto;\n  margin: 0 auto;\n  overflow: hidden;\n  min-height: 560px; }\n\n.card {\n  background-color: black;\n  margin: 0 auto;\n  border-radius: 5px;\n  -webkit-box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n          box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n  -webkit-transition: ease-out 0.3s;\n  transition: ease-out 0.3s; }\n\n.card h4 {\n    font-size: 1.25em; }\n\n.card h5 {\n    font-size: 1.1em; }\n\n.card .card-body {\n    height: 300px;\n    border-right: .5px solid #757575;\n    border-left: .5px solid #757575;\n    overflow: scroll; }\n\n.card .card-img-top {\n    height: 200px; }\n\n.card .card-text {\n    font-size: .9em; }\n\n.accordion {\n  padding-bottom: 3em; }\n\n.accordion .card {\n    border-top: .5px solid #757575;\n    border-left: none;\n    border-right: none;\n    -webkit-box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.5);\n            box-shadow: 0 1px 2px 0 rgba(255, 255, 255, 0.5); }\n\n.case-group {\n  display: none; }\n\n.brand-group {\n  margin: 0 auto; }\n\n.brand-group ul {\n    font-size: .85em;\n    width: 130px; }\n\n.logo-slider {\n  max-height: 220px; }\n\n.logo-slider .carousel.slide {\n    max-height: 220px; }\n\n@media (min-width: 576px) {\n  .homepage-mobile {\n    display: none; }\n  .homepage {\n    display: block; }\n  .navbar {\n    padding-left: 40px;\n    padding-right: 40px; }\n  /* team cards */\n  .carousel.slide, .carousel-inner {\n    width: 20em;\n    margin: 0 auto;\n    overflow: hidden;\n    min-height: 560px; }\n  .card {\n    background-color: black;\n    margin: 0 auto;\n    border-radius: 5px;\n    -webkit-box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n            box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.85);\n    -webkit-transition: ease-out 0.3s;\n    transition: ease-out 0.3s; }\n    .card h4 {\n      font-size: 1.25em; }\n    .card h5 {\n      font-size: 1.1em; }\n    .card .card-body {\n      height: 300px;\n      border-right: .5px solid #757575;\n      border-left: .5px solid #757575;\n      overflow: scroll; }\n    .card .card-img-top {\n      height: 200px; }\n    .card .card-text {\n      font-size: .9em; }\n  .accordion {\n    display: none; }\n  .case-group {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex; }\n  .list-group-item {\n    background-color: black;\n    color: white; }\n    .list-group-item.active {\n      background-color: #282828;\n      border-color: #FFC425; }\n  .case-studies {\n    max-height: 360px;\n    overflow: scroll; }\n  .brand-group {\n    padding-top: 4em; }\n  .logo-slider {\n    max-height: 340px; }\n    .logo-slider .carousel.slide, .logo-slider .carousel-inner {\n      margin: 0 auto;\n      overflow: hidden;\n      min-height: 0;\n      height: auto;\n      width: 100%; } }\n\n@media (min-width: 768px) {\n  .navbar {\n    position: absolute; }\n  .title {\n    font-size: 3em; }\n  .subtitles {\n    font-size: 1.75em; }\n  p, ul {\n    font-size: 18px; }\n  p {\n    padding-right: 2em; }\n  .top-row {\n    padding-top: 4em; }\n    .top-row .single-title {\n      padding-bottom: 2em; }\n  .videos {\n    padding-bottom: 2em; }\n    .videos .showdeck2 {\n      margin-top: 0; }\n  .body-row {\n    padding-top: 5em; }\n    .body-row .single-title {\n      padding-bottom: 1em; }\n    .body-row .services ul {\n      padding-left: 0em; }\n    .body-row .motto.subsection, .body-row .idea.subsection {\n      padding-top: 0; }\n  .subsection {\n    padding-top: 2em; }\n  /* services */\n  .service-approach .showdeck {\n    max-height: 400px; }\n  .team-cards {\n    display: none; }\n  .team-slide {\n    display: block;\n    padding-top: 2em; }\n    .team-slide .carousel.slide, .team-slide .carousel-inner {\n      margin: 0 auto;\n      overflow: hidden;\n      height: auto;\n      width: 100%; }\n    .team-slide .carousel-multi-item .col-md-4 {\n      float: left;\n      width: 33.333333%;\n      max-width: 100%; } }\n\n@media (min-width: 992px) {\n  .subsection {\n    padding-top: 0; }\n  .brand-group {\n    padding-top: 8em; } }\n";
})();

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/work.js");


/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=work.js.map