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
  title: ['north'],
  paths: [
    {
      d:
        'M5.70999997,9.69999999 L5.70999997,9.69999999 C6.09999998,10.09 6.72999998,10.09 7.11999998,9.69999999 L11,5.82999997 L11,21 C11,21.55 11.45,22 12,22 L12,22 C12.55,22 13,21.55 13,21 L13,5.82999997 L16.88,9.70999999 C17.27,10.1 17.9,10.1 18.29,9.70999999 L18.29,9.70999999 C18.68,9.31999999 18.68,8.68999999 18.29,8.29999998 L12.7,2.69999996 C12.31,2.30999996 11.68,2.30999996 11.29,2.69999996 L5.70999997,8.28999998 C5.31999997,8.67999999 5.31999997,9.31999999 5.70999997,9.69999999 Z',
      id: 'NavigationNorthIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'north',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationNorthIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationNorthIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationNorthIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationNorthIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
