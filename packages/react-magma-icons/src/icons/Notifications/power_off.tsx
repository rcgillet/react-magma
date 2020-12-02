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
  title: ['power_off'],
  paths: [
    {
      d:
        'M18,13.66 L18,8.98999999 C18,7.98999998 16.99,6.98999998 16,6.99999996 L16,3.99999996 C16,3.44999996 15.55,2.99999996 15,2.99999996 C14.45,2.99999996 14,3.44999996 14,3.99999996 L14,6.99999996 L10.12,6.99999996 L17.75,14.63 C17.9,14.33 18,14 18,13.66 L18,13.66 Z M9.99999998,3.99999996 C9.99999998,3.44999996 9.54999999,2.99999996 8.99999998,2.99999996 C8.44999999,2.99999996 7.99999998,3.44999996 7.99999998,3.99999996 L7.99999998,4.87999997 L9.99999998,6.87999998 L9.99999998,3.99999996 Z M20.15,19.86 L12.49,12.2 L7.38999998,7.09999998 L4.82999997,4.53999997 C4.43999997,4.14999997 3.80999997,4.14999997 3.41999996,4.53999997 C3.02999996,4.92999997 3.02999996,5.55999997 3.41999996,5.94999997 L6.04999998,8.57999999 C6.01999998,8.70999999 5.99999998,8.84999999 5.99999998,8.98999999 L5.99999998,13.65 C5.99999998,14.18 6.20999998,14.69 6.57999998,15.06 L9.49999999,18 L9.49999999,20 C9.49999999,20.55 9.94999999,21 10.5,21 L13.5,21 C14.05,21 14.5,20.55 14.5,20 L14.5,18 L14.98,17.52 L18.74,21.28 C19.13,21.67 19.76,21.67 20.15,21.28 C20.54,20.89 20.54,20.25 20.15,19.86 L20.15,19.86 Z',
      id: 'NotificationsPowerOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'power_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPowerOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPowerOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPowerOffIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPowerOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
