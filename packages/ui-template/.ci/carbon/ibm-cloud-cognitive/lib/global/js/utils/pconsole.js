"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warn = exports.shimIfProduction = exports.noop = exports.log = exports.isProduction = exports.error = exports.default = void 0;
//
// Copyright IBM Corp. 2020, 2021
//
// This source code is licensed under the Apache-2.0 license found in the
// LICENSE file in the root directory of this source tree.
//
var isProduction = process.env.NODE_ENV === 'production';
exports.isProduction = isProduction;

var noop = function noop() {
  return undefined;
};

exports.noop = noop;

var shimIfProduction = function shimIfProduction(fn) {
  return isProduction ? noop : fn;
};

exports.shimIfProduction = shimIfProduction;
var log = shimIfProduction(function () {
  var _console;

  return (_console = console).log.apply(_console, arguments);
});
exports.log = log;
var warn = shimIfProduction(function () {
  var _console2;

  return (_console2 = console).warn.apply(_console2, arguments);
});
exports.warn = warn;
var error = shimIfProduction(function () {
  var _console3;

  return (_console3 = console).error.apply(_console3, arguments);
});
exports.error = error;
var _default = {
  isProduction: isProduction,
  noop: noop,
  shimIfProduction: shimIfProduction,
  log: log,
  warn: warn,
  error: error
};
exports.default = _default;