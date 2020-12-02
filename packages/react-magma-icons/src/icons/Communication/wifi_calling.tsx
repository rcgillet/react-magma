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
  title: ['wifi_calling'],
  paths: [
    {
      d:
        'M6.72999998,3.02999996 C7.74999998,3.02999996 8.59999999,3.78999997 8.71999999,4.79999997 L8.71999999,4.79999997 L9.00999999,7.31999998 C9.07999999,7.91999998 8.86999999,8.52999996 8.43999999,8.95999999 L8.43999999,8.95999999 L6.58999998,10.81 C8.02999998,13.65 10.35,15.96 13.18,17.4 L13.18,17.4 L15.02,15.56 C15.45,15.13 16.05,14.92 16.66,14.99 L16.66,14.99 L19.2,15.28 C20.21,15.4 20.97,16.25 20.97,17.27 L20.97,17.27 L20.97,19 C20.97,20.13 20.03,21.07 18.9,21 C10.36,20.47 3.52999996,13.64 2.99999996,5.09999997 C2.92999996,3.96999997 3.86999997,3.02999996 4.99999997,3.02999996 L4.99999997,3.02999996 Z M16.5,2.99999996 C19.67,2.99999996 21.79,4.77999997 22,4.94999997 L22,4.94999997 L16.5,12 L11,4.94999997 C11.21,4.77999997 13.32,2.99999996 16.5,2.99999996 Z',
      id: 'CommunicationWifiCallingIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'wifi_calling',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'CommunicationWifiCallingIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#CommunicationWifiCallingIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#CommunicationWifiCallingIcon-path-1',
        },
      ],
    },
  ],
};

export const CommunicationWifiCallingIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
