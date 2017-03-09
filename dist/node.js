module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseError = (function () {
    function BaseError(message) {
        this.message = message;
        this.stack = (new Error()).stack;
    }
    return BaseError;
}());
exports.BaseError = BaseError;
var ModelProxyValidaterError = (function (_super) {
    __extends(ModelProxyValidaterError, _super);
    function ModelProxyValidaterError(message, error, missing) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.ValidaterError";
        _this.error = error;
        _this.missing = missing;
        return _this;
    }
    return ModelProxyValidaterError;
}(BaseError));
exports.ModelProxyValidaterError = ModelProxyValidaterError;
var ModelProxyMissingError = (function (_super) {
    __extends(ModelProxyMissingError, _super);
    function ModelProxyMissingError(message) {
        var _this = _super.call(this, message) || this;
        _this.name = "ModelProxy.MissingError";
        return _this;
    }
    return ModelProxyMissingError;
}(BaseError));
exports.ModelProxyMissingError = ModelProxyMissingError;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvZXJyb3JzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRUE7SUFLSSxtQkFBWSxPQUFnQjtRQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUV2QixJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNyQyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBVkQsSUFVQztBQVZZLDhCQUFTO0FBZXRCO0lBQThDLDRDQUFTO0lBSW5ELGtDQUFZLE9BQWUsRUFBRSxLQUF1RCxFQUFFLE9BQW9CO1FBQTFHLFlBQ0ksa0JBQU0sT0FBTyxDQUFDLFNBS2pCO1FBSEcsS0FBSSxDQUFDLElBQUksR0FBRywyQkFBMkIsQ0FBQztRQUN4QyxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQzs7SUFDM0IsQ0FBQztJQUNMLCtCQUFDO0FBQUQsQ0FBQyxBQVhELENBQThDLFNBQVMsR0FXdEQ7QUFYWSw0REFBd0I7QUFnQnJDO0lBQTRDLDBDQUFTO0lBQ2pELGdDQUFZLE9BQWU7UUFBM0IsWUFDSSxrQkFBTSxPQUFPLENBQUMsU0FHakI7UUFERyxLQUFJLENBQUMsSUFBSSxHQUFHLHlCQUF5QixDQUFDOztJQUMxQyxDQUFDO0lBQ0wsNkJBQUM7QUFBRCxDQUFDLEFBTkQsQ0FBNEMsU0FBUyxHQU1wRDtBQU5ZLHdEQUFzQiJ9

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _ = __webpack_require__(9);
var errors_1 = __webpack_require__(0);
var ModelProxy;
(function (ModelProxy) {
    var BaseFactory = (function () {
        function BaseFactory() {
            this.instances = {};
        }
        BaseFactory.prototype.add = function (name, intance, override) {
            if (override === void 0) { override = false; }
            if (override && this.instances.hasOwnProperty(name)) {
                return console.error("\u5DF2\u7ECF\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01");
            }
            this.instances[name] = intance;
        };
        BaseFactory.prototype.get = function (name) {
            if (this.instances.hasOwnProperty(name)) {
                return this.instances[name];
            }
            return null;
        };
        BaseFactory.prototype.use = function (name) {
            if (!name || !this.instances.hasOwnProperty(name)) {
                var engines = _.map(this.instances, function (val, key) {
                    return key;
                });
                throw new errors_1.ModelProxyMissingError("\u4E0D\u5B58\u5728name=\u3010" + name + "\u3011\u7684engine\uFF01\u5F53\u524Dengines\uFF1A\u3010" + engines.join(',') + "\u3011");
            }
            return this.instances[name];
        };
        return BaseFactory;
    }());
    ModelProxy.BaseFactory = BaseFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5mYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2xpYnMvYmFzZS5mYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwwQkFBNEI7QUFDNUIsbUNBQWtEO0FBRWxELElBQWlCLFVBQVUsQ0FpRDFCO0FBakRELFdBQWlCLFVBQVU7SUFJdkI7UUFHSTtZQUZVLGNBQVMsR0FBeUIsRUFBRSxDQUFDO1FBRS9CLENBQUM7UUFRakIseUJBQUcsR0FBSCxVQUFJLElBQVksRUFBRSxPQUFVLEVBQUUsUUFBeUI7WUFBekIseUJBQUEsRUFBQSxnQkFBeUI7WUFDbkQsRUFBRSxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbEQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsd0NBQWEsSUFBSSw2QkFBVyxDQUFDLENBQUM7WUFDdkQsQ0FBQztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ25DLENBQUM7UUFNRCx5QkFBRyxHQUFILFVBQUksSUFBWTtZQUNaLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUVELE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQU1ELHlCQUFHLEdBQUgsVUFBSSxJQUFZO1lBQ1osRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hELElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO29CQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDO2dCQUNmLENBQUMsQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSwrQkFBc0IsQ0FBQyxrQ0FBWSxJQUFJLCtEQUF1QixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFHLENBQUMsQ0FBQztZQUNsRyxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNMLGtCQUFDO0lBQUQsQ0FBQyxBQTVDRCxJQTRDQztJQTVDWSxzQkFBVyxjQTRDdkIsQ0FBQTtBQUNMLENBQUMsRUFqRGdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBaUQxQiJ9

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _ = __webpack_require__(9);
var ModelProxy;
(function (ModelProxy) {
    var Compose = (function () {
        function Compose() {
            this.middlewares = [];
        }
        Compose.prototype.use = function (func) {
            if (!_.isFunction(func)) {
                throw new TypeError("middleware must be a function！");
            }
            this.middlewares.push(func);
        };
        Compose.prototype.clear = function () {
            this.middlewares.length = 0;
        };
        Compose.prototype.compose = function () {
            var _this = this;
            if (!Array.isArray(this.middlewares))
                throw new TypeError("Middleware stack must be an array!");
            for (var _i = 0, _a = this.middlewares; _i < _a.length; _i++) {
                var fn = _a[_i];
                if (typeof fn !== "function")
                    throw new TypeError("Middleware must be composed of functions!");
            }
            return function (context, next) {
                return new Promise(function (resolve, reject) {
                    var index = -1;
                    var dispatch = function (i) {
                        return new Promise(function (resolve1) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            var fn, err_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        fn = this.middlewares[i];
                                        if (i <= index) {
                                            return [2 /*return*/, reject(new Error("next() called multiple times" + i + "-" + index))];
                                        }
                                        index = i;
                                        if (i === this.middlewares.length)
                                            fn = next;
                                        if (!fn) {
                                            return [2 /*return*/, resolve1(context)];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, fn(context, function () { return __awaiter(_this, void 0, void 0, function () {
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0: return [4 /*yield*/, dispatch(i + 1)];
                                                        case 1:
                                                            _a.sent();
                                                            resolve1();
                                                            return [2 /*return*/];
                                                    }
                                                });
                                            }); })];
                                    case 2:
                                        _a.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        err_1 = _a.sent();
                                        console.log("compose error" + err_1);
                                        reject(err_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); });
                    };
                    return dispatch(0).then(resolve.bind(context));
                });
            };
        };
        Compose.prototype.errorHandle = function (ctx, err) {
            ctx.isError = true;
            ctx.err = err;
            console.error("compose--", err);
        };
        Compose.prototype.callback = function (complete) {
            var _this = this;
            var fn = this.compose();
            return function (options) {
                var ctx = Object.assign(options || {}, {});
                var promise = fn(ctx, function (ctx, next) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, next()];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); }).then(function () {
                    complete(ctx);
                }).catch(function (err) {
                    _this.errorHandle(ctx, err);
                });
                return promise;
            };
        };
        return Compose;
    }());
    ModelProxy.Compose = Compose;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9saWJzL2NvbXBvc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMEJBQTRCO0FBSTVCLElBQWlCLFVBQVUsQ0EyRzFCO0FBM0dELFdBQWlCLFVBQVU7SUFJdkI7UUFHSTtZQUNJLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFPRCxxQkFBRyxHQUFILFVBQUksSUFBYztZQUNkLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLE1BQU0sSUFBSSxTQUFTLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUMxRCxDQUFDO1lBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUtELHVCQUFLLEdBQUw7WUFDSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQU1ELHlCQUFPLEdBQVA7WUFBQSxpQkFxQ0M7WUFwQ0csRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztnQkFBQyxNQUFNLElBQUksU0FBUyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7WUFDaEcsR0FBRyxDQUFDLENBQWEsVUFBZ0IsRUFBaEIsS0FBQSxJQUFJLENBQUMsV0FBVyxFQUFoQixjQUFnQixFQUFoQixJQUFnQjtnQkFBNUIsSUFBTSxFQUFFLFNBQUE7Z0JBQ1QsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssVUFBVSxDQUFDO29CQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsMkNBQTJDLENBQUMsQ0FBQzthQUNsRztZQUVELE1BQU0sQ0FBQyxVQUFDLE9BQVUsRUFBRSxJQUFjO2dCQUM5QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDL0IsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBRWYsSUFBTSxRQUFRLEdBQUcsVUFBQyxDQUFTO3dCQUN2QixNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBTyxRQUFROztnQ0FDMUIsRUFBRTs7Ozs2Q0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQzt3Q0FFNUIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7NENBQ2IsTUFBTSxnQkFBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsOEJBQThCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxFQUFDO3dDQUMvRSxDQUFDO3dDQUNELEtBQUssR0FBRyxDQUFDLENBQUM7d0NBQ1YsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDOzRDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7d0NBQzdDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs0Q0FDTixNQUFNLGdCQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQzt3Q0FDN0IsQ0FBQzs7Ozt3Q0FFRyxxQkFBTSxFQUFFLENBQUMsT0FBTyxFQUFFOzs7Z0VBQ2QscUJBQU0sUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBQTs7NERBQXJCLFNBQXFCLENBQUM7NERBQ3RCLFFBQVEsRUFBRSxDQUFDOzs7O2lEQUNkLENBQUMsRUFBQTs7d0NBSEYsU0FHRSxDQUFDOzs7O3dDQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxHQUFHLEtBQUcsQ0FBQyxDQUFDO3dDQUNuQyxNQUFNLENBQUMsS0FBRyxDQUFDLENBQUM7Ozs7OzZCQUVuQixDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDO29CQUVGLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUM7UUFDTixDQUFDO1FBT0QsNkJBQVcsR0FBWCxVQUFZLEdBQU0sRUFBRSxHQUFVO1lBQzFCLEdBQUcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ25CLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDcEMsQ0FBQztRQU9ELDBCQUFRLEdBQVIsVUFBUyxRQUFrQjtZQUEzQixpQkFlQztZQWRHLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUUxQixNQUFNLENBQUMsVUFBQyxPQUFZO2dCQUNoQixJQUFJLEdBQUcsR0FBTSxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFNLENBQUM7Z0JBQ25ELElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsVUFBTyxHQUFRLEVBQUUsSUFBYzs7O29DQUNqRCxxQkFBTSxJQUFJLEVBQUUsRUFBQTs7Z0NBQVosU0FBWSxDQUFDOzs7O3FCQUNoQixDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNKLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEIsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBVTtvQkFDaEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUE7Z0JBQzlCLENBQUMsQ0FBQyxDQUFDO2dCQUVILE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkIsQ0FBQyxDQUFDO1FBQ04sQ0FBQztRQUNMLGNBQUM7SUFBRCxDQUFDLEFBdEdELElBc0dDO0lBdEdZLGtCQUFPLFVBc0duQixDQUFBO0FBQ0wsQ0FBQyxFQTNHZ0IsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUEyRzFCIn0=

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var factory = __webpack_require__(1);
var engines = __webpack_require__(14);
var ModelProxy;
(function (ModelProxy) {
    ModelProxy.engineFactory = new factory.ModelProxy.BaseFactory();
    ModelProxy.engineFactory.add("default", new engines.ModelProxyEngine.DefaultEngine());
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5naW5lLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9lbmdpbmUuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0NBQTBDO0FBQzFDLDRDQUE4QztBQUU5QyxJQUFpQixVQUFVLENBSTFCO0FBSkQsV0FBaUIsVUFBVTtJQUNWLHdCQUFhLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBVyxDQUFDO0lBRTNFLFdBQUEsYUFBYSxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztBQUMvRSxDQUFDLEVBSmdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBSTFCIn0=

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _schema = "http://json-schema.org/draft-04/schema#";
var ModleProxySchema;
(function (ModleProxySchema) {
    var BaseTypeBuilder = (function () {
        function BaseTypeBuilder() {
            this.data = {};
        }
        BaseTypeBuilder.prototype.build = function (type, title, description) {
            if (type === void 0) { type = "string"; }
            this.data = Object.assign({
                title: title || "",
                description: description || "",
                type: type
            }, this.data || {});
            return this;
        };
        ;
        BaseTypeBuilder.prototype.properties = function (props) {
            this.data = Object.assign({
                properties: props,
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.items = function (items) {
            this.data = Object.assign({
                items: items,
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.schema = function (schema, id) {
            if (schema === void 0) { schema = _schema; }
            if (id === void 0) { id = _schema; }
            this.data = Object.assign({
                "$schema": schema,
                id: id
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.required = function () {
            var keys = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                keys[_i] = arguments[_i];
            }
            this.data = Object.assign({
                required: keys
            }, this.data || {});
            return this;
        };
        BaseTypeBuilder.prototype.toValue = function () {
            return this.data;
        };
        return BaseTypeBuilder;
    }());
    ModleProxySchema.BaseTypeBuilder = BaseTypeBuilder;
    var JsonSchemaBuilder = (function (_super) {
        __extends(JsonSchemaBuilder, _super);
        function JsonSchemaBuilder() {
            return _super.call(this) || this;
        }
        JsonSchemaBuilder.init = function () {
            return new JsonSchemaBuilder();
        };
        return JsonSchemaBuilder;
    }(BaseTypeBuilder));
    ModleProxySchema.JsonSchemaBuilder = JsonSchemaBuilder;
})(ModleProxySchema = exports.ModleProxySchema || (exports.ModleProxySchema = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2J1aWxkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFnQkEsSUFBTSxPQUFPLEdBQVcseUNBQXlDLENBQUM7QUFFbEUsSUFBaUIsZ0JBQWdCLENBK0RoQztBQS9ERCxXQUFpQixnQkFBZ0I7SUFDN0I7UUFHSTtZQUFnQixJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUFDLENBQUM7UUFFakMsK0JBQUssR0FBTCxVQUFNLElBQXVCLEVBQUUsS0FBYyxFQUFFLFdBQW9CO1lBQTdELHFCQUFBLEVBQUEsZUFBdUI7WUFDekIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixLQUFLLEVBQUUsS0FBSyxJQUFJLEVBQUU7Z0JBQ2xCLFdBQVcsRUFBRSxXQUFXLElBQUksRUFBRTtnQkFDOUIsSUFBSSxFQUFFLElBQUk7YUFDYixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQUEsQ0FBQztRQUVGLG9DQUFVLEdBQVYsVUFBVyxLQUF5QztZQUNoRCxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7Z0JBQ3RCLFVBQVUsRUFBRSxLQUFLO2FBQ3BCLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCwrQkFBSyxHQUFMLFVBQU0sS0FBd0M7WUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixLQUFLLEVBQUUsS0FBSzthQUNmLEVBQUUsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQztZQUVwQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDRCxnQ0FBTSxHQUFOLFVBQU8sTUFBd0IsRUFBRSxFQUFvQjtZQUE5Qyx1QkFBQSxFQUFBLGdCQUF3QjtZQUFFLG1CQUFBLEVBQUEsWUFBb0I7WUFDakQsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixTQUFTLEVBQUUsTUFBTTtnQkFDakIsRUFBRSxFQUFFLEVBQUU7YUFDVCxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsa0NBQVEsR0FBUjtZQUFTLGNBQWlCO2lCQUFqQixVQUFpQixFQUFqQixxQkFBaUIsRUFBakIsSUFBaUI7Z0JBQWpCLHlCQUFpQjs7WUFDdEIsSUFBSSxDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDO2dCQUN0QixRQUFRLEVBQUUsSUFBSTthQUNqQixFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7WUFFcEIsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBRUQsaUNBQU8sR0FBUDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7UUFDTCxzQkFBQztJQUFELENBQUMsQUFsREQsSUFrREM7SUFsRHFCLGdDQUFlLGtCQWtEcEMsQ0FBQTtJQUdEO1FBQXVDLHFDQUFlO1FBQ2xEO21CQUNJLGlCQUFPO1FBQ1gsQ0FBQztRQUVNLHNCQUFJLEdBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQ25DLENBQUM7UUFDTCx3QkFBQztJQUFELENBQUMsQUFSRCxDQUF1QyxlQUFlLEdBUXJEO0lBUlksa0NBQWlCLG9CQVE3QixDQUFBO0FBQ0wsQ0FBQyxFQS9EZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUErRGhDIn0=

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var tv4 = __webpack_require__(8);
var compose_1 = __webpack_require__(2);
var errors_1 = __webpack_require__(0);
var ModelProxyEngine;
(function (ModelProxyEngine) {
    var BaseEngine = (function (_super) {
        __extends(BaseEngine, _super);
        function BaseEngine() {
            return _super.call(this) || this;
        }
        BaseEngine.prototype.validateTv4 = function (obj, schema) {
            var valid = tv4.validateMultiple(obj, schema);
            if (!valid.valid) {
                throw new errors_1.ModelProxyValidaterError("tv4验证错误", valid.errors, valid.missing);
            }
            return true;
        };
        BaseEngine.prototype.validate = function (instance, options) {
            instance.dataSchema && this.validateTv4(options.data, instance.dataSchema);
            instance.paramsSchema && this.validateTv4(options.params, instance.paramsSchema);
            return true;
        };
        BaseEngine.prototype.proxy = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, {}];
                });
            });
        };
        BaseEngine.prototype.getStatePath = function (instance) {
            if (instance.states && instance.state) {
                return instance.states[instance.state] || "";
            }
            return "";
        };
        return BaseEngine;
    }(compose_1.ModelProxy.Compose));
    ModelProxyEngine.BaseEngine = BaseEngine;
})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmVzL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUEyQjtBQUkzQiwyQ0FBNkM7QUFHN0MseUNBQWtGO0FBRWxGLElBQWlCLGdCQUFnQixDQTBEaEM7QUExREQsV0FBaUIsZ0JBQWdCO0lBQzdCO1FBQXlDLDhCQUE2QjtRQUNsRTttQkFDSSxpQkFBTztRQUNYLENBQUM7UUFRUyxnQ0FBVyxHQUFyQixVQUFzQixHQUFTLEVBQUUsTUFBc0I7WUFDbkQsSUFBSSxLQUFLLEdBQW9CLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsTUFBd0IsQ0FBQyxDQUFDO1lBRWpGLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsTUFBTSxJQUFJLGlDQUF3QixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMvRSxDQUFDO1lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDO1FBUUQsNkJBQVEsR0FBUixVQUFTLFFBQXlCLEVBQUUsT0FBaUI7WUFDakQsUUFBUSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzNFLFFBQVEsQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUVqRixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFRSywwQkFBSyxHQUFYLFVBQVksUUFBeUIsRUFBRSxPQUFpQjs7O29CQUNwRCxzQkFBTyxFQUFFLEVBQUM7OztTQUNiO1FBT0QsaUNBQVksR0FBWixVQUFhLFFBQXlCO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDakQsQ0FBQztZQUVELE1BQU0sQ0FBQyxFQUFFLENBQUM7UUFDZCxDQUFDO1FBQ0wsaUJBQUM7SUFBRCxDQUFDLEFBeERELENBQXlDLG9CQUFVLENBQUMsT0FBTyxHQXdEMUQ7SUF4RHFCLDJCQUFVLGFBd0QvQixDQUFBO0FBQ0wsQ0FBQyxFQTFEZ0IsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUEwRGhDIn0=

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var builder_1 = __webpack_require__(4);
var proxy_config_schema_1 = __webpack_require__(16);
var interface_schema_1 = __webpack_require__(7);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    proxyConfigSchema: proxy_config_schema_1.default,
    interfaceSchema: interface_schema_1.default,
    JsonSchemaBuilder: builder_1.ModleProxySchema.JsonSchemaBuilder
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2NoZW1hcy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEscUNBQTZDO0FBQzdDLDZEQUFzRDtBQUN0RCx1REFBaUQ7O0FBRWpELGtCQUFlO0lBQ1gsaUJBQWlCLEVBQUUsNkJBQWlCO0lBQ3BDLGVBQWUsRUFBRSwwQkFBZTtJQUNoQyxpQkFBaUIsRUFBRSwwQkFBZ0IsQ0FBQyxpQkFBaUI7Q0FDeEQsQ0FBQyJ9

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var builder_1 = __webpack_require__(4);
var JsonSchemaBuilder = builder_1.ModleProxySchema.JsonSchemaBuilder;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JsonSchemaBuilder.init().build("object").properties({
    key: JsonSchemaBuilder.init().build().toValue(),
    title: JsonSchemaBuilder.init().build().toValue(),
    engine: JsonSchemaBuilder.init().build().toValue(),
    states: JsonSchemaBuilder.init().build("object").toValue(),
    state: JsonSchemaBuilder.init().build().toValue(),
    version: JsonSchemaBuilder.init().build().toValue(),
    method: JsonSchemaBuilder.init().build().toValue(),
    path: JsonSchemaBuilder.init().build().toValue(),
    config: JsonSchemaBuilder.init().build("object").toValue(),
    mockDir: JsonSchemaBuilder.init().build().toValue()
}).required("key", "title", "method", "path").toValue();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL2ludGVyZmFjZS5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFDQUE2QztBQUVyQyxJQUFBLGdFQUFpQixDQUFzQjs7QUFFL0Msa0JBQWUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUMvRCxHQUFHLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQy9DLEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sRUFBRTtJQUMxRCxLQUFLLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2pELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDbkQsTUFBTSxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNsRCxJQUFJLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2hELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Q0FDdEQsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyJ9

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("tv4");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var interfaceFactory = __webpack_require__(15);
var engineFactory = __webpack_require__(3);
var index_1 = __webpack_require__(6);
var compose = __webpack_require__(2);
var tv4 = __webpack_require__(8);
var jsonPointer = __webpack_require__(13);
var errors_1 = __webpack_require__(0);
var ModelProxy;
(function (ModelProxy_1) {
    var ModelProxy = (function (_super) {
        __extends(ModelProxy, _super);
        function ModelProxy() {
            var _this = _super.call(this) || this;
            _this.interfaces = {};
            return _this;
        }
        ModelProxy.prototype.addEngines = function (engines) {
            for (var key in engines) {
                engineFactory.ModelProxy.engineFactory.add(key, engines[key], true);
            }
            return this;
        };
        ModelProxy.prototype.initInterfaces = function (config, overrideInterfaceConfig) {
            if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
            var ifFactory = new interfaceFactory.ModelProxy.InterfaceFactory();
            config.interfaces.forEach(function (i) {
                ifFactory.add(i.key, Object.assign({}, {
                    ns: config.key,
                    engine: config.engine,
                    states: config.states,
                    state: config.state,
                    mockDir: config.mockDir
                }, i, overrideInterfaceConfig || {}));
            });
            return ifFactory;
        };
        ModelProxy.prototype.loadConfig = function (config, overrideInterfaceConfig) {
            if (overrideInterfaceConfig === void 0) { overrideInterfaceConfig = {}; }
            return __awaiter(this, void 0, void 0, function () {
                var valid;
                return __generator(this, function (_a) {
                    valid = tv4.validateResult(config, index_1.default.proxyConfigSchema);
                    if (!valid.valid) {
                        throw valid.error;
                    }
                    this.interfaces[config.key] = this.initInterfaces(config, overrideInterfaceConfig);
                    return [2 /*return*/, this];
                });
            });
        };
        ModelProxy.prototype.execute = function (path, options) {
            return __awaiter(this, void 0, void 0, function () {
                var interfaceInstance;
                return __generator(this, function (_a) {
                    interfaceInstance = null;
                    if (!jsonPointer.has(this.interfaces, path)) {
                        throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0" + path + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
                    }
                    interfaceInstance = jsonPointer.get(this.interfaces, path);
                    return [2 /*return*/, interfaceInstance(options)];
                });
            });
        };
        ModelProxy.prototype.getHref = function (path, instance) {
            var interfaceInstance = null;
            if (!jsonPointer.has(this.interfaces, path)) {
                throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u53D1\u73B0" + path + "\u7684\u63A5\u53E3\u65B9\u6CD5\uFF01");
            }
            interfaceInstance = jsonPointer.get(this.interfaces, path);
            return interfaceInstance["getPath"](instance);
        };
        ModelProxy.prototype.getNs = function (ns) {
            if (!this.interfaces.hasOwnProperty(ns)) {
                var nses = [];
                for (var key in this.interfaces) {
                    nses.push(key);
                }
                throw new errors_1.ModelProxyMissingError("\u6CA1\u6709\u627E\u5230" + ns + "\u7A7A\u95F4;\u5F53\u524D\u547D\u540D\u7A7A\u95F4\u3010" + nses.join(',') + "\u3011");
            }
            return this.interfaces[ns];
        };
        return ModelProxy;
    }(compose.ModelProxy.Compose));
    ModelProxy_1.ModelProxy = ModelProxy;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9wcm94eS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUEsc0RBQXdEO0FBQ3hELGdEQUFrRDtBQUNsRCwwQ0FBdUM7QUFDdkMsbUNBQXFDO0FBQ3JDLHlCQUEyQjtBQUMzQiwwQ0FBNEM7QUFDNUMsbUNBQWtEO0FBRWxELElBQWlCLFVBQVUsQ0E0SDFCO0FBNUhELFdBQWlCLFlBQVU7SUFDdkI7UUFBZ0MsOEJBQStCO1FBRzNEO1lBQUEsWUFDSSxpQkFBTyxTQUNWO1lBSk8sZ0JBQVUsR0FBb0UsRUFBRSxDQUFDOztRQUl6RixDQUFDO1FBTUQsK0JBQVUsR0FBVixVQUFXLE9BQW1DO1lBQzFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGFBQWEsQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFPTyxtQ0FBYyxHQUF0QixVQUF1QixNQUFvQixFQUFFLHVCQUE2QztZQUE3Qyx3Q0FBQSxFQUFBLDRCQUE2QztZQUN0RixJQUFJLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBRW5FLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBa0I7Z0JBQ3pDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRTtvQkFDbkMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxHQUFHO29CQUNkLE1BQU0sRUFBRSxN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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MethodType;
(function (MethodType) {
    MethodType[MethodType["GET"] = 0] = "GET";
    MethodType[MethodType["POST"] = 1] = "POST";
    MethodType[MethodType["DELETE"] = 2] = "DELETE";
    MethodType[MethodType["PUT"] = 3] = "PUT";
    MethodType[MethodType["HEAD"] = 4] = "HEAD";
    MethodType[MethodType["PATCH"] = 5] = "PATCH";
    MethodType[MethodType["OPTIONS"] = 6] = "OPTIONS";
})(MethodType = exports.MethodType || (exports.MethodType = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0aG9kLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9tZXRob2QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUdBLElBQVksVUFRWDtBQVJELFdBQVksVUFBVTtJQUNsQix5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLCtDQUFNLENBQUE7SUFDTix5Q0FBRyxDQUFBO0lBQ0gsMkNBQUksQ0FBQTtJQUNKLDZDQUFLLENBQUE7SUFDTCxpREFBTyxDQUFBO0FBQ1gsQ0FBQyxFQVJXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBUXJCIn0=

/***/ }),
/* 12 */
/***/ (function(module, exports) {


var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;

module.exports = function forEach (obj, fn, ctx) {
    if (toString.call(fn) !== '[object Function]') {
        throw new TypeError('iterator must be a function');
    }
    var l = obj.length;
    if (l === +l) {
        for (var i = 0; i < l; i++) {
            fn.call(ctx, obj[i], i, obj);
        }
    } else {
        for (var k in obj) {
            if (hasOwn.call(obj, k)) {
                fn.call(ctx, obj[k], k, obj);
            }
        }
    }
};



/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var each = __webpack_require__(12);
module.exports = api;


/**
 * Convenience wrapper around the api.
 * Calls `.get` when called with an `object` and a `pointer`.
 * Calls `.set` when also called with `value`.
 * If only supplied `object`, returns a partially applied function, mapped to the object.
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @param value
 * @returns {*}
 */

function api (obj, pointer, value) {
    // .set()
    if (arguments.length === 3) {
        return api.set(obj, pointer, value);
    }
    // .get()
    if (arguments.length === 2) {
        return api.get(obj, pointer);
    }
    // Return a partially applied function on `obj`.
    var wrapped = api.bind(api, obj);

    // Support for oo style
    for (var name in api) {
        if (api.hasOwnProperty(name)) {
            wrapped[name] = api[name].bind(wrapped, obj);
        }
    }
    return wrapped;
}


/**
 * Lookup a json pointer in an object
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @returns {*}
 */
api.get = function get (obj, pointer) {
    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);

    for (var i = 0; i < refTokens.length; ++i) {
        var tok = refTokens[i];
        if (!(typeof obj == 'object' && tok in obj)) {
            throw new Error('Invalid reference token: ' + tok);
        }
        obj = obj[tok];
    }
    return obj;
};

/**
 * Sets a value on an object
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 * @param value
 */
api.set = function set (obj, pointer, value) {
    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer),
      nextTok = refTokens[0];

    for (var i = 0; i < refTokens.length - 1; ++i) {
        var tok = refTokens[i];
        if (tok === '-' && Array.isArray(obj)) {
          tok = obj.length;
        }
        nextTok = refTokens[i + 1];

        if (!(tok in obj)) {
            if (nextTok.match(/^(\d+|-)$/)) {
                obj[tok] = [];
            } else {
                obj[tok] = {};
            }
        }
        obj = obj[tok];
    }
    if (nextTok === '-' && Array.isArray(obj)) {
      nextTok = obj.length;
    }
    obj[nextTok] = value;
    return this;
};

/**
 * Removes an attribute
 *
 * @param {Object} obj
 * @param {String|Array} pointer
 */
api.remove = function (obj, pointer) {
    var refTokens = Array.isArray(pointer) ? pointer : api.parse(pointer);
    var finalToken = refTokens[refTokens.length -1];
    if (finalToken === undefined) {
        throw new Error('Invalid JSON pointer for remove: "' + pointer + '"');
    }

    var parent = api.get(obj, refTokens.slice(0, -1));
    if (Array.isArray(parent)) {
      var index = +finalToken;
      if (finalToken === '' && isNaN(index)) {
        throw new Error('Invalid array index: "' + finalToken + '"');
      }

      Array.prototype.splice.call(parent, index, 1);
    } else {
      delete parent[finalToken];
    }
};

/**
 * Returns a (pointer -> value) dictionary for an object
 *
 * @param obj
 * @param {function} descend
 * @returns {}
 */
api.dict = function dict (obj, descend) {
    var results = {};
    api.walk(obj, function (value, pointer) {
        results[pointer] = value;
    }, descend);
    return results;
};

/**
 * Iterates over an object
 * Iterator: function (value, pointer) {}
 *
 * @param obj
 * @param {function} iterator
 * @param {function} descend
 */
api.walk = function walk (obj, iterator, descend) {
    var refTokens = [];

    descend = descend || function (value) {
        var type = Object.prototype.toString.call(value);
        return type === '[object Object]' || type === '[object Array]';
    };

    (function next (cur) {
        each(cur, function (value, key) {
            refTokens.push(String(key));
            if (descend(value)) {
                next(value);
            } else {
                iterator(value, api.compile(refTokens));
            }
            refTokens.pop();
        });
    }(obj));
};

/**
 * Tests if an object has a value for a json pointer
 *
 * @param obj
 * @param pointer
 * @returns {boolean}
 */
api.has = function has (obj, pointer) {
    try {
        api.get(obj, pointer);
    } catch (e) {
        return false;
    }
    return true;
};

/**
 * Escapes a reference token
 *
 * @param str
 * @returns {string}
 */
api.escape = function escape (str) {
    return str.toString().replace(/~/g, '~0').replace(/\//g, '~1');
};

/**
 * Unescapes a reference token
 *
 * @param str
 * @returns {string}
 */
api.unescape = function unescape (str) {
    return str.replace(/~1/g, '/').replace(/~0/g, '~');
};

/**
 * Converts a json pointer into a array of reference tokens
 *
 * @param pointer
 * @returns {Array}
 */
api.parse = function parse (pointer) {
    if (pointer === '') { return []; }
    if (pointer.charAt(0) !== '/') { throw new Error('Invalid JSON pointer: ' + pointer); }
    return pointer.substring(1).split(/\//).map(api.unescape);
};

/**
 * Builds a json pointer from a array of reference tokens
 *
 * @param refTokens
 * @returns {string}
 */
api.compile = function compile (refTokens) {
    if (refTokens.length === 0) { return ''; }
    return '/' + refTokens.map(api.escape).join('/');
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var base = __webpack_require__(5);
var ModelProxyEngine;
(function (ModelProxyEngine) {
    var DefaultEngine = (function (_super) {
        __extends(DefaultEngine, _super);
        function DefaultEngine() {
            var _this = _super.call(this) || this;
            _this.use(function (ctx, next) {
                next();
                return new Promise(function (resolve) {
                    resolve();
                });
            });
            return _this;
        }
        DefaultEngine.prototype.proxy = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                var fn;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fn = this.callback(function () { });
                            return [4 /*yield*/, fn({})];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, {}];
                    }
                });
            });
        };
        return DefaultEngine;
    }(base.ModelProxyEngine.BaseEngine));
    ModelProxyEngine.DefaultEngine = DefaultEngine;
})(ModelProxyEngine = exports.ModelProxyEngine || (exports.ModelProxyEngine = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9lbmdpbmVzL2RlZmF1bHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLDZCQUErQjtBQUcvQixJQUFpQixnQkFBZ0IsQ0FzQmhDO0FBdEJELFdBQWlCLGdCQUFnQjtJQUM3QjtRQUFtQyxpQ0FBZ0M7UUFDL0Q7WUFBQSxZQUNJLGlCQUFPLFNBU1Y7WUFQRyxLQUFJLENBQUMsR0FBRyxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ2YsSUFBSSxFQUFFLENBQUM7Z0JBRVAsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTztvQkFDdkIsT0FBTyxFQUFFLENBQUM7Z0JBQ2QsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQzs7UUFDUCxDQUFDO1FBRUssNkJBQUssR0FBWCxVQUFZLFFBQXlCLEVBQUUsT0FBaUI7O29CQUNoRCxFQUFFOzs7O2lDQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsY0FBSyxDQUFDLENBQUM7NEJBRTlCLHFCQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBQTs7NEJBQVosU0FBWSxDQUFDOzRCQUViLHNCQUFPLEVBQUUsRUFBQzs7OztTQUNiO1FBQ0wsb0JBQUM7SUFBRCxDQUFDLEFBcEJELENBQW1DLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEdBb0JsRTtJQXBCWSw4QkFBYSxnQkFvQnpCLENBQUE7QUFDTCxDQUFDLEVBdEJnQixnQkFBZ0IsR0FBaEIsd0JBQWdCLEtBQWhCLHdCQUFnQixRQXNCaEMifQ==

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var factory = __webpack_require__(1);
var engineFactory = __webpack_require__(3);
var ModelProxy;
(function (ModelProxy) {
    var InterfaceFactory = (function (_super) {
        __extends(InterfaceFactory, _super);
        function InterfaceFactory() {
            return _super.call(this) || this;
        }
        InterfaceFactory.prototype.add = function (name, instance, override) {
            if (override === void 0) { override = false; }
            _super.prototype.add.call(this, name, instance, override);
            var func = this.execute.bind(this, instance);
            func.getPath = this.getPath.bind(this, instance);
            Object.assign(this, (_a = {},
                _a[name] = func,
                _a));
            var _a;
        };
        InterfaceFactory.prototype.megreInstance = function (instance, extendInstance) {
            return Object.assign({}, instance, extendInstance);
        };
        InterfaceFactory.prototype.getPath = function (instance, extendInstance) {
            var engine;
            var iinstance = {};
            iinstance = this.megreInstance(instance, extendInstance || {});
            engine = engineFactory.ModelProxy.engineFactory.use("default");
            return engine.getStatePath(iinstance) + iinstance.path;
        };
        InterfaceFactory.prototype.execute = function (instance, options) {
            return __awaiter(this, void 0, void 0, function () {
                var engine, iinstance;
                return __generator(this, function (_a) {
                    iinstance = {};
                    iinstance = this.megreInstance(instance, options.instance || {});
                    engine = engineFactory.ModelProxy.engineFactory.use(iinstance.engine);
                    engine.validate(iinstance, options);
                    return [2 /*return*/, engine.proxy(iinstance, options)];
                });
            });
        };
        return InterfaceFactory;
    }(factory.ModelProxy.BaseFactory));
    ModelProxy.InterfaceFactory = InterfaceFactory;
})(ModelProxy = exports.ModelProxy || (exports.ModelProxy = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJmYWNlLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbGlicy9pbnRlcmZhY2UuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0Esd0NBQTBDO0FBQzFDLGdEQUFrRDtBQUlsRCxJQUFpQixVQUFVLENBMEQxQjtBQTFERCxXQUFpQixVQUFVO0lBQ3ZCO1FBQXNDLG9DQUErQztRQUNqRjttQkFBZ0IsaUJBQU87UUFBRSxDQUFDO1FBUzFCLDhCQUFHLEdBQUgsVUFBSSxJQUFZLEVBQUUsUUFBeUIsRUFBRSxRQUF5QjtZQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtZQUNsRSxpQkFBTSxHQUFHLFlBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztZQUVwQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFFN0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUE7WUFFaEQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJO2dCQUNkLEdBQUMsSUFBSSxJQUFHLElBQUk7b0JBQ2QsQ0FBQzs7UUFDUCxDQUFDO1FBRU8sd0NBQWEsR0FBckIsVUFBc0IsUUFBeUIsRUFBRSxjQUErQjtZQUM1RSxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFFTyxrQ0FBTyxHQUFmLFVBQWdCLFFBQXlCLEVBQUUsY0FBK0I7WUFDdEUsSUFBSSxNQUFlLENBQUM7WUFDcEIsSUFBSSxTQUFTLEdBQW9CLEVBQUUsQ0FBQztZQUVwQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsY0FBYyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBRS9ELE1BQU0sR0FBRyxhQUFhLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7WUFFL0QsTUFBTSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQztRQUMzRCxDQUFDO1FBUUssa0NBQU8sR0FBYixVQUFjLFFBQXlCLEVBQUUsT0FBaUI7O29CQUNsRCxNQUFNLEVBQ04sU0FBUzs7Z0NBQW9CLEVBQUU7b0JBRW5DLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDO29CQUVqRSxNQUFNLEdBQUcsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFHdEUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLENBQUM7b0JBRXBDLHNCQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxFQUFDOzs7U0FDM0M7UUFDTCx1QkFBQztJQUFELENBQUMsQUF4REQsQ0FBc0MsT0FBTyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBd0RuRTtJQXhEWSwyQkFBZ0IsbUJBd0Q1QixDQUFBO0FBQ0wsQ0FBQyxFQTFEZ0IsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUEwRDFCIn0=

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var interface_schema_1 = __webpack_require__(7);
var builder_1 = __webpack_require__(4);
var JsonSchemaBuilder = builder_1.ModleProxySchema.JsonSchemaBuilder;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = JsonSchemaBuilder.init().build("object", null, "modelProxy验证配置")
    .properties({
    key: JsonSchemaBuilder.init().build().toValue(),
    title: JsonSchemaBuilder.init().build().toValue(),
    engine: JsonSchemaBuilder.init().build().toValue(),
    states: JsonSchemaBuilder.init().build("object").toValue(),
    state: JsonSchemaBuilder.init().build().toValue(),
    version: JsonSchemaBuilder.init().build().toValue(),
    mockDir: JsonSchemaBuilder.init().build().toValue(),
    interfaces: JsonSchemaBuilder.init().build("array", "接口配置数组")
        .items(interface_schema_1.default).toValue(),
}).required("key", "title", "states").toValue();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJveHkuY29uZmlnLnNjaGVtYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zY2hlbWFzL3Byb3h5LmNvbmZpZy5zY2hlbWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHVEQUFpRDtBQUNqRCxxQ0FBNkM7QUFFckMsSUFBQSxnRUFBaUIsQ0FBc0I7O0FBRS9DLGtCQUFlLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDO0tBQzFFLFVBQVUsQ0FBQztJQUNSLEdBQUcsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDL0MsS0FBSyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNqRCxNQUFNLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ2xELE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFO0lBQzFELEtBQUssRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLEVBQUU7SUFDakQsT0FBTyxFQUFFLGlCQUFpQixDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRTtJQUNuRCxPQUFPLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFO0lBQ25ELFVBQVUsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQztTQUN4RCxLQUFLLENBQUMsMEJBQWUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtDQUN4QyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMifQ==

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var engineFactory = __webpack_require__(3);
var proxy_1 = __webpack_require__(10);
var compose = __webpack_require__(2);
var index_1 = __webpack_require__(6);
var base = __webpack_require__(5);
var baseFactory = __webpack_require__(1);
var methodtype = __webpack_require__(11);
var errors = __webpack_require__(0);
exports.modelProxy = {
    Proxy: proxy_1.ModelProxy.ModelProxy,
    engineFactory: engineFactory.ModelProxy.engineFactory,
    Compose: compose.ModelProxy.Compose,
    modelProxySchemaUtils: index_1.default,
    methods: methodtype.MethodType,
    BaseEngine: base.ModelProxyEngine.BaseEngine,
    BaseFactory: baseFactory.ModelProxy.BaseFactory,
    errors: errors
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHFEQUF1RDtBQUN2RCxzQ0FBMEM7QUFFMUMsd0NBQTBDO0FBQzFDLHlDQUFvRDtBQUNwRCxxQ0FBdUM7QUFFdkMsaURBQW1EO0FBRW5ELDRDQUE4QztBQUM5QyxzQ0FBd0M7QUFFM0IsUUFBQSxVQUFVLEdBQUc7SUFDdEIsS0FBSyxFQUFFLGtCQUFVLENBQUMsVUFBVTtJQUM1QixhQUFhLEVBQUUsYUFBYSxDQUFDLFVBQVUsQ0FBQyxhQUFhO0lBQ3JELE9BQU8sRUFBRSxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU87SUFDbkMscUJBQXFCLEVBQUUsZUFBcUI7SUFDNUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxVQUFVO0lBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVTtJQUM1QyxXQUFXLEVBQUUsV0FBVyxDQUFDLFVBQVUsQ0FBQyxXQUFXO0lBQy9DLE1BQU0sRUFBRSxNQUFNO0NBQ2pCLENBQUMifQ==

/***/ })
/******/ ]);
//# sourceMappingURL=node.js.map