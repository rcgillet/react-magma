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
  title: ['no_drinks'],
  paths: [
    {
      d:
        'M20.49,20.49 L3.50999996,3.50999996 C3.11999996,3.11999996 2.48999996,3.11999996 2.09999996,3.50999996 C1.70999996,3.89999997 1.70999996,4.52999997 2.09999996,4.91999997 L9.63999999,12.46 L11,14 L11,19 L6.99999998,19 C6.44999998,19 5.99999997,19.45 5.99999997,20 C5.99999997,20.55 6.44999998,21 6.99999998,21 L17,21 C17.32,21 17.59,20.84 17.78,20.6 L19.08,21.9 C19.47,22.29 20.1,22.29 20.49,21.9 C20.88,21.51 20.88,20.88 20.49,20.49 Z M13,19 L13,15.83 L16.17,19 L13,19 Z M7.82999997,4.99999996 L5.82999997,2.99999996 L19.55,2.99999996 C20.35,2.99999996 21,3.64999997 21,4.44999997 C21,4.79999997 20.87,5.14999997 20.63,5.40999997 L14.8,11.97 L9.82999997,6.99999996 L16.57,6.99999996 L18.35,4.99999996 L7.82999997,4.99999996 Z',
      id: 'PlacesNoDrinksIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'no_drinks',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesNoDrinksIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesNoDrinksIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesNoDrinksIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesNoDrinksIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
