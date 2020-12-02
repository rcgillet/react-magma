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
  title: ['menu'],
  paths: [
    {
      d:
        'M3.99999996,18 L20,18 C20.55,18 21,17.55 21,17 C21,16.45 20.55,16 20,16 L3.99999996,16 C3.44999996,16 2.99999996,16.45 2.99999996,17 C2.99999996,17.55 3.44999996,18 3.99999996,18 Z M3.99999996,13 L20,13 C20.55,13 21,12.55 21,12 C21,11.45 20.55,11 20,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z M2.99999996,6.99999998 C2.99999996,7.54999998 3.44999996,7.99999998 3.99999996,7.99999998 L20,7.99999998 C20.55,7.99999998 21,7.54999998 21,6.99999998 C21,6.44999998 20.55,5.99999998 20,5.99999998 L3.99999996,5.99999998 C3.44999996,5.99999998 2.99999996,6.44999998 2.99999996,6.99999998 Z',
      id: 'NavigationMenuIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'menu',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationMenuIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationMenuIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationMenuIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationMenuIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
