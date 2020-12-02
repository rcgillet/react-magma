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
  title: ['flight'],
  paths: [
    {
      d:
        'M21,14.58 C21,14.22 20.81,13.89 20.51,13.69 L13,8.99999996 L13,3.49999996 C13,2.66999996 12.33,1.99999996 11.5,1.99999996 C10.67,1.99999996 9.99999996,2.66999996 9.99999996,3.49999996 L9.99999996,8.99999996 L2.48999996,13.69 C2.18999996,13.88 1.99999996,14.22 1.99999996,14.58 C1.99999996,15.28 2.67999996,15.79 3.35999996,15.58 L9.99999996,13.5 L9.99999996,19 L8.19999998,20.35 C8.06999998,20.44 7.99999996,20.59 7.99999996,20.75 L7.99999996,21.34 C7.99999996,21.67 8.31999998,21.91 8.63999999,21.82 L11.5,21 L14.36,21.82 C14.68,21.91 15,21.67 15,21.34 L15,20.75 C15,20.59 14.93,20.44 14.8,20.35 L13,19 L13,13.5 L19.64,15.58 C20.32,15.79 21,15.28 21,14.58 Z',
      id: 'MapsFlightIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'flight',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'MapsFlightIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#MapsFlightIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#MapsFlightIcon-path-1',
        },
      ],
    },
  ],
};

export const MapsFlightIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
