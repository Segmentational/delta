"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotFoundIllustration = void 0;

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

var NotFoundIllustration = function NotFoundIllustration(_ref) {
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
    x1: 2.6,
    y1: -12.81,
    x2: 43.48,
    y2: 58,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.69,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_dark_".concat(svgId),
    x1: 43.74,
    y1: 57.07,
    x2: 69.51,
    y2: 57.07,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#262626"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#393939"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_dark_".concat(svgId),
    x1: 15.1,
    y1: 10.36,
    x2: 41.51,
    y2: 56.09,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#262626"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_dark_".concat(svgId),
    x1: 34.92,
    y1: -46.56,
    x2: 34.92,
    y2: 97.82,
    gradientTransform: "rotate(30 34.925 27.562)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.48,
    stopColor: "#393939",
    stopOpacity: 0.69
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#262626",
    stopOpacity: 0.1
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__e_dark_".concat(svgId),
    x1: 24.56,
    y1: 9.61,
    x2: 50.36,
    y2: 54.3,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#6f6f6f",
    stopOpacity: 0
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.17,
    stopColor: "#6f6f6f",
    stopOpacity: 0.03
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.31,
    stopColor: "#6f6f6f",
    stopOpacity: 0.12
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.44,
    stopColor: "#6f6f6f",
    stopOpacity: 0.27
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.56,
    stopColor: "#6f6f6f",
    stopOpacity: 0.49
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.68,
    stopColor: "#6f6f6f",
    stopOpacity: 0.77
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.73,
    stopColor: "#6f6f6f",
    stopOpacity: 0.92
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#6f6f6f"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__f_dark_".concat(svgId),
    x1: 15.86,
    y1: -20.5,
    x2: 56.75,
    y2: 50.32,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#525252"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.69,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#393939"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#262626"
  }))), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.69 18c0 12 8.75 26.84 19.56 33.08 5.64 3.26 10.73 3.52 14.3 1.32l4.83-2.79-1.19-1.93c-3.25 1.73-7.72 1.38-12.67-1.48-9.9-5.74-17.92-19.32-17.92-30.35 0-5.09 1.71-8.75 4.53-10.65l-1.2-1.95L18.1 6c-3.35 2-5.41 6.12-5.41 12",
    fill: "url(#prefix__a_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M67.31 64.92s.11.86-1.89 2.24-2.73 1.18-2.73 1.18L48.57 49.22l4.62-3.42z",
    fill: "url(#prefix__b_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M37.68 46.05c-9.9-5.71-17.93-19.29-17.93-30.32 0-3.79.95-6.78 2.6-8.85-4.87.76-8.09 5-8.09 12 0 11 8 24.61 17.93 30.32 6.5 3.75 12.19 3.19 15.33-.76-2.82.44-6.21-.31-9.84-2.41",
    fill: "url(#prefix__c_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("ellipse", {
    cx: 34.92,
    cy: 27.57,
    rx: 14.55,
    ry: 25.2,
    transform: "rotate(-30 34.93 27.58)",
    opacity: 0.5,
    fill: "url(#prefix__d_dark_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M67.1 75l-12.84-7.41c1.1-1.15 1.1-2.36-.77-3.44h-.05L26.17 48.4l-.09-.06c-2.59-1.49-5.82-1.05-8.42.45s-3.57 3.48-1 5l27.43 15.79a7.2 7.2 0 005.5.53l13 7.51c1.23.72 5.76-1.89 4.51-2.62z",
    opacity: 0.25
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M42.88 50.79a16.42 16.42 0 01-8.06-2.47c-9.88-5.7-17.92-19.63-17.92-31 0-5.57 1.89-9.73 5.32-11.72S30.2 4 35 6.81c9.91 5.71 18 19.64 18 31.05 0 5.57-1.89 9.73-5.32 11.71a9.31 9.31 0 01-4.8 1.22zM27 4.76a9 9 0 00-4.54 1.17c-3.3 1.9-5.12 5.93-5.12 11.35 0 11.28 8 25 17.72 30.68 4.69 2.71 9.09 3.16 12.39 1.25s5.12-5.94 5.12-11.35c0-11.28-7.95-25-17.72-30.69A16 16 0 0027 4.76z",
    fill: "url(#prefix__e_dark_".concat(svgId, ")"),
    opacity: 0.6
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M57 37.5c0-12-8.75-26.85-19.56-33.08C31.82 1.16 26.73.89 23.16 3.09l-4.83 2.78 1.19 1.94c3.25-1.74 7.72-1.38 12.67 1.47C42.09 15 50.11 28.57 50.11 39.6c0 4.86-1.55 8.4-4.11 10.4-.12.1-1.17.73-1.31.82l2.12 1.42 4.83-2.79C55 47.44 57 43.34 57 37.5",
    fill: "url(#prefix__f_dark_".concat(svgId, ")")
  })) : /*#__PURE__*/_react.default.createElement("svg", (0, _extends2.default)({}, rest, {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 80,
    height: 80,
    viewBox: "0 0 80 80",
    className: (0, _classnames.default)(["".concat(blockClass, "__illustration"), "".concat(blockClass, "__illustration--").concat(size)])
  }), /*#__PURE__*/_react.default.createElement("defs", null, /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__a_".concat(svgId),
    x1: 2.6,
    y1: -12.81,
    x2: 43.48,
    y2: 58,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#f4f4f4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.69,
    stopColor: "#e0e0e0"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.94,
    stopColor: "#c4c4c4"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#a8a8a8"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__b_".concat(svgId),
    x1: 48.57,
    y1: 57.07,
    x2: 67.31,
    y2: 57.07,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#a8a8a8"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#c6c6c6"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__c_".concat(svgId),
    x1: 15.1,
    y1: 10.36,
    x2: 41.51,
    y2: 56.09,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#bdbdbd"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#a3a3a3"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__d_".concat(svgId),
    x1: 34.92,
    y1: -46.56,
    x2: 34.92,
    y2: 97.82,
    gradientTransform: "rotate(30 34.925 27.562)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#6e6e6e"
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.48,
    stopColor: "#787878",
    stopOpacity: 0.69
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.72,
    stopColor: "#818181",
    stopOpacity: 0.41
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#8c8c8c",
    stopOpacity: 0.1
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__e_".concat(svgId),
    x1: 26.4,
    y1: 71.67,
    x2: 55.54,
    y2: 54.85,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#565656",
    stopOpacity: 0.05
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#171717",
    stopOpacity: 0.1
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__f_".concat(svgId),
    x1: 24.56,
    y1: 9.61,
    x2: 50.36,
    y2: 54.3,
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0,
    stopColor: "#fff",
    stopOpacity: 0
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.12,
    stopColor: "#fff",
    stopOpacity: 0.01
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.22,
    stopColor: "#fff",
    stopOpacity: 0.05
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.31,
    stopColor: "#fff",
    stopOpacity: 0.12
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.4,
    stopColor: "#fff",
    stopOpacity: 0.21
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.48,
    stopColor: "#fff",
    stopOpacity: 0.34
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.56,
    stopColor: "#fff",
    stopOpacity: 0.49
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.64,
    stopColor: "#fff",
    stopOpacity: 0.66
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.71,
    stopColor: "#fff",
    stopOpacity: 0.86
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 0.73,
    stopColor: "#fff",
    stopOpacity: 0.92
  }), /*#__PURE__*/_react.default.createElement("stop", {
    offset: 1,
    stopColor: "#fff"
  })), /*#__PURE__*/_react.default.createElement("linearGradient", {
    id: "prefix__g_".concat(svgId),
    x1: 15.86,
    y1: -20.5,
    x2: 56.75,
    y2: 50.32,
    xlinkHref: "#prefix__a_".concat(svgId)
  })), /*#__PURE__*/_react.default.createElement("path", {
    fill: "none",
    d: "M0 0h80v80H0z"
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M12.69 18c0 12 8.75 26.84 19.56 33.08 5.64 3.26 10.73 3.52 14.3 1.32l4.83-2.79-1.19-1.93c-3.25 1.73-7.72 1.38-12.67-1.48-9.9-5.74-17.92-19.32-17.92-30.35 0-5.09 1.71-8.75 4.53-10.65l-1.2-1.95L18.1 6c-3.35 2-5.41 6.12-5.41 12",
    fill: "url(#prefix__a_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M67.31 64.92s.11.86-1.89 2.24-2.73 1.18-2.73 1.18L48.57 49.22l4.62-3.42z",
    fill: "url(#prefix__b_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M37.68 46.05c-9.9-5.71-17.93-19.29-17.93-30.32 0-3.79.95-6.78 2.6-8.85-4.87.76-8.09 5-8.09 12 0 11 8 24.61 17.93 30.32 6.5 3.75 12.19 3.19 15.33-.76-2.82.44-6.21-.31-9.84-2.41",
    fill: "url(#prefix__c_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("ellipse", {
    cx: 34.92,
    cy: 27.57,
    rx: 14.55,
    ry: 25.2,
    transform: "rotate(-30 34.93 27.58)",
    opacity: 0.5,
    fill: "url(#prefix__d_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M67.1 75l-12.84-7.41c1.1-1.15 1.1-2.36-.77-3.44h-.05L26.17 48.4l-.09-.06c-2.59-1.49-5.82-1.05-8.42.45s-3.57 3.48-1 5l27.43 15.79a7.2 7.2 0 005.5.53l13 7.51c1.23.72 5.76-1.89 4.51-2.62z",
    fill: "url(#prefix__e_".concat(svgId, ")")
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M42.88 50.79a16.42 16.42 0 01-8.06-2.47c-9.88-5.7-17.92-19.63-17.92-31 0-5.57 1.89-9.73 5.32-11.72S30.2 4 35 6.81c9.91 5.71 18 19.64 18 31.05 0 5.57-1.89 9.73-5.32 11.71a9.31 9.31 0 01-4.8 1.22zM27 4.76a9 9 0 00-4.54 1.17c-3.3 1.9-5.12 5.93-5.12 11.35 0 11.28 8 25 17.72 30.68 4.69 2.71 9.09 3.16 12.39 1.25s5.12-5.94 5.12-11.35c0-11.28-7.95-25-17.72-30.69A16 16 0 0027 4.76z",
    fill: "url(#prefix__f_".concat(svgId, ")"),
    opacity: 0.6
  }), /*#__PURE__*/_react.default.createElement("path", {
    d: "M57 37.5c0-12-8.75-26.85-19.56-33.08C31.82 1.16 26.73.89 23.16 3.09l-4.83 2.78 1.19 1.94c3.25-1.74 7.72-1.38 12.67 1.47C42.09 15 50.11 28.57 50.11 39.6c0 4.86-1.55 8.4-4.11 10.4-.12.1-1.17.73-1.31.82l2.12 1.42 4.83-2.79C55 47.44 57 43.34 57 37.5",
    fill: "url(#prefix__g_".concat(svgId, ")")
  }));
};

exports.NotFoundIllustration = NotFoundIllustration;
NotFoundIllustration.propTypes = {
  size: _propTypes.default.oneOf(['lg', 'sm']),
  theme: _propTypes.default.oneOf(['light', 'dark'])
};