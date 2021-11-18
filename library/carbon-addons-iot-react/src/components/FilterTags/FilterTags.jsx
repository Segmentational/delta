import React, { useRef, useEffect, useLayoutEffect, useState, Children } from 'react';
import PropTypes from 'prop-types';
import { OverflowMenuItem, OverflowMenu } from 'carbon-components-react';
import { Close16 } from '@carbon/icons-react';
import classnames from 'classnames';

import { settings } from '../../constants/Settings';
import { useResize } from '../../internal/UseResizeObserver';

const { prefix, iotPrefix } = settings;
/* eslint-disable-next-line react/prop-types */
const DefaultWrapper = React.forwardRef(({ children, i18n, ...props }, ref) => {
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
});
/* eslint-disable-next-line react/prop-types */
const OverflowTag = ({ children }) => (
  <span>
    {children} <Close16 />
  </span>
);

const FilterTags = ({ children, hasOverflow, id, tagContainer, onChange, i18n, testId }) => {
  const TagContainer = tagContainer || DefaultWrapper;
  const overFlowContainerRef = useRef(null);
  useResize(overFlowContainerRef);
  const childrenItems = Children.map(children, (child) => child);
  const breakingWidth = useRef([]);
  const [overflowItems, setOverflowItems] = useState([]);
  const [visibleItems, setVisibleItems] = useState(childrenItems);

  useEffect(
    () => {
      if (hasOverflow && overFlowContainerRef) {
        setOverflowItems([]);
        setVisibleItems(childrenItems.slice(0));
      }
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [children]
  );

  useLayoutEffect(
    () => {
      if (hasOverflow && overFlowContainerRef.current) {
        const clientWidth = overFlowContainerRef.current?.clientWidth;
        const scrollWidth = overFlowContainerRef.current?.scrollWidth;
        const currBreakingWidth = breakingWidth.current;
        const breakingWidthLength = currBreakingWidth.length;
        const tooBig = scrollWidth > clientWidth;

        if (tooBig) {
          currBreakingWidth.push(scrollWidth);
          if (visibleItems.length > 1) {
            // Move item to the hidden list
            setOverflowItems([visibleItems.pop(), ...overflowItems]);
            setVisibleItems([...visibleItems]);
          }
        } else if (
          currBreakingWidth[breakingWidthLength - 1] >= 0 &&
          clientWidth > currBreakingWidth[breakingWidthLength - 1] &&
          overflowItems.length > 0
        ) {
          // Move the item to the visible list
          setVisibleItems([...visibleItems, overflowItems.shift()]);
          setOverflowItems([...overflowItems]);
          currBreakingWidth.shift();
        }
      }
    } /* eslint-disable react-hooks/exhaustive-deps */,
    [
      overFlowContainerRef?.current?.scrollWidth,
      overFlowContainerRef?.current?.clientWidth,
      childrenItems,
    ]
    /* eslint-enable react-hooks/exhaustive-deps */
  );

  return (
    <TagContainer
      key={`${hasOverflow}-Tag-Container`}
      id={id}
      // TODO: remove id in v3
      data-testid={id || testId}
      className={classnames(`${iotPrefix}--filtertags-container`, {
        [`${iotPrefix}--filtertags-container__wrap`]: hasOverflow,
      })}
      ref={overFlowContainerRef}
      onChange={onChange}
      i18n={i18n}
    >
      {visibleItems}
      {overflowItems.length > 0 && (
        <OverflowMenu
          data-floating-menu-container
          className={`${iotPrefix}--filtertags-overflow-menu`}
          renderIcon={() => (
            <div className={`${prefix}--tag`}>{`More: ${overflowItems.length}`}</div>
          )}
          menuOptionsClass={`${iotPrefix}--filtertags-overflow-items`}
          menuOffset={{
            top: 15,
          }}
          data-testid={`${testId}-overflow-menu`}
        >
          {overflowItems.map((child, i) => (
            <OverflowMenuItem
              data-testid={`${testId}-overflow-menu-item-${i}`}
              className={`${iotPrefix}--filtertags-overflow-item`}
              title={child.props.children}
              key={`${child.props.children}-${i}`}
              onClick={child.props.onClose}
              itemText={<OverflowTag>{child.props.children}</OverflowTag>}
            />
          ))}
        </OverflowMenu>
      )}
    </TagContainer>
  );
};

const propTypes = {
  /**
   * ID for filter tag container
   */
  id: PropTypes.string,
  /**
   * Tag components nested inside Filter tag component
   */
  children: PropTypes.node.isRequired,
  /**
   * Bit to determine if tags collapse into overflow tag
   */
  hasOverflow: PropTypes.bool,
  /**
   * Optional container for filter tags
   */
  tagContainer: PropTypes.elementType,

  /**
   * OnChange handled passed to the tagContainer
   */
  onChange: PropTypes.func,

  /**
   * This is an object of {[key: string]: string}, but it's
   * unknown what they are as it's dependent on the tagContainer
   */
  // eslint-disable-next-line react/forbid-prop-types
  i18n: PropTypes.object,

  testId: PropTypes.string,
};

const defaultProps = {
  id: 'filter-tag-container',
  hasOverflow: true,
  tagContainer: null,
  onChange: null,
  i18n: {},
  testId: 'filter-tags',
};

FilterTags.propTypes = propTypes;
FilterTags.defaultProps = defaultProps;
export default FilterTags;
