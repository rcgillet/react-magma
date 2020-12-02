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
  title: ['restaurant'],
  paths: [
    {
      d:
        'M16,5.99999998 L16,12 C16,13.1 16.9,14 18,14 L19,14 L19,21 C19,21.55 19.45,22 20,22 C20.55,22 21,21.55 21,21 L21,3.12999996 C21,2.47999996 20.39,1.99999996 19.76,2.14999996 C17.6,2.67999996 16,4.50999997 16,5.99999998 Z M11,8.99999996 L8.99999996,8.99999996 L8.99999996,2.99999996 C8.99999996,2.44999996 8.54999999,1.99999996 7.99999996,1.99999996 C7.44999998,1.99999996 6.99999996,2.44999996 6.99999996,2.99999996 L6.99999996,8.99999996 L4.99999996,8.99999996 L4.99999996,2.99999996 C4.99999996,2.44999996 4.54999997,1.99999996 3.99999996,1.99999996 C3.44999996,1.99999996 2.99999996,2.44999996 2.99999996,2.99999996 L2.99999996,8.99999996 C2.99999996,11.21 4.78999997,13 6.99999996,13 L6.99999996,21 C6.99999996,21.55 7.44999998,22 7.99999996,22 C8.54999999,22 8.99999996,21.55 8.99999996,21 L8.99999996,13 C11.21,13 13,11.21 13,8.99999996 L13,2.99999996 C13,2.44999996 12.55,1.99999996 12,1.99999996 C11.45,1.99999996 11,2.44999996 11,2.99999996 L11,8.99999996 Z',
      id: 'MapsRestaurantIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'restaurant',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsRestaurantIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsRestaurantIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsRestaurantIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsRestaurantIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
