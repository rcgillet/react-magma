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
  title: ['dashboard'],
  paths: [
    {
      d:
        'M3.99999996,13 L9.99999996,13 C10.55,13 11,12.55 11,12 L11,3.99999996 C11,3.44999996 10.55,2.99999996 9.99999996,2.99999996 L3.99999996,2.99999996 C3.44999996,2.99999996 2.99999996,3.44999996 2.99999996,3.99999996 L2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 Z M3.99999996,21 L9.99999996,21 C10.55,21 11,20.55 11,20 L11,16 C11,15.45 10.55,15 9.99999996,15 L3.99999996,15 C3.44999996,15 2.99999996,15.45 2.99999996,16 L2.99999996,20 C2.99999996,20.55 3.44999996,21 3.99999996,21 Z M14,21 L20,21 C20.55,21 21,20.55 21,20 L21,12 C21,11.45 20.55,11 20,11 L14,11 C13.45,11 13,11.45 13,12 L13,20 C13,20.55 13.45,21 14,21 Z M13,3.99999996 L13,7.99999996 C13,8.54999999 13.45,8.99999996 14,8.99999996 L20,8.99999996 C20.55,8.99999996 21,8.54999999 21,7.99999996 L21,3.99999996 C21,3.44999996 20.55,2.99999996 20,2.99999996 L14,2.99999996 C13.45,2.99999996 13,3.44999996 13,3.99999996 Z',
      id: 'ActionsDashboardIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'dashboard',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsDashboardIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsDashboardIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsDashboardIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsDashboardIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
