"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"633216f58f58\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3N0eWxlcy9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbHMuY3NzPzdkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI2MzMyMTZmNThmNThcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./styles/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/_layouts/MainLayout.jsx":
/*!*************************************!*\
  !*** ./app/_layouts/MainLayout.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons/lib/icons/AppstoreOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/AppstoreOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ant-design/icons/lib/icons/BarChartOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/BarChartOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ant-design/icons/lib/icons/CloudOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/CloudOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_ShopOutlined__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons/lib/icons/ShopOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/ShopOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons/lib/icons/TeamOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/TeamOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UploadOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/UploadOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons/lib/icons/UserOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/UserOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_VideoCameraOutlined__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons/lib/icons/VideoCameraOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/VideoCameraOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_LaptopOutlined__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ant-design/icons/lib/icons/LaptopOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/LaptopOutlined.js\");\n/* harmony import */ var _ant_design_icons_lib_icons_NotificationOutlined__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ant-design/icons/lib/icons/NotificationOutlined */ \"(app-pages-browser)/./node_modules/@ant-design/icons/lib/icons/NotificationOutlined.js\");\n/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/lib/layout */ \"(app-pages-browser)/./node_modules/antd/lib/layout/index.js\");\n/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Header/Header */ \"(app-pages-browser)/./app/_layouts/Header/Header.jsx\");\n/* harmony import */ var _login_LayoutLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../login/LayoutLogin */ \"(app-pages-browser)/./app/login/LayoutLogin.jsx\");\n/* harmony import */ var _context_ContextProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../context/ContextProvider */ \"(app-pages-browser)/./app/context/ContextProvider.js\");\n/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @nextui-org/react */ \"(app-pages-browser)/./node_modules/@nextui-org/system/dist/chunk-5DCY5R7Z.mjs\");\n/* harmony import */ var _components_site_header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/site-header */ \"(app-pages-browser)/./components/site-header.tsx\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! js-cookie */ \"(app-pages-browser)/./node_modules/js-cookie/dist/js.cookie.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// import {antd} from \"antd\"\nconst { Header, Content, Footer, Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nconst items = [\n    _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n    _ant_design_icons_lib_icons_VideoCameraOutlined__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    _ant_design_icons_lib_icons_UploadOutlined__WEBPACK_IMPORTED_MODULE_10__[\"default\"],\n    _ant_design_icons_lib_icons_BarChartOutlined__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    _ant_design_icons_lib_icons_CloudOutlined__WEBPACK_IMPORTED_MODULE_12__[\"default\"],\n    _ant_design_icons_lib_icons_AppstoreOutlined__WEBPACK_IMPORTED_MODULE_13__[\"default\"],\n    _ant_design_icons_lib_icons_TeamOutlined__WEBPACK_IMPORTED_MODULE_14__[\"default\"],\n    _ant_design_icons_lib_icons_ShopOutlined__WEBPACK_IMPORTED_MODULE_15__[\"default\"],\n    _ant_design_icons_lib_icons_LaptopOutlined__WEBPACK_IMPORTED_MODULE_16__[\"default\"]\n].map((icon, index)=>({\n        key: String(index + 1),\n        icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon),\n        label: \"nav \".concat(index + 1)\n    }));\nconst items2 = [\n    {\n        \"menu\": \"Accueil\",\n        \"icon\": _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        \"menu\": \"Saisie\",\n        \"icon\": _ant_design_icons_lib_icons_UserOutlined__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n    },\n    {\n        \"menu\": \"Rapport\",\n        \"icon\": _ant_design_icons_lib_icons_LaptopOutlined__WEBPACK_IMPORTED_MODULE_16__[\"default\"]\n    },\n    {\n        \"menu\": \"Ressources\",\n        \"icon\": _ant_design_icons_lib_icons_NotificationOutlined__WEBPACK_IMPORTED_MODULE_17__[\"default\"]\n    },\n    {\n        \"menu\": \"Parametres\",\n        \"icon\": _ant_design_icons_lib_icons_ShopOutlined__WEBPACK_IMPORTED_MODULE_15__[\"default\"]\n    }\n].map((icon, index)=>{\n    const key = String(index + 1);\n    return {\n        key: \"\".concat(icon.menu, \" \").concat(key),\n        icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon.icon),\n        label: \"\".concat(icon.menu),\n        children: new Array(4).fill(null).map((_, j)=>{\n            const subKey = index * 4 + j + 1;\n            return {\n                key: subKey,\n                label: \"option\".concat(subKey)\n            };\n        })\n    };\n});\nconst MainLayout = (param)=>{\n    let { children } = param;\n    _s();\n    const colorBgContainer = \"blue\";\n    const statut = js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"connected\") ? js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"connected\") : false;\n    const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"connected\") ? js_cookie__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"connected\") : false);\n    const cl = (id)=>{\n        alert(id);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_18__.NextUIProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_ContextProvider__WEBPACK_IMPORTED_MODULE_4__.ContextProvider, {\n            children: connected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                hasSider: true,\n                className: \"text-white overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                    className: \"site-layout\",\n                    style: {\n                        marginLeft: 0\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                            style: {\n                                padding: 0,\n                                position: \"fixed\"\n                            },\n                            className: \"bg-gray-300 border-b-0 w-screen\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_site_header__WEBPACK_IMPORTED_MODULE_5__.SiteHeader, {}, void 0, false, {\n                                fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                            lineNumber: 87,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                            style: {\n                                margin: \"4px 4px 0\",\n                                overflow: \"initial\"\n                            },\n                            className: \"px-3 p-5 min-h-[800px]\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    padding: 5,\n                                    color: \"black\"\n                                },\n                                className: \"light min-h-[400px] mt-[100px] mx-[130px] py-3 px-5\",\n                                children: children\n                            }, void 0, false, {\n                                fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                                lineNumber: 104,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                            lineNumber: 97,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                            style: {\n                                textAlign: \"center\"\n                            },\n                            children: \"INDEX-RDC \\xa92023 Developp\\xe9 par TDL\"\n                        }, void 0, false, {\n                            fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                            lineNumber: 115,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                lineNumber: 79,\n                columnNumber: 13\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-screen bg-gray-200 py-auto flex flex-col justify-between items-center pt-[100px]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_login_LayoutLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                    lineNumber: 126,\n                    columnNumber: 15\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n                lineNumber: 125,\n                columnNumber: 13\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/macbook/Documents/projets/nextjs/moona/app/_layouts/MainLayout.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MainLayout, \"Gd53+IVupUM8zZ1B9xMkf38lFVQ=\");\n_c = MainLayout;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainLayout);\nvar _c;\n$RefreshReg$(_c, \"MainLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fbGF5b3V0cy9NYWluTGF5b3V0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN3QztBQVliO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ3VCO0FBQUE7QUFBQTtBQUFBO0FBQ1A7QUFFSztBQUMrQjtBQUM1QjtBQUNFO0FBQ3RCO0FBQy9CLDRCQUE0QjtBQUU1QixNQUFNLEVBQUV1QixNQUFNLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxLQUFLLEVBQUUsR0FBR2QsdURBQU1BO0FBQ2pELE1BQU1lLFFBQVE7SUFDWm5CLGdGQUFZQTtJQUNaQyx1RkFBbUJBO0lBQ25CRixtRkFBY0E7SUFDZEoscUZBQWdCQTtJQUNoQkMsa0ZBQWFBO0lBQ2JGLHFGQUFnQkE7SUFDaEJJLGlGQUFZQTtJQUNaRCxpRkFBWUE7SUFDWkssbUZBQWNBO0NBQ2YsQ0FBQ2tCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxRQUFXO1FBQ3RCQyxLQUFLQyxPQUFPRixRQUFRO1FBQ3BCRCxvQkFBTTdCLDBEQUFtQixDQUFDNkI7UUFDMUJLLE9BQU8sT0FBaUIsT0FBVkosUUFBUTtJQUN4QjtBQUVBLE1BQU1LLFNBQ0o7SUFDRTtRQUNFLFFBQVE7UUFDUixRQUFRM0IsZ0ZBQVlBO0lBQ3RCO0lBQ0E7UUFBRSxRQUFRO1FBQVUsUUFBUUEsZ0ZBQVlBO0lBQUM7SUFDekM7UUFBRSxRQUFRO1FBQVcsUUFBUUUsbUZBQWNBO0lBQUM7SUFDNUM7UUFBRSxRQUFRO1FBQWMsUUFBUUMseUZBQW9CQTtJQUFDO0lBQ3JEO1FBQUUsUUFBUTtRQUFjLFFBQVFOLGlGQUFZQTtJQUFDO0NBQzlDLENBQUN1QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUM7SUFDWCxNQUFNQyxNQUFNQyxPQUFPRixRQUFRO0lBQzNCLE9BQU87UUFDTEMsS0FBSyxHQUFnQkEsT0FBYkYsS0FBS08sSUFBSSxFQUFDLEtBQU8sT0FBSkw7UUFDckJGLG9CQUFNN0IsMERBQW1CLENBQUM2QixLQUFLQSxJQUFJO1FBQ25DSyxPQUFPLEdBQWEsT0FBVkwsS0FBS08sSUFBSTtRQUNuQkMsVUFBVSxJQUFJQyxNQUFNLEdBQUdDLElBQUksQ0FBQyxNQUFNWCxHQUFHLENBQUMsQ0FBQ1ksR0FBR0M7WUFDeEMsTUFBTUMsU0FBU1osUUFBUSxJQUFJVyxJQUFJO1lBQy9CLE9BQU87Z0JBQ0xWLEtBQUtXO2dCQUNMUixPQUFPLFNBQWdCLE9BQVBRO1lBQ2xCO1FBQ0Y7SUFDRjtBQUNGO0FBQ0YsTUFBTUMsYUFBYTtRQUFDLEVBQUVOLFFBQVEsRUFBRTs7SUFDOUIsTUFBTU8sbUJBQW1CO0lBQ3pCLE1BQU1DLFNBQVN2QixpREFBT0EsQ0FBQ3dCLEdBQUcsQ0FBQyxlQUFleEIsaURBQU9BLENBQUN3QixHQUFHLENBQUMsZUFBZTtJQUNyRSxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBRy9DLCtDQUFRQSxDQUFDcUIsaURBQU9BLENBQUN3QixHQUFHLENBQUMsZUFBZXhCLGlEQUFPQSxDQUFDd0IsR0FBRyxDQUFDLGVBQWU7SUFDakcsTUFBTUcsS0FBSyxDQUFDQztRQUNWQyxNQUFNRDtJQUNSO0lBQ0EscUJBQ0UsOERBQUM5Qiw4REFBY0E7a0JBQ2IsNEVBQUNGLHFFQUFlQTtzQkFFWjZCLDBCQUNFLDhEQUFDbkMsdURBQU1BO2dCQUFDd0MsUUFBUTtnQkFBQ0MsV0FBVTswQkFFekIsNEVBQUN6Qyx1REFBTUE7b0JBQ0x5QyxXQUFVO29CQUNWQyxPQUFPO3dCQUNMQyxZQUFZO29CQUNkOztzQ0FFQSw4REFBQ2hDOzRCQUNDK0IsT0FBTztnQ0FDTEUsU0FBUztnQ0FDVEMsVUFBVTs0QkFDWjs0QkFDQUosV0FBVTtzQ0FHViw0RUFBQ2hDLCtEQUFVQTs7Ozs7Ozs7OztzQ0FFYiw4REFBQ0c7NEJBQ0M4QixPQUFPO2dDQUNMSSxRQUFRO2dDQUNSQyxVQUFVOzRCQUNaOzRCQUNBTixXQUFVO3NDQUVWLDRFQUFDTztnQ0FDQ04sT0FBTztvQ0FDTEUsU0FBUztvQ0FDVEssT0FBTztnQ0FDVDtnQ0FDQVIsV0FBVTswQ0FHVGhCOzs7Ozs7Ozs7OztzQ0FHTCw4REFBQ1o7NEJBQ0M2QixPQUFPO2dDQUNMUSxXQUFXOzRCQUNiO3NDQUNEOzs7Ozs7Ozs7Ozs7Ozs7OzBDQU1MLDhEQUFDRjtnQkFBSVAsV0FBVTswQkFDYiw0RUFBQ3BDLDBEQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPMUI7R0FsRU0wQjtLQUFBQTtBQW1FTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2xheW91dHMvTWFpbkxheW91dC5qc3g/OTdmMyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtcbiAgQXBwc3RvcmVPdXRsaW5lZCxcbiAgQmFyQ2hhcnRPdXRsaW5lZCxcbiAgQ2xvdWRPdXRsaW5lZCxcbiAgU2hvcE91dGxpbmVkLFxuICBUZWFtT3V0bGluZWQsXG4gIFVwbG9hZE91dGxpbmVkLFxuICBVc2VyT3V0bGluZWQsXG4gIFZpZGVvQ2FtZXJhT3V0bGluZWQsXG4gIExhcHRvcE91dGxpbmVkLFxuICBOb3RpZmljYXRpb25PdXRsaW5lZFxufSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUsIHRoZW1lLCBBbGVydCB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IExheW91dEhlYWRlciBmcm9tIFwiLi9IZWFkZXIvSGVhZGVyXCI7XG5cbmltcG9ydCBMYXlvdXRMb2dpbiBmcm9tIFwiLi8uLi9sb2dpbi9MYXlvdXRMb2dpblwiXG5pbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIsIHVzZVN0YXRlQ29udGV4dCB9IGZyb20gJy4vLi4vY29udGV4dC9Db250ZXh0UHJvdmlkZXInXG5pbXBvcnQgeyBOZXh0VUlQcm92aWRlciB9IGZyb20gXCJAbmV4dHVpLW9yZy9yZWFjdFwiO1xuaW1wb3J0IHsgU2l0ZUhlYWRlciB9IGZyb20gXCJAL2NvbXBvbmVudHMvc2l0ZS1oZWFkZXJcIlxuaW1wb3J0IENvb2tpZXMgZnJvbSBcImpzLWNvb2tpZVwiXG4vLyBpbXBvcnQge2FudGR9IGZyb20gXCJhbnRkXCJcblxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcbmNvbnN0IGl0ZW1zID0gW1xuICBVc2VyT3V0bGluZWQsXG4gIFZpZGVvQ2FtZXJhT3V0bGluZWQsXG4gIFVwbG9hZE91dGxpbmVkLFxuICBCYXJDaGFydE91dGxpbmVkLFxuICBDbG91ZE91dGxpbmVkLFxuICBBcHBzdG9yZU91dGxpbmVkLFxuICBUZWFtT3V0bGluZWQsXG4gIFNob3BPdXRsaW5lZCxcbiAgTGFwdG9wT3V0bGluZWRcbl0ubWFwKChpY29uLCBpbmRleCkgPT4gKHtcbiAga2V5OiBTdHJpbmcoaW5kZXggKyAxKSxcbiAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChpY29uKSxcbiAgbGFiZWw6IGBuYXYgJHtpbmRleCArIDF9YCxcbn0pKTtcblxuY29uc3QgaXRlbXMyID1cbiAgW1xuICAgIHtcbiAgICAgIFwibWVudVwiOiBcIkFjY3VlaWxcIixcbiAgICAgIFwiaWNvblwiOiBVc2VyT3V0bGluZWRcbiAgICB9LFxuICAgIHsgXCJtZW51XCI6IFwiU2Fpc2llXCIsIFwiaWNvblwiOiBVc2VyT3V0bGluZWQgfSxcbiAgICB7IFwibWVudVwiOiBcIlJhcHBvcnRcIiwgXCJpY29uXCI6IExhcHRvcE91dGxpbmVkIH0sXG4gICAgeyBcIm1lbnVcIjogXCJSZXNzb3VyY2VzXCIsIFwiaWNvblwiOiBOb3RpZmljYXRpb25PdXRsaW5lZCB9LFxuICAgIHsgXCJtZW51XCI6IFwiUGFyYW1ldHJlc1wiLCBcImljb25cIjogU2hvcE91dGxpbmVkIH1cbiAgXS5tYXAoKGljb24sIGluZGV4KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gU3RyaW5nKGluZGV4ICsgMSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIGtleTogYCR7aWNvbi5tZW51fSAke2tleX1gLFxuICAgICAgaWNvbjogUmVhY3QuY3JlYXRlRWxlbWVudChpY29uLmljb24pLFxuICAgICAgbGFiZWw6IGAke2ljb24ubWVudX1gLFxuICAgICAgY2hpbGRyZW46IG5ldyBBcnJheSg0KS5maWxsKG51bGwpLm1hcCgoXywgaikgPT4ge1xuICAgICAgICBjb25zdCBzdWJLZXkgPSBpbmRleCAqIDQgKyBqICsgMTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBrZXk6IHN1YktleSxcbiAgICAgICAgICBsYWJlbDogYG9wdGlvbiR7c3ViS2V5fWAsXG4gICAgICAgIH07XG4gICAgICB9KSxcbiAgICB9O1xuICB9KTtcbmNvbnN0IE1haW5MYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIGNvbnN0IGNvbG9yQmdDb250YWluZXIgPSBcImJsdWVcIjtcbiAgY29uc3Qgc3RhdHV0ID0gQ29va2llcy5nZXQoXCJjb25uZWN0ZWRcIikgPyBDb29raWVzLmdldChcImNvbm5lY3RlZFwiKSA6IGZhbHNlO1xuICBjb25zdCBbY29ubmVjdGVkLCBzZXRDb25uZWN0ZWRdID0gdXNlU3RhdGUoQ29va2llcy5nZXQoXCJjb25uZWN0ZWRcIikgPyBDb29raWVzLmdldChcImNvbm5lY3RlZFwiKSA6IGZhbHNlKTtcbiAgY29uc3QgY2wgPSAoaWQpID0+IHtcbiAgICBhbGVydChpZCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8TmV4dFVJUHJvdmlkZXI+XG4gICAgICA8Q29udGV4dFByb3ZpZGVyPlxuICAgICAgICB7XG4gICAgICAgICAgY29ubmVjdGVkID9cbiAgICAgICAgICAgIDxMYXlvdXQgaGFzU2lkZXIgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBvdmVyZmxvdy1oaWRkZW5cIj5cblxuICAgICAgICAgICAgICA8TGF5b3V0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXRcIlxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBtYXJnaW5MZWZ0OiAwLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8SGVhZGVyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogXCJmaXhlZFwiXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctZ3JheS0zMDAgYm9yZGVyLWItMCB3LXNjcmVlblwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgey8qIDxMYXlvdXRIZWFkZXIgLz4gKi99XG4gICAgICAgICAgICAgICAgICA8U2l0ZUhlYWRlciAvPlxuICAgICAgICAgICAgICAgIDwvSGVhZGVyPlxuICAgICAgICAgICAgICAgIDxDb250ZW50XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc0cHggNHB4IDAnLFxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2luaXRpYWwnLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTMgcC01IG1pbi1oLVs4MDBweF1cIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcImJsYWNrXCJcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGlnaHQgbWluLWgtWzQwMHB4XSBtdC1bMTAwcHhdIG14LVsxMzBweF0gcHktMyBweC01XCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxBbGVydCBjbGFzc05hbWU9XCJcIiBtZXNzc2FnZT1cImNvbm5lY3TDqSBjb21tZSA6XCIgdHlwZT1cImluZm9cIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxuICAgICAgICAgICAgICAgIDxGb290ZXJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIElOREVYLVJEQyDCqTIwMjMgRGV2ZWxvcHDDqSBwYXIgVERMXG4gICAgICAgICAgICAgICAgPC9Gb290ZXI+XG4gICAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtc2NyZWVuIGJnLWdyYXktMjAwIHB5LWF1dG8gZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHB0LVsxMDBweF1cIj5cbiAgICAgICAgICAgICAgPExheW91dExvZ2luIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICB9XG4gICAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgICA8L05leHRVSVByb3ZpZGVyPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IE1haW5MYXlvdXQ7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkFwcHN0b3JlT3V0bGluZWQiLCJCYXJDaGFydE91dGxpbmVkIiwiQ2xvdWRPdXRsaW5lZCIsIlNob3BPdXRsaW5lZCIsIlRlYW1PdXRsaW5lZCIsIlVwbG9hZE91dGxpbmVkIiwiVXNlck91dGxpbmVkIiwiVmlkZW9DYW1lcmFPdXRsaW5lZCIsIkxhcHRvcE91dGxpbmVkIiwiTm90aWZpY2F0aW9uT3V0bGluZWQiLCJMYXlvdXQiLCJNZW51IiwidGhlbWUiLCJBbGVydCIsIkxheW91dEhlYWRlciIsIkxheW91dExvZ2luIiwiQ29udGV4dFByb3ZpZGVyIiwidXNlU3RhdGVDb250ZXh0IiwiTmV4dFVJUHJvdmlkZXIiLCJTaXRlSGVhZGVyIiwiQ29va2llcyIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsIml0ZW1zIiwibWFwIiwiaWNvbiIsImluZGV4Iiwia2V5IiwiU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImxhYmVsIiwiaXRlbXMyIiwibWVudSIsImNoaWxkcmVuIiwiQXJyYXkiLCJmaWxsIiwiXyIsImoiLCJzdWJLZXkiLCJNYWluTGF5b3V0IiwiY29sb3JCZ0NvbnRhaW5lciIsInN0YXR1dCIsImdldCIsImNvbm5lY3RlZCIsInNldENvbm5lY3RlZCIsImNsIiwiaWQiLCJhbGVydCIsImhhc1NpZGVyIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsInBvc2l0aW9uIiwibWFyZ2luIiwib3ZlcmZsb3ciLCJkaXYiLCJjb2xvciIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_layouts/MainLayout.jsx\n"));

/***/ })

});