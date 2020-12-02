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
  title: ['phone_bluetooth_speaker'],
  paths: [
    {
      d:
        'M19.23,15.26 L16.69,14.97 C16.08,14.9 15.48,15.11 15.05,15.54 L13.21,17.38 C10.38,15.94 8.05999998,13.63 6.61999998,10.79 L8.46999999,8.93999999 C8.89999999,8.50999996 9.10999999,7.90999998 9.03999999,7.29999998 L8.74999999,4.77999997 C8.62999999,3.76999997 7.77999998,3.00999996 6.75999998,3.00999996 L5.02999997,3.00999996 C3.89999997,3.00999996 2.95999996,3.94999997 3.02999996,5.07999997 C3.55999996,13.62 10.39,20.44 18.92,20.97 C20.05,21.04 20.9900976,20.1 20.9900976,18.97 L20.9900976,17.24 C21,16.23 20.24,15.38 19.23,15.26 Z M16.79,6.00999998 L14.34,8.45999999 C14.14,8.65999999 14.14,8.97999999 14.34,9.16999999 C14.54,9.36999999 14.86,9.36999999 15.05,9.16999999 L17,7.22999998 L17,10.38 C17,10.58 17.12,10.77 17.31,10.85 C17.37,10.88 17.44,10.89 17.5,10.89 C17.63,10.89 17.76,10.84 17.86,10.74 L20.04,8.55999999 C20.24,8.35999998 20.24,8.03999998 20.04,7.84999998 L18.21,6.01999998 L20.04,4.18999997 C20.13,4.09999997 20.19,3.96999997 20.19,3.82999997 C20.19,3.68999997 20.14,3.56999996 20.04,3.46999996 L17.86,1.28999996 C17.72,1.14999995 17.5,1.09999995 17.31,1.17999995 C17.12,1.25999996 17,1.43999996 17,1.63999996 L17,4.78999997 L15.05,2.83999996 C14.85,2.63999996 14.53,2.63999996 14.34,2.83999996 C14.14,3.03999996 14.14,3.35999996 14.34,3.54999996 L16.79,6.00999998 Z M18.01,2.85999996 L18.97,3.81999997 L18.01,4.77999997 L18.01,2.85999996 Z M18.01,7.22999998 L18.97,8.18999998 L18.01,9.14999999 L18.01,7.22999998 Z',
      id: 'NotificationsPhoneBluetoothSpeakerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_bluetooth_speaker',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPhoneBluetoothSpeakerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPhoneBluetoothSpeakerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPhoneBluetoothSpeakerIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPhoneBluetoothSpeakerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
