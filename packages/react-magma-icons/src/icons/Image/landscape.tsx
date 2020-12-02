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
  title: ['landscape'],
  paths: [
    {
      d:
        'M13.2,7.06999998 L10.25,11 L12.5,14 C12.83,14.44 12.74,15.07 12.3,15.4 C11.86,15.73 11.23,15.65 10.9,15.2 C9.84999999,13.8 8.58999999,12.13 7.79999998,11.06 C7.39999998,10.53 6.59999998,10.53 6.19999998,11.06 L2.19999996,16.39 C1.70999996,17.06 2.17999996,18 2.99999996,18 L21,18 C21.82,18 22.29,17.06 21.8,16.4 L14.8,7.06999998 C14.4,6.52999998 13.6,6.52999998 13.2,7.06999998 Z',
      id: 'ImageLandscapeIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'landscape',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageLandscapeIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageLandscapeIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageLandscapeIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageLandscapeIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
