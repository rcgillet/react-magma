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
  title: ['directions_car'],
  paths: [
    {
      d:
        'M18.92,6.00999998 C18.72,5.41999997 18.16,4.99999997 17.5,4.99999997 L6.49999996,4.99999997 C5.83999997,4.99999997 5.28999997,5.41999997 5.07999997,6.00999998 L3.10999996,11.68 C3.03999996,11.89 2.99999996,12.11 2.99999996,12.34 L2.99999996,19.5 C2.99999996,20.33 3.66999997,21 4.49999996,21 C5.32999997,21 5.99999996,20.33 5.99999996,19.5 L5.99999996,19 L18,19 L18,19.5 C18,20.32 18.67,21 19.5,21 C20.32,21 21,20.33 21,19.5 L21,12.34 C21,12.12 20.96,11.89 20.89,11.68 L18.92,6.00999998 Z M6.49999997,16 C5.66999997,16 4.99999997,15.33 4.99999997,14.5 C4.99999997,13.67 5.66999997,13 6.49999997,13 C7.32999998,13 7.99999997,13.67 7.99999997,14.5 C7.99999997,15.33 7.32999998,16 6.49999997,16 Z M17.5,16 C16.67,16 16,15.33 16,14.5 C16,13.67 16.67,13 17.5,13 C18.33,13 19,13.67 19,14.5 C19,15.33 18.33,16 17.5,16 Z M4.99999997,11 L6.26999998,7.17999998 C6.40999998,6.77999998 6.78999998,6.49999998 7.21999998,6.49999998 L16.78,6.49999998 C17.21,6.49999998 17.59,6.77999998 17.73,7.17999998 L19,11 L4.99999997,11 Z',
      id: 'MapsDirectionsCarIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'directions_car',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsDirectionsCarIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsDirectionsCarIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsDirectionsCarIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsDirectionsCarIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
