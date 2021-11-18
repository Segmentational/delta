import React, { useEffect, useState, useMemo, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  DatePicker,
  DatePickerInput,
  RadioButtonGroup,
  RadioButton,
  FormGroup,
  Select,
  SelectItem,
  NumberInput,
  TooltipDefinition,
  OrderedList,
  ListItem,
} from 'carbon-components-react';
import { Calendar16 } from '@carbon/icons-react';
import classnames from 'classnames';
import uuid from 'uuid';
import warning from 'warning';

import TimePickerSpinner from '../TimePickerSpinner/TimePickerSpinner';
import { settings } from '../../constants/Settings';
import dayjs from '../../utils/dayjs';
import {
  PICKER_KINDS,
  PRESET_VALUES,
  INTERVAL_VALUES,
  RELATIVE_VALUES,
} from '../../constants/DateConstants';
import Button from '../Button/Button';
import FlyoutMenu, { FlyoutMenuDirection } from '../FlyoutMenu/FlyoutMenu';

import { parseValue } from './dateTimePickerUtils';

const { iotPrefix } = settings;

export const DateTimePickerDefaultValuePropTypes = PropTypes.oneOfType([
  PropTypes.exact({
    timeRangeKind: PropTypes.oneOf([PICKER_KINDS.PRESET]).isRequired,
    timeRangeValue: PropTypes.exact({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      /** offset is in minutes */
      offset: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
  PropTypes.exact({
    timeRangeKind: PropTypes.oneOf([PICKER_KINDS.RELATIVE]).isRequired,
    timeRangeValue: PropTypes.exact({
      lastNumber: PropTypes.number.isRequired,
      lastInterval: PropTypes.string.isRequired,
      relativeToWhen: PropTypes.string.isRequired,
      relativeToTime: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  PropTypes.exact({
    timeRangeKind: PropTypes.oneOf([PICKER_KINDS.ABSOLUTE]).isRequired,
    timeRangeValue: PropTypes.exact({
      startDate: PropTypes.string.isRequired,
      startTime: PropTypes.string.isRequired,
      /** Can be a full parseable DateTime string or a Date object */
      start: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      /** Can be a full parseable DateTime string or a Date object */
      end: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
      endDate: PropTypes.string.isRequired,
      endTime: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
]);

const propTypes = {
  testId: PropTypes.string,
  /** default value for the picker */
  defaultValue: DateTimePickerDefaultValuePropTypes,
  /** the dayjs.js format for the human readable interval value */
  dateTimeMask: PropTypes.string,
  /** a list of options to for the default presets */
  presets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      offset: PropTypes.number,
    })
  ),
  /** a list of options to put on the 'Last' interval dropdown */
  intervals: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  /** a list of options to put on the 'Relative to' dropdown */
  relatives: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
  /** show the picker in the expanded state */
  expanded: PropTypes.bool,
  /** disable the input */
  disabled: PropTypes.bool,
  /** show the relative custom range picker */
  showRelativeOption: PropTypes.bool,
  /** show the custom range link */
  showCustomRangeLink: PropTypes.bool,
  /** show time input fields */
  hasTimeInput: PropTypes.bool,
  /**
   * Function hook used to provide the appropriate tooltip content for the preset time
   * picker. This function takes in the currentValue and should return a string message.
   */
  renderPresetTooltipText: PropTypes.func,
  /** triggered on cancel */
  onCancel: PropTypes.func,
  /** triggered on apply with returning object with similar signature to defaultValue */
  onApply: PropTypes.func,
  /** All the labels that need translation */
  i18n: PropTypes.shape({
    toLabel: PropTypes.string,
    toNowLabel: PropTypes.string,
    calendarLabel: PropTypes.string,
    presetLabels: PropTypes.arrayOf(PropTypes.string),
    intervalLabels: PropTypes.arrayOf(PropTypes.string),
    relativeLabels: PropTypes.arrayOf(PropTypes.string),
    customRangeLinkLabel: PropTypes.string,
    customRangeLabel: PropTypes.string,
    relativeLabel: PropTypes.string,
    lastLabel: PropTypes.string,
    invalidNumberLabel: PropTypes.string,
    relativeToLabel: PropTypes.string,
    absoluteLabel: PropTypes.string,
    startTimeLabel: PropTypes.string,
    endTimeLabel: PropTypes.string,
    applyBtnLabel: PropTypes.string,
    cancelBtnLabel: PropTypes.string,
    backBtnLabel: PropTypes.string,
    increment: PropTypes.string,
    decrement: PropTypes.string,
    hours: PropTypes.string,
    minutes: PropTypes.string,
    number: PropTypes.string,
  }),
  /** Light version  */
  light: PropTypes.bool,
  /** The language locale used to format the days of the week, months, and numbers. */
  locale: PropTypes.string,
  /** Unique id of the component */
  id: PropTypes.string,
  /** Optionally renders only an icon rather than displaying the current selected time */
  hasIconOnly: PropTypes.bool,
};

const defaultProps = {
  testId: 'date-time-picker',
  defaultValue: null,
  dateTimeMask: 'YYYY-MM-DD HH:mm',
  presets: PRESET_VALUES,
  intervals: [
    {
      label: 'minutes',
      value: INTERVAL_VALUES.MINUTES,
    },
    {
      label: 'hours',
      value: INTERVAL_VALUES.HOURS,
    },
    {
      label: 'days',
      value: INTERVAL_VALUES.DAYS,
    },
    {
      label: 'weeks',
      value: INTERVAL_VALUES.WEEKS,
    },
    {
      label: 'months',
      value: INTERVAL_VALUES.MONTHS,
    },
    {
      label: 'years',
      value: INTERVAL_VALUES.YEARS,
    },
  ],
  relatives: [
    {
      label: 'Today',
      value: RELATIVE_VALUES.TODAY,
    },
    {
      label: 'Yesterday',
      value: RELATIVE_VALUES.YESTERDAY,
    },
  ],
  expanded: false,
  disabled: false,
  showRelativeOption: true,
  showCustomRangeLink: true,
  hasTimeInput: true,
  renderPresetTooltipText: null,
  onCancel: null,
  onApply: null,
  i18n: {
    toLabel: 'to',
    toNowLabel: 'to Now',
    calendarLabel: 'Calendar',
    presetLabels: [],
    intervalLabels: [],
    relativeLabels: [],
    customRangeLinkLabel: 'Custom Range',
    customRangeLabel: 'Custom range',
    relativeLabel: 'Relative',
    lastLabel: 'Last',
    invalidNumberLabel: 'Number is not valid',
    relativeToLabel: 'Relative to',
    absoluteLabel: 'Absolute',
    startTimeLabel: 'Start time',
    endTimeLabel: 'End time',
    applyBtnLabel: 'Apply',
    cancelBtnLabel: 'Cancel',
    backBtnLabel: 'Back',
    increment: 'Increment',
    decrement: 'Decrement',
    hours: 'hours',
    minutes: 'minutes',
    number: 'number',
  },
  light: false,
  locale: 'en',
  id: undefined,
  hasIconOnly: false,
};

const DateTimePicker = ({
  testId,
  defaultValue,
  dateTimeMask,
  presets,
  intervals,
  relatives,
  expanded,
  disabled,
  showRelativeOption,
  showCustomRangeLink,
  hasTimeInput,
  renderPresetTooltipText,
  onCancel,
  onApply,
  i18n,
  light,
  locale,
  id = uuid.v4(),
  hasIconOnly,
  ...others
}) => {
  // keeps track of the flyout menu state
  const [isFlyoutOpen, setIsFlyoutOpen] = useState();
  React.useEffect(() => {
    if (__DEV__) {
      warning(
        false,
        'The `DateTimePickerV2` is an experimental component and could be lacking unit test and documentation. Be aware that minor version bumps could introduce breaking changes. For the reasons listed above use of this component in production is highly discouraged'
      );
    }
  }, []);

  const strings = useMemo(
    () => ({
      ...defaultProps.i18n,
      ...i18n,
    }),
    [i18n]
  );

  // initialize the dayjs locale
  useEffect(() => {
    dayjs.locale(locale);
  }, [locale]);

  // State
  const [customRangeKind, setCustomRangeKind] = useState(
    showRelativeOption ? PICKER_KINDS.RELATIVE : PICKER_KINDS.ABSOLUTE
  );
  const [isCustomRange, setIsCustomRange] = useState(false);
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [currentValue, setCurrentValue] = useState(null);
  const [lastAppliedValue, setLastAppliedValue] = useState(null);
  const [humanValue, setHumanValue] = useState(null);
  const [relativeValue, setRelativeValue] = useState(null);
  const [absoluteValue, setAbsoluteValue] = useState(null);
  const [focusOnFirstField, setFocusOnFirstField] = useState(true);
  const [relativeToTimeInvalid, setRelativeToTimeInvalid] = useState(false);
  const [absoluteStartTimeInvalid, setAbsoluteStartTimeInvalid] = useState(false);
  const [absoluteEndTimeInvalid, setAbsoluteEndTimeInvalid] = useState(false);

  // Refs
  const [datePickerElem, setDatePickerElem] = useState(null);
  const relativeSelect = useRef(null);

  const dateTimePickerBaseValue = {
    kind: '',
    preset: {
      id: presets[0].id,
      label: presets[0].label,
      offset: presets[0].offset,
    },
    relative: {
      lastNumber: null,
      lastInterval: intervals[0].value,
      relativeToWhen: relatives[0].value,
      relativeToTime: null,
    },
    absolute: {
      startDate: null,
      startTime: null,
      endDate: null,
      endTime: null,
    },
  };

  const handleDatePickerRef = useCallback((node) => {
    setDatePickerElem(node);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (datePickerElem) {
        datePickerElem.cal.open();
        // while waiting for https://github.com/carbon-design-system/carbon/issues/5713
        // the only way to display the calendar inline is to reparent its DOM to our component
        const dp = document.getElementById(`${id}-${iotPrefix}--date-time-picker__datepicker`);
        dp.appendChild(datePickerElem.cal.calendarContainer);
      }
    }, 0);
    return () => {
      clearTimeout(timeout);
    };
  }, [datePickerElem, id]);

  /**
   * Transforms a default or selected value into a full blown returnable object
   * @param {Object} [preset] clicked preset
   * @param {string} preset.label preset label
   * @param {number} preset.offset preset offset in minutes
   * @returns {Object} the augmented value itself and the human readable value
   */
  const renderValue = (clickedPreset = null) => {
    const value = { ...dateTimePickerBaseValue };
    if (isCustomRange) {
      if (customRangeKind === PICKER_KINDS.RELATIVE) {
        value.relative = relativeValue;
      } else {
        value.absolute = absoluteValue;
      }
      value.kind = customRangeKind;
    } else {
      const preset = presets
        .filter((p) => {
          let filteredPreset;
          if (p.id) {
            filteredPreset = p.id === (clickedPreset ? clickedPreset.id : selectedPreset);
          } else {
            filteredPreset = p.offset === (clickedPreset ? clickedPreset.offset : selectedPreset);
          }
          return filteredPreset;
        })
        .pop();
      value.preset = preset;
      value.kind = PICKER_KINDS.PRESET;
    }
    setCurrentValue(value);
    const parsedValue = parseValue(value, dateTimeMask, strings.toLabel);
    setHumanValue(parsedValue.readableValue);

    return {
      ...value,
      ...parsedValue,
    };
  };

  useEffect(
    () => {
      if (absoluteValue || relativeValue) {
        renderValue();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [absoluteValue, relativeValue]
  );

  useEffect(() => {
    if (datePickerElem && datePickerElem.inputField && datePickerElem.toInputField) {
      if (focusOnFirstField) {
        datePickerElem.inputField.click();
      } else {
        datePickerElem.toInputField.click();
      }
    }
  }, [datePickerElem, focusOnFirstField]);

  const onDatePickerChange = ([start, end], _, flatpickr) => {
    const calendarInFocus = document?.activeElement?.closest(
      `.${iotPrefix}--date-time-picker__datepicker`
    );

    const daysDidntChange =
      dayjs(absoluteValue.start).isSame(dayjs(start)) &&
      dayjs(absoluteValue.end).isSame(dayjs(end));

    if (daysDidntChange || !calendarInFocus) {
      // jump back to start to fix bug where flatpickr will change the month to the start
      // after it loses focus if you click outside the calendar
      if (focusOnFirstField) {
        flatpickr.jumpToDate(start);
      } else {
        flatpickr.jumpToDate(end);
      }

      // In some situations, when the calendar loses focus flatpickr is firing the onChange event
      // again, but the dates reset to where both start and end are the same. This fixes that.
      if (!calendarInFocus && dayjs(start).isSame(dayjs(end))) {
        flatpickr.setDate([absoluteValue.start, absoluteValue.end]);
      }
      return;
    }

    const newAbsolute = { ...absoluteValue };
    newAbsolute.start = start;
    newAbsolute.startDate = dayjs(newAbsolute.start).format('MM/DD/YYYY');
    const prevFocusOnFirstField = focusOnFirstField;
    if (end) {
      setFocusOnFirstField(!focusOnFirstField);
      newAbsolute.start = start;
      newAbsolute.startDate = dayjs(newAbsolute.start).format('MM/DD/YYYY');
      newAbsolute.end = end;
      newAbsolute.endDate = dayjs(newAbsolute.end).format('MM/DD/YYYY');
      if (prevFocusOnFirstField) {
        flatpickr.jumpToDate(newAbsolute.start, true);
      } else {
        flatpickr.jumpToDate(newAbsolute.end, true);
      }
    } else {
      setFocusOnFirstField(false);
      flatpickr.jumpToDate(newAbsolute.start, true);
    }

    setAbsoluteValue(newAbsolute);
  };

  const onDatePickerClose = (range, single, flatpickr) => {
    // force it to stay open
    /* istanbul ignore else */
    if (flatpickr) {
      flatpickr.open();
    }
  };

  const onCustomRangeChange = (kind) => {
    setCustomRangeKind(kind);
  };

  const onPresetClick = (preset) => {
    setSelectedPreset(preset.id ?? preset.offset);
    renderValue(preset);
  };

  const resetRelativeValue = () => {
    setRelativeValue({
      lastNumber: 0,
      lastInterval: intervals[0].value,
      relativeToWhen: relatives[0].value,
      relativeToTime: '',
    });
  };

  const resetAbsoluteValue = () => {
    setAbsoluteValue({
      startDate: '',
      startTime: '00:00',
      endDate: '',
      endTime: '00:00',
    });
  };

  const parseDefaultValue = (parsableValue) => {
    const currentCustomRangeKind = showRelativeOption
      ? PICKER_KINDS.RELATIVE
      : PICKER_KINDS.ABSOLUTE;
    if (parsableValue !== null) {
      if (parsableValue.timeRangeKind === PICKER_KINDS.PRESET) {
        // preset
        resetAbsoluteValue();
        resetRelativeValue();
        setCustomRangeKind(currentCustomRangeKind);
        onPresetClick(parsableValue.timeRangeValue);
      }
      if (parsableValue.timeRangeKind === PICKER_KINDS.RELATIVE) {
        // relative
        resetAbsoluteValue();
        setIsCustomRange(true);
        setCustomRangeKind(currentCustomRangeKind);
        setRelativeValue(parsableValue.timeRangeValue);
      }

      if (parsableValue.timeRangeKind === PICKER_KINDS.ABSOLUTE) {
        // absolute
        const absolute = { ...parsableValue.timeRangeValue };
        resetRelativeValue();
        setIsCustomRange(true);
        setCustomRangeKind(PICKER_KINDS.ABSOLUTE);
        if (!absolute.hasOwnProperty('start')) {
          absolute.start = dayjs(absolute.startDate).valueOf();
        }
        if (!absolute.hasOwnProperty('end')) {
          absolute.end = dayjs(absolute.endDate).valueOf();
        }
        absolute.startDate = dayjs(absolute.start).format('MM/DD/YYYY');
        absolute.endDate = dayjs(absolute.end).format('MM/DD/YYYY');
        setAbsoluteValue(absolute);
      }
    } else {
      resetAbsoluteValue();
      resetRelativeValue();
      setCustomRangeKind(currentCustomRangeKind);
      onPresetClick(presets[0]);
    }
  };

  const toggleIsCustomRange = (event) => {
    // stop the event from bubbling
    event.stopPropagation();
    setIsCustomRange(!isCustomRange);

    // If value was changed reset when going back to Preset
    if (absoluteValue.startDate !== '' || relativeValue.lastNumber > 0) {
      if (selectedPreset) {
        onPresetClick(presets.filter((p) => p.id ?? p.offset === selectedPreset)[0]);
        resetAbsoluteValue();
        resetRelativeValue();
      } else {
        onPresetClick(presets[0]);
        resetAbsoluteValue();
        resetRelativeValue();
      }
    }
  };

  useEffect(
    () => {
      /* istanbul ignore else */
      if (defaultValue || humanValue === null) {
        parseDefaultValue(defaultValue);
        setLastAppliedValue(defaultValue);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [defaultValue]
  );

  /**
   * Get an alternative human readable value for a preset to show in tooltips and dropdown
   * ie. 'Last 30 minutes' displays '2020-04-01 11:30 to Now' on the tooltip
   * @returns {string} an interval string, starting point in time to now
   */
  const getIntervalValue = () => {
    if (currentValue) {
      if (currentValue.kind === PICKER_KINDS.PRESET) {
        return `${dayjs().subtract(currentValue.preset.offset, 'minutes').format(dateTimeMask)} ${
          strings.toNowLabel
        }`;
      }
    }
    return '';
  };

  // Util func to update the relative value
  const changeRelativePropertyValue = (property, value) => {
    const newRelative = { ...relativeValue };
    newRelative[property] = value;
    setRelativeValue(newRelative);
  };

  // on change functions that trigger a relative value update
  const onRelativeLastNumberChange = (event) => {
    changeRelativePropertyValue('lastNumber', Number(event.imaginaryTarget.value));
  };
  const onRelativeLastIntervalChange = (event) => {
    changeRelativePropertyValue('lastInterval', event.currentTarget.value);
  };
  const onRelativeToWhenChange = (event) => {
    changeRelativePropertyValue('relativeToWhen', event.currentTarget.value);
  };
  const onRelativeToTimeChange = (pickerValue, evt, meta) => {
    setRelativeToTimeInvalid(meta.invalid);
    changeRelativePropertyValue('relativeToTime', pickerValue);
  };

  // Util func to update the absolute value
  const changeAbsolutePropertyValue = (property, value) => {
    const newAbsolute = { ...absoluteValue };
    newAbsolute[property] = value;
    setAbsoluteValue(newAbsolute);
  };

  // on change functions that trigger a absolute value update
  const onAbsoluteStartTimeChange = (pickerValue, evt, meta) => {
    setAbsoluteStartTimeInvalid(meta.invalid);
    changeAbsolutePropertyValue('startTime', pickerValue);
  };
  const onAbsoluteEndTimeChange = (pickerValue, evt, meta) => {
    setAbsoluteEndTimeInvalid(meta.invalid);
    changeAbsolutePropertyValue('endTime', pickerValue);
  };

  const tooltipValue = renderPresetTooltipText
    ? renderPresetTooltipText(currentValue)
    : getIntervalValue();

  const disableRelativeApply =
    isCustomRange && customRangeKind === PICKER_KINDS.RELATIVE && relativeToTimeInvalid;

  const disableAbsoluteApply =
    isCustomRange &&
    customRangeKind === PICKER_KINDS.ABSOLUTE &&
    (absoluteStartTimeInvalid || absoluteEndTimeInvalid);

  const disableApply = disableRelativeApply || disableAbsoluteApply;

  // eslint-disable-next-line react/prop-types
  const CustomFooter = ({ setIsOpen }) => {
    const onApplyClick = () => {
      setIsOpen(false);
      const value = renderValue();
      setLastAppliedValue(value);
      const returnValue = {
        timeRangeKind: value.kind,
        timeRangeValue: null,
      };
      switch (value.kind) {
        case PICKER_KINDS.ABSOLUTE:
          returnValue.timeRangeValue = {
            ...value.absolute,
            humanValue,
            tooltipValue,
          };
          break;
        case PICKER_KINDS.RELATIVE:
          returnValue.timeRangeValue = {
            ...value.relative,
            humanValue,
            tooltipValue,
          };
          break;
        default:
          returnValue.timeRangeValue = {
            ...value.preset,
            tooltipValue,
          };
          break;
      }

      if (onApply) {
        onApply(returnValue);
      }
    };

    const onCancelClick = () => {
      parseDefaultValue(lastAppliedValue);
      setIsOpen(false);

      /* istanbul ignore else */
      if (onCancel) {
        onCancel();
      }
    };

    return (
      <div className={`${iotPrefix}--date-time-picker__menu-btn-set`}>
        {isCustomRange ? (
          <Button
            kind="secondary"
            className={`${iotPrefix}--date-time-picker__menu-btn ${iotPrefix}--date-time-picker__menu-btn-back`}
            size="field"
            {...others}
            onClick={toggleIsCustomRange}
          >
            {strings.backBtnLabel}
          </Button>
        ) : (
          <Button
            kind="secondary"
            className={`${iotPrefix}--date-time-picker__menu-btn ${iotPrefix}--date-time-picker__menu-btn-cancel`}
            onClick={onCancelClick}
            size="field"
            {...others}
          >
            {strings.cancelBtnLabel}
          </Button>
        )}
        <Button
          kind="primary"
          className={`${iotPrefix}--date-time-picker__menu-btn ${iotPrefix}--date-time-picker__menu-btn-apply`}
          size="field"
          {...others}
          onClick={onApplyClick}
          disabled={disableApply}
        >
          {strings.applyBtnLabel}
        </Button>
      </div>
    );
  };

  return (
    <>
      <div
        data-testid={testId}
        id={`${id}-${iotPrefix}--date-time-pickerv2__wrapper`}
        className={`${iotPrefix}--date-time-pickerv2__wrapper`}
        style={{ '--wrapper-width': hasIconOnly ? '3rem' : '20rem' }}
        role="button"
        tabIndex="0"
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            setIsFlyoutOpen((flyoutOpen) => !flyoutOpen);
            // have to do this to stop the mouse click from being fired
            event.preventDefault();
          }
        }}
        onClick={() => {
          setIsFlyoutOpen((flyoutOpen) => !flyoutOpen);
        }}
      >
        <div
          className={classnames({
            [`${iotPrefix}--date-time-picker__box--full`]: !hasIconOnly,
            [`${iotPrefix}--date-time-picker__box--light`]: light,
          })}
        >
          {!hasIconOnly ? (
            <div
              data-testid={`${testId}__field`}
              className={`${iotPrefix}--date-time-picker__field`}
            >
              {currentValue && currentValue.kind !== PICKER_KINDS.PRESET ? (
                <span title={humanValue}>{humanValue}</span>
              ) : humanValue ? (
                <>
                  <TooltipDefinition
                    align="start"
                    direction="bottom"
                    tooltipText={tooltipValue}
                    triggerClassName=""
                  >
                    {humanValue}
                  </TooltipDefinition>
                </>
              ) : null}
            </div>
          ) : null}

          <FlyoutMenu
            isOpen={isFlyoutOpen}
            buttonSize={hasIconOnly ? 'default' : 'small'}
            renderIcon={Calendar16}
            disabled={false}
            buttonProps={{
              tooltipPosition: 'top',
              tabIndex: -1,
            }}
            hideTooltip
            iconDescription={strings.calendarLabel}
            passive={false}
            triggerId="test-trigger-id-2"
            light={light}
            menuOffset={{
              top: 0,
              left: 0,
            }}
            testId={`${testId}-datepicker-flyout`}
            direction={FlyoutMenuDirection.BottomEnd}
            customFooter={CustomFooter}
            tooltipFocusTrap={false}
            renderInPortal
            tooltipClassName={classnames(`${iotPrefix}--date-time-picker--tooltip`, {
              [`${iotPrefix}--date-time-picker--tooltip--icon`]: hasIconOnly,
            })}
            tooltipContentClassName={`${iotPrefix}--date-time-picker--menu`}
          >
            <div
              className={`${iotPrefix}--date-time-picker__menu-scroll`}
              style={{ '--wrapper-width': '20rem' }}
              role="listbox"
              onClick={(event) => event.stopPropagation()} // need to stop the event so that it will not close the menu
              onKeyDown={(event) => event.stopPropagation()} // need to stop the event so that it will not close the menu
              tabIndex="-1"
            >
              {!isCustomRange ? (
                <OrderedList nested={false}>
                  {tooltipValue ? (
                    <ListItem
                      className={`${iotPrefix}--date-time-picker__listitem ${iotPrefix}--date-time-picker__listitem--current`}
                    >
                      {tooltipValue}
                    </ListItem>
                  ) : null}
                  {showCustomRangeLink ? (
                    <ListItem
                      onClick={toggleIsCustomRange}
                      className={`${iotPrefix}--date-time-picker__listitem ${iotPrefix}--date-time-picker__listitem--preset ${iotPrefix}--date-time-picker__listitem--custom`}
                    >
                      {strings.customRangeLinkLabel}
                    </ListItem>
                  ) : null}
                  {presets.map((preset, i) => {
                    return (
                      <ListItem
                        key={i}
                        onClick={() => onPresetClick(preset)}
                        className={classnames(
                          `${iotPrefix}--date-time-picker__listitem ${iotPrefix}--date-time-picker__listitem--preset`,
                          {
                            [`${iotPrefix}--date-time-picker__listitem--preset-selected`]:
                              selectedPreset === (preset.id ?? preset.offset),
                          }
                        )}
                      >
                        {strings.presetLabels[i] || preset.label}
                      </ListItem>
                    );
                  })}
                </OrderedList>
              ) : (
                <div
                  className={`${iotPrefix}--date-time-picker__custom-wrapper`}
                  style={{ '--wrapper-width': '20rem' }}
                >
                  {showRelativeOption ? (
                    <FormGroup
                      legendText={strings.customRangeLabel}
                      className={`${iotPrefix}--date-time-picker__menu-formgroup`}
                    >
                      <RadioButtonGroup
                        valueSelected={customRangeKind}
                        onChange={onCustomRangeChange}
                        name={`${id}-radiogroup`}
                      >
                        <RadioButton
                          value={PICKER_KINDS.RELATIVE}
                          id={`${id}-relative`}
                          labelText={strings.relativeLabel}
                        />
                        <RadioButton
                          value={PICKER_KINDS.ABSOLUTE}
                          id={`${id}-absolute`}
                          labelText={strings.absoluteLabel}
                        />
                      </RadioButtonGroup>
                    </FormGroup>
                  ) : null}
                  {showRelativeOption && customRangeKind === PICKER_KINDS.RELATIVE ? (
                    <>
                      <FormGroup
                        legendText={strings.lastLabel}
                        className={`${iotPrefix}--date-time-picker__menu-formgroup`}
                      >
                        <div className={`${iotPrefix}--date-time-picker__fields-wrapper`}>
                          <NumberInput
                            id={`${id}-last-number`}
                            invalidText={strings.invalidNumberLabel}
                            step={1}
                            min={0}
                            value={relativeValue ? relativeValue.lastNumber : 0}
                            onChange={onRelativeLastNumberChange}
                            translateWithId={(messageId) =>
                              messageId === 'increment.number'
                                ? `${i18n.increment} ${i18n.number}`
                                : messageId === 'decrement.number'
                                ? `${i18n.decrement} ${i18n.number}`
                                : null
                            }
                            light
                          />
                          <Select
                            {...others}
                            id={`${id}-last-interval`}
                            defaultValue={
                              relativeValue ? relativeValue.lastInterval : INTERVAL_VALUES.MINUTES
                            }
                            onChange={onRelativeLastIntervalChange}
                            hideLabel
                            light
                          >
                            {intervals.map((interval, i) => {
                              return (
                                <SelectItem
                                  key={i}
                                  value={interval.value}
                                  text={strings.intervalLabels[i] || interval.label}
                                />
                              );
                            })}
                          </Select>
                        </div>
                      </FormGroup>
                      <FormGroup
                        legendText={strings.relativeToLabel}
                        className={`${iotPrefix}--date-time-picker__menu-formgroup`}
                      >
                        <div className={`${iotPrefix}--date-time-picker__fields-wrapper`}>
                          <Select
                            {...others}
                            ref={relativeSelect}
                            id={`${id}-relative-to-when`}
                            defaultValue={relativeValue ? relativeValue.relativeToWhen : ''}
                            onChange={onRelativeToWhenChange}
                            hideLabel
                            light
                          >
                            {relatives.map((relative, i) => {
                              return (
                                <SelectItem
                                  key={i}
                                  value={relative.value}
                                  text={strings.relativeLabels[i] || relative.label}
                                />
                              );
                            })}
                          </Select>
                          {hasTimeInput ? (
                            <TimePickerSpinner
                              id={`${id}-relative-to-time`}
                              invalid={relativeToTimeInvalid}
                              value={relativeValue ? relativeValue.relativeToTime : ''}
                              i18n={i18n}
                              onChange={onRelativeToTimeChange}
                              spinner
                              autoComplete="off"
                              light
                            />
                          ) : null}
                        </div>
                      </FormGroup>
                    </>
                  ) : (
                    <div data-testid={`${testId}-datepicker`}>
                      <div
                        id={`${id}-${iotPrefix}--date-time-picker__datepicker`}
                        className={`${iotPrefix}--date-time-picker__datepicker`}
                      >
                        <DatePicker
                          datePickerType="range"
                          dateFormat="m/d/Y"
                          ref={handleDatePickerRef}
                          onChange={onDatePickerChange}
                          onClose={onDatePickerClose}
                          value={
                            absoluteValue ? [absoluteValue.startDate, absoluteValue.endDate] : ''
                          }
                          locale={locale}
                        >
                          <DatePickerInput
                            labelText=""
                            id={`${id}-date-picker-input-start`}
                            hideLabel
                          />
                          <DatePickerInput
                            labelText=""
                            id={`${id}-date-picker-input-end`}
                            hideLabel
                          />
                        </DatePicker>
                      </div>
                      {hasTimeInput ? (
                        <FormGroup
                          legendText=""
                          className={`${iotPrefix}--date-time-picker__menu-formgroup`}
                        >
                          <div className={`${iotPrefix}--date-time-picker__fields-wrapper`}>
                            <TimePickerSpinner
                              id={`${id}-start-time`}
                              invalid={absoluteStartTimeInvalid}
                              labelText={strings.startTimeLabel}
                              value={absoluteValue ? absoluteValue.startTime : '00:00'}
                              i18n={i18n}
                              onChange={onAbsoluteStartTimeChange}
                              spinner
                              autoComplete="off"
                              light
                            />
                            <TimePickerSpinner
                              id={`${id}-end-time`}
                              invalid={absoluteEndTimeInvalid}
                              labelText={strings.endTimeLabel}
                              value={absoluteValue ? absoluteValue.endTime : '00:00'}
                              i18n={i18n}
                              onChange={onAbsoluteEndTimeChange}
                              spinner
                              autoComplete="off"
                              light
                            />
                          </div>
                        </FormGroup>
                      ) : (
                        <div className={`${iotPrefix}--date-time-picker__no-formgroup`} />
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </FlyoutMenu>
        </div>
      </div>
    </>
  );
};

DateTimePicker.propTypes = propTypes;
DateTimePicker.defaultProps = defaultProps;

export default DateTimePicker;
