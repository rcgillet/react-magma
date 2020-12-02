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
  title: ['sports_motorsports'],
  paths: [
    {
      d:
        'M12.98,4.01999997 C17.4,3.72999997 21.55,6.80999998 21.96,11.22 C22.41,15.99 18.67,20 14,20 L14,20 L3.99999996,20 C2.89999996,20 1.99999996,19.1 1.99999996,18 L1.99999996,18 L2.00097218,17.1280093 C2.00583329,16.8916667 2.03499996,16.0916667 2.20999996,15 L2.20999996,15 L10.38,15 C12.37,15 13.99,13.38 13.99,11.39 C13.99,9.93999999 13.12,8.63999999 11.79,8.06999998 L11.79,8.06999998 L7.04999998,6.05999998 C8.53999999,4.95999997 10.47,4.17999997 12.98,4.01999997 Z M5.43999997,7.54999998 L11.02,9.90999999 C11.61,10.16 12,10.74 12,11.39 C12,12.28 11.28,13 10.39,13 L10.39,13 L2.63999996,13 C3.11999996,11.25 3.95999997,9.22999999 5.43999997,7.54999998 L5.43999997,7.54999998 Z',
      id: 'SocialSportsMotorsportsIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'sports_motorsports',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'SocialSportsMotorsportsIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#SocialSportsMotorsportsIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#SocialSportsMotorsportsIcon-path-1',
        },
      ],
    },
  ],
};

export const SocialSportsMotorsportsIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
