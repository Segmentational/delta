import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'carbon-components-react';

import { validThresholdIcons } from '../DashboardEditor/editorUtils';
import { settings } from '../../constants/Settings';
import deprecate from '../../internal/deprecate';
import { CarbonIconPropType } from '../../constants/SharedPropTypes';
import { useDropdownTitleFixer } from '../IconDropdown/dropdownHooks';

const { iotPrefix } = settings;

const iconProptype = PropTypes.shape({
  carbonIcon: CarbonIconPropType,
  name: PropTypes.string,
});

const propTypes = {
  /** Array of icons to be shown */
  icons: PropTypes.arrayOf(iconProptype),
  /** The title of the Dropdown, defaults to 'Icon' */
  titleText: PropTypes.string,
  /** Required Id string */
  id: PropTypes.string.isRequired,
  /** True if the light theme is to be used, defaults to false */
  light: PropTypes.bool,
  /** Callback for when any of the Dropdown icon value changes */
  onChange: PropTypes.func.isRequired,
  /** Callback to translate common icons */
  translateWithId: PropTypes.func,
  /** The selected icon, use to set initial icon */
  selectedIcon: iconProptype,
  // TODO: remove deprecated 'testID' in v3
  // eslint-disable-next-line react/require-default-props
  testID: deprecate(
    PropTypes.string,
    `The 'testID' prop has been deprecated. Please use 'testId' instead.`
  ),
  /** Id used if needed for testing */
  testId: PropTypes.string,
};

const defaultProps = {
  icons: validThresholdIcons,
  light: false,
  selectedIcon: undefined,
  testId: undefined,
  titleText: '',
  translateWithId: undefined,
};

const SimpleIconDropdown = ({
  icons,
  id,
  light,
  onChange,
  selectedIcon: selectedIconProp,
  titleText,
  // TODO: remove deprecated 'testID' in v3
  testID,
  testId,
  translateWithId,
}) => {
  const [selectedIcon, setSelectedIcon] = useState(selectedIconProp);
  const [dropdownRef, updateTitle] = useDropdownTitleFixer();

  useEffect(() => {
    const selected = selectedIcon ?? icons[0];
    if (selected?.name && dropdownRef?.current) {
      updateTitle(selected.name);
    }
  }, [dropdownRef, icons, selectedIcon, selectedIconProp, updateTitle]);

  const renderIconItem = (item) => (
    <div style={{ color: item.color || 'unset' }} className={`${iotPrefix}--icon-dropdown__item`}>
      <div className={`${iotPrefix}--icon-dropdown__item-border`}>{item.carbonIcon}</div>
    </div>
  );

  return (
    <Dropdown
      ref={dropdownRef}
      className={`${iotPrefix}--icon-dropdown`}
      id={id}
      itemToString={renderIconItem}
      items={icons}
      label=""
      light={light}
      onChange={({ selectedItem }) => {
        setSelectedIcon(selectedItem);
        onChange({ icon: selectedItem });
        updateTitle(selectedItem?.name);
      }}
      translateWithId={translateWithId}
      selectedItem={selectedIcon || icons[0]}
      titleText={titleText}
      type="default"
      // TODO: remove deprecated 'testID' in v3
      data-testid={testID || testId}
    />
  );
};

SimpleIconDropdown.propTypes = propTypes;
SimpleIconDropdown.defaultProps = defaultProps;

export default SimpleIconDropdown;
