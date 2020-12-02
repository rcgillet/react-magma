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
  title: ['local_dining'],
  paths: [
    {
      d:
        'M8.09999998,13.34 L10.93,10.51 L4.73999997,4.32999997 C4.25999997,3.84999997 3.42999996,3.97999997 3.12999996,4.59999997 C2.41999996,6.08999998 2.67999996,7.91999998 3.90999997,9.15999999 L8.09999998,13.34 Z M14.88,11.53 C16.41,12.24 18.56,11.74 20.15,10.15 C22.06,8.23999998 22.43,5.49999997 20.96,4.02999997 C19.5,2.56999996 16.76,2.92999996 14.84,4.83999997 C13.25,6.42999998 12.75,8.57999999 13.46,10.11 L4.40999997,19.16 C4.01999997,19.55 4.01999997,20.18 4.40999997,20.57 C4.79999997,20.96 5.42999997,20.96 5.81999997,20.57 L12,14.41 L18.18,20.59 C18.57,20.98 19.2,20.98 19.59,20.59 C19.98,20.2 19.98,19.57 19.59,19.18 L13.41,13 L14.88,11.53 Z',
      id: 'MapsLocalDiningIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'local_dining',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsLocalDiningIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsLocalDiningIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsLocalDiningIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsLocalDiningIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
