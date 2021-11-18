import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tree16, Add16 } from '@carbon/icons-react';

import { CARD_SIZES, CARD_TITLE_HEIGHT, CARD_ACTIONS } from '../../constants/LayoutConstants';
import { settings } from '../../constants/Settings';
import Button from '../Button';
import { PICKER_KINDS } from '../../constants/DateConstants';
import { DATE_PICKER_OPTIONS } from '../../constants/CardPropTypes';

import Card from './Card';

const { prefix, iotPrefix } = settings;

const tooltipElement = <div>This is some other text</div>;

const cardProps = {
  title: 'My Title',
  id: 'my card',
};

describe('Card', () => {
  it('is selectable by testID or testId', () => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
    const { rerender } = render(<Card {...cardProps} size={CARD_SIZES.SMALL} testID="CARD_TEST" />);

    expect(screen.getByTestId('CARD_TEST')).toBeTruthy();
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining(`The 'testID' prop has been deprecated. Please use 'testId' instead.`)
    );
    jest.resetAllMocks();

    rerender(
      <Card
        {...cardProps}
        subtitle="Subtitle text"
        size={CARD_SIZES.SMALL}
        availableActions={{ range: true, expand: true }}
        testId="card_test"
        footerContent={() => <Button kind="ghost">Footer Content</Button>}
      />
    );
    expect(screen.getByTestId('card_test')).toBeTruthy();
    expect(screen.getByTestId('card_test-content')).toBeTruthy();
    expect(screen.getByTestId('card_test-title')).toBeTruthy();
    expect(screen.getByTestId('card_test-subtitle')).toBeTruthy();
    expect(screen.getByTestId('card_test-header')).toBeTruthy();
    expect(screen.getByTestId('card_test-toolbar')).toBeTruthy();
    expect(screen.getByTestId('card_test-toolbar-expand-button')).toBeTruthy();
    expect(screen.getByTestId('card_test-toolbar-range-picker')).toBeTruthy();
    expect(screen.getByTestId('card_test-footer')).toBeTruthy();
  });

  it('small', () => {
    render(<Card {...cardProps} size={CARD_SIZES.SMALL} />);

    // small should have full header
    expect(screen.getByTestId('Card-header')).toBeVisible();
  });

  it('child size prop', () => {
    const childRenderInTitleCard = jest.fn();

    const { rerender } = render(
      <Card title="My Title" size={CARD_SIZES.MEDIUM}>
        {childRenderInTitleCard}
      </Card>
    );
    expect(childRenderInTitleCard).toHaveBeenCalledWith(
      {
        width: 0,
        height: -CARD_TITLE_HEIGHT,
        position: null,
      },
      expect.anything()
    );

    const childRenderInNoTitleCard = jest.fn();

    rerender(<Card size={CARD_SIZES.MEDIUM}>{childRenderInNoTitleCard}</Card>);
    expect(childRenderInNoTitleCard).toHaveBeenCalledWith(
      {
        width: 0,
        height: 0,
        position: null,
      },
      expect.anything()
    );
  });

  it('render icons', () => {
    const { rerender } = render(
      <Card {...cardProps} size={CARD_SIZES.SMALL} availableActions={{ range: true }} />
    );
    // should render CardRangePicker if isEditable is false
    expect(screen.getAllByTitle('Select time range')[0]).toBeVisible();

    rerender(
      <Card
        {...cardProps}
        size={CARD_SIZES.SMALL}
        availableActions={{ range: true, expand: true }}
      />
    );

    // should render CardRangePicker and Expand
    expect(screen.getAllByTitle('Select time range')[0]).toBeVisible();
    expect(screen.getByTitle('Expand to fullscreen')).toBeVisible();

    rerender(
      <Card {...cardProps} size={CARD_SIZES.SMALL} isEditable availableActions={{ range: true }} />
    );
    // CardRangePicker icon should not render if isEditable prop is true
    expect(screen.queryByTitle('Select time range')).toBeNull();
  });

  it('render custom icons', () => {
    render(
      <Card
        {...cardProps}
        size={CARD_SIZES.SMALL}
        availableActions={{ range: true, expand: true }}
        renderExpandIcon={Tree16}
      />
    );

    const button = screen.queryByLabelText('Expand to fullscreen');

    const { container } = render(<Tree16 aria-hidden="true" aria-label="Expand to fullscreen" />);

    expect(button.firstChild).toEqual(container.firstChild.firstChild);
  });

  it('additional prop based elements', () => {
    const { container, rerender } = render(
      <Card {...cardProps} size={CARD_SIZES.LARGE} tooltip={tooltipElement} />
    );
    // tooltip prop will render a tooltip in the header
    expect(
      container.querySelectorAll(`.${iotPrefix}--card--header .${prefix}--tooltip__trigger`)
    ).toHaveLength(1);
    // without the isLoading prop SkeletonWrapper should not be rendered
    expect(container.querySelectorAll(`.${iotPrefix}--card--skeleton-wrapper`)).toHaveLength(0);
    // with the isLoading prop SkeletonWrapper should  be rendered
    rerender(
      <Card {...cardProps} isLoading size={CARD_SIZES.SMALLWIDE} tooltip={tooltipElement} />
    );
    expect(container.querySelectorAll(`.${iotPrefix}--card--skeleton-wrapper`)).toHaveLength(1);
  });
  it('isExpanded', () => {
    const { container } = render(
      <Card {...cardProps} isExpanded size={CARD_SIZES.LARGE} tooltip={tooltipElement} />
    );
    // isExpanded renders the modal wrapper around it
    expect(container.querySelectorAll(`.${prefix}--modal`)).toHaveLength(1);
  });
  it('card actions for expand/collapse', () => {
    const mockOnCardAction = jest.fn();
    const { rerender } = render(
      <Card
        {...cardProps}
        isExpanded
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ expand: true }}
      />
    );
    userEvent.click(screen.getByTitle('Close'));
    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.CLOSE_EXPANDED_CARD);

    mockOnCardAction.mockClear();
    rerender(
      <Card
        {...cardProps}
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ expand: true }}
      />
    );
    userEvent.click(screen.getByTitle('Expand to fullscreen'));
    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.OPEN_EXPANDED_CARD);
  });

  it('card editable actions', async () => {
    const mockOnCardAction = jest.fn();
    render(
      <Card
        {...cardProps}
        isEditable
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ edit: true, clone: true, delete: true }}
      />
    );
    fireEvent.click(screen.getAllByTitle('Open and close list of options')[0]);
    const secondElement = await screen.findByText('Clone card');
    fireEvent.click(secondElement);
    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.CLONE_CARD);

    // Reopen menu
    fireEvent.click(screen.getAllByTitle('Open and close list of options')[0]);
    mockOnCardAction.mockClear();
    const thirdElement = await screen.findByText('Delete card');
    fireEvent.click(thirdElement);
    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.DELETE_CARD);
  });
  it('card actions for default range picker', () => {
    const mockOnCardAction = jest.fn();
    render(
      <Card
        {...cardProps}
        isExpanded
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ expand: true, range: true }}
      />
    );
    // pop out the calendar
    userEvent.click(screen.getAllByTitle(`Select time range`)[0]);

    // select a default range
    userEvent.click(screen.getByText(`Last 24 hrs`));

    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.CHANGE_TIME_RANGE, {
      range: 'last24Hours',
    });
  });

  it('card actions for default range picker using datetimepicker format', () => {
    const mockOnCardAction = jest.fn();
    const { rerender } = render(
      <Card
        {...cardProps}
        isExpanded
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ expand: true, range: true }}
        timeRangeOptions={{
          last48Hours: { label: 'Last 48 Hours', offset: 48 * 60 },
          last24Hours: { label: 'Last 24 Hours', offset: 24 * 60 },
          last8Hours: { label: 'Last 8 Hours', offset: 8 * 60 },
          last4Hours: { label: 'Last 4 Hours', offset: 4 * 60 },
          last2Hours: { label: 'Last 2 Hours', offset: 2 * 60 },
          lastHour: { label: 'Last Hour', offset: 60 * 60 },
        }}
      />
    );

    expect(screen.getByText('Default')).toBeVisible();

    rerender(
      <Card
        {...cardProps}
        isExpanded
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ expand: true, range: true }}
        timeRange="last2Hours"
        timeRangeOptions={{
          last48Hours: { label: 'Last 48 Hours', offset: 48 * 60 },
          last24Hours: { label: 'Last 24 Hours', offset: 24 * 60 },
          last8Hours: { label: 'Last 8 Hours', offset: 8 * 60 },
          last4Hours: { label: 'Last 4 Hours', offset: 4 * 60 },
          last2Hours: { label: 'Last 2 Hours', offset: 2 * 60 },
          lastHour: { label: 'Last Hour', offset: 60 * 60 },
        }}
      />
    );

    expect(screen.getByText('Last 2 Hours')).toBeVisible();

    // pop out the calendar
    userEvent.click(screen.getAllByTitle(`Select time range`)[0]);

    // select a default range
    userEvent.click(screen.getByText(`Last 24 Hours`));

    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.CHANGE_TIME_RANGE, {
      range: 'last24Hours',
    });
    expect(screen.getByText('Last 24 Hours')).toBeVisible();
  });

  it('card actions for dateTime range picker', () => {
    const mockOnCardAction = jest.fn();
    render(
      <Card
        {...cardProps}
        isExpanded
        size={CARD_SIZES.LARGE}
        tooltip={tooltipElement}
        onCardAction={mockOnCardAction}
        availableActions={{ expand: true, range: DATE_PICKER_OPTIONS.FULL }}
      />
    );
    // pop out the calendar
    userEvent.click(screen.getAllByLabelText(`Calendar`)[0]);

    const hourLabel = 'Last 24 hours';

    // select a default range
    userEvent.click(screen.getByText(hourLabel));

    // apply the default range
    userEvent.click(screen.getByText('Apply'));

    expect(mockOnCardAction).toHaveBeenCalledWith(cardProps.id, CARD_ACTIONS.CHANGE_TIME_RANGE, {
      timeRangeKind: PICKER_KINDS.PRESET,
      timeRangeValue: {
        id: 'item-05',
        label: hourLabel,
        offset: 24 * 60,
        tooltipValue: '2018-09-20 08:57 to Now',
      },
    });

    expect(screen.getByTestId('Card-subtitle')).toHaveTextContent('2018-09-20 08:57 to Now');
  });
  it('card toolbar renders in header only when there are actions', () => {
    const { container, rerender } = render(
      <Card {...cardProps} isExpanded size={CARD_SIZES.SMALL} availableActions={{ expand: true }} />
    );
    expect(
      container.querySelectorAll(`.${iotPrefix}--card--header .${iotPrefix}--card--toolbar`)
    ).toHaveLength(1);

    rerender(<Card {...cardProps} isExpanded size={CARD_SIZES.SMALL} />);
    expect(
      container.querySelectorAll(`.${iotPrefix}--card--header .${iotPrefix}--card--toolbar`)
    ).toHaveLength(0);
  });

  it('render footer only if prop is present', () => {
    const { rerender } = render(
      <Card
        {...cardProps}
        size={CARD_SIZES.SMALL}
        availableActions={{ range: true, expand: true }}
        renderExpandIcon={Tree16}
      />
    );

    expect(screen.queryByTestId('card_test-footer')).toBeFalsy();

    rerender(
      <Card
        {...cardProps}
        size={CARD_SIZES.SMALL}
        availableActions={{ range: true, expand: true }}
        renderExpandIcon={Tree16}
        footerContent={() => <Button kind="ghost">Footer Content</Button>}
      />
    );

    expect(screen.queryByText(/Footer Content/)).toBeInTheDocument();
  });

  it('should throw a warning if in DEV and availableActions.range is a string', () => {
    const { __DEV__ } = global;
    const { error } = console;
    global.__DEV__ = true;
    console.error = jest.fn();
    render(<Card {...cardProps} availableActions={{ range: 'string' }} />);
    expect(console.error).toHaveBeenCalledWith(
      expect.stringContaining(
        'The Card components availableActions.range is an experimental property and may be subject to change.'
      )
    );
    global.__DEV__ = __DEV__;
    console.error = error;
  });

  describe('overflow tooltips', () => {
    const originalOffsetWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'offsetWidth'
    );
    const originalScrollWidth = Object.getOwnPropertyDescriptor(
      HTMLElement.prototype,
      'scrollWidth'
    );

    beforeEach(() => {
      Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
        writable: true,
        configurable: true,
        value: 400,
      });
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', {
        writable: true,
        configurable: true,
        value: 500,
      });
    });

    afterAll(() => {
      Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth);
      Object.defineProperty(HTMLElement.prototype, 'scrollWidth', originalScrollWidth);
    });

    it('should put the title in a tooltip if it overflows', () => {
      const aLongTitle =
        'A very very long title which will almost certainly overflow and require a tooltip and we must test these things, you know.';
      render(<Card {...cardProps} title={aLongTitle} />);
      const tooltipButton = screen.getByRole('button', {
        name: aLongTitle,
      });
      expect(tooltipButton).toBeVisible();
      expect(tooltipButton).toHaveClass(`${iotPrefix}--card--title--text__overflow`);
      userEvent.click(tooltipButton);
      expect(screen.getByTestId('Card-title-tooltip')).toBeVisible();
      expect(tooltipButton).toHaveAttribute('aria-expanded', 'true');
    });

    it('should put the subtitle in a tooltip if it overflows', () => {
      const aLongSubTitle =
        'A very very long subtitle which will almost certainly overflow and require a tooltip and we must test these things, you know.';
      render(<Card {...cardProps} title="A Very Modest Title" subtitle={aLongSubTitle} />);
      const tooltipButton = screen.getByRole('button', {
        name: aLongSubTitle,
      });
      expect(tooltipButton).toBeVisible();
      expect(tooltipButton).toHaveClass(`${iotPrefix}--card--subtitle--text`);
      userEvent.click(tooltipButton);
      expect(screen.getByTestId('Card-subtitle')).toBeVisible();
      expect(tooltipButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('should show the short error if a small or smallwide card', () => {
    const { rerender } = render(<Card {...cardProps} size={CARD_SIZES.SMALL} error />);
    expect(screen.getByText('Data error.')).toBeVisible();
    rerender(<Card {...cardProps} size={CARD_SIZES.SMALLWIDE} error />);
    expect(screen.getByText('Data error.')).toBeVisible();
  });

  it('should render the prop locale on a date time picker card', () => {
    render(
      <Card
        title="Card with date picker"
        id="facilitycard-with-date-picker"
        size={CARD_SIZES.MEDIUM}
        isLoading={false}
        isEmpty={false}
        isEditable={false}
        isExpanded={false}
        locale="fr"
        breakpoint="lg"
        availableActions={{
          range: 'iconOnly',
        }}
        timeRangeOptions={{
          last48Hours: { label: 'Last 48 Hours', offset: 48 * 60 },
          last24Hours: { label: 'Last 24 Hours', offset: 24 * 60 },
          last8Hours: { label: 'Last 8 Hours', offset: 8 * 60 },
          last4Hours: { label: 'Last 4 Hours', offset: 4 * 60 },
          last2Hours: { label: 'Last 2 Hours', offset: 2 * 60 },
          lastHour: { label: 'Last Hour', offset: 60 * 60 },
        }}
      />
    );

    userEvent.click(screen.getAllByLabelText('Calendar')[0]);
    userEvent.click(screen.getByText('Custom Range'));
    userEvent.click(screen.getByLabelText('Absolute'));
    expect(screen.getByText('lun')).toBeVisible();
    expect(screen.getByText('mar')).toBeVisible();
    expect(screen.getByText('mer')).toBeVisible();
    expect(screen.getByText('jeu')).toBeVisible();
    expect(screen.getByText('ven')).toBeVisible();
    expect(screen.getByText('sam')).toBeVisible();
    expect(screen.getByText('dim')).toBeVisible();
  });

  it('card extra actions(single/multiple)', async () => {
    const mockExtraSingle = jest.fn();
    const mockExtraMultiple = jest.fn();
    const singleExtraAction = {
      id: 'extrasingleaction',
      icon: Add16,
      callback: mockExtraSingle,
    };
    const singleExtraDisabledAction = {
      id: 'extrasingleaction',
      icon: Add16,
      disabled: true,
      callback: mockExtraSingle,
    };
    const multiExtraAction = {
      id: 'extramultiaction',
      children: [
        {
          id: 'firstItem',
          itemText: 'Item1',
          callback: mockExtraMultiple,
        },
        {
          id: 'secondItem',
          itemText: 'Item2',
          callback: mockExtraMultiple,
        },
        {
          id: 'thirdItem',
          itemText: 'Item3',
          disabled: true,
          callback: mockExtraMultiple,
        },
        {
          id: 'fourthItem',
          itemText: 'Item4',
          hidden: true,
          callback: mockExtraMultiple,
        },
      ],
    };

    // Test single icon button action
    const { rerender } = render(
      <Card
        {...cardProps}
        size={CARD_SIZES.LARGE}
        extraActions={singleExtraAction}
        availableActions={{
          extra: true,
        }}
      />
    );
    fireEvent.click(screen.getAllByTitle('Action Label')[0]);
    expect(mockExtraSingle).toHaveBeenCalled();
    jest.resetAllMocks();

    // Test disabled icon button action
    rerender(
      <Card
        {...cardProps}
        size={CARD_SIZES.LARGE}
        extraActions={singleExtraDisabledAction}
        availableActions={{
          extra: true,
        }}
      />
    );
    expect(screen.getAllByTitle('Action Label')[0]).toBeDisabled();
    expect(mockExtraSingle).not.toHaveBeenCalled();
    jest.resetAllMocks();

    // Test extra action when card isExpanded
    rerender(
      <Card
        {...cardProps}
        size={CARD_SIZES.LARGE}
        extraActions={singleExtraAction}
        isExpanded
        availableActions={{
          extra: true,
          expand: true,
        }}
      />
    );
    fireEvent.click(screen.getAllByTitle('Action Label')[0]);
    expect(mockExtraSingle).toHaveBeenCalled();
    jest.resetAllMocks();

    // Test multiple extra actions
    rerender(
      <Card
        {...cardProps}
        size={CARD_SIZES.LARGE}
        extraActions={multiExtraAction}
        availableActions={{
          extra: true,
        }}
      />
    );
    fireEvent.click(screen.getAllByTitle('Open and close list of options')[0]);
    const firstItem = await screen.findByText('Item1');
    fireEvent.click(firstItem);
    expect(mockExtraMultiple).toHaveBeenCalled();

    // Reopen menu
    fireEvent.click(screen.getAllByTitle('Open and close list of options')[0]);
    mockExtraMultiple.mockClear();
    const secondItem = await screen.findByText('Item2');
    fireEvent.click(secondItem);
    expect(mockExtraMultiple).toHaveBeenCalled();

    // Reopen menu to verify disabled item
    fireEvent.click(screen.getAllByTitle('Open and close list of options')[0]);
    const thirdItem = await screen.findByText('Item3');
    expect(thirdItem.closest('button')).toBeDisabled();

    // Reopen menu to verify hidden item
    fireEvent.click(screen.getAllByTitle('Open and close list of options')[0]);
    expect(screen.queryByText('Item4')).not.toBeInTheDocument();
  });
});
