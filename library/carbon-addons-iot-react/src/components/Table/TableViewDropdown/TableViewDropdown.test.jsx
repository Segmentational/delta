import React, { useState } from 'react';
import { mount } from 'enzyme';
import { Dropdown } from 'carbon-components-react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { settings } from '../../../constants/Settings';

import TableViewDropdown from './TableViewDropdown';

const { iotPrefix, prefix } = settings;

describe('TableViewDropdown', () => {
  const myViews = [
    {
      id: 'view-1',
      text: 'View 1',
    },
    {
      id: 'view-2',
      text: 'View 2',
    },
    {
      id: 'view-3',
      text: 'View 3',
    },
  ];

  const actions = {
    onSaveAsNewView: jest.fn(),
    onManageViews: jest.fn(),
    onChangeView: jest.fn(),
  };

  const itemSelector = `.${prefix}--list-box__menu-item__option`;
  const iotItemSelector = `.${prefix}--list-box__field .${iotPrefix}--view-dropdown__item`;

  describe('item rendering', () => {
    it('adds a "view all" default item to the start of the list of views', () => {
      const wrapper = mount(
        <TableViewDropdown views={myViews} actions={actions} selectedViewId={myViews[2].id} />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      // actions will be first, then the views
      const viewAllItem = wrapper.find(itemSelector).at(2);
      expect(viewAllItem.text()).toEqual('View All');
    });

    it('adds a "manage views" item at the end of the actions', () => {
      const wrapper = mount(<TableViewDropdown views={myViews} actions={actions} />);
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      // it will be right after the save actions
      const manageViewsItem = wrapper.find(itemSelector).at(1);
      expect(manageViewsItem.text()).toEqual('Manage views');
    });

    it('adds a "save new view" item before the "manage views" item', () => {
      const wrapper = mount(<TableViewDropdown views={myViews} actions={actions} />);
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const saveViewItem = wrapper.find(itemSelector).first();
      expect(saveViewItem.text()).toEqual('Save as new view');
    });

    it('adds a "save view" item before the "manage views" item', () => {
      const wrapper = mount(
        <TableViewDropdown
          views={myViews}
          actions={actions}
          selectedViewEdited
          selectedViewId={myViews[0].id}
        />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const saveViewItem = wrapper.find(itemSelector).at(1);
      expect(saveViewItem.text()).toEqual('Save changes');
    });

    it('doesnt add a "save view" item before the "manage views" item if selectedViewId is unset or view all', () => {
      const wrapper = mount(
        <TableViewDropdown views={myViews} actions={actions} selectedViewEdited />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const saveViewItem = wrapper.find(itemSelector).at(1);
      expect(saveViewItem.text()).not.toEqual('Save changes');
    });

    it('renders an icon for the manage views item', () => {
      const wrapper = mount(
        <TableViewDropdown views={myViews} actions={actions} selectedViewEdited />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const manageViewsItem = wrapper.find(itemSelector).at(2);
      expect(manageViewsItem.exists('svg')).toBeTruthy();
    });

    it('adds a "edited" postfix to selected item & title when selectedViewEdited is true', () => {
      const wrapper = mount(
        <TableViewDropdown views={myViews} actions={actions} selectedViewEdited />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const selectedItem = wrapper.find(iotItemSelector);
      expect(selectedItem.props().title).toEqual('View All - Edited');

      const editedText = wrapper.find(
        `.${prefix}--list-box__field .${iotPrefix}--view-dropdown__edited-text`
      );
      expect(editedText.text()).toEqual(' - Edited');
    });
  });

  describe('selection', () => {
    it('selected the proper item on init', () => {
      const wrapperWithoutInitialDefault = mount(
        <TableViewDropdown views={myViews} actions={actions} />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapperWithoutInitialDefault.find('button').simulate('click');
      const viewAllItem = wrapperWithoutInitialDefault.find(iotItemSelector);
      expect(viewAllItem.props().title).toEqual('View All');

      const wrapperWithInitiallySelected = mount(
        <TableViewDropdown views={myViews} actions={actions} selectedViewId={myViews[0].id} />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapperWithInitiallySelected.find('button').simulate('click');
      const view1Item = wrapperWithInitiallySelected.find(iotItemSelector);
      expect(view1Item.props().title).toEqual('View 1');
    });

    it('can have the selected item set externally after initial render', () => {
      const wrapper = mount(
        <TableViewDropdown views={myViews} actions={actions} selectedViewId={myViews[0].id} />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const view1Item = wrapper.find(iotItemSelector);
      expect(view1Item.props().title).toEqual('View 1');

      wrapper.setProps({ ...wrapper.props(), selectedViewId: myViews[2].id });
      wrapper.update();

      const view3Item = wrapper.find(iotItemSelector);
      expect(view3Item.props().title).toEqual('View 3');
    });
  });

  it('calls the proper actions', () => {
    const onChangeView = jest.fn();
    const wrapper = mount(
      React.createElement(() => {
        // We need to handle the state changes here so that the actual
        // selections based on click events get reflected in the component.
        const [selectedViewId, setSelectedViewId] = useState(undefined);
        return (
          <TableViewDropdown
            views={myViews}
            actions={{
              ...actions,
              onChangeView: onChangeView.mockImplementation((viewItem) => {
                setSelectedViewId(viewItem.id);
              }),
            }}
            selectedViewEdited
            selectedViewId={selectedViewId}
          />
        );
      })
    );

    expect(actions.onSaveAsNewView).not.toBeCalled();
    expect(actions.onManageViews).not.toBeCalled();
    expect(onChangeView).not.toBeCalled();

    const dropdown = wrapper.find('button');

    // The list of options is not rendered to the DOM until the dropdown button has been clicked
    dropdown.simulate('click');
    wrapper.find(itemSelector).last().simulate('click');

    dropdown.simulate('click');
    wrapper.find(itemSelector).at(1).simulate('click');

    dropdown.simulate('click');
    wrapper.find(itemSelector).at(2).simulate('click');

    dropdown.simulate('click');
    wrapper.find(itemSelector).at(3).simulate('click');

    dropdown.simulate('click');
    wrapper.find(itemSelector).first().simulate('click');

    dropdown.simulate('click');
    wrapper.find(itemSelector).at(4).simulate('click');

    expect(actions.onSaveAsNewView).toBeCalledTimes(1);
    expect(actions.onManageViews).toBeCalledTimes(1);
    expect(onChangeView).toBeCalledTimes(4);
  });

  describe('overrides', () => {
    it('can be overridden to use another dropdown component', () => {
      const MyDropdown = (props) => {
        return (
          <div className="my-dropdown">
            <Dropdown {...props} />
          </div>
        );
      };
      const wrapper = mount(
        <TableViewDropdown
          views={myViews}
          actions={actions}
          overrides={{ dropdown: { component: MyDropdown } }}
        />
      );
      expect(wrapper.exists('.my-dropdown')).toBeTruthy();
    });

    it('can be overridden to use custom Dropdown props', () => {
      const wrapper = mount(
        <TableViewDropdown
          views={myViews}
          actions={actions}
          overrides={{
            dropdown: {
              props: {
                items: [
                  {
                    id: 'view-1',
                    text: 'View 1',
                  },
                ],
              },
            },
          }}
        />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const allItems = wrapper.find(itemSelector);
      expect(allItems.length).toEqual(1);
    });

    it('can be overridden to use another TableViewDropdownItem', () => {
      const wrapper = mount(
        <TableViewDropdown
          views={myViews}
          actions={actions}
          overrides={{
            dropdownItem: {
              component: () => 'myItem',
            },
          }}
        />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const firstItem = wrapper.find(itemSelector).first();
      expect(firstItem.text()).toEqual('myItem');
    });

    it('can be overridden to use custom TableViewDropdownItem props', () => {
      const wrapper = mount(
        <TableViewDropdown
          views={myViews}
          actions={actions}
          overrides={{
            dropdownItem: {
              props: { isCompact: true },
            },
          }}
        />
      );
      // The list of options is not rendered to the DOM until the dropdown button has been clicked
      wrapper.find('button').simulate('click');
      const firstTableViewDropdownItem = wrapper
        .find(itemSelector)
        .first()
        .find('TableViewDropdownItem');
      expect(firstTableViewDropdownItem.props().isCompact).toEqual(true);
    });
  });

  it('i18n string tests', () => {
    const i18nTest = {
      view: 'viewz',
      edited: 'edited',
      viewAll: 'view-all',
      saveAsNewView: 'save-as-new',
      saveChanges: 'save-changes',
      manageViews: 'manage-view',
      ariaLabel: 'aria-label',
      tableViewMenu: 'table-view',
    };

    const i18nDefault = TableViewDropdown.defaultProps.i18n;

    render(
      <TableViewDropdown
        views={myViews}
        actions={actions}
        i18n={i18nTest}
        selectedViewEdited
        selectedViewId={myViews[0].id}
      />
    );

    // The list of options is not rendered to the DOM until the dropdown button has been clicked
    fireEvent.click(screen.getByRole('button'));

    expect(screen.getAllByText(i18nTest.view, { exact: false })[0]).toBeInTheDocument();
    expect(screen.getAllByText(i18nTest.viewAll)[0]).toBeInTheDocument();
    expect(screen.getAllByText(i18nTest.saveAsNewView)[0]).toBeInTheDocument();
    expect(screen.getAllByText(i18nTest.saveChanges)[0]).toBeInTheDocument();
    expect(screen.getAllByText(i18nTest.manageViews)[0]).toBeInTheDocument();
    expect(screen.getAllByLabelText(i18nTest.ariaLabel)[0]).toBeInTheDocument();

    expect(screen.queryByText(i18nDefault.view)).not.toBeInTheDocument();
    expect(screen.queryByText(i18nDefault.viewAll)).not.toBeInTheDocument();
    expect(screen.queryByText(i18nDefault.saveAsNewView)).not.toBeInTheDocument();
    expect(screen.queryByText(i18nDefault.saveChanges)).not.toBeInTheDocument();
    expect(screen.queryByText(i18nDefault.manageViews)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(i18nDefault.ariaLabel)).not.toBeInTheDocument();
  });
});
