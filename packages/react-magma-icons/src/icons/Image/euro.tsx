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
  title: ['euro'],
  paths: [
    {
      d:
        'M15,18.5 C12.49,18.5 10.32,17.08 9.23999999,15 L14.38,15 C14.76,15 15.11,14.79 15.27,14.45 L15.27,14.45 C15.6,13.79 15.12,13 14.38,13 L8.57999999,13 C8.52999999,12.67 8.49999999,12.34 8.49999999,12 C8.49999999,11.66 8.52999999,11.33 8.57999999,11 L14.38,11 C14.76,11 15.11,10.79 15.27,10.45 L15.27,10.45 C15.61,9.77999999 15.13,8.99999996 14.38,8.99999996 L9.23999999,8.99999996 C10.32,6.91999998 12.5,5.49999996 15,5.49999996 C16.25,5.49999996 17.42,5.85999997 18.42,6.46999998 C18.92,6.77999998 19.57,6.72999998 19.99,6.30999998 L19.99,6.30999998 C20.57,5.72999997 20.44,4.77999997 19.74,4.34999997 C18.36,3.49999996 16.73,2.99999996 15,2.99999996 C11.08,2.99999996 7.75999998,5.50999997 6.51999998,8.99999996 L3.61999997,8.99999996 C3.23999996,8.99999996 2.88999996,9.20999999 2.71999996,9.54999999 L2.71999996,9.54999999 C2.38999996,10.22 2.86999996,11 3.61999997,11 L6.05999998,11 C6.01999998,11.33 5.99999997,11.66 5.99999997,12 C5.99999997,12.34 6.01999998,12.67 6.05999998,13 L3.61999997,13 C3.23999996,13 2.88999996,13.21 2.72999996,13.55 L2.72999996,13.55 C2.38999996,14.22 2.86999996,15 3.61999997,15 L6.51999998,15 C7.75999998,18.49 11.08,21 15,21 C16.74,21 18.36,20.51 19.74,19.65 C20.43,19.22 20.56,18.26 19.98,17.68 L19.98,17.68 C19.56,17.26 18.91,17.21 18.41,17.53 C17.42,18.15 16.26,18.5 15,18.5 Z',
      id: 'ImageEuroIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'euro',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageEuroIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageEuroIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageEuroIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageEuroIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
