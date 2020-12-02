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
  title: ['room_service'],
  paths: [
    {
      d:
        'M2.99999996,17 L21,17 C21.55,17 22,17.45 22,18 C22,18.55 21.55,19 21,19 L2.99999996,19 C2.44999996,19 1.99999996,18.55 1.99999996,18 C1.99999996,17.45 2.44999996,17 2.99999996,17 Z M13.84,7.78999998 C13.94,7.54999998 14,7.27999998 14,6.99999997 C14,5.89999997 13.1,4.99999997 12,4.99999997 C10.9,4.99999997 9.99999996,5.89999997 9.99999996,6.99999997 C9.99999996,7.27999998 10.06,7.54999998 10.16,7.78999998 C6.24999998,8.59999999 3.26999996,11.93 2.99999996,16 L21,16 C20.73,11.93 17.75,8.59999999 13.84,7.78999998 Z',
      id: 'PlacesRoomServiceIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'room_service',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesRoomServiceIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesRoomServiceIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesRoomServiceIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesRoomServiceIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
