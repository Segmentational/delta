import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["secondaryButtonText", "className", "defaultIconDescription", "defaultText", "failIconDescription", "failText", "inProgressIconDescription", "inProgressText", "onRequestCancel", "onRequestSave", "status", "successIconDescription", "successText", "type"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React, { forwardRef } from 'react';
import cx from 'classnames';
import { Button, InlineLoading } from 'carbon-components-react';
import { Save16, CheckmarkOutline16, ErrorOutline16, ErrorFilled16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
var componentName = 'Saving';
export var Saving = /*#__PURE__*/forwardRef(function (_ref, ref) {
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
      rest = _objectWithoutProperties(_ref, _excluded);

  var statusObj = (_statusObj = {
    default: {
      text: defaultText,
      iconDescription: defaultIconDescription,
      icon: CheckmarkOutline16
    }
  }, _defineProperty(_statusObj, 'in-progress', {
    text: inProgressText,
    iconDescription: inProgressIconDescription,
    icon: InlineLoading
  }), _defineProperty(_statusObj, "success", {
    text: successText,
    iconDescription: successIconDescription,
    icon: Save16
  }), _defineProperty(_statusObj, "fail", {
    text: failText,
    iconDescription: failIconDescription,
    icon: ErrorOutline16
  }), _statusObj);
  var blockClass = "".concat(pkg.prefix, "--saving");
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: ref,
    className: cx(blockClass, className)
  }, getDevtoolsProps(componentName)), type === 'auto' ? /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__message")
  }, status === 'fail' && /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__error-icon")
  }, /*#__PURE__*/React.createElement(ErrorFilled16, null)), /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__text")
  }, (_statusObj$status = statusObj[status]) === null || _statusObj$status === void 0 ? void 0 : _statusObj$status.text)) : /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__buttons")
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onRequestCancel,
    kind: "secondary",
    disabled: status !== 'in-progress',
    type: "button"
  }, secondaryButtonText), /*#__PURE__*/React.createElement(Button, {
    onClick: onRequestSave,
    kind: "primary",
    renderIcon: (_statusObj$status2 = statusObj[status]) === null || _statusObj$status2 === void 0 ? void 0 : _statusObj$status2.icon,
    iconDescription: (_statusObj$status3 = statusObj[status]) === null || _statusObj$status3 === void 0 ? void 0 : _statusObj$status3.iconDescription,
    disabled: status === 'in-progress',
    type: "button"
  }, (_statusObj$status4 = statusObj[status]) === null || _statusObj$status4 === void 0 ? void 0 : _statusObj$status4.text)));
});
Saving = pkg.checkComponentEnabled(Saving, componentName);
Saving.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: PropTypes.string,

  /**
   * Description for default state icon (manual).
   */
  defaultIconDescription: PropTypes.string,

  /**
   * Default text for the save button (manual). Per design guidelines you probably don't want to display this in the auto mode.
   */
  defaultText: PropTypes.string,

  /**
   * Description for fail state icon (manual).
   */
  failIconDescription: PropTypes.string,

  /**
   * Text for failure state.
   */
  failText: PropTypes.string,

  /**
   * Description for in progress state icon (manual).
   */
  inProgressIconDescription: PropTypes.string,

  /**
   * Text for in progress state.
   */
  inProgressText: PropTypes.string,

  /**
   * Function handler for cancel button (manual).
   */
  onRequestCancel: PropTypes.func,

  /**
   * Function handler for save button (manual).
   */
  onRequestSave: PropTypes.func,

  /**
   * Text for the secondary or cancel button (manual).
   */
  secondaryButtonText: PropTypes.string,

  /**
   * The status of the save. default being the untouched default state -> in-progress being a save has been initiated -> fail or success being the outcome.
   */
  status: PropTypes.oneOf(['default', 'in-progress', 'success', 'fail']).isRequired,

  /**
   * Description for success state icon (manual).
   */
  successIconDescription: PropTypes.string,

  /**
   * Text for success state
   */
  successText: PropTypes.string,

  /**
   * Designates the style of the save component. Manual uses a set of buttons and auto just displays a string. See usage guidelines for additional information.
   */
  type: PropTypes.oneOf(['manual', 'auto']).isRequired
};
Saving.displayName = componentName;