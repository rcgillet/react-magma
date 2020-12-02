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
  title: ['explore_off'],
  paths: [
    {
      d:
        'M18,5.99999996 L15.09,12.26 L20.34,17.51 C21.39,15.93 22,14.04 22,12 C22,6.47999998 17.52,1.99999996 12,1.99999996 C9.95999999,1.99999996 8.06999998,2.60999996 6.48999998,3.65999997 L11.74,8.90999999 L18,5.99999996 Z M2.80999996,5.63999997 L3.65999997,6.48999998 C2.28999996,8.55999999 1.65999996,11.17 2.17999996,13.94 C2.92999996,17.89 6.09999998,21.07 10.06,21.82 C12.83,22.34 15.44,21.72 17.51,20.34 L18.36,21.19 C18.75,21.58 19.38,21.58 19.77,21.19 C20.16,20.8 20.16,20.17 19.77,19.78 L4.21999997,4.21999997 C3.82999997,3.82999997 3.19999996,3.82999997 2.80999996,4.21999997 C2.41999996,4.60999997 2.41999996,5.24999997 2.80999996,5.63999997 Z M8.90999999,11.74 L12.26,15.09 L5.99999998,18 L8.90999999,11.74 L8.90999999,11.74 Z',
      id: 'ActionsExploreOffIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'explore_off',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsExploreOffIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsExploreOffIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsExploreOffIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsExploreOffIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
