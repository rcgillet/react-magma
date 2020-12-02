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
  title: ['backpack'],
  paths: [
    {
      d:
        'M20,7.99999996 L20,20 C20,21.1 19.1,22 18,22 L5.99999997,22 C4.89999997,22 3.99999997,21.1 3.99999997,20 L3.99999997,7.99999996 C3.99999997,6.13999998 5.27999997,4.58999997 6.99999997,4.13999997 L6.99999997,3.49999996 C6.99999997,2.66999996 7.66999998,1.99999996 8.49999997,1.99999996 L8.49999997,1.99999996 C9.32999999,1.99999996 9.99999997,2.66999996 9.99999997,3.49999996 L9.99999997,3.99999996 L14,3.99999996 L14,3.49999996 C14,2.66999996 14.67,1.99999996 15.5,1.99999996 L15.5,1.99999996 C16.33,1.99999996 17,2.66999996 17,3.49999996 L17,4.13999997 C18.72,4.58999997 20,6.13999998 20,7.99999996 Z M5.99999998,13 L5.99999998,13 C5.99999998,13.55 6.44999998,14 6.99999998,14 L16,14 L16,15 C16,15.55 16.45,16 17,16 L17,16 C17.55,16 18,15.55 18,15 L18,13 C18,12.45 17.55,12 17,12 L6.99999998,12 C6.44999998,12 5.99999998,12.45 5.99999998,13 Z',
      id: 'PlacesBackpackIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'backpack',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesBackpackIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesBackpackIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesBackpackIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesBackpackIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
