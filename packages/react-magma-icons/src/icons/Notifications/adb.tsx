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
  title: ['adb'],
  paths: [
    {
      d:
        'M4.99999997,16 C4.99999997,19.87 8.12999998,23 12,23 C15.87,23 19,19.87 19,16 L19,12 L4.99999997,12 L4.99999997,16 Z M16.12,4.36999997 L18.22,2.26999996 L17.4,1.43999996 L15.1,3.74999997 C14.16,3.27999996 13.12,2.99999996 12,2.99999996 C10.88,2.99999996 9.83999999,3.27999996 8.90999999,3.74999997 L6.59999998,1.43999996 L5.77999997,2.26999996 L7.87999998,4.36999997 C6.13999998,5.63999997 4.99999997,7.67999998 4.99999997,9.99999999 L4.99999997,11 L19,11 L19,9.99999999 C19,7.67999998 17.86,5.63999997 16.12,4.36999997 Z M8.99999998,8.99999998 C8.44999999,8.99999998 7.99999998,8.54999999 7.99999998,7.99999998 C7.99999998,7.44999998 8.44999999,6.99999998 8.99999998,6.99999998 C9.54999999,6.99999998 9.99999998,7.44999998 9.99999998,7.99999998 C9.99999998,8.54999999 9.54999999,8.99999998 8.99999998,8.99999998 Z M15,8.99999998 C14.45,8.99999998 14,8.54999999 14,7.99999998 C14,7.44999998 14.45,6.99999998 15,6.99999998 C15.55,6.99999998 16,7.44999998 16,7.99999998 C16,8.54999999 15.55,8.99999998 15,8.99999998 Z',
      id: 'NotificationsAdbIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'adb',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsAdbIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsAdbIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsAdbIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsAdbIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
