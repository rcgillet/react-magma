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
  title: ['satellite'],
  paths: [
    {
      d:
        'M19,2.99999996 L4.99999996,2.99999996 C3.89999997,2.99999996 2.99999996,3.89999997 2.99999996,4.99999996 L2.99999996,19 C2.99999996,20.1 3.89999997,21 4.99999996,21 L19,21 C20.1,21 21,20.1 21,19 L21,4.99999996 C21,3.89999997 20.1,2.99999996 19,2.99999996 Z M4.99999997,4.99999997 L7.99999997,4.99999997 C7.99999997,6.65999998 6.65999998,7.99999997 4.99999997,7.99999997 L4.99999997,4.99999997 Z M4.99999997,10.91 C4.99999997,10.42 5.35999997,10.01 5.84999997,9.92999999 C7.92999998,9.56999999 9.56999999,7.92999998 9.92999999,5.84999997 C10.01,5.35999997 10.42,4.99999997 10.91,4.99999997 C11.52,4.99999997 12,5.52999997 11.91,6.12999998 C11.43,9.08999999 9.09999999,11.43 6.13999998,11.91 C5.53999997,12.01 4.99999997,11.52 4.99999997,10.91 Z M5.62999997,17.19 L8.11999998,13.99 C8.31999998,13.74 8.69999999,13.73 8.89999999,13.98 L11,16.51 L14.1,12.52 C14.3,12.26 14.7,12.26 14.9,12.53 L18.41,17.21 C18.66,17.54 18.42,18.01 18.01,18.01 L6.01999998,18.01 C5.60999997,18 5.36999997,17.52 5.62999997,17.19 Z',
      id: 'MapsSatelliteIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'satellite',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsSatelliteIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsSatelliteIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsSatelliteIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsSatelliteIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
