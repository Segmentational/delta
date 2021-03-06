"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectorTabbable = exports.selectorFocusable = exports.DOCUMENT_POSITION_BROAD_PRECEDING = exports.DOCUMENT_POSITION_BROAD_FOLLOWING = void 0;

/**
 * Copyright IBM Corp. 2016, 2018
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Various utilities to help with a11y work
 */

/**
 * A flag `node.compareDocumentPosition(target)` returns,
 * that indicates `target` is located earlier than `node` in the document or `target` contains `node`.
 */
var DOCUMENT_POSITION_BROAD_PRECEDING = // Checks `typeof Node` for `react-docgen`
typeof Node !== 'undefined' && Node.DOCUMENT_POSITION_PRECEDING | Node.DOCUMENT_POSITION_CONTAINS;
/**
 * A flag `node.compareDocumentPosition(target)` returns,
 * that indicates `target` is located later than `node` in the document or `node` contains `target`.
 */

exports.DOCUMENT_POSITION_BROAD_PRECEDING = DOCUMENT_POSITION_BROAD_PRECEDING;
var DOCUMENT_POSITION_BROAD_FOLLOWING = // Checks `typeof Node` for `react-docgen`
typeof Node !== 'undefined' && Node.DOCUMENT_POSITION_FOLLOWING | Node.DOCUMENT_POSITION_CONTAINED_BY;
/**
 * CSS selector that selects major nodes that are sequential-focusable.
 */

exports.DOCUMENT_POSITION_BROAD_FOLLOWING = DOCUMENT_POSITION_BROAD_FOLLOWING;
var selectorTabbable = "\n  a[href], area[href], input:not([disabled]):not([tabindex='-1']),\n  button:not([disabled]):not([tabindex='-1']),select:not([disabled]):not([tabindex='-1']),\n  textarea:not([disabled]):not([tabindex='-1']),\n  iframe, object, embed, *[tabindex]:not([tabindex='-1']):not([disabled]), *[contenteditable=true]\n";
/**
 * CSS selector that selects major nodes that are click focusable
 */

exports.selectorTabbable = selectorTabbable;
var selectorFocusable = "\n  a[href], area[href], input:not([disabled]),\n  button:not([disabled]),select:not([disabled]),\n  textarea:not([disabled]),\n  iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable=true]\n";
exports.selectorFocusable = selectorFocusable;