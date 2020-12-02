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
  title: ['sports_basketball'],
  paths: [
    {
      d:
        'M15.07,13 C15.39,15.59 16.95,17.79 19.13,19 C17.54,20.63 15.39,21.71 13,21.95 L13,21.95 L13,13 Z M11,13 L11,21.95 C8.60999999,21.71 6.46999998,20.63 4.86999997,19 C7.04999998,17.79 8.60999999,15.59 8.92999999,13 L8.92999999,13 L11,13 Z M6.90999998,13 C6.57999998,14.94 5.30999997,16.57 3.58999996,17.4 C2.75999996,16.11 2.20999996,14.61 2.04999996,13 L2.04999996,13 Z M21.95,13 C21.79,14.61 21.24,16.11 20.41,17.4 C18.68,16.57 17.42,14.95 17.09,13 L17.09,13 Z M20.41,6.59999998 C21.24,7.88999998 21.79,9.38999999 21.95,11 L21.95,11 L17.09,11 C17.42,9.04999999 18.68,7.42999998 20.41,6.59999998 Z M3.58999996,6.59999998 C5.31999997,7.42999998 6.57999998,9.04999999 6.90999998,11 L6.90999998,11 L2.04999996,11 C2.20999996,9.38999999 2.75999996,7.88999998 3.58999996,6.59999998 Z M13,2.04999996 C15.39,2.28999996 17.53,3.36999996 19.13,4.99999997 C16.95,6.20999998 15.39,8.40999999 15.07,11 L15.07,11 L13,11 Z M11,2.04999996 L11,11 L8.92999999,11 C8.60999999,8.40999999 7.04999998,6.20999998 4.86999997,4.99999997 C6.45999998,3.36999996 8.60999999,2.28999996 11,2.04999996 L11,2.04999996 Z',
      id: 'SocialSportsBasketballIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_basketball',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsBasketballIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsBasketballIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsBasketballIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsBasketballIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
