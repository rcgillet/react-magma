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
  title: ['perm_media'],
  paths: [
    {
      d:
        'M0.99999995,5.99999997 C0.449999952,5.99999997 -4.99999473e-08,6.44999998 -4.99999473e-08,6.99999997 L-4.99999473e-08,11 L0.00999995004,11 L-4.99999473e-08,20 C-4.99999473e-08,21.1 0.899999954,22 1.99999995,22 L19,22 C19.55,22 20,21.55 20,21 C20,20.45 19.55,20 19,20 L2.99999995,20 C2.44999996,20 1.99999995,19.55 1.99999995,19 L1.99999995,6.99999997 C1.99999995,6.44999998 1.54999996,5.99999997 0.99999995,5.99999997 Z M22,3.99999996 L14,3.99999996 L12.59,2.58999996 C12.21,2.20999996 11.7,1.99999996 11.17,1.99999996 L5.99999997,1.99999996 C4.89999997,1.99999996 4.00999997,2.89999996 4.00999997,3.99999996 L3.99999997,16 C3.99999997,17.1 4.89999997,18 5.99999997,18 L22,18 C23.1,18 24,17.1 24,16 L24,5.99999996 C24,4.89999997 23.1,3.99999996 22,3.99999996 Z M7.59999998,14.2 L11.11,9.51999999 C11.31,9.25999999 11.7,9.24999999 11.91,9.50999999 L15.01,13.5 L17.11,10.97 C17.31,10.72 17.69,10.73 17.89,10.98 L20.38,14.18 C20.64,14.51 20.4,14.99 19.99,14.99 L7.99999998,14.99 C7.58999998,15 7.34999998,14.53 7.59999998,14.2 Z',
      id: 'ActionsPermMediaIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'perm_media',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsPermMediaIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsPermMediaIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsPermMediaIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsPermMediaIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
