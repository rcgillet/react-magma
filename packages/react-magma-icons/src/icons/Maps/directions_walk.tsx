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
  title: ['directions_walk'],
  paths: [
    {
      d:
        'M13.5,5.49999996 C14.6,5.49999996 15.5,4.59999997 15.5,3.49999996 C15.5,2.39999996 14.6,1.49999996 13.5,1.49999996 C12.4,1.49999996 11.5,2.39999996 11.5,3.49999996 C11.5,4.59999997 12.4,5.49999996 13.5,5.49999996 Z M9.79999999,8.89999999 L7.23999998,21.81 C7.10999998,22.42 7.58999998,23 8.21999998,23 L8.29999998,23 C8.76999999,23 9.16999999,22.68 9.27999999,22.22 L10.9,15 L13,17 L13,22 C13,22.55 13.45,23 14,23 C14.55,23 15,22.55 15,22 L15,16.36 C15,15.81 14.78,15.29 14.38,14.91 L12.9,13.5 L13.5,10.5 C14.57,11.74 16.12,12.63 17.86,12.91 C18.46,13 19,12.52 19,11.91 C19,11.42 18.64,11.01 18.15,10.93 C16.63,10.68 15.37,9.77999999 14.7,8.59999999 L13.7,6.99999998 C13.14,6.10999998 12.02,5.74999997 11.05,6.15999998 L7.21999998,7.77999998 C6.47999998,8.09999998 5.99999997,8.81999999 5.99999997,9.62999999 L5.99999997,12 C5.99999997,12.55 6.44999998,13 6.99999997,13 C7.54999998,13 7.99999997,12.55 7.99999997,12 L7.99999997,9.59999999 L9.79999999,8.89999999',
      id: 'MapsDirectionsWalkIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions_walk',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsDirectionsWalkIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsDirectionsWalkIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsDirectionsWalkIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsDirectionsWalkIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
