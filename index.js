"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "camel", {
  enumerable: true,
  get: function get() {
    return _camel["default"];
  }
});
Object.defineProperty(exports, "underline", {
  enumerable: true,
  get: function get() {
    return _underline["default"];
  }
});
Object.defineProperty(exports, "hump", {
  enumerable: true,
  get: function get() {
    return _hump["default"];
  }
});
Object.defineProperty(exports, "hyphen", {
  enumerable: true,
  get: function get() {
    return _hyphen["default"];
  }
});

var _camel = _interopRequireDefault(require("./lib/camel"));

var _underline = _interopRequireDefault(require("./lib/underline"));

var _hump = _interopRequireDefault(require("./lib/hump"));

var _hyphen = _interopRequireDefault(require("./lib/hyphen"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }