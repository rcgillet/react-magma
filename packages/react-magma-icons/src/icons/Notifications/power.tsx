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
  title: ['power'],
  paths: [
    {
      d:
        'M16.01,6.99999996 L16,3.99999996 C16,3.44999996 15.55,2.99999996 15,2.99999996 C14.45,2.99999996 14,3.44999996 14,3.99999996 L14,6.99999996 L9.99999998,6.99999996 L9.99999998,3.99999996 C9.99999998,3.44999996 9.54999999,2.99999996 8.99999998,2.99999996 C8.44999999,2.99999996 7.99999998,3.44999996 7.99999998,3.99999996 L7.99999998,6.99999996 L7.98999998,6.99999996 C6.89999998,6.99999996 5.99999998,7.89999998 5.99999998,8.98999999 L5.99999998,13.65 C5.99999998,14.18 6.20999998,14.69 6.57999998,15.06 L9.49999998,18 L9.49999998,20 C9.49999998,20.55 9.94999999,21 10.5,21 L13.5,21 C14.05,21 14.5,20.55 14.5,20 L14.5,18 L17.42,15.08 C17.79,14.7 18,14.19 18,13.66 L18,8.98999999 C18,7.88999998 17.11,6.99999996 16.01,6.99999996 Z',
      id: 'NotificationsPowerIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'power',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsPowerIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsPowerIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsPowerIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsPowerIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
