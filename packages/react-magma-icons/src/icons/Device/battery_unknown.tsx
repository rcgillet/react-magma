import * as React from 'react';
import { IconProps } from '../../iconProps';
import { renderIcon } from '../../SvgIcon';

const iconType = {
  width: '24px',
  height: '24px',
  viewBox: '0 0 24 24',
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
  title: ['battery_unknown'],
  paths: [
    {
      d:
        'M15.67,3.99999996 L14,3.99999996 L14,2.99999996 C14,2.44999996 13.55,1.99999996 13,1.99999996 L11,1.99999996 C10.45,1.99999996 9.99999998,2.44999996 9.99999998,2.99999996 L9.99999998,3.99999996 L8.32999998,3.99999996 C7.59999998,3.99999996 6.99999998,4.59999997 6.99999998,5.32999997 L6.99999998,20.66 C6.99999998,21.4 7.59999998,22 8.33999998,22 L15.66,22 C16.4,22 17,21.4 17,20.67 L17,5.32999997 C17,4.59999997 16.4,3.99999996 15.67,3.99999996 Z M13,18 L11,18 L11,16 L13,16 L13,18 Z M14.3,12.69 C14.3,12.69 13.92,13.11 13.63,13.4 C13.49,13.54 13.36,13.71 13.24,13.87 L13.15,14.02 C13.07,14.14 13.01,14.27 12.96,14.39 C12.87,14.61 12.8,14.82 12.8,15 L11.2,15 C11.2,14.58 11.32,14.2 11.49,13.87 C11.55,13.76 11.62,13.66 11.69,13.56 C11.72,13.51 11.75,13.45 11.79,13.4 C11.9,13.26 12.02,13.12 12.13,13 L13.06,12.06 C13.33,11.79 13.5,11.41 13.5,11 C13.5,10.17 12.83,9.49999998 12,9.49999998 C11.35,9.49999998 10.79,9.90999999 10.59,10.49 C10.48,10.8 10.2,11 9.87999999,11 C9.35999999,11 8.99999999,10.48 9.16999999,9.98999999 C9.58999999,8.82999999 10.69,7.99999998 12,7.99999998 C13.66,7.99999998 15,9.33999999 15,11 C15,11.66 14.73,12.26 14.3,12.69 L14.3,12.69 Z',
      id: 'DeviceBatteryUnknownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'battery_unknown',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceBatteryUnknownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceBatteryUnknownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceBatteryUnknownIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceBatteryUnknownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
