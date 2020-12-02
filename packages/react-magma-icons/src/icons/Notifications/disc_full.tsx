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
  title: ['disc_full'],
  paths: [
    {
      d:
        'M20,16 L22,16 L22,14 L20,14 L20,16 Z M20,7.99999998 L20,11 C20,11.55 20.45,12 21,12 C21.55,12 22,11.55 22,11 L22,7.99999998 C22,7.44999998 21.55,6.99999998 21,6.99999998 C20.45,6.99999998 20,7.44999998 20,7.99999998 Z M9.99999996,3.99999997 C5.57999997,3.99999997 1.99999996,7.57999998 1.99999996,12 C1.99999996,16.42 5.57999997,20 9.99999996,20 C14.42,20 18,16.42 18,12 C18,7.57999998 14.42,3.99999997 9.99999996,3.99999997 Z M9.99999998,14 C8.89999999,14 7.99999998,13.1 7.99999998,12 C7.99999998,10.9 8.89999999,9.99999999 9.99999998,9.99999999 C11.1,9.99999999 12,10.9 12,12 C12,13.1 11.1,14 9.99999998,14 Z',
      id: 'NotificationsDiscFullIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'disc_full',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsDiscFullIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsDiscFullIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsDiscFullIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsDiscFullIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
