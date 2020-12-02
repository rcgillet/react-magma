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
  title: ['tap_and_play'],
  paths: [
    {
      d:
        'M3.13999996,16.09 C2.53999996,15.99 1.99999996,16.48 1.99999996,17.09 C1.99999996,17.58 2.35999996,17.99 2.84999996,18.07 C4.92999997,18.43 6.56999998,20.07 6.92999998,22.15 C7.00999998,22.64 7.41999998,23 7.90999998,23 C8.51999999,23 8.99999996,22.46 8.90999999,21.86 C8.42999999,18.91 6.09999998,16.57 3.13999996,16.09 Z M1.99999996,20 L1.99999996,23 L4.99999996,23 C4.99999996,21.34 3.65999997,20 1.99999996,20 Z M3.10999996,12.06 C2.51999996,12 1.99999996,12.46 1.99999996,13.05 C1.99999996,13.55 2.36999996,13.99 2.86999996,14.04 C7.13999998,14.45 10.54,17.85 10.95,22.12 C11,22.62 11.43,23 11.94,23 C12.53,23 13,22.49 12.94,21.9 C12.43,16.7 8.30999998,12.58 3.10999996,12.06 L3.10999996,12.06 Z M17,1.00999995 L6.99999997,0.999999954 C5.89999997,0.999999954 4.99999997,1.89999996 4.99999997,2.99999995 L4.99999997,10.37 C5.68999997,10.53 6.35999998,10.74 6.99999997,11.01 L6.99999997,4.99999995 L17,4.99999995 L17,18 L13.97,18 C14.49,19.25 14.81,20.59 14.92,22 L17,22 C18.1,22 19,21.1 19,20 L19,2.99999995 C19,1.89999996 18.1,1.00999995 17,1.00999995 Z',
      id: 'NotificationsTapAndPlayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'tap_and_play',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NotificationsTapAndPlayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NotificationsTapAndPlayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NotificationsTapAndPlayIcon-path-1',
        },
      ],
    },
  ],
};

export const NotificationsTapAndPlayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
