"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsIllustration = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _settings = require("../../../settings");

var _uuidv = _interopRequireDefault(require("../../../global/js/utils/uuidv4"));

var _excluded = ["theme", "size"];
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--empty-state");

var NotificationsIllustration = function NotificationsIllustration(_ref) {
  var theme = _ref.theme,
      size = _ref.size,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var svgId = (0, _uuidv.default)();
  return theme === 'dark' ? /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_dark_".concat(svgId),
    x1: 30.05,
    y1: 54.31,
    x2: 35.5,
    y2: 54.31,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#161616"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#262626"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_dark_".concat(svgId),
    x1: 28.61,
    y1: -3.97,
    x2: 70.69,
    y2: 68.92,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.52,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.61,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#161616"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_dark_".concat(svgId),
    x1: 38.01,
    y1: 69.51,
    x2: 38.01,
    y2: -0.42,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#262626"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_dark_".concat(svgId),
    x1: 15.14,
    y1: 5.72,
    x2: 63.06,
    y2: 33.52,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.78,
    stopColor: "#6f6f6f"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.81,
    stopColor: "#6c6c6c",
    stopOpacity: 0.96
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.85,
    stopColor: "#636363",
    stopOpacity: 0.84
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.89,
    stopColor: "#545454",
    stopOpacity: 0.64
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.93,
    stopColor: "#404040",
    stopOpacity: 0.35
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.97,
    stopColor: "#262626",
    stopOpacity: 0
  })), /*#__PURE__*/_react.default.createElement("style", null, ".prefix__f_dark_".concat(svgId, "{fill:#525252}"))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    opacity: 0.25,
    d: "M15.13 52.11l45.5 26.28 4.25-2.51L19.4 49.63l-4.27 2.48z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M32.66 52.85l-2.25 4.22a1.08 1.08 0 01-.36.35l2.83-1.65a1.08 1.08 0 00.36-.35l2.26-4.22z",
    fill: "url(#prefix__a_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M63.45 26.58L20.63 1.86a1 1 0 00-1-.1l-4 2.3a1 1 0 011 .1l42.85 24.72a3.17 3.17 0 011.42 2.47l-.1 36.08a1 1 0 01-.42.91l4-2.3a1 1 0 00.42-.91L64.88 29a3.14 3.14 0 00-1.43-2.42z",
    fill: "url(#prefix__b_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z",
    fill: "url(#prefix__c_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__f_dark_".concat(svgId),
    d: "M57.99 37.07l-.01 3.9L18.03 17.9l.01-3.9 39.95 23.07zM57.99 45.11l-.01 3.91-39.95-23.07.01-3.9 39.95 23.06zM44.62 45.04l-.01 3.9L18.03 33.6l.01-3.9 26.58 15.34z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M60.76 30.55a2.54 2.54 0 01.14.8v3.95l.41-.13v-3.82a3.54 3.54 0 00-1.63-2.82L16.86 3.8a2.09 2.09 0 00-.44-.19l-.78.45a1 1 0 01.21-.06h.48l.27.12 21.47 12.4 21.41 12.36a3.19 3.19 0 011.28 1.67z",
    fill: "url(#prefix__d_dark_".concat(svgId, ")")
  })) : /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_".concat(svgId),
    x1: 61.44,
    y1: 66.99,
    x2: 61.44,
    y2: 60.01,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#c6c6c6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.78,
    stopColor: "#e0e0e0"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_".concat(svgId),
    x1: 28.49,
    y1: 44.06,
    x2: 53.04,
    y2: 86.58,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252",
    stopOpacity: 0.05
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopOpacity: 0.1
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_".concat(svgId),
    x1: 30.05,
    y1: 54.31,
    x2: 35.5,
    y2: 54.31,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#a4a4a4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#bebebe"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_".concat(svgId),
    x1: 28.61,
    y1: -3.97,
    x2: 70.69,
    y2: 68.92,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#f4f4f4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.52,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.56,
    stopColor: "#d8d8d8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.61,
    stopColor: "#c6c6c6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.89,
    stopColor: "#a8a8a8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.96,
    stopColor: "#8d8d8d"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__e_".concat(svgId),
    x1: 38.01,
    y1: 59.43,
    x2: 38.01,
    y2: 3.27,
    xlinkHref: "#prefix__a_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__f_".concat(svgId),
    x1: 21.52,
    y1: 36.2,
    x2: 61.39,
    y2: 36.2,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#c6c6c6"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__h_".concat(svgId),
    x1: 17.68,
    y1: 15.75,
    x2: 55.37,
    y2: 37.5,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.05,
    stopColor: "#fdfdfd"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.3,
    stopColor: "#f6f6f6"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#f4f4f4"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__i_".concat(svgId),
    x1: 14.24,
    y1: 21.81,
    x2: 51.92,
    y2: 43.56,
    xlinkHref: "#prefix__h_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__j_".concat(svgId),
    x1: 10.96,
    y1: 27.56,
    x2: 48.66,
    y2: 49.33,
    xlinkHref: "#prefix__h_".concat(svgId)
  }), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__k_".concat(svgId),
    x1: 15.14,
    y1: 5.72,
    x2: 63.06,
    y2: 33.52,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.78,
    stopColor: "#fff"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.8,
    stopColor: "#fefefe",
    stopOpacity: 0.98
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.82,
    stopColor: "#fcfcfc",
    stopOpacity: 0.93
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.85,
    stopColor: "#f8f8f8",
    stopOpacity: 0.84
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.87,
    stopColor: "#f2f2f2",
    stopOpacity: 0.72
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.9,
    stopColor: "#eaeaea",
    stopOpacity: 0.56
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.93,
    stopColor: "#e1e1e1",
    stopOpacity: 0.37
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.95,
    stopColor: "#d7d7d7",
    stopOpacity: 0.14
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.97,
    stopColor: "#d0d0d0",
    stopOpacity: 0
  })), /*#__PURE__*/_react.default.createElement("style", null, ".prefix__f_".concat(svgId, "{fill:url(#prefix__e_").concat(svgId, ")}"))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M61.3 68.11a.67.67 0 00.09-.14.67.67 0 01-.09.14zm.22-.46a1.58 1.58 0 000-.32v-7.24 7.24a1.58 1.58 0 010 .32zm-.09.26a1.18 1.18 0 00.07-.2 1.18 1.18 0 01-.07.2z",
    fill: "url(#prefix__a_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__b_".concat(svgId, ")"),
    d: "M15.13 52.11l45.5 26.28 4.25-2.51L19.4 49.63l-4.27 2.48z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M32.66 52.85l-2.25 4.22a1.08 1.08 0 01-.36.35l2.83-1.65a1.08 1.08 0 00.36-.35l2.26-4.22z",
    fill: "url(#prefix__c_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M63.45 26.58L20.63 1.86a1 1 0 00-1-.1l-4 2.3a1 1 0 011 .1l42.85 24.72a3.17 3.17 0 011.42 2.47l-.1 36.08a1 1 0 01-.42.91l4-2.3a1 1 0 00.42-.91L64.88 29a3.14 3.14 0 00-1.43-2.42z",
    fill: "url(#prefix__d_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__f_".concat(svgId),
    d: "M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z",
    fill: "url(#prefix__f_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    className: "prefix__f_".concat(svgId),
    d: "M59.48 28.88a3.17 3.17 0 011.42 2.47l-.1 36.08c0 .9-.65 1.26-1.42.81l-26.7-15.4-2.26 4.22a.9.9 0 01-1.33.28 3.07 3.07 0 01-1.22-1.53l-2.33-7.09-9-5.2a3.15 3.15 0 01-1.43-2.46L15.23 5c0-.9.64-1.27 1.43-.81z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__h_".concat(svgId, ")"),
    d: "M57.99 37.07l-.01 3.9L18.03 17.9l.01-3.9 39.95 23.07z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__i_".concat(svgId, ")"),
    d: "M57.99 45.11l-.01 3.91-39.95-23.07.01-3.9 39.95 23.06z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    fill: "url(#prefix__j_".concat(svgId, ")"),
    d: "M44.62 45.04l-.01 3.9L18.03 33.6l.01-3.9 26.58 15.34z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M60.76 30.55a2.54 2.54 0 01.14.8v3.95l.41-.13v-3.82a3.54 3.54 0 00-1.63-2.82L16.86 3.8a2.09 2.09 0 00-.44-.19l-.78.45a1 1 0 01.21-.06h.48l.27.12 21.47 12.4 21.41 12.36a3.19 3.19 0 011.28 1.67z",
    fill: "url(#prefix__k_".concat(svgId, ")")
  }));
};

exports.NotificationsIllustration = NotificationsIllustration;
NotificationsIllustration.propTypes = {
  size: _propTypes.default.oneOf(['lg', 'sm']),
  theme: _propTypes.default.oneOf(['light', 'dark'])
};