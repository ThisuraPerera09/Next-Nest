"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/projects/page",{

/***/ "(app-pages-browser)/./src/app/projects/page.tsx":
/*!***********************************!*\
  !*** ./src/app/projects/page.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"(app-pages-browser)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_Constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/Constants */ \"(app-pages-browser)/./src/lib/Constants.ts\");\n/* harmony import */ var _components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ProjectCard */ \"(app-pages-browser)/./src/components/ProjectCard.tsx\");\n/* harmony import */ var _components_ProjectCard2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ProjectCard2 */ \"(app-pages-browser)/./src/components/ProjectCard2.tsx\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Projects = ()=>{\n    _s();\n    const { data: session, status } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [assignedProjects, setAssignedProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _session_user, _session_backendTokens;\n        if (status === \"loading\") return;\n        if (!session) {\n            setError(\"You must be signed in to view projects.\");\n            setLoading(false);\n            return;\n        }\n        const userId = (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.id;\n        const accessToken = ((_session_backendTokens = session.backendTokens) === null || _session_backendTokens === void 0 ? void 0 : _session_backendTokens.accessToken) || \"\";\n        const fetchProjects = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(_lib_Constants__WEBPACK_IMPORTED_MODULE_3__.Backend_URL, \"/projects/user/\").concat(userId), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(accessToken)\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch projects\");\n                }\n                const data = await response.json();\n                setProjects(data);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        const fetchAssignedProjects = async ()=>{\n            try {\n                const response = await fetch(\"\".concat(_lib_Constants__WEBPACK_IMPORTED_MODULE_3__.Backend_URL, \"/tasks/user/\").concat(userId), {\n                    headers: {\n                        Authorization: \"Bearer \".concat(accessToken)\n                    }\n                });\n                if (!response.ok) {\n                    throw new Error(\"Failed to fetch assigned projects\");\n                }\n                const data = await response.json();\n                setAssignedProjects(data);\n            } catch (error) {\n                setError(error.message);\n            }\n        };\n        const fetchData = async ()=>{\n            setLoading(true);\n            await Promise.all([\n                fetchProjects(),\n                fetchAssignedProjects()\n            ]);\n            setLoading(false);\n        };\n        fetchData();\n    }, [\n        session,\n        status\n    ]);\n    const filteredAssignedProjects = assignedProjects.filter((assigned)=>!projects.some((project)=>project.id === assigned.project.id));\n    const handleNewProject = ()=>{\n        router.push(\"/projects/add-new\");\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n        lineNumber: 82,\n        columnNumber: 23\n    }, undefined);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-between items-center mb-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl font-bold\",\n                        children: \"Projects Dashboard\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 87,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleNewProject,\n                        className: \"bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500\",\n                        children: \"New Project\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"My Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    projects.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No projects available\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 99,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\",\n                        children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                id: project.id,\n                                title: project.title,\n                                description: project.description,\n                                createdAt: project.createdAt\n                            }, project.id, false, {\n                                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                                lineNumber: 103,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-xl font-semibold mb-4\",\n                        children: \"Assigned Other Projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 116,\n                        columnNumber: 9\n                    }, undefined),\n                    filteredAssignedProjects.length === 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"No assigned projects\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4\",\n                        children: filteredAssignedProjects.map((assigned)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProjectCard2__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                id: assigned.project.id,\n                                title: assigned.project.title,\n                                description: assigned.project.description,\n                                createdAt: assigned.project.createdAt\n                            }, assigned.project.id, false, {\n                                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                        lineNumber: 120,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\New folder (3)\\\\nest\\\\fullStak-auth-nextjs-main\\\\src\\\\app\\\\projects\\\\page.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Projects, \"hyXrjpSCpBoo4oC10dn6uHJq9I8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Projects;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Projects);\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvamVjdHMvcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBRW1EO0FBQ047QUFDQztBQUNTO0FBQ0U7QUFDYjtBQUU1QyxNQUFNUSxXQUFXOztJQUNmLE1BQU0sRUFBRUMsTUFBTUMsT0FBTyxFQUFFQyxNQUFNLEVBQUUsR0FBR1IsMkRBQVVBO0lBQzVDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHWCwrQ0FBUUEsQ0FBUSxFQUFFO0lBQ2xELE1BQU0sQ0FBQ1ksa0JBQWtCQyxvQkFBb0IsR0FBR2IsK0NBQVFBLENBQVEsRUFBRTtJQUNsRSxNQUFNLENBQUNjLFNBQVNDLFdBQVcsR0FBR2YsK0NBQVFBLENBQVU7SUFDaEQsTUFBTSxDQUFDZ0IsT0FBT0MsU0FBUyxHQUFHakIsK0NBQVFBLENBQWdCO0lBQ2xELE1BQU1rQixTQUFTYiwwREFBU0E7SUFFeEJOLGdEQUFTQSxDQUFDO1lBU09TLGVBQ0tBO1FBVHBCLElBQUlDLFdBQVcsV0FBVztRQUUxQixJQUFJLENBQUNELFNBQVM7WUFDWlMsU0FBUztZQUNURixXQUFXO1lBQ1g7UUFDRjtRQUVBLE1BQU1JLFVBQVNYLGdCQUFBQSxRQUFRWSxJQUFJLGNBQVpaLG9DQUFBQSxjQUFjYSxFQUFFO1FBQy9CLE1BQU1DLGNBQWNkLEVBQUFBLHlCQUFBQSxRQUFRZSxhQUFhLGNBQXJCZiw2Q0FBQUEsdUJBQXVCYyxXQUFXLEtBQUk7UUFFMUQsTUFBTUUsZ0JBQWdCO1lBQ3BCLElBQUk7Z0JBQ0YsTUFBTUMsV0FBVyxNQUFNQyxNQUFNLEdBQWdDUCxPQUE3QmpCLHVEQUFXQSxFQUFDLG1CQUF3QixPQUFQaUIsU0FBVTtvQkFDckVRLFNBQVM7d0JBQ1BDLGVBQWUsVUFBc0IsT0FBWk47b0JBQzNCO2dCQUNGO2dCQUNBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU12QixPQUFPLE1BQU1rQixTQUFTTSxJQUFJO2dCQUNoQ3BCLFlBQVlKO1lBQ2QsRUFBRSxPQUFPUyxPQUFPO2dCQUNkQyxTQUFTRCxNQUFNZ0IsT0FBTztZQUN4QjtRQUNGO1FBRUEsTUFBTUMsd0JBQXdCO1lBQzVCLElBQUk7Z0JBQ0YsTUFBTVIsV0FBVyxNQUFNQyxNQUFNLEdBQTZCUCxPQUExQmpCLHVEQUFXQSxFQUFDLGdCQUFxQixPQUFQaUIsU0FBVTtvQkFDbEVRLFNBQVM7d0JBQ1BDLGVBQWUsVUFBc0IsT0FBWk47b0JBQzNCO2dCQUNGO2dCQUNBLElBQUksQ0FBQ0csU0FBU0ksRUFBRSxFQUFFO29CQUNoQixNQUFNLElBQUlDLE1BQU07Z0JBQ2xCO2dCQUNBLE1BQU12QixPQUFPLE1BQU1rQixTQUFTTSxJQUFJO2dCQUNoQ2xCLG9CQUFvQk47WUFDdEIsRUFBRSxPQUFPUyxPQUFPO2dCQUNkQyxTQUFTRCxNQUFNZ0IsT0FBTztZQUN4QjtRQUNGO1FBRUEsTUFBTUUsWUFBWTtZQUNoQm5CLFdBQVc7WUFDWCxNQUFNb0IsUUFBUUMsR0FBRyxDQUFDO2dCQUFDWjtnQkFBaUJTO2FBQXdCO1lBQzVEbEIsV0FBVztRQUNiO1FBRUFtQjtJQUNGLEdBQUc7UUFBQzFCO1FBQVNDO0tBQU87SUFHcEIsTUFBTTRCLDJCQUEyQnpCLGlCQUFpQjBCLE1BQU0sQ0FDdEQsQ0FBQ0MsV0FBYSxDQUFDN0IsU0FBUzhCLElBQUksQ0FBQyxDQUFDQyxVQUFZQSxRQUFRcEIsRUFBRSxLQUFLa0IsU0FBU0UsT0FBTyxDQUFDcEIsRUFBRTtJQUc5RSxNQUFNcUIsbUJBQW1CO1FBQ3ZCeEIsT0FBT3lCLElBQUksQ0FBQztJQUNkO0lBRUEsSUFBSTdCLFNBQVMscUJBQU8sOERBQUM4QjtrQkFBSTs7Ozs7O0lBRXpCLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDQzt3QkFBR0QsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbkMsOERBQUNFO3dCQUNDQyxTQUFTTjt3QkFDVEcsV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7OzBCQUtILDhEQUFDRDs7a0NBQ0MsOERBQUNLO3dCQUFHSixXQUFVO2tDQUE2Qjs7Ozs7O29CQUMxQ25DLFNBQVN3QyxNQUFNLEtBQUssa0JBQ25CLDhEQUFDQztrQ0FBRTs7Ozs7a0RBRUgsOERBQUNQO3dCQUFJQyxXQUFVO2tDQUNabkMsU0FBUzBDLEdBQUcsQ0FBQyxDQUFDWCx3QkFDYiw4REFBQ3RDLCtEQUFXQTtnQ0FFVmtCLElBQUlvQixRQUFRcEIsRUFBRTtnQ0FDZGdDLE9BQU9aLFFBQVFZLEtBQUs7Z0NBQ3BCQyxhQUFhYixRQUFRYSxXQUFXO2dDQUNoQ0MsV0FBV2QsUUFBUWMsU0FBUzsrQkFKdkJkLFFBQVFwQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OzBCQVd6Qiw4REFBQ3VCO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0k7d0JBQUdKLFdBQVU7a0NBQTZCOzs7Ozs7b0JBQzFDUix5QkFBeUJhLE1BQU0sS0FBSyxrQkFDbkMsOERBQUNDO2tDQUFFOzs7OztrREFFSCw4REFBQ1A7d0JBQUlDLFdBQVU7a0NBQ1pSLHlCQUF5QmUsR0FBRyxDQUFDLENBQUNiLHlCQUM3Qiw4REFBQ25DLGdFQUFZQTtnQ0FFWGlCLElBQUlrQixTQUFTRSxPQUFPLENBQUNwQixFQUFFO2dDQUN2QmdDLE9BQU9kLFNBQVNFLE9BQU8sQ0FBQ1ksS0FBSztnQ0FDN0JDLGFBQWFmLFNBQVNFLE9BQU8sQ0FBQ2EsV0FBVztnQ0FDekNDLFdBQVdoQixTQUFTRSxPQUFPLENBQUNjLFNBQVM7K0JBSmhDaEIsU0FBU0UsT0FBTyxDQUFDcEIsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVl4QztHQTdITWY7O1FBQzhCTCx1REFBVUE7UUFLN0JJLHNEQUFTQTs7O0tBTnBCQztBQStITiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2plY3RzL3BhZ2UudHN4PzVjNzAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnO1xuaW1wb3J0IHsgQmFja2VuZF9VUkwgfSBmcm9tICdAL2xpYi9Db25zdGFudHMnOyBcbmltcG9ydCBQcm9qZWN0Q2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2plY3RDYXJkJzsgXG5pbXBvcnQgUHJvamVjdENhcmQyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvamVjdENhcmQyJzsgXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuXG5jb25zdCBQcm9qZWN0cyA9ICgpID0+IHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uLCBzdGF0dXMgfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbYXNzaWduZWRQcm9qZWN0cywgc2V0QXNzaWduZWRQcm9qZWN0c10gPSB1c2VTdGF0ZTxhbnlbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPih0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdHVzID09PSAnbG9hZGluZycpIHJldHVybjtcblxuICAgIGlmICghc2Vzc2lvbikge1xuICAgICAgc2V0RXJyb3IoJ1lvdSBtdXN0IGJlIHNpZ25lZCBpbiB0byB2aWV3IHByb2plY3RzLicpO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlcklkID0gc2Vzc2lvbi51c2VyPy5pZDtcbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IHNlc3Npb24uYmFja2VuZFRva2Vucz8uYWNjZXNzVG9rZW4gfHwgJyc7XG5cbiAgICBjb25zdCBmZXRjaFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCYWNrZW5kX1VSTH0vcHJvamVjdHMvdXNlci8ke3VzZXJJZH1gLCB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FjY2Vzc1Rva2VufWAsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9qZWN0cycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHNldFByb2plY3RzKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoQXNzaWduZWRQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QmFja2VuZF9VUkx9L3Rhc2tzL3VzZXIvJHt1c2VySWR9YCwge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggYXNzaWduZWQgcHJvamVjdHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBzZXRBc3NpZ25lZFByb2plY3RzKGRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgc2V0RXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbZmV0Y2hQcm9qZWN0cygpLCBmZXRjaEFzc2lnbmVkUHJvamVjdHMoKV0pO1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgfTtcblxuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbc2Vzc2lvbiwgc3RhdHVzXSk7XG5cblxuICBjb25zdCBmaWx0ZXJlZEFzc2lnbmVkUHJvamVjdHMgPSBhc3NpZ25lZFByb2plY3RzLmZpbHRlcihcbiAgICAoYXNzaWduZWQpID0+ICFwcm9qZWN0cy5zb21lKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBhc3NpZ25lZC5wcm9qZWN0LmlkKVxuICApO1xuXG4gIGNvbnN0IGhhbmRsZU5ld1Byb2plY3QgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goJy9wcm9qZWN0cy9hZGQtbmV3Jyk7IFxuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwLTRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPlByb2plY3RzIERhc2hib2FyZDwvaDE+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXdQcm9qZWN0fVxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWdyZWVuLTUwMCB0ZXh0LXdoaXRlIHB5LTIgcHgtNCByb3VuZGVkIGhvdmVyOmJnLWdyZWVuLTYwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctZ3JlZW4tNTAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIE5ldyBQcm9qZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNFwiPk15IFByb2plY3RzPC9oMj5cbiAgICAgICAge3Byb2plY3RzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICA8cD5ObyBwcm9qZWN0cyBhdmFpbGFibGU8L3A+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIHNtOmdyaWQtY29scy0yIG1kOmdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZFxuICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICBpZD17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvamVjdC50aXRsZX1cbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICBjcmVhdGVkQXQ9e3Byb2plY3QuY3JlYXRlZEF0fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMFwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTRcIj5Bc3NpZ25lZCBPdGhlciBQcm9qZWN0czwvaDI+XG4gICAgICAgIHtmaWx0ZXJlZEFzc2lnbmVkUHJvamVjdHMubGVuZ3RoID09PSAwID8gKFxuICAgICAgICAgIDxwPk5vIGFzc2lnbmVkIHByb2plY3RzPC9wPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBzbTpncmlkLWNvbHMtMiBtZDpncmlkLWNvbHMtMyBnYXAtNFwiPlxuICAgICAgICAgICAge2ZpbHRlcmVkQXNzaWduZWRQcm9qZWN0cy5tYXAoKGFzc2lnbmVkKSA9PiAoXG4gICAgICAgICAgICAgIDxQcm9qZWN0Q2FyZDJcbiAgICAgICAgICAgICAgICBrZXk9e2Fzc2lnbmVkLnByb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgaWQ9e2Fzc2lnbmVkLnByb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgdGl0bGU9e2Fzc2lnbmVkLnByb2plY3QudGl0bGV9XG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2Fzc2lnbmVkLnByb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgY3JlYXRlZEF0PXthc3NpZ25lZC5wcm9qZWN0LmNyZWF0ZWRBdH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0cztcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlU2Vzc2lvbiIsIkJhY2tlbmRfVVJMIiwiUHJvamVjdENhcmQiLCJQcm9qZWN0Q2FyZDIiLCJ1c2VSb3V0ZXIiLCJQcm9qZWN0cyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImFzc2lnbmVkUHJvamVjdHMiLCJzZXRBc3NpZ25lZFByb2plY3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwicm91dGVyIiwidXNlcklkIiwidXNlciIsImlkIiwiYWNjZXNzVG9rZW4iLCJiYWNrZW5kVG9rZW5zIiwiZmV0Y2hQcm9qZWN0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsIm9rIiwiRXJyb3IiLCJqc29uIiwibWVzc2FnZSIsImZldGNoQXNzaWduZWRQcm9qZWN0cyIsImZldGNoRGF0YSIsIlByb21pc2UiLCJhbGwiLCJmaWx0ZXJlZEFzc2lnbmVkUHJvamVjdHMiLCJmaWx0ZXIiLCJhc3NpZ25lZCIsInNvbWUiLCJwcm9qZWN0IiwiaGFuZGxlTmV3UHJvamVjdCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMiIsImxlbmd0aCIsInAiLCJtYXAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiY3JlYXRlZEF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/projects/page.tsx\n"));

/***/ })

});