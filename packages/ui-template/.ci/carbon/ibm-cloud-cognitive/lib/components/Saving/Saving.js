"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Saving = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _carbonComponentsReact = require("carbon-components-react");

var _iconsReact = require("@carbon/icons-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _devtools = require("../../global/js/utils/devtools");

var _settings = require("../../settings");

var _excluded = ["secondaryButtonText", "className", "defaultIconDescription", "defaultText", "failIconDescription", "failText", "inProgressIconDescription", "inProgressText", "onRequestCancel", "onRequestSave", "status", "successIconDescription", "successText", "type"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var componentName = 'Saving';
var Saving = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _statusObj, _statusObj$status, _statusObj$status2, _statusObj$status3, _statusObj$status4;

  var secondaryButtonText = _ref.secondaryButtonText,
      className = _ref.className,
      defaultIconDescription = _ref.defaultIconDescription,
      defaultText = _ref.defaultText,
      failIconDescription = _ref.failIconDescription,
      failText = _ref.failText,
      inProgressIconDescription = _ref.inProgressIconDescription,
      inProgressText = _ref.inProgressText,
      onRequestCancel = _ref.onRequestCancel,
      onRequestSave = _ref.onRequestSave,
      status = _ref.status,
      successIconDescription = _ref.successIconDescription,
      successText = _ref.successText,
      type = _ref.type,
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var statusObj = (_statusObj = {
    default: {
      text: defaultText,
      iconDescription: defaultIconDescription,
      icon: _iconsReact.CheckmarkOutline16
    }
  }, (0, _defineProperty2.default)(_statusObj, 'in-progress', {
    text: inProgressText,
    iconDescription: inProgressIconDescription,
    icon: _carbonComponentsReact.InlineLoading
  }), (0, _defineProperty2.default)(_statusObj, "success", {
    text: successText,
    iconDescription: successIconDescription,
    icon: _iconsReact.Save16
  }), (0, _defineProperty2.default)(_statusObj, "fail", {
    text: failText,
    iconDescription: failIconDescription,
    icon: _iconsReact.ErrorOutline16
  }), _statusObj);
  var blockClass = "".concat(_settings.pkg.prefix, "--saving");
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(blockClass, className)
  }, (0, _devtools.getDevtoolsProps)(componentName)), type === 'auto' ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__message")
  }, status === 'fail' && /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__error-icon")
  }, /*#__PURE__*/_react.default.createElement(_iconsReact.ErrorFilled16, null)), /*#__PURE__*/_react.default.createElement("p", {
    className: "".concat(blockClass, "__text")
  }, (_statusObj$status = statusObj[status]) === null || _statusObj$status === void 0 ? void 0 : _statusObj$status.text)) : /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__buttons")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    onClick: onRequestCancel,
    kind: "secondary",
    disabled: status !== 'in-progress',
    type: "button"
  }, secondaryButtonText), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    onClick: onRequestSave,
    kind: "primary",
    renderIcon: (_statusObj$status2 = statusObj[status]) === null || _statusObj$status2 === void 0 ? void 0 : _statusObj$status2.icon,
    iconDescription: (_statusObj$status3 = statusObj[status]) === null || _statusObj$status3 === void 0 ? void 0 : _statusObj$status3.iconDescription,
    disabled: status === 'in-progress',
    type: "button"
  }, (_statusObj$status4 = statusObj[status]) === null || _statusObj$status4 === void 0 ? void 0 : _statusObj$status4.text)));
});
exports.Saving = Saving;
exports.Saving = Saving = _settings.pkg.checkComponentEnabled(Saving, componentName);
Saving.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * Description for default state icon (manual).
   */
  defaultIconDescription: _propTypes.default.string,

  /**
   * Default text for the save button (manual). Per design guidelines you probably don't want to display this in the auto mode.
   */
  defaultText: _propTypes.default.string,

  /**
   * Description for fail state icon (manual).
   */
  failIconDescription: _propTypes.default.string,

  /**
   * Text for failure state.
   */
  failText: _propTypes.default.string,

  /**
   * Description for in progress state icon (manual).
   */
  inProgressIconDescription: _propTypes.default.string,

  /**
   * Text for in progress state.
   */
  inProgressText: _propTypes.default.string,

  /**
   * Function handler for cancel button (manual).
   */
  onRequestCancel: _propTypes.default.func,

  /**
   * Function handler for save button (manual).
   */
  onRequestSave: _propTypes.default.func,

  /**
   * Text for the secondary or cancel button (manual).
   */
  secondaryButtonText: _propTypes.default.string,

  /**
   * The status of the save. default being the untouched default state -> in-progress being a save has been initiated -> fail or success being the outcome.
   */
  status: _propTypes.default.oneOf(['default', 'in-progress', 'success', 'fail']).isRequired,

  /**
   * Description for success state icon (manual).
   */
  successIconDescription: _propTypes.default.string,

  /**
   * Text for success state
   */
  successText: _propTypes.default.string,

  /**
   * Designates the style of the save component. Manual uses a set of buttons and auto just displays a string. See usage guidelines for additional information.
   */
  type: _propTypes.default.oneOf(['manual', 'auto']).isRequired
};
Saving.displayName = componentName;