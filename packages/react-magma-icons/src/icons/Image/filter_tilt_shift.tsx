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
  title: ['filter_tilt_shift'],
  paths: [
    {
      d:
        'M11,3.22999996 C11,2.58999996 10.41,2.09999996 9.78999999,2.23999996 C8.66999999,2.49999996 7.60999998,2.93999996 6.66999998,3.53999996 C6.13999998,3.87999997 6.05999998,4.63999997 6.50999998,5.08999997 C6.82999998,5.40999997 7.33999998,5.48999997 7.71999998,5.24999997 C8.48999999,4.75999997 9.33999999,4.39999997 10.26,4.19999997 C10.7,4.09999997 11,3.68999997 11,3.22999996 L11,3.22999996 Z M17.33,3.54999996 C16.39,2.94999996 15.33,2.50999996 14.21,2.24999996 C13.59,2.10999996 13,2.58999996 13,3.22999996 C13,3.67999997 13.3,4.09999997 13.74,4.18999997 C14.65,4.38999997 15.51,4.75999997 16.27,5.23999997 C16.66,5.47999997 17.16,5.40999997 17.48,5.07999997 C17.94,4.63999997 17.87,3.88999997 17.33,3.54999996 L17.33,3.54999996 Z M20.77,11 C21.41,11 21.9,10.41 21.76,9.78999999 C21.5,8.66999999 21.06,7.60999998 20.46,6.66999998 C20.12,6.13999998 19.36,6.05999998 18.91,6.50999998 C18.59,6.82999998 18.51,7.33999998 18.75,7.71999998 C19.24,8.48999999 19.6,9.33999999 19.8,10.25 C19.9,10.7 20.31,11 20.77,11 L20.77,11 Z M5.09999997,6.50999998 C4.63999997,6.05999998 3.88999997,6.12999998 3.54999996,6.66999998 C2.94999996,7.60999998 2.50999996,8.66999999 2.24999996,9.78999999 C2.10999996,10.41 2.58999996,11 3.22999996,11 C3.67999997,11 4.09999997,10.7 4.18999997,10.26 C4.38999997,9.34999999 4.75999997,8.48999999 5.23999997,7.72999998 C5.49999997,7.33999998 5.41999997,6.82999998 5.09999997,6.50999998 Z M3.22999996,13 C2.58999996,13 2.09999996,13.59 2.23999996,14.21 C2.49999996,15.33 2.93999996,16.38 3.53999996,17.33 C3.87999997,17.87 4.63999997,17.94 5.08999997,17.49 C5.40999997,17.17 5.48999997,16.66 5.23999997,16.28 C4.74999997,15.52 4.38999997,14.67 4.18999997,13.75 C4.09999997,13.3 3.68999997,13 3.22999996,13 Z M15,12 C15,10.34 13.66,8.99999999 12,8.99999999 C10.34,8.99999999 8.99999999,10.34 8.99999999,12 C8.99999999,13.66 10.34,15 12,15 C13.66,15 15,13.66 15,12 Z M18.9,17.49 C19.35,17.94 20.11,17.87 20.45,17.34 C21.05,16.4 21.49,15.34 21.75,14.23 C21.89,13.61 21.4,13.02 20.77,13.02 C20.32,13.02 19.9,13.32 19.81,13.76 C19.61,14.67 19.24,15.52 18.76,16.29 C18.5,16.66 18.58,17.17 18.9,17.49 Z M13,20.77 C13,21.41 13.59,21.9 14.21,21.76 C15.33,21.5 16.38,21.06 17.33,20.46 C17.87,20.12 17.94,19.36 17.49,18.91 C17.17,18.59 16.66,18.51 16.28,18.76 C15.52,19.25 14.67,19.61 13.75,19.81 C13.3,19.9 13,20.31 13,20.77 Z M6.66999998,20.45 C7.61999998,21.05 8.66999999,21.49 9.78999999,21.75 C10.41,21.89 11,21.4 11,20.77 C11,20.32 10.7,19.9 10.26,19.81 C9.34999999,19.61 8.48999999,19.24 7.72999998,18.76 C7.33999998,18.52 6.83999998,18.59 6.51999998,18.92 C6.05999998,19.36 6.12999998,20.11 6.66999998,20.45 Z',
      id: 'ImageFilterTiltShiftIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'filter_tilt_shift',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageFilterTiltShiftIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageFilterTiltShiftIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageFilterTiltShiftIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageFilterTiltShiftIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
