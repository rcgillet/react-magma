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
  title: ['fire_extinguisher'],
  paths: [
    {
      d:
        'M6.99999998,19 L17,19 L17,20 C17,21.1 16.1,22 15,22 L8.99999998,22 C7.89999998,22 6.99999998,21.1 6.99999998,20 L6.99999998,19 Z M6.99999998,18 L17,18 L17,13 L6.99999998,13 L6.99999998,18 Z M17,4.22999997 L17,7.76999998 C17,8.39999999 16.42,8.87999999 15.79,8.74999999 L13.85,8.33999998 C13.85,8.35999998 13.85,8.34999998 13.84,8.36999998 C15.38,8.98999999 16.55,10.35 16.9,12 L7.09999998,12 C7.43999998,10.34 8.61999999,8.97999999 10.17,8.35999998 C9.83999999,8.09999998 9.56999999,7.77999998 9.36999999,7.40999998 L5.48999997,6.59999998 C5.19999997,6.53999998 4.99999997,6.28999998 4.99999997,5.99999996 L4.99999997,5.99999996 C4.99999997,5.70999997 5.19999997,5.45999997 5.48999997,5.39999997 L9.36999999,4.58999997 C9.86999999,3.64999997 10.86,2.99999996 12,2.99999996 C12.7,2.99999996 13.34,3.24999996 13.85,3.65999997 L15.79,3.24999996 C16.42,3.11999996 17,3.59999997 17,4.22999997 Z M13,5.99999997 C12.97,5.40999997 12.55,4.99999997 12,4.99999997 C11.45,4.99999997 11,5.44999997 11,5.99999997 C11,6.54999998 11.45,6.99999997 12,6.99999997 C12.55,6.99999997 13,6.54999998 13,5.99999997 Z',
      id: 'PlacesFireExtinguisherIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'fire_extinguisher',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesFireExtinguisherIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesFireExtinguisherIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesFireExtinguisherIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesFireExtinguisherIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
