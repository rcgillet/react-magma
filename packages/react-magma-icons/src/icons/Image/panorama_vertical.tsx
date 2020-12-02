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
  title: ['panorama_vertical'],
  paths: [
    {
      d:
        'M19.94,21.12 C18.84,18.18 18.3,15.09 18.3,12 C18.3,8.90999999 18.85,5.81999997 19.94,2.87999996 C19.98,2.76999996 20,2.65999996 20,2.56999996 C20,2.22999996 19.77,1.99999996 19.37,1.99999996 L4.62999997,1.99999996 C4.22999997,1.99999996 3.99999997,2.22999996 3.99999997,2.56999996 C3.99999997,2.66999996 4.01999997,2.76999996 4.05999997,2.87999996 C5.15999997,5.81999997 5.70999997,8.90999999 5.70999997,12 C5.70999997,15.09 5.15999997,18.18 4.06999997,21.12 C4.01999997,21.23 3.99999997,21.34 3.99999997,21.43 C3.99999997,21.76 4.22999997,22 4.62999997,22 L19.38,22 C19.77,22 20.01,21.76 20.01,21.43 C20,21.33 19.98,21.23 19.94,21.12 L19.94,21.12 Z M6.53999998,20 C7.30999998,17.4 7.69999998,14.72 7.69999998,12 C7.69999998,9.27999999 7.30999998,6.59999998 6.53999998,3.99999997 L17.45,3.99999997 C16.68,6.59999998 16.29,9.27999999 16.29,12 C16.29,14.72 16.68,17.4 17.45,20 L6.53999998,20 Z',
      id: 'ImagePanoramaVerticalIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'panorama_vertical',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImagePanoramaVerticalIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImagePanoramaVerticalIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImagePanoramaVerticalIcon-path-1',
        },
      ],
    },
  ],
};

export const ImagePanoramaVerticalIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
