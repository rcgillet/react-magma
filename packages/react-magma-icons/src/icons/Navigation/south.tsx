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
  title: ['south'],
  paths: [
    {
      d:
        'M18.3,14.29 L18.3,14.29 C17.91,13.9 17.28,13.9 16.89,14.29 L13,18.17 L13,2.99999996 C13,2.44999996 12.55,1.99999996 12,1.99999996 L12,1.99999996 C11.45,1.99999996 11,2.44999996 11,2.99999996 L11,18.18 L7.11999998,14.3 C6.72999998,13.91 6.09999998,13.91 5.70999997,14.3 L5.70999997,14.3 C5.31999997,14.69 5.31999997,15.32 5.70999997,15.71 L11.3,21.3 C11.69,21.69 12.32,21.69 12.71,21.3 L18.3,15.71 C18.68,15.32 18.68,14.68 18.3,14.29 Z',
      id: 'NavigationSouthIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'south',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationSouthIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationSouthIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationSouthIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationSouthIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
