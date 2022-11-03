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

/***/ "./pages/Components/ForumList.js":
/*!***************************************!*\
  !*** ./pages/Components/ForumList.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForumList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/List */ \"./node_modules/@mui/material/esm/List/index.js\");\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/esm/Divider/index.js\");\n/* harmony import */ var _ForumListItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ForumListItem */ \"./pages/Components/ForumListItem.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\nfunction ForumList(param) {\n    var response = param.response;\n    var _this = this;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        sx: {\n            width: \"100%\",\n            maxWidth: \"80%\",\n            bgcolor: \"background.paper\"\n        },\n        children: [\n            response.map(function(post1, index) {\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            href: \"/questions/\".concat(post1.id),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: style.subheading,\n                                children: post1.attributes.title\n                            }, void 0, false, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                                lineNumber: 14,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                            lineNumber: 13,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.userinfo,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: [\n                                    \"Posted By: \",\n                                    post1.attributes.Username\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                                lineNumber: 17,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                            lineNumber: 16,\n                            columnNumber: 21\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: style.questioncont,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: style.question,\n                                children: post1.attributes.Questions\n                            }, void 0, false, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                                lineNumber: 20,\n                                columnNumber: 25\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                            lineNumber: 19,\n                            columnNumber: 21\n                        }, _this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                    lineNumber: 12,\n                    columnNumber: 17\n                }, _this);\n            }),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                href: \"/questions/\".concat(post.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ForumListItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    forumEntry: post\n                }, void 0, false, {\n                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                    lineNumber: 25,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                variant: \"inset\",\n                component: \"li\"\n            }, void 0, false, {\n                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/ForumList.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_c = ForumList;\nvar _c;\n$RefreshReg$(_c, \"ForumList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9Db21wb25lbnRzL0ZvcnVtTGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBK0I7QUFDTztBQUNNO0FBQ0E7QUFDZjtBQUVkLFNBQVNLLFNBQVMsQ0FBQyxLQUFZLEVBQUU7UUFBZCxRQUFVLEdBQVYsS0FBWSxDQUFWQyxRQUFROztJQUN4QyxxQkFDSSw4REFBQ0wsMERBQUk7UUFBQ00sRUFBRSxFQUFFO1lBQUVDLEtBQUssRUFBRSxNQUFNO1lBQUVDLFFBQVEsRUFBRSxLQUFLO1lBQUVDLE9BQU8sRUFBRSxrQkFBa0I7U0FBRTs7WUFFcEVKLFFBQVEsQ0FBQ0ssR0FBRyxDQUFDLFNBQUNDLEtBQUksRUFBRUMsS0FBSztxQ0FDdEIsOERBQUNDLEtBQUc7O3NDQUNBLDhEQUFDVixrREFBSTs0QkFBQ1csSUFBSSxFQUFFLGFBQVksQ0FBVSxPQUFSSCxLQUFJLENBQUNJLEVBQUUsQ0FBRTtzQ0FDL0IsNEVBQUNDLElBQUU7Z0NBQUNDLFNBQVMsRUFBRUMsS0FBSyxDQUFDQyxVQUFVOzBDQUFHUixLQUFJLENBQUNTLFVBQVUsQ0FBQ0MsS0FBSzs7Ozs7cUNBQU07Ozs7O2lDQUMxRDtzQ0FDUCw4REFBQ1IsS0FBRzs0QkFBQ0ksU0FBUyxFQUFFQyxLQUFLLENBQUNJLFFBQVE7c0NBQzFCLDRFQUFDQyxHQUFDOztvQ0FBQyxhQUFXO29DQUFDWixLQUFJLENBQUNTLFVBQVUsQ0FBQ0ksUUFBUTs7Ozs7O3FDQUFLOzs7OztpQ0FDMUM7c0NBQ04sOERBQUNYLEtBQUc7NEJBQUNJLFNBQVMsRUFBRUMsS0FBSyxDQUFDTyxZQUFZO3NDQUM5Qiw0RUFBQ0YsR0FBQztnQ0FBQ04sU0FBUyxFQUFFQyxLQUFLLENBQUNRLFFBQVE7MENBQUdmLEtBQUksQ0FBQ1MsVUFBVSxDQUFDTyxTQUFTOzs7OztxQ0FBSzs7Ozs7aUNBQzNEOzttQkFUQWYsS0FBSzs7Ozt5QkFVVDthQUNULENBQUM7MEJBQ0YsOERBQUNULGtEQUFJO2dCQUFDVyxJQUFJLEVBQUUsYUFBWSxDQUFVLE9BQVJILElBQUksQ0FBQ0ksRUFBRSxDQUFFOzBCQUMvQiw0RUFBQ2Isc0RBQWE7b0JBQUMwQixVQUFVLEVBQUVqQixJQUFJOzs7Ozt3QkFFZjs7Ozs7b0JBQ2I7MEJBRVAsOERBQUNWLDZEQUFPO2dCQUFDNEIsT0FBTyxFQUFDLE9BQU87Z0JBQUNDLFNBQVMsRUFBQyxJQUFJOzs7OztvQkFBRzs7Ozs7O1lBQ3RDLENBQ1Y7QUFDTixDQUFDO0FBMUJ1QjFCLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvQ29tcG9uZW50cy9Gb3J1bUxpc3QuanM/NzExNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGlzdCBmcm9tICdAbXVpL21hdGVyaWFsL0xpc3QnO1xuaW1wb3J0IERpdmlkZXIgZnJvbSAnQG11aS9tYXRlcmlhbC9EaXZpZGVyJztcbmltcG9ydCBGb3J1bUxpc3RJdGVtIGZyb20gJy4vRm9ydW1MaXN0SXRlbSc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3J1bUxpc3QoeyByZXNwb25zZSB9KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExpc3Qgc3g9e3sgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc4MCUnLCBiZ2NvbG9yOiAnYmFja2dyb3VuZC5wYXBlcicgfX0+XG5cbiAgICAgICAgICAgIHtyZXNwb25zZS5tYXAoKHBvc3QsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9xdWVzdGlvbnMvJHtwb3N0LmlkfWB9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGUuc3ViaGVhZGluZ30+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS51c2VyaW5mb30+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Qb3N0ZWQgQnk6IHtwb3N0LmF0dHJpYnV0ZXMuVXNlcm5hbWV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnF1ZXN0aW9uY29udH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlLnF1ZXN0aW9ufT57cG9zdC5hdHRyaWJ1dGVzLlF1ZXN0aW9uc308L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3F1ZXN0aW9ucy8ke3Bvc3QuaWR9YH0gPlxuICAgICAgICAgICAgICAgIDxGb3J1bUxpc3RJdGVtIGZvcnVtRW50cnk9e3Bvc3R9PlxuXG4gICAgICAgICAgICAgICAgPC9Gb3J1bUxpc3RJdGVtPlxuICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwiaW5zZXRcIiBjb21wb25lbnQ9XCJsaVwiIC8+XG4gICAgICAgIDwvTGlzdCA+XG4gICAgKTtcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJMaXN0IiwiRGl2aWRlciIsIkZvcnVtTGlzdEl0ZW0iLCJMaW5rIiwiRm9ydW1MaXN0IiwicmVzcG9uc2UiLCJzeCIsIndpZHRoIiwibWF4V2lkdGgiLCJiZ2NvbG9yIiwibWFwIiwicG9zdCIsImluZGV4IiwiZGl2IiwiaHJlZiIsImlkIiwiaDIiLCJjbGFzc05hbWUiLCJzdHlsZSIsInN1YmhlYWRpbmciLCJhdHRyaWJ1dGVzIiwidGl0bGUiLCJ1c2VyaW5mbyIsInAiLCJVc2VybmFtZSIsInF1ZXN0aW9uY29udCIsInF1ZXN0aW9uIiwiUXVlc3Rpb25zIiwiZm9ydW1FbnRyeSIsInZhcmlhbnQiLCJjb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/ForumList.js\n"));

/***/ })

});