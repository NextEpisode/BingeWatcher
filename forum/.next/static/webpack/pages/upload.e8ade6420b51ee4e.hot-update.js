"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/upload",{

/***/ "./pages/Components/Uploadforum.js":
/*!*****************************************!*\
  !*** ./pages/Components/Uploadforum.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Uploadforum(param) {\n    var session = param.session;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), description = ref1[0], setDescription = ref1[1];\n    var url = \"http://localhost:1337/api/strapi-forums\";\n    var sendData = function() {\n        var _ref = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(function() {\n            var ref, response;\n            return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this, function(_state) {\n                switch(_state.label){\n                    case 0:\n                        return [\n                            4,\n                            axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(url, {\n                                data: {\n                                    title: name,\n                                    Questions: description,\n                                    Answers: [],\n                                    Username: session.user.name\n                                }\n                            })\n                        ];\n                    case 1:\n                        response = _state.sent();\n                        console.log(response);\n                        window.location.href = \"http://localhost:3000/questions/\".concat((ref = response.data) === null || ref === void 0 ? void 0 : ref.data.id);\n                        return [\n                            2\n                        ];\n                }\n            });\n        });\n        return function sendData() {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().uploadpage),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().topcont),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Create a new post\"\n                    }, void 0, false, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                        href: \"/\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            children: \"Forum\"\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().formcont),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().uploadform),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Enter your title\",\n                            maxLength: \"74\",\n                            value: name,\n                            onChange: function(e) {\n                                setName(e.target.value);\n                                console.log(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                            lineNumber: 35,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            type: \"text\",\n                            placeholder: \"Enter your description\",\n                            rows: \"8\",\n                            value: description,\n                            onChange: function(e) {\n                                return setDescription(e.target.value);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().inputanswer),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: function(e) {\n                                    e.preventDefault();\n                                    sendData();\n                                },\n                                children: \"Submit Post\"\n                            }, void 0, false, {\n                                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                                lineNumber: 53,\n                                columnNumber: 25\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                            lineNumber: 52,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/fernando/Documents/Programming/CAPSTONEPrototyping/forumapp/forum/pages/Components/Uploadforum.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Uploadforum, \"RbrO7EvaECjsVDQyExqmmCjcan0=\");\n_c = Uploadforum;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Uploadforum);\nvar _c;\n$RefreshReg$(_c, \"Uploadforum\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFFBQU07Z0NBQUNlLE9BQU8sRUFBRSxTQUFDTCxDQUFDLEVBQUs7b0NBQ3BCQSxDQUFDLENBQUNNLGNBQWMsRUFBRSxDQUFDO29DQUNuQnBDLFFBQVEsRUFBRSxDQUFDO2dDQUNmLENBQUM7MENBQUUsYUFDSDs7Ozs7b0NBQVM7Ozs7O2dDQUNQOzs7Ozs7d0JBQ0g7Ozs7O29CQUNMOzs7Ozs7WUFDSixDQUNSO0FBQ04sQ0FBQztHQXpEUVAsV0FBVztBQUFYQSxLQUFBQSxXQUFXO0FBMERwQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0NvbXBvbmVudHMvVXBsb2FkZm9ydW0uanM/ODA5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZSBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvTGlua1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmZ1bmN0aW9uIFVwbG9hZGZvcnVtKHsgc2Vzc2lvbiB9KSB7XG5cbiAgICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCBbZGVzY3JpcHRpb24sIHNldERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHVybCA9IFwiaHR0cDovL2xvY2FsaG9zdDoxMzM3L2FwaS9zdHJhcGktZm9ydW1zXCI7XG5cbiAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jICgpID0+IHtcblxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCB7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6IG5hbWUsXG4gICAgICAgICAgICAgICAgUXVlc3Rpb25zOiBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICBBbnN3ZXJzOiBbXSxcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogc2Vzc2lvbi51c2VyLm5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9xdWVzdGlvbnMvJHtyZXNwb25zZS5kYXRhPy5kYXRhLmlkfWBcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZHBhZ2V9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLnRvcGNvbnR9PlxuICAgICAgICAgICAgICAgIDxoMT5DcmVhdGUgYSBuZXcgcG9zdDwvaDE+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5Gb3J1bTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmZvcm1jb250fT5cbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlLnVwbG9hZGZvcm19PlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI3NFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE5hbWUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICByb3dzPVwiOFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlLmlucHV0YW5zd2VyfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VuZERhdGEoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlN1Ym1pdCBQb3N0XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBVcGxvYWRmb3J1bTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInN0eWxlIiwiTGluayIsImF4aW9zIiwiVXBsb2FkZm9ydW0iLCJzZXNzaW9uIiwibmFtZSIsInNldE5hbWUiLCJkZXNjcmlwdGlvbiIsInNldERlc2NyaXB0aW9uIiwidXJsIiwic2VuZERhdGEiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIiwidGl0bGUiLCJRdWVzdGlvbnMiLCJBbnN3ZXJzIiwiVXNlcm5hbWUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwidXBsb2FkcGFnZSIsInRvcGNvbnQiLCJoMSIsImJ1dHRvbiIsImZvcm1jb250IiwiZm9ybSIsInVwbG9hZGZvcm0iLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsIm1heExlbmd0aCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidGV4dGFyZWEiLCJyb3dzIiwiaW5wdXRhbnN3ZXIiLCJvbkNsaWNrIiwicHJldmVudERlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Components/Uploadforum.js\n"));

/***/ })

});