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
  title: ['south_east'],
  paths: [
    {
      d:
        'M18,8.99999999 L18,8.99999999 C17.44,8.99999999 17,9.44999999 17,9.99999999 L17,15.59 L6.11999998,4.69999997 C5.72999997,4.30999997 5.09999997,4.30999997 4.70999997,4.69999997 L4.70999997,4.69999997 C4.31999997,5.08999997 4.31999997,5.71999997 4.70999997,6.10999998 L15.59,17 L9.99999999,17 C9.44999999,17 8.99999999,17.45 8.99999999,18 L8.99999999,18 C8.99999999,18.55 9.44999999,19 9.99999999,19 L18,19 C18.55,19 19,18.55 19,18 L19,9.99999999 C19,9.44999999 18.55,8.99999999 18,8.99999999 Z',
      id: 'NavigationSouthEastIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'south_east',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'NavigationSouthEastIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#NavigationSouthEastIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#NavigationSouthEastIcon-path-1',
        },
      ],
    },
  ],
};

export const NavigationSouthEastIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
