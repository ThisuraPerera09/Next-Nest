"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/edit/[projectid]/page",{

/***/ "(app-pages-browser)/./src/components/Modal.tsx":
/*!**********************************!*\
  !*** ./src/components/Modal.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Modal = (param)=>{\n    let { isOpen, onClose, task, onUpdate, accessToken } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [dueDate, setDueDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [userId, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (task) {\n            setTitle(task.title);\n            setDescription(task.description);\n            setDueDate(task.dueDate);\n            setStatus(task.status);\n            setUserId(task.userId);\n        }\n        fetchUsers();\n    }, [\n        task\n    ]);\n    const fetchUsers = async ()=>{\n        try {\n            const response = await fetch(\"\".concat(Backend_URL, \"/user\"), {\n                headers: {\n                    Authorization: \"Bearer \".concat(accessToken)\n                }\n            });\n            if (!response.ok) {\n                throw new Error(\"Failed to fetch users\");\n            }\n            const data = await response.json();\n            setUsers(data);\n        } catch (error) {\n            setError(error.message);\n        }\n    };\n    const handleSubmit = ()=>{\n        const updatedTask = {\n            id: task.id,\n            title,\n            description,\n            dueDate,\n            status,\n            userId\n        };\n        onUpdate(updatedTask);\n    };\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"bg-white p-4 rounded-lg shadow-lg w-full max-w-md\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-xl font-bold mb-4\",\n                    children: \"Edit Task\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 9\n                }, undefined),\n                error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-red-500\",\n                    children: error\n                }, void 0, false, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 19\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-sm font-medium mb-1\",\n                            children: \"Title\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value),\n                            className: \"p-2 border border-gray-400 rounded w-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-sm font-medium mb-1\",\n                            children: \"Description\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 77,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            value: description,\n                            onChange: (e)=>setDescription(e.target.value),\n                            className: \"p-2 border border-gray-400 rounded w-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 78,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 76,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-sm font-medium mb-1\",\n                            children: \"Due Date\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 85,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            value: dueDate,\n                            onChange: (e)=>setDueDate(e.target.value),\n                            className: \"p-2 border border-gray-400 rounded w-full\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-sm font-medium mb-1\",\n                            children: \"Status\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 94,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: status,\n                            onChange: (e)=>setStatus(e.target.value),\n                            className: \"p-2 border border-gray-400 rounded w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"TODO\",\n                                    children: \"TODO\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"IN_PROGRESS\",\n                                    children: \"In Progress\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"DONE\",\n                                    children: \"Done\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 95,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 93,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mb-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            className: \"block text-sm font-medium mb-1\",\n                            children: \"Assign User\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                            value: userId || \"\",\n                            onChange: (e)=>setUserId(Number(e.target.value)),\n                            className: \"p-2 border border-gray-400 rounded w-full\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                    value: \"\",\n                                    children: \"Select User\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                                    lineNumber: 112,\n                                    columnNumber: 13\n                                }, undefined),\n                                users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                                        value: user.id,\n                                        children: user.name\n                                    }, user.id, false, {\n                                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, undefined))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 105,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-end space-x-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: handleSubmit,\n                            className: \"bg-blue-500 text-white p-2 rounded\",\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 121,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: onClose,\n                            className: \"bg-gray-500 text-white p-2 rounded\",\n                            children: \"Cancel\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                            lineNumber: 127,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n                    lineNumber: 120,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n            lineNumber: 64,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\components\\\\Modal.tsx\",\n        lineNumber: 63,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Modal, \"hjZKoYvHupWDBPYaB3fpX/dvQzk=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFVbkQsTUFBTUcsUUFBc0M7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsSUFBSSxFQUFFQyxRQUFRLEVBQUVDLFdBQVcsRUFBRTs7SUFDM0YsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFTO0lBQzNDLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNXLFNBQVNDLFdBQVcsR0FBR1osK0NBQVFBLENBQVM7SUFDL0MsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFTO0lBQzdDLE1BQU0sQ0FBQ2UsT0FBT0MsU0FBUyxHQUFHaEIsK0NBQVFBLENBQVEsRUFBRTtJQUM1QyxNQUFNLENBQUNpQixRQUFRQyxVQUFVLEdBQUdsQiwrQ0FBUUEsQ0FBZ0I7SUFDcEQsTUFBTSxDQUFDbUIsT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBLENBQWdCO0lBRWxERCxnREFBU0EsQ0FBQztRQUNSLElBQUlLLE1BQU07WUFDUkksU0FBU0osS0FBS0csS0FBSztZQUNuQkcsZUFBZU4sS0FBS0ssV0FBVztZQUMvQkcsV0FBV1IsS0FBS08sT0FBTztZQUN2QkcsVUFBVVYsS0FBS1MsTUFBTTtZQUNyQkssVUFBVWQsS0FBS2EsTUFBTTtRQUN2QjtRQUNBSTtJQUNGLEdBQUc7UUFBQ2pCO0tBQUs7SUFFVCxNQUFNaUIsYUFBYTtRQUNqQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQWUsT0FBWkMsYUFBWSxVQUFRO2dCQUNsREMsU0FBUztvQkFDUEMsZUFBZSxVQUFzQixPQUFacEI7Z0JBQzNCO1lBQ0Y7WUFDQSxJQUFJLENBQUNnQixTQUFTSyxFQUFFLEVBQUU7Z0JBQ2hCLE1BQU0sSUFBSUMsTUFBTTtZQUNsQjtZQUNBLE1BQU1DLE9BQU8sTUFBTVAsU0FBU1EsSUFBSTtZQUNoQ2QsU0FBU2E7UUFDWCxFQUFFLE9BQU9WLE9BQU87WUFDZEMsU0FBUyxNQUFpQlcsT0FBTztRQUNuQztJQUNGO0lBRUEsTUFBTUMsZUFBZTtRQUNuQixNQUFNQyxjQUFjO1lBQ2xCQyxJQUFJOUIsS0FBSzhCLEVBQUU7WUFDWDNCO1lBQ0FFO1lBQ0FFO1lBQ0FFO1lBQ0FJO1FBQ0Y7UUFDQVosU0FBUzRCO0lBQ1g7SUFFQSxJQUFJLENBQUMvQixRQUFRLE9BQU87SUFFcEIscUJBQ0UsOERBQUNpQztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0M7b0JBQUdELFdBQVU7OEJBQXlCOzs7Ozs7Z0JBQ3RDakIsdUJBQVMsOERBQUNtQjtvQkFBRUYsV0FBVTs4QkFBZ0JqQjs7Ozs7OzhCQUN2Qyw4REFBQ2dCO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQU1ILFdBQVU7c0NBQWlDOzs7Ozs7c0NBQ2xELDhEQUFDSTs0QkFDQ0MsTUFBSzs0QkFDTEMsT0FBT25DOzRCQUNQb0MsVUFBVSxDQUFDQyxJQUFNcEMsU0FBU29DLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDeENOLFdBQVU7Ozs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBTUgsV0FBVTtzQ0FBaUM7Ozs7OztzQ0FDbEQsOERBQUNVOzRCQUNDSixPQUFPakM7NEJBQ1BrQyxVQUFVLENBQUNDLElBQU1sQyxlQUFla0MsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUM5Q04sV0FBVTs7Ozs7Ozs7Ozs7OzhCQUdkLDhEQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNSCxXQUFVO3NDQUFpQzs7Ozs7O3NDQUNsRCw4REFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLE9BQU8vQjs0QkFDUGdDLFVBQVUsQ0FBQ0MsSUFBTWhDLFdBQVdnQyxFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQzFDTixXQUFVOzs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0c7NEJBQU1ILFdBQVU7c0NBQWlDOzs7Ozs7c0NBQ2xELDhEQUFDVzs0QkFDQ0wsT0FBTzdCOzRCQUNQOEIsVUFBVSxDQUFDQyxJQUFNOUIsVUFBVThCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs0QkFDekNOLFdBQVU7OzhDQUVWLDhEQUFDWTtvQ0FBT04sT0FBTTs4Q0FBTzs7Ozs7OzhDQUNyQiw4REFBQ007b0NBQU9OLE9BQU07OENBQWM7Ozs7Ozs4Q0FDNUIsOERBQUNNO29DQUFPTixPQUFNOzhDQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBR3pCLDhEQUFDUDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFNSCxXQUFVO3NDQUFpQzs7Ozs7O3NDQUNsRCw4REFBQ1c7NEJBQ0NMLE9BQU96QixVQUFVOzRCQUNqQjBCLFVBQVUsQ0FBQ0MsSUFBTTFCLFVBQVUrQixPQUFPTCxFQUFFQyxNQUFNLENBQUNILEtBQUs7NEJBQ2hETixXQUFVOzs4Q0FFViw4REFBQ1k7b0NBQU9OLE9BQU07OENBQUc7Ozs7OztnQ0FDaEIzQixNQUFNbUMsR0FBRyxDQUFDQyxDQUFBQSxxQkFDVCw4REFBQ0g7d0NBQXFCTixPQUFPUyxLQUFLakIsRUFBRTtrREFDakNpQixLQUFLQyxJQUFJO3VDQURDRCxLQUFLakIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7OEJBTTFCLDhEQUFDQztvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNpQjs0QkFDQ0MsU0FBU3RCOzRCQUNUSSxXQUFVO3NDQUNYOzs7Ozs7c0NBR0QsOERBQUNpQjs0QkFDQ0MsU0FBU25EOzRCQUNUaUMsV0FBVTtzQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPWDtHQTlITW5DO0tBQUFBO0FBZ0lOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01vZGFsLnRzeD9iOTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuaW50ZXJmYWNlIFRhc2tFZGl0TW9kYWxQcm9wcyB7XHJcbiAgaXNPcGVuOiBib29sZWFuO1xyXG4gIG9uQ2xvc2U6ICgpID0+IHZvaWQ7XHJcbiAgdGFzazogYW55O1xyXG4gIG9uVXBkYXRlOiAodXBkYXRlZFRhc2s6IGFueSkgPT4gdm9pZDtcclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNb2RhbDogUmVhY3QuRkM8VGFza0VkaXRNb2RhbFByb3BzPiA9ICh7IGlzT3Blbiwgb25DbG9zZSwgdGFzaywgb25VcGRhdGUsIGFjY2Vzc1Rva2VuIH0pID0+IHtcclxuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW2R1ZURhdGUsIHNldER1ZURhdGVdID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW3N0YXR1cywgc2V0U3RhdHVzXSA9IHVzZVN0YXRlPHN0cmluZz4oJycpO1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcclxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4obnVsbCk7XHJcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0YXNrKSB7XHJcbiAgICAgIHNldFRpdGxlKHRhc2sudGl0bGUpO1xyXG4gICAgICBzZXREZXNjcmlwdGlvbih0YXNrLmRlc2NyaXB0aW9uKTtcclxuICAgICAgc2V0RHVlRGF0ZSh0YXNrLmR1ZURhdGUpO1xyXG4gICAgICBzZXRTdGF0dXModGFzay5zdGF0dXMpO1xyXG4gICAgICBzZXRVc2VySWQodGFzay51c2VySWQpO1xyXG4gICAgfVxyXG4gICAgZmV0Y2hVc2VycygpO1xyXG4gIH0sIFt0YXNrXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JhY2tlbmRfVVJMfS91c2VyYCwge1xyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggdXNlcnMnKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICBzZXRVc2VycyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHNldEVycm9yKChlcnJvciBhcyBFcnJvcikubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgdXBkYXRlZFRhc2sgPSB7XHJcbiAgICAgIGlkOiB0YXNrLmlkLFxyXG4gICAgICB0aXRsZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIGR1ZURhdGUsXHJcbiAgICAgIHN0YXR1cyxcclxuICAgICAgdXNlcklkXHJcbiAgICB9O1xyXG4gICAgb25VcGRhdGUodXBkYXRlZFRhc2spO1xyXG4gIH07XHJcblxyXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZml4ZWQgaW5zZXQtMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTgwMCBiZy1vcGFjaXR5LTc1XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcC00IHJvdW5kZWQtbGcgc2hhZG93LWxnIHctZnVsbCBtYXgtdy1tZFwiPlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtYm9sZCBtYi00XCI+RWRpdCBUYXNrPC9oMj5cclxuICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1yZWQtNTAwXCI+e2Vycm9yfTwvcD59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0xXCI+VGl0bGU8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTFcIj5EZXNjcmlwdGlvbjwvbGFiZWw+XHJcbiAgICAgICAgICA8dGV4dGFyZWFcclxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTFcIj5EdWUgRGF0ZTwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cImRhdGVcIlxyXG4gICAgICAgICAgICB2YWx1ZT17ZHVlRGF0ZX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXREdWVEYXRlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTRcIj5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayB0ZXh0LXNtIGZvbnQtbWVkaXVtIG1iLTFcIj5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17c3RhdHVzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFN0YXR1cyhlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiBib3JkZXIgYm9yZGVyLWdyYXktNDAwIHJvdW5kZWQgdy1mdWxsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlRPRE9cIj5UT0RPPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJJTl9QUk9HUkVTU1wiPkluIFByb2dyZXNzPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJET05FXCI+RG9uZTwvb3B0aW9uPlxyXG4gICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi00XCI+XHJcbiAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC1zbSBmb250LW1lZGl1bSBtYi0xXCI+QXNzaWduIFVzZXI8L2xhYmVsPlxyXG4gICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICB2YWx1ZT17dXNlcklkIHx8ICcnfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFVzZXJJZChOdW1iZXIoZS50YXJnZXQudmFsdWUpKX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicC0yIGJvcmRlciBib3JkZXItZ3JheS00MDAgcm91bmRlZCB3LWZ1bGxcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U2VsZWN0IFVzZXI8L29wdGlvbj5cclxuICAgICAgICAgICAge3VzZXJzLm1hcCh1c2VyID0+IChcclxuICAgICAgICAgICAgICA8b3B0aW9uIGtleT17dXNlci5pZH0gdmFsdWU9e3VzZXIuaWR9PlxyXG4gICAgICAgICAgICAgICAge3VzZXIubmFtZX1cclxuICAgICAgICAgICAgICA8L29wdGlvbj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmQgc3BhY2UteC0yXCI+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctYmx1ZS01MDAgdGV4dC13aGl0ZSBwLTIgcm91bmRlZFwiXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ncmF5LTUwMCB0ZXh0LXdoaXRlIHAtMiByb3VuZGVkXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwidGFzayIsIm9uVXBkYXRlIiwiYWNjZXNzVG9rZW4iLCJ0aXRsZSIsInNldFRpdGxlIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJzZXREdWVEYXRlIiwic3RhdHVzIiwic2V0U3RhdHVzIiwidXNlcnMiLCJzZXRVc2VycyIsInVzZXJJZCIsInNldFVzZXJJZCIsImVycm9yIiwic2V0RXJyb3IiLCJmZXRjaFVzZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsIkJhY2tlbmRfVVJMIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJvayIsIkVycm9yIiwiZGF0YSIsImpzb24iLCJtZXNzYWdlIiwiaGFuZGxlU3VibWl0IiwidXBkYXRlZFRhc2siLCJpZCIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwicCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ0ZXh0YXJlYSIsInNlbGVjdCIsIm9wdGlvbiIsIk51bWJlciIsIm1hcCIsInVzZXIiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Modal.tsx\n"));

/***/ })

});