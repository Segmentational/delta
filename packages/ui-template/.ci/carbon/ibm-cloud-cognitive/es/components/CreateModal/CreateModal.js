import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["className", "children", "onRequestClose", "onRequestSubmit", "open", "title", "subtitle", "description", "secondaryButtonText", "primaryButtonText", "disableSubmit", "selectorPrimaryFocus"];

/**
 * Copyright IBM Corp. 2021, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React from 'react'; // Carbon and package components we use.

import { ComposedModal, ModalHeader, ModalFooter, ModalBody, Form, Button } from 'carbon-components-react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { getDevtoolsProps } from '../../global/js/utils/devtools';
import { pkg } from '../../settings';
var componentName = 'CreateModal';
var blockClass = "".concat(pkg.prefix, "--create-modal"); // Custom PropType validator which checks and ensures that the children property has no more than 4 nodes

var isValidChildren = function isValidChildren() {
  return function (_ref) {
    var children = _ref.children;

    if (children && children.length > 4) {
      throw new Error('The `CreateModal` component does not take more than 4 nodes as children. This is to ensure that the modal does not overflow. Please remove 1 or more nodes.');
    }

    return;
  };
};

export var CreateModal = /*#__PURE__*/React.forwardRef(function (_ref2, ref) {
  var className = _ref2.className,
      children = _ref2.children,
      onRequestClose = _ref2.onRequestClose,
      onRequestSubmit = _ref2.onRequestSubmit,
      open = _ref2.open,
      title = _ref2.title,
      subtitle = _ref2.subtitle,
      description = _ref2.description,
      secondaryButtonText = _ref2.secondaryButtonText,
      primaryButtonText = _ref2.primaryButtonText,
      disableSubmit = _ref2.disableSubmit,
      selectorPrimaryFocus = _ref2.selectorPrimaryFocus,
      rest = _objectWithoutProperties(_ref2, _excluded);

  return /*#__PURE__*/React.createElement(ComposedModal, _extends({}, rest, {
    selectorPrimaryFocus: selectorPrimaryFocus,
    className: cx(blockClass, className),
    open: open,
    ref: ref,
    "aria-label": title,
    size: "sm",
    preventCloseOnClickOutside: true,
    onClose: function onClose() {
      onRequestClose === null || onRequestClose === void 0 ? void 0 : onRequestClose();
      return false;
    }
  }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement(ModalHeader, {
    title: title,
    titleClassName: "".concat(blockClass, "__title")
  }, subtitle && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__subtitle")
  }, subtitle)), /*#__PURE__*/React.createElement(ModalBody, {
    hasForm: true
  }, description && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__description")
  }, description), /*#__PURE__*/React.createElement(Form, {
    className: "".concat(blockClass, "__form")
  }, children)), /*#__PURE__*/React.createElement(ModalFooter, null, /*#__PURE__*/React.createElement(Button, {
    type: "button",
    kind: "secondary",
    onClick: onRequestClose
  }, secondaryButtonText), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    kind: "primary",
    onClick: onRequestSubmit,
    disabled: disableSubmit
  }, primaryButtonText)));
}); // Return a placeholder if not released and not enabled by feature flag

CreateModal = pkg.checkComponentEnabled(CreateModal, componentName);
CreateModal.propTypes = {
  /**
   * Children refers to all form items within a form inside of the modal's body.
   */
  children: isValidChildren(),

  /**
   * Specify an optional className to be applied to the modal root node
   */
  className: PropTypes.string,

  /**
   * The description of the CreateModal serves to provide more information about the modal.
   */
  description: PropTypes.node.isRequired,

  /**
   * Specifies a boolean for disabling or enabling the primary button. This is important for form validation
   * Returning `true` prevents the primary button from being clicked until required fields are completed.
   */
  disableSubmit: PropTypes.bool,

  /**
   * Specifies an optional handler which is called when the CreateModal
   * is closed.
   */
  onRequestClose: PropTypes.func,

  /**
   * Specifies an optional handler which is called when the CreateModal
   * primary button is pressed.
   */
  onRequestSubmit: PropTypes.func,

  /**
   * Specifies whether the CreateModal is open or not.
   */
  open: PropTypes.bool,

  /**
   * Specifies the primary button's text in the modal.
   */
  primaryButtonText: PropTypes.string.isRequired,

  /**
   * Specifies the secondary button's text in the modal.
   */
  secondaryButtonText: PropTypes.string.isRequired,

  /**
   * Specifies which DOM element in the form should be focused.
   */
  selectorPrimaryFocus: PropTypes.node.isRequired,

  /**
   * The subtitle of the CreateModal is optional and serves to provide more information about the modal.
   */
  subtitle: PropTypes.node,

  /**
   * The title of the CreateModal is usually the product or service name.
   */
  title: PropTypes.node.isRequired
};
CreateModal.displayName = componentName;
CreateModal.defaultProps = {
  disableSubmit: false
};