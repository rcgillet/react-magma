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
  title: ['menu_open'],
  paths: [
    {
      d:
        'M3.99999996,18 L15,18 C15.55,18 16,17.55 16,17 L16,17 C16,16.45 15.55,16 15,16 L3.99999996,16 C3.44999996,16 2.99999996,16.45 2.99999996,17 L2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999996,18 Z M3.99999996,13 L12,13 C12.55,13 13,12.55 13,12 L13,12 C13,11.45 12.55,11 12,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 L2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z M2.99999996,6.99999998 L2.99999996,6.99999998 C2.99999996,7.54999998 3.44999996,7.99999998 3.99999996,7.99999998 L15,7.99999998 C15.55,7.99999998 16,7.54999998 16,6.99999998 L16,6.99999998 C16,6.44999998 15.55,5.99999998 15,5.99999998 L3.99999996,5.99999998 C3.44999996,5.99999998 2.99999996,6.44999998 2.99999996,6.99999998 Z M20.3,14.88 L17.42,12 L20.3,9.11999999 C20.69,8.72999999 20.69,8.09999998 20.3,7.70999998 L20.3,7.70999998 C19.91,7.31999998 19.28,7.31999998 18.89,7.70999998 L15.3,11.3 C14.91,11.69 14.91,12.32 15.3,12.71 L18.89,16.3 C19.28,16.69 19.91,16.69 20.3,16.3 L20.3,16.3 C20.68,15.91 20.69,15.27 20.3,14.88 Z',
      id: 'NavigationMenuOpenIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'menu_open',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationMenuOpenIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationMenuOpenIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationMenuOpenIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationMenuOpenIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
