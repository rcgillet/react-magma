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
  title: ['bluetooth_connected'],
  paths: [
    {
      d:
        'M5.99999997,13 C6.54999998,12.45 6.54999998,11.56 5.99999997,11.01 L5.99999997,11 C5.44999997,10.45 4.54999997,10.45 3.99999997,11 C3.44999996,11.55 3.44999996,12.45 3.99999997,13 C4.54999997,13.55 5.44999997,13.55 5.99999997,13 Z M20,11 C19.44,10.44 18.55,10.44 18,10.99 L18,11 C17.45,11.55 17.45,12.44 18,12.99 L18,13 C18.55,13.55 19.44,13.55 19.99,13 L20,13 C20.55,12.45 20.55,11.55 20,11 Z M17,6.99999998 L12.71,2.70999996 C12.08,2.07999996 11,2.51999996 11,3.40999996 L11,9.58999999 L7.10999998,5.69999997 C6.71999998,5.30999997 6.08999998,5.30999997 5.69999997,5.69999997 C5.30999997,6.08999998 5.30999997,6.71999998 5.69999997,7.10999998 L10.59,12 L5.69999997,16.89 C5.30999997,17.28 5.30999997,17.91 5.69999997,18.3 C6.08999998,18.69 6.71999998,18.69 7.10999998,18.3 L11,14.41 L11,20.59 C11,21.48 12.08,21.93 12.71,21.3 L17,17 C17.39,16.61 17.39,15.98 17,15.58 L13.41,12 L17,8.41999999 C17.39,8.02999998 17.39,7.38999998 17,6.99999998 Z M14.88,16.29 L13,18.17 L13,14.41 L14.88,16.29 L14.88,16.29 Z M13,9.58999999 L13,5.82999997 L14.88,7.70999998 L13,9.58999999 Z',
      id: 'DeviceBluetoothConnectedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bluetooth_connected',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceBluetoothConnectedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceBluetoothConnectedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceBluetoothConnectedIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceBluetoothConnectedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
