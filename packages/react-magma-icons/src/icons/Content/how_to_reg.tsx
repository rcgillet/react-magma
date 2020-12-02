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
  title: ['how_to_reg'],
  paths: [
    {
      d:
        'M21.31,13.2 L21.32,13.21 C21.7,13.6 21.7,14.22 21.32,14.6 L16.18,19.78 C15.79,20.17 15.15,20.17 14.76,19.78 L12.69,17.69 C12.31,17.3 12.31,16.68 12.69,16.3 L12.7,16.29 C13.09,15.9 13.72,15.9 14.1,16.29 L15.47,17.66 L19.9,13.2 C20.29,12.81 20.92,12.81 21.31,13.2 Z M11,14 C11.32,14 11.61,14.02 12,14.06 L12,14.06 L11.16,14.88 C9.96999999,16.04 9.95999999,17.96 11.14,19.14 L11.14,19.14 L12,20 L2.99999996,20 L2.99999996,18 C2.99999996,15.34 8.32999998,14 11,14 Z M11,3.99999997 C13.21,3.99999997 15,5.78999997 15,7.99999997 C15,10.21 13.21,12 11,12 C8.78999999,12 6.99999998,10.21 6.99999998,7.99999997 C6.99999998,5.78999997 8.78999999,3.99999997 11,3.99999997 Z',
      id: 'ContentHowToRegIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'how_to_reg',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'ContentHowToRegIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#ContentHowToRegIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#ContentHowToRegIcon-path-1',
        },
      ],
    },
  ],
};

export const ContentHowToRegIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
