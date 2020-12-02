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
  title: ['favorite'],
  paths: [
    {
      d:
        'M13.35,20.13 C12.59,20.82 11.42,20.82 10.66,20.12 L10.55,20.02 C5.29999997,15.27 1.86999996,12.16 1.99999996,8.27999998 C2.05999996,6.57999998 2.92999996,4.94999997 4.33999997,3.98999997 C6.97999998,2.18999996 10.24,3.02999996 12,5.08999997 C13.76,3.02999996 17.02,2.17999996 19.66,3.98999997 C21.07,4.94999997 21.94,6.57999998 22,8.27999998 C22.14,12.16 18.7,15.27 13.45,20.04 L13.35,20.13 Z',
      id: 'ActionsFavoriteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'favorite',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsFavoriteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsFavoriteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsFavoriteIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsFavoriteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
