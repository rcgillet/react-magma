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
  title: ['bluetooth_audio'],
  paths: [
    {
      d:
        'M15.98,10.28 L14.6,11.66 C14.4,11.86 14.4,12.17 14.6,12.37 L15.98,13.75 C16.26,14.03 16.73,13.9 16.83,13.52 C16.94,13.02 17,12.52 17,12 C17,11.49 16.94,10.99 16.82,10.52 C16.73,10.14 16.26,9.99999999 15.98,10.28 L15.98,10.28 Z M20.1,7.77999998 C19.85,7.22999998 19.12,7.10999998 18.7,7.53999998 C18.44,7.79999998 18.39,8.17999998 18.53,8.51999999 C18.99,9.58999999 19.25,10.76 19.25,11.99 C19.25,13.23 18.99,14.41 18.52,15.48 C18.38,15.8 18.43,16.17 18.68,16.42 C19.09,16.83 19.78,16.71 20.03,16.19 C20.66,14.89 21.01,13.43 21.01,11.89 C21,10.44 20.68,9.03999999 20.1,7.77999998 Z M11.39,12 L14.98,8.41999999 C15.37,8.02999998 15.37,7.39999998 14.98,6.99999998 L10.69,2.70999996 C10.06,2.07999996 8.97999999,2.52999996 8.97999999,3.41999996 L8.97999999,9.59999999 L5.08999997,5.69999997 C4.69999997,5.30999997 4.06999997,5.30999997 3.67999997,5.69999997 C3.28999996,6.08999998 3.28999996,6.71999998 3.67999997,7.10999998 L8.56999999,12 L3.67999997,16.89 C3.28999996,17.28 3.28999996,17.91 3.67999997,18.3 C4.06999997,18.69 4.69999997,18.69 5.08999997,18.3 L8.97999999,14.41 L8.97999999,20.59 C8.97999999,21.48 10.06,21.93 10.69,21.3 L14.99,17 C15.38,16.61 15.38,15.98 14.99,15.58 L11.39,12 Z M10.98,5.82999997 L12.86,7.70999998 L10.98,9.58999999 L10.98,5.82999997 Z M10.98,18.17 L10.98,14.41 L12.86,16.29 L10.98,18.17 Z',
      id: 'NotificationsBluetoothAudioIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'bluetooth_audio',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsBluetoothAudioIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsBluetoothAudioIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsBluetoothAudioIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsBluetoothAudioIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
