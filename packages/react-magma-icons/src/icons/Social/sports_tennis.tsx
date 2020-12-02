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
  title: ['sports_tennis'],
  paths: [
    {
      d:
        'M18,15 C19.02,15 20.05,15.39 20.83,16.17 C22.39,17.74 22.39,20.27 20.83,21.83 C20.05,22.61 19.02,23 18,23 C16.98,23 15.95,22.61 15.17,21.83 C13.61,20.26 13.61,17.73 15.17,16.17 C15.95,15.39 16.98,15 18,15 Z M18,17 C17.47,17 16.96,17.21 16.59,17.58 C15.81,18.36 15.81,19.63 16.59,20.41 C16.96,20.79 17.47,21 18,21 C18.53,21 19.04,20.79 19.41,20.42 C20.19,19.64 20.19,18.37 19.41,17.59 C19.04,17.21 18.53,17 18,17 Z M9.96999999,3.54999996 C12.9,0.619999953 17.18,0.149999951 19.52,2.48999996 C21.86,4.82999997 21.38,9.10999999 18.45,12.03 C16.85,13.63 14.57,14.55 12.99,14.57 C11.41,14.59 9.09999999,14.31 7.48999998,15.92 L7.48999998,15.92 L3.95999997,19.46 C3.55999996,19.85 2.92999996,19.85 2.53999996,19.46 L2.53999996,19.46 L2.45692304,19.3638234 C2.15230765,18.9644971 2.17999996,18.4 2.53999996,18.04 L2.53999996,18.04 L6.07999998,14.51 C7.68999998,12.9 7.40999998,10.59 7.42999998,9.00999999 C7.44999998,7.41999998 8.36999998,5.14999997 9.96999999,3.54999996 Z M18.1,3.89999997 C16.56,2.36999996 13.49,2.84999996 11.38,4.95999997 C9.26999999,7.06999998 8.78999999,10.15 10.32,11.68 C11.86,13.21 14.93,12.73 17.04,10.62 C19.15,8.50999999 19.63,5.42999997 18.1,3.89999997 Z',
      id: 'SocialSportsTennisIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_tennis',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsTennisIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsTennisIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsTennisIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsTennisIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
