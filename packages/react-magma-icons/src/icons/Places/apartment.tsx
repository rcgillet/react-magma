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
  title: ['apartment'],
  paths: [
    {
      d:
        'M17,11 L17,4.99999996 C17,3.89999997 16.1,2.99999996 15,2.99999996 L8.99999996,2.99999996 C7.89999998,2.99999996 6.99999996,3.89999997 6.99999996,4.99999996 L6.99999996,6.99999996 L4.99999996,6.99999996 C3.89999997,6.99999996 2.99999996,7.89999998 2.99999996,8.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L9.99999996,21 C10.55,21 11,20.55 11,20 L11,17 L13,17 L13,20 C13,20.55 13.45,21 14,21 L19,21 C20.1,21 21,20.1 21,19 L21,13 C21,11.9 20.1,11 19,11 L17,11 Z M6.99999997,19 L4.99999997,19 L4.99999997,17 L6.99999997,17 L6.99999997,19 Z M6.99999997,15 L4.99999997,15 L4.99999997,13 L6.99999997,13 L6.99999997,15 Z M6.99999997,11 L4.99999997,11 L4.99999997,8.99999999 L6.99999997,8.99999999 L6.99999997,11 Z M11,15 L8.99999999,15 L8.99999999,13 L11,13 L11,15 Z M11,11 L8.99999999,11 L8.99999999,8.99999999 L11,8.99999999 L11,11 Z M11,6.99999997 L8.99999999,6.99999997 L8.99999999,4.99999997 L11,4.99999997 L11,6.99999997 Z M15,15 L13,15 L13,13 L15,13 L15,15 Z M15,11 L13,11 L13,8.99999999 L15,8.99999999 L15,11 Z M15,6.99999997 L13,6.99999997 L13,4.99999997 L15,4.99999997 L15,6.99999997 Z M19,19 L17,19 L17,17 L19,17 L19,19 Z M19,15 L17,15 L17,13 L19,13 L19,15 Z',
      id: 'PlacesApartmentIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'apartment',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesApartmentIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesApartmentIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesApartmentIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesApartmentIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
