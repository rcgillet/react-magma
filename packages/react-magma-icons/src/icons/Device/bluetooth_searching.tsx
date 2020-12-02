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
  title: ['bluetooth_searching'],
  paths: [
    {
      d:
        'M15.98,10.28 L14.6,11.66 C14.4,11.86 14.4,12.17 14.6,12.37 L15.98,13.75 C16.26,14.03 16.73,13.9 16.83,13.52 C16.94,13.02 17,12.52 17,12 C17,11.49 16.94,10.99 16.82,10.52 C16.73,10.14 16.26,9.99999999 15.98,10.28 L15.98,10.28 Z M20.1,7.77999998 C19.85,7.22999998 19.12,7.10999998 18.7,7.53999998 C18.44,7.79999998 18.39,8.17999998 18.53,8.51999999 C18.99,9.58999999 19.25,10.76 19.25,11.99 C19.25,13.23 18.99,14.41 18.52,15.48 C18.38,15.8 18.43,16.17 18.68,16.42 C19.09,16.83 19.78,16.71 20.03,16.19 C20.66,14.89 21.01,13.43 21.01,11.89 C21,10.44 20.68,9.03999999 20.1,7.77999998 Z M11.41,12 L15,8.41999999 C15.39,8.02999998 15.39,7.39999998 15,6.99999998 L10.71,2.70999996 C10.08,2.07999996 8.99999999,2.51999996 8.99999999,3.40999996 L8.99999999,9.58999999 L5.10999997,5.69999997 C4.71999997,5.30999997 4.08999997,5.30999997 3.69999997,5.69999997 C3.30999996,6.08999998 3.30999996,6.71999998 3.69999997,7.10999998 L8.58999999,12 L3.69999997,16.89 C3.30999996,17.28 3.30999996,17.91 3.69999997,18.3 C4.08999997,18.69 4.71999997,18.69 5.10999997,18.3 L8.99999999,14.41 L8.99999999,20.59 C8.99999999,21.48 10.08,21.93 10.71,21.3 L15,17 C15.39,16.61 15.39,15.98 15,15.58 L11.41,12 Z M11,5.82999997 L12.88,7.70999998 L11,9.58999999 L11,5.82999997 Z M11,18.17 L11,14.41 L12.88,16.29 L11,18.17 Z',
      id: 'DeviceBluetoothSearchingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bluetooth_searching',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'DeviceBluetoothSearchingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#DeviceBluetoothSearchingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#DeviceBluetoothSearchingIcon-path-1',
        },
      ],
    },
  ],
};

export const DeviceBluetoothSearchingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
