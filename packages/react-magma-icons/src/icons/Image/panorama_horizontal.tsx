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
  title: ['panorama_horizontal'],
  paths: [
    {
      d:
        'M20,6.53999998 L20,17.45 C17.4,16.68 14.72,16.29 12,16.29 C9.27999999,16.29 6.59999998,16.68 3.99999997,17.45 L3.99999997,6.53999998 C6.59999998,7.30999998 9.27999999,7.69999998 12,7.69999998 C14.72,7.70999998 17.4,7.31999998 20,6.53999998 M21.43,3.99999997 C21.33,3.99999997 21.23,4.01999997 21.12,4.05999997 C18.18,5.15999997 15.09,5.69999997 12,5.69999997 C8.90999999,5.69999997 5.81999997,5.14999997 2.87999996,4.05999997 C2.76999996,4.01999997 2.65999996,3.99999997 2.56999996,3.99999997 C2.22999996,3.99999997 1.99999996,4.22999997 1.99999996,4.62999997 L1.99999996,19.38 C1.99999996,19.77 2.22999996,20 2.56999996,20 C2.66999996,20 2.76999996,19.98 2.87999996,19.94 C5.81999997,18.84 8.90999999,18.3 12,18.3 C15.09,18.3 18.18,18.85 21.12,19.94 C21.23,19.98 21.33,20 21.43,20 C21.76,20 22,19.77 22,19.37 L22,4.62999997 C22,4.22999997 21.76,3.99999997 21.43,3.99999997 Z',
      id: 'ImagePanoramaHorizontalIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'panorama_horizontal',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImagePanoramaHorizontalIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImagePanoramaHorizontalIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImagePanoramaHorizontalIcon-path-1',
        },
      ],
    },
  ],
};

export const ImagePanoramaHorizontalIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
