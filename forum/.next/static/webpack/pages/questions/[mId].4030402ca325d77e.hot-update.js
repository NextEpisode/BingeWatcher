"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/questions/[mId]",{

/***/ "./pages/questions/[mId].js":
/*!**********************************!*\
  !*** ./pages/questions/[mId].js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/esm/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction IdComponent(param) {\n    var mediaResponse = param.mediaResponse;\n    var _this = this;\n    var ref;\n    _s();\n    var ref1 = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)(), session = ref1.data;\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref2[0], setShow = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), answer = ref3[0], setAnswer = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), a = ref4[0], formerArray = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mediaResponse === null || mediaResponse === void 0 ? void 0 : (ref = mediaResponse.data) === null || ref === void 0 ? void 0 : ref.attributes), media = ref5[0], setMedia = ref5[1];\n    console.log(\"this is it - \", mediaResponse);\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var mId = router.query.mId;\n    console.log(\"this is the mid - \", mId);\n    var submitAnswer = function() {\n        try {\n            console.log(session.user.name);\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].put(\"http://localhost:1337/api/strapi-forums/\".concat(mId), {\n                data: {\n                    Answers: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(a).concat([\n                        {\n                            user: session.user.name,\n                            reply: answer\n                        }\n                    ]),\n                    Answername: session.user.name\n                }\n            }).catch(function(e) {\n                console.log(e.mediaResponse);\n            });\n            window.location.reload();\n        } catch (error) {\n            console.log(\"Error found: \", mId, error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !media && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"Page not found\"\n            }, void 0, false),\n            media && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().subheading),\n                        children: media.title\n                    }, void 0, false, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                        lineNumber: 49,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().userinfo),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Posted By: \",\n                                media.Username\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                            lineNumber: 51,\n                            columnNumber: 25\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                        lineNumber: 50,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.List, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().questioncont),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().question),\n                                    children: media.Questions\n                                }, void 0, false, {\n                                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                    lineNumber: 55,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                lineNumber: 54,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().answercont),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().inputanswer),\n                                        children: [\n                                            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                lineNumber: 60,\n                                                columnNumber: 37\n                                            }, this),\n                                            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                                        type: \"text\",\n                                                        placeholder: \"Enter your answer\",\n                                                        rows: \"5\",\n                                                        value: answer,\n                                                        onChange: function(e) {\n                                                            formerArray(media.Answers);\n                                                            setAnswer(e.target.value);\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                        lineNumber: 64,\n                                                        columnNumber: 41\n                                                    }, this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                        onClick: function(e) {\n                                                            e.preventDefault();\n                                                            submitAnswer();\n                                                        },\n                                                        children: \"Post\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                        lineNumber: 74,\n                                                        columnNumber: 41\n                                                    }, this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                lineNumber: 63,\n                                                columnNumber: 37\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                        lineNumber: 58,\n                                        columnNumber: 29\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().showanswer),\n                                        onClick: function() {\n                                            return setShow(!show);\n                                        },\n                                        children: show ? \"Hide Answers\" : \"Show Answers\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                        lineNumber: 85,\n                                        columnNumber: 29\n                                    }, this),\n                                    show ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().answers),\n                                        children: media.Answers.map(function(answers, i) {\n                                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().eachanswer),\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().username),\n                                                        children: answers.user\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                        lineNumber: 92,\n                                                        columnNumber: 45\n                                                    }, _this),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().answertext),\n                                                        children: answers.reply\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                        lineNumber: 93,\n                                                        columnNumber: 45\n                                                    }, _this)\n                                                ]\n                                            }, i, true, {\n                                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                                lineNumber: 91,\n                                                columnNumber: 41\n                                            }, _this);\n                                        })\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                        lineNumber: 89,\n                                        columnNumber: 33\n                                    }, this) : null\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                                lineNumber: 57,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                        lineNumber: 53,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n                lineNumber: 48,\n                columnNumber: 17\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/questions/[mId].js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n_s(IdComponent, \"L9lVqKC7qnXswVTcbEDnO8r4SiA=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = IdComponent;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (IdComponent);\nvar _c;\n$RefreshReg$(_c, \"IdComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs0Q0FFVDtrREFDTiw4REFBQ2tDLFFBQU07d0NBQUNuQixTQUFTLEVBQUV4QywyRUFBZ0I7d0NBQUU0RCxPQUFPLEVBQUU7bURBQU1oRCxPQUFPLENBQUMsQ0FBQ0QsSUFBSSxDQUFDO3lDQUFBO2tEQUM3REEsSUFBSSxHQUFHLGNBQWMsR0FBRyxjQUFjOzs7Ozs0Q0FDbEM7b0NBQ1JBLElBQUksaUJBQ0QsOERBQUMyQixLQUFHO3dDQUFDRSxTQUFTLEVBQUV4Qyx3RUFBYTtrREFDeEJrQixLQUFLLENBQUNXLE9BQU8sQ0FBQ21DLEdBQUcsQ0FBQyxTQUFDRCxPQUFPLEVBQUVFLENBQUM7aUVBQzFCLDhEQUFDM0IsS0FBRztnREFBQ0UsU0FBUyxFQUFFeEMsMkVBQWdCOztrRUFDNUIsOERBQUM0QyxHQUFDO3dEQUFDSixTQUFTLEVBQUV4Qyx5RUFBYztrRUFBRytELE9BQU8sQ0FBQ3JDLElBQUk7Ozs7OzZEQUFLO2tFQUNoRCw4REFBQ2tCLEdBQUM7d0RBQUNKLFNBQVMsRUFBRXhDLDJFQUFnQjtrRUFBRytELE9BQU8sQ0FBQ2pDLEtBQUs7Ozs7OzZEQUFLOzsrQ0FGaEJtQyxDQUFDOzs7O3FEQUdsQzt5Q0FDVCxDQUFDOzs7Ozs0Q0FDQSxHQUNOLElBQUk7Ozs7OztvQ0FDTjs7Ozs7OzRCQUNIOzs7Ozs7b0JBQ0w7Ozs7OztZQUVSLENBRVQ7QUFDTCxDQUFDO0dBaEdRMUQsV0FBVzs7UUFFVUwsdURBQVU7UUFRckJELGtEQUFTOzs7QUFWbkJNLEtBQUFBLFdBQVc7O0FBbUhwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3F1ZXN0aW9ucy9bbUlkXS5qcz8wMmQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlIGZyb20gXCIuLi8uLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCJcbmltcG9ydCB7IExpc3QsIExpc3RJdGVtIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcblxuZnVuY3Rpb24gSWRDb21wb25lbnQoeyBtZWRpYVJlc3BvbnNlIH0pIHtcblxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFthLCBmb3JtZXJBcnJheV0gPSB1c2VTdGF0ZShbXSk7XG4gICAgY29uc3QgW21lZGlhLCBzZXRNZWRpYV0gPSB1c2VTdGF0ZShtZWRpYVJlc3BvbnNlPy5kYXRhPy5hdHRyaWJ1dGVzKTtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBpdCAtIFwiLCBtZWRpYVJlc3BvbnNlKTtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgeyBtSWQgfSA9IHJvdXRlci5xdWVyeVxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyB0aGUgbWlkIC0gXCIsIG1JZCk7XG5cbiAgICBjb25zdCBzdWJtaXRBbnN3ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uLnVzZXIubmFtZSlcbiAgICAgICAgICAgIGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9zdHJhcGktZm9ydW1zLyR7bUlkfWAsIHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcnM6IFsuLi5hLCB7IHVzZXI6IHNlc3Npb24udXNlci5uYW1lLCByZXBseTogYW5zd2VyIH1dLFxuICAgICAgICAgICAgICAgICAgICBBbnN3ZXJuYW1lOiBzZXNzaW9uLnVzZXIubmFtZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlLm1lZGlhUmVzcG9uc2UpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmb3VuZDogXCIsIG1JZCwgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgeyFtZWRpYSAmJiAoXG4gICAgICAgICAgICAgICAgPD5QYWdlIG5vdCBmb3VuZDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHttZWRpYSAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc3ViaGVhZGluZ30+e21lZGlhLnRpdGxlfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51c2VyaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3N0ZWQgQnk6IHttZWRpYS5Vc2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TGlzdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5xdWVzdGlvbmNvbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucXVlc3Rpb259PnttZWRpYS5RdWVzdGlvbnN9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5zd2VyY29udH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlucHV0YW5zd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nlc3Npb24gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZvcm0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGFuc3dlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M9XCI1XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Fuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtZXJBcnJheShtZWRpYS5BbnN3ZXJzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFuc3dlcihlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRBbnN3ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGUuc2hvd2Fuc3dlcn0gb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvdyA/IFwiSGlkZSBBbnN3ZXJzXCIgOiBcIlNob3cgQW5zd2Vyc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYW5zd2Vyc30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bWVkaWEuQW5zd2Vycy5tYXAoKGFuc3dlcnMsIGkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuZWFjaGFuc3dlcn0ga2V5PXtpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZS51c2VybmFtZX0+e2Fuc3dlcnMudXNlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUuYW5zd2VydGV4dH0+e2Fuc3dlcnMucmVwbHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuXG4gICAgKVxufVxuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dCkge1xuXG4gICAgY29uc3QgeyBtSWQgfSA9IGNvbnRleHQucXVlcnk7XG4gICAgbGV0IG1lZGlhUmVzcG9uc2UgPSB7fTtcblxuICAgIHRyeSB7XG4gICAgICAgIG1lZGlhUmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNy9hcGkvc3RyYXBpLWZvcnVtcy8ke21JZH1gKVxuICAgIH1cbiAgICBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgbWVkaWFSZXNwb25zZS5kYXRhID0ge307XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHByb3BzOiB7IG1lZGlhUmVzcG9uc2U6IG1lZGlhUmVzcG9uc2UuZGF0YSB9LFxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSWRDb21wb25lbnQ7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZSIsInVzZVJvdXRlciIsInVzZVNlc3Npb24iLCJMaW5rIiwiYXhpb3MiLCJMaXN0IiwiTGlzdEl0ZW0iLCJJZENvbXBvbmVudCIsIm1lZGlhUmVzcG9uc2UiLCJkYXRhIiwic2Vzc2lvbiIsInNob3ciLCJzZXRTaG93IiwiYW5zd2VyIiwic2V0QW5zd2VyIiwiYSIsImZvcm1lckFycmF5IiwiYXR0cmlidXRlcyIsIm1lZGlhIiwic2V0TWVkaWEiLCJjb25zb2xlIiwibG9nIiwicm91dGVyIiwibUlkIiwicXVlcnkiLCJzdWJtaXRBbnN3ZXIiLCJ1c2VyIiwibmFtZSIsInB1dCIsIkFuc3dlcnMiLCJyZXBseSIsIkFuc3dlcm5hbWUiLCJjYXRjaCIsImUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImVycm9yIiwiZGl2IiwiaDIiLCJjbGFzc05hbWUiLCJzdWJoZWFkaW5nIiwidGl0bGUiLCJ1c2VyaW5mbyIsInAiLCJVc2VybmFtZSIsInF1ZXN0aW9uY29udCIsInF1ZXN0aW9uIiwiUXVlc3Rpb25zIiwiYW5zd2VyY29udCIsImlucHV0YW5zd2VyIiwiZm9ybSIsInRleHRhcmVhIiwidHlwZSIsInBsYWNlaG9sZGVyIiwicm93cyIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiLCJzaG93YW5zd2VyIiwiYW5zd2VycyIsIm1hcCIsImkiLCJlYWNoYW5zd2VyIiwidXNlcm5hbWUiLCJhbnN3ZXJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/questions/[mId].js\n"));

/***/ })

});