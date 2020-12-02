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
  title: ['square_foot'],
  paths: [
    {
      d:
        'M17.66,17.66 L16.95,18.37 C16.75,18.57 16.44,18.57 16.24,18.37 L16.24,18.37 C16.04,18.17 16.04,17.86 16.24,17.66 L16.95,16.95 L15.01,15.01 L14.3,15.72 C14.1,15.92 13.79,15.92 13.59,15.72 L13.59,15.72 C13.39,15.52 13.39,15.21 13.59,15.01 L14.3,14.3 L12.36,12.36 L11.65,13.07 C11.45,13.27 11.14,13.27 10.94,13.07 L10.94,13.07 C10.74,12.87 10.74,12.56 10.94,12.36 L11.65,11.65 L9.69999999,9.69999999 L8.98999999,10.41 C8.78999999,10.61 8.47999999,10.61 8.27999998,10.41 L8.27999998,10.41 C8.07999998,10.21 8.07999998,9.89999999 8.27999998,9.69999999 L8.98999999,8.98999999 L7.04999998,7.04999998 L6.33999998,7.75999998 C6.13999998,7.95999998 5.82999997,7.95999998 5.62999997,7.75999998 L5.62999997,7.75999998 C5.42999997,7.55999998 5.42999997,7.24999998 5.62999997,7.04999998 L6.33999998,6.33999998 L4.84999997,4.84999997 C4.53999997,4.53999997 3.99999997,4.75999997 3.99999997,5.20999997 L3.99999997,18 C3.99999997,19.1 4.89999997,20 5.99999997,20 L18.79,20 C19.24,20 19.46,19.46 19.14,19.15 L17.66,17.66 Z M6.99999998,16 L6.99999998,11.24 L12.76,17 L7.99999998,17 C7.44999998,17 6.99999998,16.55 6.99999998,16 Z',
      id: 'ContentSquareFootIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'square_foot',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentSquareFootIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentSquareFootIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentSquareFootIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentSquareFootIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
