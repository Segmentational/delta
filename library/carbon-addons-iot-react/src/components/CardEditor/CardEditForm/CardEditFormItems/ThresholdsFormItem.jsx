import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Add16, TrashCan32 } from '@carbon/icons-react';
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';
import uuid from 'uuid';
import { red60 } from '@carbon/colors';
import { TextInput } from 'carbon-components-react';

import { settings } from '../../../../constants/Settings';
import Button from '../../../Button';
import { NumberInput } from '../../../NumberInput';
import { Dropdown } from '../../../Dropdown';
import { validThresholdIcons, validThresholdColors } from '../../../DashboardEditor/editorUtils';
import SimpleIconDropdown from '../../../SimpleIconDropdown/SimpleIconDropdown';
import ColorDropdown from '../../../ColorDropdown/ColorDropdown';
import { CarbonIconPropType } from '../../../../constants/SharedPropTypes';

const { iotPrefix, prefix } = settings;

const propTypes = {
  /* card value */
  cardConfig: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    size: PropTypes.string,
    type: PropTypes.string,
    content: PropTypes.shape({
      series: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string,
          dataSourceId: PropTypes.string,
          color: PropTypes.string,
        })
      ),
      xLabel: PropTypes.string,
      yLabel: PropTypes.string,
      unit: PropTypes.string,
      includeZeroOnXaxis: PropTypes.bool,
      includeZeroOnYaxis: PropTypes.bool,
      timeDataSourceId: PropTypes.string,
    }),
    interval: PropTypes.string,
  }),
  onChange: PropTypes.func,
  thresholds: PropTypes.arrayOf(
    PropTypes.shape({
      dataSourceId: PropTypes.string,
      comparison: PropTypes.string,
      value: PropTypes.number,
      color: PropTypes.string,
      icon: PropTypes.string,
    })
  ),
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      carbonIcon: CarbonIconPropType,
      name: PropTypes.string,
      color: PropTypes.string,
    })
  ),
  /** default icon for each threshold */
  selectedIcon: PropTypes.shape({
    carbonIcon: CarbonIconPropType,
    name: PropTypes.string,
    color: PropTypes.string,
  }),
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      carbonColor: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  /** default color for each threshold */
  selectedColor: PropTypes.shape({
    carbonColor: PropTypes.string,
    name: PropTypes.string,
  }),
  i18n: PropTypes.shape({
    dataItemEditorDataItemThresholds: PropTypes.string,
    dataItemEditorDataItemAddThreshold: PropTypes.string,
    dataItemEditorDataItemRemove: PropTypes.string,
  }),
  /** The current data item's id */
  dataSourceId: PropTypes.string,
  /** callback function to translate common ids */
  translateWithId: PropTypes.func,
};

const defaultProps = {
  dataSourceId: null,
  cardConfig: {},
  onChange: null,
  thresholds: [],
  i18n: {
    dataItemEditorDataItemThresholds: 'Thresholds',
    dataItemEditorDataItemAddThreshold: 'Add threshold',
    dataItemEditorDataItemRemove: 'Remove',
  },
  icons: validThresholdIcons,
  selectedIcon: undefined,
  colors: validThresholdColors,
  selectedColor: undefined,
  translateWithId: undefined,
};

const ThresholdsFormItem = ({
  dataSourceId,
  cardConfig,
  thresholds: thresholdsProp,
  icons,
  selectedIcon,
  colors,
  selectedColor,
  onChange,
  i18n,
  translateWithId,
}) => {
  const mergedI18n = { ...defaultProps.i18n, ...i18n };
  const baseClassName = `${iotPrefix}--card-edit-form`;

  // initialize thresholds with a unique id
  const [thresholds, setThresholds] = useState(
    thresholdsProp.map((threshold) => ({ ...threshold, id: uuid.v4() }))
  );

  return (
    <>
      {!isEmpty(thresholds) && (
        <span className={`${prefix}--label ${baseClassName}--input-label`}>
          {mergedI18n.dataItemEditorDataItemThresholds}
        </span>
      )}
      {thresholds.map((threshold, i) => {
        // add threshold color to all icon options
        const iconsWithColors = icons.map((icon) => ({
          ...icon,
          ...(threshold.color ? { color: threshold.color } : {}),
        }));

        // add threshold color to selected icon
        const selectedThresholdIconWithColor = {
          ...validThresholdIcons.find((icon) => icon.name === threshold.icon),
          ...(threshold.color ? { color: threshold.color } : {}),
        };

        // get threshold color to initialize color dropdown
        const thresholdColor = colors.find((color) => color.carbonColor === threshold.color);

        return (
          <div key={`${threshold.id}_${i}`}>
            <div className={`${baseClassName}--threshold-input-group`}>
              <div className={`${baseClassName}--threshold-input-group--item-dropdown`}>
                <SimpleIconDropdown
                  // need to regen if a threshold is added or color is changed
                  key={`${thresholds.length}_${threshold.color}`}
                  id={`${cardConfig.id}_value-card-threshold-icon_${i}`}
                  icons={iconsWithColors}
                  selectedIcon={selectedThresholdIconWithColor}
                  onChange={({ icon }) => {
                    const updatedThresholds = [...thresholds];
                    updatedThresholds[i] = {
                      ...updatedThresholds[i],
                      icon: icon.name,
                    };
                    onChange(updatedThresholds.map((item) => omit(item, 'id')));
                    setThresholds(updatedThresholds);
                  }}
                  translateWithId={translateWithId}
                />
              </div>
              <div className={`${baseClassName}--threshold-input-group--item-dropdown`}>
                <ColorDropdown
                  // need to regen if a threshold is added
                  key={`${thresholds.length}`}
                  id={`${cardConfig.id}_value-card-threshold-color_${i}`}
                  label=""
                  titleText=""
                  hideLabels
                  colors={colors}
                  selectedColor={thresholdColor}
                  onChange={({ color }) => {
                    const updatedThresholds = [...thresholds];
                    updatedThresholds[i] = {
                      ...updatedThresholds[i],
                      color: color.carbonColor,
                    };
                    onChange(updatedThresholds.map((item) => omit(item, 'id')));
                    setThresholds(updatedThresholds);
                  }}
                  translateWithId={translateWithId}
                />
              </div>
              <div className={`${baseClassName}--threshold-input-group--item-dropdown`}>
                <Dropdown
                  // need to regen if a threshold is added
                  key={`${thresholds.length}`}
                  id={`${cardConfig.id}_value-card-threshold-comparison_${i}`}
                  direction="bottom"
                  translateWithId={translateWithId}
                  label=""
                  items={['>', '<', '=']} // current valid comparison operators
                  selectedItem={threshold.comparison || '>'}
                  onChange={({ selectedItem }) => {
                    const updatedThresholds = [...thresholds];
                    updatedThresholds[i] = {
                      ...updatedThresholds[i],
                      comparison: selectedItem,
                    };
                    onChange(updatedThresholds.map((item) => omit(item, 'id')));
                    setThresholds(updatedThresholds);
                  }}
                />
              </div>
              <div className={`${baseClassName}--threshold-input-group--item-end`}>
                {threshold.comparison === '=' ? (
                  <TextInput
                    data-testid={`threshold-${i}-text-input`}
                    id={`${cardConfig.id}_value-card-threshold-value_${i}`}
                    labelText=""
                    value={threshold.value?.toString()}
                    onChange={({ target }) => {
                      const updatedThresholds = [...thresholds];
                      updatedThresholds[i] = {
                        ...updatedThresholds[i],
                        value: target.value,
                      };
                      onChange(updatedThresholds.map((item) => omit(item, 'id')));
                      setThresholds(updatedThresholds);
                    }}
                  />
                ) : (
                  <NumberInput
                    id={`${cardConfig.id}_value-card-threshold-value_${i}`}
                    step={1}
                    hideLabel
                    invalid={false} // don't allow invalid state
                    value={threshold.value?.toString() || 0}
                    onChange={({ imaginaryTarget }) => {
                      const updatedThresholds = [...thresholds];
                      updatedThresholds[i] = {
                        ...updatedThresholds[i],
                        value: Number(imaginaryTarget.value) || imaginaryTarget.value,
                      };
                      onChange(updatedThresholds.map((item) => omit(item, 'id')));
                      setThresholds(updatedThresholds);
                    }}
                  />
                )}
              </div>
              <Button
                hasIconOnly
                renderIcon={TrashCan32}
                kind="ghost"
                onClick={() => {
                  const thresholdIndex = thresholds.findIndex((item) => item.id === threshold.id);
                  const filteredThresholds = thresholds.filter(
                    (item, index) => index !== thresholdIndex
                  );
                  onChange(filteredThresholds.map((item) => omit(item, 'id')));
                  setThresholds(filteredThresholds);
                }}
                iconDescription={mergedI18n.dataItemEditorDataItemRemove}
                tooltipPosition="left"
                tooltipAlignment="center"
              />
            </div>
          </div>
        );
      })}
      <Button
        kind="ghost"
        size="small"
        renderIcon={Add16}
        onClick={() => {
          let newThreshold = {
            comparison: '>',
            value: 0,
            icon: selectedIcon?.name || 'Warning alt',
            color: selectedColor?.carbonColor || red60,
          };
          if (dataSourceId) {
            newThreshold = { dataSourceId, ...newThreshold };
          }
          setThresholds([
            ...thresholds,
            {
              id: uuid.v4(),
              ...newThreshold,
            },
          ]);
          onChange([...thresholds, newThreshold]);
        }}
      >
        {mergedI18n.dataItemEditorDataItemAddThreshold}
      </Button>
    </>
  );
};

ThresholdsFormItem.defaultProps = defaultProps;
ThresholdsFormItem.propTypes = propTypes;
export default ThresholdsFormItem;
