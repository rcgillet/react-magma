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
  title: ['beach_access'],
  paths: [
    {
      d:
        'M13.13,14.56 L14.56,13.13 L20.29,18.86 C20.68,19.25 20.68,19.89 20.29,20.29 C19.9,20.68 19.26,20.68 18.86,20.29 L13.13,14.56 L13.13,14.56 Z M17.42,8.82999999 L18.69,7.55999998 C19.58,6.66999998 19.46,5.12999997 18.38,4.47999997 C14.49,2.09999996 9.34999999,2.58999996 5.97999997,5.94999997 C9.90999999,4.64999997 14.29,5.69999997 17.42,8.82999999 Z M5.94999997,5.97999997 C2.58999996,9.34999999 2.09999996,14.49 4.46999997,18.38 C5.12999997,19.46 6.65999998,19.59 7.54999998,18.69 L8.81999999,17.42 C5.69999997,14.29 4.64999997,9.90999999 5.94999997,5.97999997 Z M5.96999997,5.95999997 L5.95999997,5.96999997 C5.57999997,8.97999999 7.12999998,12.85 10.26,15.99 L15.99,10.26 C12.86,7.12999998 8.97999999,5.57999997 5.96999997,5.95999997 Z',
      id: 'PlacesBeachAccessIcon-path-1',
    },
  ],
  polygons: [],
  groups: [
    {
      id: 'beach_access',
      stroke: 'none',
      strokeWidth: '1',
      fill: 'none',
      fillRule: 'evenodd',
      masks: [
        {
          id: 'PlacesBeachAccessIcon-mask-2',
          fill: 'white',
          uses: [
            {
              xlinkHref: '#PlacesBeachAccessIcon-path-1',
            },
          ],
        },
      ],
      uses: [
        {
          id: 'Combined-Shape',
          fill: '#000000',
          xlinkHref: '#PlacesBeachAccessIcon-path-1',
        },
      ],
    },
  ],
};

export const PlacesBeachAccessIcon: React.FunctionComponent<IconProps> = (
  props: IconProps
) => renderIcon(props, iconType);
