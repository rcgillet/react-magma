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
  title: ['image'],
  paths: [
    {
      d:
        'M21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 Z M8.89999999,13.98 L11,16.51 L14.1,12.52 C14.3,12.26 14.7,12.26 14.9,12.53 L18.41,17.21 C18.66,17.54 18.42,18.01 18.01,18.01 L6.01999998,18.01 C5.59999997,18.01 5.36999997,17.53 5.62999997,17.2 L8.11999998,14 C8.30999998,13.74 8.68999999,13.73 8.89999999,13.98 Z',
      id: 'ImageImageIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'image',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ImageImageIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ImageImageIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ImageImageIcon-path-1',
        },
      ],
    },
  ],
};

export const ImageImageIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
