/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/topics/route";
exports.ids = ["app/api/topics/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mnt_c_Users_sujin_Desktop_backup_nextJS_crud_app_new_app_api_topics_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/topics/route.js */ \"(rsc)/./app/api/topics/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/topics/route\",\n        pathname: \"/api/topics\",\n        filename: \"route\",\n        bundlePath: \"app/api/topics/route\"\n    },\n    resolvedPagePath: \"/mnt/c/Users/sujin/Desktop/backup/nextJS/crud-app-new/app/api/topics/route.js\",\n    nextConfigOutput,\n    userland: _mnt_c_Users_sujin_Desktop_backup_nextJS_crud_app_new_app_api_topics_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZ0b3BpY3MlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnRvcGljcyUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnRvcGljcyUyRnJvdXRlLmpzJmFwcERpcj0lMkZtbnQlMkZjJTJGVXNlcnMlMkZzdWppbiUyRkRlc2t0b3AlMkZiYWNrdXAlMkZuZXh0SlMlMkZjcnVkLWFwcC1uZXclMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRm1udCUyRmMlMkZVc2VycyUyRnN1amluJTJGRGVza3RvcCUyRmJhY2t1cCUyRm5leHRKUyUyRmNydWQtYXBwLW5ldyZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDNkI7QUFDMUc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9tbnQvYy9Vc2Vycy9zdWppbi9EZXNrdG9wL2JhY2t1cC9uZXh0SlMvY3J1ZC1hcHAtbmV3L2FwcC9hcGkvdG9waWNzL3JvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS90b3BpY3Mvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS90b3BpY3NcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3RvcGljcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9tbnQvYy9Vc2Vycy9zdWppbi9EZXNrdG9wL2JhY2t1cC9uZXh0SlMvY3J1ZC1hcHAtbmV3L2FwcC9hcGkvdG9waWNzL3JvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/topics/route.js":
/*!*********************************!*\
  !*** ./app/api/topics/route.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DELETE: () => (/* binding */ DELETE),\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _libs_mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/libs/mongodb */ \"(rsc)/./libs/mongodb.js\");\n/* harmony import */ var _models_topic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/topic */ \"(rsc)/./models/topic.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\n\nasync function POST(request) {\n    const { title, description } = await request.json();\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    await _models_topic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        title,\n        description\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        message: \"Topic Created\"\n    }, {\n        status: 201\n    });\n}\nasync function GET() {\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    const topics = await _models_topic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        topics\n    });\n}\nasync function DELETE(request) {\n    const id = request.nextUrl.searchParams.get(\"id\");\n    await (0,_libs_mongodb__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n    await _models_topic__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(id);\n    return next_server__WEBPACK_IMPORTED_MODULE_2__.NextResponse.json({\n        message: \"Topic Deleted\"\n    }, {\n        status: 200\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3RvcGljcy9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEM7QUFDUDtBQUNRO0FBRXBDLGVBQWVHLEtBQU1DLE9BQU87SUFDL0IsTUFBTSxFQUFDQyxLQUFLLEVBQUNDLFdBQVcsRUFBQyxHQUFDLE1BQU1GLFFBQVFHLElBQUk7SUFDNUMsTUFBTVAseURBQVlBO0lBQ2xCLE1BQU1DLHFEQUFLQSxDQUFDTyxNQUFNLENBQUM7UUFBQ0g7UUFBTUM7SUFBVztJQUNyQyxPQUFPSixxREFBWUEsQ0FBQ0ssSUFBSSxDQUFDO1FBQUNFLFNBQVE7SUFBZSxHQUFFO1FBQUNDLFFBQU87SUFBRztBQUNsRTtBQUVPLGVBQWVDO0lBQ2xCLE1BQU1YLHlEQUFZQTtJQUNuQixNQUFNWSxTQUFRLE1BQU1YLHFEQUFLQSxDQUFDWSxJQUFJO0lBQzlCLE9BQU9YLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7UUFBQ0s7SUFBTTtBQUVuQztBQUNPLGVBQWVFLE9BQU9WLE9BQU87SUFDaEMsTUFBTVcsS0FBR1gsUUFBUVksT0FBTyxDQUFDQyxZQUFZLENBQUNDLEdBQUcsQ0FBQztJQUMxQyxNQUFNbEIseURBQVlBO0lBQ2xCLE1BQU1DLHFEQUFLQSxDQUFDa0IsaUJBQWlCLENBQUNKO0lBQzlCLE9BQU9iLHFEQUFZQSxDQUFDSyxJQUFJLENBQUM7UUFBQ0UsU0FBUTtJQUFlLEdBQUU7UUFBQ0MsUUFBTztJQUFHO0FBQ2xFIiwic291cmNlcyI6WyIvbW50L2MvVXNlcnMvc3VqaW4vRGVza3RvcC9iYWNrdXAvbmV4dEpTL2NydWQtYXBwLW5ldy9hcHAvYXBpL3RvcGljcy9yb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29ubmVjdE1vbmdvIGZyb20gXCJAL2xpYnMvbW9uZ29kYlwiO1xyXG5pbXBvcnQgVG9waWMgZnJvbSBcIkAvbW9kZWxzL3RvcGljXCI7XHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QgKHJlcXVlc3Qpe1xyXG4gICAgY29uc3Qge3RpdGxlLGRlc2NyaXB0aW9ufT1hd2FpdCByZXF1ZXN0Lmpzb24oKTtcclxuICAgIGF3YWl0IGNvbm5lY3RNb25nbygpO1xyXG4gICAgYXdhaXQgVG9waWMuY3JlYXRlKHt0aXRsZSxkZXNjcmlwdGlvbn0pO1xyXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHttZXNzYWdlOlwiVG9waWMgQ3JlYXRlZFwifSx7c3RhdHVzOjIwMX0pXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQgKCkge1xyXG4gICAgYXdhaXQgY29ubmVjdE1vbmdvKCk7XHJcbiAgIGNvbnN0IHRvcGljcz0gYXdhaXQgVG9waWMuZmluZCgpO1xyXG4gICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oe3RvcGljc30pXHJcbiAgICBcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gREVMRVRFKHJlcXVlc3QpIHtcclxuICAgIGNvbnN0IGlkPXJlcXVlc3QubmV4dFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiaWRcIik7XHJcbiAgICBhd2FpdCBjb25uZWN0TW9uZ28oKTtcclxuICAgIGF3YWl0IFRvcGljLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcclxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7bWVzc2FnZTpcIlRvcGljIERlbGV0ZWRcIn0se3N0YXR1czoyMDB9KTtcclxufVxyXG4iXSwibmFtZXMiOlsiY29ubmVjdE1vbmdvIiwiVG9waWMiLCJOZXh0UmVzcG9uc2UiLCJQT1NUIiwicmVxdWVzdCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJqc29uIiwiY3JlYXRlIiwibWVzc2FnZSIsInN0YXR1cyIsIkdFVCIsInRvcGljcyIsImZpbmQiLCJERUxFVEUiLCJpZCIsIm5leHRVcmwiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJmaW5kQnlJZEFuZERlbGV0ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/topics/route.js\n");

/***/ }),

/***/ "(rsc)/./libs/mongodb.js":
/*!*************************!*\
  !*** ./libs/mongodb.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectMongo = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n        console.log(\"Connected to Database\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWJzL21vbmdvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLE1BQU1DLGVBQWE7SUFDZixJQUFHO1FBQ0MsTUFBTUQsdURBQWdCLENBQUNHLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztRQUM1Q0MsUUFBUUMsR0FBRyxDQUFDO0lBRWhCLEVBQUMsT0FBTUMsT0FBTTtRQUNURixRQUFRQyxHQUFHLENBQUNDO0lBRWhCO0FBQ0o7QUFFQSxpRUFBZVAsWUFBWUEsRUFBQSIsInNvdXJjZXMiOlsiL21udC9jL1VzZXJzL3N1amluL0Rlc2t0b3AvYmFja3VwL25leHRKUy9jcnVkLWFwcC1uZXcvbGlicy9tb25nb2RiLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuY29uc3QgY29ubmVjdE1vbmdvPWFzeW5jKCk9PntcclxuICAgIHRyeXtcclxuICAgICAgICBhd2FpdCBtb25nb29zZS5jb25uZWN0KHByb2Nlc3MuZW52Lk1PTkdPX1VSSSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gRGF0YWJhc2VcIik7XHJcbiAgICAgICAgXHJcbiAgICB9Y2F0Y2goZXJyb3Ipe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdE1vbmdvIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdE1vbmdvIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./libs/mongodb.js\n");

/***/ }),

/***/ "(rsc)/./models/topic.js":
/*!*************************!*\
  !*** ./models/topic.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst topicSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    title: String,\n    description: String\n}, {\n    timestamps: true\n});\nconst Topic = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Topic || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Topic\", topicSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Topic);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvdG9waWMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBQ3pDLE1BQU1FLGNBQWMsSUFBSUQsNENBQU1BLENBQzFCO0lBQ0lFLE9BQU1DO0lBQ05DLGFBQVlEO0FBRWhCLEdBQ0E7SUFDSUUsWUFBVztBQUNmO0FBRUosTUFBTUMsUUFBUVAsd0RBQWUsQ0FBQ08sS0FBSyxJQUFJUCxxREFBYyxDQUFDLFNBQVNFO0FBRS9ELGlFQUFlSyxLQUFLQSxFQUFDIiwic291cmNlcyI6WyIvbW50L2MvVXNlcnMvc3VqaW4vRGVza3RvcC9iYWNrdXAvbmV4dEpTL2NydWQtYXBwLW5ldy9tb2RlbHMvdG9waWMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlLHtTY2hlbWF9IGZyb20gXCJtb25nb29zZVwiO1xyXG5jb25zdCB0b3BpY1NjaGVtYSA9IG5ldyBTY2hlbWEoXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6U3RyaW5nLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOlN0cmluZyBcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHRpbWVzdGFtcHM6dHJ1ZVxyXG4gICAgfVxyXG4pO1xyXG5jb25zdCBUb3BpYyA9IG1vbmdvb3NlLm1vZGVscy5Ub3BpYyB8fCBtb25nb29zZS5tb2RlbChcIlRvcGljXCIsIHRvcGljU2NoZW1hKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcGljOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInRvcGljU2NoZW1hIiwidGl0bGUiLCJTdHJpbmciLCJkZXNjcmlwdGlvbiIsInRpbWVzdGFtcHMiLCJUb3BpYyIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./models/topic.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Ftopics%2Froute&page=%2Fapi%2Ftopics%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Ftopics%2Froute.js&appDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2Fmnt%2Fc%2FUsers%2Fsujin%2FDesktop%2Fbackup%2FnextJS%2Fcrud-app-new&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();