/**
 * Copyright IBM Corp. 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { DOCUMENT_POSITION_BROAD_PRECEDING, DOCUMENT_POSITION_BROAD_FOLLOWING, selectorTabbable } from './keyboardNavigation';
import { carbon } from '../../../settings';
/**
 * @param {Node} node A DOM node.
 * @param {string[]} selectorsFloatingMenus The CSS selectors that matches floating menus.
 * @returns {boolean} `true` of the given `node` is in a floating menu.
 */

function elementOrParentIsFloatingMenu(node) {
  var selectorsFloatingMenus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [".".concat(carbon.prefix, "--overflow-menu-options"), ".".concat(carbon.prefix, "--tooltip"), '.flatpickr-calendar'];

  if (node && typeof node.closest === 'function') {
    return selectorsFloatingMenus.some(function (selector) {
      return node.closest(selector);
    });
  }
}
/**
 * Ensures the focus is kept in the given `modalNode`, implementing "focus-wrap" behavior.
 * @param {object} options The options.
 * @param {Node} options.bodyNode The DOM node of the inner modal.
 * @param {Node} options.startTrapNode The DOM node of the focus sentinel the is placed earlier next to `modalNode`.
 * @param {Node} options.endTrapNode The DOM node of the focus sentinel the is placed next to `modalNode`.
 * @param {Node} options.currentActiveNode The DOM node that has focus.
 * @param {Node} options.oldActiveNode The DOM node that previously had focus.
 * @param {Node} [options.selectorsFloatingMenus] The CSS selectors that matches floating menus
 */


function wrapFocus(_ref) {
  var bodyNode = _ref.bodyNode,
      startTrapNode = _ref.startTrapNode,
      endTrapNode = _ref.endTrapNode,
      currentActiveNode = _ref.currentActiveNode,
      oldActiveNode = _ref.oldActiveNode,
      selectorsFloatingMenus = _ref.selectorsFloatingMenus;

  if (bodyNode && currentActiveNode && oldActiveNode && !bodyNode.contains(currentActiveNode) && !elementOrParentIsFloatingMenu(currentActiveNode, selectorsFloatingMenus)) {
    var comparisonResult = oldActiveNode.compareDocumentPosition(currentActiveNode);

    if (currentActiveNode === startTrapNode || comparisonResult & DOCUMENT_POSITION_BROAD_PRECEDING) {
      var arrayNodes = Array.from(bodyNode.querySelectorAll(selectorTabbable));
      arrayNodes.reverse();
      var tabbable = arrayNodes.find(function (elem) {
        return Boolean(elem.offsetParent);
      });

      if (tabbable) {
        tabbable.focus();
      } else if (bodyNode !== oldActiveNode) {
        bodyNode.focus();
      }
    } else if (currentActiveNode === endTrapNode || comparisonResult & DOCUMENT_POSITION_BROAD_FOLLOWING) {
      var _tabbable = Array.prototype.find.call(bodyNode.querySelectorAll(selectorTabbable), function (elem) {
        return Boolean(elem.offsetParent);
      });

      if (_tabbable) {
        _tabbable.focus();
      } else if (bodyNode !== oldActiveNode) {
        bodyNode.focus();
      }
    }
  }
}

export { elementOrParentIsFloatingMenu };
export default wrapFocus;