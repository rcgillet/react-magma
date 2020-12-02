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
  title: ['trending_down'],
  paths: [
    {
      d:
        'M16.85,17.15 L18.29,15.71 L13.41,10.83 L10.12,14.12 C9.72999999,14.51 9.09999999,14.51 8.70999999,14.12 L2.70999996,8.10999998 C2.31999996,7.71999998 2.31999996,7.08999998 2.70999996,6.69999998 C3.09999996,6.30999998 3.72999997,6.30999998 4.11999997,6.69999998 L9.40999999,12 L12.7,8.70999999 C13.09,8.31999998 13.72,8.31999998 14.11,8.70999999 L19.7,14.29 L21.14,12.85 C21.45,12.54 21.99,12.76 21.99,13.2 L21.99,17.49 C21.99,17.77 21.77,17.99 21.49,17.99 L17.2,17.99 C16.76,18 16.54,17.46 16.85,17.15 L16.85,17.15 Z',
      id: 'ActionsTrendingDownIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'trending_down',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTrendingDownIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTrendingDownIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTrendingDownIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTrendingDownIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
