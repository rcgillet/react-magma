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
  title: ['tab_unselected'],
  paths: [
    {
      d:
        'M0.999999954,8.99999998 L2.99999995,8.99999998 L2.99999995,6.99999998 L0.999999954,6.99999998 L0.999999954,8.99999998 Z M0.999999954,13 L2.99999995,13 L2.99999995,11 L0.999999954,11 L0.999999954,13 Z M0.999999954,4.99999996 L2.99999995,4.99999996 L2.99999995,2.99999996 C1.89999996,2.99999996 0.999999954,3.89999997 0.999999954,4.99999996 Z M8.99999999,21 L11,21 L11,19 L8.99999999,19 L8.99999999,21 Z M0.999999954,17 L2.99999995,17 L2.99999995,15 L0.999999954,15 L0.999999954,17 Z M2.99999995,21 L2.99999995,19 L0.999999954,19 C0.999999954,20.1 1.89999996,21 2.99999995,21 Z M21,2.99999996 L13,2.99999996 L13,7.99999996 C13,8.54999999 13.45,8.99999996 14,8.99999996 L23,8.99999996 L23,4.99999996 C23,3.89999997 22.1,2.99999996 21,2.99999996 Z M21,17 L23,17 L23,15 L21,15 L21,17 Z M8.99999999,4.99999996 L11,4.99999996 L11,2.99999996 L8.99999999,2.99999996 L8.99999999,4.99999996 Z M4.99999997,21 L6.99999997,21 L6.99999997,19 L4.99999997,19 L4.99999997,21 Z M4.99999997,4.99999996 L6.99999997,4.99999996 L6.99999997,2.99999996 L4.99999997,2.99999996 L4.99999997,4.99999996 Z M21,21 C22.1,21 23,20.1 23,19 L21,19 L21,21 Z M21,13 L23,13 L23,11 L21,11 L21,13 Z M13,21 L15,21 L15,19 L13,19 L13,21 Z M17,21 L19,21 L19,19 L17,19 L17,21 Z',
      id: 'ActionsTabUnselectedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tab_unselected',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTabUnselectedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTabUnselectedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTabUnselectedIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTabUnselectedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
