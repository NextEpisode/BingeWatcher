"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Components/Displayforum.js":
/*!******************************************!*\
  !*** ./pages/Components/Displayforum.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Displayforum(param) {\n    var response = param.response;\n    var _this = this;\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)(), session = ref.data;\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), show = ref1[0], setShow = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), answer = ref2[0], setAnswer = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), id = ref3[0], setId = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), a = ref4[0], formerArray = ref4[1];\n    var submitAnswer = function() {\n        try {\n            console.log(session.user.name);\n            axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].put(\"http://localhost:1337/api/strapi-forums/\".concat(id), {\n                data: {\n                    Answers: (0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(a).concat([\n                        [\n                            session.user.name,\n                            answer\n                        ]\n                    ]),\n                    Answername: session.user.name\n                }\n            }).catch(function(e) {\n                console.log(e.response);\n            });\n            window.location.reload();\n        } catch (error) {\n            console.log(\"Error found: \", id, error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Sign in to access forum\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                        lineNumber: 38,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)();\n                        },\n                        children: \"Sign In\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                        lineNumber: 39,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().topcont),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().heading),\n                                    children: \"Display Forum\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                    lineNumber: 46,\n                                    columnNumber: 29\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            href: \"/upload\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                children: \"Create a new post\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                                lineNumber: 49,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                            lineNumber: 48,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: function() {\n                                                return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)();\n                                            },\n                                            children: \"Signout\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 29\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                            lineNumber: 45,\n                            columnNumber: 25\n                        }, this),\n                        response.map(function(post, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().subheading),\n                                        children: post.attributes.title\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().userinfo),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: [\n                                                \"Posted By: \",\n                                                post.attributes.Username\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 37\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().questioncont),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().question),\n                                            children: post.attributes.Questions\n                                        }, void 0, false, {\n                                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                            lineNumber: 62,\n                                            columnNumber: 37\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 33\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                        href: \"/questions/\".concat(post.id)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 33\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                                lineNumber: 56,\n                                columnNumber: 29\n                            }, _this);\n                        })\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n                    lineNumber: 44,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Displayforum.js\",\n        lineNumber: 35,\n        columnNumber: 9\n    }, this);\n}\n_s(Displayforum, \"WvoUHmMiO/+4SqTTbwaObu30qhM=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Displayforum;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Displayforum);\nvar _c;\n$RefreshReg$(_c, \"Displayforum\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O2dDQUNKO3dCQUVMSyxRQUFRLENBQUNpQyxHQUFHLENBQUMsU0FBQ0MsSUFBSSxFQUFFQyxLQUFLO2lEQUN0Qiw4REFBQ1YsS0FBRzs7a0RBQ0EsOERBQUNXLElBQUU7d0NBQUNQLFNBQVMsRUFBRXBDLDJFQUFnQjtrREFBR3lDLElBQUksQ0FBQ0ksVUFBVSxDQUFDQyxLQUFLOzs7Ozs2Q0FBTTtrREFDN0QsOERBQUNkLEtBQUc7d0NBQUNJLFNBQVMsRUFBRXBDLHlFQUFjO2tEQUMxQiw0RUFBQ2dELEdBQUM7O2dEQUFDLGFBQVc7Z0RBQUNQLElBQUksQ0FBQ0ksVUFBVSxDQUFDSSxRQUFROzs7Ozs7aURBQUs7Ozs7OzZDQUMxQztrREFDTiw4REFBQ2pCLEtBQUc7d0NBQUNJLFNBQVMsRUFBRXBDLDZFQUFrQjtrREFDOUIsNEVBQUNnRCxHQUFDOzRDQUFDWixTQUFTLEVBQUVwQyx5RUFBYztzREFBR3lDLElBQUksQ0FBQ0ksVUFBVSxDQUFDTyxTQUFTOzs7OztpREFBSzs7Ozs7NkNBQzNEO2tEQUNOLDhEQUFDaEQsa0RBQUk7d0NBQUNtQyxJQUFJLEVBQUUsYUFBWSxDQUFVLE9BQVJFLElBQUksQ0FBQzNCLEVBQUUsQ0FBRTs7Ozs7NkNBQzVCOzsrQkFURDRCLEtBQUs7Ozs7cUNBVVQ7eUJBQ1QsQ0FBQzs7Ozs7O3dCQUNBOzZCQUNQOzs7Ozs7WUFFTCxDQUNSO0FBQ04sQ0FBQztHQWxFUXBDLFlBQVk7O1FBRVNILHVEQUFVOzs7QUFGL0JHLEtBQUFBLFlBQVk7QUFvRXJCLCtEQUFlQSxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9EaXNwbGF5Zm9ydW0uanM/YmFhOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmZ1bmN0aW9uIERpc3BsYXlmb3J1bSh7IHJlc3BvbnNlIH0pIHtcblxuICAgIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFthbnN3ZXIsIHNldEFuc3dlcl0gPSB1c2VTdGF0ZShcIlwiKVxuICAgIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2EsIGZvcm1lckFycmF5XSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cbiAgICBjb25zdCBzdWJtaXRBbnN3ZXIgPSAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzZXNzaW9uLnVzZXIubmFtZSlcbiAgICAgICAgICAgIGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9zdHJhcGktZm9ydW1zLyR7aWR9YCwge1xuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgQW5zd2VyczogWy4uLmEsIFtzZXNzaW9uLnVzZXIubmFtZSwgYW5zd2VyXV0sXG4gICAgICAgICAgICAgICAgICAgIEFuc3dlcm5hbWU6IHNlc3Npb24udXNlci5uYW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUucmVzcG9uc2UpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmb3VuZDogXCIsIGlkLCBlcnJvcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshc2Vzc2lvbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPGgxPlNpZ24gaW4gdG8gYWNjZXNzIGZvcnVtPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBJbjwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtzZXNzaW9uICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcGNvbnR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlLmhlYWRpbmd9PkRpc3BsYXkgRm9ydW08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvdXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uPkNyZWF0ZSBhIG5ldyBwb3N0PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlNpZ25vdXQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB7cmVzcG9uc2UubWFwKChwb3N0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlLnN1YmhlYWRpbmd9Pntwb3N0LmF0dHJpYnV0ZXMudGl0bGV9PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVzZXJpbmZvfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBvc3RlZCBCeToge3Bvc3QuYXR0cmlidXRlcy5Vc2VybmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUucXVlc3Rpb25jb250fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGUucXVlc3Rpb259Pntwb3N0LmF0dHJpYnV0ZXMuUXVlc3Rpb25zfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcXVlc3Rpb25zLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGlzcGxheWZvcnVtOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGUiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkxpbmsiLCJheGlvcyIsIkRpc3BsYXlmb3J1bSIsInJlc3BvbnNlIiwiZGF0YSIsInNlc3Npb24iLCJzaG93Iiwic2V0U2hvdyIsImFuc3dlciIsInNldEFuc3dlciIsImlkIiwic2V0SWQiLCJhIiwiZm9ybWVyQXJyYXkiLCJzdWJtaXRBbnN3ZXIiLCJjb25zb2xlIiwibG9nIiwidXNlciIsIm5hbWUiLCJwdXQiLCJBbnN3ZXJzIiwiQW5zd2VybmFtZSIsImNhdGNoIiwiZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJkaXYiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJjbGFzc05hbWUiLCJ0b3Bjb250IiwiaGVhZGluZyIsImhyZWYiLCJtYXAiLCJwb3N0IiwiaW5kZXgiLCJoMiIsInN1YmhlYWRpbmciLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJ1c2VyaW5mbyIsInAiLCJVc2VybmFtZSIsInF1ZXN0aW9uY29udCIsInF1ZXN0aW9uIiwiUXVlc3Rpb25zIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Components/Displayforum.js\n"));

/***/ })

});