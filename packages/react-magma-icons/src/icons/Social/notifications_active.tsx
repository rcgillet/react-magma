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
  title: ['notifications_active'],
  paths: [
    {
      d:
        'M18,16 L18,11 C18,7.92999998 16.36,5.35999997 13.5,4.67999997 L13.5,3.99999996 C13.5,3.16999996 12.82,2.49999996 11.99,2.49999996 C11.16,2.49999996 10.5,3.16999996 10.5,3.99999996 L10.5,4.67999997 C7.62999998,5.35999997 5.99999998,7.91999998 5.99999998,11 L5.99999998,16 L4.69999997,17.29 C4.06999997,17.92 4.50999997,19 5.39999997,19 L18.57,19 C19.46,19 19.91,17.92 19.28,17.29 L18,16 Z M11.99,22 C13.09,22 13.99,21.1 13.99,20 L9.98999999,20 C9.98999999,21.1 10.88,22 11.99,22 Z M6.76999998,4.72999997 C7.18999998,4.34999997 7.19999998,3.69999997 6.79999998,3.29999996 C6.41999998,2.91999996 5.79999997,2.90999996 5.40999997,3.27999996 C3.69999997,4.83999997 2.51999996,6.95999998 2.13999996,9.33999999 C2.04999996,9.94999999 2.51999996,10.5 3.13999996,10.5 C3.61999997,10.5 4.03999997,10.15 4.11999997,9.66999999 C4.41999997,7.72999998 5.37999997,5.99999998 6.76999998,4.72999997 Z M18.6,3.27999996 C18.2,2.90999996 17.58,2.91999996 17.2,3.29999996 C16.8,3.69999997 16.82,4.33999997 17.23,4.71999997 C18.61,5.98999997 19.58,7.71999998 19.88,9.65999999 C19.95,10.14 20.37,10.49 20.86,10.49 C21.47,10.49 21.95,9.93999999 21.85,9.32999999 C21.47,6.95999998 20.3,4.84999997 18.6,3.27999996 Z',
      id: 'SocialNotificationsActiveIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'notifications_active',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialNotificationsActiveIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialNotificationsActiveIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialNotificationsActiveIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialNotificationsActiveIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
