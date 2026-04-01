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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n    var list = []; // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = cssWithMappingToString(item, useSourceMap);\n            if (item[2]) {\n                return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n            }\n            return content;\n        }).join('');\n    }; // import a list of modules into the list\n    // eslint-disable-next-line func-names\n    list.i = function (modules, mediaQuery, dedupe) {\n        if (typeof modules === 'string') {\n            // eslint-disable-next-line no-param-reassign\n            modules = [[null, modules, '']];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var i = 0; i < this.length; i++) {\n                // eslint-disable-next-line prefer-destructuring\n                var id = this[i][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _i = 0; _i < modules.length; _i++) {\n            var item = [].concat(modules[_i]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                // eslint-disable-next-line no-continue\n                continue;\n            }\n            if (mediaQuery) {\n                if (!item[2]) {\n                    item[2] = mediaQuery;\n                }\n                else {\n                    item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\nfunction cssWithMappingToString(item, useSourceMap) {\n    var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n    var cssMapping = item[3];\n    if (!cssMapping) {\n        return content;\n    }\n    if (useSourceMap && typeof btoa === 'function') {\n        var sourceMapping = toComment(cssMapping);\n        var sourceURLs = cssMapping.sources.map(function (source) {\n            return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n        });\n        return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n    }\n    return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\nfunction toComment(sourceMap) {\n    // eslint-disable-next-line no-undef\n    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n    var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n    return \"/*# \".concat(data, \" */\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.App = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\n__webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\nvar Layout_1 = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\nvar Header_1 = __webpack_require__(/*! ./shared/Header/Header */ \"./src/shared/Header/Header.tsx\");\nvar Content_1 = __webpack_require__(/*! ./shared/Content/Content */ \"./src/shared/Content/Content.tsx\");\nvar CardsList_1 = __webpack_require__(/*! ./shared/CardsList/CardsList */ \"./src/shared/CardsList/CardsList.jsx\");\nvar useToken_1 = __webpack_require__(/*! ./hooks/useToken */ \"./src/hooks/useToken.ts\");\nvar tokenContext_1 = __webpack_require__(/*! ./shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nvar userContext_1 = __webpack_require__(/*! ./shared/context/userContext */ \"./src/shared/context/userContext.tsx\");\nvar postContext_1 = __webpack_require__(/*! ./shared/context/postContext */ \"./src/shared/context/postContext.tsx\");\nvar commentContext_1 = __importDefault(__webpack_require__(/*! ./shared/context/commentContext */ \"./src/shared/context/commentContext.ts\"));\nfunction AppComponent() {\n    var _a = (0, react_1.useState)(''), commentValue = _a[0], setCommentValue = _a[1];\n    var token = (0, useToken_1.useToken)()[0];\n    console.log(token);\n    var CommentProvider = commentContext_1.default.Provider;\n    return (react_1.default.createElement(CommentProvider, { value: {\n            value: commentValue,\n            onChange: setCommentValue,\n        } },\n        react_1.default.createElement(tokenContext_1.tokenContext.Provider, { value: token },\n            react_1.default.createElement(userContext_1.UserContextProvider, null,\n                react_1.default.createElement(Layout_1.Layout, null,\n                    react_1.default.createElement(Header_1.Header, null),\n                    react_1.default.createElement(Content_1.Content, null,\n                        react_1.default.createElement(postContext_1.PostsContextProvider, null,\n                            react_1.default.createElement(CardsList_1.CardsList, null))))))));\n}\nexports.App = (0, root_1.hot)(function () { return react_1.default.createElement(AppComponent, null); });\n\n\n//# sourceURL=webpack:///./src/App.tsx?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.usePostsData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nfunction usePostsData() {\n    var _a = (0, react_1.useState)([]), posts = _a[0], setPosts = _a[1];\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\n    (0, react_1.useEffect)(function () {\n        function fetchPosts() {\n            return __awaiter(this, void 0, void 0, function () {\n                var response, error_1;\n                return __generator(this, function (_a) {\n                    switch (_a.label) {\n                        case 0:\n                            _a.trys.push([0, 2, , 3]);\n                            return [4 /*yield*/, axios_1.default.get('https://oauth.reddit.com/best.json?sr_detail=true', {\n                                    headers: {\n                                        Authorization: \"bearer \".concat(token),\n                                    },\n                                })];\n                        case 1:\n                            response = _a.sent();\n                            setPosts(response.data.data.children);\n                            return [3 /*break*/, 3];\n                        case 2:\n                            error_1 = _a.sent();\n                            console.error('Error fetching posts:', error_1);\n                            return [3 /*break*/, 3];\n                        case 3: return [2 /*return*/];\n                    }\n                });\n            });\n        }\n        fetchPosts();\n    }, []);\n    return posts;\n}\nexports.usePostsData = usePostsData;\n\n\n//# sourceURL=webpack:///./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useToken.ts":
/*!*******************************!*\
  !*** ./src/hooks/useToken.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useToken = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nfunction useToken() {\n    var _a = (0, react_1.useState)(''), token = _a[0], setToken = _a[1];\n    (0, react_1.useEffect)(function () {\n        if (window.__token__) {\n            setToken(window.__token__);\n        }\n    }, []);\n    return [token];\n}\nexports.useToken = useToken;\n\n\n//# sourceURL=webpack:///./src/hooks/useToken.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.useUserData = void 0;\nvar react_1 = __webpack_require__(/*! react */ \"react\");\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar tokenContext_1 = __webpack_require__(/*! ../shared/context/tokenContext */ \"./src/shared/context/tokenContext.ts\");\nfunction useUserData() {\n    var _a = (0, react_1.useState)({}), data = _a[0], setData = _a[1];\n    var token = (0, react_1.useContext)(tokenContext_1.tokenContext);\n    (0, react_1.useEffect)(function () {\n        if (token && token !== \"undefined\") {\n            axios_1.default.get('https://oauth.reddit.com/api/v1/me', {\n                headers: { Authorization: \"bearer \".concat(token) }\n            })\n                .then(function (resp) {\n                var userData = resp.data;\n                setData({ name: userData.name, iconImg: userData.icon_img });\n            })\n                .catch(console.log);\n        }\n    }, [token]);\n    return [data];\n}\nexports.useUserData = useUserData;\n\n\n//# sourceURL=webpack:///./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.push([module.i, \"@import url(https://fonts.googleapis.com/css2?family=Roboto&display=swap);\"]);\n// Module\nexports.push([module.i, \":root {\\n  --black: #333;\\n  --orange: #CC6633;\\n  --green: #A4CC33;\\n  --whiteLightness: 100%;\\n  --white: hsl(0, 0%, var(--whiteLightness));\\n  --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\\n  --greyF3: #f3f3f3;\\n  --greyD9: #d9d9d9;\\n  --greyC4: #c4c4c4;\\n  --grey99: #999;\\n  --grey66: #666666;\\n}\\n\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  background-color: var(--grayF4);\\n  font-size: 14px;\\n  line-height: 16px;\\n  font-family: 'Roboto', serif;\\n}\\n\\n* {\\n  color: var(--black);\\n  box-sizing: border-box;\\n  -webkit-font-smoothing: antialiased;\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n\\nul {\\n  margin: 0;\\n  padding: 0;\\n  list-style: none;\\n}\\n\\na {\\n  text-decoration: none;\\n}\\n\\nbutton {\\n  margin: 0;\\n  padding: 0;\\n  background: transparent;\\n  cursor: pointer;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/main.global.css?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.indexTemplate = void 0;\nvar indexTemplate = function (content, token) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Reddit</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n  <script>\\n    window.__token__ = '\".concat(token, \"'\\n  </script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\").concat(content, \"</div>\\n  <div id=\\\"modal_root\\\">\\n  <div id=\\\"dropdown_root\\\">\\n</body>\\n\\n</html>\\n\"); };\nexports.indexTemplate = indexTemplate;\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\nvar App_1 = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\nvar app = (0, express_1.default)();\napp.use(\"/static\", express_1.default.static(\"./dist/client\"));\napp.get(\"/\", function (req, res) {\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)())));\n});\napp.get(\"/auth\", function (req, res) {\n    axios_1.default\n        .post(\"https://www.reddit.com/api/v1/access_token\", \"grant_type=authorization_code&code=\".concat(req.query.code, \"&redirect_uri=http://localhost:3000/auth\"), {\n        auth: {\n            username: '22Ys4wzDt1ytZaTbe6OH1Q',\n            password: 'VsWyJRTDyLXF06b1DlLnE4QtltlYjw',\n        },\n        headers: { \"Content-Type\": \"application/x-www-form-urlencoded\" },\n    })\n        .then(function (_a) {\n        var data = _a.data;\n        res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_1.App)()), data[\"access_token\"]));\n    })\n        .catch(console.log);\n});\napp.listen(3000, function () {\n    console.log(\"server started on port http://localhost:3000\");\n});\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar PostContent_1 = __importDefault(__webpack_require__(/*! ./PostContent */ \"./src/shared/CardsList/Card/PostContent.tsx\"));\nvar PostPreview_1 = __importDefault(__webpack_require__(/*! ./PostPreview */ \"./src/shared/CardsList/Card/PostPreview.tsx\"));\nvar DropDown_1 = __importDefault(__webpack_require__(/*! ./DropDown */ \"./src/shared/CardsList/Card/DropDown.tsx\"));\nvar Controls_1 = __importDefault(__webpack_require__(/*! ./Controls */ \"./src/shared/CardsList/Card/Controls.tsx\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar Card = function (props) {\n    console.log(props);\n    return (react_1.default.createElement(\"li\", { className: card_css_1.default.card },\n        react_1.default.createElement(PostPreview_1.default, { previewImg: props.previewImg }),\n        react_1.default.createElement(PostContent_1.default, { title: props.title, datePostUtc: props.datePostUtc, avatar: props.avatar, author: props.author }),\n        react_1.default.createElement(DropDown_1.default, null),\n        react_1.default.createElement(Controls_1.default, null)));\n};\nexports.default = Card;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CommentForm.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/CommentForm.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentForm = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\"); // Импортируем useParams\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar commentContext_1 = __importDefault(__webpack_require__(/*! ../../context/commentContext */ \"./src/shared/context/commentContext.ts\"));\nvar RedditComments_1 = __importDefault(__webpack_require__(/*! ./RedditComments */ \"./src/shared/CardsList/Card/RedditComments.tsx\"));\nfunction CommentForm() {\n    var _a = (0, react_1.useContext)(commentContext_1.default), value = _a.value, onChange = _a.onChange;\n    var _b = (0, react_1.useState)(\"\"), postId = _b[0], setPostId = _b[1];\n    var postIdFromUrl = (0, react_router_dom_1.useParams)().postIdFromUrl; // Получаем параметр postId из URL\n    (0, react_1.useEffect)(function () {\n        // Используем postId из URL или любую другую логику, чтобы установить postId\n        setPostId(postIdFromUrl || \"\");\n    }, [postIdFromUrl]);\n    function handleChange(event) {\n        onChange(event.target.value);\n    }\n    function handleSubmit(event) {\n        event.preventDefault();\n        console.log(value);\n        return value;\n    }\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"form\", { className: card_css_1.default.commentForm, onSubmit: handleSubmit },\n            react_1.default.createElement(\"textarea\", { className: card_css_1.default.commentTextarea, value: value, placeholder: \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0439\", onChange: handleChange }),\n            react_1.default.createElement(\"button\", { type: \"submit\", className: card_css_1.default.commentBtn }, \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0438\\u0440\\u043E\\u0432\\u0430\\u0442\\u044C\")),\n        react_1.default.createElement(RedditComments_1.default, { postId: postId })));\n}\nexports.CommentForm = CommentForm;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/CommentForm.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Controls.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardsList/Card/Controls.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar Controls = function () {\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.controls },\n        react_1.default.createElement(\"button\", { className: card_css_1.default.controls__up },\n            react_1.default.createElement(\"svg\", { className: card_css_1.default.controls__svgUp, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\", fill: \"#D9D9D9\" }))),\n        react_1.default.createElement(\"span\", { className: card_css_1.default.controls__number }, \"286\"),\n        react_1.default.createElement(\"button\", { className: card_css_1.default.controls__down },\n            react_1.default.createElement(\"svg\", { className: card_css_1.default.controls__svgDown, width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n                react_1.default.createElement(\"path\", { d: \"M9.5 10L19 0L8.74228e-07 -1.66103e-06L9.5 10Z\", fill: \"#D9D9D9\" })))));\n};\nexports.default = Controls;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Controls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/DropDown.tsx":
/*!************************************************!*\
  !*** ./src/shared/CardsList/Card/DropDown.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar Menu_1 = __webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu.tsx\"); // Предполагается, что у вас есть экспорт ForwardedMenu из Menu\nvar DropDownContent_1 = __importDefault(__webpack_require__(/*! ./DropDownContent */ \"./src/shared/CardsList/Card/DropDownContent.tsx\"));\nvar DropdownMenu = function () {\n    var _a = (0, react_1.useState)(false), isOpen = _a[0], setIsOpen = _a[1];\n    var _b = (0, react_1.useState)({ top: 0, left: 0 }), buttonCoordinates = _b[0], setButtonCoordinates = _b[1];\n    var dropdownRef = (0, react_1.useRef)(null);\n    var buttonRef = (0, react_1.useRef)(null);\n    var droproot = document.querySelector('#dropdown_root');\n    if (!droproot)\n        return null;\n    var toggleDropdown = function () {\n        setIsOpen(!isOpen);\n        if (buttonRef.current) {\n            var _a = buttonRef.current.getBoundingClientRect(), top_1 = _a.top, left = _a.left;\n            setButtonCoordinates({ top: top_1, left: left });\n        }\n    };\n    var closeDropdown = function () {\n        setIsOpen(false);\n    };\n    var handleOptionClick = function (option) {\n        closeDropdown();\n    };\n    (0, react_1.useEffect)(function () {\n        var handleOutsideClick = function (event) {\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                closeDropdown();\n            }\n        };\n        document.addEventListener('click', handleOutsideClick);\n        return function () {\n            document.removeEventListener('click', handleOutsideClick);\n        };\n    }, []);\n    return (react_1.default.createElement(\"div\", { ref: dropdownRef, className: card_css_1.default.dropdown },\n        react_1.default.createElement(Menu_1.ForwardedMenu, { ref: buttonRef, onClick: toggleDropdown }),\n        isOpen && react_dom_1.default.createPortal(react_1.default.createElement(DropDownContent_1.default, { isOpen: isOpen, onClose: closeDropdown, onOptionClick: handleOptionClick, buttonCoordinates: buttonCoordinates }), droproot)));\n};\nexports.default = DropdownMenu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/DropDown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/DropDownContent.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/DropDownContent.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar icons_1 = __webpack_require__(/*! ../../icons */ \"./src/shared/icons/index.ts\");\nvar DropDownContent = function (_a) {\n    var isOpen = _a.isOpen, onClose = _a.onClose, onOptionClick = _a.onOptionClick, buttonCoordinates = _a.buttonCoordinates;\n    if (!isOpen)\n        return null;\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.dropdownMenu, style: {\n            top: \"\".concat(buttonCoordinates.top + 40, \"px\"),\n            left: \"\".concat(buttonCoordinates.left - 50, \"px\"),\n        } },\n        react_1.default.createElement(\"ul\", { className: card_css_1.default.dropdownList },\n            react_1.default.createElement(\"li\", { onClick: function () { return onOptionClick('Коментарии'); }, className: card_css_1.default.dropdownOption },\n                react_1.default.createElement(\"button\", { className: card_css_1.default.dropDownOptionBtn },\n                    react_1.default.createElement(icons_1.CommentIcon, null),\n                    \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438\")),\n            react_1.default.createElement(\"li\", { onClick: function () { return onOptionClick('Поделиться'); }, className: card_css_1.default.dropdownOption },\n                react_1.default.createElement(\"button\", { className: card_css_1.default.dropDownOptionBtn },\n                    react_1.default.createElement(icons_1.ShareIcon, null),\n                    \"\\u041F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F\")),\n            react_1.default.createElement(\"li\", { onClick: function () { return onOptionClick('Скрыть'); }, className: card_css_1.default.dropdownOption },\n                react_1.default.createElement(\"button\", { className: card_css_1.default.dropDownOptionBtn },\n                    react_1.default.createElement(icons_1.BlockIcon, null),\n                    \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\n            react_1.default.createElement(\"li\", { onClick: function () { return onOptionClick('Сохранить'); }, className: card_css_1.default.dropdownOption },\n                react_1.default.createElement(\"button\", { className: card_css_1.default.dropDownOptionBtn },\n                    react_1.default.createElement(icons_1.SaveIcon, null),\n                    \"\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C\")),\n            react_1.default.createElement(\"li\", { onClick: function () { return onOptionClick('Пожаловаться'); }, className: card_css_1.default.dropdownOption },\n                react_1.default.createElement(\"button\", { className: card_css_1.default.dropDownOptionBtn },\n                    react_1.default.createElement(icons_1.ReportIcon, null),\n                    \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))),\n        react_1.default.createElement(\"button\", { onClick: function () { return onOptionClick('Закрыть'); }, className: card_css_1.default.dropDownOptionLast }, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\"),\n        react_1.default.createElement(\"div\", { className: \"dropdown-overlay\" })));\n};\nexports.default = DropDownContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/DropDownContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Menu.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ForwardedMenu = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar icons_1 = __webpack_require__(/*! ../../icons */ \"./src/shared/icons/index.ts\");\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\n// Use React.forwardRef to forward the ref to the button element\nvar Menu = function (_a, ref) {\n    var onClick = _a.onClick;\n    return (react_1.default.createElement(\"button\", { ref: ref, className: card_css_1.default.menuButton, onClick: onClick },\n        react_1.default.createElement(icons_1.MenuIcon, null)));\n};\n// ForwardedMenu is now a reference to the button element\nvar ForwardedMenu = (0, react_1.forwardRef)(Menu);\nexports.ForwardedMenu = ForwardedMenu;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Post.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Post.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostModal = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar react_dom_1 = __importDefault(__webpack_require__(/*! react-dom */ \"react-dom\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar CommentForm_1 = __webpack_require__(/*! ./CommentForm */ \"./src/shared/CardsList/Card/CommentForm.tsx\");\nvar PostModal = function (props) {\n    var ref = (0, react_1.useRef)(null);\n    (0, react_1.useEffect)(function () {\n        function handleClick(event) {\n            var _a, _b;\n            if (event.target instanceof Node && !((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {\n                (_b = props.onClose) === null || _b === void 0 ? void 0 : _b.call(props);\n            }\n        }\n        document.addEventListener('click', handleClick);\n        return function () {\n            document.removeEventListener('click', handleClick);\n        };\n    }, []);\n    var node = document.querySelector('#modal_root');\n    if (!node)\n        return null;\n    return react_dom_1.default.createPortal(react_1.default.createElement(\"div\", { className: card_css_1.default.modal, ref: ref },\n        react_1.default.createElement(\"div\", { className: card_css_1.default.modal_content },\n            react_1.default.createElement(\"h2\", { className: card_css_1.default.title }, props.title),\n            react_1.default.createElement(\"div\", { className: card_css_1.default.preview },\n                react_1.default.createElement(\"img\", { className: card_css_1.default.previewImg, src: props.previewImg })),\n            react_1.default.createElement(\"div\", { className: card_css_1.default.user },\n                react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt }, props.datePostUtc),\n                react_1.default.createElement(\"div\", { className: card_css_1.default.user },\n                    react_1.default.createElement(\"img\", { className: card_css_1.default.avatar, src: props.avatar, alt: \"avatar\" }),\n                    react_1.default.createElement(\"a\", { href: \"#user-url\", className: card_css_1.default.username }, props.author))),\n            react_1.default.createElement(\"div\", { className: card_css_1.default.commentContainer },\n                react_1.default.createElement(CommentForm_1.CommentForm, null)))), node);\n};\nexports.PostModal = PostModal;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Post.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/PostContent.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/PostContent.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar Post_1 = __webpack_require__(/*! ./Post */ \"./src/shared/CardsList/Card/Post.tsx\");\nvar PostContent = function (props) {\n    var _a = (0, react_1.useState)(false), isModalOpened = _a[0], setIsModalOpened = _a[1];\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.alltext },\n        react_1.default.createElement(\"div\", { className: card_css_1.default.textContent },\n            react_1.default.createElement(\"h2\", { className: card_css_1.default.title },\n                react_1.default.createElement(\"a\", { href: \"#post-url\", onClick: function () { return setIsModalOpened(true); }, className: card_css_1.default.postLink }, props.title)),\n            react_1.default.createElement(\"div\", { className: card_css_1.default.user },\n                react_1.default.createElement(\"span\", { className: card_css_1.default.createdAt }, props.dataPostUtc),\n                react_1.default.createElement(\"div\", { className: card_css_1.default.user },\n                    react_1.default.createElement(\"img\", { className: card_css_1.default.avatar, src: props.avatar, alt: \"avatar\" }),\n                    react_1.default.createElement(\"a\", { href: \"#user-url\", className: card_css_1.default.username }, props.author))),\n            isModalOpened && react_1.default.createElement(Post_1.PostModal, { previewImg: props.previewImg, title: props.title, author: props.author, datePostUtc: props.datePostUtc, avatar: props.avatar, onClose: function () { setIsModalOpened(false); } }))));\n};\nexports.default = PostContent;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/PostContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/PostPreview.tsx":
/*!***************************************************!*\
  !*** ./src/shared/CardsList/Card/PostPreview.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar card_css_1 = __importDefault(__webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\"));\nvar PostPreview = function (props) {\n    return (react_1.default.createElement(\"div\", { className: card_css_1.default.preview },\n        react_1.default.createElement(\"img\", { className: card_css_1.default.previewImg, src: props.previewImg })));\n};\nexports.default = PostPreview;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/PostPreview.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/RedditComments.tsx":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/Card/RedditComments.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar axios_1 = __importDefault(__webpack_require__(/*! axios */ \"axios\"));\nvar RedditComments = function (_a) {\n    var postId = _a.postId;\n    var _b = (0, react_1.useState)([]), comments = _b[0], setComments = _b[1];\n    (0, react_1.useEffect)(function () {\n        var fetchData = function () { return __awaiter(void 0, void 0, void 0, function () {\n            var response, formattedComments, error_1;\n            var _a;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0:\n                        _b.trys.push([0, 2, , 3]);\n                        return [4 /*yield*/, axios_1.default.get(\"http://api.reddit.com/r/subreddit/comments/\".concat(postId), {\n                                headers: {\n                                    'User-Agent': 'your_app_name/0.1',\n                                },\n                            })];\n                    case 1:\n                        response = _b.sent();\n                        // Выводим данные в консоль для отладки\n                        console.log('Response Data:', response.data);\n                        if (response.data && response.data.children && ((_a = response.data.children[0]) === null || _a === void 0 ? void 0 : _a.data.children)) {\n                            formattedComments = response.data.children[0].data.children.map(function (comment) { return ({\n                                data: { body: comment.data.body },\n                            }); });\n                            setComments(formattedComments);\n                        }\n                        else {\n                            console.error('Invalid response structure:', response.data);\n                        }\n                        return [3 /*break*/, 3];\n                    case 2:\n                        error_1 = _b.sent();\n                        console.error('Ошибка при выполнении запроса:', error_1);\n                        return [3 /*break*/, 3];\n                    case 3: return [2 /*return*/];\n                }\n            });\n        }); };\n        fetchData();\n    }, [postId]);\n    return (react_1.default.createElement(\"div\", null,\n        react_1.default.createElement(\"h2\", null,\n            \"\\u041A\\u043E\\u043C\\u043C\\u0435\\u043D\\u0442\\u0430\\u0440\\u0438\\u0438 \\u043A \\u043F\\u043E\\u0441\\u0442\\u0443 \",\n            postId),\n        react_1.default.createElement(\"ul\", null, comments.map(function (comment, index) { return (react_1.default.createElement(\"li\", { key: index }, comment.data.body)); }))));\n};\nexports.default = RedditComments;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/RedditComments.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"card\": \"card__card--7bN6-\",\n\t\"alltext\": \"card__alltext--3CVD3\",\n\t\"menu\": \"card__menu--2VNdY\",\n\t\"metaData\": \"card__metaData--2-4Ht\",\n\t\"createdAt\": \"card__createdAt--1NM_7\",\n\t\"avatar\": \"card__avatar--3eg0i\",\n\t\"dropdownOption\": \"card__dropdownOption--Pk9ZP\",\n\t\"dropDownOptionBtn\": \"card__dropDownOptionBtn--9GCB2\",\n\t\"dropDownOptionLast\": \"card__dropDownOptionLast--2AVtX\",\n\t\"dropdown\": \"card__dropdown--Loivo\",\n\t\"dropdownMenu\": \"card__dropdownMenu--qiGjb\",\n\t\"dropdownList\": \"card__dropdownList--2NTn8\",\n\t\"user\": \"card__user--oULTT\",\n\t\"username\": \"card__username--1I_6u\",\n\t\"title\": \"card__title--2eC9p\",\n\t\"postLink\": \"card__postLink--1dr-s\",\n\t\"preview\": \"card__preview--M1PGJ\",\n\t\"previewImg\": \"card__previewImg--37Jut\",\n\t\"menuButton\": \"card__menuButton--2icIq\",\n\t\"controls__number\": \"card__controls__number--1OZIb\",\n\t\"control__down\": \"card__control__down--2j1Fb\",\n\t\"control__up\": \"card__control__up--1aIE9\",\n\t\"controls__svgUp\": \"card__controls__svgUp--22g_S\",\n\t\"controls__svgDown\": \"card__controls__svgDown--3gBaj\",\n\t\"controls\": \"card__controls--1mm-w\",\n\t\"karmaCounter\": \"card__karmaCounter--2eqMa\",\n\t\"karmaValue\": \"card__karmaValue--1HJaY\",\n\t\"down\": \"card__down--KLMht\",\n\t\"commentsButton\": \"card__commentsButton--1yRBb\",\n\t\"commentsNumber\": \"card__commentsNumber--2xwYQ\",\n\t\"shareButton\": \"card__shareButton--24LVI\",\n\t\"saveButton\": \"card__saveButton--2Cz7O\",\n\t\"dropdownListItem\": \"card__dropdownListItem--3ep9_\",\n\t\"modal\": \"card__modal--e2UqZ\",\n\t\"modal_content\": \"card__modal_content--JTw01\",\n\t\"commentTextarea\": \"card__commentTextarea--3_oDb\",\n\t\"commentBtn\": \"card__commentBtn--1M5vl\",\n\t\"textContent\": \"card__textContent--3Ki_7\",\n\t\"userLink\": \"card__userLink--1NVQG\",\n\t\"up\": \"card__up--K0BLJ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardsList.jsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CardsList = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\nvar Card_1 = __importDefault(__webpack_require__(/*! ./Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\"));\nvar postContext_1 = __webpack_require__(/*! ../context/postContext */ \"./src/shared/context/postContext.tsx\");\nfunction CardsList() {\n    var posts = (0, react_1.useContext)(postContext_1.postsContext);\n    return (react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardsList }, posts.map(function (post) {\n        var _a;\n        return (react_1.default.createElement(\"li\", { key: post.data.id },\n            react_1.default.createElement(Card_1.default, { id: post.data.id, author: post.data.author, title: post.data.title, avatar: post.data.sr_detail.icon_img\n                    ? post.data.sr_detail.icon_img\n                    : 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80', previewImg: post.data.preview\n                    ? (_a = post.data.preview.images) === null || _a === void 0 ? void 0 : _a[0].source.url.replace(/(\\&amp\\;)/g, '&')\n                    : 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80', datePostUtc: post.data.created_utc * 1000 })));\n    })));\n}\nexports.CardsList = CardsList;\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.jsx?");

/***/ }),

/***/ "./src/shared/CardsList/cardslist.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/cardslist.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"cardsList\": \"cardslist__cardsList--1DoiZ\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/cardslist.css?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Content = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar content_css_1 = __importDefault(__webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\"));\nfunction Content(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"main\", { className: content_css_1.default.content }, children));\n}\nexports.Content = Content;\n\n\n//# sourceURL=webpack:///./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"content\": \"content__content--2O9-S\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Header = void 0;\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar header_css_1 = __importDefault(__webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\"));\nvar ThreadTitle_1 = __webpack_require__(/*! ./ThreadTitle/ThreadTitle */ \"./src/shared/Header/ThreadTitle/ThreadTitle.tsx\");\nvar SearchBlock_1 = __webpack_require__(/*! ./SearchBlock/SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\nvar SortBlock_1 = __webpack_require__(/*! ./SortBlock/SortBlock */ \"./src/shared/Header/SortBlock/SortBlock.tsx\");\nfunction Header() {\n    return (React.createElement(\"header\", { className: header_css_1.default.header },\n        React.createElement(SearchBlock_1.SearchBlock, null),\n        React.createElement(ThreadTitle_1.ThreadTitle, null),\n        React.createElement(SortBlock_1.SortBlock, null)));\n}\nexports.Header = Header;\n\n\n//# sourceURL=webpack:///./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SearchBlock = void 0;\nvar react_1 = __importStar(__webpack_require__(/*! react */ \"react\"));\nvar searchblock_css_1 = __importDefault(__webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\"));\nvar UserBlock_1 = __webpack_require__(/*! ./UserBlock/UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\nvar userContext_1 = __webpack_require__(/*! ../../context/userContext */ \"./src/shared/context/userContext.tsx\");\nfunction SearchBlock() {\n    var _a = (0, react_1.useContext)(userContext_1.userContext), iconImg = _a.iconImg, name = _a.name;\n    return (react_1.default.createElement(\"div\", { className: searchblock_css_1.default.searchBlock },\n        react_1.default.createElement(UserBlock_1.UserBlock, { avatarSrc: iconImg, username: name })));\n}\nexports.SearchBlock = SearchBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar icons_1 = __webpack_require__(/*! ../../../icons */ \"./src/shared/icons/index.ts\");\n// import { Text } from '../../../Text'\nvar userblock_css_1 = __importDefault(__webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\"));\nfunction UserBlock(_a) {\n    var avatarSrc = _a.avatarSrc, username = _a.username;\n    return (react_1.default.createElement(\"a\", { href: \"https://www.reddit.com/api/v1/authorize?client_id=22Ys4wzDt1ytZaTbe6OH1Q&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity\", className: userblock_css_1.default.userBox },\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.avatarBox }, avatarSrc\n            ? react_1.default.createElement(\"img\", { src: avatarSrc, alt: 'user avatar', className: userblock_css_1.default.avatarImg })\n            : react_1.default.createElement(icons_1.IconAnon, null)),\n        react_1.default.createElement(\"div\", { className: userblock_css_1.default.userName },\n            react_1.default.createElement(\"span\", { className: userblock_css_1.default.userNameText }, username || 'Аноним'))));\n}\nexports.UserBlock = UserBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"userBox\": \"userblock__userBox--24rEF\",\n\t\"userNameText\": \"userblock__userNameText--3wSHN\",\n\t\"avatarImg\": \"userblock__avatarImg--3MvAI\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"searchBlock\": \"searchblock__searchBlock--3aDPv\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/SortBlock.tsx":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/SortBlock.tsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortBlock = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar sortblock_css_1 = __importDefault(__webpack_require__(/*! ./sortblock.css */ \"./src/shared/Header/SortBlock/sortblock.css\"));\nfunction SortBlock() {\n    return (react_1.default.createElement(\"div\", { className: sortblock_css_1.default.sortblock }, \"Sort block\"));\n}\nexports.SortBlock = SortBlock;\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/SortBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SortBlock/sortblock.css":
/*!***************************************************!*\
  !*** ./src/shared/Header/SortBlock/sortblock.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"sortblock\": \"sortblock__sortblock--2jFPk\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/SortBlock/sortblock.css?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/ThreadTitle.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/ThreadTitle.tsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ThreadTitle = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar threadtitle_css_1 = __importDefault(__webpack_require__(/*! ./threadtitle.css */ \"./src/shared/Header/ThreadTitle/threadtitle.css\"));\nfunction ThreadTitle() {\n    return (react_1.default.createElement(\"div\", { className: threadtitle_css_1.default.threadtitle }, \"Thread title\"));\n}\nexports.ThreadTitle = ThreadTitle;\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/ThreadTitle.tsx?");

/***/ }),

/***/ "./src/shared/Header/ThreadTitle/threadtitle.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/ThreadTitle/threadtitle.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"threadtitle\": \"threadtitle__threadtitle--10b_Q\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/ThreadTitle/threadtitle.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"header__header--bAgyG\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layout = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction Layout(_a) {\n    var children = _a.children;\n    return (react_1.default.createElement(\"div\", null, children));\n}\nexports.Layout = Layout;\n\n\n//# sourceURL=webpack:///./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/context/commentContext.ts":
/*!**********************************************!*\
  !*** ./src/shared/context/commentContext.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar commentContext = react_1.default.createContext({\n    value: '',\n    onChange: function () { },\n});\nexports.default = commentContext;\n\n\n//# sourceURL=webpack:///./src/shared/context/commentContext.ts?");

/***/ }),

/***/ "./src/shared/context/postContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/postContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PostsContextProvider = exports.postsContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar usePostsData_1 = __webpack_require__(/*! ../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\nexports.postsContext = react_1.default.createContext([]);\nfunction PostsContextProvider(_a) {\n    var children = _a.children;\n    var posts = (0, usePostsData_1.usePostsData)();\n    return react_1.default.createElement(exports.postsContext.Provider, { value: posts }, children);\n}\nexports.PostsContextProvider = PostsContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/context/postContext.tsx?");

/***/ }),

/***/ "./src/shared/context/tokenContext.ts":
/*!********************************************!*\
  !*** ./src/shared/context/tokenContext.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.tokenContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nexports.tokenContext = react_1.default.createContext('');\n\n\n//# sourceURL=webpack:///./src/shared/context/tokenContext.ts?");

/***/ }),

/***/ "./src/shared/context/userContext.tsx":
/*!********************************************!*\
  !*** ./src/shared/context/userContext.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.UserContextProvider = exports.userContext = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nvar useUserData_1 = __webpack_require__(/*! ../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\nexports.userContext = react_1.default.createContext({});\nfunction UserContextProvider(_a) {\n    var children = _a.children;\n    var data = (0, useUserData_1.useUserData)()[0];\n    return (react_1.default.createElement(exports.userContext.Provider, { value: data }, children));\n}\nexports.UserContextProvider = UserContextProvider;\n\n\n//# sourceURL=webpack:///./src/shared/context/userContext.tsx?");

/***/ }),

/***/ "./src/shared/icons/BlockIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/BlockIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BlockIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction BlockIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\", fill: \"#999999\" })));\n}\nexports.BlockIcon = BlockIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/BlockIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/CommentIcon.tsx":
/*!******************************************!*\
  !*** ./src/shared/icons/CommentIcon.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CommentIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction CommentIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\", fill: \"#999999\" })));\n}\nexports.CommentIcon = CommentIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/CommentIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/IconAnon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/IconAnon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.IconAnon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction IconAnon() {\n    return (react_1.default.createElement(\"svg\", { width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\nexports.IconAnon = IconAnon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/IconAnon.tsx?");

/***/ }),

/***/ "./src/shared/icons/MenuIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/MenuIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction MenuIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"https://\" },\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\n        react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" })));\n}\nexports.MenuIcon = MenuIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/MenuIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ReportIcon.tsx":
/*!*****************************************!*\
  !*** ./src/shared/icons/ReportIcon.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ReportIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ReportIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\", fill: \"#999999\" })));\n}\nexports.ReportIcon = ReportIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ReportIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/SaveIcon.tsx":
/*!***************************************!*\
  !*** ./src/shared/icons/SaveIcon.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SaveIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction SaveIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\", fill: \"#979797\" })));\n}\nexports.SaveIcon = SaveIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/SaveIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/ShareIcon.tsx":
/*!****************************************!*\
  !*** ./src/shared/icons/ShareIcon.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ShareIcon = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nfunction ShareIcon() {\n    return (react_1.default.createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react_1.default.createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\", fill: \"#999999\" })));\n}\nexports.ShareIcon = ShareIcon;\n\n\n//# sourceURL=webpack:///./src/shared/icons/ShareIcon.tsx?");

/***/ }),

/***/ "./src/shared/icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/icons/index.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\n__exportStar(__webpack_require__(/*! ./MenuIcon */ \"./src/shared/icons/MenuIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./CommentIcon */ \"./src/shared/icons/CommentIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./BlockIcon */ \"./src/shared/icons/BlockIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ShareIcon */ \"./src/shared/icons/ShareIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./ReportIcon */ \"./src/shared/icons/ReportIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./SaveIcon */ \"./src/shared/icons/SaveIcon.tsx\"), exports);\n__exportStar(__webpack_require__(/*! ./IconAnon */ \"./src/shared/icons/IconAnon.tsx\"), exports);\n\n\n//# sourceURL=webpack:///./src/shared/icons/index.ts?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom\");\n\n//# sourceURL=webpack:///external_%22react-dom%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ })

/******/ });