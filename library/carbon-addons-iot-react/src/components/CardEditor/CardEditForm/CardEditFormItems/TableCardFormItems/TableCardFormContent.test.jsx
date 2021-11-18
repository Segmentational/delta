import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { CARD_SIZES, CARD_TYPES } from '../../../../../constants/LayoutConstants';

import TableCardFormContent from './TableCardFormContent';

const commonCardConfig = {
  id: 'id',
  title: 'My Table Card',
  size: CARD_SIZES.LARGE,
  type: CARD_TYPES.TABLE,
  content: {},
};
const mockOnChange = jest.fn();
const commonProps = {
  cardConfig: commonCardConfig,
  dataItems: [
    { dataItemId: 'temperature', dataSourceId: 'temperature', label: 'Temperature' },
    { dataItemId: 'pressure', dataSourceId: 'pressure', label: 'Pressure' },
    {
      dataItemId: 'deviceid',
      dataSourceId: 'deviceid',
      label: 'deviceid',
      destination: 'groupBy',
      type: 'DIMENSION',
    },
  ],
  availableDimensions: {
    manufacturer: ['Rentech', 'GHI'],
    deviceid: ['73000', '73001'],
  },
  onChange: mockOnChange,
  selectedTimeRange: 'this week',
  setSelectedDataItems: jest.fn(),
  translateWithId: jest.fn((id) => {
    switch (id) {
      default:
        return '';
      case 'clear.all':
        return 'Clear selection';
    }
  }),
};

describe('TableCardFormContent', () => {
  it('should render dataitems and dimensions', () => {
    render(<TableCardFormContent {...commonProps} />);
    // check for the temperature and pressure to be shown under data items
    const dataItemComboBox = screen.getByTestId('combo-box');
    expect(dataItemComboBox).toBeInTheDocument();
    fireEvent.click(dataItemComboBox);
    expect(screen.queryByText('temperature')).toBeDefined();
    expect(screen.queryByText('pressure')).toBeDefined();
    expect(screen.queryByText('manufacturer')).toBeNull();

    // check for the dimensions to be shown
    fireEvent.click(screen.getByLabelText(/Select dim/));
    expect(screen.queryByText('manufacturer')).toBeDefined();
    expect(screen.queryAllByText('deviceid')).toBeDefined();
  });
  it('puts special data items in groupBy section', () => {
    render(<TableCardFormContent {...commonProps} />);
    // check for the temperature and pressure to be shown under data items
    const dataItemComboBox = screen.getByTestId('combo-box');
    expect(dataItemComboBox).toBeInTheDocument();
    fireEvent.click(dataItemComboBox);
    expect(screen.queryAllByText('deviceid')).toBeDefined();
    expect(screen.queryByText('pressure')).toBeDefined();

    fireEvent.click(screen.queryAllByText('deviceid')[0]);
    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            sort: 'DESC',
            dataItemId: 'timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'deviceid',
            destination: 'groupBy',
            // dataSourceId is generated with a uuid to stay unique
            dataSourceId: 'deviceid',
            dataItemId: 'deviceid',
            type: 'DIMENSION',
          },
        ],
      },
      dataSource: {
        groupBy: ['deviceid'],
      },
    });
  });
  it('fires onChange when dataItem deviceId is selected', () => {
    render(<TableCardFormContent {...commonProps} />);
    // check for the temperature and pressure to be shown under data items
    const dataItemComboBox = screen.getByTestId('combo-box');
    expect(dataItemComboBox).toBeInTheDocument();
    fireEvent.click(dataItemComboBox);
    expect(screen.queryByText('temperature')).toBeDefined();
    expect(screen.queryByText('pressure')).toBeDefined();

    fireEvent.click(screen.queryByText('temperature'));
    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            sort: 'DESC',
            dataItemId: 'timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'Temperature',
            // dataSourceId is generated with a uuid to stay unique
            dataSourceId: expect.stringContaining('temperature'),
            dataItemId: 'temperature',
          },
        ],
      },
    });
  });
  it('prioritizes getValidDataItems for the dropdown', () => {
    render(
      <TableCardFormContent
        {...commonProps}
        dataItems={[
          { dataItemId: 'inValidDataItem', dataSourceId: 'inValidDataItem', label: 'Data Item' },
        ]}
        getValidDataItems={() => [
          { dataItemId: 'validDataItem', dataSourceId: 'validDataItem', label: 'Data Item' },
        ]}
      />
    );
    // check for the temperature and pressure to be shown under data items
    const dataItemComboBox = screen.getByTestId('combo-box');
    expect(dataItemComboBox).toBeInTheDocument();
    fireEvent.click(dataItemComboBox);
    expect(screen.queryByText('validDataItem')).toBeDefined();
    expect(screen.queryByText('inValidDataItem')).toBeNull();
  });
  it('selecting dimensions shows clear button', () => {
    const mockOnChange = jest.fn();
    render(<TableCardFormContent {...commonProps} onChange={mockOnChange} />);
    expect(mockOnChange).not.toHaveBeenCalled();
    // check for the temperature and pressure to be shown under data items
    fireEvent.click(screen.getByLabelText(/Select dim/));
    expect(screen.queryByText('manufacturer')).toBeDefined();
    fireEvent.click(screen.queryByText('manufacturer'));
    // the selection state of the box should be updated
    expect(screen.getByLabelText('Clear selection')).toBeTruthy();
    // the callback for onChange should be called
    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      ...commonCardConfig,
      content: {
        columns: [
          {
            dataItemId: 'timestamp',
            dataSourceId: 'timestamp',
            label: 'Timestamp',
            type: 'TIMESTAMP',
            sort: 'DESC',
          },
          {
            dataItemId: 'manufacturer',
            dataSourceId: 'manufacturer',
            destination: 'groupBy',
            label: 'manufacturer',
            type: 'DIMENSION',
          },
        ],
      },
      dataSource: { groupBy: ['manufacturer'] },
    });
  });
  it('edit mode with dataitems and dimension columns show work correctly', () => {
    render(
      <TableCardFormContent
        {...commonProps}
        cardConfig={{
          ...commonCardConfig,
          content: {
            columns: [
              {
                label: 'Timestamp',
                dataSourceId: 'timestamp',
                type: 'TIMESTAMP',
              },
              {
                label: 'Manufacturer',
                dataSourceId: 'manufacturer',
                type: 'DIMENSION',
              },
              { label: 'Temperature', dataSourceId: 'temperature' },
            ],
          },
        }}
      />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();
  });
  it('remove button should remove items from the data items list', () => {
    render(
      <TableCardFormContent
        {...commonProps}
        cardConfig={{
          ...commonCardConfig,
          content: {
            columns: [
              {
                label: 'Timestamp',
                dataSourceId: 'timestamp',
                type: 'TIMESTAMP',
              },
              {
                label: 'Manufacturer',
                dataSourceId: 'manufacturer',
                type: 'DIMENSION',
              },
              { label: 'Temperature', dataSourceId: 'temperature' },
            ],
          },
        }}
      />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();

    const removeManufacturerButton = screen.getAllByRole('button', { name: 'Remove' })[1];
    expect(removeManufacturerButton).toBeInTheDocument();

    fireEvent.click(removeManufacturerButton);

    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          { label: 'Temperature', dataSourceId: 'temperature' },
        ],
      },
    });
  });
  it('remove button should remove items from the groupBy list', () => {
    render(
      <TableCardFormContent
        {...commonProps}
        cardConfig={{
          ...commonCardConfig,
          content: {
            columns: [
              {
                label: 'Timestamp',
                dataSourceId: 'timestamp',
                type: 'TIMESTAMP',
              },
              {
                label: 'Manufacturer',
                dataSourceId: 'manufacturer',
                dataItemId: 'manufacturer',
                type: 'DIMENSION',
              },
              { label: 'Temperature', dataSourceId: 'temperature' },
            ],
          },
          dataSource: {
            groupBy: ['manufacturer'],
          },
        }}
      />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();

    const removeManufacturerButton = screen.getAllByRole('button', { name: 'Remove' })[1];
    expect(removeManufacturerButton).toBeInTheDocument();

    fireEvent.click(removeManufacturerButton);

    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          { label: 'Temperature', dataSourceId: 'temperature' },
        ],
      },
    });
  });
  it('remove button should remove items from the groupBy list but leave the dataSource alone', () => {
    render(
      <TableCardFormContent
        {...commonProps}
        cardConfig={{
          ...commonCardConfig,
          content: {
            columns: [
              {
                label: 'Timestamp',
                dataSourceId: 'timestamp',
                type: 'TIMESTAMP',
              },
              {
                label: 'Manufacturer',
                dataSourceId: 'manufacturer',
                dataItemId: 'manufacturer',
                type: 'DIMENSION',
              },
              { label: 'Temperature', dataSourceId: 'temperature' },
            ],
          },
          dataSource: {
            groupBy: ['manufacturer'],
            timeGrain: 'hour',
          },
        }}
      />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();

    const removeManufacturerButton = screen.getAllByRole('button', { name: 'Remove' })[1];
    expect(removeManufacturerButton).toBeInTheDocument();

    fireEvent.click(removeManufacturerButton);

    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          { label: 'Temperature', dataSourceId: 'temperature' },
        ],
      },
      dataSource: {
        timeGrain: 'hour',
      },
    });
  });
  it('remove button should remove items from the columns but leave groupby alone', () => {
    render(
      <TableCardFormContent
        {...commonProps}
        cardConfig={{
          ...commonCardConfig,
          content: {
            columns: [
              {
                label: 'Timestamp',
                dataSourceId: 'timestamp',
                type: 'TIMESTAMP',
              },
              {
                label: 'Manufacturer',
                dataSourceId: 'manufacturer',
                dataItemId: 'manufacturer',
                type: 'DIMENSION',
              },
              { label: 'Temperature', dataSourceId: 'temperature' },
            ],
          },
          dataSource: {
            groupBy: ['manufacturer'],
            timeGrain: 'hour',
          },
        }}
      />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();

    const removeTemperatureButton = screen.getAllByRole('button', { name: 'Remove' })[2];
    expect(removeTemperatureButton).toBeInTheDocument();

    fireEvent.click(removeTemperatureButton);

    expect(mockOnChange).toHaveBeenCalledWith({
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'Manufacturer',
            dataSourceId: 'manufacturer',
            dataItemId: 'manufacturer',
            type: 'DIMENSION',
          },
        ],
      },
      dataSource: {
        groupBy: ['manufacturer'],
        timeGrain: 'hour',
      },
    });
  });
  it('edit mode with dataitems adds threshold correctly', () => {
    const mockOnChange = jest.fn();
    const mockCardConfig = {
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'Manufacturer',
            dataSourceId: 'manufacturer',
            type: 'DIMENSION',
          },
          { label: 'Temperature', dataSourceId: 'temperature' },
        ],
      },
    };
    render(
      <TableCardFormContent {...commonProps} onChange={mockOnChange} cardConfig={mockCardConfig} />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();

    // Popup the Data Item Editor
    fireEvent.click(screen.queryAllByLabelText('Edit')[1]);
    expect(screen.queryByText('Customize data series')).toBeDefined();
    fireEvent.click(screen.queryByText(/Add threshold/));
    fireEvent.click(screen.queryByText('Save'));
    expect(mockOnChange).toHaveBeenCalledWith({
      ...mockCardConfig,
      content: {
        ...mockCardConfig.content,
        thresholds: [
          {
            color: '#da1e28',
            comparison: '>',
            dataSourceId: 'manufacturer',
            icon: 'Warning alt',
            value: 0,
          },
        ],
      },
    });
  });
  it('edit mode with dataitems leaves threshold blank correctly', () => {
    const mockOnChange = jest.fn();
    const mockCardConfig = {
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'Manufacturer',
            dataSourceId: 'manufacturer',
            type: 'DIMENSION',
          },
          { label: 'Temperature', dataSourceId: 'temperature' },
        ],
      },
    };
    render(
      <TableCardFormContent {...commonProps} onChange={mockOnChange} cardConfig={mockCardConfig} />
    );
    // All of the existing columns should be rendered in the data section
    expect(screen.queryByText('Temperature')).toBeDefined();
    expect(screen.queryByText('Timestamp')).toBeDefined();
    expect(screen.queryByText('Manufacturer')).toBeDefined();

    // Popup the Data Item Editor
    fireEvent.click(screen.queryAllByLabelText('Edit')[1]);
    expect(screen.queryByText('Customize data series')).toBeDefined();
    fireEvent.click(screen.queryByText('Save'));
    expect(mockOnChange).toHaveBeenCalledWith({
      ...mockCardConfig,
      content: {
        ...mockCardConfig.content,
      },
    });
  });
  it('should set thresholds in dataSection if they exist', () => {
    const mockOnChange = jest.fn();
    const mockCardConfig = {
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'Manufacturer',
            dataSourceId: 'manufacturer',
            type: 'DIMENSION',
          },
          { label: 'Temperature', dataSourceId: 'temperature' },
        ],
        thresholds: [
          {
            color: '#da1e28',
            comparison: '>',
            dataSourceId: 'manufacturer',
            icon: 'Warning alt',
            value: 1,
          },
        ],
      },
    };
    render(
      <TableCardFormContent {...commonProps} onChange={mockOnChange} cardConfig={mockCardConfig} />
    );

    userEvent.click(screen.getAllByRole('button', { name: 'Edit' })[1]);
    expect(screen.getByTitle('#da1e28')).toBeVisible();
  });
  it("should fallback to dataItemId if label isn't given in column", () => {
    const mockOnChange = jest.fn();
    const mockCardConfig = {
      ...commonCardConfig,
      content: {
        columns: [
          {
            label: 'Timestamp',
            dataSourceId: 'timestamp',
            type: 'TIMESTAMP',
          },
          {
            label: 'Manufacturer',
            dataSourceId: 'manufacturer',
            type: 'DIMENSION',
          },
          { dataItemId: '__temperature__', dataSourceId: 'temperature' },
        ],
        thresholds: [
          {
            color: '#da1e28',
            comparison: '>',
            dataSourceId: 'manufacturer',
            icon: 'Warning alt',
            value: 1,
          },
        ],
      },
    };
    render(
      <TableCardFormContent {...commonProps} onChange={mockOnChange} cardConfig={mockCardConfig} />
    );

    expect(screen.getByTitle('__temperature__')).toBeVisible();
  });
  it('should not render groupBy dimensions if availableDimensions is empty', () => {
    const mockOnChange = jest.fn();
    render(
      <TableCardFormContent {...commonProps} onChange={mockOnChange} availableDimensions={{}} />
    );

    expect(screen.queryByTitle('Select dimension(s)')).toBeNull();
  });
  it('should render hrefs in tooltips from dataSeriesItemLinks', () => {
    const mockOnChange = jest.fn();
    render(
      <TableCardFormContent
        {...commonProps}
        onChange={mockOnChange}
        dataSeriesItemLinks={{
          table: 'https://www.ibm.com',
        }}
        i18n={{
          dataItemEditorSectionTooltipLinkText: 'Click here!',
        }}
      />
    );

    userEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByText('Click here!')).toBeVisible();
    expect(screen.getByText('Click here!')).toHaveAttribute('href', 'https://www.ibm.com');
  });
});
