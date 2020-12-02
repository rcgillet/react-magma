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
  title: ['image_not_supported'],
  paths: [
    {
      d:
        'M21.19,21.19 L20.41,20.41 L18,18 L13.41,13.41 L3.58999996,3.58999996 L3.58999996,3.58999996 L2.80999996,2.80999996 C2.41999996,2.41999996 1.78999996,2.41999996 1.39999996,2.80999996 C0.999999954,3.19999996 0.999999954,3.82999997 1.38999996,4.21999997 L2.99999996,5.82999997 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999997,21 L18.17,21 L19.78,22.61 C20.17,23 20.8,23 21.19,22.61 C21.58,22.22 21.58,21.58 21.19,21.19 Z M6.01999998,18 C5.59999997,18 5.36999997,17.52 5.62999997,17.19 L8.11999998,13.99 C8.31999998,13.74 8.69999999,13.73 8.89999999,13.98 L11,16.51 L12.17,15 L15.17,18 L6.01999998,18 Z M21,18.17 L5.82999997,2.99999996 L19,2.99999996 C20.1,2.99999996 21,3.89999997 21,4.99999996 L21,18.17 Z',
      id: 'ImageImageNotSupportedIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'image_not_supported',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageImageNotSupportedIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageImageNotSupportedIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageImageNotSupportedIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageImageNotSupportedIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
