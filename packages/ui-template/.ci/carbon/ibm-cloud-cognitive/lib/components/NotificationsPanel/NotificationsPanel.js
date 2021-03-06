"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NotificationsPanel = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _devtools = require("../../global/js/utils/devtools");

var _hooks = require("../../global/js/hooks");

var _settings = require("../../settings");

var _utils = require("./utils");

var _NotificationsEmptyState = require("../EmptyStates/NotificationsEmptyState");

var _carbonComponentsReact = require("carbon-components-react");

var _iconsReact = require("@carbon/icons-react");

var _excluded = ["className", "data", "daysAgoText", "dismissAllLabel", "dismissSingleNotificationIconDescription", "doNotDisturbDefaultToggled", "doNotDisturbLabel", "emptyStateLabel", "hoursAgoText", "hourAgoText", "minuteAgoText", "minutesAgoText", "monthsAgoText", "monthAgoText", "nowText", "onClickOutside", "onDismissAllNotifications", "onDismissSingleNotification", "onDoNotDisturbChange", "onSettingsClick", "onViewAllClick", "open", "previousLabel", "readLessLabel", "readMoreLabel", "secondsAgoText", "settingsIconDescription", "title", "todayLabel", "viewAllLabel", "yearsAgoText", "yearAgoText", "yesterdayAtText", "yesterdayLabel"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// The block part of our conventional BEM class names (blockClass__E--M).
var componentName = 'NotificationsPanel';
var blockClass = "".concat(_settings.pkg.prefix, "--notifications-panel");

var NotificationsPanel = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
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
      rest = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var notificationPanelRef = (0, _react.useRef)();

  var _useState = (0, _react.useState)(open),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      shouldRender = _useState2[0],
      setRender = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      allNotifications = _useState4[0],
      setAllNotifications = _useState4[1];

  (0, _react.useEffect)(function () {
    // Set the notifications passed to the state within this component
    setAllNotifications(data);
  }, [data]);
  (0, _hooks.useClickOutside)(ref || notificationPanelRef, function () {
    onClickOutside();
  });
  (0, _react.useEffect)(function () {
    // initialize the notification panel to open
    if (open) {
      setRender(true);
    }
  }, [open]);

  var onAnimationEnd = function onAnimationEnd() {
    // initialize the notification panel to close
    !open && setRender(false);
  };

  var sortChronologically = function sortChronologically(arr) {
    if (!arr || arr && !arr.length) {
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
    var descriptionClassName = (0, _classnames.default)(["".concat(blockClass, "__notification-description"), (_ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(blockClass, "__notification-long-description"), notification.showAll), (0, _defineProperty2.default)(_ref2, "".concat(blockClass, "__notification-short-description"), !notification.showAll), _ref2)]);
    var showMoreButtonClassName = (0, _classnames.default)([(_ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(blockClass, "__notification-read-less-button"), notification.showAll), (0, _defineProperty2.default)(_ref3, "".concat(blockClass, "__notification-read-more-button"), !notification.showAll), _ref3)]);
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", {
      className: descriptionClassName
    }, description), description.length > trimLength && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
      kind: "ghost",
      size: "small",
      renderIcon: _iconsReact.ChevronDown16,
      iconDescription: notification.showAll ? readLessLabel : readMoreLabel,
      onClick: function onClick(event) {
        event.preventDefault();
        event.stopPropagation();
        var newData = allNotifications.map(function (item) {
          if (item.id === notification.id) {
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
    var notificationClassName = (0, _classnames.default)(["".concat(blockClass, "__notification"), "".concat(blockClass, "__notification-").concat(group)]);
    var notificationHeaderClassName = (0, _classnames.default)(["".concat(blockClass, "__notification-title"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__notification-title-unread"), notification.unread)]);
    return /*#__PURE__*/_react.default.createElement("div", {
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
        if (event.target.classList.contains("".concat(blockClass, "__dismiss-single-button"))) {
          return;
        }

        event.which === 13 && notification.onNotificationClick(notification);
      }
    }, notification.type === 'error' && /*#__PURE__*/_react.default.createElement(_iconsReact.ErrorFilled16, {
      className: (0, _classnames.default)(["".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-error")])
    }), notification.type === 'success' && /*#__PURE__*/_react.default.createElement(_iconsReact.CheckmarkFilled16, {
      className: (0, _classnames.default)(["".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-success")])
    }), notification.type === 'warning' && /*#__PURE__*/_react.default.createElement(_iconsReact.WarningAltFilled16, {
      className: (0, _classnames.default)(["".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-warning")])
    }), notification.type === 'informational' && /*#__PURE__*/_react.default.createElement(_iconsReact.InformationSquareFilled16, {
      className: (0, _classnames.default)(["".concat(blockClass, "__notification-status-icon"), "".concat(blockClass, "__notification-status-icon-informational")])
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "".concat(blockClass, "__notification-content")
    }, /*#__PURE__*/_react.default.createElement("p", {
      className: "".concat(blockClass, "__notification-time-label")
    }, (0, _utils.timeAgo)({
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
    })), /*#__PURE__*/_react.default.createElement("h6", {
      className: notificationHeaderClassName
    }, notification.title), notification.description && notification.description.length && renderDescription(notification.id), notification.link && notification.link.text && notification.link.url && /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Link, {
      href: notification.link.url,
      className: "".concat(blockClass, "__notifications-link")
    }, notification.link.text)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
      kind: "ghost",
      size: "small",
      renderIcon: _iconsReact.Close16,
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

  var mainSectionClassName = (0, _classnames.default)(["".concat(blockClass, "__main-section"), (0, _defineProperty2.default)({}, "".concat(blockClass, "__main-section-empty"), allNotifications && !allNotifications.length)]);
  return shouldRender ? /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    id: blockClass,
    className: (0, _classnames.default)(blockClass, className, "".concat(blockClass, "__container")),
    style: {
      animation: "".concat(open ? 'fadeIn 250ms' : 'fadeOut 250ms')
    },
    onAnimationEnd: onAnimationEnd,
    ref: ref || notificationPanelRef
  }, (0, _devtools.getDevtoolsProps)(componentName)), /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__header-container")
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__header-flex")
  }, /*#__PURE__*/_react.default.createElement("h1", {
    className: "".concat(blockClass, "__header")
  }, title), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    size: "small",
    kind: "ghost",
    className: "".concat(blockClass, "__dismiss-button"),
    onClick: function onClick() {
      return onDismissAllNotifications();
    }
  }, dismissAllLabel)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Toggle, {
    size: "sm",
    className: "".concat(blockClass, "__do-not-disturb-toggle"),
    id: "".concat(blockClass, "__do-not-disturb-toggle-component"),
    labelA: doNotDisturbLabel,
    labelB: doNotDisturbLabel,
    onToggle: function onToggle(event) {
      return onDoNotDisturbChange(event);
    },
    defaultToggled: doNotDisturbDefaultToggled,
    "aria-label": doNotDisturbLabel
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: mainSectionClassName
  }, withinLastDayNotifications && withinLastDayNotifications.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h6", {
    className: "".concat(blockClass, "__time-section-label")
  }, todayLabel), withinLastDayNotifications.map(function (notification, index) {
    return renderNotification('today', notification, index);
  })) : null, previousDayNotifications && previousDayNotifications.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h6", {
    className: "".concat(blockClass, "__time-section-label")
  }, yesterdayLabel), previousDayNotifications.map(function (notification, index) {
    return renderNotification('yesterday', notification, index);
  })) : null, previousNotifications && previousNotifications.length ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("h6", {
    className: "".concat(blockClass, "__time-section-label")
  }, previousLabel), previousNotifications.map(function (notification, index) {
    return renderNotification('previous', notification, index);
  })) : null, !allNotifications.length && /*#__PURE__*/_react.default.createElement(_NotificationsEmptyState.NotificationsEmptyState, {
    illustrationTheme: "dark",
    title: "",
    subtitle: emptyStateLabel
  })), onViewAllClick && onSettingsClick && allNotifications && allNotifications.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: "".concat(blockClass, "__bottom-actions")
  }, /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    kind: "ghost",
    className: "".concat(blockClass, "__view-all-button"),
    onClick: function onClick() {
      return onViewAllClick();
    }
  }, viewAllLabel(allNotifications.length)), /*#__PURE__*/_react.default.createElement(_carbonComponentsReact.Button, {
    kind: "ghost",
    size: "small",
    className: "".concat(blockClass, "__settings-button"),
    renderIcon: _iconsReact.Settings16,
    iconDescription: settingsIconDescription,
    onClick: function onClick() {
      return onSettingsClick();
    }
  })) : null) : null;
}); // Return a placeholder if not released and not enabled by feature flag


exports.NotificationsPanel = NotificationsPanel;
exports.NotificationsPanel = NotificationsPanel = _settings.pkg.checkComponentEnabled(NotificationsPanel, componentName); // The display name of the component, used by React. Note that displayName
// is used in preference to relying on function.name.

NotificationsPanel.displayName = componentName; // The types and DocGen commentary for the component props,
// in alphabetical order (for consistency).
// See https://www.npmjs.com/package/prop-types#usage.

NotificationsPanel.propTypes = {
  /**
   * Provide an optional class to be applied to the containing node.
   */
  className: _propTypes.default.string,

  /**
   * Array of data for Notifications component to render
   */
  data: _propTypes.default.arrayOf(_propTypes.default.shape({
    id: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    type: _propTypes.default.oneOf(['error', 'warning', 'success', 'informational']),
    timestamp: _propTypes.default.instanceOf(Date),
    title: _propTypes.default.string,
    description: _propTypes.default.string,
    link: _propTypes.default.shape({
      url: _propTypes.default.string,
      text: _propTypes.default.string
    }),
    unread: _propTypes.default.bool,
    onNotificationClick: _propTypes.default.func
  })).isRequired,

  /**
   * Sets the `days ago` label text
   */
  daysAgoText: _propTypes.default.func,

  /**
   * Label for Dismiss all button
   */
  dismissAllLabel: _propTypes.default.string,

  /**
   * Label for Dismiss single notification icon button
   */
  dismissSingleNotificationIconDescription: _propTypes.default.string,

  /**
   * Determines if the `Do not disturb` toggle is on or off when the component is rendered
   */
  doNotDisturbDefaultToggled: _propTypes.default.bool,

  /**
   * Label for Do not disturb toggle
   */
  doNotDisturbLabel: _propTypes.default.string,

  /**
   * Sets the empty state label text when there are no notifications
   */
  emptyStateLabel: _propTypes.default.string,

  /**
   * Sets the `hour ago` label text
   */
  hourAgoText: _propTypes.default.func,

  /**
   * Sets the `hours ago` label text
   */
  hoursAgoText: _propTypes.default.func,

  /**
   * Sets the `minute ago` label text
   */
  minuteAgoText: _propTypes.default.func,

  /**
   * Sets the `minutes ago` label text
   */
  minutesAgoText: _propTypes.default.func,

  /**
   * Sets the `month ago` label text
   */
  monthAgoText: _propTypes.default.func,

  /**
   * Sets the `months ago` label text
   */
  monthsAgoText: _propTypes.default.func,

  /**
   * Sets the `now` label text
   */
  nowText: _propTypes.default.string,

  /**
   * Sets the notifications panel open state
   */
  onClickOutside: _propTypes.default.func.isRequired,

  /**
   * Function that will dismiss all notifications
   */
  onDismissAllNotifications: _propTypes.default.func.isRequired,

  /**
   * Function that will dismiss a single notification
   */
  onDismissSingleNotification: _propTypes.default.func.isRequired,

  /**
   * Function that returns the current selected value of the disable notification toggle
   */
  onDoNotDisturbChange: _propTypes.default.func,

  /**
   * Event handler for the View all button
   */
  onSettingsClick: _propTypes.default.func,

  /**
   * Event handler for the View all button
   */
  onViewAllClick: _propTypes.default.func,

  /**
   * Determines whether the notifications panel should render or not
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Sets the previous label text
   */
  previousLabel: _propTypes.default.string,

  /**
   * Sets the `read less` label text
   */
  readLessLabel: _propTypes.default.string,

  /**
   * Sets the `read more` label text
   */
  readMoreLabel: _propTypes.default.string,

  /**
   * Sets the `seconds ago` label text
   */
  secondsAgoText: _propTypes.default.func,

  /**
   * Sets the settings icon description text
   */
  settingsIconDescription: _propTypes.default.string,

  /**
   * Sets the title for the Notifications panel
   */
  title: _propTypes.default.string,

  /**
   * Sets the today label text
   */
  todayLabel: _propTypes.default.string,

  /**
   * Sets the View all button text
   */
  viewAllLabel: _propTypes.default.func,

  /**
   * Sets the `year ago` label text
   */
  yearAgoText: _propTypes.default.func,

  /**
   * Sets the `years ago` label text
   */
  yearsAgoText: _propTypes.default.func,

  /**
   * Sets the `Yesterday at` label text
   */
  yesterdayAtText: _propTypes.default.func,

  /**
   * Sets the yesterday label text
   */
  yesterdayLabel: _propTypes.default.string
}; // Default values for component props. Default values are not required for
// props that are required, nor for props where the component can apply
// 'undefined' values reasonably. Default values should be provided when the
// component needs to make a choice or assumption when a prop is not supplied.

NotificationsPanel.defaultProps = {
  daysAgoText: function daysAgoText(value) {
    return "".concat(value, " days ago");
  },
  dismissAllLabel: 'Dismiss all',
  dismissSingleNotificationIconDescription: 'Dismiss',
  doNotDisturbLabel: 'Do not disturb',
  emptyStateLabel: 'You do not have any notifications',
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
  nowText: 'Now',
  onDismissAllNotifications: function onDismissAllNotifications() {},
  onDismissSingleNotification: function onDismissSingleNotification() {},
  previousLabel: 'Previous',
  readLessLabel: 'Read less',
  readMoreLabel: 'Read more',
  secondsAgoText: function secondsAgoText(value) {
    return "".concat(value, " seconds ago");
  },
  settingsIconDescription: 'Settings',
  title: 'Notifications',
  todayLabel: 'Today',
  viewAllLabel: function viewAllLabel(value) {
    return "View all (".concat(value, ")");
  },
  yearsAgoText: function yearsAgoText(value) {
    return "".concat(value, " years ago");
  },
  yearAgoText: function yearAgoText(value) {
    return "".concat(value, " year ago");
  },
  yesterdayLabel: 'Yesterday',
  yesterdayAtText: function yesterdayAtText(value) {
    return "Yesterday at ".concat(value);
  }
};