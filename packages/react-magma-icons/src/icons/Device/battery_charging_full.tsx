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
  title: ['battery_charging_full'],
  paths: [
    {
      d:
        'M15.67,3.99999996 L14,3.99999996 L14,2.99999996 C14,2.44999996 13.55,1.99999996 13,1.99999996 L11,1.99999996 C10.45,1.99999996 9.99999998,2.44999996 9.99999998,2.99999996 L9.99999998,3.99999996 L8.32999998,3.99999996 C7.59999998,3.99999996 6.99999998,4.59999997 6.99999998,5.32999997 L6.99999998,20.66 C6.99999998,21.4 7.59999998,22 8.33999998,22 L15.66,22 C16.4,22 17,21.4 17,20.67 L17,5.32999997 C17,4.59999997 16.4,3.99999996 15.67,3.99999996 Z M14.61,13.24 L11.94,18.24 C11.7,18.69 11,18.52 11,18 L11,14.5 L9.82999999,14.5 C9.44999999,14.5 9.20999999,14.1 9.38999999,13.76 L12.06,8.75999999 C12.3,8.30999998 13,8.47999999 13,8.99999999 L13,12.5 L14.17,12.5 C14.54,12.5 14.79,12.9 14.61,13.24 L14.61,13.24 Z',
      id: 'DeviceBatteryChargingFullIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'battery_charging_full',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceBatteryChargingFullIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceBatteryChargingFullIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceBatteryChargingFullIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceBatteryChargingFullIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
