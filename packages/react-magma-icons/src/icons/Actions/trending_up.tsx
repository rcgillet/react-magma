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
  title: ['trending_up'],
  paths: [
    {
      d:
        'M16.85,6.84999998 L18.29,8.28999998 L13.41,13.17 L10.12,9.87999999 C9.72999999,9.48999999 9.09999999,9.48999999 8.70999999,9.87999999 L2.70999996,15.89 C2.31999996,16.28 2.31999996,16.91 2.70999996,17.3 C3.09999996,17.69 3.72999997,17.69 4.11999997,17.3 L9.40999999,12 L12.7,15.29 C13.09,15.68 13.72,15.68 14.11,15.29 L19.7,9.70999999 L21.14,11.15 C21.45,11.46 21.99,11.24 21.99,10.8 L21.99,6.49999998 C22,6.21999998 21.78,5.99999998 21.5,5.99999998 L17.21,5.99999998 C16.76,5.99999998 16.54,6.53999998 16.85,6.84999998 L16.85,6.84999998 Z',
      id: 'ActionsTrendingUpIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'trending_up',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTrendingUpIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTrendingUpIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTrendingUpIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTrendingUpIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
