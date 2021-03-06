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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
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
Object.defineProperty(exports, "__esModule", { value: true });
var base_factory_1 = require("./base.factory");
var engine_factory_1 = require("./engine.factory");
var InterfaceFactory = (function (_super) {
    __extends(InterfaceFactory, _super);
    function InterfaceFactory() {
        return _super.call(this) || this;
    }
    InterfaceFactory.prototype.add = function (name, instance, override) {
        if (override === void 0) { override = false; }
        _super.prototype.add.call(this, name, instance, override);
        Object.assign(instance, {
            delete: this.custom.bind(this, instance, "DELETE"),
            execute: this.execute.bind(this, instance),
            get: this.custom.bind(this, instance, "GET"),
            getFullPath: this.getFullPath.bind(this, instance),
            getPath: this.getPath.bind(this, instance),
            post: this.custom.bind(this, instance, "POST", null),
            put: this.custom.bind(this, instance, "PUT"),
        });
    };
    InterfaceFactory.prototype.execute = function (instance, options) {
        return __awaiter(this, void 0, void 0, function () {
            var engine, iinstance, _a, extraInstance;
            return __generator(this, function (_b) {
                _a = options.instance, extraInstance = _a === void 0 ? {} : _a;
                iinstance = this.megreInstance(instance, extraInstance);
                engine = engine_factory_1.engineFactory.use(iinstance.engine);
                engine.validate(iinstance, options);
                return [2, engine.proxy(iinstance, options)];
            });
        });
    };
    InterfaceFactory.prototype.custom = function (instance, type, id, options) {
        if (options === void 0) { options = {}; }
        return __awaiter(this, void 0, void 0, function () {
            var _a, extraInstance, _b, params;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = options.instance, extraInstance = _a === void 0 ? {} : _a, _b = options.params, params = _b === void 0 ? {} : _b;
                        extraInstance.method = type;
                        if (id) {
                            extraInstance.path = instance.path + "/:id";
                            params.id = id;
                        }
                        options.instance = extraInstance;
                        options.params = params;
                        return [4, this.execute(instance, options)];
                    case 1: return [2, _c.sent()];
                }
            });
        });
    };
    InterfaceFactory.prototype.megreInstance = function (instance, extendInstance) {
        if (extendInstance === void 0) { extendInstance = {}; }
        return Object.assign({}, instance, extendInstance);
    };
    InterfaceFactory.prototype.getPath = function (instance, extendInstance) {
        if (extendInstance === void 0) { extendInstance = {}; }
        var engine;
        var iinstance;
        iinstance = this.megreInstance(instance, extendInstance);
        engine = engine_factory_1.engineFactory.use("default");
        return engine.getStatePath(iinstance) + iinstance.path;
    };
    InterfaceFactory.prototype.getFullPath = function (instance, options) {
        if (options === void 0) { options = {}; }
        var engine;
        var iinstance;
        iinstance = this.megreInstance(instance, options.instance);
        engine = engine_factory_1.engineFactory.use("default");
        return engine.getFullPath(iinstance, options);
    };
    return InterfaceFactory;
}(base_factory_1.BaseFactory));
exports.InterfaceFactory = InterfaceFactory;
