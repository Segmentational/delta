"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HTTPError404 = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = require("prop-types");

var _HTTPErrorSvg = require("../assets/HTTPErrorSvg404");

var _HTTPErrorContent = require("../HTTPErrorContent");

var _devtools = require("../../../global/js/utils/devtools");

var _settings = require("../../../settings");

var _excluded = ["className", "description", "errorCodeLabel", "links", "title"];
// The block part of our conventional BEM class names (blockClass__E--M).
var blockClass = "".concat(_settings.pkg.prefix, "--http-errors");
var componentName = 'HTTPError404';

var HTTPError404 = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      description = _ref.description,
      errorCodeLabel = _ref.errorCodeLabel,
      links = _ref.links,
      title = _ref.title,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    className: (0, _classnames.default)(blockClass, className),
    ref: ref
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement(_HTTPErrorContent.HTTPErrorContent, {
    description: description,
    errorCodeLabel: errorCodeLabel,
    title: title,
    links: links
  }), /*#__PURE__*/_react.default.createElement(_HTTPErrorSvg.HTTPErrorSvg404, {
    className: "".concat(blockClass, "__image")
  }));
}); // Return a placeholder if not released and not enabled by feature flag


exports.HTTPError404 = HTTPError404;
exports.HTTPError404 = HTTPError404 = _settings.pkg.checkComponentEnabled(HTTPError404, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

HTTPError404.displayName = componentName; // displayName is used in preference to function.name by React
// The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

HTTPError404.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node
   */
  className: _propTypes.string,

  /**
   * String that will provide the description for the HTTP error code
   */
  description: _propTypes.string.isRequired,

  /**
   * String that will describe the error that occurred
   */
  errorCodeLabel: _propTypes.string.isRequired,

  /**
   * Links that will display for extra context when receiving particular errors
   */
  links: (0, _propTypes.arrayOf)((0, _propTypes.shape)({
    /**
     * The text to display for the link
     */
    text: _propTypes.string.isRequired,

    /**
     * The link's destination
     */
    href: _propTypes.string.isRequired
  })),

  /**
   * This will be for the main title of the HTTP error component
   */
  title: _propTypes.string.isRequired
};