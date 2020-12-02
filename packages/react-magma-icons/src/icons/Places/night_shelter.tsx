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
  title: ['night_shelter'],
  paths: [
    {
      d:
        'M10.8,3.89999997 L4.79999997,8.39999999 C4.29999997,8.77999999 3.99999997,9.36999999 3.99999997,9.99999999 L3.99999997,19 C3.99999997,20.1 4.89999997,21 5.99999997,21 L18,21 C19.1,21 20,20.1 20,19 L20,9.99999999 C20,9.36999999 19.7,8.77999999 19.2,8.39999999 L13.2,3.89999997 C12.49,3.36999996 11.51,3.36999996 10.8,3.89999997 Z M9.74999999,12.5 C10.44,12.5 11,13.06 11,13.75 C11,14.44 10.44,15 9.74999999,15 C9.05999999,15 8.49999999,14.44 8.49999999,13.75 C8.49999999,13.06 9.05999999,12.5 9.74999999,12.5 Z M16.5,18 L16.5,18 C16.22,18 16,17.78 16,17.5 L16,16.5 L7.99999998,16.5 L7.99999998,17.5 C7.99999998,17.78 7.77999998,18 7.49999998,18 L7.49999998,18 C7.21999998,18 6.99999998,17.78 6.99999998,17.5 L6.99999998,11.5 C6.99999998,11.22 7.21999998,11 7.49999998,11 L7.49999998,11 C7.77999998,11 7.99999998,11.22 7.99999998,11.5 L7.99999998,15.5 L11.5,15.5 L11.5,12.5 C11.5,12.22 11.72,12 12,12 L15,12 C16.1,12 17,12.9 17,14 L17,17.5 C17,17.78 16.78,18 16.5,18 Z',
      id: 'PlacesNightShelterIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'night_shelter',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesNightShelterIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesNightShelterIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesNightShelterIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesNightShelterIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
