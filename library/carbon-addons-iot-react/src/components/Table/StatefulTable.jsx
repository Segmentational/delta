import React, { useReducer } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import merge from 'lodash/merge';
import get from 'lodash/get';

import { getRowAction } from './tableUtilities';
import { tableReducer } from './tableReducer';
import {
  tableRegister,
  tablePageChange,
  tableFilterApply,
  tableFilterClear,
  tableSearchApply,
  tableToolbarToggle,
  tableActionCancel,
  tableActionApply,
  tableColumnSort,
  tableRowSelect,
  tableRowSelectAll,
  tableRowExpand,
  tableColumnOrder,
  tableRowActionStart,
  tableRowActionEdit,
  tableRowActionComplete,
  tableRowActionError,
  tableColumnResize,
  tableAdvancedFiltersToggle,
  tableAdvancedFiltersRemove,
  tableAdvancedFiltersApply,
  tableAdvancedFiltersCancel,
  tableAdvancedFiltersCreate,
  tableToggleAggregations,
  tableMultiSortToggleModal,
  tableSaveMultiSortColumns,
  tableCancelMultiSortColumns,
  tableAddMultiSortColumn,
  tableRemoveMultiSortColumn,
  tableClearMultiSortColumns,
  tableRowLoadMore,
} from './tableActionCreators';
import Table, { defaultProps } from './Table';

const callbackParent = (callback, ...args) => callback && callback(...args);

/** This component shares the exact same prop types as the Table component */
/* eslint-disable react/prop-types */
const StatefulTable = ({ data: initialData, expandedData, ...other }) => {
  const {
    id: tableId,
    columns: initialColumns,
    options: { hasUserViewManagement },
    options,
    view: {
      toolbar: { customToolbarContent },
      pagination: { totalItems: initialTotalItems },
    },
    view: initialState,
    actions: callbackActions,
    lightweight,
  } = merge({}, defaultProps({ data: initialData, ...other }), other);

  const [state, dispatch] = useReducer(tableReducer, {
    data: initialData,
    view: initialState,
    columns: initialColumns,
  });

  const isLoading = get(initialState, 'table.loadingState.isLoading');

  const {
    view,
    view: {
      table: { filteredData, selectedIds, sort },
    },
  } = state;

  const { pagination, toolbar, table, onUserViewModified } = callbackActions;

  // Need to initially sort and filter the tables data, but preserve the selectedId.
  useDeepCompareEffect(() => {
    dispatch(
      tableRegister({
        data: initialData,
        isLoading,
        view: initialState,
        totalItems: initialTotalItems || initialData.length,
        hasUserViewManagement,
      })
    );
  }, [
    // Props of type React.Element or React.Node must not be included in
    // useDeepCompareEffect dependency arrays, their object signature is
    // massive and will throw out of memory errors if compared.
    // https://github.com/kentcdodds/use-deep-compare-effect/issues/7
    // https://twitter.com/dan_abramov/status/1104415855612432384
    initialData,
    isLoading,
    initialState.pagination,
    initialState.filters,
    initialState.advancedFilters,
    initialState.toolbar.activeBar,
    // Remove the icon as it's a React.Element which can not be compared
    initialState.toolbar.batchActions.map((action) => {
      const { icon, ...nonElements } = action;
      return nonElements;
    }),
    initialState.toolbar.initialDefaultSearch,
    initialState.toolbar.search,
    initialState.toolbar.isDisabled,
    initialState.table.isSelectAllSelected,
    initialState.table.isSelectAllIndeterminate,
    initialState.table.selectedIds,
    initialState.table.sort,
    initialState.table.ordering,
    // Remove the error as it's a React.Element/Node which can not be compared
    initialState.table.rowActions.map((action) => {
      const { error, ...nonElements } = action;
      return nonElements;
    }),
    initialState.table.expandedIds,
    initialState.table.loadingMoreIds,
    initialState.table.loadingState,
  ]);

  const columns = hasUserViewManagement ? state.columns : initialColumns;
  const initialDefaultSearch = state?.view?.toolbar?.initialDefaultSearch || '';

  const { onChangePage } = pagination || {};
  const {
    onApplyFilter,
    onToggleFilter,
    onShowRowEdit,
    onToggleColumnSelection,
    onClearAllFilters,
    onCancelBatchAction,
    onApplyBatchAction,
    onApplySearch,
    onDownloadCSV,
    onToggleAdvancedFilter,
    onRemoveAdvancedFilter,
    onApplyAdvancedFilter,
    onCancelAdvancedFilter,
    onCreateAdvancedFilter,
    onToggleAggregations,
  } = toolbar || {};
  const {
    onChangeSort,
    onRowSelected,
    onRowClicked,
    onSelectAll,
    onRowExpanded,
    onRowLoadMore,
    onApplyRowAction,
    onClearRowError,
    onEmptyStateAction,
    onChangeOrdering,
    onColumnResize,
    onOverflowItemClicked,
    onSaveMultiSortColumns,
    onCancelMultiSortColumns,
    onClearMultiSortColumns,
    onAddMultiSortColumn,
    onRemoveMultiSortColumn,
  } = table || {};

  // In addition to updating the store, I always callback to the parent in case they want to do something
  const actions = {
    pagination: {
      onChangePage: (paginationValues) => {
        dispatch(tablePageChange(paginationValues));
        callbackParent(onChangePage, paginationValues);
      },
    },
    toolbar: {
      onApplyFilter: (filterValues) => {
        dispatch(tableFilterApply(filterValues));
        callbackParent(onApplyFilter, filterValues);
      },
      onToggleFilter: () => {
        dispatch(tableToolbarToggle('filter'));
        callbackParent(onToggleFilter, 'filter');
      },
      onToggleColumnSelection: () => {
        dispatch(tableToolbarToggle('column'));
        callbackParent(onToggleColumnSelection, 'column');
      },
      onShowRowEdit: () => {
        dispatch(tableToolbarToggle('rowEdit'));
        callbackParent(onShowRowEdit, 'rowEdit');
      },
      onClearAllFilters: () => {
        dispatch(tableFilterClear());
        callbackParent(onClearAllFilters);
      },
      onCancelBatchAction: () => {
        dispatch(tableActionCancel());
        callbackParent(onCancelBatchAction);
      },
      onApplyBatchAction: (id) => {
        dispatch(tableActionApply(id));
        callbackParent(onApplyBatchAction, id, selectedIds);
      },
      onApplySearch: (string) => {
        dispatch(tableSearchApply(string));
        callbackParent(onApplySearch, string);
      },
      onToggleAdvancedFilter: () => {
        dispatch(tableAdvancedFiltersToggle());
        callbackParent(onToggleAdvancedFilter);
      },
      onRemoveAdvancedFilter: (event, filterId) => {
        dispatch(tableAdvancedFiltersRemove(filterId));
        callbackParent(onRemoveAdvancedFilter);
      },
      onApplyAdvancedFilter: (filterState) => {
        dispatch(tableAdvancedFiltersApply(filterState));
        callbackParent(onApplyAdvancedFilter);
      },
      onCancelAdvancedFilter: () => {
        dispatch(tableAdvancedFiltersCancel());
        callbackParent(onCancelAdvancedFilter);
      },
      onCreateAdvancedFilter: () => {
        dispatch(tableAdvancedFiltersCreate());
        callbackParent(onCreateAdvancedFilter);
      },
      onToggleAggregations: () => {
        dispatch(tableToggleAggregations());
        callbackParent(onToggleAggregations);
      },
      onDownloadCSV,
    },
    table: {
      onChangeSort: (column) => {
        const sortDirection = sort ? sort.direction : undefined;
        dispatch(tableColumnSort(column, columns));
        callbackParent(onChangeSort, column, sortDirection);
      },
      onRowSelected: (rowId, isSelected, newSelectedIds) => {
        dispatch(tableRowSelect(newSelectedIds, options.hasRowSelection));
        // Params rowId & isSelected kept for backwards compatability
        callbackParent(onRowSelected, rowId, isSelected, newSelectedIds);
      },
      onRowClicked: (rowId) => {
        // This action doesn't update our table state, it's up to the user
        callbackParent(onRowClicked, rowId);
      },
      onSelectAll: (isSelected) => {
        dispatch(tableRowSelectAll(isSelected));
        callbackParent(onSelectAll, isSelected);
      },
      onRowExpanded: (rowId, isExpanded) => {
        const expansionOptions =
          typeof options.hasRowExpansion === 'object' ? options.hasRowExpansion : {};
        dispatch(tableRowExpand(rowId, isExpanded, null, expansionOptions));
        callbackParent(onRowExpanded, rowId, isExpanded);
      },
      onRowLoadMore: (rowId) => {
        dispatch(tableRowLoadMore(rowId));
        callbackParent(onRowLoadMore, rowId);
      },
      onApplyRowAction: async (actionId, rowId) => {
        const action = state.data && getRowAction(state.data, actionId, rowId);

        dispatch(tableRowActionStart(rowId));
        try {
          await callbackParent(onApplyRowAction, actionId, rowId);
          if (action.isEdit) {
            dispatch(tableRowActionEdit(rowId));
          }
          dispatch(tableRowActionComplete(rowId));
        } catch (error) {
          dispatch(tableRowActionError(rowId, error));
        }
      },
      onClearRowError: (rowId) => {
        dispatch(tableRowActionComplete(rowId));
        callbackParent(onClearRowError, rowId);
      },
      onEmptyStateAction: onEmptyStateAction
        ? () =>
            // This action doesn't update our table state, it's up to the user
            callbackParent(onEmptyStateAction)
        : null,
      onChangeOrdering: (ordering) => {
        dispatch(tableColumnOrder(ordering));
        callbackParent(onChangeOrdering, ordering);
      },
      onColumnResize: (resizedColumns) => {
        // For backwards compatability we only update the state when hasUserViewManagement is active
        if (hasUserViewManagement) {
          dispatch(tableColumnResize(resizedColumns));
        }
        callbackParent(onColumnResize, resizedColumns);
      },
      onOverflowItemClicked: (id, meta) => {
        if (id === 'multi-sort') {
          dispatch(tableMultiSortToggleModal(meta));
        }
        callbackParent(onOverflowItemClicked, id, meta);
      },
      onSaveMultiSortColumns: (sortColumns) => {
        dispatch(tableSaveMultiSortColumns(sortColumns));
        callbackParent(onSaveMultiSortColumns, sortColumns);
      },
      onCancelMultiSortColumns: () => {
        dispatch(tableCancelMultiSortColumns());
        callbackParent(onCancelMultiSortColumns);
      },
      onClearMultiSortColumns: () => {
        dispatch(tableClearMultiSortColumns());
        callbackParent(onClearMultiSortColumns);
      },
      onAddMultiSortColumn: (index) => {
        dispatch(tableAddMultiSortColumn(index));
        callbackParent(onAddMultiSortColumn, index);
      },
      onRemoveMultiSortColumn: (index) => {
        dispatch(tableRemoveMultiSortColumn(index));
        callbackParent(onRemoveMultiSortColumn, index);
      },
    },
    onUserViewModified: (viewConfiguration) => {
      callbackParent(onUserViewModified, viewConfiguration);
    },
  };

  const filteredCount = filteredData?.length || 0;
  const currentlyLoadedDataCount = state.data?.length || 0;

  const filteredTotalItems =
    filteredCount && filteredCount !== currentlyLoadedDataCount
      ? filteredCount
      : view?.pagination?.totalItems || initialTotalItems || currentlyLoadedDataCount;

  return filteredData ? (
    <Table
      {...other} // need to passthrough all other props
      id={tableId}
      columns={columns}
      data={filteredData}
      expandedData={expandedData}
      options={options}
      view={{
        ...view,
        toolbar: {
          ...view?.toolbar,
          search: {
            ...view?.toolbar?.search,
            defaultValue: initialDefaultSearch,
          },
          customToolbarContent,
        },
        pagination: {
          ...view.pagination,
          totalItems: filteredTotalItems,
        },
      }}
      actions={actions}
      lightweight={lightweight}
    />
  ) : null;
};

export default StatefulTable;
