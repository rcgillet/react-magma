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
  title: ['east'],
  paths: [
    {
      d:
        'M14.29,5.70999997 L14.29,5.70999997 C13.9,6.09999998 13.9,6.72999998 14.29,7.11999998 L18.17,11 L2.99999996,11 C2.44999996,11 1.99999996,11.45 1.99999996,12 L1.99999996,12 C1.99999996,12.55 2.44999996,13 2.99999996,13 L18.18,13 L14.3,16.88 C13.91,17.27 13.91,17.9 14.3,18.29 L14.3,18.29 C14.69,18.68 15.32,18.68 15.71,18.29 L21.3,12.7 C21.69,12.31 21.69,11.68 21.3,11.29 L15.7,5.70999997 C15.32,5.31999997 14.68,5.31999997 14.29,5.70999997 Z',
      id: 'NavigationEastIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'east',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationEastIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationEastIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationEastIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationEastIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
