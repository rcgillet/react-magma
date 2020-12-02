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
  title: ['control_point_duplicate'],
  paths: [
    {
      d:
        'M15,7.99999998 C14.45,7.99999998 14,8.44999999 14,8.99999998 L14,11 L12,11 C11.45,11 11,11.45 11,12 C11,12.55 11.45,13 12,13 L14,13 L14,15 C14,15.55 14.45,16 15,16 C15.55,16 16,15.55 16,15 L16,13 L18,13 C18.55,13 19,12.55 19,12 C19,11.45 18.55,11 18,11 L16,11 L16,8.99999998 C16,8.44999999 15.55,7.99999998 15,7.99999998 Z M1.99999995,12 C1.99999995,9.41999999 3.39999996,7.16999998 5.47999997,5.95999997 C5.79999997,5.76999997 6.00999998,5.44999997 6.00999998,5.07999997 C6.00999998,4.30999997 5.16999997,3.82999997 4.49999995,4.21999997 C1.81999996,5.77999997 -5.00000894e-08,8.67999999 -5.00000894e-08,12 C-5.00000894e-08,15.32 1.81999996,18.22 4.49999995,19.78 C5.16999997,20.17 6.00999998,19.69 6.00999998,18.92 C6.00999998,18.55 5.79999997,18.23 5.47999997,18.04 C3.39999996,16.83 1.99999995,14.58 1.99999995,12 Z M15,2.99999996 C10.04,2.99999996 5.99999997,7.03999998 5.99999997,12 C5.99999997,16.96 10.04,21 15,21 C19.96,21 24,16.96 24,12 C24,7.03999998 19.96,2.99999996 15,2.99999996 Z M15,19 C11.14,19 7.99999998,15.86 7.99999998,12 C7.99999998,8.13999998 11.14,4.99999997 15,4.99999997 C18.86,4.99999997 22,8.13999998 22,12 C22,15.86 18.86,19 15,19 Z',
      id: 'ImageControlPointDuplicateIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'control_point_duplicate',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageControlPointDuplicateIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageControlPointDuplicateIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageControlPointDuplicateIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageControlPointDuplicateIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
