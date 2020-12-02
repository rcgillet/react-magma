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
  title: ['toll'],
  paths: [
    {
      d:
        'M15,3.99999997 C10.58,3.99999997 6.99999998,7.57999998 6.99999998,12 C6.99999998,16.42 10.58,20 15,20 C19.42,20 23,16.42 23,12 C23,7.57999998 19.42,3.99999997 15,3.99999997 Z M15,18 C11.69,18 8.99999999,15.31 8.99999999,12 C8.99999999,8.68999999 11.69,5.99999998 15,5.99999998 C18.31,5.99999998 21,8.68999999 21,12 C21,15.31 18.31,18 15,18 Z M2.99999995,12 C2.99999995,9.60999999 4.39999997,7.53999998 6.42999998,6.57999998 C6.76999998,6.41999998 6.99999995,6.10999998 6.99999995,5.73999997 L6.99999995,5.54999997 C6.99999995,4.86999997 6.28999998,4.43999997 5.67999997,4.72999997 C2.91999996,5.98999997 0.999999954,8.76999999 0.999999954,12 C0.999999954,15.23 2.91999996,18.01 5.67999997,19.27 C6.28999998,19.55 6.99999995,19.13 6.99999995,18.45 L6.99999995,18.27 C6.99999995,17.9 6.76999998,17.58 6.42999998,17.42 C4.39999997,16.46 2.99999995,14.39 2.99999995,12 Z',
      id: 'ActionsTollIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'toll',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ActionsTollIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ActionsTollIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ActionsTollIcon-path-1',
        },
      ],
    },
  ],
};

export const ActionsTollIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
