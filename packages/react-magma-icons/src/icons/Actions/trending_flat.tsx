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
  title: ['trending_flat'],
  paths: [
    {
      d:
        'M21.65,11.65 L18.86,8.85999999 C18.54,8.53999999 18,8.75999999 18,9.20999999 L18,11 L3.99999996,11 C3.44999996,11 2.99999996,11.45 2.99999996,12 C2.99999996,12.55 3.44999996,13 3.99999996,13 L18,13 L18,14.79 C18,15.24 18.54,15.46 18.85,15.14 L21.64,12.35 C21.84,12.16 21.84,11.84 21.65,11.65 L21.65,11.65 Z',
      id: 'ActionsTrendingFlatIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'trending_flat',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTrendingFlatIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTrendingFlatIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTrendingFlatIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTrendingFlatIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
