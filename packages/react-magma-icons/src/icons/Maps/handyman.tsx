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
  title: ['handyman'],
  paths: [
    {
      d:
        'M14.71,1.49999996 C15.16,1.04999995 15.92,1.37999996 15.92,1.99999996 L15.92,1.99999996 L15.92,4.53999997 L16.63,3.82999997 C17.02,3.43999996 17.65,3.43999996 18.04,3.82999997 L18.04,3.82999997 L20.87,6.65999998 C22.04,7.82999998 22.04,9.72999999 20.87,10.9 L20.87,10.9 L18.75,8.77999999 L18.04,9.48999999 C17.65,9.87999999 17.02,9.87999999 16.63,9.48999999 L16.63,9.48999999 L16.28,9.13999999 L11.13,14.29 L11.13,15.58 C11.13,16.11 10.92,16.61 10.54,16.99 L10.54,16.99 L5.81999997,21.71 C5.42999997,22.1 4.79999997,22.1 4.40999997,21.71 L4.40999997,21.71 L2.28999996,19.59 C1.89999996,19.2 1.89999996,18.57 2.28999996,18.18 L2.28999996,18.18 L7.00999998,13.46 C7.37999998,13.08 7.88999998,12.87 8.41999999,12.87 L8.41999999,12.87 L9.71999999,12.87 L10.57,12.02 L6.43999998,7.88999998 L5.43999997,7.88999998 C5.16999997,7.88999998 4.91999997,7.78999998 4.72999997,7.59999998 L4.72999997,7.59999998 L2.70999996,5.56999997 C2.31999996,5.17999997 2.31999996,4.54999997 2.70999996,4.15999997 L2.70999996,4.15999997 L4.12999997,2.73999996 C4.51999997,2.34999996 5.14999997,2.34999996 5.53999997,2.73999996 L5.53999997,2.73999996 L7.55999998,4.76999997 C7.73999998,4.95999997 7.84999998,5.20999997 7.84999998,5.47999997 L7.84999998,5.47999997 L7.84999998,6.47999998 L11.96,10.61 L14.85,7.71999998 L14.5,7.36999998 C14.11,6.97999998 14.11,6.34999998 14.5,5.95999997 L14.5,5.95999997 L15.21,5.24999997 L12.67,5.24999997 C12.05,5.24999997 11.72,4.48999997 12.17,4.03999997 L12.17,4.03999997 Z M15.37,12.86 C15.96,12.86 16.47,12.97 16.95,13.45 L16.95,13.45 L21.67,18.17 C22.06,18.56 22.06,19.2 21.67,19.58 L21.67,19.58 L19.55,21.7 C19.16,22.09 18.53,22.09 18.14,21.7 L18.14,21.7 L13.42,16.98 C12.94,16.51 12.83,15.99 12.83,15.4 L12.83,15.4 Z',
      id: 'MapsHandymanIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'handyman',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsHandymanIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsHandymanIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsHandymanIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsHandymanIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
