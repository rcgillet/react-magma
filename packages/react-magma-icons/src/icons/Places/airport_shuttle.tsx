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
  title: ['airport_shuttle'],
  paths: [
    {
      d:
        'M22.41,10.41 L17.58,5.57999997 C17.21,5.20999997 16.7,4.99999997 16.17,4.99999997 L2.99999995,4.99999997 C1.89999996,4.99999997 0.999999954,5.88999997 0.999999954,6.99999997 L0.999999954,14 C0.999999954,15.1 1.89999996,16 2.99999995,16 C2.99999995,17.66 4.33999997,19 5.99999995,19 C7.65999998,19 8.99999995,17.66 8.99999995,16 L15,16 C15,17.66 16.34,19 18,19 C19.66,19 21,17.66 21,16 C22.1,16 23,15.1 23,14 L23,11.83 C23,11.3 22.79,10.79 22.41,10.41 Z M2.99999996,9.99999998 L2.99999996,7.99999998 C2.99999996,7.44999998 3.44999996,6.99999998 3.99999996,6.99999998 L6.99999996,6.99999998 L6.99999996,11 L3.99999996,11 C3.44999996,11 2.99999996,10.55 2.99999996,9.99999998 Z M5.99999997,17.25 C5.30999997,17.25 4.74999997,16.69 4.74999997,16 C4.74999997,15.31 5.30999997,14.75 5.99999997,14.75 C6.68999998,14.75 7.24999997,15.31 7.24999997,16 C7.24999997,16.69 6.68999998,17.25 5.99999997,17.25 Z M13,11 L8.99999999,11 L8.99999999,6.99999998 L13,6.99999998 L13,11 Z M18,17.25 C17.31,17.25 16.75,16.69 16.75,16 C16.75,15.31 17.31,14.75 18,14.75 C18.69,14.75 19.25,15.31 19.25,16 C19.25,16.69 18.69,17.25 18,17.25 Z M15,11 L15,6.99999998 L16,6.99999998 L20,11 L15,11 Z',
      id: 'PlacesAirportShuttleIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'airport_shuttle',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesAirportShuttleIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesAirportShuttleIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesAirportShuttleIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesAirportShuttleIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
