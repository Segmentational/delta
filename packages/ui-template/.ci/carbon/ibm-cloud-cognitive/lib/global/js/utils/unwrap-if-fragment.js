"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * unwrapIfFragment - walks the passed children unwrapping fragments
 * to create a flat array of all children
 */
var unwrapIfFragment = function unwrapIfFragment(children) {
  // When passed one of the following
  // - A fragment with zero or more children *1
  // - An array with zero or more children *1
  // - A single node
  // *1 -  The children of the above can be any of the above
  // Outputs - A flat array of child nodes
  var newChildArray = [];

  var isFragment = function isFragment(item) {
    return item && item.type === _react.default.Fragment;
  };

  var addChildren = function addChildren(children) {
    var loopOver = function loopOver(children) {
      // children may be a single item
      var _children = Array.isArray(children) ? children : [children];

      var _iterator = _createForOfIteratorHelper(_children),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var child = _step.value;
          addChildren(child);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }; // children is nothing, one fragment, array with one or more children, or a single item


    if (!children) {
      return;
    }

    if (isFragment(children)) {
      loopOver(children.props.children);
    } else {
      if (Array.isArray(children)) {
        loopOver(children);
      } else {
        newChildArray.push(children);
      }
    }
  }; // nothing, one fragment, array with one or more children, or a single item


  addChildren(children); // wrapping with React.Children caters for any missing keys

  var keyedChildren = _react.default.Children.map(newChildArray, function (child) {
    return child;
  });

  return keyedChildren;
};

var _default = unwrapIfFragment;
exports.default = _default;