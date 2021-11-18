import React from 'react';
import { text, object, select } from '@storybook/addon-knobs';
import { Tooltip } from 'carbon-components-react';
import { Warning16 } from '@carbon/icons-react';
import { red60 } from '@carbon/colors';

import HotspotContent from './HotspotContent';

const mockValues = object('values', { temperature: 35.35, humidity: 99 });

export default {
  title: '1 - Watson IoT/HotspotContent',

  parameters: {
    component: HotspotContent,

    info: 'This Hotspot content is recommended to be used with a Carbon tooltip',
  },
};

export const Basic = () => {
  return (
    <Tooltip open direction="right" triggerId="tooltipTrigger" id="tooltip" tooltipId="tooltip">
      <HotspotContent
        title={text('title', 'Hotspot title')}
        description={text('description', 'description')}
        values={mockValues}
        attributes={object('attributes', [
          { dataSourceId: 'temperature', label: 'Temperature' },
          { dataSourceId: 'humidity', label: 'Humidity' },
        ])}
      />
    </Tooltip>
  );
};

Basic.storyName = 'basic';

export const BasicWithUnitsAndPrecision = () => {
  return (
    <Tooltip open direction="right" triggerId="tooltipTrigger" id="tooltip" tooltipId="tooltip">
      <HotspotContent
        title={text('title', 'Hotspot title')}
        description={text('description', 'description')}
        values={mockValues}
        attributes={object('attributes', [
          {
            dataSourceId: 'temperature',
            label: 'Temperature',
            precision: 3,
            unit: 'C',
          },
          {
            dataSourceId: 'humidity',
            label: 'Humidity',
            precision: 0,
            unit: '%',
          },
        ])}
      />
    </Tooltip>
  );
};

BasicWithUnitsAndPrecision.storyName = 'basic with units and precision';

export const WithThresholds = () => {
  return (
    <Tooltip open direction="right" triggerId="tooltipTrigger" id="tooltip" tooltipId="tooltip">
      <HotspotContent
        title={text('title', 'Hotspot title')}
        description={text('description', 'description')}
        values={mockValues}
        attributes={object('attributes', [
          {
            dataSourceId: 'temperature',
            label: 'Temperature',
            precision: 3,
            unit: 'C',
            thresholds: [{ comparison: '>', value: 30, icon: 'Warning', color: red60 }],
          },
          {
            dataSourceId: 'humidity',
            label: 'Humidity',
            precision: 0,
            unit: '%',
          },
        ])}
        hotspotThreshold={object('hotspotThreshold', {
          dataSourceId: 'humidity',
          comparison: '<',
          value: 100,
          icon: 'Warning',
          color: red60,
        })}
        renderIconByName={(icon, props) =>
          icon === 'Warning' ? (
            <Warning16 {...props}>
              <title>{props.title}</title>
            </Warning16>
          ) : null
        }
      />
    </Tooltip>
  );
};

WithThresholds.storyName = 'with thresholds';

WithThresholds.parameters = {
  knobs: {
    escapeHTML: false, // needed for greater than less than
  },
};

export const Locale = () => {
  return (
    <Tooltip open direction="right" triggerId="tooltipTrigger" id="tooltip" tooltipId="tooltip">
      <HotspotContent
        title={text('title', 'Hotspot title')}
        description={text('description', 'description')}
        values={mockValues}
        attributes={object('attributes', [
          {
            dataSourceId: 'temperature',
            label: 'Temperature',
            precision: 3,
            unit: 'C',
            thresholds: [
              {
                comparison: '>',
                value: 30.5,
                icon: 'Warning',
                color: red60,
              },
            ],
          },
          {
            dataSourceId: 'humidity',
            label: 'Humidity',
            precision: 0,
            unit: '%',
          },
        ])}
        locale={select('locale', ['fr', 'en'], 'fr')}
        hotspotThreshold={object('hotspotThreshold', {
          dataSourceId: 'humidity',
          comparison: '<',
          value: 100.0,
          icon: 'Warning',
          color: red60,
        })}
        renderIconByName={(icon, props) =>
          icon === 'Warning' ? (
            <Warning16 {...props}>
              <title>{props.title}</title>
            </Warning16>
          ) : null
        }
      />
    </Tooltip>
  );
};

Locale.storyName = 'locale';

Locale.parameters = {
  knobs: {
    escapeHTML: false, // needed for greater than less than
  },
};
