import React, { useMemo } from 'react';
import { DragSource } from 'react-dnd';
import classnames from 'classnames';
import { Draggable16, ChevronUp16, ChevronDown16, Locked16 } from '@carbon/icons-react';
import PropTypes from 'prop-types';
import warning from 'warning';

import { EditingStyle } from '../../../utils/DragAndDropUtils';
import { settings } from '../../../constants/Settings';
import { handleSpecificKeyDown } from '../../../utils/componentUtilityFunctions';

import ListItemWrapper from './ListItemWrapper';

const { iotPrefix } = settings;

export const ItemType = 'ListItem';

const ListItemPropTypes = {
  id: PropTypes.string.isRequired,
  editingStyle: PropTypes.oneOf([
    EditingStyle.Single,
    EditingStyle.Multiple,
    EditingStyle.SingleNesting,
    EditingStyle.MultipleNesting,
  ]),
  isLargeRow: PropTypes.bool,
  isLocked: PropTypes.bool,
  isExpandable: PropTypes.bool,
  onExpand: PropTypes.func,
  isSelectable: PropTypes.bool,
  disabled: PropTypes.bool,
  onSelect: PropTypes.func,
  renderDropTargets: PropTypes.bool,
  getAllowedDropIds: PropTypes.func,
  /** the id of the item currently being dragged if any */
  draggingId: PropTypes.string,
  selected: PropTypes.bool,
  expanded: PropTypes.bool,
  value: PropTypes.string.isRequired,
  /** string value or callback render function */
  secondaryValue: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  /** either a callback render function or a node */
  rowActions: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.func]),
  icon: PropTypes.node,
  iconPosition: PropTypes.string,
  isCategory: PropTypes.bool,
  /** i18n strings */
  i18n: PropTypes.shape({
    expand: PropTypes.string,
    close: PropTypes.string,
  }),
  /** Default selected item ref needed for scrolling */
  selectedItemRef: PropTypes.oneOfType([
    // Either a function
    PropTypes.func,
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({
      current: typeof Element === 'undefined' ? PropTypes.any : PropTypes.instanceOf(Element),
    }),
  ]),
  /** The nodes should be Carbon Tags components */
  tags: PropTypes.arrayOf(PropTypes.node),
  /* these props come from react-dnd */
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  dragPreviewText: PropTypes.string,
  nestingLevel: PropTypes.number,
  isDragging: PropTypes.bool.isRequired,
  onItemMoved: PropTypes.func.isRequired,
  itemWillMove: PropTypes.func.isRequired,
  /** true if the list item should not be focusable even though isSelectable is true */
  preventRowFocus: PropTypes.bool,
};

const ListItemDefaultProps = {
  editingStyle: null,
  isLargeRow: false,
  isLocked: false,
  isExpandable: false,
  dragPreviewText: null,
  onExpand: () => {},
  isSelectable: false,
  disabled: false,
  onSelect: () => {},
  renderDropTargets: false,
  getAllowedDropIds: null,
  draggingId: null,
  selected: false,
  expanded: false,
  secondaryValue: null,
  rowActions: null,
  icon: null,
  iconPosition: 'left',
  nestingLevel: 0,
  isCategory: false,
  i18n: {
    expand: 'Expand',
    close: 'Close',
    dragHandle: 'Drag handle',
  },
  selectedItemRef: null,
  tags: null,
  preventRowFocus: false,
};

const ListItem = ({
  id,
  editingStyle,
  isLargeRow,
  isExpandable,
  onExpand,
  expanded,
  isSelectable,
  onSelect,
  selected,
  disabled,
  value,
  secondaryValue,
  rowActions,
  renderDropTargets,
  getAllowedDropIds,
  draggingId,
  icon,
  iconPosition, // or "right"
  onItemMoved,
  nestingLevel,
  isCategory,
  isLocked,
  i18n,
  isDragging,
  selectedItemRef,
  tags,
  connectDragSource,
  connectDragPreview,
  itemWillMove,
  dragPreviewText,
  preventRowFocus,
}) => {
  const mergedI18n = useMemo(() => ({ ...ListItemDefaultProps.i18n, ...i18n }), [i18n]);

  const handleExpansionClick = (event) => {
    event.stopPropagation();
    /* istanbul ignore else */
    if (isExpandable) {
      onExpand(id);
    }
  };

  if (__DEV__ && Array.isArray(rowActions)) {
    warning(
      false,
      'You have passed an array of nodes to ListItem as rowActions.  This can cause performance problems and has been deprecated.  You should pass a render function instead.'
    );
  }

  const renderNestingOffset = () => {
    return nestingLevel > 0 ? (
      <div
        className={`${iotPrefix}--list-item--nesting-offset`}
        style={{
          width: `${nestingLevel * 32}px`,
        }}
      />
    ) : null;
  };

  const renderExpander = () =>
    isExpandable ? (
      <div
        role="button"
        tabIndex={0}
        className={classnames(`${iotPrefix}--list-item--expand-icon`, {
          [`${iotPrefix}--list-item--expand-icon__disabled`]: disabled,
        })}
        onClick={!disabled ? handleExpansionClick : undefined}
        data-testid="expand-icon"
        aria-label={expanded ? mergedI18n.close : mergedI18n.expand}
        title={expanded ? mergedI18n.close : mergedI18n.expand}
        onKeyPress={(event) => event.key === 'Enter' && handleExpansionClick(event)}
      >
        {expanded ? (
          <ChevronUp16 aria-label={`${mergedI18n.close}-icon`} />
        ) : (
          <ChevronDown16 aria-label={`${mergedI18n.expand}-icon`} />
        )}
      </div>
    ) : null;

  const renderIcon = () =>
    icon ? (
      <div
        className={`${iotPrefix}--list-item--content--icon ${iotPrefix}--list-item--content--icon__${iconPosition}`}
      >
        {icon}
      </div>
    ) : null;

  const hasRowActions = rowActions && (typeof rowActions === 'function' || rowActions?.length);

  const renderRowActions = () =>
    hasRowActions ? (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={`${iotPrefix}--list-item--content--row-actions`}
        // add event handlers to prevent rowAction items from bubbling and causing
        // list re-renders
        onKeyPress={handleSpecificKeyDown(['Enter', ' '], (e) => {
          e.stopPropagation();
        })}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {typeof rowActions === 'function' ? rowActions() : rowActions}
      </div>
    ) : null;

  const renderTags = () => (tags && tags.length > 0 ? <div>{tags}</div> : null);

  const renderDragPreview = () => {
    if (editingStyle && connectDragPreview) {
      return connectDragPreview(
        <div className={`${iotPrefix}--list-item-editable--drag-preview`}>
          {dragPreviewText || value}
        </div>
      );
    }

    return null;
  };

  const dragIcon = () =>
    isLocked ? (
      <Locked16 className={classnames(`${iotPrefix}--list-item--lock`)} />
    ) : editingStyle ? (
      <div title={mergedI18n.dragHandle}>
        <Draggable16
          className={classnames(`${iotPrefix}--list-item--handle`, {
            [`${iotPrefix}--list-item--handle__disabled`]: disabled,
          })}
          data-testid="list-item-editable"
        />
      </div>
    ) : null;

  return (
    <ListItemWrapper
      isPreview={false}
      {...{
        id,
        isSelectable,
        selected,
        isDragging,
        editingStyle,
        expanded,
        isLargeRow,
        onSelect,
        connectDragSource,
        onItemMoved,
        itemWillMove,
        disabled,
        renderDropTargets,
        getAllowedDropIds: getAllowedDropIds ? () => getAllowedDropIds(draggingId) : null,
        preventRowFocus,
      }}
    >
      {renderDragPreview()}
      {dragIcon()}
      {renderNestingOffset()}
      {renderExpander()}
      <div
        className={classnames(
          `${iotPrefix}--list-item--content`,
          {
            [`${iotPrefix}--list-item--content__selected`]: !editingStyle && selected,
          },
          { [`${iotPrefix}--list-item--content__large`]: isLargeRow }
        )}
        ref={selectedItemRef}
      >
        {renderIcon()}
        <div
          className={classnames(`${iotPrefix}--list-item--content--values`, {
            [`${iotPrefix}--list-item--content--values__large`]: isLargeRow,
          })}
        >
          {isLargeRow ? (
            <>
              <div
                className={`${iotPrefix}--list-item--content--values--main ${iotPrefix}--list-item--content--values--main__large`}
              >
                <div
                  className={classnames(`${iotPrefix}--list-item--content--values--value`, {
                    [`${iotPrefix}--list-item--category`]: isCategory,
                    [`${iotPrefix}--list-item--content--values__disabled`]: disabled,
                    [`${iotPrefix}--list-item--content--values--value__with-actions`]: hasRowActions,
                  })}
                  title={value}
                >
                  {value}
                </div>
                {renderTags()}
                {renderRowActions()}
              </div>
              {secondaryValue ? (
                <div
                  title={
                    typeof secondaryValue === 'function'
                      ? `${value}--secondary-value`
                      : secondaryValue
                  }
                  className={classnames(
                    `${iotPrefix}--list-item--content--values--value`,
                    `${iotPrefix}--list-item--content--values--value__large`,
                    {
                      [`${iotPrefix}--list-item--content--values--value__with-actions`]: hasRowActions,
                      [`${iotPrefix}--list-item--content--values__disabled`]: disabled,
                    }
                  )}
                >
                  {typeof secondaryValue === 'function' ? secondaryValue() : secondaryValue}
                </div>
              ) : null}
            </>
          ) : (
            <>
              <div className={`${iotPrefix}--list-item--content--values--main`}>
                <div
                  className={classnames(`${iotPrefix}--list-item--content--values--value`, {
                    [`${iotPrefix}--list-item--category`]: isCategory,
                    [`${iotPrefix}--list-item--content--values__disabled`]: disabled,
                    [`${iotPrefix}--list-item--content--values--value__with-actions`]: hasRowActions,
                  })}
                  title={value}
                >
                  {value}
                </div>
                {secondaryValue ? (
                  <div
                    title={
                      typeof secondaryValue === 'function'
                        ? `${value}--secondary-value`
                        : secondaryValue
                    }
                    className={classnames(`${iotPrefix}--list-item--content--values--value`, {
                      [`${iotPrefix}--list-item--content--values--value__with-actions`]: hasRowActions,
                      [`${iotPrefix}--list-item--content--values__disabled`]: disabled,
                    })}
                  >
                    {typeof secondaryValue === 'function' ? secondaryValue() : secondaryValue}
                  </div>
                ) : null}
                {renderTags()}
                {renderRowActions()}
              </div>
            </>
          )}
        </div>
      </div>
    </ListItemWrapper>
  );
};

const dragSourceSpecification = {
  beginDrag(props) {
    return {
      id: props.id,
    };
  },
};

// These props origininate from React DND and are passed down to
// the ListItem via the DragSource wrapper.
const dndPropsCollecting = (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
    renderDropTargets: monitor.getItemType() !== null, // render drop targets if anything is dragging
    draggingId: monitor.getItem()?.id,
  };
};

const ds = DragSource(ItemType, dragSourceSpecification, dndPropsCollecting);

ListItem.propTypes = ListItemPropTypes;
ListItem.defaultProps = ListItemDefaultProps;

export { ListItem as UnconnectedListItem };

export default ds(ListItem);
