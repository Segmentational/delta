import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";

var _excluded = [
    "className",
    "data",
    "daysAgoText",
    "dismissAllLabel",
    "dismissSingleNotificationIconDescription",
    "doNotDisturbDefaultToggled",
    "doNotDisturbLabel",
    "emptyStateLabel",
    "hoursAgoText",
    "hourAgoText",
    "minuteAgoText",
    "minutesAgoText",
    "monthsAgoText",
    "monthAgoText",
    "nowText",
    "onClickOutside",
    "onDismissAllNotifications",
    "onDismissSingleNotification",
    "onDoNotDisturbChange",
    "onSettingsClick",
    "onViewAllClick",
    "open",
    "previousLabel",
    "readLessLabel",
    "readMoreLabel",
    "secondsAgoText",
    "settingsIconDescription",
    "title",
    "todayLabel",
    "viewAllLabel",
    "yearsAgoText",
    "yearAgoText",
    "yesterdayAtText",
    "yesterdayLabel"
];

/**
 * Copyright IBM Corp. 2020, 2021
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
// Import portions of React that are needed.
import React, { useEffect, useState, useRef } from "react"; // Other standard imports.

import PropTypes from "prop-types";
import cx from "classnames";
import { getDevtoolsProps } from "../../global/js/utils/devtools";
import { useClickOutside } from "../../global/js/hooks";
import { pkg } from "../../settings";
import { timeAgo } from "./utils";
import { NotificationsEmptyState } from "../EmptyStates/NotificationsEmptyState"; // Carbon and package components we use.

import { Button, Link, Toggle } from "carbon-components-react";
import { ErrorFilled16, WarningAltFilled16, CheckmarkFilled16, InformationSquareFilled16, ChevronDown16, Close16, Settings16 } from "@carbon/icons-react"; // The block part of our conventional BEM class names (blockClass__E--M).

var componentName = "NotificationsPanel";
var blockClass = "".concat(pkg.prefix, "--notifications-panel");
export var NotificationsPanel = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
    var className = _ref.className,
        data = _ref.data,
        daysAgoText = _ref.daysAgoText,
        dismissAllLabel = _ref.dismissAllLabel,
        dismissSingleNotificationIconDescription = _ref.dismissSingleNotificationIconDescription,
        doNotDisturbDefaultToggled = _ref.doNotDisturbDefaultToggled,
        doNotDisturbLabel = _ref.doNotDisturbLabel,
        emptyStateLabel = _ref.emptyStateLabel,
        hoursAgoText = _ref.hoursAgoText,
        hourAgoText = _ref.hourAgoText,
        minuteAgoText = _ref.minuteAgoText,
        minutesAgoText = _ref.minutesAgoText,
        monthsAgoText = _ref.monthsAgoText,
        monthAgoText = _ref.monthAgoText,
        nowText = _ref.nowText,
        onClickOutside = _ref.onClickOutside,
        onDismissAllNotifications = _ref.onDismissAllNotifications,
        onDismissSingleNotification = _ref.onDismissSingleNotification,
        onDoNotDisturbChange = _ref.onDoNotDisturbChange,
        onSettingsClick = _ref.onSettingsClick,
        onViewAllClick = _ref.onViewAllClick,
        open = _ref.open,
        previousLabel = _ref.previousLabel,
        readLessLabel = _ref.readLessLabel,
        readMoreLabel = _ref.readMoreLabel,
        secondsAgoText = _ref.secondsAgoText,
        settingsIconDescription = _ref.settingsIconDescription,
        title = _ref.title,
        todayLabel = _ref.todayLabel,
        viewAllLabel = _ref.viewAllLabel,
        yearsAgoText = _ref.yearsAgoText,
        yearAgoText = _ref.yearAgoText,
        yesterdayAtText = _ref.yesterdayAtText,
        yesterdayLabel = _ref.yesterdayLabel,
        rest = _objectWithoutProperties(_ref, _excluded);

    var notificationPanelRef = useRef();

    var _useState = useState(open),
        _useState2 = _slicedToArray(_useState, 2),
        shouldRender = _useState2[0],
        setRender = _useState2[1];

    var _useState3 = useState([]),
        _useState4 = _slicedToArray(_useState3, 2),
        allNotifications = _useState4[0],
        setAllNotifications = _useState4[1];

    useEffect(function () {
        // Set the notifications passed to the state within this component
        setAllNotifications(data);
    }, [ data ]);
    useClickOutside(ref || notificationPanelRef, function () {
        onClickOutside();
    });
    useEffect(function () {
        // initialize the notification panel to open
        if ( open ) {
            setRender(true);
        }
    }, [ open ]);

    var onAnimationEnd = function onAnimationEnd() {
        // initialize the notification panel to close
        !open && setRender(false);
    };

    var sortChronologically = function sortChronologically(arr) {
        if ( !arr || arr && !arr.length ) {
            return;
        }

        return arr.sort(function (a, b) {
            return b.timestamp - a.timestamp;
        });
    }; // Notifications should be grouped by "Today", "Yesterday", and "Previous", the variables
    // below filter the notifications based on those conditions and then render them in those groups

    var yesterdayDate = new Date();
    yesterdayDate = new Date(yesterdayDate.setDate(yesterdayDate.getDate() - 1));
    var dayBeforeYesterdayDate = new Date();
    dayBeforeYesterdayDate = new Date(dayBeforeYesterdayDate.setDate(dayBeforeYesterdayDate.getDate() - 2));
    var withinLastDayNotifications = allNotifications && allNotifications.length && allNotifications.filter(function (item) {
        return item.timestamp.getTime() >= yesterdayDate.getTime();
    });
    withinLastDayNotifications = sortChronologically(withinLastDayNotifications);
    var previousDayNotifications = allNotifications && allNotifications.length && allNotifications.filter(function (item) {
        return item.timestamp.getTime() < yesterdayDate.getTime() && item.timestamp.getTime() >= dayBeforeYesterdayDate.getTime();
    });
    previousDayNotifications = sortChronologically(previousDayNotifications);
    var previousNotifications = allNotifications && allNotifications.length && allNotifications.filter(function (item) {
        return item.timestamp.getTime() < dayBeforeYesterdayDate.getTime();
    });
    previousNotifications = sortChronologically(previousNotifications);

    var renderDescription = function renderDescription(id) {
        var _ref2, _ref3;

        var notification = allNotifications && allNotifications.length && allNotifications.filter(function (item) {
            return item.id === id;
        })[0];
        var trimLength = 88;
        var description = notification.description;
        var descriptionClassName = cx([
            "".concat(blockClass, "__notification-description"),
            (
                _ref2 = {}, _defineProperty(_ref2, "".concat(blockClass, "__notification-long-description"), notification.showAll), _defineProperty(_ref2, "".concat(blockClass, "__notification-short-description"), !notification.showAll), _ref2
            )
        ]);
        var showMoreButtonClassName = cx([
            (
                _ref3 = {}, _defineProperty(_ref3, "".concat(blockClass, "__notification-read-less-button"), notification.showAll), _defineProperty(_ref3, "".concat(blockClass, "__notification-read-more-button"), !notification.showAll), _ref3
            )
        ]);
        return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
            className: descriptionClassName
        }, description), description.length > trimLength && /*#__PURE__*/React.createElement(Button, {
            kind: "ghost",
            size: "small",
            renderIcon: ChevronDown16,
            iconDescription: notification.showAll ? readLessLabel : readMoreLabel,
            onClick: function onClick(event) {
                event.preventDefault();
                event.stopPropagation();
                var newData = allNotifications.map(function (item) {
                    if ( item.id === notification.id ) {
                        return Object.assign({}, item, {
                            showAll: !item.showAll
                        });
                    }

                    return item;
                });
                setAllNotifications(newData);
            },
            className: showMoreButtonClassName
        }, notification.showAll ? readLessLabel : readMoreLabel));
    };

    var renderNotification = function renderNotification(group, notification, index) {
        var notificationClassName = cx([ "".concat(blockClass, "__notification"), "".concat(blockClass, "__notification-").concat(group) ]);
        var notificationHeaderClassName = cx([
            "".concat(blockClass, "__notification-title"),
            _defineProperty({}, "".concat(blockClass, "__notification-title-unread"), notification.unread)
        ]);
        return /*#__PURE__*/React.createElement("div", {
            "aria-label": notification.title,
            key: "".concat(notification.timestamp, "-").concat(notification.title, "-").concat(index),
            className: notificationClassName,
            type: "button",
            role: "button",
            tabIndex: 0,
            onClick: function onClick() {
                return notification.onNotificationClick(notification);
            },
            onKeyDown: function onKeyDown(event) {
                if ( event.target.classList.contains("".concat(blockClass, "__dismiss-single-button")) ) {
                    return;
                }

                event.which === 13 && notification.onNotificationClick(notification);
            }
        }, notification.type === "error" && /*#__PURE__*/React.createElement(ErrorFilled16, {
            className: cx([ "".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-error") ])
        }), notification.type === "success" && /*#__PURE__*/React.createElement(CheckmarkFilled16, {
            className: cx([ "".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-success") ])
        }), notification.type === "warning" && /*#__PURE__*/React.createElement(WarningAltFilled16, {
            className: cx([ "".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-warning") ])
        }), notification.type === "informational" && /*#__PURE__*/React.createElement(InformationSquareFilled16, {
            className: cx([ "".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-informational") ])
        }), /*#__PURE__*/React.createElement("div", {
            className: "".concat(blockClass, "__notification-content")
        }, /*#__PURE__*/React.createElement("p", {
            className: "".concat(blockClass, "__notification-time-label")
        }, timeAgo({
            previousTime: notification.timestamp,
            secondsAgoText: secondsAgoText,
            minuteAgoText: minuteAgoText,
            minutesAgoText: minutesAgoText,
            hoursAgoText: hoursAgoText,
            hourAgoText: hourAgoText,
            daysAgoText: daysAgoText,
            yesterdayAtText: yesterdayAtText,
            monthsAgoText: monthsAgoText,
            monthAgoText: monthAgoText,
            yearsAgoText: yearsAgoText,
            yearAgoText: yearAgoText,
            nowText: nowText
        })), /*#__PURE__*/React.createElement("h6", {
            className: notificationHeaderClassName
        }, notification.title), notification.description && notification.description.length && renderDescription(notification.id), notification.link && notification.link.text && notification.link.url && /*#__PURE__*/React.createElement(Link, {
            href: notification.link.url,
            className: "".concat(blockClass, "__notifications-link")
        }, notification.link.text)), /*#__PURE__*/React.createElement(Button, {
            kind: "ghost",
            size: "small",
            renderIcon: Close16,
            iconDescription: dismissSingleNotificationIconDescription,
            tooltipPosition: "left",
            className: "".concat(blockClass, "__dismiss-single-button"),
            onClick: function onClick(event) {
                return dismissSingleNotification(event, notification);
            }
        }));
    };

    var dismissSingleNotification = function dismissSingleNotification(event, notification) {
        event.preventDefault();
        event.stopPropagation();
        onDismissSingleNotification(notification);
    };

    var mainSectionClassName = cx([
        "".concat(blockClass, "__main-section"),
        _defineProperty({}, "".concat(blockClass, "__main-section-empty"), allNotifications && !allNotifications.length)
    ]);
    return shouldRender ? /*#__PURE__*/React.createElement("div", _extends({}, rest, {
        id: blockClass,
        className: cx(blockClass, className, "".concat(blockClass, "__container")),
        style: {
            animation: "".concat(open ? "fadeIn 250ms" : "fadeOut 250ms")
        },
        onAnimationEnd: onAnimationEnd,
        ref: ref || notificationPanelRef
    }, getDevtoolsProps(componentName)), /*#__PURE__*/React.createElement("div", {
        className: "".concat(blockClass, "__header-container")
    }, /*#__PURE__*/React.createElement("div", {
        className: "".concat(blockClass, "__header-flex")
    }, /*#__PURE__*/React.createElement("h1", {
        className: "".concat(blockClass, "__header")
    }, title), /*#__PURE__*/React.createElement(Button, {
        size: "small",
        kind: "ghost",
        className: "".concat(blockClass, "__dismiss-button"),
        onClick: function onClick() {
            return onDismissAllNotifications();
        }
    }, dismissAllLabel)), /*#__PURE__*/React.createElement(Toggle, {
        size: "sm",
        className: "".concat(blockClass, "__do-not-disturb-toggle"),
        id: "".concat(blockClass, "__do-not-disturb-toggle-component"),
        labelA: doNotDisturbLabel,
        labelB: doNotDisturbLabel,
        labelText: "Toggle Notifications",
        onToggle: function onToggle(event) {
            return onDoNotDisturbChange(event);
        },
        defaultToggled: doNotDisturbDefaultToggled,
        "aria-label": doNotDisturbLabel
    })), /*#__PURE__*/React.createElement("div", {
        className: mainSectionClassName
    }, withinLastDayNotifications && withinLastDayNotifications.length
        ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h6", {
            className: "".concat(blockClass, "__time-section-label")
        }, todayLabel), withinLastDayNotifications.map(function (notification, index) {
            return renderNotification("today", notification, index);
        }))
        : null, previousDayNotifications && previousDayNotifications.length
        ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h6", {
            className: "".concat(blockClass, "__time-section-label")
        }, yesterdayLabel), previousDayNotifications.map(function (notification, index) {
            return renderNotification("yesterday", notification, index);
        }))
        : null, previousNotifications && previousNotifications.length
        ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h6", {
            className: "".concat(blockClass, "__time-section-label")
        }, previousLabel), previousNotifications.map(function (notification, index) {
            return renderNotification("previous", notification, index);
        }))
        : null, !allNotifications.length && /*#__PURE__*/React.createElement(NotificationsEmptyState, {
        illustrationTheme: "dark",
        title: "",
        subtitle: emptyStateLabel
    })), onViewAllClick && onSettingsClick && allNotifications && allNotifications.length ? /*#__PURE__*/React.createElement("div", {
        className: "".concat(blockClass, "__bottom-actions")
    }, /*#__PURE__*/React.createElement(Button, {
        kind: "ghost",
        className: "".concat(blockClass, "__view-all-button"),
        onClick: function onClick() {
            return onViewAllClick();
        }
    }, viewAllLabel(allNotifications.length)), /*#__PURE__*/React.createElement(Button, {
        kind: "ghost",
        size: "small",
        className: "".concat(blockClass, "__settings-button"),
        renderIcon: Settings16,
        iconDescription: settingsIconDescription,
        onClick: function onClick() {
            return onSettingsClick();
        }
    })) : null) : null;
}); // Return a placeholder if not released and not enabled by feature flag

NotificationsPanel = pkg.checkComponentEnabled(NotificationsPanel, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

NotificationsPanel.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

NotificationsPanel.propTypes = {
    /**
     * Provide an optional class to be applied to the containing node.
     */
    className: PropTypes.string,

    /**
     * Array of data for Notifications component to render
     */
    data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]),
        type: PropTypes.oneOf([ "error", "warning", "success", "informational" ]),
        timestamp: PropTypes.instanceOf(Date),
        title: PropTypes.string,
        description: PropTypes.string,
        link: PropTypes.shape({
            url: PropTypes.string,
            text: PropTypes.string
        }),
        unread: PropTypes.bool,
        onNotificationClick: PropTypes.func
    })).isRequired,

    /**
     * Sets the `days ago` label text
     */
    daysAgoText: PropTypes.func,

    /**
     * Label for Dismiss all button
     */
    dismissAllLabel: PropTypes.string,

    /**
     * Label for Dismiss single notification icon button
     */
    dismissSingleNotificationIconDescription: PropTypes.string,

    /**
     * Determines if the `Do not disturb` toggle is on or off when the component is rendered
     */
    doNotDisturbDefaultToggled: PropTypes.bool,

    /**
     * Label for Do not disturb toggle
     */
    doNotDisturbLabel: PropTypes.string,

    /**
     * Sets the empty state label text when there are no notifications
     */
    emptyStateLabel: PropTypes.string,

    /**
     * Sets the `hour ago` label text
     */
    hourAgoText: PropTypes.func,

    /**
     * Sets the `hours ago` label text
     */
    hoursAgoText: PropTypes.func,

    /**
     * Sets the `minute ago` label text
     */
    minuteAgoText: PropTypes.func,

    /**
     * Sets the `minutes ago` label text
     */
    minutesAgoText: PropTypes.func,

    /**
     * Sets the `month ago` label text
     */
    monthAgoText: PropTypes.func,

    /**
     * Sets the `months ago` label text
     */
    monthsAgoText: PropTypes.func,

    /**
     * Sets the `now` label text
     */
    nowText: PropTypes.string,

    /**
     * Sets the notifications panel open state
     */
    onClickOutside: PropTypes.func.isRequired,

    /**
     * Function that will dismiss all notifications
     */
    onDismissAllNotifications: PropTypes.func.isRequired,

    /**
     * Function that will dismiss a single notification
     */
    onDismissSingleNotification: PropTypes.func.isRequired,

    /**
     * Function that returns the current selected value of the disable notification toggle
     */
    onDoNotDisturbChange: PropTypes.func,

    /**
     * Event handler for the View all button
     */
    onSettingsClick: PropTypes.func,

    /**
     * Event handler for the View all button
     */
    onViewAllClick: PropTypes.func,

    /**
     * Determines whether the notifications panel should render or not
     */
    open: PropTypes.bool.isRequired,

    /**
     * Sets the previous label text
     */
    previousLabel: PropTypes.string,

    /**
     * Sets the `read less` label text
     */
    readLessLabel: PropTypes.string,

    /**
     * Sets the `read more` label text
     */
    readMoreLabel: PropTypes.string,

    /**
     * Sets the `seconds ago` label text
     */
    secondsAgoText: PropTypes.func,

    /**
     * Sets the settings icon description text
     */
    settingsIconDescription: PropTypes.string,

    /**
     * Sets the title for the Notifications panel
     */
    title: PropTypes.string,

    /**
     * Sets the today label text
     */
    todayLabel: PropTypes.string,

    /**
     * Sets the View all button text
     */
    viewAllLabel: PropTypes.func,

    /**
     * Sets the `year ago` label text
     */
    yearAgoText: PropTypes.func,

    /**
     * Sets the `years ago` label text
     */
    yearsAgoText: PropTypes.func,

    /**
     * Sets the `Yesterday at` label text
     */
    yesterdayAtText: PropTypes.func,

    /**
     * Sets the yesterday label text
     */
    yesterdayLabel: PropTypes.string
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

NotificationsPanel.defaultProps = {
    daysAgoText: function daysAgoText(value) {
        return "".concat(value, " days ago");
    },
    dismissAllLabel: "Dismiss all",
    dismissSingleNotificationIconDescription: "Dismiss",
    doNotDisturbLabel: "Do not disturb",
    emptyStateLabel: "You do not have any notifications",
    hourAgoText: function hourAgoText(value) {
        return "".concat(value, " hour ago");
    },
    hoursAgoText: function hoursAgoText(value) {
        return "".concat(value, " hours ago");
    },
    minuteAgoText: function minuteAgoText(value) {
        return "".concat(value, " minute ago");
    },
    minutesAgoText: function minutesAgoText(value) {
        return "".concat(value, " minutes ago");
    },
    monthAgoText: function monthAgoText(value) {
        return "".concat(value, " month ago");
    },
    monthsAgoText: function monthsAgoText(value) {
        return "".concat(value, " months ago");
    },
    nowText: "Now",
    onDismissAllNotifications: function onDismissAllNotifications() {},
    onDismissSingleNotification: function onDismissSingleNotification() {},
    previousLabel: "Previous",
    readLessLabel: "Read less",
    readMoreLabel: "Read more",
    secondsAgoText: function secondsAgoText(value) {
        return "".concat(value, " seconds ago");
    },
    settingsIconDescription: "Settings",
    title: "Notifications",
    todayLabel: "Today",
    viewAllLabel: function viewAllLabel(value) {
        return "View all (".concat(value, ")");
    },
    yearsAgoText: function yearsAgoText(value) {
        return "".concat(value, " years ago");
    },
    yearAgoText: function yearAgoText(value) {
        return "".concat(value, " year ago");
    },
    yesterdayLabel: "Yesterday",
    yesterdayAtText: function yesterdayAtText(value) {
        return "Yesterday at ".concat(value);
    }
};
