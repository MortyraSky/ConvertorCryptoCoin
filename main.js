/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!./components/CryptoTable/Style.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-modules-typescript-loader!../node_modules/css-loader/dist/cjs.js??ref--7-2!../node_modules/sass-loader/dist/cjs.js??ref--7-3!./components/CryptoTable/Style.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".components-CryptoTable-Style__red--1x8S2 {\n  background: red;\n}\n\n.components-CryptoTable-Style__green--2erDc {\n  background: green;\n}\n\n.components-CryptoTable-Style__rowTable--TOmOL {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://components/CryptoTable/Style.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AACA;EAEE,eAAA;AACF","sourcesContent":[".red{\r\n  background: red;\r\n}\r\n\r\n.green{\r\n  background: green;\r\n}\r\n.rowTable\r\n{\r\n  cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"red": "components-CryptoTable-Style__red--1x8S2",
	"green": "components-CryptoTable-Style__green--2erDc",
	"rowTable": "components-CryptoTable-Style__rowTable--TOmOL"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./components/App.tsx":
/*!****************************!*\
  !*** ./components/App.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const Container_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Container */ "../node_modules/@material-ui/core/esm/Container/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
const Grid_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Grid */ "../node_modules/@material-ui/core/esm/Grid/index.js"));
const testStore_1 = __webpack_require__(/*! ./Stores/testStore */ "./components/Stores/testStore.ts");
const currenciesCBStore_1 = __webpack_require__(/*! ./Stores/currenciesCBStore */ "./components/Stores/currenciesCBStore.ts");
const Modal_1 = __importDefault(__webpack_require__(/*! ../components/Modal/Modal */ "./components/Modal/Modal.tsx"));
const SubcribeBlock_1 = __importDefault(__webpack_require__(/*! ../components/SubcribeBlock/SubcribeBlock */ "./components/SubcribeBlock/SubcribeBlock.tsx"));
const components_1 = __webpack_require__(/*! ../components */ "./components/index.ts");
const Footer_1 = __webpack_require__(/*! ../components/Footer/Footer */ "./components/Footer/Footer.tsx");
const Header_1 = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.tsx");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    body: {
        margin: 0,
        padding: 0,
    },
    root: {
        padding: theme.spacing(10),
        minHeight: 'calc(100vh - 100px)',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    currencyInputBox: {
        marginBottom: 20,
        marginTop: 20,
    },
    currencyInput: {
        minWidth: 'calc(15% - 10px)',
        marginRight: 10,
    },
    currencyType: {
        minWidth: '30%',
    },
    container: {
    // maxHeight: 440,
    },
    currencyCoinIcon: {
        width: 18,
        height: 18,
        borderRadius: 25,
    },
    subscribeBlock: {
        marginBottom: 18,
    },
    trackChangeButton: {
        marginLeft: 18,
    },
}));
exports.App = () => {
    const TestStore = react_1.default.useContext(testStore_1.testStoreContext);
    const CurrCBStore = react_1.default.useContext(currenciesCBStore_1.currenciesCBContext);
    const classes = useStyles();
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.minHeight = '100%';
    const [open, setOpen] = react_1.default.useState(true);
    console.log('отрисовка апп.тсх');
    react_1.default.useEffect(() => {
        TestStore.fetchNameCoins();
        CurrCBStore.fetchCoins();
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null, open ? (react_1.default.createElement(Modal_1.default, { GlobalOpenStatus: open, ChangeGlobalOpenStatus: () => {
            setOpen(!open);
        } })) : (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Header_1.Header, null),
        react_1.default.createElement(Container_1.default, { className: classes.root, maxWidth: "lg" },
            react_1.default.createElement(Container_1.default, null,
                react_1.default.createElement(SubcribeBlock_1.default, { classes: classes })),
            react_1.default.createElement(Grid_1.default, { container: true, spacing: 3 },
                react_1.default.createElement(Grid_1.default, { item: true, xs: 8 },
                    react_1.default.createElement(components_1.CryptoTable, { classes: classes })),
                react_1.default.createElement(Grid_1.default, { item: true, xs: 4 },
                    react_1.default.createElement(components_1.ConverterBlock, { classes: classes })))),
        react_1.default.createElement(Footer_1.Footer, null)))));
};


/***/ }),

/***/ "./components/ConverterBlock/ConvertorBlock.tsx":
/*!******************************************************!*\
  !*** ./components/ConverterBlock/ConvertorBlock.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable max-len */
const react_1 = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/dist/mobxreact.esm.js");
const Paper_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Paper */ "../node_modules/@material-ui/core/esm/Paper/index.js"));
const TextField_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TextField */ "../node_modules/@material-ui/core/esm/TextField/index.js"));
const Select_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Select */ "../node_modules/@material-ui/core/esm/Select/index.js"));
const MenuItem_1 = __importDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "../node_modules/@material-ui/core/esm/MenuItem/index.js"));
const InputLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "../node_modules/@material-ui/core/esm/InputLabel/index.js"));
const FormControl_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControl */ "../node_modules/@material-ui/core/esm/FormControl/index.js"));
const currenciesStore_1 = __webpack_require__(/*! ../Stores/currenciesStore */ "./components/Stores/currenciesStore.ts");
const convertorStore_1 = __webpack_require__(/*! ../Stores/convertorStore */ "./components/Stores/convertorStore.ts");
const testStore_1 = __webpack_require__(/*! ../Stores/testStore */ "./components/Stores/testStore.ts");
const currenciesCBStore_1 = __webpack_require__(/*! ../Stores/currenciesCBStore */ "./components/Stores/currenciesCBStore.ts");
const ConvertorBlock = mobx_react_1.observer(({ classes }) => {
    var _a, _b;
    const currenciesStore = react_1.default.useContext(currenciesStore_1.currenciesContext);
    const converterStore = react_1.default.useContext(convertorStore_1.convertorContext);
    const currenciesCBStore = react_1.default.useContext(currenciesCBStore_1.currenciesCBContext);
    const testStore = react_1.default.useContext(testStore_1.testStoreContext);
    const USD = (_a = currenciesCBStore.getItems) === null || _a === void 0 ? void 0 : _a.reduce((initVal, coin) => {
        if (coin.CharCode === 'USD') {
            initVal = coin.Value;
        }
        return initVal;
    }, 0);
    const [costInCurrencies, setCostInCurrencies] = react_1.useState(0);
    const [coins, setCoins] = react_1.useState([]);
    const [nameInCoin, setNameInCoin] = react_1.useState('');
    const [priceIn, setPriceIn] = react_1.useState(0);
    const [count, setCount] = react_1.useState(1);
    const [priceOut, setPriceOut] = react_1.useState(0);
    const [countOut, setCountOut] = react_1.useState(0);
    const [nameOutCoin, setNameOutCoin] = react_1.useState('');
    // console.log('кто быстрее coins или useEffect', coins, currenciesStore?.getItems);
    react_1.default.useEffect(() => {
        var _a;
        if (currenciesStore.getItems.length > 0) {
            setCoins(((_a = currenciesStore.getItems) === null || _a === void 0 ? void 0 : _a.map((coin) => ({
                name: coin.name || '',
                price: coin.price || 0,
            }))) || []);
        }
    }, [currenciesStore, currenciesStore.getItems]);
    react_1.default.useEffect(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        console.log('this shit first');
        if ((_a = converterStore === null || converterStore === void 0 ? void 0 : converterStore.getSelectedCoin) === null || _a === void 0 ? void 0 : _a.price) {
            setCountOut((count * ((_b = converterStore === null || converterStore === void 0 ? void 0 : converterStore.getSelectedCoin) === null || _b === void 0 ? void 0 : _b.price)) / priceOut);
        }
        else if (coins.length > 0) {
            console.log(count, coins[0], coins[1]);
            setNameInCoin((_c = coins[0]) === null || _c === void 0 ? void 0 : _c.name);
            setPriceIn((_d = coins[0]) === null || _d === void 0 ? void 0 : _d.price);
            setPriceOut((_e = coins[1]) === null || _e === void 0 ? void 0 : _e.price);
            setNameOutCoin((_f = coins[1]) === null || _f === void 0 ? void 0 : _f.name);
            setCountOut((count * ((_g = coins[0]) === null || _g === void 0 ? void 0 : _g.price)) / ((_h = coins[1]) === null || _h === void 0 ? void 0 : _h.price));
            setCostInCurrencies(count * ((_j = coins[0]) === null || _j === void 0 ? void 0 : _j.price) * USD);
        }
    }, [converterStore.getSelectedCoin, coins]);
    react_1.default.useEffect(() => {
        var _a;
        console.log('count out', countOut, priceOut, priceIn);
        if ((_a = converterStore.getSelectedCoin) === null || _a === void 0 ? void 0 : _a.price) {
            setCount((countOut * priceOut) / converterStore.getSelectedCoin.price);
        }
        else if (priceIn) {
            console.log((countOut * priceOut) / priceIn, 'расчет кол 1 инпута');
            setCount((countOut * priceOut) / priceIn);
        }
    }, [nameOutCoin]);
    return (react_1.default.createElement(Paper_1.default, { className: classes.paper },
        react_1.default.createElement("div", { className: classes.currencyInputBox },
            react_1.default.createElement(FormControl_1.default, { className: classes.currencyInput },
                react_1.default.createElement(TextField_1.default, { type: "number", label: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", value: count.toFixed(3) || 0, disabled: testStore.getIsTracked, onChange: (e) => {
                        var _a;
                        // console.log('change text field', e.target.value);
                        // setPriceIn(parseFloat(e.target.value));
                        let count = parseFloat(e.target.value);
                        setCount(count);
                        setCostInCurrencies(count * USD * priceIn);
                        if ((_a = converterStore.getSelectedCoin) === null || _a === void 0 ? void 0 : _a.price) {
                            setCountOut((count * converterStore.getSelectedCoin.price) / priceOut);
                            setCostInCurrencies((count * converterStore.getSelectedCoin.price) / priceOut);
                        }
                        else {
                            setCountOut((count * priceIn) / priceOut);
                            setCostInCurrencies((count * priceIn) / priceOut);
                        }
                    } })),
            react_1.default.createElement(FormControl_1.default, { className: classes.currencyType },
                react_1.default.createElement(InputLabel_1.default, { shrink: true, id: "demo-simple-select-helper-label" }, "\u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430"),
                react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-helper-label", value: (converterStore === null || converterStore === void 0 ? void 0 : converterStore.getSelectedCoin.name) || nameInCoin, disabled: testStore.getIsTracked, onChange: (e) => {
                        var _a;
                        if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) {
                            currenciesStore.getItems.map((coin) => {
                                var _a;
                                if (coin.name === ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value)) {
                                    converterStore === null || converterStore === void 0 ? void 0 : converterStore.setItems(coin);
                                    setNameInCoin(coin.name);
                                    setPriceIn(coin.price);
                                }
                            });
                        }
                    } }, coins === null || coins === void 0 ? void 0 : coins.map((coin) => (react_1.default.createElement(MenuItem_1.default, { value: coin.name, key: coin.name }, coin.name)))))),
        react_1.default.createElement("div", { className: classes.currencyInputBox },
            react_1.default.createElement(FormControl_1.default, { className: classes.currencyInput },
                react_1.default.createElement(TextField_1.default, { type: "number", label: "\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E", value: countOut.toFixed(3) || 0, disabled: testStore.getIsTracked, onChange: (e) => {
                        var _a;
                        // setPriceIn(parseFloat(e.target.value));
                        let count = parseFloat(e.target.value);
                        setCountOut(parseFloat(e.target.value));
                        if ((_a = converterStore.getSelectedCoin) === null || _a === void 0 ? void 0 : _a.price) {
                            setCount((count * priceOut) / converterStore.getSelectedCoin.price);
                            setCostInCurrencies((count * priceOut) / converterStore.getSelectedCoin.price);
                        }
                        else {
                            setCount((count * priceOut) / priceIn);
                            setCostInCurrencies((count * priceOut) / priceIn);
                        }
                    } })),
            react_1.default.createElement(FormControl_1.default, { className: classes.currencyType },
                react_1.default.createElement(InputLabel_1.default, { shrink: true, id: "demo-simple-select-helper-label" }, "\u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430"),
                react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-helper-label", value: nameOutCoin || '', disabled: testStore.getIsTracked, onChange: (e) => {
                        var _a;
                        if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) {
                            currenciesStore.getItems.map((coin) => {
                                var _a;
                                if (coin.name === ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value)) {
                                    setNameOutCoin(coin.name);
                                    setPriceOut(coin.price);
                                }
                            });
                        }
                    } }, coins === null || coins === void 0 ? void 0 : coins.map((coin) => (react_1.default.createElement(MenuItem_1.default, { value: coin.name, key: coin.name }, coin.name)))))),
        react_1.default.createElement("div", { className: classes.currencyInputBox },
            react_1.default.createElement(FormControl_1.default, { className: classes.currencyInput },
                react_1.default.createElement(TextField_1.default, { type: "number", label: "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C", value: costInCurrencies.toFixed(3) || 0, 
                    // disabled
                    onChange: (e) => {
                        if (e.target.value) {
                            let cost = +e.target.value;
                            setCostInCurrencies(cost);
                            setCount(cost / (priceIn * USD));
                        }
                    } })),
            react_1.default.createElement(FormControl_1.default, { className: classes.currencyType },
                react_1.default.createElement(InputLabel_1.default, { shrink: true, id: "demo-simple-select-helper-label" }, "\u0412\u0430\u043B\u044E\u0442\u0430"),
                react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-helper-label", value: 'RUB' || false, disabled: true }, (_b = currenciesCBStore.getItems) === null || _b === void 0 ? void 0 : _b.map((coin) => (react_1.default.createElement(MenuItem_1.default, { value: coin.CharCode, key: coin.ID }, coin.CharCode))))))));
});
exports.default = ConvertorBlock;


/***/ }),

/***/ "./components/CryptoTable/CryptoTable.tsx":
/*!************************************************!*\
  !*** ./components/CryptoTable/CryptoTable.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CryptoTable = void 0;
/* eslint-disable no-unused-vars */
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/dist/mobxreact.esm.js");
const Table_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Table */ "../node_modules/@material-ui/core/esm/Table/index.js"));
const TableBody_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableBody */ "../node_modules/@material-ui/core/esm/TableBody/index.js"));
const TableCell_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableCell */ "../node_modules/@material-ui/core/esm/TableCell/index.js"));
const TableContainer_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableContainer */ "../node_modules/@material-ui/core/esm/TableContainer/index.js"));
const TableHead_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableHead */ "../node_modules/@material-ui/core/esm/TableHead/index.js"));
const TableRow_1 = __importDefault(__webpack_require__(/*! @material-ui/core/TableRow */ "../node_modules/@material-ui/core/esm/TableRow/index.js"));
const currenciesStore_1 = __webpack_require__(/*! ../Stores/currenciesStore */ "./components/Stores/currenciesStore.ts");
const convertorStore_1 = __webpack_require__(/*! ../Stores/convertorStore */ "./components/Stores/convertorStore.ts");
const Style_scss_1 = __importDefault(__webpack_require__(/*! ./Style.scss */ "./components/CryptoTable/Style.scss"));
const columns = [
    { id: 'imageUrl', label: '', minWidth: 50 },
    { id: 'name', label: 'NAME', minWidth: 90 },
    {
        id: 'fullName',
        label: 'CryptoExchange',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'price',
        label: 'PRICE',
        minWidth: 90,
        align: 'left',
    },
    {
        id: 'volume24Hour',
        label: 'volume24Hour',
        minWidth: 170,
        align: 'left',
    },
];
const colors = {
    red: '#f8181880',
    green: '#5bd150a3',
    none: '',
};
exports.CryptoTable = mobx_react_1.observer(({ classes }) => {
    const currenciesStore = react_1.default.useContext(currenciesStore_1.currenciesContext);
    const converterStore = react_1.default.useContext(convertorStore_1.convertorContext);
    const items = currenciesStore.getItems;
    react_1.default.useEffect(() => {
        currenciesStore === null || currenciesStore === void 0 ? void 0 : currenciesStore.fetchCoins();
        // currenciesStore?.startMessageListening();
    }, [currenciesStore.getTrackedCoins]);
    return (react_1.default.createElement(TableContainer_1.default, null,
        react_1.default.createElement(Table_1.default, { stickyHeader: true, "aria-label": "sticky table" },
            react_1.default.createElement(TableHead_1.default, null,
                react_1.default.createElement(TableRow_1.default, null, columns.map((column) => (react_1.default.createElement(TableCell_1.default, { key: column.id, align: column.align, style: { minWidth: column.minWidth } }, column.label))))),
            react_1.default.createElement(TableBody_1.default, null, !(items === null || items === void 0 ? void 0 : items.length)
                ? 'Load...'
                : items === null || items === void 0 ? void 0 : items.map((coin) => (react_1.default.createElement(TableRow_1.default, { hover: true, tabIndex: -1, key: coin.id, className: Style_scss_1.default.rowTable, onClick: () => {
                        // console.log('coin', coin);
                        converterStore === null || converterStore === void 0 ? void 0 : converterStore.setItems(coin);
                    } }, columns.map((column) => {
                    const value = coin[column.id];
                    const colorCell = colors[coin.flags];
                    const tableCell = column.id !== 'imageUrl' ? (react_1.default.createElement(TableCell_1.default, { key: column.id, align: column.align, 
                        // className={Style[]}
                        style: { background: colorCell } }, value)) : (react_1.default.createElement(TableCell_1.default, { key: column.id, align: column.align },
                        react_1.default.createElement("img", { className: classes.currencyCoinIcon, src: coin.imageUrl, alt: "Coin ico" })));
                    return tableCell;
                }))))))));
});
exports.default = exports.CryptoTable;


/***/ }),

/***/ "./components/CryptoTable/Style.scss":
/*!*******************************************!*\
  !*** ./components/CryptoTable/Style.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_modules_typescript_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_Style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-modules-typescript-loader!../../../node_modules/css-loader/dist/cjs.js??ref--7-2!../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!./Style.scss */ "../node_modules/css-modules-typescript-loader/index.js!../node_modules/css-loader/dist/cjs.js?!../node_modules/sass-loader/dist/cjs.js?!./components/CryptoTable/Style.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_modules_typescript_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_Style_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_modules_typescript_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_Style_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./components/Footer/Footer.tsx":
/*!**************************************!*\
  !*** ./components/Footer/Footer.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Footer = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    footer: {
        width: '100%',
        height: 50,
        background: 'gray',
    },
}));
exports.Footer = () => {
    const classes = useStyles();
    return (react_1.default.createElement("footer", { className: classes.footer },
        react_1.default.createElement("div", null, "@ Created By PK")));
};


/***/ }),

/***/ "./components/Header/Header.tsx":
/*!**************************************!*\
  !*** ./components/Header/Header.tsx ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/dist/mobxreact.esm.js");
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
const currenciesCBStore_1 = __webpack_require__(/*! ../Stores/currenciesCBStore */ "./components/Stores/currenciesCBStore.ts");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    header: {
        width: '100%',
        height: 50,
        background: 'gray',
    },
    currenciesBlock: {
        marginBottom: 24,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
    },
    currenciesItem: {
        paddingRight: 15,
    },
    link: {
        paddingRight: 15,
    },
}));
exports.Header = mobx_react_1.observer(() => {
    var _a;
    const CurrCBStore = react_1.default.useContext(currenciesCBStore_1.currenciesCBContext);
    react_1.default.useEffect(() => {
        const intervalID = setInterval(() => {
            CurrCBStore.fetchCoins();
        }, 1000 * 60 * 10);
        return () => { clearInterval(intervalID); };
    }, []);
    const classes = useStyles();
    return (react_1.default.createElement("header", { className: classes.header },
        react_1.default.createElement("div", { className: classes.currenciesBlock }, (_a = CurrCBStore.getItems) === null || _a === void 0 ? void 0 : _a.map((coin) => {
            if (coin.CharCode === 'USD' || coin.CharCode === 'EUR') {
                return (react_1.default.createElement("div", { className: classes.currenciesItem, key: coin.ID }, `${coin.CharCode} - ${coin.Value}`));
            }
            return null;
        }))));
});


/***/ }),

/***/ "./components/Modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/Modal/Modal.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/dist/mobxreact.esm.js");
const styles_1 = __webpack_require__(/*! @material-ui/core/styles */ "../node_modules/@material-ui/core/esm/styles/index.js");
const Select_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Select */ "../node_modules/@material-ui/core/esm/Select/index.js"));
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js"));
const MenuItem_1 = __importDefault(__webpack_require__(/*! @material-ui/core/MenuItem */ "../node_modules/@material-ui/core/esm/MenuItem/index.js"));
const InputLabel_1 = __importDefault(__webpack_require__(/*! @material-ui/core/InputLabel */ "../node_modules/@material-ui/core/esm/InputLabel/index.js"));
const FormControl_1 = __importDefault(__webpack_require__(/*! @material-ui/core/FormControl */ "../node_modules/@material-ui/core/esm/FormControl/index.js"));
const Chip_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Chip */ "../node_modules/@material-ui/core/esm/Chip/index.js"));
const MonetizationOn_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/MonetizationOn */ "../node_modules/@material-ui/icons/MonetizationOn.js"));
const Save_1 = __importDefault(__webpack_require__(/*! @material-ui/icons/Save */ "../node_modules/@material-ui/icons/Save.js"));
const Modal_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Modal */ "../node_modules/@material-ui/core/esm/Modal/index.js"));
const Backdrop_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Backdrop */ "../node_modules/@material-ui/core/esm/Backdrop/index.js"));
const Typography_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Typography */ "../node_modules/@material-ui/core/esm/Typography/index.js"));
const web_cjs_1 = __webpack_require__(/*! react-spring/web.cjs */ "../node_modules/react-spring/web.cjs.js"); // web.cjs is required for IE 11 support
const testStore_1 = __webpack_require__(/*! ../Stores/testStore */ "./components/Stores/testStore.ts");
const currenciesStore_1 = __webpack_require__(/*! ../Stores/currenciesStore */ "./components/Stores/currenciesStore.ts");
const useStyles = styles_1.makeStyles((theme) => styles_1.createStyles({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        display: 'flex',
        // justifyContent: 'center',
        flexDirection: 'column',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
        maxWidth: 500,
        minWidth: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    currencyInputBox: {
        marginBottom: 10,
        marginTop: 10,
    },
    currencyInput: {
        minWidth: 'calc(15% - 10px)',
        marginRight: 10,
    },
    currencyType: {
        minWidth: '40%',
    },
    chip: {
        padding: 10,
        marginRight: 10,
        marginBottom: 10,
    },
    buttonBlock: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        margin: theme.spacing(1),
    },
}));
// const Fade = React.forwardRef<HTMLDivElement, FadeProps>((
//   props,
//   ref,
// ) => {
//   const {
//     in: open, children, onEnter, onExited, ...other
//   } = props;
//   const spring = React.useMemo(() => ({
//     from: { opacity: 0 },
//     enter: (currentlyOpen: any) => async (next: any) => {
//       if (currentlyOpen && onEnter) {
//         onEnter();
//       }
//       console.log(currentlyOpen, 'enter');
//       await next({ opacity: 1 });
//       if (!currentlyOpen && onExited) {
//         onExited();
//       }
//       console.log(currentlyOpen, 'entered');
//     },
//     leave: (currentlyOpen: any) => async (next: any, cancel) => {
//       console.log(currentlyOpen, 'leaving');
//       await next({ opacity: 0 });
//       if (currentlyOpen && onExited) {
//         // onExited();
//       }
//       console.log(currentlyOpen, 'left');
//     },
//   }), [onEnter, onExited]);
//   const transitions = useTransition(open, null, spring);
//   return transitions.map(({ item, key, props }) => (
//     item && (
//     <animated.div key={key} style={props}>
//       {children}
//     </animated.div>
//     )
//   ));
// });
const Fade = react_1.default.forwardRef((props, ref) => {
    const { in: open, children, onEnter, onExited } = props, other = __rest(props, ["in", "children", "onEnter", "onExited"]);
    const style = web_cjs_1.useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });
    return (react_1.default.createElement(web_cjs_1.animated.div, Object.assign({ ref: ref, style: style }, other), children));
});
const SpringModal = mobx_react_1.observer(({ GlobalOpenStatus, ChangeGlobalOpenStatus, }) => {
    var _a;
    const TestsStore = react_1.default.useContext(testStore_1.testStoreContext);
    const CurrenciesStore = react_1.default.useContext(currenciesStore_1.currenciesContext);
    let listCoinsRef = react_1.default.useRef(null);
    let trackedCoinsRef = react_1.default.useRef(null);
    const classes = useStyles();
    const [open, setOpen] = react_1.default.useState(GlobalOpenStatus);
    // const [selectedCoin, setSelectedCoin] = React.useState<string>('');
    const [listCoinsName, setListCoinsName] = react_1.default.useState([]);
    console.log('отрисовка modal.tsx');
    // React.useEffect(() => {
    //   let requestOptions = {
    //     method: 'GET',
    //     // redirect: 'follow',
    //   };
    //   fetch('https://api.coincap.io/v2/assets/bitcoin/history?interval=d1&start=1385841600000&end=1612270394604', requestOptions)
    //     .then((response) => response.text())
    //     .then((result) => console.log(result))
    //     .catch((error) => console.log('error', error));
    // }, []);
    react_1.default.useEffect(() => {
        // переделать условие инициализации!!!!
        console.log('в эффекте, где стейтим список коинов');
        if (TestsStore.getListWithoutSelectedCoins.length === 0
            && TestsStore.getListCoins.length > 0) {
            console.log('стейтим массив с именами коинов');
            setListCoinsName(TestsStore.getListCoins);
        }
        else if (TestsStore.getListWithoutSelectedCoins.length > 0
            && TestsStore.getListCoins.length > 0) {
            console.log('стейтим массив без выбранных коинов');
            setListCoinsName(TestsStore.getListWithoutSelectedCoins);
        }
    }, [TestsStore.getListCoins, TestsStore.getListWithoutSelectedCoins]);
    const handleClose = () => {
        // setOpen(false);
        // TestsStore.setTrackedCoins(trackedCoinsRef?.current || []);
        CurrenciesStore.setTrackedCoins((trackedCoinsRef === null || trackedCoinsRef === void 0 ? void 0 : trackedCoinsRef.current) || []);
        TestsStore.setListWithoutSelectedCoins((listCoinsRef === null || listCoinsRef === void 0 ? void 0 : listCoinsRef.current) || []);
        console.log('ref is', listCoinsRef, trackedCoinsRef);
        if (ChangeGlobalOpenStatus) {
            ChangeGlobalOpenStatus();
        }
        else {
            setOpen(false);
        }
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Modal_1.default, { "aria-labelledby": "spring-modal-title", "aria-describedby": "spring-modal-description", className: classes.modal, open: open, onClose: handleClose, closeAfterTransition: true, BackdropComponent: Backdrop_1.default, BackdropProps: {
                timeout: 500,
            } },
            react_1.default.createElement(Fade, { in: open },
                react_1.default.createElement("div", { className: classes.root },
                    react_1.default.createElement(Typography_1.default, { variant: "h5", gutterBottom: true }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043C\u043E\u043D\u0435\u0442\u044B \u0434\u043B\u044F \u043E\u0442\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"),
                    react_1.default.createElement("div", { className: classes.currencyInputBox },
                        react_1.default.createElement(FormControl_1.default, { className: classes.currencyType },
                            react_1.default.createElement(InputLabel_1.default, { shrink: true, id: "demo-simple-select-helper-label" }, "\u041A\u0440\u0438\u043F\u0442\u043E\u0432\u0430\u043B\u044E\u0442\u0430"),
                            react_1.default.createElement(Select_1.default, { labelId: "demo-simple-select-helper-label", 
                                // value={selectedCoin || ''}
                                disabled: listCoinsName.length === 0, onChange: (e) => {
                                    var _a;
                                    // console.log(e.target);
                                    if ((_a = e.target) === null || _a === void 0 ? void 0 : _a.value) {
                                        // здесь добавляем из селекта новую, отслеживаемую монету
                                        let buffTracked = [...TestsStore.getTrackedCoins];
                                        buffTracked.push(e.target.value);
                                        TestsStore.setTrackedCoins(buffTracked);
                                        trackedCoinsRef.current = buffTracked;
                                        // setSelectedCoin(e.target?.value);
                                        // здесь убираем элемент из отображения списка выбора селекта
                                        let buff = [...listCoinsName];
                                        // eslint-disable-next-line max-len
                                        buff.splice(listCoinsName.findIndex((coin) => coin.name === e.target.value), 1);
                                        setListCoinsName(buff);
                                        listCoinsRef.current = buff;
                                        // TestsStore.setListWithoutSelectedCoins(buff);
                                    }
                                } }, listCoinsName === null || listCoinsName === void 0 ? void 0 : listCoinsName.map((coin, index) => (react_1.default.createElement(MenuItem_1.default, { value: coin.name, key: `coin_${index}` }, coin.fullName)))))),
                    react_1.default.createElement("div", null, (_a = TestsStore.getTrackedCoins) === null || _a === void 0 ? void 0 : _a.map((item) => (react_1.default.createElement(Chip_1.default, { key: item, className: classes.chip, icon: react_1.default.createElement(MonetizationOn_1.default, null), label: item, onDelete: () => {
                            var _a, _b;
                            // eslint-disable-next-line max-len
                            const indexDeletedChips = (_a = TestsStore.getTrackedCoins) === null || _a === void 0 ? void 0 : _a.findIndex((coin) => coin === item);
                            let buff = [...TestsStore.getTrackedCoins];
                            buff.splice(indexDeletedChips, 1);
                            // setTrackedCoins(buff);
                            TestsStore.setTrackedCoins(buff);
                            // CurrenciesStore.setTrackedCoins(buff);
                            trackedCoinsRef.current = buff;
                            let buffListCoins = [...listCoinsName];
                            let nameDelCoin = (_b = TestsStore.getListCoins) === null || _b === void 0 ? void 0 : _b.reduce((initVal, coin) => {
                                if (coin.name === item) {
                                    initVal.name = coin.name;
                                    initVal.fullName = coin.fullName;
                                }
                                return initVal;
                            }, {});
                            buffListCoins.unshift(nameDelCoin);
                            listCoinsRef.current = buffListCoins;
                            setListCoinsName(buffListCoins);
                            // TestsStore.setListWithoutSelectedCoins(buffListCoins);
                        } })))),
                    react_1.default.createElement("div", { className: classes.buttonBlock },
                        react_1.default.createElement(Button_1.default, { variant: "contained", color: "primary", size: "small", disabled: TestsStore.getTrackedCoins.length === 0, className: classes.button, startIcon: react_1.default.createElement(Save_1.default, null), onClick: handleClose }, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")))))));
});
exports.default = SpringModal;


/***/ }),

/***/ "./components/Stores/convertorStore.ts":
/*!*********************************************!*\
  !*** ./components/Stores/convertorStore.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertorContext = exports.convertorStore = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const mobx_1 = __webpack_require__(/*! mobx */ "../node_modules/mobx/lib/mobx.module.js");
class ConvertorStore {
    constructor() {
        this.selectedCoin = {
            name: '',
            price: 0,
        };
        this.setItems = (coin) => {
            this.selectedCoin = {
                name: coin.name,
                price: coin.price,
            };
        };
    }
    get getSelectedCoin() {
        return this.selectedCoin;
    }
}
__decorate([
    mobx_1.observable
], ConvertorStore.prototype, "selectedCoin", void 0);
__decorate([
    mobx_1.computed
], ConvertorStore.prototype, "getSelectedCoin", null);
__decorate([
    mobx_1.action
], ConvertorStore.prototype, "setItems", void 0);
const convertorStore = new ConvertorStore();
exports.convertorStore = convertorStore;
const convertorContext = react_1.default.createContext(convertorStore);
exports.convertorContext = convertorContext;


/***/ }),

/***/ "./components/Stores/currenciesCBStore.ts":
/*!************************************************!*\
  !*** ./components/Stores/currenciesCBStore.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currenciesCBContext = exports.currenciesCBStore = void 0;
/* eslint-disable no-return-await */
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "../node_modules/axios/index.js"));
const mobx_1 = __webpack_require__(/*! mobx */ "../node_modules/mobx/lib/mobx.module.js");
class CurrenciesCBStore {
    constructor() {
        this.items = [];
        this.setCoins = (coins) => {
            this.items = coins;
        };
        this.fetchCoins = () => {
            axios_1.default
                .get('https://www.cbr-xml-daily.ru/daily_json.js')
                .then(({ data }) => {
                console.log('data cb', data.Valute, Object.values(data.Valute));
                let buff = Object.values(data.Valute);
                buff.push({
                    CharCode: 'RUB',
                    ID: 'R01060',
                    Name: 'Российский рубль',
                    Nominal: 1,
                    NumCode: '001',
                    Previous: 1,
                    Value: 1,
                });
                this.setCoins(buff);
            });
        };
    }
    get getItems() {
        return this.items;
    }
}
__decorate([
    mobx_1.observable
], CurrenciesCBStore.prototype, "items", void 0);
__decorate([
    mobx_1.computed
], CurrenciesCBStore.prototype, "getItems", null);
__decorate([
    mobx_1.action
], CurrenciesCBStore.prototype, "setCoins", void 0);
__decorate([
    mobx_1.action
], CurrenciesCBStore.prototype, "fetchCoins", void 0);
const currenciesCBStore = new CurrenciesCBStore();
exports.currenciesCBStore = currenciesCBStore;
const currenciesCBContext = react_1.default.createContext(currenciesCBStore);
exports.currenciesCBContext = currenciesCBContext;


/***/ }),

/***/ "./components/Stores/currenciesStore.ts":
/*!**********************************************!*\
  !*** ./components/Stores/currenciesStore.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.currenciesContext = exports.currenciesStore = void 0;
/* eslint-disable no-return-await */
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "../node_modules/axios/index.js"));
const react_id_generator_1 = __importDefault(__webpack_require__(/*! react-id-generator */ "../node_modules/react-id-generator/lib/index.js"));
const mobx_1 = __webpack_require__(/*! mobx */ "../node_modules/mobx/lib/mobx.module.js");
const WebSocketServices_1 = __webpack_require__(/*! ../WebSocketServices/WebSocketServices */ "./components/WebSocketServices/WebSocketServices.ts");
const imagesCoin = [
    {
        name: 'BTC',
        url: 'https://www.cryptocompare.com//media/19633/btc.png',
    },
    {
        name: 'ETH',
        url: 'https://www.cryptocompare.com//media/20646/eth_logo.png',
    },
    {
        name: 'DOT',
        url: 'https://www.cryptocompare.com//media/37072130/dot.png',
    },
    {
        name: 'LTC',
        url: 'https://www.cryptocompare.com//media/35309662/ltc.png',
    },
    {
        name: 'BCH',
        url: 'https://www.cryptocompare.com//media/35650680/bch.png',
    },
    {
        name: 'LINK',
        url: 'https://www.cryptocompare.com//media/35309382/link.png',
    },
    {
        name: 'XRP',
        url: 'https://www.cryptocompare.com//media/34477776/xrp.png',
    },
    {
        name: 'ADA',
        url: 'https://www.cryptocompare.com//media/12318177/ada.png',
    },
    {
        name: 'EOS',
        url: 'https://www.cryptocompare.com//media/1383652/eos_1.png',
    },
    {
        name: 'TRX',
        url: 'https://www.cryptocompare.com//media/34477805/trx.jpg',
    },
    {
        name: 'ETC',
        url: 'https://www.cryptocompare.com//media/33752295/etc_new.png',
    },
    {
        name: 'USDT',
        url: 'https://www.cryptocompare.com//media/1383672/usdt.png',
    },
    {
        name: 'ZEC',
        url: 'https://www.cryptocompare.com//media/351360/zec.png',
    },
    {
        name: 'UNI',
        url: 'https://www.cryptocompare.com//media/36935118/uniswap.png',
    },
];
class CurrenciesStore {
    constructor() {
        this.items = [];
        this.selectedCoin = null;
        this.nameCoins = 'BTC,ETH,ETC,LTC,DOT,BCH,UNI,XRP,TRX,USDT';
        this.trackedCoins = [];
        this.getFlagsColor = (flag) => {
            let flagColor = 'none';
            if (flag === 1) {
                flagColor = 'green';
            }
            else if (flag === 2) {
                flagColor = 'red';
            }
            return flagColor;
        };
        this.setCoins = (coins) => {
            this.items = coins;
        };
        this.updateCoins = (updatedCoins) => {
            var _a;
            console.log('updateCoins after ws', updatedCoins);
            let buff = [...this.items || []];
            // // console.log('buff is', buff);
            const posAddedCoin = buff === null || buff === void 0 ? void 0 : buff.findIndex((coin) => coin.name === updatedCoins.FROMSYMBOL);
            // // console.log(posAddedCoin);
            if (posAddedCoin !== -1) {
                let buffCoin = Object.assign(Object.assign({}, (buff && buff[posAddedCoin])), { price: updatedCoins.PRICE || buff[posAddedCoin].price, flags: this.getFlagsColor(updatedCoins.FLAGS), id: (buff && buff[posAddedCoin].id) || '', name: (buff && buff[posAddedCoin].name) || '', fullName: (buff && buff[posAddedCoin].fullName) || '', volume24Hour: updatedCoins.VOLUME24HOUR, imageUrl: (buff && buff[posAddedCoin].imageUrl) || '' });
                // console.log('изменяемая монета', buffCoin);
                buff[posAddedCoin] = buffCoin;
            }
            else {
                let buffCoin = {
                    id: react_id_generator_1.default(),
                    name: updatedCoins.FROMSYMBOL || '',
                    fullName: updatedCoins.LASTMARKET,
                    imageUrl: ((_a = imagesCoin.find((coin) => (coin.name === updatedCoins.FROMSYMBOL))) === null || _a === void 0 ? void 0 : _a.url) || '',
                    price: updatedCoins.PRICE || '',
                    volume24Hour: updatedCoins.VOLUME24HOUR || '',
                    flags: this.getFlagsColor(updatedCoins.FLAGS),
                };
                // console.log('добавленная монета', buffCoin);
                buff === null || buff === void 0 ? void 0 : buff.push(buffCoin);
            }
            this.setCoins(buff);
            // console.log(buff, 'массив после изменений');
        };
        this.hideColors = () => {
            var _a;
            console.log('items', this.items);
            let buff = (_a = [...this.items || []]) === null || _a === void 0 ? void 0 : _a.map((coin) => (Object.assign(Object.assign({}, coin), { price: coin.price, flags: '4', id: coin.id, name: coin.name, fullName: coin.fullName, volume24Hour: coin.volume24Hour, imageUrl: coin.imageUrl })));
            console.log(buff, 'items after change flags');
            this.setCoins(buff);
        };
        this.fetchCoins = () => {
            // https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD
            console.log(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.nameCoins}&tsyms=USD`, `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.trackedCoins.join()}&tsyms=USD`);
            axios_1.default
                .get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${this.trackedCoins.join()}&tsyms=USD`)
                .then(({ data }) => {
                var _a;
                // console.log('data', Object.values(data.RAW));
                const coins = (_a = Object.values(data.RAW)) === null || _a === void 0 ? void 0 : _a.map((coin) => {
                    const obj = {
                        id: coin.USD.FROMSYMBOL,
                        name: coin.USD.FROMSYMBOL,
                        fullName: coin.USD.LASTMARKET,
                        imageUrl: `https://www.cryptocompare.com/${coin.USD.IMAGEURL}`,
                        price: coin.USD.PRICE.toFixed(3),
                        volume24Hour: parseInt(coin.USD.VOLUME24HOURTO, 10),
                        flags: '4',
                    };
                    return obj;
                });
                this.setCoins(coins);
                this.selectedCoin = { name: coins[0].name, price: coins[0].price };
            });
        };
        this.fetchCoinsAsync = () => __awaiter(this, void 0, void 0, function* () {
            // const response = await fetch('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD', {
            //   method: 'get',
            // });
            const data = yield Promise.resolve(this.getDataCoins());
            console.log('data', data);
            mobx_1.runInAction(() => {
                var _a;
                const coins = (_a = data === null || data === void 0 ? void 0 : data.Data) === null || _a === void 0 ? void 0 : _a.map((coin) => {
                    const obj = {
                        id: coin.CoinInfo.Id,
                        name: coin.CoinInfo.Name,
                        fullName: coin.CoinInfo.FullName,
                        imageUrl: `https://cryptocompare.com/${coin.CoinInfo.ImageUrl}`,
                        price: coin.RAW.USD.PRICE,
                        volume24Hour: coin.RAW.USD.VOLUME24HOUR,
                        flags: '4',
                    };
                    return obj;
                });
                // this.items = coins;
                this.setCoins(coins);
            });
        });
        this.startMessageListening = () => {
            WebSocketServices_1.WSApi.start();
            // WSApi.subscribe(this.nameCoins);
        };
        this.stopMessageListening = () => {
            WebSocketServices_1.WSApi.unsubscribe();
        };
    }
    // eslint-disable-next-line class-methods-use-this
    getDataCoins() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD';
            const response = yield fetch(url, { method: 'get' });
            return yield response.json();
        });
    }
    get getItems() {
        return this.items;
    }
    get getSelectedCoin() {
        return this.selectedCoin;
    }
    get getTrackedCoins() {
        return this.trackedCoins;
    }
    setTrackedCoins(coins) {
        this.trackedCoins = coins;
    }
}
__decorate([
    mobx_1.observable
], CurrenciesStore.prototype, "items", void 0);
__decorate([
    mobx_1.observable
], CurrenciesStore.prototype, "selectedCoin", void 0);
__decorate([
    mobx_1.observable
], CurrenciesStore.prototype, "trackedCoins", void 0);
__decorate([
    mobx_1.computed
], CurrenciesStore.prototype, "getItems", null);
__decorate([
    mobx_1.computed
], CurrenciesStore.prototype, "getSelectedCoin", null);
__decorate([
    mobx_1.computed
], CurrenciesStore.prototype, "getTrackedCoins", null);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "setTrackedCoins", null);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "setCoins", void 0);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "updateCoins", void 0);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "hideColors", void 0);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "fetchCoins", void 0);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "fetchCoinsAsync", void 0);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "startMessageListening", void 0);
__decorate([
    mobx_1.action
], CurrenciesStore.prototype, "stopMessageListening", void 0);
const currenciesStore = new CurrenciesStore();
exports.currenciesStore = currenciesStore;
const currenciesContext = react_1.default.createContext(currenciesStore);
exports.currenciesContext = currenciesContext;
// export const currenciesContext = React.createContext(new CurrenciesStore());
// export const currenciesStore = new CurrenciesStore();


/***/ }),

/***/ "./components/Stores/testStore.ts":
/*!****************************************!*\
  !*** ./components/Stores/testStore.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testStoreContext = exports.TESTSTORE = void 0;
const mobx_1 = __webpack_require__(/*! mobx */ "../node_modules/mobx/lib/mobx.module.js");
const react_1 = __webpack_require__(/*! react */ "../node_modules/react/index.js");
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "../node_modules/axios/index.js"));
class TestStore {
    constructor() {
        // @observable private nameCoins: string = 'BTC,ETH,ETC,LTC,DOT,BCH,UNI,XRP,TRX,USDT';
        this.isTracked = false;
        this.trackedCoins = [];
        this.listCoins = [];
        this.listWithoutSelectedCoins = [];
    }
    get getIsTracked() {
        return this.isTracked;
    }
    get getTrackedCoins() {
        return this.trackedCoins;
    }
    get getListCoins() {
        return this.listCoins;
    }
    get getListWithoutSelectedCoins() {
        return this.listWithoutSelectedCoins;
    }
    setIsTracked(trackedStatus) {
        this.isTracked = trackedStatus;
    }
    setTrackedCoins(coins) {
        this.trackedCoins = coins;
    }
    setListWithoutSelectedCoins(arrayCoins) {
        this.listWithoutSelectedCoins = arrayCoins;
    }
    fetchNameCoins() {
        // отправить запрос https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD,
        // записать название всех монет в массив nameCoins
        axios_1.default
            .get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD')
            .then(({ data }) => {
            var _a;
            // console.log('data', Object.values(data.RAW));
            const coins = (_a = data.Data) === null || _a === void 0 ? void 0 : _a.map((coin) => ({
                name: coin.CoinInfo.Name,
                fullName: coin.CoinInfo.FullName,
            }));
            this.listCoins = coins;
        });
    }
}
__decorate([
    mobx_1.observable
], TestStore.prototype, "isTracked", void 0);
__decorate([
    mobx_1.observable
], TestStore.prototype, "trackedCoins", void 0);
__decorate([
    mobx_1.observable
], TestStore.prototype, "listCoins", void 0);
__decorate([
    mobx_1.observable
], TestStore.prototype, "listWithoutSelectedCoins", void 0);
__decorate([
    mobx_1.computed
], TestStore.prototype, "getIsTracked", null);
__decorate([
    mobx_1.computed
], TestStore.prototype, "getTrackedCoins", null);
__decorate([
    mobx_1.computed
], TestStore.prototype, "getListCoins", null);
__decorate([
    mobx_1.computed
], TestStore.prototype, "getListWithoutSelectedCoins", null);
__decorate([
    mobx_1.action
], TestStore.prototype, "setIsTracked", null);
__decorate([
    mobx_1.action
], TestStore.prototype, "setTrackedCoins", null);
__decorate([
    mobx_1.action
], TestStore.prototype, "setListWithoutSelectedCoins", null);
__decorate([
    mobx_1.action
], TestStore.prototype, "fetchNameCoins", null);
const TESTSTORE = new TestStore();
exports.TESTSTORE = TESTSTORE;
const testStoreContext = react_1.createContext(TESTSTORE);
exports.testStoreContext = testStoreContext;


/***/ }),

/***/ "./components/SubcribeBlock/SubcribeBlock.tsx":
/*!****************************************************!*\
  !*** ./components/SubcribeBlock/SubcribeBlock.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const mobx_react_1 = __webpack_require__(/*! mobx-react */ "../node_modules/mobx-react/dist/mobxreact.esm.js");
const Button_1 = __importDefault(__webpack_require__(/*! @material-ui/core/Button */ "../node_modules/@material-ui/core/esm/Button/index.js"));
const currenciesStore_1 = __webpack_require__(/*! ../Stores/currenciesStore */ "./components/Stores/currenciesStore.ts");
// import { testStoreContext } from '../Stores/testStore';
const Modal_1 = __importDefault(__webpack_require__(/*! ../Modal/Modal */ "./components/Modal/Modal.tsx"));
const SubscribeBlock = mobx_react_1.observer(({ classes }) => {
    const [isSubs, setIsSubs] = react_1.default.useState(false);
    const [open, setOpen] = react_1.default.useState(false);
    // const TestsStore = React.useContext(testStoreContext);
    const currenciesStore = react_1.default.useContext(currenciesStore_1.currenciesContext);
    return (react_1.default.createElement("div", { className: classes.subscribeBlock },
        react_1.default.createElement(Button_1.default, { variant: "contained", color: isSubs ? 'default' : 'primary', onClick: () => {
                setIsSubs(false);
                currenciesStore === null || currenciesStore === void 0 ? void 0 : currenciesStore.stopMessageListening();
                // console.log(TestsStore.getSelectedCoin, 'dont track ws');
            } }, "\u041D\u0435 \u043E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),
        react_1.default.createElement(Button_1.default, { className: classes.trackChangeButton, variant: "contained", color: isSubs ? 'primary' : 'default', onClick: () => {
                setIsSubs(true);
                currenciesStore === null || currenciesStore === void 0 ? void 0 : currenciesStore.startMessageListening();
                // console.log(TestsStore.getSelectedCoin, 'отслеживаем ws');
            } }, "\u041E\u0442\u0441\u043B\u0435\u0436\u0438\u0432\u0430\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F"),
        react_1.default.createElement(Button_1.default, { className: classes.trackChangeButton, variant: "outlined", color: "primary", onClick: () => {
                setIsSubs(false);
                currenciesStore === null || currenciesStore === void 0 ? void 0 : currenciesStore.stopMessageListening();
                setOpen(true);
                // console.log(TestsStore.getSelectedCoin, 'отслеживаем ws');
            } }, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043C\u043E\u043D\u0435\u0442\u044B"),
        open && (react_1.default.createElement(Modal_1.default, { GlobalOpenStatus: open, ChangeGlobalOpenStatus: () => {
                setOpen(!open);
            } }))));
});
exports.default = SubscribeBlock;


/***/ }),

/***/ "./components/WebSocketServices/WebSocketServices.ts":
/*!***********************************************************!*\
  !*** ./components/WebSocketServices/WebSocketServices.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WSApi = void 0;
const testStore_1 = __webpack_require__(/*! ../Stores/testStore */ "./components/Stores/testStore.ts");
const currenciesStore_1 = __webpack_require__(/*! ../Stores/currenciesStore */ "./components/Stores/currenciesStore.ts");
console.log('In ws stores', testStore_1.TESTSTORE, currenciesStore_1.currenciesStore);
let ws = null;
let status = 'close';
let apiKey = '08def8b83364db6da0c88e687a95930db8c0983d24786493f3845ceebe599d4f';
// const nameCCoins: Array<string> = TESTSTORE.getNameCoins.split(',');
let trackedCoins = [];
const closeHandler = () => {
    console.log('Close ws');
    // eslint-disable-next-line no-use-before-define
    // setTimeout(createChannel, 10000);
};
const openHandler = () => {
    // console.log('WS connected', ws);
    status = 'open';
    const sub = {
        action: 'SubAdd',
        subs: trackedCoins === null || trackedCoins === void 0 ? void 0 : trackedCoins.map((coin) => `5~CCCAGG~${coin}~USD`),
    };
    console.log('SUB add', sub);
    ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify(sub));
};
const messageHandler = (event) => {
    const response = JSON.parse(event.data);
    console.log('message ws', event);
    if (response.TYPE === '5') {
        console.log('resp type 5', response);
        currenciesStore_1.currenciesStore === null || currenciesStore_1.currenciesStore === void 0 ? void 0 : currenciesStore_1.currenciesStore.updateCoins(response);
        // TESTSTORE.setItems('sdasda');
    }
};
function createChannel() {
    ws === null || ws === void 0 ? void 0 : ws.removeEventListener('close', closeHandler);
    ws === null || ws === void 0 ? void 0 : ws.close();
    ws = new WebSocket(`wss://streamer.cryptocompare.com/v2?api_key=${apiKey}`);
    ws.addEventListener('close', closeHandler);
    ws.addEventListener('message', messageHandler);
    ws.addEventListener('open', openHandler);
    testStore_1.TESTSTORE.setIsTracked(true);
    console.log('WS created');
}
exports.WSApi = {
    start() {
        trackedCoins = testStore_1.TESTSTORE.getTrackedCoins;
        console.log('Start ws and view tracked coins', trackedCoins, testStore_1.TESTSTORE);
        if (status === 'close') {
            createChannel();
        }
    },
    unsubscribe() {
        if (status === 'open') {
            const subRemove = {
                action: 'SubRemove',
                subs: trackedCoins === null || trackedCoins === void 0 ? void 0 : trackedCoins.map((coin) => `5~CCCAGG~${coin}~USD`),
            };
            console.log('UNSUB', subRemove);
            ws === null || ws === void 0 ? void 0 : ws.send(JSON.stringify(subRemove));
            ws === null || ws === void 0 ? void 0 : ws.removeEventListener('message', messageHandler);
            ws === null || ws === void 0 ? void 0 : ws.removeEventListener('open', openHandler);
            ws === null || ws === void 0 ? void 0 : ws.close();
            status = 'close';
            currenciesStore_1.currenciesStore === null || currenciesStore_1.currenciesStore === void 0 ? void 0 : currenciesStore_1.currenciesStore.hideColors();
            testStore_1.TESTSTORE.setIsTracked(true);
        }
        console.log('откл не подключенную подписку');
    },
};


/***/ }),

/***/ "./components/index.ts":
/*!*****************************!*\
  !*** ./components/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CryptoTable_1 = __webpack_require__(/*! ./CryptoTable/CryptoTable */ "./components/CryptoTable/CryptoTable.tsx");
Object.defineProperty(exports, "CryptoTable", { enumerable: true, get: function () { return CryptoTable_1.default; } });
var ConvertorBlock_1 = __webpack_require__(/*! ./ConverterBlock/ConvertorBlock */ "./components/ConverterBlock/ConvertorBlock.tsx");
Object.defineProperty(exports, "ConverterBlock", { enumerable: true, get: function () { return ConvertorBlock_1.default; } });


/***/ }),

/***/ "./index.tsx":
/*!*******************!*\
  !*** ./index.tsx ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable react/jsx-props-no-spreading */
const React = __importStar(__webpack_require__(/*! react */ "../node_modules/react/index.js"));
const ReactDOM = __importStar(__webpack_require__(/*! react-dom */ "../node_modules/react-dom/index.js"));
const App_1 = __webpack_require__(/*! ./components/App */ "./components/App.tsx");
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App_1.App, null)), document.getElementById('example'));


/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi @babel/polyfill ./index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./index.tsx */"./index.tsx");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map