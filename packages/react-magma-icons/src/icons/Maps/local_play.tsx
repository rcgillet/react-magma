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
  title: ['local_play'],
  paths: [
    {
      d:
        'M20,12 C20,11.24 20.43,10.58 21.06,10.24 C21.66,9.90999999 22,9.22999999 22,8.53999999 L22,5.99999997 C22,4.89999997 21.1,3.99999997 20,3.99999997 L3.99999996,3.99999997 C2.89999996,3.99999997 2.00999996,4.88999997 2.00999996,5.98999997 L2.00999996,8.53999999 C2.00999996,9.22999999 2.33999996,9.90999999 2.94999996,10.23 C3.57999996,10.58 3.99999996,11.24 3.99999996,12 C3.99999996,12.76 3.56999996,13.43 2.93999996,13.76 C2.33999996,14.09 1.99999996,14.77 1.99999996,15.46 L1.99999996,17.71 C1.99999996,19.1 2.89999996,20 3.99999996,20 L20,20 C21.1,20 22,19.1 22,18 L22,15.46 C22,14.77 21.66,14.09 21.06,13.76 C20.43,13.42 20,12.76 20,12 Z M14.5,16.1 L12,14.5 L9.49999999,16.11 C9.11999999,16.35 8.62999999,16 8.74999999,15.56 L9.49999999,12.68 L7.19999998,10.8 C6.84999998,10.51 7.02999998,9.93999999 7.48999998,9.90999999 L10.45,9.73999999 L11.53,6.98999998 C11.7,6.56999998 12.3,6.56999998 12.46,6.98999998 L13.54,9.74999999 L16.5,9.91999999 C16.95,9.94999999 17.14,10.52 16.79,10.81 L14.49,12.69 L15.25,15.55 C15.37,16 14.88,16.35 14.5,16.1 Z',
      id: 'MapsLocalPlayIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_play',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalPlayIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalPlayIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalPlayIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalPlayIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
