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
  title: ['child_friendly'],
  paths: [
    {
      d:
        'M13,3.07999996 L13,9.99999999 L21,9.99999999 C21,5.96999997 18.02,2.62999996 14.14,2.07999996 C13.54,1.98999996 13,2.46999996 13,3.07999996 Z M19.32,15.89 C20.37,14.54 21,12.84 21,11 L6.43999998,11 L5.75999997,9.56999999 C5.59999997,9.21999999 5.23999997,8.99999999 4.85999997,8.99999999 L2.99999996,8.99999999 C2.44999996,8.99999999 1.99999996,9.44999999 1.99999996,9.99999999 C1.99999996,10.55 2.44999996,11 2.99999996,11 L4.21999997,11 C4.21999997,11 6.10999998,15.07 6.33999998,15.42 C5.00999997,16.13 4.19999997,17.69 4.59999997,19.36 C4.89999997,20.62 5.93999997,21.63 7.19999998,21.91 C9.29999999,22.37 11.18,20.95 11.45,19 L13.53,19 C13.8,20.94 15.67,22.36 17.75,21.92 C19.02,21.65 20.06,20.65 20.38,19.39 C20.73,18 20.24,16.71 19.32,15.89 Z M7.99999998,20 C7.16999998,20 6.49999998,19.33 6.49999998,18.5 C6.49999998,17.67 7.16999998,17 7.99999998,17 C8.82999999,17 9.49999998,17.67 9.49999998,18.5 C9.49999998,19.33 8.82999999,20 7.99999998,20 Z M17,20 C16.17,20 15.5,19.33 15.5,18.5 C15.5,17.67 16.17,17 17,17 C17.83,17 18.5,17.67 18.5,18.5 C18.5,19.33 17.83,20 17,20 Z',
      id: 'PlacesChildFriendlyIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'child_friendly',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesChildFriendlyIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesChildFriendlyIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesChildFriendlyIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesChildFriendlyIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
