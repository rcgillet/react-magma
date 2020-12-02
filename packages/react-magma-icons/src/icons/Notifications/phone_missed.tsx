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
  title: ['phone_missed'],
  paths: [
    {
      d:
        'M23.09,16.2 C16.76,10.61 7.22999998,10.61 0.909999954,16.2 C0.0699999503,16.94 0.0699999503,18.25 0.859999954,19.04 L2.05999996,20.24 C2.76999996,20.95 3.89999997,21.01 4.67999997,20.39 L6.64999998,18.82 C7.11999998,18.45 7.39999998,17.88 7.39999998,17.27 L7.39999998,14.7 C10.38,13.73 13.61,13.72 16.6,14.7 L16.6,17.28 C16.6,17.88 16.88,18.45 17.35,18.83 L19.31,20.39 C20.1,21.01 21.22,20.95 21.93,20.24 L23.13,19.04 C23.93,18.25 23.92,16.94 23.09,16.2 L23.09,16.2 Z M5.99999997,8.99999996 C6.54999998,8.99999996 6.99999997,8.54999999 6.99999997,7.99999996 L6.99999997,6.42999998 L11.24,10.67 C11.63,11.06 12.26,11.06 12.65,10.67 L18.31,5.00999997 C18.7,4.61999997 18.7,3.98999997 18.31,3.59999997 C17.92,3.20999996 17.29,3.20999996 16.9,3.59999997 L11.95,8.54999999 L8.39999998,4.99999996 L9.99999997,4.99999996 C10.55,4.99999996 11,4.54999997 11,3.99999996 C11,3.44999996 10.55,2.99999996 9.99999997,2.99999996 L5.99999997,2.99999996 C5.44999997,2.99999996 4.99999997,3.44999996 4.99999997,3.99999996 L4.99999997,7.99999996 C4.99999997,8.54999999 5.44999997,8.99999996 5.99999997,8.99999996 Z',
      id: 'NotificationsPhoneMissedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'phone_missed',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPhoneMissedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPhoneMissedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPhoneMissedIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPhoneMissedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
