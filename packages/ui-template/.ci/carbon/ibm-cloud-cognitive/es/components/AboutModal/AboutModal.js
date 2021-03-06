import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
var _excluded = ["additionalInfo", "className", "closeIconDescription", "content", "copyrightText", "legalText", "links", "logo", "onClose", "open", "title"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { useState, useRef, useEffect } from 'react';
import { useResizeDetector } from 'react-resize-detector'; // Other standard imports.

import PropTypes from 'prop-types';
import cx from 'classnames';
import { pkg } from '../../settings';
import uuidv4 from '../../global/js/utils/uuidv4';
import { getDevtoolsProps } from '../../global/js/utils/devtools'; // Carbon and package components we use.

import { ComposedModal, ModalHeader, ModalFooter, ModalBody, Tabs, Tab } from 'carbon-components-react'; // The block part of our conventional BEM class names (blockClass__E--M).

var blockClass = "".concat(pkg.prefix, "--about-modal");
var componentName = 'AboutModal'; // NOTE: the component SCSS is not imported here: it is rolled up separately.

/**
 * The AboutModal component provides a way to communicate product information
 * to users. It is triggered by a user???s action, appears on top of the main
 * page content, and is persistent until dismissed. The purpose of this modal
 * should be immediately apparent to the user, with a clear and obvious path
 * to completion.
 */

export var AboutModal = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var additionalInfo = _ref.additionalInfo,
      className = _ref.className,
      closeIconDescription = _ref.closeIconDescription,
      content = _ref.content,
      copyrightText = _ref.copyrightText,
      legalText = _ref.legalText,
      links = _ref.links,
      logo = _ref.logo,
      onClose = _ref.onClose,
      open = _ref.open,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      hasScrollingContent = _useState2[0],
      setHasScrollingContent = _useState2[1];

  var bodyRef = useRef();
  var contentRef = useRef();
  var contentId = uuidv4();

  var handleResize = function handleResize() {
    setHasScrollingContent( // if our scroll height exceeds the client height enable scrolling
    bodyRef.current.clientHeight < (hasScrollingContent ? // Carbon modal adds 32px bottom margin when scrolling content is enabled
    bodyRef.current.scrollHeight - 32 : bodyRef.current.scrollHeight));
  }; // We can't add a ref directly to the ModalBody, so track it in a ref
  // as the parent of the current bodyRef element


  useEffect(function () {
    bodyRef.current = contentRef.current.parentElement;
  }, [bodyRef]); // Detect resize of the ModalBody to recalculate whether scrolling is enabled

  useResizeDetector({
    onResize: handleResize,
    targetRef: bodyRef
  });
  return /*#__PURE__*/React.createElement(ComposedModal, _extends({}, rest, {
    className: cx(blockClass, // Apply the block class to the main HTML element
    className, // Apply any supplied class names to the main HTML element.
    _defineProperty({}, "".concat(blockClass, "--with-tabs"), additionalInfo && additionalInfo.length > 1))
  }, _objectSpread({
    onClose: onClose,
    open: open,
    ref: ref
  }, getDevtoolsProps(componentName))), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__logo")
  }, logo), /*#__PURE__*/React.createElement(ModalHeader, {
    className: "".concat(blockClass, "__header"),
    iconDescription: closeIconDescription,
    label: title,
    labelClassName: "".concat(blockClass, "__title")
  }), /*#__PURE__*/React.createElement(ModalBody, {
    "aria-label": hasScrollingContent ? '' : null,
    "aria-labelledby": hasScrollingContent ? contentId : null,
    className: "".concat(blockClass, "__body"),
    hasScrollingContent: hasScrollingContent
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__body-content"),
    ref: contentRef,
    id: contentId
  }, content, /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockClass, "__links-container")
  }, links && links.length > 0 && links.map(function (link, i) {
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, link);
  })), legalText && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__legal-text")
  }, legalText), copyrightText && /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__copyright-text")
  }, copyrightText))), /*#__PURE__*/React.createElement(ModalFooter, {
    className: "".concat(blockClass, "__footer")
  }, additionalInfo && additionalInfo.length > 0 && (additionalInfo.length === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__version-label")
  }, additionalInfo[0].label), /*#__PURE__*/React.createElement("p", {
    className: "".concat(blockClass, "__version-number")
  }, additionalInfo[0].content)) : /*#__PURE__*/React.createElement(Tabs, {
    className: "".concat(blockClass, "__tab-container")
  }, additionalInfo.map(function (tab, i) {
    return /*#__PURE__*/React.createElement(Tab, {
      id: 'about-modal-tab-' + tab.label,
      label: tab.label,
      key: i
    }, tab.content);
  })))));
}); // Return a placeholder if not released and not enabled by feature flag

AboutModal = pkg.checkComponentEnabled(AboutModal, componentName);
AboutModal.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

AboutModal.propTypes = {
  /**
   * Additional information to be displayed in the footer. Can be used for
   * version information and/or a set of tabs with various contents. If only
   * one set of additional information is provided then no tabs are
   * displayed and the label and content are just displayed one above the
   * other in the footer.
   */
  additionalInfo: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    content: PropTypes.node
  })),

  /**
   * Provide an optional class to be applied to the modal root node.
   */
  className: PropTypes.string,

  /**
   * The accessibility title for the close icon.
   */
  closeIconDescription: PropTypes.string.isRequired,

  /**
   * A summary that appears immediately beneath the title, and might
   * include information such as: version name, server name,
   * user name, user role, browser version, browser OS etc.
   */
  content: PropTypes.node.isRequired,

  /**
   * Trademark and copyright information. Suggested format for copyright -
   * "Copyright ?? 2018 Company".
   */
  copyrightText: PropTypes.node,

  /**
   * Text providing legal information.
   */
  legalText: PropTypes.node,

  /**
   * An array of Carbon `Link` components that contain links to additional
   * information.
   */
  links: PropTypes.arrayOf(PropTypes.element),

  /**
   * A visual symbol used to represent the product.
   */
  logo: PropTypes.node.isRequired,

  /**
   * Specifies an optional handler which is called when the AboutModal
   * is closed. Returning `false` prevents the AboutModal from closing.
   */
  onClose: PropTypes.func,

  /**
   * Specifies whether the AboutModal is open or not.
   */
  open: PropTypes.bool,

  /**
   * The title of the AboutModal is usually the product or service name.
   */
  title: PropTypes.node.isRequired
};